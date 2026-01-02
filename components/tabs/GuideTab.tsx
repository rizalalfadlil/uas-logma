import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
export const GuideTab = () => {
  const [open, setOpen] = useState(false)
  return (
    <Card className="border-slate-200 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
        <CardTitle className="text-2xl flex items-center gap-2">
          <BookOpen className="h-6 w-6" />
          Panduan Aplikasi Kalkulator Zakat
        </CardTitle>
        <CardDescription className="text-base">
          Klik gambar untuk memperbesar
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div>
          <Image
            onClick={() => setOpen(true)}
            src="./panduan.png"
            alt="Panduan Infografis"
            width={500}
            height={500}
            className="w-full mx-auto my-4 cursor-pointer scale-90 hover:scale-100 transition-transform"
          />
        </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[{ src: "./panduan-HD.jpg" }]}
          plugins={[Zoom]}
        />
      </CardContent>
    </Card>
  );
};
