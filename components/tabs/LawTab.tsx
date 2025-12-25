import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scale } from "lucide-react";
import { hukum_logika } from "@/utils/data";
export const LawTab = () => {
  return (
    <Card className="border-slate-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
        <CardTitle className="text-2xl flex items-center gap-2">
          <Scale className="h-6 w-6" />
          Hukum Logika
        </CardTitle>
        <CardDescription className="text-base">
          Hukum-hukum logika dalam perhitungan zakat
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-slate-700 leading-relaxed mb-6">
          Hukum-hukum logika yang saya gunakan pada perhitungan zakat ini antara
          lain:
        </p>

        <div className="space-y-4">
          {hukum_logika.map((h, i) => (
            <div key={i}>
              <div className="flex items-center gap-4">
                <span>{h.nama}</span>
                <span className="text-blue-600 font-bold">{h.rumus}</span>
              </div>
              <p className="text-xs mt-2 text-slate-500">{h.deskripsi}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
