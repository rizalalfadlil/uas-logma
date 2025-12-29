import { formatRp } from "./functions";

type mal = "emas" | "perak" | "uang" | "kambing" | "sapi" | "pertanian";
const fitrah = {
  harga_beras: 20000,
  berat: 2.5,
};

const cekFitrah = (jiwa: number) => {
  return jiwa * fitrah.harga_beras * 2.5;
};
const kurs = {
  emas: 2321000,
  perak: 156000,
  kambing: 3000000,
  sapi: 15000000,
  pertanian: 100000,

};
const mal = {
  nisab: {
    emas: 85,
    perak: 595,
    uang: kurs.emas * 85,
    kambing: 40,
    sapi: 30,
    pertanian: 653,
    haul: 1,
  },
  kadar: {
    umum: 0.025,
    pertanian: {
      alami: 0.1,
      berbayar: 0.05,
    },
    rikaz: {
      temuan: 0.2,
      tambang: 0.025,
    },
  },
};

const cekMal = ({
  zakat,
}: {
  zakat: {
    emas: number;
    perak: number;
    uang: number;
    kambing: number;
    sapi: number;
    pertanian: {
      nilai: number;
      berbayar: boolean;
    };
    temuan: number;
    tambang: number;
  };
}) => {
  const hitung = {
    emas:
      mal.nisab.emas <= zakat.emas
        ? zakat.emas * kurs.emas * mal.kadar.umum
        : 0,
    perak:
      mal.nisab.perak <= zakat.perak
        ? zakat.perak * kurs.perak * mal.kadar.umum
        : 0,
    uang: mal.nisab.uang <= zakat.uang ? zakat.uang * mal.kadar.umum : 0,
    kambing:
      mal.nisab.kambing <= zakat.kambing
        ? zakat.kambing * kurs.kambing * mal.kadar.umum
        : 0,
    sapi:
      mal.nisab.sapi <= zakat.sapi
        ? zakat.sapi * kurs.sapi * mal.kadar.umum
        : 0,
    pertanian:
      mal.nisab.pertanian <= zakat.pertanian.nilai
        ? zakat.pertanian.nilai * kurs.pertanian *
          (zakat.pertanian.berbayar
            ? mal.kadar.pertanian.berbayar
            : mal.kadar.pertanian.alami)
        : 0,
    temuan:
      mal.nisab.haul <= zakat.temuan
        ? zakat.temuan * mal.kadar.rikaz.temuan
        : 0,
    tambang:
      mal.nisab.haul <= zakat.tambang
        ? zakat.tambang * mal.kadar.rikaz.tambang
        : 0,
  };
  const total = Object.values(hitung).reduce((a, b) => a + b, 0);
  const keterangan = {
    emas: `untuk wajib membayar zakat emas harus memiliki setidaknya ${
      mal.nisab.emas
    }gram emas dan haul ${
      mal.nisab.haul
    } tahun, zakat yang wajib dibayarkan sebesar ${mal.kadar.umum * 100}%`,

    perak: `untuk wajib membayar zakat perak harus memiliki setidaknya ${
      mal.nisab.perak
    } gram perak dan haul ${
      mal.nisab.haul
    } tahun, zakat yang wajib dibayarkan sebesar ${mal.kadar.umum * 100}%`,
    uang: `untuk wajib membayar zakat uang harus memiliki setidaknya ${
      formatRp(mal.nisab.uang)
    } uang dan haul ${
      mal.nisab.haul
    } tahun, zakat yang wajib dibayarkan sebesar ${mal.kadar.umum * 100}%`,
    kambing: `untuk wajib membayar zakat kambing harus memiliki setidaknya ${
      mal.nisab.kambing
    } ekor kambing dan haul ${
      mal.nisab.haul
    } tahun, zakat yang wajib dibayarkan sebesar ${mal.kadar.umum * 100}%`,
    sapi: `untuk wajib membayar zakat sapi harus memiliki setidaknya ${
      mal.nisab.sapi
    } ekor sapi dan haul ${
      mal.nisab.haul
    } tahun, zakat yang wajib dibayarkan sebesar ${mal.kadar.umum * 100}%`,
    pertanian: `untuk wajib membayar zakat pertanian harus memiliki setidaknya ${
      mal.nisab.pertanian
    } nilai pertanian dan haul ${
      mal.nisab.haul
    } tahun, zakat yang wajib dibayarkan sebesar ${
      mal.kadar.pertanian.alami * 100
    }% jika pertanian alami dan ${
      mal.kadar.pertanian.berbayar * 100
    }% jika pertanian berbayar`,
    temuan: `zakat rikaz yang wajib dibayarkan adalah sebesar ${
      mal.kadar.rikaz.tambang * 100
    }% untuk tambang`,
    tambang: `zakat rikaz yang wajib dibayarkan adalah sebesar ${
      mal.kadar.rikaz.temuan * 100
    }% untuk temuan`,
  };
  const persyaratan = {
    terpenuhi: Object.entries(hitung)
      .filter(([_, value]) => value > 0)
      .map(([key, _]) => `${keterangan[key as keyof typeof keterangan]}`),
    belumTerpenuhi: Object.entries(hitung)
      .filter(([_, value]) => value == 0)
      .map(([key, _]) => `${keterangan[key as keyof typeof keterangan]}`),
  };
  return {
    hitung,
    persyaratan,
    total,
  };
};

function hitungDistribusiZakat(total: number, mustahik: string[]) {
  if (total <= 0 || mustahik.length === 0) {
    return { sah: false, pesan: "Data input tidak lengkap." };
  }
  const pilihAmil = mustahik.includes("amil");
  const pilihPrioritas =
    mustahik.includes("fakir") || mustahik.includes("miskin");

  if (pilihAmil && mustahik.length === 1) {
    return {
      sah: false,
      pesan: "Zakat tidak boleh hanya diberikan kepada Amil.",
    };
  }
  if (!pilihPrioritas) {
    return {
      sah: false,
      pesan: "Golongan Fakir atau Miskin adalah prioritas utama.",
    };
  }
  const rincian: any = {};
  let danaTersisa = total;
  if (pilihAmil) {
    rincian["amil"] = total * 0.125;
    danaTersisa -= rincian["amil"];
  }

  const golonganLain = mustahik.filter((m) => m !== "amil");
  const jatahPerGolongan = danaTersisa / golonganLain.length;

  golonganLain.forEach((g) => {
    rincian[g] = jatahPerGolongan;
  });

  return {
    sah: true,
    pesan: "Distribusi sesuai dengan ketentuan syariat.",
    data: rincian,
  };
}

export { cekFitrah, cekMal, fitrah, mal, hitungDistribusiZakat };
