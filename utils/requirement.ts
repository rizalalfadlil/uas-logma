type mal = "emas" | "perak" | "uang" | "kambing" | "sapi" | "pertanian";
type mustahik =
  | "fakir"
  | "miskin"
  | "amil"
  | "muallaf"
  | "budak"
  | "gharim"
  | "fi sabil"
  | "ibnu sabil";
const fitrah = {
  harga_beras: 20000,
};

const cekFitrah = (jiwa: number) => {
  return jiwa * fitrah.harga_beras * 2.5;
};
const kurs = {
  emas: 2321000,
  perak: 156000,
  kambing: 3000000,
  sapi: 15000000,
};
const mal = {
  nisab: {
    emas: 85,
    perak: 595,
    uang: kurs,
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
    pertanian: number;
  };
}) => {
  let jumlah = 0;
};
