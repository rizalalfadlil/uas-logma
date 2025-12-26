import { fitrah } from "@/utils/requirement";
import { Input } from "../ui/input";
import { formatRp } from "@/utils/functions";

export const Fitrah = ({
  jiwa,
  setJiwa,
}: {
  jiwa: number;
  setJiwa: (jiwa: number) => void;
}) => {
  return (
    <section className="space-y-2">
      <div>
        <p className="text-2xl font-bold">Zakat Fitrah</p>
        <p className="text-sm text-slate-500">
          Zakat fitrah wajib dibayarkan sebesar <b>{fitrah.berat}Kg</b> per jiwa
        </p>
      </div>
      <p className="text-lg font-medium capitalize">
        2. Masukkan Jumlah Jiwa (termasuk tanggungan)
      </p>
      <div>
        <Input
          type="number"
          className="w-full p-2 border border-slate-200 rounded-md w-[200px]"
          value={jiwa}
          onChange={(e) => setJiwa(Number(e.target.value))}
        />
        <p className="text-sm text-slate-500">
          harga beras <b>{formatRp(fitrah.harga_beras)}/Kg</b>
        </p>
      </div>
    </section>
  );
};
