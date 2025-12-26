import { formatRp } from "@/utils/functions";
import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Distribusi from "./Distribusi";

export const Result = ({
  persyaratan,
  isEmpty,
  jenis,
  hitungTotal,
  total,
  showResult,
}: {
  persyaratan: { terpenuhi: string[]; belumTerpenuhi: string[] };
  isEmpty: boolean;
  jenis: string | null;
  hitungTotal: () => void;
  total: number;
  showResult: boolean;
}) => {
  return (
    <>
      <Button
        size="lg"
        disabled={isEmpty || jenis === null}
        onClick={hitungTotal}
        className="bg-blue-600 text-white hover:bg-blue-700 w-full"
      >
        Hitung Zakat
      </Button>
      {showResult && (
        <section className="text-end">
          <p className="text-sm">jumlah yang harus dibayar</p>
          <p className="text-3xl font-bold">
            {total > 0 ? formatRp(total) : "Tidak Wajib Zakat"}
          </p>
          {jenis === "mal" && (
            <Accordion type="single" className="text-start" collapsible>
              <AccordionItem value="i1">
                <AccordionTrigger>Lihat Rincian</AccordionTrigger>
                <AccordionContent>
                  <ul>
                    {persyaratan.terpenuhi.length > 0 &&
                      persyaratan.terpenuhi.map((p, i) => (
                        <li
                          className="text-sm text-green-600 font-medium"
                          key={i}
                        >
                          <CheckCircle
                            className="inline me-1"
                            strokeWidth={2.5}
                            size={16}
                          />
                          {p}
                        </li>
                      ))}
                  </ul>
                  <ul>
                    {persyaratan.belumTerpenuhi.length > 0 &&
                      persyaratan.belumTerpenuhi.map((p, i) => (
                        <li className="text-sm text-slate-500" key={i}>
                          {p}
                        </li>
                      ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          )}
          {total > 0 && <Distribusi total={total} />}
        </section>
      )}
    </>
  );
};
