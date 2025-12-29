"use client";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import React from "react";

type jenisMal = {
  nilai: number;
  haul: number;
};
export const MalForm = ({
  props,
}: {
  props: {
    jenisHarta: string[];
    selectedHarta: string[];
    setTotal: (value: number) => void;
    setShowResult: (value: boolean) => void;
    setSelectedHarta: (value: string[]) => void;
    emas: jenisMal;
    setEmas: (value: jenisMal) => void;
    perak: jenisMal;
    setPerak: (value: jenisMal) => void;
    pertanian: { nilai: number; jenis: string };
    setPertanian: (value: { nilai: number; jenis: string }) => void;
    uang: jenisMal;
    setUang: (value: jenisMal) => void;
    peternakan: { sapi: number; kambing: number; haul: number };
    setPeternakan: (value: {
      sapi: number;
      kambing: number;
      haul: number;
    }) => void;
    rikaz: { temuan: number; tambang: number };
    setRikaz: (value: { temuan: number; tambang: number }) => void;
    persyaratan: { terpenuhi: string[]; belumTerpenuhi: string[] };
    setPersyaratan: (value: { terpenuhi: string[]; belumTerpenuhi: string[] }) => void;
  };
}) => {
  const {
    jenisHarta,
    selectedHarta,
    setTotal,
    setShowResult,
    setSelectedHarta,
    emas,
    setEmas,
    perak,
    setPerak,
    pertanian,
    setPertanian,
    uang,
    setUang,
    peternakan,
    setPeternakan,
    rikaz,
    setRikaz,
  } = props;

  return (
    <section className="space-y-4">
      <div>
        <p className="text-2xl font-bold">Zakat Mal</p>
        <p className="text-sm text-slate-500">Zakat Harta</p>
      </div>
      <p className="text-lg font-medium capitalize">
        3. Pilih Jenis Harta yang anda miliki
      </p>
      <div className="flex gap-2 flex-wrap">
        {jenisHarta.map((j, i) => {
          const exist = selectedHarta.includes(j);
          const add = () => {
            setTotal(0);
            setShowResult(false);
            if (exist) {
              setSelectedHarta(selectedHarta.filter((h) => h !== j));
              if (j === "emas") setEmas({ nilai: 0, haul: 0 });
              if (j === "perak") setPerak({ nilai: 0, haul: 0 });
              if (j === "uang") setUang({ nilai: 0, haul: 0 });
              if (j === "pertanian") setPertanian({ nilai: 0, jenis: "alami" });
              if (j === "peternakan")
                setPeternakan({ sapi: 0, kambing: 0, haul: 0 });
              if (j === "rikaz") setRikaz({ temuan: 0, tambang: 0 });
            } else {
              setSelectedHarta([...selectedHarta, j]);
            }
          };
          return (
            <React.Fragment key={i}>
              <Button
                onClick={add}
                variant={exist ? "default" : "outline"}
                className={
                  exist ? "bg-blue-600 text-white hover:bg-blue-700" : ""
                }
              >
                {exist && <Check />} {j}
              </Button>
            </React.Fragment>
          );
        })}
      </div>
      {selectedHarta.length > 0 && (
        <p className="text-lg font-medium capitalize">
          4. Masukkan Nilai Harta dan Haul
        </p>
      )}
      {selectedHarta.includes("emas") && (
        <div>
          <p>emas</p>
          <div className="flex gap-2 mt-1 flex-wrap">
            <Input
              value={emas.nilai}
              onChange={(e) =>
                setEmas({ ...emas, nilai: Number(e.target.value) })
              }
              type="number"
              className="w-[400px]"
              label="jumlah dalam gram"
            />
            <Input
              value={emas.haul}
              onChange={(e) => {
                setEmas({ ...emas, haul: Number(e.target.value) });
              }}
              type="number"
              className="w-[200px]"
              label="haul dalam tahun"
            />
          </div>
        </div>
      )}
      {selectedHarta.includes("perak") && (
        <div>
          <p>perak</p>
          <div className="flex gap-2 mt-1 flex-wrap">
            <Input
              value={perak.nilai}
              onChange={(e) => {
                setPerak({ ...perak, nilai: Number(e.target.value) });
              }}
              type="number"
              className="w-[400px]"
              label="jumlah dalam gram"
            />
            <Input
              value={perak.haul}
              onChange={(e) => {
                setPerak({ ...perak, haul: Number(e.target.value) });
              }}
              type="number"
              className="w-[200px]"
              label="haul dalam tahun"
            />
          </div>
        </div>
      )}
      {selectedHarta.includes("pertanian") && (
        <div>
          <p>pertanian</p>
          <div className="flex gap-2 mt-1 flex-wrap">
            <Input
              value={pertanian.nilai}
              onChange={(e) => {
                setPertanian({
                  ...pertanian,
                  nilai: Number(e.target.value),
                });
              }}
              type="number"
              className="w-[400px]"
              label="jumlah dalam gram"
            />
            <RadioGroup
              value={pertanian.jenis}
              onValueChange={(value: string) =>
                setPertanian({ ...pertanian, jenis: value })
              }
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem value="alami" />
                <Label htmlFor="alami">Irigasi Alami</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem value="berbayar" />
                <Label htmlFor="berbayar">Irigasi Berbayar</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      )}
      {selectedHarta.includes("uang") && (
        <div>
          <p>uang</p>
          <div className="flex gap-2 mt-1 flex-wrap">
            <Input
              value={uang.nilai}
              onChange={(e) =>
                setUang({ ...uang, nilai: Number(e.target.value) })
              }
              type="number"
              className="w-[400px]"
              label="jumlah dalam rupiah"
            />
            <Input
              value={uang.haul}
              onChange={(e) =>
                setUang({ ...uang, haul: Number(e.target.value) })
              }
              type="number"
              className="w-[200px]"
              label="haul dalam tahun"
            />
          </div>
        </div>
      )}
      {selectedHarta.includes("peternakan") && (
        <div>
          <p>peternakan</p>
          <div className="flex gap-2 mt-1 flex-wrap">
            <Input
              value={peternakan.sapi}
              onChange={(e) =>
                setPeternakan({
                  ...peternakan,
                  sapi: Number(e.target.value),
                })
              }
              type="number"
              className="w-[200px]"
              label="jumlah sapi dalam ekor"
            />
            <Input
              value={peternakan.kambing}
              onChange={(e) =>
                setPeternakan({
                  ...peternakan,
                  sapi: Number(e.target.value),
                })
              }
              type="number"
              className="w-[200px]"
              label="jumlah kambing dalam ekor"
            />
            <Input
              value={peternakan.haul}
              onChange={(e) =>
                setPeternakan({
                  ...peternakan,
                  haul: Number(e.target.value),
                })
              }
              type="number"
              className="w-[200px]"
              label="jumlah kambing dalam ekor"
            />
          </div>
        </div>
      )}
      {selectedHarta.includes("rikaz") && (
        <div>
          <p>rikaz</p>
          <div className="flex gap-2 mt-1 flex-wrap items-center">
            <Input
              type="number"
              value={rikaz.temuan}
              onChange={(e) =>
                setRikaz({ ...rikaz, temuan: Number(e.target.value) })
              }
              className="w-[300px]"
              label="jumlah temuan dalam rupiah"
            />
            <Input
              type="number"
              value={rikaz.tambang}
              onChange={(e) =>
                setRikaz({ ...rikaz, tambang: Number(e.target.value) })
              }
              className="w-[300px]"
              label="jumlah tambang dalam rupiah"
            />
          </div>
        </div>
      )}
    </section>
  );
};
