import React, { useEffect, useState } from "react";

export const AboutTab = () => {
  const [isClient, setIsClient] = useState(false)
  useEffect(()=>{
    setIsClient(true)
  },[])
  return (
    isClient && (
      <div className=" min-h-[54vh] p-4 flex flex-col items-center space-y-4">
        <p className="text-lg font-medium capitalize text-slate-600">
          tentang aplikasi ini
        </p>
        <p className="text-4xl font-bold capitalize">Kalkulator Zakat</p>
        <p className="pb-8 text-slate-600">
          dibuat untuk menyelesaikan tugas proyek UTS Logika Matematika
        </p>

        <div className="text-start w-full space-y-4 pb-8">
          <p className=" text-md w-full bg-slate-100 font-medium border text-slate-600 rounded p-2 ps-4">
            Detail Aplikasi
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <p className="text-md text-slate-600">link deployment</p>
              <p
                className="font-medium text-xl text-blue-600 hover:underline cursor-pointer"
                onClick={() => window.location.reload()}
              >
                {window.location.href}
              </p>
            </div>
            <div>
              <p className="text-md text-slate-600">github repository</p>
              <a
                className="font-medium text-xl text-blue-600 hover:underline cursor-pointer"
                href="https://github.com/rizalalfadlil/uas-logma"
              >
                github.com/rizalalfadlil/uas-logma
              </a>
            </div>
          </div>
        </div>
        <div className="text-start w-full space-y-4 pb-8">
          <p className=" text-md w-full bg-slate-100 font-medium border text-slate-600 rounded p-2 ps-4">
            Dibuat Oleh
          </p>
          <div>
            <p className="text-md text-slate-600">Nama</p>
            <p className="font-medium text-2xl">Hafidz Rizal Al-Fadlil</p>
          </div>
          <div className="grid sm:flex gap-4 sm:gap-10 pt-4">
            <div>
              <p className=" text-slate-600">NIM</p>
              <p className="font-medium text-xl">256512014</p>
            </div>
            <div>
              <p className=" text-slate-600">program studi</p>
              <p className="font-medium text-xl uppercase">Informatika</p>
            </div>
            <div>
              <p className=" text-slate-600">github</p>
              <a
                className="font-medium text-xl text-blue-500 hover:underline"
                href="https://github.com/rizalalfadlil"
              >
                RizalAlfadlil
              </a>
            </div>
            <div>
              <p className=" text-slate-600">website</p>
              <a
                className="font-medium text-xl text-blue-500 hover:underline"
                href="https://portfolio.ism-smile.web.id/developer"
              >
                RizalAlfadlil | Developer Portfolio
              </a>
            </div>
          </div>
        </div>
        <div className="text-start w-full space-y-4 pb-8">
          <p className=" text-md w-full bg-slate-100 font-medium border text-slate-600 rounded p-2 ps-4">
            Tentang Dosen
          </p>
          <div>
            <p className="text-md text-slate-600">Nama</p>
            <p className="font-medium text-2xl">Iin Sholihin, M.Kom</p>
          </div>
          <div className="grid sm:flex gap-4 sm:gap-10 pt-4">
            <div>
              <p className=" text-slate-600">NIDN</p>
              <p className="font-medium text-xl">5943765666130312</p>
            </div>
            <div>
              <p className=" text-slate-600">website</p>
              <a
                className="font-medium text-xl text-blue-500 hover:underline"
                href="https://kangsolihin.web.id/"
              >
                Kang Solihin Personal Web
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
