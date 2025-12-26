"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calculator,
  BookOpen,
  Scale,
  FileText,
  Table,
  GitBranch,
  Info,
} from "lucide-react";

// Import layout components
import { Header } from "@/components/layout/Header";
import { MainLayout } from "@/components/layout/MainLayout";

// Import tab components
import { AboutTab } from "@/components/tabs/AboutTab";
import { CalculatorTab } from "@/components/tabs/CalculatorTab";
import { GuideTab } from "@/components/tabs/GuideTab";
import { LawTab } from "@/components/tabs/LawTab";
import { EvidenceTab } from "@/components/tabs/EvidenceTab";
import { TruthTableTab } from "@/components/tabs/TruthTableTab";
import { AlgorithmTab } from "@/components/tabs/AlgorithmTab";
import { useState } from "react";

export default function Home() {
  const [setujuPersyaratan, setSetujuPersyaratan] = useState(false);
  return (
    <MainLayout>
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="tentang" className="w-full">
          <TabsList className="grid w-full grid-cols-7 lg:grid-cols-7 h-auto gap-2 bg-white/50 p-2 rounded-xl">
            <TabsTrigger
              value="tentang"
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <Info className="h-4 w-4" />
              <span className="hidden sm:inline">About</span>
            </TabsTrigger>
            <TabsTrigger
              value="kalkulator"
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <Calculator className="h-4 w-4" />
              <span className="hidden sm:inline">Kalkulator</span>
            </TabsTrigger>
            <TabsTrigger
              value="infografis"
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Panduan</span>
            </TabsTrigger>
            <TabsTrigger
              value="hukum"
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <Scale className="h-4 w-4" />
              <span className="hidden sm:inline">Hukum</span>
            </TabsTrigger>
            <TabsTrigger
              value="dalil"
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Dalil</span>
            </TabsTrigger>
            <TabsTrigger
              value="tabel"
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <Table className="h-4 w-4" />
              <span className="hidden sm:inline">Tabel</span>
            </TabsTrigger>
            <TabsTrigger
              value="algoritma"
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <GitBranch className="h-6 w-6" />
              <span className="hidden sm:inline">Algoritma</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tentang" className="mt-6">
            <AboutTab />
          </TabsContent>

          <TabsContent value="kalkulator" className="mt-6">
            <CalculatorTab
              setSetujuPersyaratan={setSetujuPersyaratan}
              setujuPersyaratan={setujuPersyaratan}
            />
          </TabsContent>

          <TabsContent value="infografis" className="mt-6">
            <GuideTab />
          </TabsContent>

          <TabsContent value="hukum" className="mt-6">
            <LawTab />
          </TabsContent>

          <TabsContent value="dalil" className="mt-6">
            <EvidenceTab />
          </TabsContent>

          <TabsContent value="tabel" className="mt-6">
            <TruthTableTab />
          </TabsContent>

          <TabsContent value="algoritma" className="mt-6">
            <AlgorithmTab />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-slate-600">© 2025 RizalAlfadlil</p>
        </div>
      </footer>
    </MainLayout>
  );
}
