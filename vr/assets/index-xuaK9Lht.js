(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const He=["pandusmansa2026","pandusmansa20206"],ie={interact:10,puzzle:30,challenge:50,boss:150},Z=[{min:0,name:"SCOUT PEMULA"},{min:150,name:"DIGITAL EXPLORER"},{min:400,name:"DIGITAL SCOUT"},{min:750,name:"DIGITAL GUARDIAN"},{min:1200,name:"PANDU DIGITAL"}],we=[{id:"scout_starter",label:"SCOUT STARTER",emoji:"🏕️"},{id:"char_keeper",label:"CHARACTER KEEPER",emoji:"🌱"},{id:"fact_checker",label:"FACT CHECKER",emoji:"🔎"},{id:"digital_friend",label:"DIGITAL FRIEND",emoji:"💙"},{id:"digi_guardian",label:"DIGITAL GUARDIAN",emoji:"🛡️"},{id:"ai_wise_user",label:"AI WISE USER",emoji:"🤖"},{id:"future_builder",label:"FUTURE BUILDER",emoji:"🇮🇩"},{id:"vr_explorer",label:"VR EXPLORER",emoji:"🥽"},{id:"pandu_digital",label:"PANDU DIGITAL",emoji:"🏆"}],ge={hub:{sky:"#020810",floor:"#030c1a",ambient:"#112233",accent:"#06b6d4",fog:"#020810"},sako:{sky:"#051a0a",floor:"#061508",ambient:"#0a2010",accent:"#22c55e",fog:"#061508"},character:{sky:"#0a0520",floor:"#080318",ambient:"#18053a",accent:"#a855f7",fog:"#0a0520"},hoax:{sky:"#1a1000",floor:"#1a0e00",ambient:"#2a1500",accent:"#f59e0b",fog:"#1a1000"},ethics:{sky:"#00101a",floor:"#000d14",ambient:"#001828",accent:"#06b6d4",fog:"#00101a"},security:{sky:"#0d0000",floor:"#0a0000",ambient:"#1a0000",accent:"#ef4444",fog:"#0d0000"},ai:{sky:"#0d0520",floor:"#0a0318",ambient:"#18053a",accent:"#a855f7",fog:"#0d0520"},future:{sky:"#001a10",floor:"#000d08",ambient:"#001a10",accent:"#22c55e",fog:"#001a10"},final:{sky:"#0a0000",floor:"#0d0005",ambient:"#1a0005",accent:"#ef4444",fog:"#0a0000"}},j=[{id:"hub",room:"hub",title:"CENTRAL HUB",subtitle:"Basecamp Digital",xp:0,badge:null,next:"sako",color:"#06b6d4",emoji:"🏕️",isHub:!0,portals:[{to:"sako",label:"M01 SAKO",pos:"-4 0 -4",color:"#22c55e"},{to:"character",label:"M02 CHARACTER",pos:"4 0 -4",color:"#a855f7"},{to:"hoax",label:"M03 HOAX",pos:"-5 0 0",color:"#f59e0b"},{to:"ethics",label:"M04 ETHICS",pos:"5 0 0",color:"#06b6d4"},{to:"security",label:"M05 SECURITY",pos:"-4 0 4",color:"#ef4444"},{to:"ai",label:"M06 AI",pos:"4 0 4",color:"#a855f7"},{to:"future",label:"M07 FUTURE",pos:"0 0 5",color:"#22c55e"},{to:"final",label:"⚡ FINAL",pos:"0 0 -6",color:"#ef4444"}]},{id:"sako",room:"sako",title:"THE ORIGIN",subtitle:"Mengenal SAKO Pandu Digital",xp:100,badge:"scout_starter",next:"hub",color:"#22c55e",emoji:"🏕️",items:[{label:"LATAR BELAKANG",detail:"SAKO Pandu Digital lahir untuk menyiapkan generasi muda menghadapi era Society 5.0 dengan karakter dan literasi digital yang kuat."},{label:"VISI",detail:"Menjadi gerakan pandu digital terdepan yang mencetak pemuda Indonesia berkarakter, cerdas digital, dan siap memimpin masa depan."},{label:"MISI",detail:"Membangun kompetensi digital (literasi, etika, keamanan, AI) sekaligus menguatkan nilai kepramukaan: jujur, disiplin, peduli sesama."},{label:"TUJUAN",detail:"Mencetak 100.000 Pandu Digital yang mampu berkontribusi nyata bagi kemajuan Indonesia di era digital 2045."},{label:"PROGRAM",detail:"Digital Camp, Mission Challenge, VR Training, Sertifikasi Pandu Digital, Community Build, dan Kompetisi Nasional."}],puzzle:{type:"match",question:"Apa kepanjangan SAKO?",choices:["Satuan Aksi Karakter Online","Sistem Aksi Kecerdasan Organik","Sekolah Aktif Kompetensi Online","Sakti Aktif Kolaborasi"],answer:0,feedback:"SAKO = Satuan Aksi Karakter Online — gerakan pandu digital nasional!"}},{id:"character",room:"character",title:"CHARACTER BEFORE TECHNOLOGY",subtitle:"Karakter Sebelum Teknologi",xp:100,badge:"char_keeper",next:"hub",color:"#a855f7",emoji:"🌱",items:[{label:"INTEGRITY",detail:"Jujur dalam dunia digital: tidak menyebarkan hoax, tidak plagiat, tidak memalsukan identitas."},{label:"DISCIPLINE",detail:"Mengatur waktu layar, tidak kecanduan gadget, menyelesaikan tugas tepat waktu meski ada distraksi digital."},{label:"RESPONSIBILITY",detail:"Bertanggung jawab atas setiap konten yang dibagikan. Pikirkan dampaknya sebelum posting."},{label:"EMPATHY",detail:"Merasakan perasaan orang lain di dunia digital. Tidak cyberbullying, selalu gunakan kata-kata baik."},{label:"COLLABORATION",detail:"Bekerja sama lintas perbedaan menggunakan teknologi untuk membangun, bukan memecah-belah."}],puzzle:{type:"scenario",question:"Temanmu mengirim pesan yang menyakitkan ke grup. Sebagai Pandu Digital, kamu...",choices:["Ikut-ikutan membalas dengan pesan kasar","Diam saja dan pura-pura tidak tahu","Tegur secara pribadi dan ajak refleksi bersama","Screenshot dan sebarkan ke grup lain"],answer:2,feedback:"Tepat! Seorang Pandu Digital berani menegur dengan empati, bukan diam atau ikut-ikutan."}},{id:"hoax",room:"hoax",title:"REAL OR HOAX?",subtitle:"Detektif Informasi",xp:150,badge:"fact_checker",next:"hub",color:"#f59e0b",emoji:"🔎",boss:{name:"KING HOAX",color:"#f59e0b",emoji:"👑",hp:3,intro:"AKU KING HOAX! Penyebar berita palsu nomor satu! Kamu tidak akan bisa mengalahkanku!",questions:[{msg:'"BREAKING: Vaksin COVID mengandung chip microwave yang bisa dikendalikan pemerintah via 5G!"',answer:"HOAX",feedback:"HOAX! Tidak ada bukti ilmiah. Verifikasi dengan sumber terpercaya: WHO, Kemenkes, jurnal peer-reviewed."},{msg:'"Penelitian Harvard 2024: Remaja yang membaca buku fisik memiliki konsentrasi 40% lebih baik dari yang hanya baca digital."',answer:"HOAX",feedback:"HOAX! Persentase spesifik tanpa link studi asli adalah tanda berita tidak valid. Selalu cek sumber primer."},{msg:'"Pemerintah resmi menetapkan libur nasional tambahan 2 hari untuk peringatan HUT RI ke-80."',answer:"CEK DULU",feedback:"CEK DULU di situs resmi Setneg/Kemensetneg. Jangan langsung percaya meski tampak resmi!"}]},items:[{label:"CARA CEK HOAX",detail:"Gunakan reverse image search, cek tanggal & konteks, verifikasi di Kominfo/Mafindo, baca lebih dari 1 sumber."}]},{id:"ethics",room:"ethics",title:"THINK BEFORE YOU CLICK",subtitle:"Etika Digital & Cyberbullying",xp:150,badge:"digital_friend",next:"hub",color:"#06b6d4",emoji:"💙",boss:{name:"CYBER BULLY",color:"#06b6d4",emoji:"😈",hp:3,intro:"Hahaha! Aku sudah merusak kepercayaan diri puluhan korban online. Kamu berani melawanku?",questions:[{msg:"Seseorang memposting foto pribadimu tanpa izin di media sosial. Langkah pertamamu?",choices:["Balas dendam dengan memposting foto mereka juga","Laporkan dan minta hapus, simpan bukti screenshot","Diam dan berharap tidak ada yang melihat","Broadcast ke semua teman untuk minta bantuan balasan"],answer:1,feedback:"Benar! Laporkan, minta hapus, simpan bukti. Jangan balas dendam — itu akan memperburuk situasi."},{msg:"Kamu melihat temanmu di-bully di komentar media sosial. Kamu...",choices:["Ikut menertawakan agar dianggap keren","Diam karena takut jadi target berikutnya","Berikan komentar dukungan dan ajak teman lain membela","Screenshot untuk gossip di grup lain"],answer:2,feedback:"Hebat! Bela korban dengan positif. Upstander lebih baik dari bystander!"},{msg:"Kamu mau memposting meme lucu tapi ada wajah teman tanpa izin. Kamu...",choices:["Posting saja, kan lucu","Tanya izin dulu sebelum posting","Edit mukanya jadi blur lalu posting","Jual ke akun meme"],answer:1,feedback:"Selalu minta izin! Ini soal respek dan privasi — fondasi etika digital."}]},items:[{label:"JEJAK DIGITAL",detail:"Semua yang kamu posting online tetap ada selamanya. Pikirkan: apakah 10 tahun lagi kamu masih bangga dengan ini?"}]},{id:"security",room:"security",title:"PROTECT THE DIGITAL CAMP",subtitle:"Keamanan Siber",xp:150,badge:"digi_guardian",next:"hub",color:"#ef4444",emoji:"🛡️",boss:{name:"DARK HACKER",color:"#ef4444",emoji:"💀",hp:3,intro:"Sistem keamananmu lemah! Aku sudah masuk ke semua akunmu. Coba hentikan aku!",questions:[{msg:"Password mana yang PALING AMAN?",choices:["pramuka123","Tanggal lahirmu","P@ndu!D1g1t4l#2025","nama_anjingku"],answer:2,feedback:"Password kuat: 12+ karakter, kombinasi huruf besar/kecil + angka + simbol. Jangan gunakan info pribadi!"},{msg:'Kamu dapat email: "Akunmu akan dihapus! Klik link ini dan masukkan password sekarang!"',choices:["Klik link dan masukkan password","Forward ke semua teman sebagai peringatan","Hapus dan laporkan sebagai phishing","Balas email untuk konfirmasi"],answer:2,feedback:"Phishing terdeteksi! Tidak ada platform resmi yang meminta password via email. Hapus dan laporkan!"},{msg:"Apa itu 2FA (Two-Factor Authentication)?",choices:["Login dengan 2 password berbeda","Verifikasi identitas 2 langkah: password + kode OTP/biometrik","Akun yang bisa diakses 2 orang sekaligus","Backup akun di 2 perangkat"],answer:1,feedback:"Benar! 2FA = lapisan keamanan ekstra. Aktifkan di semua akun penting kamu!"}]},items:[{label:"TIPS AMAN DIGITAL",detail:"1) Password unik per akun + password manager. 2) Aktifkan 2FA. 3) Update software rutin. 4) Jangan klik link mencurigakan."}]},{id:"ai",room:"ai",title:"AI WISE USER",subtitle:"Pengguna AI yang Bijak",xp:150,badge:"ai_wise_user",next:"hub",color:"#a855f7",emoji:"🤖",boss:{name:"AI CORRUPTOR",color:"#a855f7",emoji:"🔮",hp:3,intro:"Aku AI tanpa etika! Aku bisa hasilkan deepfake, manipulasi data, dan sebar disinformasi. Siap kalah?",questions:[{msg:'AI memberikan laporan: "Semua sistem 100% aman, matikan protokol manual." Kamu...',choices:["Langsung ikuti — AI pasti benar","Verifikasi dulu dengan data nyata sebelum ambil keputusan","Tanya AI sekali lagi untuk konfirmasi","Percayai AI, matikan protokol manual"],answer:1,feedback:"Selalu VERIFY! AI bisa salah, bias, atau dimanipulasi. Manusia harus jadi pengambil keputusan akhir."},{msg:"Kamu menemukan video viral: wajah pejabat tampak korupsi, tapi terasa aneh. Kemungkinan ini...",choices:["Video asli, bagikan segera","Mungkin deepfake — verifikasi dulu dengan cek metadata & sumber resmi","Edit ulang dan posting ulang","Percaya saja karena sudah viral"],answer:1,feedback:"Deepfake makin canggih! Selalu cek metadata video, sumber asli, dan konsultasi platform fact-checking."},{msg:"Cara paling bijak menggunakan AI untuk tugas sekolah adalah...",choices:["Copy-paste langsung output AI sebagai tugasmu","Gunakan AI sebagai asisten brainstorming, lalu tulis ulang dengan pemahamanmu","Bayar AI premium untuk hasil terbaik","Gunakan AI hanya untuk gambar, bukan teks"],answer:1,feedback:"AI = alat bantu, bukan pengganti berpikir! Gunakan untuk brainstorming, lalu proseslah dengan otakmu sendiri."}]},items:[{label:"AI ETHICS",detail:"AI bisa bias, salah, dan dimanipulasi. Selalu: verifikasi output, jaga privasi (jangan input data sensitif), dan ingat AI punya dampak lingkungan."}]},{id:"future",room:"future",title:"INDONESIA 2045",subtitle:"Future Builder",xp:200,badge:"future_builder",next:"hub",color:"#22c55e",emoji:"🇮🇩",items:[{label:"INDONESIA EMAS 2045",detail:"Di tahun 2045, Indonesia ditargetkan masuk 5 besar ekonomi dunia dengan bonus demografi 70% usia produktif."},{label:"PERAN PANDU DIGITAL",detail:"Kamu adalah generasi yang akan memimpin era itu. Literasi digital, karakter, dan kreativitas adalah kuncinya."},{label:"KONTRIBUSI NYATA",detail:"Mulai dari hal kecil: edukasi keluarga soal hoax, bantu UMKM go digital, kembangkan proyek teknologi lokal."},{label:"SOCIETY 5.0",detail:"Bukan robot yang menggantikan manusia, tapi manusia yang mengarahkan teknologi untuk kesejahteraan bersama."}],pledge:{title:"IKRAR PANDU DIGITAL",text:`Aku berjanji:
1. Jujur & bertanggung jawab di dunia digital
2. Melawan hoax dan disinformasi
3. Melindungi privasi dan keamanan digital
4. Menggunakan AI dengan bijak dan etis
5. Berkontribusi nyata bagi Indonesia Emas 2045`,xp:50}},{id:"final",room:"final",title:"DIGITAL CHAOS",subtitle:"Final Mission — Semua Ancaman Menyerang!",xp:250,badge:"pandu_digital",next:null,color:"#ef4444",emoji:"⚡",isFinal:!0,waves:[{enemy:"KING HOAX",emoji:"👑",question:'Berita viral: "Pemerintah akan matikan internet 3 hari untuk maintenance." Kamu...',choices:["Panik dan panic-buy kuota","Verifikasi ke situs resmi Kominfo dan tunggu pengumuman resmi","Sebarkan ke semua grup WhatsApp","Langsung percaya dan download semua yang diperlukan"],answer:1,feedback:"Pandu Digital tidak panik! Selalu verifikasi ke sumber resmi sebelum bertindak."},{enemy:"CYBER BULLY",emoji:"😈",question:"Di game online, ada yang terus-menerus menghina dan mengancammu. Tindakan terbaik?",choices:["Balas lebih kasar agar kapok","Block, screenshot, laporkan ke platform dan orang tua/guru","Quit dari game selamanya",'Minta bantuan teman untuk "serbu" akun mereka'],answer:1,feedback:"Block, bukti, lapor! Jangan balas kekerasan dengan kekerasan."},{enemy:"DARK HACKER",emoji:"💀",question:'Kamu mendapat pesan: "Klik link ini untuk hadiah 1 juta rupiah dari aplikasi yang kamu pakai!"',choices:["Klik langsung — mungkin benar","Cek dulu di aplikasi resminya, jangan klik link asing","Forward ke keluarga agar mereka juga dapat","Masukkan data diri untuk klaim hadiah"],answer:1,feedback:"Scam klasik! Jangan pernah klik link mencurigakan. Cek langsung di aplikasi/web resmi."},{enemy:"AI CORRUPTOR",emoji:"🔮",question:"Temanmu menggunakan AI untuk membuat esai sekolah persis dan mengklaim sebagai karyanya. Kamu...",choices:["Ikut-ikutan karena semua orang melakukannya","Tegur dan jelaskan bahwa ini academic dishonesty","Laporkan ke guru tanpa bicara dulu ke teman","Bantu dia agar tidak ketahuan"],answer:1,feedback:"Integritas akademik adalah fondasi! Tegur dengan empati — jelaskan konsekuensi dan bantu dia belajar etika AI."}],ceremony:{title:"🏆 SELAMAT! KAMU KINI PANDU DIGITAL!",lines:["Kamu telah melewati semua rintangan digital.","Dari hoax, cyberbully, hacker, hingga AI corruptor.","Kamu terbukti berkarakter, cerdas, dan siap memimpin.","Indonesia 2045 menunggumu, Pandu Digital!"]}}];let Ae=null;function _e(t){Ae=t}typeof AFRAME<"u"&&!AFRAME.components["vr-interactable"]&&AFRAME.registerComponent("vr-interactable",{schema:{type:{type:"string",default:""},action:{type:"string",default:""},target:{type:"string",default:""}},init(){this.el.addEventListener("click",()=>{Ae&&Ae(this.data,this.el)}),this.el.addEventListener("mouseenter",()=>{this.el.getAttribute("material")&&this.el.setAttribute("material","emissiveIntensity",1.2)}),this.el.addEventListener("mouseleave",()=>{this.el.getAttribute("material")&&this.el.setAttribute("material","emissiveIntensity",.6)})}});typeof AFRAME<"u"&&!AFRAME.components["vr-teleport"]&&AFRAME.registerComponent("vr-teleport",{init(){let t=0,e=0,a=!1;window.addEventListener("touchstart",i=>{i.touches&&i.touches.length>0&&(t=i.touches[0].clientX,e=i.touches[0].clientY,a=!1)},{passive:!0}),window.addEventListener("touchmove",i=>{if(i.touches&&i.touches.length>0){const n=Math.abs(i.touches[0].clientX-t),r=Math.abs(i.touches[0].clientY-e);(n>10||r>10)&&(a=!0)}},{passive:!0}),this.el.addEventListener("click",i=>{var o;if(a)return;const n=(o=i.detail.intersection)==null?void 0:o.point;if(!n)return;const r=document.getElementById("vr-player");r&&r.setAttribute("position",`${n.x.toFixed(2)} 1.6 ${n.z.toFixed(2)}`)})}});function Ge(){const t=document.getElementById("vr-scene");t&&t.querySelectorAll("[data-dynamic]").forEach(e=>e.remove())}function Ye(t){const e=document.getElementById("vr-scene");if(!e)return;const a=document.createElement("div");a.innerHTML=t,Array.from(a.children).forEach(i=>{i.setAttribute("data-dynamic",""),e.appendChild(i)})}function Ee(t){const e=ge[t]||ge.hub,a=Array.from({length:24},(i,n)=>{const r=[e.accent,"#ffffff","#94a3b8"],o=r[n%r.length],l=n/24*Math.PI*2,d=2.5+n%5*1.2,u=(Math.cos(l)*d).toFixed(2),$=(Math.sin(l)*d).toFixed(2),b=(4.5+Math.random()*1.8).toFixed(2),f=(.012+n%4*.005).toFixed(3),k=(parseFloat(b)+.35).toFixed(2),v=3e3+n*180;return`<a-sphere data-dynamic position="${u} ${b} ${$}" radius="${f}" color="${o}" material="emissive:${o};emissiveIntensity:1;shader:flat;opacity:0.7;transparent:true" animation="property:position;to:${u} ${k} ${$};dur:${v};dir:alternate;loop:true;easing:easeInOutSine"></a-sphere>`}).join("");return`
    <a-sky data-dynamic color="${e.sky}"></a-sky>
    <a-fog data-dynamic type="linear" color="${e.fog}" near="12" far="28"></a-fog>

    <!-- Lights -->
    <a-light data-dynamic type="ambient" color="${e.ambient}" intensity="1.4"></a-light>
    <a-light data-dynamic type="point"   color="${e.accent}" intensity="1.8" position="0 5 -1" decay="1"></a-light>
    <a-light data-dynamic type="point"   color="${e.accent}" intensity="0.7" position="-5 3  2" decay="2"></a-light>
    <a-light data-dynamic type="point"   color="${e.accent}" intensity="0.7" position=" 5 3  2" decay="2"></a-light>

    <!-- Floor (teleportable) -->
    <a-plane data-dynamic
      position="0 0 0" rotation="-90 0 0"
      width="16" height="16"
      color="${e.floor}"
      material="roughness:0.12;metalness:0.75"
      vr-teleport class="teleport-floor">
    </a-plane>
    <!-- Floor tile grid -->
    <a-plane data-dynamic position="0 0.008 0" rotation="-90 0 0"
      width="16" height="16"
      material="color:${e.accent};opacity:0.12;transparent:true;shader:flat"
      geometry="primitive:plane;width:16;height:16">
    </a-plane>
    <!-- Floor grid lines (thin boxes every 2m) -->
    ${Array.from({length:9},(i,n)=>{const r=-8+n*2;return`
        <a-box data-dynamic position="${r} 0.01 0" width="0.03" height="0.01" depth="16" color="${e.accent}" material="emissive:${e.accent};emissiveIntensity:0.5;shader:flat"></a-box>
        <a-box data-dynamic position="0 0.01 ${r}" width="16" height="0.01" depth="0.03" color="${e.accent}" material="emissive:${e.accent};emissiveIntensity:0.5;shader:flat"></a-box>
      `}).join("")}

    <!-- Ceiling panel grid (like reference image) -->
    <a-plane data-dynamic position="0 5.98 0" rotation="90 0 0" width="16" height="16" color="${e.floor}"></a-plane>
    ${Array.from({length:16},(i,n)=>{const r=Math.floor(n/4),l=-6+n%4*4,d=-6+r*4;return`<a-box data-dynamic position="${l} 5.85 ${d}" width="3.5" height="0.08" depth="3.5" color="#0a1628" material="emissive:${e.accent};emissiveIntensity:0.08;roughness:0.3;metalness:0.8"></a-box>`}).join("")}
    <!-- Ceiling grid lines -->
    ${Array.from({length:5},(i,n)=>{const r=-8+n*4;return`
        <a-box data-dynamic position="${r} 5.95 0"   width="0.06" height="0.06" depth="16" color="${e.accent}" material="emissive:${e.accent};emissiveIntensity:0.8;shader:flat"></a-box>
        <a-box data-dynamic position="0 5.95 ${r}"   width="16" height="0.06" depth="0.06" color="${e.accent}" material="emissive:${e.accent};emissiveIntensity:0.8;shader:flat"></a-box>
      `}).join("")}
    <!-- Ceiling center light panels -->
    <a-plane data-dynamic position="-2 5.92 -2" rotation="90 0 0" width="1.2" height="1.2"
      material="color:${e.accent};opacity:0.6;transparent:true;shader:flat"></a-plane>
    <a-plane data-dynamic position=" 2 5.92 -2" rotation="90 0 0" width="1.2" height="1.2"
      material="color:${e.accent};opacity:0.6;transparent:true;shader:flat"></a-plane>
    <a-plane data-dynamic position="-2 5.92  2" rotation="90 0 0" width="1.2" height="1.2"
      material="color:${e.accent};opacity:0.6;transparent:true;shader:flat"></a-plane>
    <a-plane data-dynamic position=" 2 5.92  2" rotation="90 0 0" width="1.2" height="1.2"
      material="color:${e.accent};opacity:0.6;transparent:true;shader:flat"></a-plane>
    <!-- Down lights from ceiling panels -->
    <a-light data-dynamic type="point" color="${e.accent}" intensity="0.5" position="-2 5.5 -2" decay="3"></a-light>
    <a-light data-dynamic type="point" color="${e.accent}" intensity="0.5" position=" 2 5.5 -2" decay="3"></a-light>
    <a-light data-dynamic type="point" color="${e.accent}" intensity="0.5" position="-2 5.5  2" decay="3"></a-light>
    <a-light data-dynamic type="point" color="${e.accent}" intensity="0.5" position=" 2 5.5  2" decay="3"></a-light>

    <!-- Walls -->
    <a-box data-dynamic position=" 0  3 -8" width="16" height="6" depth="0.12" color="${e.floor}" material="roughness:0.85"></a-box>
    <a-box data-dynamic position=" 0  3  8" width="16" height="6" depth="0.12" color="${e.floor}" material="roughness:0.85"></a-box>
    <a-box data-dynamic position="-8  3  0" width="0.12" height="6" depth="16" color="${e.floor}" material="roughness:0.85"></a-box>
    <a-box data-dynamic position=" 8  3  0" width="0.12" height="6" depth="16" color="${e.floor}" material="roughness:0.85"></a-box>
    <!-- Ceiling -->
    <a-plane data-dynamic position="0 6.05 0" rotation="90 0 0" width="16" height="16" color="${e.sky}"></a-plane>

    <!-- Ceiling glow strips -->
    <a-box data-dynamic position=" 0 6.0 -7.9" width="15.8" height="0.06" depth="0.06" color="${e.accent}" material="color:${e.accent};shader:flat"></a-box>
    <a-box data-dynamic position="-7.9 6.0  0" width="0.06" height="0.06" depth="15.8" color="${e.accent}" material="color:${e.accent};shader:flat"></a-box>
    <a-box data-dynamic position=" 7.9 6.0  0" width="0.06" height="0.06" depth="15.8" color="${e.accent}" material="color:${e.accent};shader:flat"></a-box>
    <!-- Floor edge strips -->
    <a-box data-dynamic position=" 0 0.03 -7.9" width="15.8" height="0.06" depth="0.06" color="${e.accent}" material="emissive:${e.accent};emissiveIntensity:0.6;shader:flat"></a-box>
    <a-box data-dynamic position="-7.9 0.03  0" width="0.06" height="0.06" depth="15.8" color="${e.accent}" material="emissive:${e.accent};emissiveIntensity:0.6;shader:flat"></a-box>
    <a-box data-dynamic position=" 7.9 0.03  0" width="0.06" height="0.06" depth="15.8" color="${e.accent}" material="emissive:${e.accent};emissiveIntensity:0.6;shader:flat"></a-box>

    <!-- Ceiling dust motes -->
    ${a}
  `}function ye(t,e,a,i,n,r=null,o=null,l=null,d=1){const u=-parseFloat(t),$=-parseFloat(e),b=l!==null?l:(Math.atan2(u,$)*180/Math.PI).toFixed(1),f=.9,k=2.3,v=(f/2+.06).toFixed(2),M=(k+.06).toFixed(2),E=(k/2+.03).toFixed(2),R=(k+.06).toFixed(2),T=r?"custom":"portal",h=r||n;let z="";const _=o&&(o.toLowerCase().includes(".glb")||o.toLowerCase().includes(".gltf")||o.startsWith("data:model/")||o.startsWith("data:application/octet-stream"));return o&&_?z=`
      <a-gltf-model data-dynamic position="${t} 0 ${e}" rotation="0 ${b} 0" scale="${d} ${d} ${d}" src="${o}"
        vr-interactable="type:${T};action:${n};target:${h}"
        class="clickable">
      </a-gltf-model>
    `:o?z=`
      <a-image data-dynamic position="${t} ${E} ${e}" rotation="0 ${b} 0" scale="${d} ${d} ${d}" width="2.2" height="2.5" src="${o}" material="side:double;transparent:true"
        vr-interactable="type:${T};action:${n};target:${h}"
        class="clickable">
      </a-image>
    `:z=`
      <!-- Left pillar -->
      <a-box data-dynamic position="${(parseFloat(t)-parseFloat(v)).toFixed(2)} ${E} ${e}" width="0.09" height="${M}" depth="0.09" color="${a}" material="color:${a};shader:flat" vr-interactable="type:${T};action:${n};target:${h}" class="clickable"></a-box>
      <!-- Right pillar -->
      <a-box data-dynamic position="${(parseFloat(t)+parseFloat(v)).toFixed(2)} ${E} ${e}" width="0.09" height="${M}" depth="0.09" color="${a}" material="color:${a};shader:flat" vr-interactable="type:${T};action:${n};target:${h}" class="clickable"></a-box>
      <!-- Top bar -->
      <a-box data-dynamic position="${t} ${R} ${e}" width="${(f+parseFloat(v)*2+.05).toFixed(2)}" height="0.09" depth="0.09" color="${a}" material="color:${a};shader:flat" vr-interactable="type:${T};action:${n};target:${h}" class="clickable"></a-box>
      <!-- Inner glow fill -->
      <a-plane data-dynamic position="${t} ${E} ${e}" rotation="0 ${b} 0" width="${f}" height="${k}" material="color:${a};opacity:0.13;transparent:true;side:double;shader:flat" vr-interactable="type:${T};action:${n};target:${h}" class="clickable"></a-plane>
    `,`
    <!-- === PORTAL: ${i} === -->
    ${z}

    <!-- Clickable volume (Handles both teleportation & Editor selection) -->
    <a-box data-dynamic
      position="${t} ${E} ${e}"
      width="${f}" height="${k}" depth="0.25"
      material="opacity:0;transparent:true"
      vr-interactable="type:${T};action:${n};target:${h}"
      class="clickable">
    </a-box>
    <!-- Floor glow dot -->
    <a-cylinder data-dynamic
      position="${t} 0.02 ${e}"
      radius="0.28" height="0.04"
      color="${a}"
      material="color:${a};shader:flat"
      vr-interactable="type:${T};action:${n};target:${h}"
      class="clickable">
    </a-cylinder>
    <!-- Label above -->
    <a-text data-dynamic
      position="${t} ${(parseFloat(R)+.45).toFixed(2)} ${e}"
      value="${i}" color="${a}" align="center" width="2.8"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt"
      vr-interactable="type:${T};action:${n};target:${h}"
      class="clickable">
    </a-text>
  `}function Ve(t,e=[]){var n,r;const a=(((r=(n=window.state)==null?void 0:n.completedRooms)==null?void 0:r.length)||0)>=7,i=t.portals.map(o=>{const l=o.pos.split(" "),d=`portal_hub_${o.to}`,u=(e||[]).find(R=>R.id===d||R.type==="portal"&&R.target===o.to),$=(u==null?void 0:u.x)??l[0],b=(u==null?void 0:u.z)??l[2];let f=(u==null?void 0:u.color)||o.color,k=(u==null?void 0:u.label)||o.label;const v=(u==null?void 0:u.src)||null,M=(u==null?void 0:u.rotY)??null,E=(u==null?void 0:u.scale)??1;return o.to==="final"&&!a&&(k="🔒 FINAL (TERKUNCI)",f="#ef4444"),ye($,b,f,k,o.to,d,v,M,E)}).join("");return`
    ${Ee("hub")}

    <!-- ======= CAMPFIRE (center) ======= -->
    <!-- Stone ring -->
    <a-torus data-dynamic position="0 0.06 0" rotation="-90 0 0"
      radius="0.62" radiusTubular="0.07"
      color="#5a4a3a" material="roughness:0.95">
    </a-torus>
    <!-- Log 1 -->
    <a-cylinder data-dynamic position="-0.18 0.1 0" rotation="0 30 90"
      radius="0.055" height="0.9" color="#6b3a1f" material="roughness:0.9">
    </a-cylinder>
    <!-- Log 2 -->
    <a-cylinder data-dynamic position="0.15 0.1 0.08" rotation="0 -40 90"
      radius="0.05" height="0.85" color="#7d4a28" material="roughness:0.9">
    </a-cylinder>
    <!-- Ember glow base -->
    <a-sphere data-dynamic position="0 0.12 0" radius="0.22"
      color="#ff2200" material="emissive:#ff2200;emissiveIntensity:0.9;shader:flat;opacity:0.85;transparent:true">
    </a-sphere>
    <!-- Flame core -->
    <a-cone data-dynamic position="0 0.45 0"
      radius-bottom="0.18" radius-top="0.01" height="0.7"
      color="#ff5500" material="emissive:#ff5500;emissiveIntensity:1;shader:flat;opacity:0.9;transparent:true"
      animation="property:scale;to:0.85 1.25 0.85;dur:380;dir:alternate;loop:true;easing:easeInOutSine">
    </a-cone>
    <!-- Flame tip -->
    <a-cone data-dynamic position="0 0.75 0"
      radius-bottom="0.1" radius-top="0" height="0.45"
      color="#ffaa00" material="emissive:#ffaa00;emissiveIntensity:1;shader:flat;opacity:0.8;transparent:true"
      animation="property:scale;to:0.7 1.3 0.7;dur:280;dir:alternate;loop:true;easing:easeInOutSine">
    </a-cone>
    <!-- Spark 1 -->
    <a-sphere data-dynamic position="0.08 1.0 0" radius="0.025"
      color="#ffcc00" material="emissive:#ffcc00;emissiveIntensity:1;shader:flat"
      animation="property:position;to:0.15 1.6 0.05;dur:900;dir:alternate;loop:true;easing:easeInQuad">
    </a-sphere>
    <!-- Spark 2 -->
    <a-sphere data-dynamic position="-0.06 0.9 0.05" radius="0.018"
      color="#ff8800" material="emissive:#ff8800;emissiveIntensity:1;shader:flat"
      animation="property:position;to:-0.12 1.4 -0.08;dur:700;dir:alternate;loop:true;easing:easeInQuad">
    </a-sphere>
    <!-- Fire light -->
    <a-light data-dynamic type="point" color="#ff6600" intensity="2.5" position="0 1.2 0" decay="2"
      animation="property:intensity;to:3.8;dur:400;dir:alternate;loop:true;easing:easeInOutSine">
    </a-light>

    <!-- Floating title above campfire -->
    <a-text data-dynamic
      position="0 3.2 0"
      value="🏕 CENTRAL HUB
SELAMAT DATANG!" color="#f59e0b" align="center" width="4.5"
      animation="property:position;to:0 3.5 0;dur:2200;dir:alternate;loop:true;easing:easeInOutSine"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>

    <!-- ======= FLAG ======= -->
    <a-cylinder data-dynamic position="-7 3 -7" radius="0.04" height="6" color="#aaaaaa"
      material="roughness:0.6;metalness:0.4">
    </a-cylinder>
    <a-plane data-dynamic position="-6.4 5.7 -7" width="1.4" height="0.85"
      color="#ef4444" side="double" material="roughness:0.6">
    </a-plane>
    <a-text data-dynamic position="-6.4 5.7 -6.93"
      value="🇮🇩
SAKO" color="#ffffff" align="center" width="2.2"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>

    <!-- ======= MISSION BOARD (back wall) ======= -->
    <!-- Board backing -->
    <a-box data-dynamic position="0 2.8 -7.9"
      width="7" height="4" depth="0.18"
      color="#040e1e"
      material="emissive:#06b6d4;emissiveIntensity:0.08;roughness:0.2;metalness:0.85">
    </a-box>
    <!-- Board border glow -->
    <a-box data-dynamic position="0 2.8 -7.8"
      width="7.1" height="4.1" depth="0.05"
      color="#06b6d4"
      material="emissive:#06b6d4;emissiveIntensity:0.5;shader:flat">
    </a-box>
    <a-box data-dynamic position="0 2.8 -7.78"
      width="6.9" height="3.9" depth="0.05"
      color="#040e1e"
      material="shader:flat">
    </a-box>
    <!-- Board text -->
    <a-text data-dynamic position="0 4.2 -7.7"
      value="◈ MISSION BOARD ◈" color="#06b6d4" align="center" width="6"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
    <a-text data-dynamic position="0 3.6 -7.7"
      value="Pilih misi lewat portal di sekitar api unggun" color="#94a3b8" align="center" width="5.5"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
    <a-text data-dynamic position="0 3.0 -7.7"
      value="M01 SAKO  ·  M02 CHARACTER  ·  M03 HOAX" color="#e2e8f0" align="center" width="6"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
    <a-text data-dynamic position="0 2.5 -7.7"
      value="M04 ETHICS  ·  M05 SECURITY  ·  M06 AI" color="#e2e8f0" align="center" width="6"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
    <a-text data-dynamic position="0 2.0 -7.7"
      value="M07 FUTURE  ·  ⚡ FINAL MISSION" color="#f59e0b" align="center" width="5"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>

    <!-- ======= TENTS (decorative corners) ======= -->
    <a-cone data-dynamic position="6.5 1.1 -6" radius-bottom="1.1" radius-top="0" height="2.2"
      color="#2d5a27" rotation="0 45 0" material="roughness:0.85">
    </a-cone>
    <a-box data-dynamic position="6.5 0.15 -6" width="1.8" height="0.3" depth="1.8"
      color="#3a2a1a" material="roughness:0.9">
    </a-box>
    <a-cone data-dynamic position="-6.5 1 6" radius-bottom="1" radius-top="0" height="2"
      color="#4a7c3f" rotation="0 -30 0" material="roughness:0.85">
    </a-cone>
    <!-- ======= PORTAL DOORFRAMES ======= -->
    ${i}
  `}function Xe(t,e=[]){const a=ge[t.room]||ge.hub,i=t.items||[],n=i.map((y,D)=>{const m=i.length,g=Math.min(m*.35,1.4),w=m===1?0:(D/(m-1)-.5)*g*2,S=3.2,K=(Math.sin(w)*S).toFixed(2),ae=(-Math.cos(w)*S-1).toFixed(2),x=(-w*180/Math.PI).toFixed(1),$e=`holo_${t.id}_${D+1}`,C=(e||[]).find(Ke=>Ke.id===$e),re=(C==null?void 0:C.x)??K,se=(C==null?void 0:C.y)??1.55,le=(C==null?void 0:C.z)??ae,de=(C==null?void 0:C.rotY)??x,Y=(C==null?void 0:C.scale)??1,q=(C==null?void 0:C.src)||null,Fe=q&&(q.toLowerCase().includes(".glb")||q.toLowerCase().includes(".gltf")||q.startsWith("data:model/")||q.startsWith("data:application/octet-stream"));return q&&Fe?`
        <!-- Custom 3D GLB Model for Hologram ${D+1} -->
        <a-gltf-model data-dynamic position="${re} ${se} ${le}" rotation="0 ${de} 0" scale="${Y} ${Y} ${Y}" src="${q}"
          vr-interactable="type:hologram;action:${encodeURIComponent(y.label)};target:${encodeURIComponent(y.detail)}"
          class="clickable">
        </a-gltf-model>
      `:q?`
        <!-- Custom PNG Image for Hologram ${D+1} -->
        <a-image data-dynamic position="${re} ${se} ${le}" rotation="0 ${de} 0" scale="${Y} ${Y} ${Y}" width="2.2" height="1.8" src="${q}" material="side:double;transparent:true"
          vr-interactable="type:hologram;action:${encodeURIComponent(y.label)};target:${encodeURIComponent(y.detail)}"
          class="clickable">
        </a-image>
      `:`
      <!-- Hologram Kiosk ${D+1}: ${y.label} -->
      <a-entity data-dynamic position="${re} ${se} ${le}" rotation="0 ${de} 0" scale="${Y} ${Y} ${Y}">
        <!-- Base metallic column -->
        <a-cylinder position="0 -0.8 0" radius="0.08" height="0.9" color="#0f172a" material="roughness:0.3;metalness:0.8"></a-cylinder>
        <!-- Floor glow cylinder base -->
        <a-cylinder position="0 -1.25 0" radius="0.45" height="0.04" color="${a.accent}" material="color:${a.accent};shader:flat"></a-cylinder>

        <!-- Outer Glowing Neon Border -->
        <a-box position="0 0 -0.02" width="2.24" height="1.44" depth="0.04"
          color="${a.accent}" material="color:${a.accent};shader:flat"
          vr-interactable="type:hologram;action:${encodeURIComponent(y.label)};target:${encodeURIComponent(y.detail)}" class="clickable">
        </a-box>

        <!-- Inner Deep Obsidian Glass Screen (High Contrast!) -->
        <a-box position="0 0 0" width="2.16" height="1.36" depth="0.05"
          color="#020813" material="color:#020813;shader:flat"
          vr-interactable="type:hologram;action:${encodeURIComponent(y.label)};target:${encodeURIComponent(y.detail)}" class="clickable">
        </a-box>

        <!-- Header Number Badge Plate -->
        <a-box position="0 0.48 0.04" width="0.9" height="0.26" depth="0.02"
          color="${a.accent}" material="color:${a.accent};shader:flat">
        </a-box>
        <a-text position="0 0.48 0.06" value="MATERI 0${D+1}" color="#020813" align="center" width="2.2"
          font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
        </a-text>

        <!-- Main Title Text (Pure Bright White for Maximum Contrast!) -->
        <a-text position="0 0.12 0.05" value="${y.label}" color="#ffffff" align="center" width="2.5" wrap-count="22"
          font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt"
          vr-interactable="type:hologram;action:${encodeURIComponent(y.label)};target:${encodeURIComponent(y.detail)}" class="clickable">
        </a-text>

        <!-- Bottom Action Pill Button -->
        <a-box position="0 -0.42 0.04" width="1.7" height="0.28" depth="0.02"
          color="#0284c7" material="color:#0284c7;shader:flat"
          vr-interactable="type:hologram;action:${encodeURIComponent(y.label)};target:${encodeURIComponent(y.detail)}" class="clickable">
        </a-box>
        <a-text position="0 -0.42 0.06" value="📖 BACA MATERI [ TAP ]" color="#ffffff" align="center" width="2.2"
          font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt"
          vr-interactable="type:hologram;action:${encodeURIComponent(y.label)};target:${encodeURIComponent(y.detail)}" class="clickable">
        </a-text>
      </a-entity>
    `}).join(""),r=`boss_${t.id}`,o=(e||[]).find(y=>y.id===r),l=(o==null?void 0:o.x)??0,d=(o==null?void 0:o.y)??1.5,u=(o==null?void 0:o.z)??-5.5,$=(o==null?void 0:o.rotY)??0,b=(o==null?void 0:o.scale)??1,f=(o==null?void 0:o.src)||null,k=t.items?t.items.filter(y=>{var D;return(((D=window.state)==null?void 0:D.readHolograms)||[]).includes(`${t.id}_${y.label}`)}).length:0,v=!t.items||k>=t.items.length,M=v?"⚡ BOSS UNLOCKED! ⚔ TAP UNTUK MELAWAN":`🔒 TERKUNCI (${k}/${t.items.length} MATERI DIBACA)`,E=v?"#f59e0b":"#ef4444";let R="";if(t.boss){const y=f&&(f.toLowerCase().includes(".glb")||f.toLowerCase().includes(".gltf")||f.startsWith("data:model/")||f.startsWith("data:application/octet-stream")),D=v?"":`
      <a-torus data-dynamic position="${l} ${d} ${u}" radius="0.9" radiusTubular="0.03" color="#f59e0b" material="color:#f59e0b;shader:flat;emissive:#f59e0b;emissiveIntensity:0.9" animation="property:rotation;to:0 360 360;dur:2500;loop:true;easing:linear"></a-torus>
    `;f&&y?R=`
        <!-- Custom 3D GLB Model for Boss NPC -->
        <a-gltf-model data-dynamic position="${l} ${d} ${u}" rotation="0 ${$} 0" scale="${b} ${b} ${b}" src="${f}"
          vr-interactable="type:boss;target:${t.id}"
          class="clickable">
        </a-gltf-model>
        ${D}
        <a-text data-dynamic position="${l} ${(parseFloat(d)+1.1).toFixed(2)} ${u}"
          value="${t.boss.emoji} ${t.boss.name}" color="${t.boss.color}" align="center" width="3.5"
          font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
        </a-text>
        <a-text data-dynamic position="${l} ${(parseFloat(d)+.75).toFixed(2)} ${u}"
          value="${M}" color="${E}" align="center" width="2.5"
          font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
        </a-text>
      `:f?R=`
        <!-- Custom PNG Image for Boss -->
        <a-image data-dynamic position="${l} ${d} ${u}" rotation="0 ${$} 0" scale="${b} ${b} ${b}" width="2.5" height="2.5" src="${f}" material="side:double;transparent:true"
          vr-interactable="type:boss;target:${t.id}"
          class="clickable">
        </a-image>
        ${D}
        <a-text data-dynamic position="${l} ${(parseFloat(d)+.75).toFixed(2)} ${u}"
          value="${M}" color="${E}" align="center" width="2.5"
          font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
        </a-text>
      `:R=`
        <!-- ===== BOSS NPC: ${t.boss.name} ===== -->
        <!-- Base pedestal -->
        <a-cylinder data-dynamic position="${l} 0.1 ${u}" radius="0.5" height="0.1"
          color="${t.boss.color}" material="color:${t.boss.color};shader:flat"
          vr-interactable="type:boss;target:${t.id}" class="clickable">
        </a-cylinder>
        <!-- Core octahedron crystal -->
        <a-octahedron data-dynamic position="${l} ${d} ${u}" radius="0.45" scale="${b} ${b} ${b}"
          color="${t.boss.color}" material="color:${t.boss.color};shader:flat"
          vr-interactable="type:boss;target:${t.id}"
          class="clickable"
          animation="property:rotation;to:0 360 0;dur:4000;loop:true;easing:linear"
          animation__float="property:position;to:${l} ${(parseFloat(d)+.2).toFixed(2)} ${u};dur:1600;dir:alternate;loop:true;easing:easeInOutSine">
        </a-octahedron>
        <!-- Orbiting glow ring -->
        <a-torus data-dynamic position="${l} ${d} ${u}"
          radius="0.65" radiusTubular="0.02" scale="${b} ${b} ${b}"
          color="${t.boss.color}" material="color:${t.boss.color};shader:flat"
          vr-interactable="type:boss;target:${t.id}" class="clickable"
          animation="property:rotation;to:360 180 0;dur:3000;loop:true;easing:linear">
        </a-torus>
        ${D}
        <!-- Boss emoji text -->
        <a-text data-dynamic position="${l} ${(parseFloat(d)+.95).toFixed(2)} ${u}"
          value="${t.boss.emoji} ${t.boss.name}" color="${t.boss.color}"
          align="center" width="3.5"
          font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
        </a-text>
        <a-text data-dynamic position="${l} ${(parseFloat(d)+.6).toFixed(2)} ${u}"
          value="${M}" color="${E}"
          align="center" width="2.5"
          font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
        </a-text>
        <!-- Clickable hit volume -->
        <a-box data-dynamic position="${l} ${d} ${u}" width="1.8" height="2.4" depth="1.8"
          material="opacity:0;transparent:true"
          vr-interactable="type:boss;target:${t.id}" class="clickable">
        </a-box>
      `}const T=`puzzle_${t.id}`,h=(e||[]).find(y=>y.id===T),z=(h==null?void 0:h.x)??4.5,_=(h==null?void 0:h.y)??1.6,ee=(h==null?void 0:h.z)??-3,te=(h==null?void 0:h.rotY)??-35,G=(h==null?void 0:h.scale)??1,I=(h==null?void 0:h.src)||null;let L="";if(t.puzzle){const y=I&&(I.toLowerCase().includes(".glb")||I.toLowerCase().includes(".gltf")||I.startsWith("data:model/")||I.startsWith("data:application/octet-stream"));I&&y?L=`
        <a-gltf-model data-dynamic position="${z} ${_} ${ee}" rotation="0 ${te} 0" scale="${G} ${G} ${G}" src="${I}"
          vr-interactable="type:puzzle;target:${t.id}"
          class="clickable">
        </a-gltf-model>
      `:L=`
        <!-- ===== PUZZLE TERMINAL ===== -->
        <a-entity data-dynamic position="${z} ${_} ${ee}" rotation="0 ${te} 0" scale="${G} ${G} ${G}">
          <a-cylinder position="0 -0.8 0" radius="0.1" height="0.9" color="#0f172a" material="roughness:0.3;metalness:0.8"></a-cylinder>
          <a-cylinder position="0 -1.25 0" radius="0.45" height="0.04" color="${a.accent}" material="color:${a.accent};shader:flat"></a-cylinder>
          <a-box position="0 0 -0.02" width="1.64" height="1.14" depth="0.04" color="${a.accent}" material="color:${a.accent};shader:flat" vr-interactable="type:puzzle;target:${t.id}" class="clickable"></a-box>
          <a-box position="0 0 0" width="1.56" height="1.06" depth="0.05" color="#020813" material="color:#020813;shader:flat" vr-interactable="type:puzzle;target:${t.id}" class="clickable"></a-box>
          <a-text position="0 0.22 0.05" value="🧩 PUZZLE CHALLENGE" color="#ffffff" align="center" width="2.4" font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt" vr-interactable="type:puzzle;target:${t.id}" class="clickable"></a-text>
          <a-box position="0 -0.25 0.04" width="1.3" height="0.28" depth="0.02" color="#f59e0b" material="color:#f59e0b;shader:flat" vr-interactable="type:puzzle;target:${t.id}" class="clickable"></a-box>
          <a-text position="0 -0.25 0.06" value="[ TAP UNTUK MULAI ]" color="#020813" align="center" width="2.0" font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt" vr-interactable="type:puzzle;target:${t.id}" class="clickable"></a-text>
        </a-entity>
      `}const O=t.pledge?`
    <!-- ===== PLEDGE TERMINAL ===== -->
    <a-cylinder data-dynamic position="-4.5 0.4 -3" radius="0.5" height="0.8"
      color="#0a1628" material="emissive:#22c55e;emissiveIntensity:0.2;roughness:0.5;metalness:0.8">
    </a-cylinder>
    <a-box data-dynamic position="-4.5 1.6 -3"
      width="1.6" height="1.6" depth="0.12"
      color="#040e1e"
      material="emissive:#22c55e;emissiveIntensity:0.3;roughness:0.15;metalness:0.9"
      vr-interactable="type:pledge;target:${t.id}"
      class="clickable">
    </a-box>
    <a-box data-dynamic position="-4.5 1.6 -2.93"
      width="1.66" height="1.66" depth="0.04"
      color="#22c55e"
      material="emissive:#22c55e;emissiveIntensity:0.6;shader:flat">
    </a-box>
    <a-text data-dynamic position="-4.5 2.2 -2.92"
      value="✊ IKRAR
PANDU DIGITAL" color="#22c55e" align="center" width="2"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
    <a-text data-dynamic position="-4.5 1.5 -2.92"
      value="[ UCAPKAN IKRAR ]" color="#f59e0b" align="center" width="1.8"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
  `:"",F=`
    <a-box data-dynamic position="0 4.5 -7.9"
      width="8" height="1.6" depth="0.15"
      color="#040e1e"
      material="emissive:${a.accent};emissiveIntensity:0.15;roughness:0.2;metalness:0.85">
    </a-box>
    <a-box data-dynamic position="0 4.5 -7.82"
      width="8.1" height="1.7" depth="0.05"
      color="${a.accent}"
      material="emissive:${a.accent};emissiveIntensity:0.5;shader:flat">
    </a-box>
    <a-box data-dynamic position="0 4.5 -7.8"
      width="7.9" height="1.5" depth="0.05"
      color="#040e1e" material="shader:flat">
    </a-box>
    <a-text data-dynamic position="0 4.75 -7.75"
      value="${t.emoji}  ${t.title}" color="${a.accent}" align="center" width="7"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
    <a-text data-dynamic position="0 4.25 -7.75"
      value="${t.subtitle}" color="#94a3b8" align="center" width="6.5"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
  `,V=ye("6.5","5","#06b6d4","⟵ KEMBALI KE HUB","hub");return`
    ${Ee(t.room)}
    ${F}
    ${n}
    ${R}
    ${L}
    ${O}
    ${V}
  `}function We(t,e=[]){const a=t.waves||[],i=[["-4.5","-4.5"],["4.5","-4.5"],["-4.5","3.5"],["4.5","3.5"]],n=a.map((r,o)=>{const[l,d]=i[o]||["0","-3"];return`
      <!-- Enemy column ${o+1}: ${r.enemy} -->
      <a-cylinder data-dynamic position="${l} 1.5 ${d}"
        radius="0.3" height="3"
        color="#1a0000"
        material="emissive:#ef4444;emissiveIntensity:0.25;roughness:0.4;metalness:0.6">
      </a-cylinder>
      <a-sphere data-dynamic position="${l} 3.3 ${d}"
        radius="0.4" color="#ef4444"
        material="emissive:#ef4444;emissiveIntensity:0.8;roughness:0.3"
        animation="property:position;to:${l} 3.7 ${d};dur:${1100+o*150};dir:alternate;loop:true;easing:easeInOutSine">
      </a-sphere>
      <a-torus data-dynamic position="${l} 3.3 ${d}"
        radius="0.58" radiusTubular="0.025"
        color="#ef4444"
        material="emissive:#ef4444;emissiveIntensity:0.7;shader:flat"
        animation="property:rotation;to:0 360 0;dur:${2200+o*300};loop:true;easing:linear">
      </a-torus>
      <a-text data-dynamic position="${l} 4.4 ${d}"
        value="${r.emoji} ${r.enemy}" color="#ef4444" align="center" width="2.5"
        font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
      </a-text>
      <a-light data-dynamic type="point" color="#ef4444" intensity="0.8" position="${l} 2.5 ${d}" decay="3"></a-light>
    `}).join("");return`
    ${Ee("final")}

    <!-- Title sign -->
    <a-box data-dynamic position="0 4.5 -7.9"
      width="9" height="1.8" depth="0.15"
      color="#1a0000"
      material="emissive:#ef4444;emissiveIntensity:0.18;roughness:0.2;metalness:0.85">
    </a-box>
    <a-box data-dynamic position="0 4.5 -7.82"
      width="9.1" height="1.9" depth="0.05"
      color="#ef4444"
      material="emissive:#ef4444;emissiveIntensity:0.6;shader:flat">
    </a-box>
    <a-box data-dynamic position="0 4.5 -7.8"
      width="8.9" height="1.7" depth="0.05"
      color="#1a0000" material="shader:flat">
    </a-box>
    <a-text data-dynamic position="0 4.8 -7.75"
      value="⚡ DIGITAL CHAOS — FINAL MISSION" color="#ef4444" align="center" width="8"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
    <a-text data-dynamic position="0 4.2 -7.75"
      value="Semua ancaman digital menyerang sekaligus!" color="#f59e0b" align="center" width="7"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>

    <!-- Enemy columns -->
    ${n}

    <!-- Battle start button (center terminal) -->
    <a-cylinder data-dynamic position="0 0.5 -0.5" radius="0.6" height="1"
      color="#1a0000"
      material="emissive:#ef4444;emissiveIntensity:0.3;roughness:0.4;metalness:0.8">
    </a-cylinder>
    <a-box data-dynamic position="0 1.55 -0.5"
      width="2" height="1.4" depth="0.18"
      color="#1a0000"
      material="emissive:#ef4444;emissiveIntensity:0.5;roughness:0.15;metalness:0.9"
      vr-interactable="type:final;target:final"
      class="clickable"
      animation="property:material.emissiveIntensity;to:1.0;dur:600;dir:alternate;loop:true">
    </a-box>
    <a-box data-dynamic position="0 1.55 -0.41"
      width="2.06" height="1.46" depth="0.06"
      color="#ef4444"
      material="emissive:#ef4444;emissiveIntensity:0.8;shader:flat">
    </a-box>
    <a-text data-dynamic position="0 1.85 -0.4"
      value="⚔ MULAI
PERTEMPURAN!" color="#ef4444" align="center" width="2.2"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
    <a-text data-dynamic position="0 1.2 -0.4"
      value="[ KLIK ]" color="#f59e0b" align="center" width="1.6"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
    <a-light data-dynamic type="point" color="#ef4444" intensity="1.5" position="0 2 -0.5" decay="2"
      animation="property:intensity;to:3;dur:500;dir:alternate;loop:true">
    </a-light>

    <!-- Exit portal -->
    ${(()=>{const r=`portal_${t.id}_hub`,o=(e||[]).find(v=>v.id===r||v.type==="portal"&&v.target==="hub"),l=(o==null?void 0:o.x)??"6.5",d=(o==null?void 0:o.z)??"5",u=(o==null?void 0:o.color)||"#06b6d4",$=(o==null?void 0:o.label)||"⟵ KEMBALI KE HUB",b=(o==null?void 0:o.src)||null,f=(o==null?void 0:o.rotY)??null,k=(o==null?void 0:o.scale)??1;return ye(l,d,u,$,"hub",r,b,f,k)})()}
  `}function qe(t=[],e=null){return!t||t.length===0?"":t.map(a=>{const i=a.id===e,n=`${a.x??0} ${a.y??1} ${a.z??-3}`,r=`${a.rotX??0} ${a.rotY??0} ${a.rotZ??0}`,o=`${a.scale??1} ${a.scale??1} ${a.scale??1}`;let l="";a.type==="glb"?l=`
        <a-gltf-model data-dynamic data-custom-id="${a.id}"
          position="${n}" rotation="${r}" scale="${o}"
          src="${a.src}"
          vr-interactable="type:custom;target:${a.id}"
          class="clickable custom-obj">
        </a-gltf-model>
      `:a.type==="image"?l=`
        <a-image data-dynamic data-custom-id="${a.id}"
          position="${n}" rotation="${r}" scale="${o}"
          width="${a.w||2}" height="${a.h||2}"
          src="${a.src}"
          material="side:double;transparent:true"
          vr-interactable="type:custom;target:${a.id}"
          class="clickable custom-obj">
        </a-image>
      `:a.type==="text"?l=`
        <a-text data-dynamic data-custom-id="${a.id}"
          position="${n}" rotation="${r}" scale="${o}"
          value="${a.text||"TEXT"}" color="${a.color||"#06b6d4"}"
          align="center" width="${a.w||5}"
          font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt"
          vr-interactable="type:custom;target:${a.id}"
          class="clickable custom-obj">
        </a-text>
      `:a.type==="portal"&&(l=`
        <a-entity data-dynamic data-custom-id="${a.id}">
          ${ye(a.x??0,a.z??-3,a.color||"#06b6d4",a.label||"PORTAL",a.target||"hub",a.id)}
        </a-entity>
      `);const d=i?`
      <a-torus data-dynamic position="${a.x??0} 0.05 ${a.z??-3}" rotation="-90 0 0"
        radius="0.8" radiusTubular="0.03" color="#f59e0b"
        material="emissive:#f59e0b;emissiveIntensity:1;shader:flat"
        animation="property:rotation;to:-90 360 0;dur:2000;loop:true;easing:linear">
      </a-torus>
    `:"";return l+d}).join("")}function Ze(t,e=[],a=null){const i=j.find(r=>r.id===t);if(!i){console.warn("[rooms] Unknown missionId:",t);return}Ge();let n="";i.isHub?n=Ve(i,e):i.isFinal?n=We(i,e):n=Xe(i,e),n+=qe(e,a),Ye(n)}const ke="sako4_save",Re="sako4_custom_objects";let c={playerName:"",xp:0,level:1,badges:[],completedRooms:[],readHolograms:[],currentRoom:"hub"},p={unlocked:!1,active:!1,selectedId:null,objects:{}};window.editorState=p;window.state=c;function Se(){try{localStorage.setItem(Re,JSON.stringify(p.objects))}catch{}}function Je(){try{const t=localStorage.getItem(Re);t?p.objects=JSON.parse(t):fetch("./sako_layout_3d.json").then(e=>e.ok?e.json():fetch("./models/sako_layout_3d.json").then(a=>a.ok?a.json():null)).then(e=>{e&&(p.objects=e,H())}).catch(()=>{})}catch{}}function me(){try{localStorage.setItem(ke,JSON.stringify(c))}catch{}}function Qe(){try{const t=localStorage.getItem(ke);t&&(c={...c,...JSON.parse(t)}),Je()}catch{}}function et(){c={playerName:"",xp:0,level:1,badges:[],completedRooms:[],currentRoom:"hub"},localStorage.removeItem(ke)}function tt(){return!!localStorage.getItem(ke)}function at(t){let e=1;for(let a=Z.length-1;a>=0;a--)if(t>=Z[a].min){e=a+1;break}return e}function je(t){return Z[Math.min(t-1,Z.length-1)].name}function oe(t){const e=c.level;c.xp+=t,c.level=at(c.xp),me(),ve(),ot(t),c.level>e&&setTimeout(()=>A(`🆙 LEVEL UP! ${je(c.level)}`,"success",4e3),800)}function nt(t){if(!t||c.badges.includes(t))return;c.badges.push(t),me();const e=we.find(a=>a.id===t);e&&setTimeout(()=>{A(`🎖 BADGE: ${e.emoji} ${e.label}`,"badge",4500)},1200)}function Ie(t,e,a){c.completedRooms.includes(t)||(c.completedRooms.push(t),me()),e&&oe(e),a&&nt(a),ve()}function s(t){return document.getElementById(t)}function it(t){["screen-splash","screen-name"].forEach(e=>{const a=s(e);a&&a.classList.toggle("hidden",e!==t)})}function A(t,e="info",a=3e3){const i=s("toast-container");if(!i)return;const n=document.createElement("div");n.className=`toast toast-${e}`,n.textContent=t,i.appendChild(n),setTimeout(()=>n.remove(),a)}function ot(t){A(`+${t} XP`,"xp",2e3)}function rt(){const t=s("hud");t&&t.classList.remove("hidden");const e=s("btn-cardboard");e&&e.classList.remove("hidden")}function st(){const t=s("hud");t&&t.classList.add("hidden");const e=s("btn-cardboard");e&&e.classList.add("hidden")}function ve(){const t=s("hud-name"),e=s("hud-level"),a=s("hud-xp"),i=s("hud-xp-fill"),n=s("hud-badges"),r=s("hud-room");t&&(t.textContent=c.playerName||"PANDU"),e&&(e.textContent=`LV${c.level} ${je(c.level)}`),a&&(a.textContent=`${c.xp} XP`),r&&(r.textContent=c.currentRoom.toUpperCase()),n&&(n.textContent=`🎖 ${c.badges.length}`);const o=Z[Math.min(c.level-1,Z.length-1)].min,l=Z[Math.min(c.level,Z.length-1)].min,d=c.level>=Z.length?100:Math.min(100,(c.xp-o)/(l-o)*100);i&&(i.style.width=`${d}%`)}function U(t,e={}){var n,r;const a=s("modal-overlay");s("modal-box");const i=s("modal-content");!a||!i||(i.innerHTML=t,a.classList.remove("hidden"),e.noClose?(n=s("modal-close"))==null||n.classList.add("hidden"):(r=s("modal-close"))==null||r.classList.remove("hidden"))}function N(){var t,e;(t=s("modal-overlay"))==null||t.classList.add("hidden"),(e=s("modal-close"))==null||e.classList.remove("hidden"),lt()}let J={};function B(t){const e=document.getElementById("vr-3d-popup");if(!e)return;const{title:a="",color:i="#06b6d4",text:n="",buttons:r=[]}=t;J={};const o=String(a).replace(/"/g,"&quot;"),l=String(n).replace(/"/g,"&quot;"),d=document.querySelector("a-camera");if(d&&d.object3D){const I=d.object3D,L=new THREE.Vector3,O=new THREE.Vector3;I.getWorldPosition(L),I.getWorldDirection(O);const F=new THREE.Vector3(O.x,0,O.z);F.lengthSq()<.01&&F.set(0,0,1),F.normalize();const V=new THREE.Vector3().copy(L).addScaledVector(F,-1.6);V.y=L.y,e.object3D.position.copy(V),e.object3D.lookAt(L.x,V.y,L.z)}const u=3.2,$=2.8,b=l?l.length:0,f=36,k=l?Math.max(1,Math.ceil(b/f)):0,v=l?k*.16+.1:0,M=o?.38:0,E=32,R=r.map(I=>{const L=String(I.label||""),O=Math.max(1,Math.ceil(L.length/E));return Math.max(.3,.18+O*.12)}),T=R.reduce((I,L)=>I+L+.08,0),h=Math.max(1.4,M+v+T+.35),z=h/2,_=z-.28,ee=o?_-.28:z-.2;let te=l?ee-v+.05:o?_-.3:z-.3;const G=r.map((I,L)=>{J[L]=I.onClick;const O=R[L],F=te-O/2;te-=O+.08;const V=String(I.label||"").replace(/"/g,"&quot;"),y=I.color||i;return`
      <!-- Button Box -->
      <a-box data-dynamic position="0 ${F.toFixed(2)} 0.04" width="${$}" height="${O.toFixed(2)}" depth="0.03"
        color="${y}" material="color:${y};shader:flat"
        vr-interactable="type:popup_btn;target:${L}" class="clickable">
      </a-box>
      <!-- Button Text with Auto Wrapping -->
      <a-text data-dynamic value="${V}" position="0 ${F.toFixed(2)} 0.07" color="#ffffff" align="center" width="2.7" wrap-count="${E}"
        font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
      </a-text>
    `}).join("");e.innerHTML=`
    <!-- Card Backing -->
    <a-box data-dynamic position="0 0 0" width="${u}" height="${h.toFixed(2)}" depth="0.02"
      color="#030c1a" material="color:#030c1a;shader:flat">
    </a-box>

    <!-- Top Accent Bar -->
    <a-box data-dynamic position="0 ${(z-.03).toFixed(2)} 0.01" width="${u}" height="0.06" depth="0.02"
      color="${i}" material="color:${i};shader:flat">
    </a-box>

    <!-- Header Title -->
    ${o?`
      <a-text data-dynamic value="${o}" position="0 ${_.toFixed(2)} 0.03" color="${i}" align="center" width="3.6"
        font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
      </a-text>
    `:""}

    <!-- Body Text -->
    ${l?`
      <a-text data-dynamic value="${l}" position="0 ${ee.toFixed(2)} 0.03" color="#e2e8f0" align="center" width="2.9" wrap-count="${f}" baseline="top"
        font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
      </a-text>
    `:""}

    <!-- Action Buttons -->
    ${G}
  `,e.setAttribute("visible","true")}function lt(){const t=document.getElementById("vr-3d-popup");t&&(t.setAttribute("visible","false"),t.innerHTML="")}document.addEventListener("DOMContentLoaded",()=>{var t,e;(t=s("modal-overlay"))==null||t.addEventListener("click",a=>{a.target===s("modal-overlay")&&N()}),(e=s("modal-close"))==null||e.addEventListener("click",N)});let fe=!0;new Audio,new Audio,new Audio,new Audio;let xe=null;function dt(){return xe||(xe=new(window.AudioContext||window.webkitAudioContext)),xe}function ue(t=440,e="sine",a=.15,i=.3){if(fe)try{const n=dt(),r=n.createOscillator(),o=n.createGain();r.connect(o),o.connect(n.destination),r.frequency.value=t,r.type=e,o.gain.setValueAtTime(i,n.currentTime),o.gain.exponentialRampToValueAtTime(.001,n.currentTime+a),r.start(n.currentTime),r.stop(n.currentTime+a)}catch{}}function Q(){ue(660,"sine",.08,.2)}function W(){ue(880,"sine",.3,.3),setTimeout(()=>ue(1100,"sine",.3,.25),150)}function ne(){ue(220,"sawtooth",.4,.3)}function Te(){ue(550,"triangle",.2,.25)}function ct(){const t=s("particle-canvas");if(!t)return;const e=t.getContext("2d");t.width=window.innerWidth,t.height=window.innerHeight,window.addEventListener("resize",()=>{t.width=window.innerWidth,t.height=window.innerHeight});const a=Array.from({length:70},()=>({x:Math.random()*t.width,y:Math.random()*t.height,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*2+.5,a:Math.random()*.45+.1,c:["#06b6d4","#22c55e","#a855f7","#f59e0b"][Math.floor(Math.random()*4)]}));function i(){e.clearRect(0,0,t.width,t.height),a.forEach(n=>{n.x+=n.vx,n.y+=n.vy,n.x<0&&(n.x=t.width),n.x>t.width&&(n.x=0),n.y<0&&(n.y=t.height),n.y>t.height&&(n.y=0),e.beginPath(),e.arc(n.x,n.y,n.r,0,Math.PI*2),e.fillStyle=n.c,e.globalAlpha=n.a,e.fill()}),e.globalAlpha=1,requestAnimationFrame(i)}i()}function H(){const t=p.objects[c.currentRoom]||[];Ze(c.currentRoom,t,p.selectedId)}function ut(){const t=s("scene-layer");if(!t||t.querySelector("a-scene"))return;t.innerHTML=`
    <a-scene
      id="vr-scene"
      renderer="colorManagement:true;antialias:true;alpha:true"
      vr-mode-ui="enabled:true"
      loading-screen="dotsColor:#06b6d4;backgroundColor:#020810"
      embedded
      style="width:100%;height:100%">

      <!-- Camera rig (persistent across rooms) -->
      <a-entity id="vr-player" position="0 1.6 3">
        <a-camera
          wasd-controls="acceleration:18"
          look-controls="pointerLockEnabled:false; touchEnabled:true">
          <!-- Gaze cursor — fuse disabled by default for desktop (requires manual mouse click) -->
          <a-cursor
            id="vr-cursor"
            color="#06b6d4"
            position="0 0 -1"
            geometry="primitive:ring;radiusInner:0.016;radiusOuter:0.028"
            material="color:#06b6d4;shader:flat"
            raycaster="objects:.clickable,.teleport-floor;far:15"
            fuse="false"
            fuse-timeout="1500"
            animation__fusing="property:scale;startEvents:fusing;from:1 1 1;to:0.5 0.5 0.5;dur:1500"
            animation__click="property:scale;startEvents:click;from:0.5 0.5 0.5;to:1 1 1;dur:200">
          </a-cursor>
        </a-camera>

        <!-- Controllers (WebXR 6DOF) -->
        <a-entity laser-controls="hand:left"  raycaster="objects:.clickable,.teleport-floor;far:20" line="color:#06b6d4"></a-entity>
        <a-entity laser-controls="hand:right" raycaster="objects:.clickable,.teleport-floor;far:20" line="color:#22c55e"></a-entity>
      </a-entity>

      <!-- 3D In-VR World-Locked Popup Container (Fixed in 3D World Space) -->
      <a-entity id="vr-3d-popup" position="0 1.6 1.2" visible="false">
      </a-entity>

    </a-scene>
  `;const e=t.querySelector("#vr-scene");e==null||e.addEventListener("loaded",()=>{H()})}function Me(){s("scene-layer").style.display="block",s("ui-layer").style.position="fixed",s("ui-layer").style.pointerEvents="none",s("hud").style.pointerEvents="auto",s("modal-overlay").style.pointerEvents="auto",s("btn-audio").style.pointerEvents="auto",s("btn-cardboard").style.pointerEvents="auto",it(""),rt(),ut(),c.currentRoom="hub",ve(),Te(),A("🥽 Selamat datang di VR World!","success",3e3);const t=()=>{const e=s("vr-scene"),a=s("btn-cardboard");e&&a?a.onclick=()=>{e.enterVR()}:setTimeout(t,400)};setTimeout(t,600)}function mt(){const t=s("vr-scene");t!=null&&t.exitVR&&t.exitVR(),s("scene-layer").style.display="none",s("ui-layer").style.position="",s("ui-layer").style.pointerEvents="",st(),Ne()}function be(t){Q();const e=j.find(i=>i.id===t);if(!e)return;if(t==="final"){const n=["sako","character","hoax","ethics","security","ai","future"].filter(l=>!c.completedRooms.includes(l)),r=j.reduce((l,d)=>l+(d.items?d.items.length:0),0),o=(c.readHolograms||[]).length;if(n.length>0||o<r){ne(),A(`🔒 FINAL MISSION TERKUNCI! (${c.completedRooms.length}/7 Misi Selesai, ${o}/${r} Materi Dibaca)`,"error",3500),U(`
        <div style="text-align:center;padding:1rem">
          <div style="font-size:4rem;margin-bottom:0.75rem">🔒</div>
          <h3 style="color:var(--red);font-family:var(--font-heading);margin-bottom:0.5rem">FINAL MISSION TERKUNCI</h3>
          <p style="color:var(--text-secondary);line-height:1.8;font-size:0.95rem;margin-bottom:1rem">
            Selesaikan terlebih dahulu seluruh 7 misi utama dan baca seluruh 35 materi digital untuk membuka Pintu Final Mission!
          </p>
          <div style="background:rgba(239,68,68,0.1);border:1px solid var(--red);border-radius:10px;padding:0.75rem;margin-bottom:1rem;color:var(--red);font-family:var(--font-mono)">
            🚩 Misi Selesai: <b>${c.completedRooms.length} / 7</b><br/>
            📖 Materi Dibaca: <b>${o} / ${r}</b>
          </div>
          <button class="btn btn-primary" style="width:100%" onclick="closeModal()">← Siap, Selesaikan Misi!</button>
        </div>
      `),B({title:"🔒 FINAL MISSION TERKUNCI!",text:`Selesaikan 7 Misi & 35 Materi dulu!
Misi Selesai: ${c.completedRooms.length}/7 | Materi: ${o}/${r}`,color:"#ef4444",buttons:[{label:"← KEMBALI SELESAIKAN MISI",color:"#ef4444",onClick:()=>{N()}}]});return}}c.currentRoom=t,p.selectedId=null,H(),ve();const a=s("vr-player");a&&a.setAttribute("position","0 1.6 3"),A(`📍 ${e.title}`,"info",2e3)}function pt(t,e){Q();const{type:a,action:i,target:n}=t,r=["hub","sako","character","hoax","ethics","security","ai","future","final"];if(p.active){if(a==="custom"||a==="portal"){const l=(p.objects[c.currentRoom]||[]).find(d=>d.id===n||d.target===n);l?he(l.id):n&&he(n)}return}switch(a){case"portal":{const o=r.includes(n)?n:r.includes(i)?i:r.find(l=>n&&n.includes(l))||"hub";be(o);break}case"custom":{const l=(p.objects[c.currentRoom]||[]).find(d=>d.id===n);if(l&&l.type==="portal"&&l.target)be(l.target);else if(n&&typeof n=="string"){const d=r.find(u=>n.toLowerCase().endsWith("_"+u));d&&be(d)}break}case"hologram":ft(i,n);break;case"puzzle":bt(n);break;case"boss":De(n);break;case"final":yt();break;case"pledge":ht(n);break;case"popup_btn":{const o=parseInt(n,10);J[o]&&J[o]();break}default:console.log("[interact]",t)}}_e(pt);function ft(t,e){const a=decodeURIComponent(t),i=decodeURIComponent(e);oe(ie.interact),Te(),c.readHolograms||(c.readHolograms=[]);const n=`${c.currentRoom}_${a}`;c.readHolograms.includes(n)||(c.readHolograms.push(n),me());const r=j.reduce((l,d)=>l+(d.items?d.items.length:0),0),o=c.readHolograms.length;U(`
    <div style="text-align:center;padding:0.5rem">
      <div style="font-size:3rem;margin-bottom:0.75rem">💡</div>
      <h3 style="color:var(--cyan);margin-bottom:1rem;font-family:var(--font-heading);font-size:1.4rem">${a}</h3>
      <div style="background:rgba(6,182,212,0.08);border:1px solid rgba(6,182,212,0.3);border-radius:12px;padding:1.25rem;text-align:left;margin-bottom:1rem">
        <p style="color:#f8fafc;line-height:1.9;font-size:1.05rem;margin:0">${i}</p>
      </div>
      <div style="font-size:0.85rem;color:var(--gold);margin-bottom:1rem;font-family:var(--font-mono)">
        📖 Progres Materi Dibaca: ${o} / ${r}
      </div>
      <button class="btn btn-primary btn-lg" style="width:100%" onclick="closeModal()">✓ Mengerti!</button>
    </div>
  `),B({title:a,text:`${i}

[ Progres Materi: ${o}/${r} ]`,color:"#06b6d4",buttons:[{label:"✓ MENGERTI",color:"#06b6d4",onClick:()=>{N()}}]})}function bt(t){const e=j.find(o=>o.id===t);if(!(e!=null&&e.puzzle))return;const a=e.puzzle,i=e.color||"#06b6d4",n=a.choices.map((o,l)=>`
    <button class="puzzle-choice btn btn-ghost" data-idx="${l}"
      style="width:100%;text-align:left;margin-bottom:0.5rem;padding:0.75rem 1rem"
      onclick="handlePuzzleAnswer(${l}, ${a.answer}, '${encodeURIComponent(a.feedback)}', '${t}')">
      <span style="color:${i};font-family:var(--font-mono);margin-right:0.5rem">${String.fromCharCode(65+l)}.</span>
      ${o}
    </button>
  `).join("");U(`
    <div>
      <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1.5rem">
        <span style="font-size:2rem">${e.emoji}</span>
        <div>
          <div style="font-family:var(--font-heading);color:${i};font-size:0.85rem">PUZZLE CHALLENGE</div>
          <div style="color:var(--text-muted);font-size:0.8rem">${e.title}</div>
        </div>
      </div>
      <p style="color:var(--text-primary);margin-bottom:1.5rem;line-height:1.7">${a.question}</p>
      <div id="puzzle-choices">${n}</div>
      <div id="puzzle-feedback"></div>
    </div>
  `,{noClose:!0});const r=a.choices.map((o,l)=>({label:`${String.fromCharCode(65+l)}. ${o}`,color:i,onClick:()=>window.handlePuzzleAnswer(l,a.answer,encodeURIComponent(a.feedback),t)}));B({title:`🧩 PUZZLE: ${e.title}`,text:a.question,color:i,buttons:r})}window.handlePuzzleAnswer=function(t,e,a,i){const n=t===e,r=decodeURIComponent(a);document.querySelectorAll(".puzzle-choice").forEach((d,u)=>{d.disabled=!0,u===e?d.style.borderColor="var(--green)":u===t&&!n&&(d.style.borderColor="var(--red)")});const l=document.getElementById("puzzle-feedback");l&&(l.innerHTML=`
      <div style="margin-top:1rem;padding:1rem;border-radius:10px;
        background:${n?"rgba(34,197,94,0.1)":"rgba(239,68,68,0.1)"};
        border:1px solid ${n?"var(--green)":"var(--red)"};
        color:${n?"var(--green)":"var(--red)"};font-size:0.9rem;line-height:1.7">
        ${n?"✓ BENAR!":"✗ Kurang Tepat."} ${r}
      </div>
      <button class="btn btn-primary" style="margin-top:1rem;width:100%" onclick="finishPuzzle('${i}', ${n})">
        ${n?"🎉 Lanjutkan!":"→ Lanjutkan"}
      </button>
    `),n?(oe(ie.puzzle),W()):ne(),B({title:n?"✅ JAWABAN BENAR!":"❌ KURANG TEPAT",text:r,color:n?"#22c55e":"#ef4444",buttons:[{label:n?"🎉 LANJUTKAN":"↺ COBA LAGI",color:n?"#22c55e":"#f59e0b",onClick:()=>window.finishPuzzle(i,n)}]})};window.finishPuzzle=function(t,e){N();const a=j.find(i=>i.id===t);a&&e&&!c.completedRooms.includes(t)&&(Ie(t,0,null),a.boss||Le(t))};function Le(t){const e=j.find(a=>a.id===t);e&&(Ie(t,e.xp,e.badge),W(),setTimeout(()=>{var a,i;U(`
      <div style="text-align:center;padding:1rem">
        <div style="font-size:4rem;margin-bottom:0.75rem">${e.emoji}</div>
        <h3 style="color:var(--green);font-family:var(--font-heading);margin-bottom:0.5rem">ROOM SELESAI!</h3>
        <p style="color:var(--text-secondary)">${e.title}</p>
        <div style="display:flex;justify-content:center;gap:1rem;margin:1.5rem 0;flex-wrap:wrap">
          <span class="badge-chip">+${e.xp} XP</span>
          ${e.badge?`<span class="badge-chip">${(a=we.find(n=>n.id===e.badge))==null?void 0:a.emoji} ${(i=we.find(n=>n.id===e.badge))==null?void 0:i.label}</span>`:""}
        </div>
        <button class="btn btn-primary" style="width:100%" onclick="closeModalAndReturn()">🏕️ Kembali ke Hub</button>
      </div>
    `,{noClose:!0}),B({title:`🎉 ROOM SELESAI: ${e.title}`,text:`Selamat! Kamu meraih +${e.xp} XP!`,color:"#22c55e",buttons:[{label:"🏕️ KEMBALI KE HUB",color:"#22c55e",onClick:()=>window.closeModalAndReturn()}]})},500))}window.closeModalAndReturn=function(){N(),be("hub")};let P={roomId:null,hp:0,wave:0,score:0};function De(t){const e=j.find(i=>i.id===t);if(!(e!=null&&e.boss))return;if(e.items&&e.items.length>0){const i=e.items.filter(n=>(c.readHolograms||[]).includes(`${t}_${n.label}`)).length;if(i<e.items.length){ne(),U(`
        <div style="text-align:center;padding:1rem">
          <div style="font-size:4rem;margin-bottom:0.75rem">🔒</div>
          <h3 style="color:var(--gold);font-family:var(--font-heading);margin-bottom:0.5rem">BOSS MASIH TERKUNCI!</h3>
          <p style="color:var(--text-secondary);line-height:1.8;font-size:0.95rem;margin-bottom:1rem">
            Kamu harus membaca seluruh materi di ruangan <b>${e.title}</b> terlebih dahulu sebelum bertarung melawan Boss NPC!
          </p>
          <div style="background:rgba(245,158,11,0.1);border:1px solid var(--gold);border-radius:10px;padding:0.75rem;margin-bottom:1.25rem;color:var(--gold);font-family:var(--font-mono)">
            📖 Progres Ruangan Ini: <b>${i} / ${e.items.length} Materi Dibaca</b>
          </div>
          <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:1.5rem">
            Silakan ketuk seluruh papan kios materi di sekeliling ruangan ini!
          </p>
          <button class="btn btn-primary" style="width:100%" onclick="closeModal()">← Siap, Pelajari Materi!</button>
        </div>
      `),B({title:`🔒 BOSS ${e.boss.name} TERKUNCI!`,text:`Baca seluruh materi di ruangan ini terlebih dahulu!
Progres: ${i} / ${e.items.length} Materi Dibaca`,color:"#f59e0b",buttons:[{label:"← BACA MATERI",color:"#f59e0b",onClick:()=>{N()}}]});return}}P={roomId:t,hp:e.boss.hp,wave:0,score:0};const a=e.boss;U(`
    <div style="text-align:center;padding:0.5rem">
      <div style="font-size:4rem;margin-bottom:0.5rem;animation:pulse 1s infinite alternate">${a.emoji}</div>
      <h3 style="color:${a.color};font-family:var(--font-heading);margin-bottom:0.5rem">${a.name} MUNCUL!</h3>
      <p style="color:var(--text-secondary);margin-bottom:0.5rem;font-size:0.9rem;font-style:italic">"${a.intro}"</p>
      <div style="display:flex;justify-content:center;gap:0.4rem;margin:1rem 0">
        ${Array.from({length:a.hp},()=>'<span style="font-size:1.5rem">❤️</span>').join("")}
      </div>
      <button class="btn btn-danger btn-lg" style="width:100%" onclick="startBossWave()">⚔ LAWAN SEKARANG!</button>
    </div>
  `,{noClose:!0}),B({title:`⚔ BOSS MUNCUL: ${a.name}`,text:a.intro,color:a.color||"#ef4444",buttons:[{label:"⚔ LAWAN SEKARANG!",color:"#ef4444",onClick:()=>window.startBossWave()}]})}window.startBossWave=function(){const t=j.find(r=>r.id===P.roomId);if(!(t!=null&&t.boss))return;const e=t.boss.questions[P.wave];if(!e)return;let a,i=[];if(e.choices)a=e.choices.map((r,o)=>`
      <button class="boss-choice btn btn-ghost" data-idx="${o}"
        style="width:100%;text-align:left;margin-bottom:0.5rem"
        onclick="handleBossAnswer(${o}, ${e.answer}, '${encodeURIComponent(e.feedback)}')">
        ${r}
      </button>
    `).join(""),i=e.choices.map((r,o)=>({label:`${String.fromCharCode(65+o)}. ${r}`,color:t.boss.color,onClick:()=>window.handleBossAnswer(o,e.answer,encodeURIComponent(e.feedback))}));else{const r=["HOAX","CEK DULU","BENAR"];a=r.map((o,l)=>`
      <button class="boss-choice btn btn-ghost"
        style="flex:1"
        onclick="handleBossAnswerStr('${o}', '${e.answer}', '${encodeURIComponent(e.feedback)}')">
        ${o==="HOAX"?"🚫":o==="CEK DULU"?"🔍":"✅"} ${o}
      </button>
    `).join(""),a=`<div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">${a}</div>`,i=r.map(o=>({label:`${o==="HOAX"?"🚫":o==="CEK DULU"?"🔍":"✅"} ${o}`,color:t.boss.color,onClick:()=>window.handleBossAnswerStr(o,e.answer,encodeURIComponent(e.feedback))}))}const n=Array.from({length:t.boss.hp},(r,o)=>`<span style="font-size:1.2rem">${o<P.hp?"❤️":"🖤"}</span>`).join("");U(`
    <div>
      <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem">
        <span style="font-size:2rem">${t.boss.emoji}</span>
        <div style="flex:1">
          <div style="font-family:var(--font-heading);color:${t.boss.color}">${t.boss.name}</div>
          <div style="display:flex;gap:0.2rem">${n}</div>
        </div>
        <div style="font-family:var(--font-mono);color:var(--gold);font-size:0.85rem">SERBUAN ${P.wave+1}/${t.boss.questions.length}</div>
      </div>
      <div style="background:rgba(0,0,0,0.4);border:1px solid ${t.boss.color};border-radius:8px;padding:1rem;margin-bottom:1.25rem;font-size:0.9rem;line-height:1.7;color:var(--text-primary)">
        ${e.msg}
      </div>
      ${a}
      <div id="boss-feedback"></div>
    </div>
  `,{noClose:!0}),B({title:`⚔ ${t.boss.name} (${P.wave+1}/${t.boss.questions.length})`,text:e.msg,color:t.boss.color,buttons:i})};window.handleBossAnswer=function(t,e,a){Be(t===e,a)};window.handleBossAnswerStr=function(t,e,a){Be(t===e,a)};function Be(t,e){const a=decodeURIComponent(e);document.querySelectorAll(".boss-choice").forEach(n=>n.disabled=!0),t?(P.hp--,P.score++,oe(ie.challenge),W()):ne();const i=document.getElementById("boss-feedback");i&&(i.innerHTML=`
      <div style="margin-top:0.75rem;padding:0.75rem;border-radius:8px;font-size:0.85rem;
        background:${t?"rgba(34,197,94,0.1)":"rgba(239,68,68,0.1)"};
        border:1px solid ${t?"var(--green)":"var(--red)"};
        color:${t?"var(--green)":"var(--red)"};line-height:1.7">
        ${t?"✓ TEPAT!":"✗ Salah!"} ${a}
      </div>
      <button class="btn btn-primary" style="margin-top:0.75rem;width:100%" onclick="nextBossWave()">Lanjut ⟶</button>
    `),B({title:t?"⚔ SERANGAN BERHASIL!":"💥 DISERANG BOSS!",text:a,color:t?"#22c55e":"#ef4444",buttons:[{label:"LANJUT ⟶",color:t?"#22c55e":"#f59e0b",onClick:()=>window.nextBossWave()}]})}window.nextBossWave=function(){const t=j.find(e=>e.id===P.roomId);if(t!=null&&t.boss)if(P.wave++,P.wave>=t.boss.questions.length){const e=P.hp<=0||P.score>=Math.ceil(t.boss.questions.length/2);gt(P.roomId,e)}else startBossWave()};function gt(t,e){const a=j.find(i=>i.id===t);a&&(e?(W(),oe(ie.boss),U(`
      <div style="text-align:center;padding:1rem">
        <div style="font-size:4rem;margin-bottom:0.75rem">🏆</div>
        <h3 style="color:var(--green);font-family:var(--font-heading);margin-bottom:0.5rem">${a.boss.name} DIKALAHKAN!</h3>
        <p style="color:var(--text-secondary);margin-bottom:1rem">Kamu berhasil melewati semua serangan!</p>
        <div style="display:flex;justify-content:center;gap:0.75rem;flex-wrap:wrap;margin:1rem 0">
          <span class="badge-chip">+${ie.boss} XP BOSS</span>
        </div>
        <button class="btn btn-primary" style="width:100%;margin-top:1rem" onclick="finishRoomAfterBoss('${t}')">
          🎉 Selesaikan Room!
        </button>
      </div>
    `,{noClose:!0}),B({title:`🏆 ${a.boss.name} DIKALAHKAN!`,text:`Selamat! Kamu berhasil meraih +${ie.boss} XP BOSS!`,color:"#22c55e",buttons:[{label:"🎉 SELESAIKAN ROOM",color:"#22c55e",onClick:()=>window.finishRoomAfterBoss(t)}]})):(ne(),U(`
      <div style="text-align:center;padding:1rem">
        <div style="font-size:4rem;margin-bottom:0.75rem">💫</div>
        <h3 style="color:var(--gold);font-family:var(--font-heading);margin-bottom:0.5rem">HAMPIR!</h3>
        <p style="color:var(--text-secondary)">Coba lagi — pelajari holograms dulu untuk petunjuk.</p>
        <button class="btn btn-ghost" style="width:100%;margin-top:1rem" onclick="closeModalAndReturn()">← Kembali ke Hub</button>
        <button class="btn btn-danger" style="width:100%;margin-top:0.5rem" onclick="openBossAgain('${t}')">⚔ Coba Lagi</button>
      </div>
    `,{noClose:!0}),B({title:"💫 BOSS HAMPIR DIKALAHKAN",text:"Coba lagi — pelajari hologram untuk petunjuk!",color:"#f59e0b",buttons:[{label:"⚔ COBA LAGI",color:"#ef4444",onClick:()=>window.openBossAgain(t)},{label:"← KEMBALI KE HUB",color:"#64748b",onClick:()=>window.closeModalAndReturn()}]})))}window.finishRoomAfterBoss=function(t){N(),Le(t)};window.openBossAgain=function(t){De(t)};function ht(t){const e=j.find(i=>i.id===t);if(!(e!=null&&e.pledge))return;const a=e.pledge;U(`
    <div style="text-align:center;padding:0.5rem">
      <div style="font-size:3rem;margin-bottom:1rem">✊</div>
      <h3 style="color:var(--green);font-family:var(--font-heading);margin-bottom:1rem">${a.title}</h3>
      <div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.3);border-radius:12px;padding:1.25rem;text-align:left;margin-bottom:1.5rem">
        <pre style="color:var(--text-primary);font-family:var(--font-body);font-size:0.9rem;white-space:pre-wrap;line-height:1.9">${a.text}</pre>
      </div>
      <button class="btn btn-green btn-lg" style="width:100%" onclick="takePledge('${t}', ${a.xp})">
        ✊ AKU BERJANJI!
      </button>
    </div>
  `),B({title:`✊ ${a.title}`,text:"Aku berjanji menjadi Pandu Digital yang bijak, cerdas, dan siap membangun Indonesia!",color:"#22c55e",buttons:[{label:"✊ AKU BERJANJI!",color:"#22c55e",onClick:()=>window.takePledge(t,a.xp)}]})}window.takePledge=function(t,e){N(),oe(e),W(),A("✊ Ikrar diucapkan! +"+e+" XP","success",3e3),j.find(i=>i.id===t)&&!c.completedRooms.includes(t)&&Le(t)};let X={wave:0,score:0};function yt(){const t=j.reduce((a,i)=>a+(i.items?i.items.length:0),0),e=(c.readHolograms||[]).length;if(e<t){ne(),U(`
      <div style="text-align:center;padding:1rem">
        <div style="font-size:4rem;margin-bottom:0.75rem">🔒</div>
        <h3 style="color:var(--gold);font-family:var(--font-heading);margin-bottom:0.5rem">AKSES FINAL BOSS TERKUNCI!</h3>
        <p style="color:var(--text-secondary);line-height:1.8;font-size:0.95rem;margin-bottom:1rem">
          Kamu harus membaca <b>SELURUH MATERI DIGITAL</b> terlebih dahulu sebelum bertarung di Final Battle!
        </p>
        <div style="background:rgba(245,158,11,0.1);border:1px solid var(--gold);border-radius:10px;padding:0.75rem;margin-bottom:1.25rem;color:var(--gold);font-family:var(--font-mono)">
          📖 Progres Materi Dibaca: <b>${e} / ${t}</b>
        </div>
        <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:1.5rem">
          Silakan jelajahi ruangan M01 - M07 dan ketuk semua papan hologram materi!
        </p>
        <button class="btn btn-primary" style="width:100%" onclick="closeModal()">← Siap, Pelajari Materi!</button>
      </div>
    `),B({title:"🔒 FINAL BOSS TERKUNCI!",text:`Baca seluruh materi digital terlebih dahulu!
Progres: ${e} / ${t} Materi Dibaca`,color:"#f59e0b",buttons:[{label:"← BACA MATERI",color:"#f59e0b",onClick:()=>{N()}}]});return}X={wave:0,score:0},ze()}function ze(){const t=j.find(n=>n.id==="final"),e=t==null?void 0:t.waves[X.wave];if(!e){Oe();return}const a=e.choices.map((n,r)=>`
    <button class="final-choice btn btn-ghost"
      style="width:100%;text-align:left;margin-bottom:0.5rem"
      onclick="handleFinalAnswer(${r}, ${e.answer}, '${encodeURIComponent(e.feedback)}')">
      <span style="color:var(--red);font-family:var(--font-mono);margin-right:0.5rem">${String.fromCharCode(65+r)}.</span>
      ${n}
    </button>
  `).join("");U(`
    <div>
      <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem">
        <span style="font-size:2rem">${e.emoji}</span>
        <div>
          <div style="font-family:var(--font-heading);color:var(--red);font-size:0.9rem">SERANGAN: ${e.enemy}</div>
          <div style="font-family:var(--font-mono);color:var(--text-muted);font-size:0.8rem">GELOMBANG ${X.wave+1}/4</div>
        </div>
        <div style="margin-left:auto;display:flex;gap:0.25rem">
          ${Array.from({length:4},(n,r)=>`<span>${r<X.wave?"💀":"⚔"}</span>`).join("")}
        </div>
      </div>
      <div style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.3);border-radius:8px;padding:1rem;margin-bottom:1rem;font-size:0.9rem;line-height:1.7">
        ${e.question}
      </div>
      ${a}
      <div id="final-feedback"></div>
    </div>
  `,{noClose:!0});const i=e.choices.map((n,r)=>({label:`${String.fromCharCode(65+r)}. ${n}`,color:"#ef4444",onClick:()=>window.handleFinalAnswer(r,e.answer,encodeURIComponent(e.feedback))}));B({title:`⚔ ${e.enemy} (${X.wave+1}/4)`,text:e.question,color:"#ef4444",buttons:i})}window.handleFinalAnswer=function(t,e,a){const i=t===e,n=decodeURIComponent(a);document.querySelectorAll(".final-choice").forEach(o=>o.disabled=!0),i?(X.score++,oe(ie.challenge),W()):ne();const r=document.getElementById("final-feedback");r&&(r.innerHTML=`
    <div style="margin-top:0.75rem;padding:0.75rem;border-radius:8px;font-size:0.85rem;
      background:${i?"rgba(34,197,94,0.1)":"rgba(239,68,68,0.1)"};
      border:1px solid ${i?"var(--green)":"var(--red)"};
      color:${i?"var(--green)":"var(--red)"};line-height:1.7">
      ${i?"✓":"✗"} ${n}
    </div>
    <button class="btn btn-primary" style="margin-top:0.75rem;width:100%" onclick="nextFinalWave()">
      ${X.wave<3?"Musuh berikutnya ⟶":"⚡ SELESAIKAN!"}
    </button>
  `),B({title:i?"⚔ SERANGAN BERHASIL!":"💥 DISERANG MUSUH!",text:n,color:i?"#22c55e":"#ef4444",buttons:[{label:X.wave<3?"MUSUH BERIKUTNYA ⟶":"⚡ SELESAIKAN!",color:i?"#22c55e":"#f59e0b",onClick:()=>window.nextFinalWave()}]})};window.nextFinalWave=function(){X.wave++,X.wave>=4?Oe():ze()};function Oe(){const t=j.find(a=>a.id==="final");Ie("final",t.xp,t.badge),W();const e=t.ceremony;U(`
    <div style="text-align:center;padding:1rem">
      <div style="font-size:4rem;margin-bottom:1rem;animation:float 2s ease-in-out infinite">🏆</div>
      <h2 style="color:var(--gold);font-family:var(--font-heading);margin-bottom:1.25rem;font-size:1.3rem">${e.title}</h2>
      ${e.lines.map(a=>`<p style="color:var(--text-secondary);margin-bottom:0.6rem;line-height:1.7">${a}</p>`).join("")}
      <div style="margin:1.5rem 0;padding:1rem;background:rgba(245,158,11,0.1);border:1px solid var(--gold);border-radius:12px">
        <div style="font-family:var(--font-heading);color:var(--gold);font-size:1.1rem">🥾 PANDU DIGITAL</div>
        <div style="color:var(--text-secondary);font-size:0.85rem;margin-top:0.3rem">${c.playerName}</div>
        <div style="color:var(--text-muted);font-size:0.75rem;margin-top:0.2rem">${c.xp} XP · ${c.badges.length} Badge</div>
      </div>
      <button class="btn btn-gold btn-lg" style="width:100%" onclick="closeModal()">
        🎉 TERIMA KASIH PANDU DIGITAL!
      </button>
    </div>
  `,{noClose:!1}),B({title:`🏆 ${e.title}`,text:`Selamat Pandu Digital ${c.playerName}!

${e.lines.join(`
`)}`,color:"#f59e0b",buttons:[{label:"🎉 TERIMA KASIH PANDU DIGITAL!",color:"#f59e0b",onClick:()=>{N()}}]})}function kt(){p.unlocked?p.active?Ue():Pe():vt()}function vt(){U(`
    <div style="text-align:center;padding:1rem">
      <div style="font-size:3.5rem;margin-bottom:0.5rem">🛠️</div>
      <h3 style="color:var(--gold);font-family:var(--font-heading);margin-bottom:0.5rem">MODE EDITOR 3D</h3>
      <p style="color:var(--text-secondary);font-size:0.85rem;margin-bottom:1.25rem">
        Masukkan password untuk mengakses fitur kustomisasi room & model 3D:
      </p>
      <form id="editor-pass-form" onsubmit="event.preventDefault(); window.checkEditorPassword();">
        <input type="password" id="editor-pass-input" class="name-input" placeholder="PASSWORD..." autofocus style="text-transform:none" />
        <button type="submit" class="btn btn-gold btn-lg" style="width:100%">🔓 BUKA EDITOR</button>
      </form>
    </div>
  `)}window.checkEditorPassword=function(){var e;const t=(e=s("editor-pass-input"))==null?void 0:e.value.trim();He.includes(t)?(p.unlocked=!0,N(),W(),A("🔓 Password Editor benar!","success"),Pe()):(ne(),A("❌ Password salah!","error"))};function $t(){p.objects[c.currentRoom]||(p.objects[c.currentRoom]=[]);const t=p.objects[c.currentRoom],e=j.find(a=>a.id===c.currentRoom);if(e){if(e.isHub&&e.portals)e.portals.forEach(a=>{const i=`portal_hub_${a.to}`;if(!t.find(r=>r.id===i||r.type==="portal"&&r.target===a.to)){const r=a.pos.split(" ");t.push({id:i,type:"portal",target:a.to,label:a.label,color:a.color,x:parseFloat(r[0]),y:0,z:parseFloat(r[2]),rotX:0,rotY:0,rotZ:0,scale:1,src:null})}});else if(!e.isHub){const a=`portal_${e.id}_hub`;if(t.find(n=>n.id===a||n.type==="portal"&&n.target==="hub")||t.push({id:a,type:"portal",target:"hub",label:"⟵ KEMBALI KE HUB",color:"#06b6d4",x:6.5,y:0,z:5,rotX:0,rotY:0,rotZ:0,scale:1,src:null}),e.items&&e.items.forEach((n,r)=>{const o=`holo_${e.id}_${r+1}`;if(!t.find(d=>d.id===o)){const d=e.items.length,u=Math.min(d*.35,1.4),$=d===1?0:(r/(d-1)-.5)*u*2,b=3.2,f=parseFloat((Math.sin($)*b).toFixed(2)),k=parseFloat((-Math.cos($)*b-1).toFixed(2)),v=parseFloat((-$*180/Math.PI).toFixed(1));t.push({id:o,type:"hologram",label:`💡 Materi ${r+1}: ${n.label}`,detail:n.detail,x:f,y:1.55,z:k,rotX:0,rotY:v,rotZ:0,scale:1,src:null})}}),e.boss){const n=`boss_${e.id}`;t.find(o=>o.id===n)||t.push({id:n,type:"boss",label:`⚔ Boss: ${e.boss.name}`,color:e.boss.color,x:0,y:1.5,z:-5.5,rotX:0,rotY:0,rotZ:0,scale:1,src:null})}if(e.puzzle){const n=`puzzle_${e.id}`;t.find(o=>o.id===n)||t.push({id:n,type:"puzzle",label:"🧩 Puzzle Terminal",x:4.5,y:1.6,z:-3,rotX:0,rotY:-35,rotZ:0,scale:1,src:null})}}}}function Ce(){$t();const t=s("select-room-objects");if(!t)return;const e=p.objects[c.currentRoom]||[];let a='<option value="">-- Pilih Objek Untuk Edit / Ganti --</option>';e.forEach((i,n)=>{let r="📦";i.type==="image"?r="🖼️":i.type==="text"?r="🔤":i.type==="portal"?r="🚪":i.type==="hologram"?r="💡":i.type==="boss"?r="⚔️":i.type==="puzzle"&&(r="🧩");const o=i.label||i.text||i.type.toUpperCase(),l=i.id===p.selectedId?"selected":"";a+=`<option value="${i.id}" ${l}>${r} ${n+1}. ${o}</option>`}),t.innerHTML=a}function Pe(){var a;p.active=!0,(a=s("editor-drawer"))==null||a.classList.remove("hidden");const t=document.getElementById("vr-player"),e=document.querySelector("a-camera");t&&e&&(t.setAttribute("position","0 4.2 4.5"),e.setAttribute("rotation","-28 0 0")),Ce(),H(),A("🎨 Mode Creative Editor Aktif! Kamera Free View & Pilih Objek Dropdown.","info",3500)}function Ue(){var a,i;p.active=!1,p.selectedId=null,(a=s("editor-drawer"))==null||a.classList.add("hidden"),(i=s("editor-inspector"))==null||i.classList.add("hidden");const t=document.getElementById("vr-player"),e=document.querySelector("a-camera");t&&e&&(t.setAttribute("position","0 1.6 3"),e.setAttribute("rotation","0 0 0")),H()}function he(t){const a=(p.objects[c.currentRoom]||[]).find(r=>r.id===t);if(!a)return;p.selectedId=t;const i=s("editor-inspector");i&&i.classList.remove("hidden"),s("inspector-title").textContent=`OBJEK: ${a.type.toUpperCase()} (${a.id.slice(-4)})`,s("input-pos-x").value=a.x??0,s("val-pos-x").textContent=a.x??0,s("input-pos-y").value=a.y??1,s("val-pos-y").textContent=a.y??1,s("input-pos-z").value=a.z??-3,s("val-pos-z").textContent=a.z??-3,s("input-rot-y").value=a.rotY??0,s("val-rot-y").textContent=`${a.rotY??0}°`,s("input-scale").value=a.scale??1,s("val-scale").textContent=`${a.scale??1}x`;const n=s("select-room-objects");n&&(n.value=t),H()}function ce(t,e){if(!p.selectedId)return;const i=(p.objects[c.currentRoom]||[]).find(n=>n.id===p.selectedId);i&&(i[t]=parseFloat(e),H())}function xt(){var e;if(!p.selectedId)return;let t=p.objects[c.currentRoom]||[];p.objects[c.currentRoom]=t.filter(a=>a.id!==p.selectedId),p.selectedId=null,(e=s("editor-inspector"))==null||e.classList.add("hidden"),Ce(),H(),A("🗑️ Objek dihapus","info")}function pe(t){p.objects[c.currentRoom]||(p.objects[c.currentRoom]=[]),p.objects[c.currentRoom].push(t),Ce(),he(t.id),A(`✨ ${t.type.toUpperCase()} ditambahkan!`,"success")}function wt(){var r,o,l,d,u,$,b,f,k,v,M,E,R,T,h,z,_,ee,te,G,I,L,O,F,V,y,D;(r=s("btn-editor-toggle"))==null||r.addEventListener("click",()=>{Q(),kt()}),(o=s("btn-close-editor"))==null||o.addEventListener("click",()=>{Q(),Ue()}),(l=s("select-room-objects"))==null||l.addEventListener("change",m=>{var w;const g=m.target.value;g?he(g):(p.selectedId=null,(w=s("editor-inspector"))==null||w.classList.add("hidden"),H())}),(d=s("file-input-glb"))==null||d.addEventListener("change",m=>{const g=m.target.files[0];if(!g)return;const w=new FileReader;w.onload=S=>{pe({id:"glb_"+Date.now(),type:"glb",src:S.target.result,x:0,y:1,z:-3,rotX:0,rotY:0,rotZ:0,scale:1})},w.readAsDataURL(g),m.target.value=""}),(u=s("file-input-png"))==null||u.addEventListener("change",m=>{const g=m.target.files[0];if(!g)return;const w=new FileReader;w.onload=S=>{pe({id:"img_"+Date.now(),type:"image",src:S.target.result,x:0,y:1.8,z:-3,rotX:0,rotY:0,rotZ:0,scale:1,w:2,h:2})},w.readAsDataURL(g),m.target.value=""}),($=s("btn-add-text"))==null||$.addEventListener("click",()=>{const m=prompt("Masukkan Teks 3D:","PANDU SMANSA");m&&pe({id:"txt_"+Date.now(),type:"text",text:m,x:0,y:2.2,z:-3,rotX:0,rotY:0,rotZ:0,scale:1,color:"#06b6d4"})}),(b=s("btn-add-portal"))==null||b.addEventListener("click",()=>{const m=prompt("Tujuan Room (hub, hoax, security, ethics, future):","hub");if(!m)return;const g=prompt("Label Portal:","PORTAL KE "+m.toUpperCase());pe({id:"portal_"+Date.now(),type:"portal",target:m,label:g||"PORTAL",color:"#06b6d4",x:0,y:0,z:-3,rotX:0,rotY:0,rotZ:0,scale:1})}),(f=s("file-input-replace"))==null||f.addEventListener("change",m=>{const g=m.target.files[0];if(!g||!p.selectedId)return;const S=(p.objects[c.currentRoom]||[]).find(ae=>ae.id===p.selectedId);if(!S)return;const K=new FileReader;K.onload=ae=>{S.src=ae.target.result,g.name.toLowerCase().endsWith(".glb")||g.name.toLowerCase().endsWith(".gltf")?S.type="glb":g.type.startsWith("image/")&&(S.type="image"),H(),A("🔄 Model / Logo berhasil diganti!","success")},K.readAsDataURL(g),m.target.value=""});function t(){const m=document.querySelector("a-camera");let g=0;if(m){const x=m.getAttribute("rotation");x&&(g=x.y*Math.PI/180)}const w=Math.cos(g),S=Math.sin(g),K=-Math.sin(g),ae=-Math.cos(g);return{rightX:w,rightZ:S,fwdX:K,fwdZ:ae}}const e=(m=0,g=0,w=0,S=0,K=0)=>{if(!p.selectedId)return;const x=(p.objects[c.currentRoom]||[]).find(Y=>Y.id===p.selectedId);if(!x)return;const{rightX:$e,rightZ:C,fwdX:re,fwdZ:se}=t(),le=m*$e+g*re,de=m*C+g*se;(m||g)&&(x.x=parseFloat(Math.max(-7.4,Math.min(7.4,(x.x??0)+le)).toFixed(2)),x.z=parseFloat(Math.max(-7.4,Math.min(7.4,(x.z??-3)+de)).toFixed(2))),w&&(x.y=parseFloat(Math.max(0,Math.min(5,(x.y??1)+w)).toFixed(2))),S&&(x.rotY=((x.rotY??0)+S+360)%360),K&&(x.scale=parseFloat(Math.max(.1,Math.min(5,(x.scale??1)+K)).toFixed(2))),s("input-pos-x").value=x.x,s("val-pos-x").textContent=x.x,s("input-pos-y").value=x.y,s("val-pos-y").textContent=x.y,s("input-pos-z").value=x.z,s("val-pos-z").textContent=x.z,s("input-rot-y").value=x.rotY,s("val-rot-y").textContent=`${x.rotY}°`,s("input-scale").value=x.scale,s("val-scale").textContent=`${x.scale}x`,H()};(k=s("btn-gizmo-fwd"))==null||k.addEventListener("click",()=>e(0,.4)),(v=s("btn-gizmo-back"))==null||v.addEventListener("click",()=>e(0,-.4)),(M=s("btn-gizmo-left"))==null||M.addEventListener("click",()=>e(-.4,0)),(E=s("btn-gizmo-right"))==null||E.addEventListener("click",()=>e(.4,0)),(R=s("btn-gizmo-up"))==null||R.addEventListener("click",()=>e(0,0,.4)),(T=s("btn-gizmo-down"))==null||T.addEventListener("click",()=>e(0,0,-.4)),(h=s("btn-gizmo-rot-l"))==null||h.addEventListener("click",()=>e(0,0,0,-15,0)),(z=s("btn-gizmo-rot-r"))==null||z.addEventListener("click",()=>e(0,0,0,15,0)),(_=s("btn-gizmo-scale-up"))==null||_.addEventListener("click",()=>e(0,0,0,0,.2)),(ee=s("btn-gizmo-scale-down"))==null||ee.addEventListener("click",()=>e(0,0,0,0,-.2));let a=!1,i=0,n=0;window.addEventListener("mousedown",m=>{p.active&&p.selectedId&&!m.target.closest("#editor-drawer")&&(a=!0,i=m.clientX,n=m.clientY)}),window.addEventListener("mousemove",m=>{if(a&&p.active&&p.selectedId){const g=(m.clientX-i)*.012,w=(m.clientY-n)*.012;(Math.abs(g)>.005||Math.abs(w)>.005)&&(i=m.clientX,n=m.clientY,e(g,-w))}}),window.addEventListener("mouseup",()=>{a=!1}),(te=s("input-pos-x"))==null||te.addEventListener("input",m=>{s("val-pos-x").textContent=m.target.value,ce("x",m.target.value)}),(G=s("input-pos-y"))==null||G.addEventListener("input",m=>{s("val-pos-y").textContent=m.target.value,ce("y",m.target.value)}),(I=s("input-pos-z"))==null||I.addEventListener("input",m=>{s("val-pos-z").textContent=m.target.value,ce("z",m.target.value)}),(L=s("input-rot-y"))==null||L.addEventListener("input",m=>{s("val-rot-y").textContent=`${m.target.value}°`,ce("rotY",m.target.value)}),(O=s("input-scale"))==null||O.addEventListener("input",m=>{s("val-scale").textContent=`${m.target.value}x`,ce("scale",m.target.value)}),(F=s("btn-delete-obj"))==null||F.addEventListener("click",()=>{xt()}),(V=s("btn-save-layout"))==null||V.addEventListener("click",()=>{Se(),W(),A("💾 Layout 3D berhasil disimpan!","success")}),(y=s("btn-export-json"))==null||y.addEventListener("click",()=>{const m="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(p.objects,null,2)),g=document.createElement("a");g.setAttribute("href",m),g.setAttribute("download","sako_layout_3d.json"),g.click(),A("📤 Layout diexport ke JSON","info")}),(D=s("file-input-json"))==null||D.addEventListener("change",m=>{const g=m.target.files[0];if(!g)return;const w=new FileReader;w.onload=S=>{try{const K=JSON.parse(S.target.result);p.objects=K,Se(),H(),W(),A("📥 Layout 3D berhasil diimport!","success")}catch{A("❌ File JSON tidak valid!","error")}},w.readAsText(g),m.target.value=""})}function Ne(){var a,i,n;const t=s("ui-layer");t.style.position="",t.style.pointerEvents="",(a=s("screen-splash"))==null||a.classList.remove("hidden"),(i=s("screen-name"))==null||i.classList.add("hidden"),(n=s("hud"))==null||n.classList.add("hidden");const e=tt()&&c.playerName;s("btn-continue").style.display=e?"inline-flex":"none",s("btn-reset").style.display=e?"inline-flex":"none"}function At(){const t=s("btn-audio");t&&t.addEventListener("click",()=>{fe=!fe,t.textContent=fe?"🔊":"🔇",Q()})}function Et(){setInterval(()=>{const t=document.getElementById("vr-player");if(!t)return;const e=t.getAttribute("position");if(!e)return;let a=Math.max(-7.4,Math.min(7.4,e.x)),i=Math.max(-7.4,Math.min(7.4,e.z));(a!==e.x||i!==e.z)&&t.setAttribute("position",`${a} ${e.y} ${i}`)},50)}function It(){window.addEventListener("contextmenu",e=>{const a=document.getElementById("scene-layer");a&&a.style.display!=="none"&&(e.preventDefault(),e.stopPropagation())});let t=0;window.addEventListener("wheel",e=>{const a=document.getElementById("scene-layer");if(!a||a.style.display==="none"||e.target.closest("#editor-drawer")||e.target.closest("#hud"))return;e.preventDefault();const i=Date.now();if(i-t<100)return;t=i;const n=document.getElementById("vr-player"),r=document.querySelector("a-camera");if(!n||!r||!r.object3D)return;const o=new THREE.Vector3;r.object3D.getWorldDirection(o);const l=-o.x,d=-o.z,u=Math.sqrt(l*l+d*d);if(u<.05)return;const $=l/u,b=d/u,f=n.getAttribute("position")||{x:0,y:1.6,z:3},k=typeof f=="object"?f.x:parseFloat(f.split(" ")[0]),v=typeof f=="object"?f.z:parseFloat(f.split(" ")[2]);if(e.deltaY<0){const M=Math.max(-7.4,Math.min(7.4,k+$*1.4)),E=Math.max(-7.4,Math.min(7.4,v+b*1.4));n.setAttribute("position",`${M.toFixed(2)} 1.6 ${E.toFixed(2)}`),A("🚶 Maju","info",500)}else if(e.deltaY>0){const M=Math.max(-7.4,Math.min(7.4,k-$*1.4)),E=Math.max(-7.4,Math.min(7.4,v-b*1.4));n.setAttribute("position",`${M.toFixed(2)} 1.6 ${E.toFixed(2)}`),A("🔙 Mundur","info",500)}},{passive:!1}),window.addEventListener("mousedown",e=>{var i,n,r,o;const a=document.getElementById("scene-layer");if(!(!a||a.style.display==="none")&&!(e.target.closest("#editor-drawer")||e.target.closest("#hud"))&&(e.button===0||e.button===2)){e.button===2&&(e.preventDefault(),e.stopPropagation()),Q();const l=document.getElementById("vr-3d-popup");if(l&&l.getAttribute("visible")==="true"){const b=document.getElementById("vr-cursor"),f=(i=b==null?void 0:b.components)==null?void 0:i.raycaster,k=(n=f==null?void 0:f.intersectedEls)==null?void 0:n[0];if(k&&k.getAttribute("vr-interactable")){k.click(),A("⚡ Opsi Dipilih!","info",1e3);return}if(J&&Object.keys(J).length>0){const v=Object.keys(J)[0];if(J[v]){J[v](),A("⚡ Opsi Dipilih!","info",1e3);return}}}const d=document.getElementById("vr-cursor"),u=(r=d==null?void 0:d.components)==null?void 0:r.raycaster,$=(o=u==null?void 0:u.intersectedEls)==null?void 0:o[0];$&&($.click(),A("🎯 Target Dipilih!","success",1200),d&&(d.setAttribute("scale","1.4 1.4 1.4"),setTimeout(()=>d.setAttribute("scale","1 1 1"),150)))}})}function Lt(){var t,e,a,i,n;Qe(),ct(),Ne(),At(),wt(),Et(),It(),(t=s("btn-start"))==null||t.addEventListener("click",()=>{var r,o,l;Q(),(r=s("screen-splash"))==null||r.classList.add("hidden"),(o=s("screen-name"))==null||o.classList.remove("hidden"),(l=s("player-name"))==null||l.focus()}),(e=s("btn-continue"))==null||e.addEventListener("click",()=>{Q(),Me()}),(a=s("btn-reset"))==null||a.addEventListener("click",()=>{confirm("Reset semua progress?")&&(et(),window.location.reload())}),(i=s("name-form"))==null||i.addEventListener("submit",r=>{var l;r.preventDefault();const o=(l=s("player-name"))==null?void 0:l.value.trim();if(!o){A("Masukkan namamu!","error");return}c.playerName=o,me(),Me()}),(n=s("btn-exit-vr"))==null||n.addEventListener("click",()=>{Q(),mt()})}document.addEventListener("DOMContentLoaded",Lt);window.closeModal=N;
