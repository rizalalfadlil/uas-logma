import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText } from "lucide-react";
import { dalil_zakat } from "@/utils/data";

export const EvidenceTab = () => {
  return (
    <Card className="border-slate-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
        <CardTitle className="text-2xl flex items-center gap-2">
          <FileText className="h-6 w-6" />
          Dalil Zakat
        </CardTitle>
        <CardDescription className="text-base">
          Dalil dan pendapat ulama sebagai acuan aplikasi
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {dalil_zakat.map((d, i)=>(
            <div key={i} className="border p-4 rounded-lg flex flex-col justify-center hover:scale-105 transition-all duration-300">
              <p className="italic">&quot;{d.teks}&quot;</p>
              <p className="text-xs mt-4 text-slate-500">{d.sumber}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
