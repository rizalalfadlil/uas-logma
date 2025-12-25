'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calculator, BookOpen, Scale, FileText, Table, GitBranch, Info } from 'lucide-react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent mb-2">
              Logic Challenge – Aplikasi Zakat
            </h1>
            <p className="text-slate-600 text-lg">UAS Matematika Logika</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="tentang" className="w-full">
          <TabsList className="grid w-full grid-cols-7 lg:grid-cols-7 h-auto gap-2 bg-white/50 p-2 rounded-xl">
            <TabsTrigger value="tentang" className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Info className="h-4 w-4" />
              <span className="hidden sm:inline">About</span>
            </TabsTrigger>
            <TabsTrigger value="kalkulator" className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Calculator className="h-4 w-4" />
              <span className="hidden sm:inline">Kalkulator</span>
            </TabsTrigger>
            <TabsTrigger value="infografis" className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Panduan</span>
            </TabsTrigger>
            <TabsTrigger value="hukum" className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Scale className="h-4 w-4" />
              <span className="hidden sm:inline">Hukum</span>
            </TabsTrigger>
            <TabsTrigger value="dalil" className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Dalil</span>
            </TabsTrigger>
            <TabsTrigger value="tabel" className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <Table className="h-4 w-4" />
              <span className="hidden sm:inline">Tabel</span>
            </TabsTrigger>
            <TabsTrigger value="algoritma" className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
              <GitBranch className="h-6 w-6" />
              <span className="hidden sm:inline">Algoritma</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tentang" className="mt-6">
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
                    Aplikasi ini dibuat sebagai bagian dari{' '}
                    <strong className="text-slate-900">UAS Matematika Logika</strong> dengan tujuan
                    mengimplementasikan konsep logika proposisional dan aljabar Boolean dalam studi
                    kasus penentuan zakat.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-6 border border-slate-200">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center text-4xl border-4 border-white shadow-md">
                          🧑‍🎓
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-slate-900">Data Pembuat</h3>
                          <Badge variant="secondary" className="mt-1">Mahasiswa</Badge>
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
                          <span className="font-medium min-w-[120px]">Level Challenge:</span>
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
                          <h3 className="text-xl font-semibold text-slate-900">Info Dosen</h3>
                          <Badge variant="outline" className="mt-1">Pengampu</Badge>
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
                      <strong className="text-slate-900">Catatan:</strong>{' '}
                      <span className="text-red-600 font-semibold">
                        Silahkan ubah section ini sesuai desain kalian (bebas)!
                      </span>
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="kalkulator" className="mt-6">
            <Card className="border-slate-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Calculator className="h-6 w-6" />
                  Kalkulator Zakat
                </CardTitle>
                <CardDescription className="text-base">
                  Implementasi logika sesuai level challenge
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <Alert className="border-blue-200 bg-blue-50">
                  <AlertDescription className="text-slate-700">
                    <strong className="text-slate-900">Fitur ini sengaja dikosongkan.</strong>
                    <br />
                    Mahasiswa mengisi sendiri sesuai ketentuan level yang dipilih.
                  </AlertDescription>
                </Alert>

                <div className="mt-8 p-8 border-2 border-dashed border-slate-300 rounded-xl bg-slate-50/50 text-center">
                  <Calculator className="h-16 w-16 mx-auto text-slate-400 mb-4" />
                  <p className="text-slate-600 text-lg">
                    Implementasi kalkulator zakat Anda di sini
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="infografis" className="mt-6">
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
                <p className="text-slate-700 leading-relaxed mb-4">
                  Agar <em>user-friendly</em>, setiap app biasanya dilengkapi dengan infografis,
                  icons, dan emojis. Buatlah infografis untuk <strong>Panduan App</strong>, semisal
                  gambar ini sesuai fitur kalkulator zakat yang kamu buat, boleh format JPG,
                  Ms.Word (screenshoot), photoshop, corel draw, manual tulis tangan, atau bentuk
                  lainnya.
                </p>

                <Alert className="mb-6 border-red-200 bg-red-50">
                  <AlertDescription className="text-red-800 font-semibold">
                    Dilarang pakai AI atau Google images! ⚠️
                  </AlertDescription>
                </Alert>

                <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                  <Image
                    src="/infografis.jpg"
                    alt="Infografis Perhitungan Zakat"
                    width={1200}
                    height={1800}
                    className="w-full h-auto rounded-lg"
                    priority
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="hukum" className="mt-6">
            <Card className="border-slate-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Scale className="h-6 w-6" />
                  Hukum Logika
                </CardTitle>
                <CardDescription className="text-base">
                  Hukum-hukum logika dalam perhitungan zakat
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-slate-700 leading-relaxed mb-6">
                  Hukum-hukum logika yang saya pakai pada perhitungan zakat ini antara lain:
                </p>

                <div className="space-y-4">
                  {[
                    { name: 'Hukum Komutatif', impl: '...' },
                    { name: 'Hukum ...', impl: '...' },
                    { name: 'Hukum ...', impl: '...' },
                    { name: 'Hukum ...', impl: '...' },
                    { name: 'Hukum ...', impl: '...' },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-5 border border-slate-200"
                    >
                      <h3 className="font-semibold text-slate-900 text-lg mb-2">{item.name}</h3>
                      <p className="text-slate-600">
                        <em>Implementasi pada:</em> {item.impl}
                      </p>
                    </div>
                  ))}
                  <div className="bg-slate-50 rounded-lg p-5 border border-slate-200 text-center">
                    <p className="text-slate-500">dst...</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="dalil" className="mt-6">
            <Card className="border-slate-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <FileText className="h-6 w-6" />
                  Dalil Zakat
                </CardTitle>
                <CardDescription className="text-base">
                  Dalil dan pendapat ulama sebagai acuan aplikasi
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-slate-700 leading-relaxed mb-6">
                  Dalil zakat dan pendapat ulama yang menjadi acuan aplikasi ini antara lain:
                </p>

                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-5 border border-slate-200">
                    <Badge className="mb-3 bg-blue-600">Dalil Quran</Badge>
                    <p className="text-slate-600">
                      <em>QS</em> ...
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-5 border border-slate-200">
                    <Badge className="mb-3 bg-blue-600">Dalil Quran</Badge>
                    <p className="text-slate-600">
                      <em>QS</em> ...
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-5 border border-slate-200">
                    <Badge className="mb-3 bg-slate-600">Hadits Nabi</Badge>
                    <p className="text-slate-600">
                      ... <em>HR. ... (shahih)</em>
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-lg p-5 border border-slate-200">
                    <Badge className="mb-3 bg-slate-600">Hadits Nabi</Badge>
                    <p className="text-slate-600">
                      ... <em>HR. ... (shahih)</em>
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-5 border border-slate-200">
                    <Badge className="mb-3 bg-emerald-600">Ijtihad Ulama</Badge>
                    <p className="text-slate-700 font-medium mb-1">[Nama Ulama]</p>
                    <p className="text-slate-600">Perihal: Zakat Penghasilan</p>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-5 border border-slate-200">
                    <Badge className="mb-3 bg-emerald-600">Ijtihad Ulama</Badge>
                    <p className="text-slate-700 font-medium mb-1">[Nama Ulama]</p>
                    <p className="text-slate-600">Perihal: Zakat Uang Virtual</p>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-5 border border-slate-200 text-center">
                    <p className="text-slate-500">dalil lainnya...</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tabel" className="mt-6">
            <Card className="border-slate-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Table className="h-6 w-6" />
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

                <div className="overflow-x-auto rounded-lg border border-slate-200">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-600 to-slate-700 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Islam</th>
                        <th className="px-6 py-4 text-left font-semibold">Penghasilan ≥ Nisab</th>
                        <th className="px-6 py-4 text-left font-semibold">Haul</th>
                        <th className="px-6 py-4 text-left font-semibold">Wajib Zakat</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-slate-200">
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 text-slate-700 font-mono">1</td>
                        <td className="px-6 py-4 text-slate-700 font-mono">1</td>
                        <td className="px-6 py-4 text-slate-700 font-mono">1</td>
                        <td className="px-6 py-4">
                          <Badge className="bg-green-600">1</Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 text-slate-700 font-mono">1</td>
                        <td className="px-6 py-4 text-slate-700 font-mono">1</td>
                        <td className="px-6 py-4 text-slate-700 font-mono">0</td>
                        <td className="px-6 py-4">
                          <Badge variant="secondary">0</Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 text-slate-700 font-mono">1</td>
                        <td className="px-6 py-4 text-slate-700 font-mono">0</td>
                        <td className="px-6 py-4 text-slate-700 font-mono">1</td>
                        <td className="px-6 py-4">
                          <Badge variant="secondary">0</Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-slate-50 transition-colors">
                        <td className="px-6 py-4 text-slate-700 font-mono">0</td>
                        <td className="px-6 py-4 text-slate-700 font-mono">1</td>
                        <td className="px-6 py-4 text-slate-700 font-mono">1</td>
                        <td className="px-6 py-4">
                          <Badge variant="secondary">0</Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <Alert className="mt-6 border-amber-200 bg-amber-50">
                  <AlertDescription className="text-slate-700">
                    <strong className="text-slate-900">Catatan:</strong> Buat Tabel Kebenaran
                    selain logika pada contoh tabel diatas.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="algoritma" className="mt-6">
            <Card className="border-slate-200 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-slate-50">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <GitBranch className="h-6 w-6" />
                  Algoritma Hitung Zakat
                </CardTitle>
                <CardDescription className="text-base">
                  Alur logika penentuan kewajiban zakat
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-slate-700 leading-relaxed mb-6">
                  Algoritma berikut menjelaskan alur logika penentuan kewajiban zakat. Contoh
                  algoritma secara deskriptif:
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-lg p-6 border border-slate-200 mb-6">
                  <ol className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-semibold flex-shrink-0">
                        1
                      </span>
                      <span className="pt-1">Mulai</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-semibold flex-shrink-0">
                        2
                      </span>
                      <span className="pt-1">Apakah beragama Islam?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-semibold flex-shrink-0">
                        3
                      </span>
                      <span className="pt-1">Apakah harta mencapai nisab?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full font-semibold flex-shrink-0">
                        4
                      </span>
                      <span className="pt-1">Apakah telah mencapai haul?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full font-semibold flex-shrink-0">
                        5
                      </span>
                      <span className="pt-1">Jika semua YA → Wajib Zakat</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 bg-red-600 text-white rounded-full font-semibold flex-shrink-0">
                        6
                      </span>
                      <span className="pt-1">Jika salah satu TIDAK → Tidak Wajib</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-8 h-8 bg-slate-600 text-white rounded-full font-semibold flex-shrink-0">
                        7
                      </span>
                      <span className="pt-1">Selesai</span>
                    </li>
                  </ol>
                </div>

                <Separator className="my-6" />

                <Alert className="mb-6 border-amber-200 bg-amber-50">
                  <AlertDescription className="text-slate-700">
                    Buatlah algoritma dalam bentuk apapun (flowchart, pseudocode, dll), jika
                    flowchart sebaiknya diubah ke bentuk JPG, dan disertakan di file ini.
                  </AlertDescription>
                </Alert>

                <p className="text-slate-600 font-medium mb-4">Contoh Flowchart:</p>
                <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                  <Image
                    src="/algoritma.jpg"
                    alt="Flowchart Algoritma Zakat"
                    width={800}
                    height={1200}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-slate-600">UAS Matematika Logika © 2025</p>
        </div>
      </footer>
    </div>
  );
}
