"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GitBranch } from "lucide-react";
import Image from "next/image";
import { Lightbox } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

export const AlgorithmTab = () => {
  const [open, setOpen] = useState(false);
  return (
    <Card className="border-slate-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
        <CardTitle className="text-2xl flex items-center gap-2">
          <GitBranch className="h-6 w-6" />
          Algoritma Perhitungan Zakat
        </CardTitle>
        <CardDescription className="text-base">
          Alur logika dan algoritma yang digunakan dalam perhitungan zakat
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <p className="text-xl">Flowchart Logika Zakat</p>
        <p className="text-xs text-slate-500">Klik gambar untuk memperbesar</p>
        <div>
          <Image
            onClick={() => setOpen(true)}
            src="./flowchart.png"
            alt="Flowchart Logika Zakat"
            width={500}
            height={500}
            className="w-full max-w-[500px] mx-auto my-4 cursor-pointer hover:scale-110 transition-transform"
          />
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[{ src: "./flowchart-HD.jpg" }]}
          plugins={[Zoom]} />
      </CardContent>
    </Card>
  );
};
