import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calculator, Check } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { cekMal, fitrah } from "@/utils/requirement";
import { Result } from "../blocks/result";
import { Fitrah } from "../blocks/Fitrah";
import { MalForm } from "../blocks/MalForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import Agreement from "../blocks/agreement";

type jenisMal = {
  nilai: number;
  haul: number;
};
export const CalculatorTab = ({
  setujuPersyaratan,
  setSetujuPersyaratan,
}: {
  setujuPersyaratan: boolean;
  setSetujuPersyaratan: (persyaratan: boolean) => void;
}) => {
  const [jenis, setjenis] = useState<"fitrah" | "mal" | null>(null);
  const [dialogOpen, setDialogOpen] = useState(
    setujuPersyaratan ? false : true
  );

  const [showResult, setShowResult] = useState(false);

  //Fitrah
  const [jiwa, setJiwa] = useState(0);

  //Mal
  const jenisHarta = [
    "emas",
    "perak",
    "pertanian",
    "peternakan",
    "rikaz",
    "uang",
  ];
  const [selectedHarta, setSelectedHarta] = useState<string[]>([]);
  const [emas, setEmas] = useState<jenisMal>({
    nilai: 0,
    haul: 0,
  });
  const [perak, setPerak] = useState<jenisMal>({
    nilai: 0,
    haul: 0,
  });
  const [uang, setUang] = useState<jenisMal>({
    nilai: 0,
    haul: 0,
  });
  const [peternakan, setPeternakan] = useState({
    sapi: 0,
    kambing: 0,
    haul: 0,
  });
  const [pertanian, setPertanian] = useState({
    nilai: 0,
    jenis: "alami",
  });
  const [rikaz, setRikaz] = useState({
    temuan: 0,
    tambang: 0,
  });

  const [persyaratan, setPersyaratan] = useState<{
    terpenuhi: string[];
    belumTerpenuhi: string[];
  }>({
    terpenuhi: [],
    belumTerpenuhi: [],
  });
  const isEmpty =
    (jenis === "fitrah" && !jiwa) ||
    (jenis === "mal" &&
      ![emas, perak, uang, peternakan, pertanian, rikaz].some(
        (val) =>
          (val as jenisMal).nilai ||
          (val as { sapi: number; kambing: number; haul: number }).sapi ||
          (val as { sapi: number; kambing: number; haul: number }).kambing ||
          (val as { nilai: number; jenis: string }).nilai ||
          (val as { temuan: number; tambang: number }).temuan ||
          (val as { temuan: number; tambang: number }).tambang
      ));
  const [total, setTotal] = useState(0);
  const switchType = (type: "fitrah" | "mal") => {
    setjenis(type);
    reset();
  };

  const reset = () => {
    setTotal(0);
    setShowResult(false);
    setSelectedHarta([]);
    setJiwa(0);
    setEmas({ nilai: 0, haul: 0 });
    setPerak({ nilai: 0, haul: 0 });
    setUang({ nilai: 0, haul: 0 });
    setPeternakan({ sapi: 0, kambing: 0, haul: 0 });
    setPertanian({ nilai: 0, jenis: "alami" });
    setRikaz({ temuan: 0, tambang: 0 });
    setPersyaratan({
      terpenuhi: [],
      belumTerpenuhi: [],
    });
  };
  const hitungTotal = () => {
    if (jenis === "fitrah") {
      setTotal(jiwa * (fitrah.berat * fitrah.harga_beras));
    } else if (jenis === "mal") {
      const zakat = {
        emas: emas.haul >= 1 ? emas.nilai : 0,
        perak: perak.haul >= 1 ? perak.nilai : 0,
        uang: uang.haul >= 1 ? uang.nilai : 0,
        sapi: peternakan.haul >= 1 ? peternakan.sapi : 0,
        kambing: peternakan.haul >= 1 ? peternakan.kambing : 0,
        pertanian: {
          nilai: pertanian.nilai,
          berbayar: pertanian.jenis !== "alami",
        },
        temuan: rikaz.temuan,
        tambang: rikaz.tambang,
      };

      const result = cekMal({ zakat });
      setPersyaratan(result.persyaratan);
      setTotal(result.total);
    }
    setShowResult(true);
  };
  const malprop = {
    jenisHarta,
    selectedHarta,
    setSelectedHarta,
    setTotal,
    setShowResult,
    emas,
    setEmas,
    perak,
    setPerak,
    uang,
    setUang,
    peternakan,
    setPeternakan,
    pertanian,
    setPertanian,
    rikaz,
    setRikaz,
    persyaratan,
    setPersyaratan,
  };
  return (
    <Card className="border-slate-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
        <CardTitle className="text-2xl flex items-center gap-2">
          <Calculator className="h-6 w-6" />
          Kalkulator Zakat
        </CardTitle>
        <CardDescription className="text-base">
          aplikasi utama kalkulator zakat
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8 py-6  mx-auto max-w-2xl">
        <Dialog open={dialogOpen} onOpenChange={() => setDialogOpen(!open)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Persyaratan Wajib Zakat</DialogTitle>
              <Agreement
                onClose={() => {
                  setSetujuPersyaratan(true);
                  setDialogOpen(false);
                }}
                onCancel={() => {
                  setDialogOpen(!open);
                  setSetujuPersyaratan(false);
                }}
              />
            </DialogHeader>
          </DialogContent>
        </Dialog>
        <section>
          <p className="text-lg font-medium capitalize">
            {setujuPersyaratan && (
              <Check className="inline me-4 mb-1 text-blue-600" />
            )}
            1. pastikan anda memenuhi{" "}
            <span
              onClick={() => setDialogOpen(true)}
              className="text-blue-600 cursor-pointer underline"
            >
              syarat wajib zakat
            </span>
          </p>
        </section>
        {setujuPersyaratan && (
          <>
            <section>
              <p className="text-lg font-medium capitalize">
                2. pilih jenis zakat
              </p>
              <div className="grid grid-cols-2 w-fit gap-2">
                <Button
                  variant={jenis === "fitrah" ? "default" : "outline"}
                  className={`px-8 ${
                    jenis === "fitrah"
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : ""
                  }`}
                  onClick={() => switchType("fitrah")}
                >
                  Fitrah
                </Button>
                <Button
                  variant={jenis === "mal" ? "default" : "outline"}
                  className={`px-8 ${
                    jenis === "mal"
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : ""
                  }`}
                  onClick={() => switchType("mal")}
                >
                  Mal
                </Button>
              </div>
            </section>
            <div className="space-y-4 p-4 border border-primary/25 rounded-lg">
              {jenis === "fitrah" && <Fitrah jiwa={jiwa} setJiwa={setJiwa} />}
              {jenis === "mal" && <MalForm props={malprop} />}
              <Result
                persyaratan={persyaratan}
                isEmpty={isEmpty}
                jenis={jenis}
                hitungTotal={hitungTotal}
                total={total}
                showResult={showResult}
              />
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};
