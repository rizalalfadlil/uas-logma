import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle, Table as TableIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

export const TruthTableTab = () => {
  const ce = (text: string, result: boolean = false) => {
    return result ? (
      <span className="text-green-600 flex items-center justify-center gap-2">
        <CheckCircle size={16} /> {text}
      </span>
    ) : (
      <span className="text-red-600">{text}</span>
    );
  };
  return (
    <Card className="border-slate-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
        <CardTitle className="text-2xl flex items-center gap-2">
          <TableIcon className="h-6 w-6" />
          Tabel Kebenaran Zakat
        </CardTitle>
        <CardDescription className="text-base">
          tabel kebenaran contoh untuk penentuan kewajiban zakat
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <Table className="text-center">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">harta</TableHead>
              <TableHead className="text-center">haul</TableHead>
              <TableHead className="text-center">wajib zakat</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{ce("emas 90 gram", true)}</TableCell>
              <TableCell>{ce("dimiliki selama 2 Tahun", true)}</TableCell>
              <TableCell>{ce("wajib membayar zakat", true)}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{ce("uang senilai Rp. 200.000.000", true)}</TableCell>
              <TableCell>{ce("dimiliki sejak bulan lalu")}</TableCell>
              <TableCell>{ce("tidak wajib membayar zakat")}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{ce("emas 10 gram")}</TableCell>
              <TableCell>{ce("dimiliki selama 1 Tahun", true)}</TableCell>
              <TableCell>{ce("tidak wajib membayar zakat")}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{ce("uang senilai Rp. 50.000.000")}</TableCell>
              <TableCell>{ce("dimiliki sejak 2 bulan lalu")}</TableCell>
              <TableCell>{ce("tidak wajib membayar zakat")}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
