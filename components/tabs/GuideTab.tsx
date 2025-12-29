import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import { SimplePDFViewer } from "../blocks/pdfview";

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
        <SimplePDFViewer/>
      </CardContent>
    </Card>
  );
};
