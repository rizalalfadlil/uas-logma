import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Table as TableIcon } from "lucide-react";
import { tabel_kebenaran } from "@/utils/data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";

export const TruthTableTab = () => {
  return (
    <Card className="border-slate-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
        <CardTitle className="text-2xl flex items-center gap-2">
          <TableIcon className="h-6 w-6" />
          Tabel Kebenaran Zakat
        </CardTitle>
        <CardDescription className="text-base">
          Tabel kebenaran untuk penentuan kewajiban zakat
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-slate-700 leading-relaxed mb-6">
          Contoh tabel kebenaran untuk penentuan kewajiban zakat.
        </p>

        <div className="space-y-20 py-8">
          {tabel_kebenaran.map((tk, i) => (
            <div key={i} className="">
              <p className="text-slate-700 font-semibold">{tk.judul}</p>
              <p className="text-slate-500 text-sm">{tk.deskripsi}</p>
              <Table className="w-full mt-4">
                <TableHeader>
                  <TableRow>
                    {tk.header.map((h, j) => (
                      <TableHead
                        key={j}
                        className="p-4 border text-black text-center font-bold"
                      >
                        {h}
                      </TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tk.rows.map((r, j) => (
                    <TableRow key={j}>
                      {r.map((c, k) => (
                        <TableCell
                          key={k}
                          className={`p-4 text-center ${
                            c === "1" || c === "Wajib Zakat" || c === "Sah"
                              ? "text-green-500 bg-green-50 border border-green-200"
                              : "text-red-500 bg-red-50 border border-red-200"
                          }`}
                        >
                          {c}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ))}
        </div>
        <Alert className="mt-6 border-amber-200 bg-amber-50">
          <AlertDescription className="text-slate-700">
            <strong className="text-slate-900">Catatan:</strong> Buat Tabel
            Kebenaran selain logika pada contoh tabel diatas.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};
