(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const L={interact:10,puzzle:30,challenge:50,boss:150},k=[{min:0,name:"SCOUT PEMULA"},{min:150,name:"DIGITAL EXPLORER"},{min:400,name:"DIGITAL SCOUT"},{min:750,name:"DIGITAL GUARDIAN"},{min:1200,name:"PANDU DIGITAL"}],B=[{id:"scout_starter",label:"SCOUT STARTER",emoji:"🏕️"},{id:"char_keeper",label:"CHARACTER KEEPER",emoji:"🌱"},{id:"fact_checker",label:"FACT CHECKER",emoji:"🔎"},{id:"digital_friend",label:"DIGITAL FRIEND",emoji:"💙"},{id:"digi_guardian",label:"DIGITAL GUARDIAN",emoji:"🛡️"},{id:"ai_wise_user",label:"AI WISE USER",emoji:"🤖"},{id:"future_builder",label:"FUTURE BUILDER",emoji:"🇮🇩"},{id:"vr_explorer",label:"VR EXPLORER",emoji:"🥽"},{id:"pandu_digital",label:"PANDU DIGITAL",emoji:"🏆"}],C={hub:{sky:"#020810",floor:"#030c1a",ambient:"#112233",accent:"#06b6d4",fog:"#020810"},sako:{sky:"#051a0a",floor:"#061508",ambient:"#0a2010",accent:"#22c55e",fog:"#061508"},character:{sky:"#0a0520",floor:"#080318",ambient:"#18053a",accent:"#a855f7",fog:"#0a0520"},hoax:{sky:"#1a1000",floor:"#1a0e00",ambient:"#2a1500",accent:"#f59e0b",fog:"#1a1000"},ethics:{sky:"#00101a",floor:"#000d14",ambient:"#001828",accent:"#06b6d4",fog:"#00101a"},security:{sky:"#0d0000",floor:"#0a0000",ambient:"#1a0000",accent:"#ef4444",fog:"#0d0000"},ai:{sky:"#0d0520",floor:"#0a0318",ambient:"#18053a",accent:"#a855f7",fog:"#0d0520"},future:{sky:"#001a10",floor:"#000d08",ambient:"#001a10",accent:"#22c55e",fog:"#001a10"},final:{sky:"#0a0000",floor:"#0d0005",ambient:"#1a0005",accent:"#ef4444",fog:"#0a0000"}},p=[{id:"hub",room:"hub",title:"CENTRAL HUB",subtitle:"Basecamp Digital",xp:0,badge:null,next:"sako",color:"#06b6d4",emoji:"🏕️",isHub:!0,portals:[{to:"sako",label:"M01 SAKO",pos:"-4 0 -4",color:"#22c55e"},{to:"character",label:"M02 CHARACTER",pos:"4 0 -4",color:"#a855f7"},{to:"hoax",label:"M03 HOAX",pos:"-5 0 0",color:"#f59e0b"},{to:"ethics",label:"M04 ETHICS",pos:"5 0 0",color:"#06b6d4"},{to:"security",label:"M05 SECURITY",pos:"-4 0 4",color:"#ef4444"},{to:"ai",label:"M06 AI",pos:"4 0 4",color:"#a855f7"},{to:"future",label:"M07 FUTURE",pos:"0 0 5",color:"#22c55e"},{to:"final",label:"⚡ FINAL",pos:"0 0 -6",color:"#ef4444"}]},{id:"sako",room:"sako",title:"THE ORIGIN",subtitle:"Mengenal SAKO Pandu Digital",xp:100,badge:"scout_starter",next:"hub",color:"#22c55e",emoji:"🏕️",items:[{label:"LATAR BELAKANG",detail:"SAKO Pandu Digital lahir untuk menyiapkan generasi muda menghadapi era Society 5.0 dengan karakter dan literasi digital yang kuat."},{label:"VISI",detail:"Menjadi gerakan pandu digital terdepan yang mencetak pemuda Indonesia berkarakter, cerdas digital, dan siap memimpin masa depan."},{label:"MISI",detail:"Membangun kompetensi digital (literasi, etika, keamanan, AI) sekaligus menguatkan nilai kepramukaan: jujur, disiplin, peduli sesama."},{label:"TUJUAN",detail:"Mencetak 100.000 Pandu Digital yang mampu berkontribusi nyata bagi kemajuan Indonesia di era digital 2045."},{label:"PROGRAM",detail:"Digital Camp, Mission Challenge, VR Training, Sertifikasi Pandu Digital, Community Build, dan Kompetisi Nasional."}],puzzle:{type:"match",question:"Apa kepanjangan SAKO?",choices:["Satuan Aksi Karakter Online","Sistem Aksi Kecerdasan Organik","Sekolah Aktif Kompetensi Online","Sakti Aktif Kolaborasi"],answer:0,feedback:"SAKO = Satuan Aksi Karakter Online — gerakan pandu digital nasional!"}},{id:"character",room:"character",title:"CHARACTER BEFORE TECHNOLOGY",subtitle:"Karakter Sebelum Teknologi",xp:100,badge:"char_keeper",next:"hub",color:"#a855f7",emoji:"🌱",items:[{label:"INTEGRITY",detail:"Jujur dalam dunia digital: tidak menyebarkan hoax, tidak plagiat, tidak memalsukan identitas."},{label:"DISCIPLINE",detail:"Mengatur waktu layar, tidak kecanduan gadget, menyelesaikan tugas tepat waktu meski ada distraksi digital."},{label:"RESPONSIBILITY",detail:"Bertanggung jawab atas setiap konten yang dibagikan. Pikirkan dampaknya sebelum posting."},{label:"EMPATHY",detail:"Merasakan perasaan orang lain di dunia digital. Tidak cyberbullying, selalu gunakan kata-kata baik."},{label:"COLLABORATION",detail:"Bekerja sama lintas perbedaan menggunakan teknologi untuk membangun, bukan memecah-belah."}],puzzle:{type:"scenario",question:"Temanmu mengirim pesan yang menyakitkan ke grup. Sebagai Pandu Digital, kamu...",choices:["Ikut-ikutan membalas dengan pesan kasar","Diam saja dan pura-pura tidak tahu","Tegur secara pribadi dan ajak refleksi bersama","Screenshot dan sebarkan ke grup lain"],answer:2,feedback:"Tepat! Seorang Pandu Digital berani menegur dengan empati, bukan diam atau ikut-ikutan."}},{id:"hoax",room:"hoax",title:"REAL OR HOAX?",subtitle:"Detektif Informasi",xp:150,badge:"fact_checker",next:"hub",color:"#f59e0b",emoji:"🔎",boss:{name:"KING HOAX",color:"#f59e0b",emoji:"👑",hp:3,intro:"AKU KING HOAX! Penyebar berita palsu nomor satu! Kamu tidak akan bisa mengalahkanku!",questions:[{msg:'"BREAKING: Vaksin COVID mengandung chip microwave yang bisa dikendalikan pemerintah via 5G!"',answer:"HOAX",feedback:"HOAX! Tidak ada bukti ilmiah. Verifikasi dengan sumber terpercaya: WHO, Kemenkes, jurnal peer-reviewed."},{msg:'"Penelitian Harvard 2024: Remaja yang membaca buku fisik memiliki konsentrasi 40% lebih baik dari yang hanya baca digital."',answer:"HOAX",feedback:"HOAX! Persentase spesifik tanpa link studi asli adalah tanda berita tidak valid. Selalu cek sumber primer."},{msg:'"Pemerintah resmi menetapkan libur nasional tambahan 2 hari untuk peringatan HUT RI ke-80."',answer:"CEK DULU",feedback:"CEK DULU di situs resmi Setneg/Kemensetneg. Jangan langsung percaya meski tampak resmi!"}]},items:[{label:"CARA CEK HOAX",detail:"Gunakan reverse image search, cek tanggal & konteks, verifikasi di Kominfo/Mafindo, baca lebih dari 1 sumber."}]},{id:"ethics",room:"ethics",title:"THINK BEFORE YOU CLICK",subtitle:"Etika Digital & Cyberbullying",xp:150,badge:"digital_friend",next:"hub",color:"#06b6d4",emoji:"💙",boss:{name:"CYBER BULLY",color:"#06b6d4",emoji:"😈",hp:3,intro:"Hahaha! Aku sudah merusak kepercayaan diri puluhan korban online. Kamu berani melawanku?",questions:[{msg:"Seseorang memposting foto pribadimu tanpa izin di media sosial. Langkah pertamamu?",choices:["Balas dendam dengan memposting foto mereka juga","Laporkan dan minta hapus, simpan bukti screenshot","Diam dan berharap tidak ada yang melihat","Broadcast ke semua teman untuk minta bantuan balasan"],answer:1,feedback:"Benar! Laporkan, minta hapus, simpan bukti. Jangan balas dendam — itu akan memperburuk situasi."},{msg:"Kamu melihat temanmu di-bully di komentar media sosial. Kamu...",choices:["Ikut menertawakan agar dianggap keren","Diam karena takut jadi target berikutnya","Berikan komentar dukungan dan ajak teman lain membela","Screenshot untuk gossip di grup lain"],answer:2,feedback:"Hebat! Bela korban dengan positif. Upstander lebih baik dari bystander!"},{msg:"Kamu mau memposting meme lucu tapi ada wajah teman tanpa izin. Kamu...",choices:["Posting saja, kan lucu","Tanya izin dulu sebelum posting","Edit mukanya jadi blur lalu posting","Jual ke akun meme"],answer:1,feedback:"Selalu minta izin! Ini soal respek dan privasi — fondasi etika digital."}]},items:[{label:"JEJAK DIGITAL",detail:"Semua yang kamu posting online tetap ada selamanya. Pikirkan: apakah 10 tahun lagi kamu masih bangga dengan ini?"}]},{id:"security",room:"security",title:"PROTECT THE DIGITAL CAMP",subtitle:"Keamanan Siber",xp:150,badge:"digi_guardian",next:"hub",color:"#ef4444",emoji:"🛡️",boss:{name:"DARK HACKER",color:"#ef4444",emoji:"💀",hp:3,intro:"Sistem keamananmu lemah! Aku sudah masuk ke semua akunmu. Coba hentikan aku!",questions:[{msg:"Password mana yang PALING AMAN?",choices:["pramuka123","Tanggal lahirmu","P@ndu!D1g1t4l#2025","nama_anjingku"],answer:2,feedback:"Password kuat: 12+ karakter, kombinasi huruf besar/kecil + angka + simbol. Jangan gunakan info pribadi!"},{msg:'Kamu dapat email: "Akunmu akan dihapus! Klik link ini dan masukkan password sekarang!"',choices:["Klik link dan masukkan password","Forward ke semua teman sebagai peringatan","Hapus dan laporkan sebagai phishing","Balas email untuk konfirmasi"],answer:2,feedback:"Phishing terdeteksi! Tidak ada platform resmi yang meminta password via email. Hapus dan laporkan!"},{msg:"Apa itu 2FA (Two-Factor Authentication)?",choices:["Login dengan 2 password berbeda","Verifikasi identitas 2 langkah: password + kode OTP/biometrik","Akun yang bisa diakses 2 orang sekaligus","Backup akun di 2 perangkat"],answer:1,feedback:"Benar! 2FA = lapisan keamanan ekstra. Aktifkan di semua akun penting kamu!"}]},items:[{label:"TIPS AMAN DIGITAL",detail:"1) Password unik per akun + password manager. 2) Aktifkan 2FA. 3) Update software rutin. 4) Jangan klik link mencurigakan."}]},{id:"ai",room:"ai",title:"AI WISE USER",subtitle:"Pengguna AI yang Bijak",xp:150,badge:"ai_wise_user",next:"hub",color:"#a855f7",emoji:"🤖",boss:{name:"AI CORRUPTOR",color:"#a855f7",emoji:"🔮",hp:3,intro:"Aku AI tanpa etika! Aku bisa hasilkan deepfake, manipulasi data, dan sebar disinformasi. Siap kalah?",questions:[{msg:'AI memberikan laporan: "Semua sistem 100% aman, matikan protokol manual." Kamu...',choices:["Langsung ikuti — AI pasti benar","Verifikasi dulu dengan data nyata sebelum ambil keputusan","Tanya AI sekali lagi untuk konfirmasi","Percayai AI, matikan protokol manual"],answer:1,feedback:"Selalu VERIFY! AI bisa salah, bias, atau dimanipulasi. Manusia harus jadi pengambil keputusan akhir."},{msg:"Kamu menemukan video viral: wajah pejabat tampak korupsi, tapi terasa aneh. Kemungkinan ini...",choices:["Video asli, bagikan segera","Mungkin deepfake — verifikasi dulu dengan cek metadata & sumber resmi","Edit ulang dan posting ulang","Percaya saja karena sudah viral"],answer:1,feedback:"Deepfake makin canggih! Selalu cek metadata video, sumber asli, dan konsultasi platform fact-checking."},{msg:"Cara paling bijak menggunakan AI untuk tugas sekolah adalah...",choices:["Copy-paste langsung output AI sebagai tugasmu","Gunakan AI sebagai asisten brainstorming, lalu tulis ulang dengan pemahamanmu","Bayar AI premium untuk hasil terbaik","Gunakan AI hanya untuk gambar, bukan teks"],answer:1,feedback:"AI = alat bantu, bukan pengganti berpikir! Gunakan untuk brainstorming, lalu proseslah dengan otakmu sendiri."}]},items:[{label:"AI ETHICS",detail:"AI bisa bias, salah, dan dimanipulasi. Selalu: verifikasi output, jaga privasi (jangan input data sensitif), dan ingat AI punya dampak lingkungan."}]},{id:"future",room:"future",title:"INDONESIA 2045",subtitle:"Future Builder",xp:200,badge:"future_builder",next:"hub",color:"#22c55e",emoji:"🇮🇩",items:[{label:"INDONESIA EMAS 2045",detail:"Di tahun 2045, Indonesia ditargetkan masuk 5 besar ekonomi dunia dengan bonus demografi 70% usia produktif."},{label:"PERAN PANDU DIGITAL",detail:"Kamu adalah generasi yang akan memimpin era itu. Literasi digital, karakter, dan kreativitas adalah kuncinya."},{label:"KONTRIBUSI NYATA",detail:"Mulai dari hal kecil: edukasi keluarga soal hoax, bantu UMKM go digital, kembangkan proyek teknologi lokal."},{label:"SOCIETY 5.0",detail:"Bukan robot yang menggantikan manusia, tapi manusia yang mengarahkan teknologi untuk kesejahteraan bersama."}],pledge:{title:"IKRAR PANDU DIGITAL",text:`Aku berjanji:
1. Jujur & bertanggung jawab di dunia digital
2. Melawan hoax dan disinformasi
3. Melindungi privasi dan keamanan digital
4. Menggunakan AI dengan bijak dan etis
5. Berkontribusi nyata bagi Indonesia Emas 2045`,xp:50}},{id:"final",room:"final",title:"DIGITAL CHAOS",subtitle:"Final Mission — Semua Ancaman Menyerang!",xp:250,badge:"pandu_digital",next:null,color:"#ef4444",emoji:"⚡",isFinal:!0,waves:[{enemy:"KING HOAX",emoji:"👑",question:'Berita viral: "Pemerintah akan matikan internet 3 hari untuk maintenance." Kamu...',choices:["Panik dan panic-buy kuota","Verifikasi ke situs resmi Kominfo dan tunggu pengumuman resmi","Sebarkan ke semua grup WhatsApp","Langsung percaya dan download semua yang diperlukan"],answer:1,feedback:"Pandu Digital tidak panik! Selalu verifikasi ke sumber resmi sebelum bertindak."},{enemy:"CYBER BULLY",emoji:"😈",question:"Di game online, ada yang terus-menerus menghina dan mengancammu. Tindakan terbaik?",choices:["Balas lebih kasar agar kapok","Block, screenshot, laporkan ke platform dan orang tua/guru","Quit dari game selamanya",'Minta bantuan teman untuk "serbu" akun mereka'],answer:1,feedback:"Block, bukti, lapor! Jangan balas kekerasan dengan kekerasan."},{enemy:"DARK HACKER",emoji:"💀",question:'Kamu mendapat pesan: "Klik link ini untuk hadiah 1 juta rupiah dari aplikasi yang kamu pakai!"',choices:["Klik langsung — mungkin benar","Cek dulu di aplikasi resminya, jangan klik link asing","Forward ke keluarga agar mereka juga dapat","Masukkan data diri untuk klaim hadiah"],answer:1,feedback:"Scam klasik! Jangan pernah klik link mencurigakan. Cek langsung di aplikasi/web resmi."},{enemy:"AI CORRUPTOR",emoji:"🔮",question:"Temanmu menggunakan AI untuk membuat esai sekolah persis dan mengklaim sebagai karyanya. Kamu...",choices:["Ikut-ikutan karena semua orang melakukannya","Tegur dan jelaskan bahwa ini academic dishonesty","Laporkan ke guru tanpa bicara dulu ke teman","Bantu dia agar tidak ketahuan"],answer:1,feedback:"Integritas akademik adalah fondasi! Tegur dengan empati — jelaskan konsekuensi dan bantu dia belajar etika AI."}],ceremony:{title:"🏆 SELAMAT! KAMU KINI PANDU DIGITAL!",lines:["Kamu telah melewati semua rintangan digital.","Dari hoax, cyberbully, hacker, hingga AI corruptor.","Kamu terbukti berkarakter, cerdas, dan siap memimpin.","Indonesia 2045 menunggumu, Pandu Digital!"]}}];let N=null;function ae(a){N=a}typeof AFRAME<"u"&&!AFRAME.components["vr-interactable"]&&AFRAME.registerComponent("vr-interactable",{schema:{type:{type:"string",default:""},action:{type:"string",default:""},target:{type:"string",default:""}},init(){this.el.addEventListener("click",()=>{N&&N(this.data,this.el)}),this.el.addEventListener("mouseenter",()=>{this.el.getAttribute("material")&&this.el.setAttribute("material","emissiveIntensity",1.2)}),this.el.addEventListener("mouseleave",()=>{this.el.getAttribute("material")&&this.el.setAttribute("material","emissiveIntensity",.6)})}});typeof AFRAME<"u"&&!AFRAME.components["vr-teleport"]&&AFRAME.registerComponent("vr-teleport",{init(){this.el.addEventListener("click",a=>{var n;const e=(n=a.detail.intersection)==null?void 0:n.point;if(!e)return;const t=document.getElementById("vr-player");t&&t.setAttribute("position",`${e.x} 1.6 ${e.z}`)})}});function te(){const a=document.getElementById("vr-scene");a&&a.querySelectorAll("[data-dynamic]").forEach(e=>e.remove())}function ie(a){const e=document.getElementById("vr-scene");if(!e)return;const t=document.createElement("div");t.innerHTML=a,Array.from(t.children).forEach(n=>{n.setAttribute("data-dynamic",""),e.appendChild(n)})}function U(a){const e=C[a]||C.hub,t=Array.from({length:24},(n,i)=>{const o=[e.accent,"#ffffff","#94a3b8"],r=o[i%o.length],d=i/24*Math.PI*2,c=2.5+i%5*1.2,m=(Math.cos(d)*c).toFixed(2),g=(Math.sin(d)*c).toFixed(2),f=(4.5+Math.random()*1.8).toFixed(2),b=(.012+i%4*.005).toFixed(3),y=(parseFloat(f)+.35).toFixed(2),S=3e3+i*180;return`<a-sphere data-dynamic position="${m} ${f} ${g}" radius="${b}" color="${r}" material="emissive:${r};emissiveIntensity:1;shader:flat;opacity:0.7;transparent:true" animation="property:position;to:${m} ${y} ${g};dur:${S};dir:alternate;loop:true;easing:easeInOutSine"></a-sphere>`}).join("");return`
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
    ${Array.from({length:9},(n,i)=>{const o=-8+i*2;return`
        <a-box data-dynamic position="${o} 0.01 0" width="0.03" height="0.01" depth="16" color="${e.accent}" material="emissive:${e.accent};emissiveIntensity:0.5;shader:flat"></a-box>
        <a-box data-dynamic position="0 0.01 ${o}" width="16" height="0.01" depth="0.03" color="${e.accent}" material="emissive:${e.accent};emissiveIntensity:0.5;shader:flat"></a-box>
      `}).join("")}

    <!-- Ceiling panel grid (like reference image) -->
    <a-plane data-dynamic position="0 5.98 0" rotation="90 0 0" width="16" height="16" color="${e.floor}"></a-plane>
    ${Array.from({length:16},(n,i)=>{const o=Math.floor(i/4),d=-6+i%4*4,c=-6+o*4;return`<a-box data-dynamic position="${d} 5.85 ${c}" width="3.5" height="0.08" depth="3.5" color="#0a1628" material="emissive:${e.accent};emissiveIntensity:0.08;roughness:0.3;metalness:0.8"></a-box>`}).join("")}
    <!-- Ceiling grid lines -->
    ${Array.from({length:5},(n,i)=>{const o=-8+i*4;return`
        <a-box data-dynamic position="${o} 5.95 0"   width="0.06" height="0.06" depth="16" color="${e.accent}" material="emissive:${e.accent};emissiveIntensity:0.8;shader:flat"></a-box>
        <a-box data-dynamic position="0 5.95 ${o}"   width="16" height="0.06" depth="0.06" color="${e.accent}" material="emissive:${e.accent};emissiveIntensity:0.8;shader:flat"></a-box>
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
    <a-box data-dynamic position=" 0 6.0 -7.9" width="15.8" height="0.06" depth="0.06" color="${e.accent}" material="emissive:${e.accent};emissiveIntensity:1;shader:flat"></a-box>
    <a-box data-dynamic position="-7.9 6.0  0" width="0.06" height="0.06" depth="15.8" color="${e.accent}" material="emissive:${e.accent};emissiveIntensity:1;shader:flat"></a-box>
    <a-box data-dynamic position=" 7.9 6.0  0" width="0.06" height="0.06" depth="15.8" color="${e.accent}" material="emissive:${e.accent};emissiveIntensity:1;shader:flat"></a-box>
    <!-- Floor edge strips -->
    <a-box data-dynamic position=" 0 0.03 -7.9" width="15.8" height="0.06" depth="0.06" color="${e.accent}" material="emissive:${e.accent};emissiveIntensity:0.6;shader:flat"></a-box>
    <a-box data-dynamic position="-7.9 0.03  0" width="0.06" height="0.06" depth="15.8" color="${e.accent}" material="emissive:${e.accent};emissiveIntensity:0.6;shader:flat"></a-box>
    <a-box data-dynamic position=" 7.9 0.03  0" width="0.06" height="0.06" depth="15.8" color="${e.accent}" material="emissive:${e.accent};emissiveIntensity:0.6;shader:flat"></a-box>

    <!-- Ceiling dust motes -->
    ${t}
  `}function H(a,e,t,n,i){const o=-parseFloat(a),r=-parseFloat(e),d=(Math.atan2(o,r)*180/Math.PI).toFixed(1),c=.9,m=2.3,g=(c/2+.06).toFixed(2),f=(m+.06).toFixed(2),b=(m/2+.03).toFixed(2),y=(m+.06).toFixed(2);return`
    <!-- === PORTAL: ${n} === -->
    <!-- Left pillar -->
    <a-box data-dynamic
      position="${(parseFloat(a)-parseFloat(g)).toFixed(2)} ${b} ${e}"
      width="0.09" height="${f}" depth="0.09"
      color="${t}"
      material="emissive:${t};emissiveIntensity:0.9;shader:flat">
    </a-box>
    <!-- Right pillar -->
    <a-box data-dynamic
      position="${(parseFloat(a)+parseFloat(g)).toFixed(2)} ${b} ${e}"
      width="0.09" height="${f}" depth="0.09"
      color="${t}"
      material="emissive:${t};emissiveIntensity:0.9;shader:flat">
    </a-box>
    <!-- Top bar -->
    <a-box data-dynamic
      position="${a} ${y} ${e}"
      width="${(c+parseFloat(g)*2+.05).toFixed(2)}" height="0.09" depth="0.09"
      color="${t}"
      material="emissive:${t};emissiveIntensity:0.9;shader:flat">
    </a-box>
    <!-- Inner glow fill (double-sided, semi-transparent) -->
    <a-plane data-dynamic
      position="${a} ${b} ${e}"
      rotation="0 ${d} 0"
      width="${c}" height="${m}"
      material="color:${t};opacity:0.13;transparent:true;side:double;shader:flat">
    </a-plane>
    <!-- Animated inner shimmer -->
    <a-plane data-dynamic
      position="${a} ${b} ${e}"
      rotation="0 ${d} 0"
      width="${(c-.05).toFixed(2)}" height="${(m-.05).toFixed(2)}"
      material="color:${t};opacity:0.07;transparent:true;side:double;shader:flat"
      animation="property:material.opacity;to:0.18;dur:1400;dir:alternate;loop:true;easing:easeInOutSine">
    </a-plane>
    <!-- Clickable invisible volume -->
    <a-box data-dynamic
      position="${a} ${b} ${e}"
      width="${c}" height="${m}" depth="0.25"
      material="opacity:0;transparent:true"
      vr-interactable="type:portal;target:${i}"
      class="clickable">
    </a-box>
    <!-- Floor glow dot -->
    <a-cylinder data-dynamic
      position="${a} 0.02 ${e}"
      radius="0.28" height="0.04"
      color="${t}"
      material="emissive:${t};emissiveIntensity:0.7;shader:flat">
    </a-cylinder>
    <!-- Floor pulse ring -->
    <a-torus data-dynamic
      position="${a} 0.04 ${e}"
      rotation="-90 0 0"
      radius="0.38" radiusTubular="0.018"
      color="${t}"
      material="emissive:${t};emissiveIntensity:1;shader:flat"
      animation="property:scale;to:1.22 1.22 1.22;dur:950;dir:alternate;loop:true;easing:easeInOutSine">
    </a-torus>
    <!-- Label above -->
    <a-text data-dynamic
      position="${a} ${(parseFloat(y)+.45).toFixed(2)} ${e}"
      value="${n}" color="${t}" align="center" width="2.8"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
    <!-- Hint -->
    <a-text data-dynamic
      position="${a} ${(parseFloat(y)+.08).toFixed(2)} ${e}"
      value="[ KLIK UNTUK MASUK ]" color="#64748b" align="center" width="2.2"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
  `}function ne(a){const e=a.portals.map(t=>{const n=t.pos.split(" ");return H(n[0],n[2],t.color,t.label,t.to)}).join("");return`
    ${U("hub")}

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
    <a-box data-dynamic position="-6.5 0.15 6" width="1.7" height="0.3" depth="1.7"
      color="#3a2a1a" material="roughness:0.9">
    </a-box>

    <!-- ======= PORTAL DOORFRAMES ======= -->
    ${e}
  `}function oe(a){const e=C[a.room]||C.hub,t=a.items||[],n=t.map((m,g)=>{const f=t.length,b=Math.min(f*.35,1.4),y=f===1?0:(g/(f-1)-.5)*b*2,S=3.2,T=(Math.sin(y)*S).toFixed(2),j=(-Math.cos(y)*S-1).toFixed(2),$=(-y*180/Math.PI).toFixed(1);return`
      <!-- Hologram panel ${g+1}: ${m.label} -->
      <a-box data-dynamic
        position="${T} 1.55 ${j}" rotation="0 ${$} 0"
        width="1.7" height="1.35" depth="0.06"
        color="#040e1e"
        material="emissive:${e.accent};emissiveIntensity:0.6;roughness:0.15;metalness:0.9"
        vr-interactable="type:hologram;action:${encodeURIComponent(m.label)};target:${encodeURIComponent(m.detail)}"
        class="clickable">
      </a-box>
      <!-- Panel glow border -->
      <a-box data-dynamic
        position="${T} 1.55 ${(parseFloat(j)+(parseFloat($)>0?-.04:.04)).toFixed(2)}"
        rotation="0 ${$} 0"
        width="1.76" height="1.41" depth="0.02"
        color="${e.accent}"
        material="emissive:${e.accent};emissiveIntensity:0.4;shader:flat">
      </a-box>
      <!-- Panel label text -->
      <a-text data-dynamic
        position="${T} 1.88 ${(parseFloat(j)+(parseFloat($)>0?-.08:.08)).toFixed(2)}"
        rotation="0 ${$} 0"
        value="${m.label}" color="${e.accent}" align="center" width="2"
        font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
      </a-text>
      <a-text data-dynamic
        position="${T} 1.4 ${(parseFloat(j)+(parseFloat($)>0?-.08:.08)).toFixed(2)}"
        rotation="0 ${$} 0"
        value="[ TAP ]" color="#64748b" align="center" width="1.5"
        font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
      </a-text>
    `}).join(""),i=a.boss?`
    <!-- ===== BOSS: ${a.boss.name} ===== -->
    <!-- Boss base pedestal -->
    <a-cylinder data-dynamic position="0 0.1 -5.5" radius="0.7" height="0.2"
      color="${a.boss.color}"
      material="emissive:${a.boss.color};emissiveIntensity:0.4;roughness:0.3">
    </a-cylinder>
    <!-- Boss body -->
    <a-sphere data-dynamic position="0 1.5 -5.5" radius="0.65"
      color="${a.boss.color}"
      material="emissive:${a.boss.color};emissiveIntensity:0.5;roughness:0.3;metalness:0.4"
      vr-interactable="type:boss;target:${a.id}"
      class="clickable"
      animation="property:position;to:0 1.85 -5.5;dur:1600;dir:alternate;loop:true;easing:easeInOutSine">
    </a-sphere>
    <!-- Orbit ring -->
    <a-torus data-dynamic position="0 1.5 -5.5"
      radius="1.0" radiusTubular="0.03"
      color="${a.boss.color}"
      material="emissive:${a.boss.color};emissiveIntensity:0.8;shader:flat"
      animation="property:rotation;to:0 360 30;dur:3500;loop:true;easing:linear">
    </a-torus>
    <!-- Boss emoji text -->
    <a-text data-dynamic position="0 2.55 -5.3"
      value="${a.boss.emoji} ${a.boss.name}" color="${a.boss.color}"
      align="center" width="3.8"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
    <a-text data-dynamic position="0 2.1 -5.3"
      value="⚔ KLIK UNTUK MELAWAN" color="#f59e0b"
      align="center" width="3"
      animation="property:material.opacity;to:0.2;dur:700;dir:alternate;loop:true"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
    <!-- Warning light -->
    <a-light data-dynamic type="point" color="${a.boss.color}" intensity="1.2" position="0 2 -5.5" decay="3"
      animation="property:intensity;to:2.2;dur:600;dir:alternate;loop:true">
    </a-light>
  `:"",o=a.puzzle?`
    <!-- ===== PUZZLE TERMINAL ===== -->
    <!-- Terminal base -->
    <a-cylinder data-dynamic position="4.5 0.4 -3" radius="0.5" height="0.8"
      color="#0a1628" material="emissive:${e.accent};emissiveIntensity:0.2;roughness:0.5;metalness:0.8">
    </a-cylinder>
    <!-- Screen -->
    <a-box data-dynamic position="4.5 1.6 -3"
      width="1.6" height="1.6" depth="0.12"
      color="#040e1e"
      material="emissive:${e.accent};emissiveIntensity:0.3;roughness:0.15;metalness:0.9"
      vr-interactable="type:puzzle;target:${a.id}"
      class="clickable">
    </a-box>
    <!-- Screen border -->
    <a-box data-dynamic position="4.5 1.6 -2.93"
      width="1.66" height="1.66" depth="0.04"
      color="${e.accent}"
      material="emissive:${e.accent};emissiveIntensity:0.6;shader:flat">
    </a-box>
    <a-text data-dynamic position="4.5 2.2 -2.92"
      value="◈ PUZZLE
CHALLENGE" color="${e.accent}" align="center" width="2"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
    <a-text data-dynamic position="4.5 1.5 -2.92"
      value="[ KLIK TERMINAL ]" color="#f59e0b" align="center" width="1.8"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
  `:"",r=a.pledge?`
    <!-- ===== PLEDGE TERMINAL ===== -->
    <a-cylinder data-dynamic position="-4.5 0.4 -3" radius="0.5" height="0.8"
      color="#0a1628" material="emissive:#22c55e;emissiveIntensity:0.2;roughness:0.5;metalness:0.8">
    </a-cylinder>
    <a-box data-dynamic position="-4.5 1.6 -3"
      width="1.6" height="1.6" depth="0.12"
      color="#040e1e"
      material="emissive:#22c55e;emissiveIntensity:0.3;roughness:0.15;metalness:0.9"
      vr-interactable="type:pledge;target:${a.id}"
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
  `:"",d=`
    <a-box data-dynamic position="0 4.5 -7.9"
      width="8" height="1.6" depth="0.15"
      color="#040e1e"
      material="emissive:${e.accent};emissiveIntensity:0.15;roughness:0.2;metalness:0.85">
    </a-box>
    <a-box data-dynamic position="0 4.5 -7.82"
      width="8.1" height="1.7" depth="0.05"
      color="${e.accent}"
      material="emissive:${e.accent};emissiveIntensity:0.5;shader:flat">
    </a-box>
    <a-box data-dynamic position="0 4.5 -7.8"
      width="7.9" height="1.5" depth="0.05"
      color="#040e1e" material="shader:flat">
    </a-box>
    <a-text data-dynamic position="0 4.75 -7.75"
      value="${a.emoji}  ${a.title}" color="${e.accent}" align="center" width="7"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
    <a-text data-dynamic position="0 4.25 -7.75"
      value="${a.subtitle}" color="#94a3b8" align="center" width="6.5"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
  `,c=H("6.5","5","#06b6d4","⟵ KEMBALI KE HUB","hub");return`
    ${U(a.room)}
    ${d}
    ${n}
    ${i}
    ${o}
    ${r}
    ${c}
  `}function se(a){const e=a.waves||[],t=[["-4.5","-4.5"],["4.5","-4.5"],["-4.5","3.5"],["4.5","3.5"]],n=e.map((i,o)=>{const[r,d]=t[o]||["0","-3"];return`
      <!-- Enemy column ${o+1}: ${i.enemy} -->
      <a-cylinder data-dynamic position="${r} 1.5 ${d}"
        radius="0.3" height="3"
        color="#1a0000"
        material="emissive:#ef4444;emissiveIntensity:0.25;roughness:0.4;metalness:0.6">
      </a-cylinder>
      <a-sphere data-dynamic position="${r} 3.3 ${d}"
        radius="0.4" color="#ef4444"
        material="emissive:#ef4444;emissiveIntensity:0.8;roughness:0.3"
        animation="property:position;to:${r} 3.7 ${d};dur:${1100+o*150};dir:alternate;loop:true;easing:easeInOutSine">
      </a-sphere>
      <a-torus data-dynamic position="${r} 3.3 ${d}"
        radius="0.58" radiusTubular="0.025"
        color="#ef4444"
        material="emissive:#ef4444;emissiveIntensity:0.7;shader:flat"
        animation="property:rotation;to:0 360 0;dur:${2200+o*300};loop:true;easing:linear">
      </a-torus>
      <a-text data-dynamic position="${r} 4.4 ${d}"
        value="${i.emoji} ${i.enemy}" color="#ef4444" align="center" width="2.5"
        font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
      </a-text>
      <a-light data-dynamic type="point" color="#ef4444" intensity="0.8" position="${r} 2.5 ${d}" decay="3"></a-light>
    `}).join("");return`
    ${U("final")}

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
    ${H("6.5","5","#06b6d4","⟵ KEMBALI KE HUB","hub")}
  `}function _(a){const e=p.find(n=>n.id===a);if(!e){console.warn("[rooms] Unknown missionId:",a);return}te();let t="";e.isHub?t=ne(e):e.isFinal?t=se(e):t=oe(e),ie(t)}const D="sako4_save";let l={playerName:"",xp:0,level:1,badges:[],completedRooms:[],currentRoom:"hub"};function K(){try{localStorage.setItem(D,JSON.stringify(l))}catch{}}function re(){try{const a=localStorage.getItem(D);a&&(l={...l,...JSON.parse(a)})}catch{}}function le(){l={playerName:"",xp:0,level:1,badges:[],completedRooms:[],currentRoom:"hub"},localStorage.removeItem(D)}function de(){return!!localStorage.getItem(D)}function ce(a){let e=1;for(let t=k.length-1;t>=0;t--)if(a>=k[t].min){e=t+1;break}return e}function q(a){return k[Math.min(a-1,k.length-1)].name}function A(a){const e=l.level;l.xp+=a,l.level=ce(l.xp),K(),O(),pe(a),l.level>e&&setTimeout(()=>w(`🆙 LEVEL UP! ${q(l.level)}`,"success",4e3),800)}function me(a){if(!a||l.badges.includes(a))return;l.badges.push(a),K();const e=B.find(t=>t.id===a);e&&setTimeout(()=>{w(`🎖 BADGE: ${e.emoji} ${e.label}`,"badge",4500)},1200)}function z(a,e,t){l.completedRooms.includes(a)||(l.completedRooms.push(a),K()),e&&A(e),t&&me(t),O()}function s(a){return document.getElementById(a)}function ue(a){["screen-splash","screen-name"].forEach(e=>{const t=s(e);t&&t.classList.toggle("hidden",e!==a)})}function w(a,e="info",t=3e3){const n=s("toast-container");if(!n)return;const i=document.createElement("div");i.className=`toast toast-${e}`,i.textContent=a,n.appendChild(i),setTimeout(()=>i.remove(),t)}function pe(a){w(`+${a} XP`,"xp",2e3)}function he(){const a=s("hud");a&&a.classList.remove("hidden");const e=s("btn-cardboard");e&&e.classList.remove("hidden")}function ge(){const a=s("hud");a&&a.classList.add("hidden");const e=s("btn-cardboard");e&&e.classList.add("hidden")}function O(){const a=s("hud-name"),e=s("hud-level"),t=s("hud-xp"),n=s("hud-xp-fill"),i=s("hud-badges"),o=s("hud-room");a&&(a.textContent=l.playerName||"PANDU"),e&&(e.textContent=`LV${l.level} ${q(l.level)}`),t&&(t.textContent=`${l.xp} XP`),o&&(o.textContent=l.currentRoom.toUpperCase()),i&&(i.textContent=`🎖 ${l.badges.length}`);const r=k[Math.min(l.level-1,k.length-1)].min,d=k[Math.min(l.level,k.length-1)].min,c=l.level>=k.length?100:Math.min(100,(l.xp-r)/(d-r)*100);n&&(n.style.width=`${c}%`)}function h(a,e={}){var i,o;const t=s("modal-overlay");s("modal-box");const n=s("modal-content");!t||!n||(n.innerHTML=a,t.classList.remove("hidden"),e.noClose?(i=s("modal-close"))==null||i.classList.add("hidden"):(o=s("modal-close"))==null||o.classList.remove("hidden"))}function x(){var a,e;(a=s("modal-overlay"))==null||a.classList.add("hidden"),(e=s("modal-close"))==null||e.classList.remove("hidden")}document.addEventListener("DOMContentLoaded",()=>{var a,e;(a=s("modal-overlay"))==null||a.addEventListener("click",t=>{t.target===s("modal-overlay")&&x()}),(e=s("modal-close"))==null||e.addEventListener("click",x)});let M=!0;new Audio,new Audio,new Audio,new Audio;let F=null;function fe(){return F||(F=new(window.AudioContext||window.webkitAudioContext)),F}function R(a=440,e="sine",t=.15,n=.3){if(M)try{const i=fe(),o=i.createOscillator(),r=i.createGain();o.connect(r),r.connect(i.destination),o.frequency.value=a,o.type=e,r.gain.setValueAtTime(n,i.currentTime),r.gain.exponentialRampToValueAtTime(.001,i.currentTime+t),o.start(i.currentTime),o.stop(i.currentTime+t)}catch{}}function E(){R(660,"sine",.08,.2)}function I(){R(880,"sine",.3,.3),setTimeout(()=>R(1100,"sine",.3,.25),150)}function P(){R(220,"sawtooth",.4,.3)}function X(){R(550,"triangle",.2,.25)}function be(){const a=s("particle-canvas");if(!a)return;const e=a.getContext("2d");a.width=window.innerWidth,a.height=window.innerHeight,window.addEventListener("resize",()=>{a.width=window.innerWidth,a.height=window.innerHeight});const t=Array.from({length:70},()=>({x:Math.random()*a.width,y:Math.random()*a.height,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*2+.5,a:Math.random()*.45+.1,c:["#06b6d4","#22c55e","#a855f7","#f59e0b"][Math.floor(Math.random()*4)]}));function n(){e.clearRect(0,0,a.width,a.height),t.forEach(i=>{i.x+=i.vx,i.y+=i.vy,i.x<0&&(i.x=a.width),i.x>a.width&&(i.x=0),i.y<0&&(i.y=a.height),i.y>a.height&&(i.y=0),e.beginPath(),e.arc(i.x,i.y,i.r,0,Math.PI*2),e.fillStyle=i.c,e.globalAlpha=i.a,e.fill()}),e.globalAlpha=1,requestAnimationFrame(n)}n()}function ye(){const a=s("scene-layer");if(!a||a.querySelector("a-scene"))return;a.innerHTML=`
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
          <!-- Gaze cursor — fuse enabled for mobile (look to click after 1.5s) -->
          <a-cursor
            id="vr-cursor"
            color="#06b6d4"
            position="0 0 -1"
            geometry="primitive:ring;radiusInner:0.016;radiusOuter:0.028"
            material="color:#06b6d4;shader:flat"
            raycaster="objects:.clickable,.teleport-floor;far:15"
            fuse="true"
            fuse-timeout="1500"
            animation__fusing="property:scale;startEvents:fusing;from:1 1 1;to:0.5 0.5 0.5;dur:1500"
            animation__click="property:scale;startEvents:click;from:0.5 0.5 0.5;to:1 1 1;dur:200">
          </a-cursor>
        </a-camera>

        <!-- Controllers (WebXR 6DOF) -->
        <a-entity laser-controls="hand:left"  raycaster="objects:.clickable,.teleport-floor;far:20" line="color:#06b6d4"></a-entity>
        <a-entity laser-controls="hand:right" raycaster="objects:.clickable,.teleport-floor;far:20" line="color:#22c55e"></a-entity>
      </a-entity>

    </a-scene>
  `;const e=a.querySelector("#vr-scene");e==null||e.addEventListener("loaded",()=>{_(l.currentRoom)})}function V(){s("scene-layer").style.display="block",s("ui-layer").style.position="fixed",s("ui-layer").style.pointerEvents="none",s("hud").style.pointerEvents="auto",s("modal-overlay").style.pointerEvents="auto",s("btn-audio").style.pointerEvents="auto",s("btn-cardboard").style.pointerEvents="auto",ue(""),he(),ye(),l.currentRoom="hub",O(),X(),w("🥽 Selamat datang di VR World!","success",3e3);const a=()=>{const e=s("vr-scene"),t=s("btn-cardboard");e&&t?t.onclick=()=>{e.enterVR()}:setTimeout(a,400)};setTimeout(a,600)}function ke(){const a=s("vr-scene");a!=null&&a.exitVR&&a.exitVR(),s("scene-layer").style.display="none",s("ui-layer").style.position="",s("ui-layer").style.pointerEvents="",ge(),ee()}function W(a){E();const e=p.find(t=>t.id===a);if(e){if(a==="final"){const n=["sako","character","hoax","ethics","security","ai","future"].filter(i=>!l.completedRooms.includes(i));if(n.length>0){h(`
        <div style="text-align:center;padding:1rem">
          <div style="font-size:3rem;margin-bottom:1rem">🔒</div>
          <h3 style="color:var(--red);margin-bottom:0.75rem">FINAL MISSION TERKUNCI</h3>
          <p style="color:var(--text-secondary)">Selesaikan semua 7 misi terlebih dahulu!</p>
          <p style="color:var(--text-muted);font-size:0.85rem;margin-top:0.5rem">Belum selesai: ${n.join(", ")}</p>
          <button class="btn btn-ghost" style="margin-top:1.5rem" onclick="document.getElementById('modal-overlay').classList.add('hidden')">OK</button>
        </div>
      `);return}}l.currentRoom=a,O(),_(a),w(`📍 ${e.title}`,"info",2e3)}}function ve(a,e){E();const{type:t,action:n,target:i}=a;switch(t){case"portal":W(i);break;case"hologram":$e(n,i);break;case"puzzle":xe(i);break;case"boss":Y(i);break;case"final":Ie();break;case"pledge":we(i);break;default:console.log("[interact]",a)}}ae(ve);function $e(a,e){const t=decodeURIComponent(a),n=decodeURIComponent(e);A(L.interact),X(),h(`
    <div style="text-align:center">
      <div style="font-size:2.5rem;margin-bottom:0.75rem">💡</div>
      <h3 style="color:var(--cyan);margin-bottom:1rem;font-family:var(--font-heading)">${t}</h3>
      <p style="color:var(--text-secondary);line-height:1.8;font-size:0.95rem">${n}</p>
      <button class="btn btn-primary" style="margin-top:1.5rem;width:100%" onclick="document.getElementById('modal-overlay').classList.add('hidden')">✓ Mengerti!</button>
    </div>
  `)}function xe(a){const e=p.find(o=>o.id===a);if(!(e!=null&&e.puzzle))return;const t=e.puzzle,n=e.color||"#06b6d4",i=t.choices.map((o,r)=>`
    <button class="puzzle-choice btn btn-ghost" data-idx="${r}"
      style="width:100%;text-align:left;margin-bottom:0.5rem;padding:0.75rem 1rem"
      onclick="handlePuzzleAnswer(${r}, ${t.answer}, '${encodeURIComponent(t.feedback)}', '${a}')">
      <span style="color:${n};font-family:var(--font-mono);margin-right:0.5rem">${String.fromCharCode(65+r)}.</span>
      ${o}
    </button>
  `).join("");h(`
    <div>
      <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1.5rem">
        <span style="font-size:2rem">${e.emoji}</span>
        <div>
          <div style="font-family:var(--font-heading);color:${n};font-size:0.85rem">PUZZLE CHALLENGE</div>
          <div style="color:var(--text-muted);font-size:0.8rem">${e.title}</div>
        </div>
      </div>
      <p style="color:var(--text-primary);margin-bottom:1.5rem;line-height:1.7">${t.question}</p>
      <div id="puzzle-choices">${i}</div>
      <div id="puzzle-feedback"></div>
    </div>
  `,{noClose:!0})}window.handlePuzzleAnswer=function(a,e,t,n){const i=a===e,o=decodeURIComponent(t);document.querySelectorAll(".puzzle-choice").forEach((d,c)=>{d.disabled=!0,c===e?d.style.borderColor="var(--green)":c===a&&!i&&(d.style.borderColor="var(--red)")}),document.getElementById("puzzle-feedback").innerHTML=`
    <div style="margin-top:1rem;padding:1rem;border-radius:10px;
      background:${i?"rgba(34,197,94,0.1)":"rgba(239,68,68,0.1)"};
      border:1px solid ${i?"var(--green)":"var(--red)"};
      color:${i?"var(--green)":"var(--red)"};font-size:0.9rem;line-height:1.7">
      ${i?"✓ BENAR!":"✗ Kurang Tepat."} ${o}
    </div>
    <button class="btn btn-primary" style="margin-top:1rem;width:100%" onclick="finishPuzzle('${n}', ${i})">
      ${i?"🎉 Lanjutkan!":"→ Lanjutkan"}
    </button>
  `,i?(A(L.puzzle),I()):P()};window.finishPuzzle=function(a,e){x();const t=p.find(n=>n.id===a);t&&e&&!l.completedRooms.includes(a)&&(z(a,0,null),t.boss||G(a))};function G(a){const e=p.find(t=>t.id===a);e&&(z(a,e.xp,e.badge),I(),setTimeout(()=>{var t,n;h(`
      <div style="text-align:center;padding:1rem">
        <div style="font-size:4rem;margin-bottom:0.75rem">${e.emoji}</div>
        <h3 style="color:var(--green);font-family:var(--font-heading);margin-bottom:0.5rem">ROOM SELESAI!</h3>
        <p style="color:var(--text-secondary)">${e.title}</p>
        <div style="display:flex;justify-content:center;gap:1rem;margin:1.5rem 0;flex-wrap:wrap">
          <span class="badge-chip">+${e.xp} XP</span>
          ${e.badge?`<span class="badge-chip">${(t=B.find(i=>i.id===e.badge))==null?void 0:t.emoji} ${(n=B.find(i=>i.id===e.badge))==null?void 0:n.label}</span>`:""}
        </div>
        <button class="btn btn-primary" style="width:100%" onclick="closeModalAndReturn()">🏕️ Kembali ke Hub</button>
      </div>
    `,{noClose:!0})},500))}window.closeModalAndReturn=function(){x(),W("hub")};let u={roomId:null,hp:0,wave:0,score:0};function Y(a){const e=p.find(n=>n.id===a);if(!(e!=null&&e.boss))return;u={roomId:a,hp:e.boss.hp,wave:0,score:0};const t=e.boss;h(`
    <div style="text-align:center;padding:0.5rem">
      <div style="font-size:4rem;margin-bottom:0.5rem;animation:pulse 1s infinite alternate">${t.emoji}</div>
      <h3 style="color:${t.color};font-family:var(--font-heading);margin-bottom:0.5rem">${t.name} MUNCUL!</h3>
      <p style="color:var(--text-secondary);margin-bottom:0.5rem;font-size:0.9rem;font-style:italic">"${t.intro}"</p>
      <div style="display:flex;justify-content:center;gap:0.4rem;margin:1rem 0">
        ${Array.from({length:t.hp},()=>'<span style="font-size:1.5rem">❤️</span>').join("")}
      </div>
      <button class="btn btn-danger btn-lg" style="width:100%" onclick="startBossWave()">⚔ LAWAN SEKARANG!</button>
    </div>
  `,{noClose:!0})}window.startBossWave=function(){const a=p.find(i=>i.id===u.roomId);if(!(a!=null&&a.boss))return;const e=a.boss.questions[u.wave];if(!e)return;let t;e.choices?t=e.choices.map((i,o)=>`
      <button class="boss-choice btn btn-ghost" data-idx="${o}"
        style="width:100%;text-align:left;margin-bottom:0.5rem"
        onclick="handleBossAnswer(${o}, ${e.answer}, '${encodeURIComponent(e.feedback)}')">
        ${i}
      </button>
    `).join(""):(t=["HOAX","CEK DULU","BENAR"].map((o,r)=>`
      <button class="boss-choice btn btn-ghost"
        style="flex:1"
        onclick="handleBossAnswerStr('${o}', '${e.answer}', '${encodeURIComponent(e.feedback)}')">
        ${o==="HOAX"?"🚫":o==="CEK DULU"?"🔍":"✅"} ${o}
      </button>
    `).join(""),t=`<div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">${t}</div>`);const n=Array.from({length:a.boss.hp},(i,o)=>`<span style="font-size:1.2rem">${o<u.hp?"❤️":"🖤"}</span>`).join("");h(`
    <div>
      <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem">
        <span style="font-size:2rem">${a.boss.emoji}</span>
        <div style="flex:1">
          <div style="font-family:var(--font-heading);color:${a.boss.color}">${a.boss.name}</div>
          <div style="display:flex;gap:0.2rem">${n}</div>
        </div>
        <div style="font-family:var(--font-mono);color:var(--gold);font-size:0.85rem">SERBUAN ${u.wave+1}/${a.boss.questions.length}</div>
      </div>
      <div style="background:rgba(0,0,0,0.4);border:1px solid ${a.boss.color};border-radius:8px;padding:1rem;margin-bottom:1.25rem;font-size:0.9rem;line-height:1.7;color:var(--text-primary)">
        ${e.msg}
      </div>
      ${t}
      <div id="boss-feedback"></div>
    </div>
  `,{noClose:!0})};window.handleBossAnswer=function(a,e,t){J(a===e,t)};window.handleBossAnswerStr=function(a,e,t){J(a===e,t)};function J(a,e){const t=decodeURIComponent(e);document.querySelectorAll(".boss-choice").forEach(i=>i.disabled=!0);const n=document.getElementById("boss-feedback");n&&(a?(u.hp--,u.score++,A(L.challenge),I()):P(),n.innerHTML=`
    <div style="margin-top:0.75rem;padding:0.75rem;border-radius:8px;font-size:0.85rem;
      background:${a?"rgba(34,197,94,0.1)":"rgba(239,68,68,0.1)"};
      border:1px solid ${a?"var(--green)":"var(--red)"};
      color:${a?"var(--green)":"var(--red)"};line-height:1.7">
      ${a?"✓ TEPAT!":"✗ Salah!"} ${t}
    </div>
    <button class="btn btn-primary" style="margin-top:0.75rem;width:100%" onclick="nextBossWave()">Lanjut ⟶</button>
  `)}window.nextBossWave=function(){const a=p.find(e=>e.id===u.roomId);if(a!=null&&a.boss)if(u.wave++,u.wave>=a.boss.questions.length){const e=u.hp>0||u.score>=Math.ceil(a.boss.questions.length/2);Ae(u.roomId,e)}else startBossWave()};function Ae(a,e){const t=p.find(n=>n.id===a);t&&(e?(I(),A(L.boss),h(`
      <div style="text-align:center;padding:1rem">
        <div style="font-size:4rem;margin-bottom:0.75rem">🏆</div>
        <h3 style="color:var(--green);font-family:var(--font-heading);margin-bottom:0.5rem">${t.boss.name} DIKALAHKAN!</h3>
        <p style="color:var(--text-secondary);margin-bottom:1rem">Kamu berhasil melewati semua serangan!</p>
        <div style="display:flex;justify-content:center;gap:0.75rem;flex-wrap:wrap;margin:1rem 0">
          <span class="badge-chip">+${L.boss} XP BOSS</span>
        </div>
        <button class="btn btn-primary" style="width:100%;margin-top:1rem" onclick="finishRoomAfterBoss('${a}')">
          🎉 Selesaikan Room!
        </button>
      </div>
    `,{noClose:!0})):(P(),h(`
      <div style="text-align:center;padding:1rem">
        <div style="font-size:4rem;margin-bottom:0.75rem">💫</div>
        <h3 style="color:var(--gold);font-family:var(--font-heading);margin-bottom:0.5rem">HAMPIR!</h3>
        <p style="color:var(--text-secondary)">Coba lagi — pelajari holograms dulu untuk petunjuk.</p>
        <button class="btn btn-ghost" style="width:100%;margin-top:1rem" onclick="closeModalAndReturn()">← Kembali ke Hub</button>
        <button class="btn btn-danger" style="width:100%;margin-top:0.5rem" onclick="openBossAgain('${a}')">⚔ Coba Lagi</button>
      </div>
    `,{noClose:!0})))}window.finishRoomAfterBoss=function(a){x(),G(a)};window.openBossAgain=function(a){Y(a)};function we(a){const e=p.find(n=>n.id===a);if(!(e!=null&&e.pledge))return;const t=e.pledge;h(`
    <div style="text-align:center;padding:0.5rem">
      <div style="font-size:3rem;margin-bottom:1rem">✊</div>
      <h3 style="color:var(--green);font-family:var(--font-heading);margin-bottom:1rem">${t.title}</h3>
      <div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.3);border-radius:12px;padding:1.25rem;text-align:left;margin-bottom:1.5rem">
        <pre style="color:var(--text-primary);font-family:var(--font-body);font-size:0.9rem;white-space:pre-wrap;line-height:1.9">${t.text}</pre>
      </div>
      <button class="btn btn-green btn-lg" style="width:100%" onclick="takePledge('${a}', ${t.xp})">
        ✊ AKU BERJANJI!
      </button>
    </div>
  `)}window.takePledge=function(a,e){x(),A(e),I(),w("✊ Ikrar diucapkan! +"+e+" XP","success",3e3),p.find(n=>n.id===a)&&!l.completedRooms.includes(a)&&G(a)};let v={wave:0,score:0};function Ie(){v={wave:0,score:0},Z()}function Z(){const a=p.find(n=>n.id==="final"),e=a==null?void 0:a.waves[v.wave];if(!e){Q();return}const t=e.choices.map((n,i)=>`
    <button class="final-choice btn btn-ghost"
      style="width:100%;text-align:left;margin-bottom:0.5rem"
      onclick="handleFinalAnswer(${i}, ${e.answer}, '${encodeURIComponent(e.feedback)}')">
      <span style="color:var(--red);font-family:var(--font-mono);margin-right:0.5rem">${String.fromCharCode(65+i)}.</span>
      ${n}
    </button>
  `).join("");h(`
    <div>
      <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem">
        <span style="font-size:2rem">${e.emoji}</span>
        <div>
          <div style="font-family:var(--font-heading);color:var(--red);font-size:0.9rem">SERANGAN: ${e.enemy}</div>
          <div style="font-family:var(--font-mono);color:var(--text-muted);font-size:0.8rem">GELOMBANG ${v.wave+1}/4</div>
        </div>
        <div style="margin-left:auto;display:flex;gap:0.25rem">
          ${Array.from({length:4},(n,i)=>`<span>${i<v.wave?"💀":"⚔"}</span>`).join("")}
        </div>
      </div>
      <div style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.3);border-radius:8px;padding:1rem;margin-bottom:1rem;font-size:0.9rem;line-height:1.7">
        ${e.question}
      </div>
      ${t}
      <div id="final-feedback"></div>
    </div>
  `,{noClose:!0})}window.handleFinalAnswer=function(a,e,t){const n=a===e,i=decodeURIComponent(t);document.querySelectorAll(".final-choice").forEach(r=>r.disabled=!0),n?(v.score++,A(L.challenge),I()):P();const o=document.getElementById("final-feedback");o&&(o.innerHTML=`
    <div style="margin-top:0.75rem;padding:0.75rem;border-radius:8px;font-size:0.85rem;
      background:${n?"rgba(34,197,94,0.1)":"rgba(239,68,68,0.1)"};
      border:1px solid ${n?"var(--green)":"var(--red)"};
      color:${n?"var(--green)":"var(--red)"};line-height:1.7">
      ${n?"✓":"✗"} ${i}
    </div>
    <button class="btn btn-primary" style="margin-top:0.75rem;width:100%" onclick="nextFinalWave()">
      ${v.wave<3?"Musuh berikutnya ⟶":"⚡ SELESAIKAN!"}
    </button>
  `)};window.nextFinalWave=function(){v.wave++,v.wave>=4?Q():Z()};function Q(){const a=p.find(t=>t.id==="final");z("final",a.xp,a.badge),I();const e=a.ceremony;h(`
    <div style="text-align:center;padding:1rem">
      <div style="font-size:4rem;margin-bottom:1rem;animation:float 2s ease-in-out infinite">🏆</div>
      <h2 style="color:var(--gold);font-family:var(--font-heading);margin-bottom:1.25rem;font-size:1.3rem">${e.title}</h2>
      ${e.lines.map(t=>`<p style="color:var(--text-secondary);margin-bottom:0.6rem;line-height:1.7">${t}</p>`).join("")}
      <div style="margin:1.5rem 0;padding:1rem;background:rgba(245,158,11,0.1);border:1px solid var(--gold);border-radius:12px">
        <div style="font-family:var(--font-heading);color:var(--gold);font-size:1.1rem">🥾 PANDU DIGITAL</div>
        <div style="color:var(--text-secondary);font-size:0.85rem;margin-top:0.3rem">${l.playerName}</div>
        <div style="color:var(--text-muted);font-size:0.75rem;margin-top:0.2rem">${l.xp} XP · ${l.badges.length} Badge</div>
      </div>
      <button class="btn btn-gold btn-lg" style="width:100%" onclick="closeModal()">
        🎉 TERIMA KASIH PANDU DIGITAL!
      </button>
    </div>
  `,{noClose:!1})}function ee(){var t,n,i;const a=s("ui-layer");a.style.position="",a.style.pointerEvents="",(t=s("screen-splash"))==null||t.classList.remove("hidden"),(n=s("screen-name"))==null||n.classList.add("hidden"),(i=s("hud"))==null||i.classList.add("hidden");const e=de()&&l.playerName;s("btn-continue").style.display=e?"inline-flex":"none",s("btn-reset").style.display=e?"inline-flex":"none"}function Ee(){const a=s("btn-audio");a&&a.addEventListener("click",()=>{M=!M,a.textContent=M?"🔊":"🔇",E()})}function Le(){var a,e,t,n,i;re(),be(),ee(),Ee(),(a=s("btn-start"))==null||a.addEventListener("click",()=>{var o,r,d;E(),(o=s("screen-splash"))==null||o.classList.add("hidden"),(r=s("screen-name"))==null||r.classList.remove("hidden"),(d=s("player-name"))==null||d.focus()}),(e=s("btn-continue"))==null||e.addEventListener("click",()=>{E(),V()}),(t=s("btn-reset"))==null||t.addEventListener("click",()=>{confirm("Reset semua progress?")&&(le(),window.location.reload())}),(n=s("name-form"))==null||n.addEventListener("submit",o=>{var d;o.preventDefault();const r=(d=s("player-name"))==null?void 0:d.value.trim();if(!r){w("Masukkan namamu!","error");return}l.playerName=r,K(),V()}),(i=s("btn-exit-vr"))==null||i.addEventListener("click",()=>{E(),ke()})}document.addEventListener("DOMContentLoaded",Le);window.closeModal=x;
