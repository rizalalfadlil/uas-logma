"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { hitungDistribusiZakat } from "@/utils/requirement";
import { formatRp } from "@/utils/functions";
import { Alert, AlertTitle } from "../ui/alert";
import { AlertCircleIcon } from "lucide-react";

export default function Distribusi({ total }: { total: number }) {
  const mustahikList = [
    "fakir",
    "miskin",
    "amil",
    "muallaf",
    "budak",
    "gharim",
    "fi sabil",
    "ibnu sabil",
  ];
  const [selectedMustahik, setSelectedMustahik] = useState<string[]>([]);
  const [rincian, setRincian] = useState<Record<string, string>>({});
  const [message, setMessage] = useState("")

  const cekDistribusi = () => {
    setRincian({})
    const res = hitungDistribusiZakat(total, selectedMustahik);
    if (res.sah) {
      setRincian(res.data);
      setMessage("")
    }else{
        setMessage(res.pesan)
    }
    console.log(res);
  };
  return (
    <div className="py-4 text-start space-y-2">
      <div>
        <p className="text-2xl font-bold">Distribusi Zakat</p>
        <p className="text-lg font-medium">Pilih Mustahik Zakat</p>
      </div>
      <div className="flex gap-2 flex-wrap py-8">
        {mustahikList.map((m, i) => {
          const isSelected = selectedMustahik.includes(m);
          const toggle = () => {
            if (isSelected) {
              setSelectedMustahik(selectedMustahik.filter((n) => n !== m));
            } else {
              setSelectedMustahik([...selectedMustahik, m]);
            }
          };
          return (
            <Button
              onClick={toggle}
              variant={isSelected ? "default" : "outline"}
              key={i}
            >
              {m}
            </Button>
          );
        })}
      </div>
      <Button onClick={cekDistribusi} disabled={selectedMustahik.length === 0} className="w-full" size="lg">
        Cek Distribusi
      </Button>
      <p className="text-lg font-medium">Rincian Distribusi</p>
      <div className="w-fit">
        {Object.entries(rincian).map(([key, value]) => (
          <div key={key} className="grid grid-cols-2">
            <span className="font-medium capitalize">{key}</span>
            <span className="text-slate-600">: {formatRp(Number(value))}</span>
          </div>
        ))}
      </div>
      {message && (
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle className="mt-1 ms-2">{message}</AlertTitle>
        </Alert>
      )}
    </div>
  );
}
