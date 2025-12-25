import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calculator } from "lucide-react";

export const CalculatorTab = () => {
  return (
    <Card className="border-slate-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
        <CardTitle className="text-2xl flex items-center gap-2">
          <Calculator className="h-6 w-6" />
          Kalkulator Zakat
        </CardTitle>
        <CardDescription className="text-base">
          Implementasi logika sesuai level challenge
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Alert className="border-blue-200 bg-blue-50">
          <AlertDescription className="text-slate-700">
            <strong className="text-slate-900">
              Fitur ini sengaja dikosongkan.
            </strong>
            <br />
            Mahasiswa mengisi sendiri sesuai ketentuan level yang dipilih.
          </AlertDescription>
        </Alert>

        <div className="mt-8 p-8 border-2 border-dashed border-slate-300 rounded-xl bg-slate-50/50 text-center">
          <Calculator className="h-16 w-16 mx-auto text-slate-400 mb-4" />
          <p className="text-slate-600 text-lg">
            Implementasi kalkulator zakat Anda di sini
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
