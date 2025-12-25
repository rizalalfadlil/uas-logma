import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

export const AboutTab = () => {
  return (
    <div className="grid gap-6">
      <Card className="border-slate-200 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
          <CardTitle className="text-2xl">Tentang Aplikasi</CardTitle>
          <CardDescription className="text-base">
            Implementasi konsep logika proposisional dan aljabar Boolean
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <p className="text-slate-700 leading-relaxed mb-6">
            Aplikasi ini dibuat sebagai bagian dari{" "}
            <strong className="text-slate-900">UAS Matematika Logika</strong>{" "}
            dengan tujuan mengimplementasikan konsep logika proposisional dan
            aljabar Boolean dalam studi kasus penentuan zakat.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-4xl border-4 border-white shadow-md">
                  🧑‍🎓
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Data Pembuat
                  </h3>
                  <Badge variant="secondary" className="mt-1">
                    Mahasiswa
                  </Badge>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-medium min-w-[120px]">Nama:</span>
                  <span className="text-slate-600">[Nama Mahasiswa]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium min-w-[120px]">NIM:</span>
                  <span className="text-slate-600">[NIM]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium min-w-[120px]">Kelas:</span>
                  <span className="text-slate-600">[Kelas]</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium min-w-[120px]">
                    Level Challenge:
                  </span>
                  <Badge className="bg-blue-600">[Level]</Badge>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center text-4xl border-4 border-white shadow-md">
                  🧑‍💼
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Info Dosen
                  </h3>
                  <Badge variant="outline" className="mt-1">
                    Pengampu
                  </Badge>
                </div>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="font-medium min-w-[120px]">Dosen:</span>
                  <span className="text-slate-600">Iin Sholihin, M.Kom</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium min-w-[120px]">NIDN:</span>
                  <span className="text-slate-600">5943765666130312</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="font-medium">Link:</span>
                  <a
                    href="https://kangsolihin.web.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 underline underline-offset-4 break-all"
                  >
                    Kang Solihin Personal Web
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <Alert className="mt-6 border-amber-200 bg-amber-50">
            <AlertDescription className="text-slate-700">
              <strong className="text-slate-900">Catatan:</strong>{" "}
              <span className="text-red-600 font-semibold">
                Silahkan ubah section ini sesuai desain kalian (bebas)!
              </span>
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  );
};
