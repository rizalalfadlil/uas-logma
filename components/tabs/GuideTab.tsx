import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { BookOpen } from "lucide-react";
import Image from "next/image";

export const GuideTab = () => {
  return (
    <Card className="border-slate-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
        <CardTitle className="text-2xl flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          Panduan Infografis
        </CardTitle>
        <CardDescription className="text-base">
          Panduan visual untuk memahami perhitungan zakat
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-slate-700 leading-relaxed mb-4">
          Agar <em>user-friendly</em>, setiap app biasanya dilengkapi dengan
          infografis, icons, dan emojis. Buatlah infografis untuk{" "}
          <strong>Panduan App</strong>, semisal gambar ini sesuai fitur
          kalkulator zakat yang kamu buat, boleh format JPG, Ms.Word
          (screenshoot), photoshop, corel draw, manual tulis tangan, atau bentuk
          lainnya.
        </p>

        <Alert className="mb-6 border-red-200 bg-red-50">
          <AlertDescription className="text-red-800 font-semibold">
            Dilarang pakai AI atau Google images! ⚠️
          </AlertDescription>
        </Alert>

        <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
          <Image
            src="/infografis.jpg"
            alt="Infografis Perhitungan Zakat"
            width={1200}
            height={1800}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      </CardContent>
    </Card>
  );
};
