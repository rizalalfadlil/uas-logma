const dalil_zakat = [
    {
      id: 1,
      kategori: "Dalil Wajib Zakat (Umum)",
      sumber: "QS. Al-Baqarah: 43",
      teks: "Dan dirikanlah shalat, tunaikanlah zakat dan ruku'lah beserta orang-orang yang ruku'."
    },
    {
      id: 2,
      kategori: "Dalil 8 Golongan Mustahik (Fitur Level 10)",
      sumber: "QS. At-Taubah [9]: 60",
      teks: "Sesungguhnya zakat-zakat itu, hanyalah untuk orang-orang fakir, orang-orang miskin, pengurus-pengurus zakat (amil), para mu'allaf yang dibujuk hatinya, untuk (memerdekakan) budak, orang-orang yang berhutang (gharim), untuk jalan Allah (fi sabilillah) dan untuk mereka yang sedang dalam perjalanan (ibnu sabil)..."
    },
    {
      id: 3,
      kategori: "Dalil Nisab Emas & Perak",
      sumber: "HR. Abu Daud (Shahih)",
      teks: "Tidak ada kewajiban atasmu sesuatu pun (pada emas) sampai engkau memiliki 20 dinar (setara 85 gram emas). Jika telah sampai 20 dinar dan telah berlalu satu tahun (haul), maka zakatnya 1/2 dinar (2.5%)."
    },
    {
      id: 4,
      kategori: "Dalil Zakat Pertanian",
      sumber: "HR. Muslim",
      teks: "Pada yang diairi oleh sungai dan hujan zakatnya sepersepuluh (10%), dan yang diairi dengan pengairan (irigasi berbiaya) zakatnya seperdua puluh (5%)."
    },
    {
      id: 5,
      kategori: "Dalil Zakat Fitrah",
      sumber: "HR. Bukhari & Muslim",
      teks: "Rasulullah SAW mewajibkan zakat fitrah satu sha’ kurma atau satu sha’ gandum atas umat muslim; baik hamba sahaya maupun merdeka, laki-laki maupun perempuan, kecil maupun besar."
    },
    {
      id: 6,
      kategori: "Ijtihad Ulama: Zakat Profesi",
      sumber: "Syaikh Yusuf Al-Qardhawi (Fiqhuz Zakah)",
      teks: "Penghasilan (gaji/profesi) diqiyaskan dengan zakat emas/perak (jika disimpan setahun) atau zakat pertanian (saat diterima), dengan kadar 2.5%."
    }
  ];
const hukum_logika = [
    {
      id: 1,
      nama: "Konjungsi (Conjunction / AND)",
      deskripsi: "Digunakan untuk menentukan syarat wajib zakat yang bersifat akumulatif. Seseorang wajib zakat JIKA (Harta ≥ Nisab) DAN (Kepemilikan ≥ 1 Tahun).",
      rumus: "p ∧ q"
    },
    {
      id: 2,
      nama: "Implikasi (Implication / IF-THEN)",
      deskripsi: "Digunakan untuk pengambilan keputusan. JIKA total harta mencapai Rp 85.000.000 (Premis), MAKA tampilkan status 'Wajib Zakat' (Konklusi).",
      rumus: "p ⇒ q"
    },
    {
      id: 3,
      nama: "Negasi (Negation / NOT)",
      deskripsi: "Digunakan untuk validasi input. Jika checkbox 'Jenis Harta' TIDAK dicentang, maka input dinonaktifkan.",
      rumus: "~p"
    },
    {
      id: 4,
      nama: "Disjungsi (Disjunction / OR)",
      deskripsi: "Digunakan pada pemilihan jenis irigasi pertanian. Irigasi Alami (10%) ATAU Irigasi Berbayar (5%).",
      rumus: "p ∨ q"
    },
    {
      id: 5,
      nama: "Modus Ponens",
      deskripsi: "Premis 1: Jika mencapai nisab, maka wajib bayar. Premis 2: User mencapai nisab. Kesimpulan: User wajib bayar.",
      rumus: "((p ⇒ q) ∧ p) ⇒ q"
    }
  ];
const tabel_kebenaran = [
    {
      judul: "Tabel Kebenaran Zakat Emas (Logika AND)",
      deskripsi: "Output Wajib Zakat (Z) hanya bernilai 1 jika Nisab (p) dan Haul (q) bernilai 1.",
      header: [
        "Kondisi Emas (p)",
        "Kondisi Haul (q)",
        "Logika (p ∧ q)",
        "Status (Z)"
      ],
      rows: [
        ["1", "1", "1", "Wajib Zakat"],
        ["1", "0", "0", "Tidak Wajib"],
        ["0", "1", "0", "Tidak Wajib"],
        ["0", "0", "0", "Tidak Wajib"]
      ]
    },
    {
      judul: "Tabel Kebenaran Validasi Syariah (Level 10)",
      deskripsi: "Validasi distribusi zakat. Tidak boleh hanya memberi ke Amil (q) tanpa menyertakan Fakir/Miskin (p).",
      header: [
        "Centang Fakir/Miskin (p)",
        "Centang Amil (q)",
        "Status Validasi"
      ],
      rows: [
        ["1", "1", "Sah"],
        ["1", "0", "Sah"],
        ["0", "1", "Tidak Sah"],
        ["0", "0", "Tidak Sah"]
      ]
    }
  ]
  
export { dalil_zakat, hukum_logika, tabel_kebenaran };