(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const He=["pandusmansa2026","pandusmansa20206"],ne={interact:10,puzzle:30,challenge:50,boss:150},J=[{min:0,name:"SCOUT PEMULA"},{min:150,name:"DIGITAL EXPLORER"},{min:400,name:"DIGITAL SCOUT"},{min:750,name:"DIGITAL GUARDIAN"},{min:1200,name:"PANDU DIGITAL"}],we=[{id:"scout_starter",label:"SCOUT STARTER",emoji:"🏕️"},{id:"char_keeper",label:"CHARACTER KEEPER",emoji:"🌱"},{id:"fact_checker",label:"FACT CHECKER",emoji:"🔎"},{id:"digital_friend",label:"DIGITAL FRIEND",emoji:"💙"},{id:"digi_guardian",label:"DIGITAL GUARDIAN",emoji:"🛡️"},{id:"ai_wise_user",label:"AI WISE USER",emoji:"🤖"},{id:"future_builder",label:"FUTURE BUILDER",emoji:"🇮🇩"},{id:"vr_explorer",label:"VR EXPLORER",emoji:"🥽"},{id:"pandu_digital",label:"PANDU DIGITAL",emoji:"🏆"}],be={hub:{sky:"#020810",floor:"#030c1a",ambient:"#112233",accent:"#06b6d4",fog:"#020810"},sako:{sky:"#051a0a",floor:"#061508",ambient:"#0a2010",accent:"#22c55e",fog:"#061508"},character:{sky:"#0a0520",floor:"#080318",ambient:"#18053a",accent:"#a855f7",fog:"#0a0520"},hoax:{sky:"#1a1000",floor:"#1a0e00",ambient:"#2a1500",accent:"#f59e0b",fog:"#1a1000"},ethics:{sky:"#00101a",floor:"#000d14",ambient:"#001828",accent:"#06b6d4",fog:"#00101a"},security:{sky:"#0d0000",floor:"#0a0000",ambient:"#1a0000",accent:"#ef4444",fog:"#0d0000"},ai:{sky:"#0d0520",floor:"#0a0318",ambient:"#18053a",accent:"#a855f7",fog:"#0d0520"},future:{sky:"#001a10",floor:"#000d08",ambient:"#001a10",accent:"#22c55e",fog:"#001a10"},final:{sky:"#0a0000",floor:"#0d0005",ambient:"#1a0005",accent:"#ef4444",fog:"#0a0000"}},M=[{id:"hub",room:"hub",title:"CENTRAL HUB",subtitle:"Basecamp Digital",xp:0,badge:null,next:"sako",color:"#06b6d4",emoji:"🏕️",isHub:!0,portals:[{to:"sako",label:"M01 SAKO",pos:"-4 0 -4",color:"#22c55e"},{to:"character",label:"M02 CHARACTER",pos:"4 0 -4",color:"#a855f7"},{to:"hoax",label:"M03 HOAX",pos:"-5 0 0",color:"#f59e0b"},{to:"ethics",label:"M04 ETHICS",pos:"5 0 0",color:"#06b6d4"},{to:"security",label:"M05 SECURITY",pos:"-4 0 4",color:"#ef4444"},{to:"ai",label:"M06 AI",pos:"4 0 4",color:"#a855f7"},{to:"future",label:"M07 FUTURE",pos:"0 0 5",color:"#22c55e"},{to:"final",label:"⚡ FINAL",pos:"0 0 -6",color:"#ef4444"}]},{id:"sako",room:"sako",title:"THE ORIGIN",subtitle:"Mengenal SAKO Pandu Digital",xp:100,badge:"scout_starter",next:"hub",color:"#22c55e",emoji:"🏕️",items:[{label:"LATAR BELAKANG",detail:"SAKO Pandu Digital lahir untuk menyiapkan generasi muda menghadapi era Society 5.0 dengan karakter dan literasi digital yang kuat."},{label:"VISI",detail:"Menjadi gerakan pandu digital terdepan yang mencetak pemuda Indonesia berkarakter, cerdas digital, dan siap memimpin masa depan."},{label:"MISI",detail:"Membangun kompetensi digital (literasi, etika, keamanan, AI) sekaligus menguatkan nilai kepramukaan: jujur, disiplin, peduli sesama."},{label:"TUJUAN",detail:"Mencetak 100.000 Pandu Digital yang mampu berkontribusi nyata bagi kemajuan Indonesia di era digital 2045."},{label:"PROGRAM",detail:"Digital Camp, Mission Challenge, VR Training, Sertifikasi Pandu Digital, Community Build, dan Kompetisi Nasional."}],puzzle:{type:"match",question:"Apa kepanjangan SAKO?",choices:["Satuan Aksi Karakter Online","Sistem Aksi Kecerdasan Organik","Sekolah Aktif Kompetensi Online","Sakti Aktif Kolaborasi"],answer:0,feedback:"SAKO = Satuan Aksi Karakter Online — gerakan pandu digital nasional!"}},{id:"character",room:"character",title:"CHARACTER BEFORE TECHNOLOGY",subtitle:"Karakter Sebelum Teknologi",xp:100,badge:"char_keeper",next:"hub",color:"#a855f7",emoji:"🌱",items:[{label:"INTEGRITY",detail:"Jujur dalam dunia digital: tidak menyebarkan hoax, tidak plagiat, tidak memalsukan identitas."},{label:"DISCIPLINE",detail:"Mengatur waktu layar, tidak kecanduan gadget, menyelesaikan tugas tepat waktu meski ada distraksi digital."},{label:"RESPONSIBILITY",detail:"Bertanggung jawab atas setiap konten yang dibagikan. Pikirkan dampaknya sebelum posting."},{label:"EMPATHY",detail:"Merasakan perasaan orang lain di dunia digital. Tidak cyberbullying, selalu gunakan kata-kata baik."},{label:"COLLABORATION",detail:"Bekerja sama lintas perbedaan menggunakan teknologi untuk membangun, bukan memecah-belah."}],puzzle:{type:"scenario",question:"Temanmu mengirim pesan yang menyakitkan ke grup. Sebagai Pandu Digital, kamu...",choices:["Ikut-ikutan membalas dengan pesan kasar","Diam saja dan pura-pura tidak tahu","Tegur secara pribadi dan ajak refleksi bersama","Screenshot dan sebarkan ke grup lain"],answer:2,feedback:"Tepat! Seorang Pandu Digital berani menegur dengan empati, bukan diam atau ikut-ikutan."}},{id:"hoax",room:"hoax",title:"REAL OR HOAX?",subtitle:"Detektif Informasi",xp:150,badge:"fact_checker",next:"hub",color:"#f59e0b",emoji:"🔎",boss:{name:"KING HOAX",color:"#f59e0b",emoji:"👑",hp:3,intro:"AKU KING HOAX! Penyebar berita palsu nomor satu! Kamu tidak akan bisa mengalahkanku!",questions:[{msg:'"BREAKING: Vaksin COVID mengandung chip microwave yang bisa dikendalikan pemerintah via 5G!"',answer:"HOAX",feedback:"HOAX! Tidak ada bukti ilmiah. Verifikasi dengan sumber terpercaya: WHO, Kemenkes, jurnal peer-reviewed."},{msg:'"Penelitian Harvard 2024: Remaja yang membaca buku fisik memiliki konsentrasi 40% lebih baik dari yang hanya baca digital."',answer:"HOAX",feedback:"HOAX! Persentase spesifik tanpa link studi asli adalah tanda berita tidak valid. Selalu cek sumber primer."},{msg:'"Pemerintah resmi menetapkan libur nasional tambahan 2 hari untuk peringatan HUT RI ke-80."',answer:"CEK DULU",feedback:"CEK DULU di situs resmi Setneg/Kemensetneg. Jangan langsung percaya meski tampak resmi!"}]},items:[{label:"CARA CEK HOAX",detail:"Gunakan reverse image search, cek tanggal & konteks, verifikasi di Kominfo/Mafindo, baca lebih dari 1 sumber."}]},{id:"ethics",room:"ethics",title:"THINK BEFORE YOU CLICK",subtitle:"Etika Digital & Cyberbullying",xp:150,badge:"digital_friend",next:"hub",color:"#06b6d4",emoji:"💙",boss:{name:"CYBER BULLY",color:"#06b6d4",emoji:"😈",hp:3,intro:"Hahaha! Aku sudah merusak kepercayaan diri puluhan korban online. Kamu berani melawanku?",questions:[{msg:"Seseorang memposting foto pribadimu tanpa izin di media sosial. Langkah pertamamu?",choices:["Balas dendam dengan memposting foto mereka juga","Laporkan dan minta hapus, simpan bukti screenshot","Diam dan berharap tidak ada yang melihat","Broadcast ke semua teman untuk minta bantuan balasan"],answer:1,feedback:"Benar! Laporkan, minta hapus, simpan bukti. Jangan balas dendam — itu akan memperburuk situasi."},{msg:"Kamu melihat temanmu di-bully di komentar media sosial. Kamu...",choices:["Ikut menertawakan agar dianggap keren","Diam karena takut jadi target berikutnya","Berikan komentar dukungan dan ajak teman lain membela","Screenshot untuk gossip di grup lain"],answer:2,feedback:"Hebat! Bela korban dengan positif. Upstander lebih baik dari bystander!"},{msg:"Kamu mau memposting meme lucu tapi ada wajah teman tanpa izin. Kamu...",choices:["Posting saja, kan lucu","Tanya izin dulu sebelum posting","Edit mukanya jadi blur lalu posting","Jual ke akun meme"],answer:1,feedback:"Selalu minta izin! Ini soal respek dan privasi — fondasi etika digital."}]},items:[{label:"JEJAK DIGITAL",detail:"Semua yang kamu posting online tetap ada selamanya. Pikirkan: apakah 10 tahun lagi kamu masih bangga dengan ini?"}]},{id:"security",room:"security",title:"PROTECT THE DIGITAL CAMP",subtitle:"Keamanan Siber",xp:150,badge:"digi_guardian",next:"hub",color:"#ef4444",emoji:"🛡️",boss:{name:"DARK HACKER",color:"#ef4444",emoji:"💀",hp:3,intro:"Sistem keamananmu lemah! Aku sudah masuk ke semua akunmu. Coba hentikan aku!",questions:[{msg:"Password mana yang PALING AMAN?",choices:["pramuka123","Tanggal lahirmu","P@ndu!D1g1t4l#2025","nama_anjingku"],answer:2,feedback:"Password kuat: 12+ karakter, kombinasi huruf besar/kecil + angka + simbol. Jangan gunakan info pribadi!"},{msg:'Kamu dapat email: "Akunmu akan dihapus! Klik link ini dan masukkan password sekarang!"',choices:["Klik link dan masukkan password","Forward ke semua teman sebagai peringatan","Hapus dan laporkan sebagai phishing","Balas email untuk konfirmasi"],answer:2,feedback:"Phishing terdeteksi! Tidak ada platform resmi yang meminta password via email. Hapus dan laporkan!"},{msg:"Apa itu 2FA (Two-Factor Authentication)?",choices:["Login dengan 2 password berbeda","Verifikasi identitas 2 langkah: password + kode OTP/biometrik","Akun yang bisa diakses 2 orang sekaligus","Backup akun di 2 perangkat"],answer:1,feedback:"Benar! 2FA = lapisan keamanan ekstra. Aktifkan di semua akun penting kamu!"}]},items:[{label:"TIPS AMAN DIGITAL",detail:"1) Password unik per akun + password manager. 2) Aktifkan 2FA. 3) Update software rutin. 4) Jangan klik link mencurigakan."}]},{id:"ai",room:"ai",title:"AI WISE USER",subtitle:"Pengguna AI yang Bijak",xp:150,badge:"ai_wise_user",next:"hub",color:"#a855f7",emoji:"🤖",boss:{name:"AI CORRUPTOR",color:"#a855f7",emoji:"🔮",hp:3,intro:"Aku AI tanpa etika! Aku bisa hasilkan deepfake, manipulasi data, dan sebar disinformasi. Siap kalah?",questions:[{msg:'AI memberikan laporan: "Semua sistem 100% aman, matikan protokol manual." Kamu...',choices:["Langsung ikuti — AI pasti benar","Verifikasi dulu dengan data nyata sebelum ambil keputusan","Tanya AI sekali lagi untuk konfirmasi","Percayai AI, matikan protokol manual"],answer:1,feedback:"Selalu VERIFY! AI bisa salah, bias, atau dimanipulasi. Manusia harus jadi pengambil keputusan akhir."},{msg:"Kamu menemukan video viral: wajah pejabat tampak korupsi, tapi terasa aneh. Kemungkinan ini...",choices:["Video asli, bagikan segera","Mungkin deepfake — verifikasi dulu dengan cek metadata & sumber resmi","Edit ulang dan posting ulang","Percaya saja karena sudah viral"],answer:1,feedback:"Deepfake makin canggih! Selalu cek metadata video, sumber asli, dan konsultasi platform fact-checking."},{msg:"Cara paling bijak menggunakan AI untuk tugas sekolah adalah...",choices:["Copy-paste langsung output AI sebagai tugasmu","Gunakan AI sebagai asisten brainstorming, lalu tulis ulang dengan pemahamanmu","Bayar AI premium untuk hasil terbaik","Gunakan AI hanya untuk gambar, bukan teks"],answer:1,feedback:"AI = alat bantu, bukan pengganti berpikir! Gunakan untuk brainstorming, lalu proseslah dengan otakmu sendiri."}]},items:[{label:"AI ETHICS",detail:"AI bisa bias, salah, dan dimanipulasi. Selalu: verifikasi output, jaga privasi (jangan input data sensitif), dan ingat AI punya dampak lingkungan."}]},{id:"future",room:"future",title:"INDONESIA 2045",subtitle:"Future Builder",xp:200,badge:"future_builder",next:"hub",color:"#22c55e",emoji:"🇮🇩",items:[{label:"INDONESIA EMAS 2045",detail:"Di tahun 2045, Indonesia ditargetkan masuk 5 besar ekonomi dunia dengan bonus demografi 70% usia produktif."},{label:"PERAN PANDU DIGITAL",detail:"Kamu adalah generasi yang akan memimpin era itu. Literasi digital, karakter, dan kreativitas adalah kuncinya."},{label:"KONTRIBUSI NYATA",detail:"Mulai dari hal kecil: edukasi keluarga soal hoax, bantu UMKM go digital, kembangkan proyek teknologi lokal."},{label:"SOCIETY 5.0",detail:"Bukan robot yang menggantikan manusia, tapi manusia yang mengarahkan teknologi untuk kesejahteraan bersama."}],pledge:{title:"IKRAR PANDU DIGITAL",text:`Aku berjanji:
1. Jujur & bertanggung jawab di dunia digital
2. Melawan hoax dan disinformasi
3. Melindungi privasi dan keamanan digital
4. Menggunakan AI dengan bijak dan etis
5. Berkontribusi nyata bagi Indonesia Emas 2045`,xp:50}},{id:"final",room:"final",title:"DIGITAL CHAOS",subtitle:"Final Mission — Semua Ancaman Menyerang!",xp:250,badge:"pandu_digital",next:null,color:"#ef4444",emoji:"⚡",isFinal:!0,waves:[{enemy:"KING HOAX",emoji:"👑",question:'Berita viral: "Pemerintah akan matikan internet 3 hari untuk maintenance." Kamu...',choices:["Panik dan panic-buy kuota","Verifikasi ke situs resmi Kominfo dan tunggu pengumuman resmi","Sebarkan ke semua grup WhatsApp","Langsung percaya dan download semua yang diperlukan"],answer:1,feedback:"Pandu Digital tidak panik! Selalu verifikasi ke sumber resmi sebelum bertindak."},{enemy:"CYBER BULLY",emoji:"😈",question:"Di game online, ada yang terus-menerus menghina dan mengancammu. Tindakan terbaik?",choices:["Balas lebih kasar agar kapok","Block, screenshot, laporkan ke platform dan orang tua/guru","Quit dari game selamanya",'Minta bantuan teman untuk "serbu" akun mereka'],answer:1,feedback:"Block, bukti, lapor! Jangan balas kekerasan dengan kekerasan."},{enemy:"DARK HACKER",emoji:"💀",question:'Kamu mendapat pesan: "Klik link ini untuk hadiah 1 juta rupiah dari aplikasi yang kamu pakai!"',choices:["Klik langsung — mungkin benar","Cek dulu di aplikasi resminya, jangan klik link asing","Forward ke keluarga agar mereka juga dapat","Masukkan data diri untuk klaim hadiah"],answer:1,feedback:"Scam klasik! Jangan pernah klik link mencurigakan. Cek langsung di aplikasi/web resmi."},{enemy:"AI CORRUPTOR",emoji:"🔮",question:"Temanmu menggunakan AI untuk membuat esai sekolah persis dan mengklaim sebagai karyanya. Kamu...",choices:["Ikut-ikutan karena semua orang melakukannya","Tegur dan jelaskan bahwa ini academic dishonesty","Laporkan ke guru tanpa bicara dulu ke teman","Bantu dia agar tidak ketahuan"],answer:1,feedback:"Integritas akademik adalah fondasi! Tegur dengan empati — jelaskan konsekuensi dan bantu dia belajar etika AI."}],ceremony:{title:"🏆 SELAMAT! KAMU KINI PANDU DIGITAL!",lines:["Kamu telah melewati semua rintangan digital.","Dari hoax, cyberbully, hacker, hingga AI corruptor.","Kamu terbukti berkarakter, cerdas, dan siap memimpin.","Indonesia 2045 menunggumu, Pandu Digital!"]}}];let Ae=null;function _e(e){Ae=e}typeof AFRAME<"u"&&!AFRAME.components["vr-interactable"]&&AFRAME.registerComponent("vr-interactable",{schema:{type:{type:"string",default:""},action:{type:"string",default:""},target:{type:"string",default:""}},init(){this.el.addEventListener("click",()=>{Ae&&Ae(this.data,this.el)}),this.el.addEventListener("mouseenter",()=>{this.el.getAttribute("material")&&this.el.setAttribute("material","emissiveIntensity",1.2)}),this.el.addEventListener("mouseleave",()=>{this.el.getAttribute("material")&&this.el.setAttribute("material","emissiveIntensity",.6)})}});typeof AFRAME<"u"&&!AFRAME.components["vr-teleport"]&&AFRAME.registerComponent("vr-teleport",{init(){let e=0,t=0,a=!1;window.addEventListener("touchstart",i=>{i.touches&&i.touches.length>0&&(e=i.touches[0].clientX,t=i.touches[0].clientY,a=!1)},{passive:!0}),window.addEventListener("touchmove",i=>{if(i.touches&&i.touches.length>0){const n=Math.abs(i.touches[0].clientX-e),r=Math.abs(i.touches[0].clientY-t);(n>10||r>10)&&(a=!0)}},{passive:!0}),this.el.addEventListener("click",i=>{var o;if(a)return;const n=(o=i.detail.intersection)==null?void 0:o.point;if(!n)return;const r=document.getElementById("vr-player");r&&r.setAttribute("position",`${n.x.toFixed(2)} 1.6 ${n.z.toFixed(2)}`)})}});function Ge(){const e=document.getElementById("vr-scene");e&&e.querySelectorAll("[data-dynamic]").forEach(t=>t.remove())}function Ye(e){const t=document.getElementById("vr-scene");if(!t)return;const a=document.createElement("div");a.innerHTML=e,Array.from(a.children).forEach(i=>{i.setAttribute("data-dynamic",""),t.appendChild(i)})}function Ee(e){const t=be[e]||be.hub,a=Array.from({length:24},(i,n)=>{const r=[t.accent,"#ffffff","#94a3b8"],o=r[n%r.length],l=n/24*Math.PI*2,d=2.5+n%5*1.2,m=(Math.cos(l)*d).toFixed(2),A=(Math.sin(l)*d).toFixed(2),h=(4.5+Math.random()*1.8).toFixed(2),y=(.012+n%4*.005).toFixed(3),x=(parseFloat(h)+.35).toFixed(2),$=3e3+n*180;return`<a-sphere data-dynamic position="${m} ${h} ${A}" radius="${y}" color="${o}" material="emissive:${o};emissiveIntensity:1;shader:flat;opacity:0.7;transparent:true" animation="property:position;to:${m} ${x} ${A};dur:${$};dir:alternate;loop:true;easing:easeInOutSine"></a-sphere>`}).join("");return`
    <a-sky data-dynamic color="${t.sky}"></a-sky>
    <a-fog data-dynamic type="linear" color="${t.fog}" near="12" far="28"></a-fog>

    <!-- Lights -->
    <a-light data-dynamic type="ambient" color="${t.ambient}" intensity="1.4"></a-light>
    <a-light data-dynamic type="point"   color="${t.accent}" intensity="1.8" position="0 5 -1" decay="1"></a-light>
    <a-light data-dynamic type="point"   color="${t.accent}" intensity="0.7" position="-5 3  2" decay="2"></a-light>
    <a-light data-dynamic type="point"   color="${t.accent}" intensity="0.7" position=" 5 3  2" decay="2"></a-light>

    <!-- Floor (teleportable) -->
    <a-plane data-dynamic
      position="0 0 0" rotation="-90 0 0"
      width="16" height="16"
      color="${t.floor}"
      material="roughness:0.12;metalness:0.75"
      vr-teleport class="teleport-floor">
    </a-plane>
    <!-- Floor tile grid -->
    <a-plane data-dynamic position="0 0.008 0" rotation="-90 0 0"
      width="16" height="16"
      material="color:${t.accent};opacity:0.12;transparent:true;shader:flat"
      geometry="primitive:plane;width:16;height:16">
    </a-plane>
    <!-- Floor grid lines (thin boxes every 2m) -->
    ${Array.from({length:9},(i,n)=>{const r=-8+n*2;return`
        <a-box data-dynamic position="${r} 0.01 0" width="0.03" height="0.01" depth="16" color="${t.accent}" material="emissive:${t.accent};emissiveIntensity:0.5;shader:flat"></a-box>
        <a-box data-dynamic position="0 0.01 ${r}" width="16" height="0.01" depth="0.03" color="${t.accent}" material="emissive:${t.accent};emissiveIntensity:0.5;shader:flat"></a-box>
      `}).join("")}

    <!-- Ceiling panel grid (like reference image) -->
    <a-plane data-dynamic position="0 5.98 0" rotation="90 0 0" width="16" height="16" color="${t.floor}"></a-plane>
    ${Array.from({length:16},(i,n)=>{const r=Math.floor(n/4),l=-6+n%4*4,d=-6+r*4;return`<a-box data-dynamic position="${l} 5.85 ${d}" width="3.5" height="0.08" depth="3.5" color="#0a1628" material="emissive:${t.accent};emissiveIntensity:0.08;roughness:0.3;metalness:0.8"></a-box>`}).join("")}
    <!-- Ceiling grid lines -->
    ${Array.from({length:5},(i,n)=>{const r=-8+n*4;return`
        <a-box data-dynamic position="${r} 5.95 0"   width="0.06" height="0.06" depth="16" color="${t.accent}" material="emissive:${t.accent};emissiveIntensity:0.8;shader:flat"></a-box>
        <a-box data-dynamic position="0 5.95 ${r}"   width="16" height="0.06" depth="0.06" color="${t.accent}" material="emissive:${t.accent};emissiveIntensity:0.8;shader:flat"></a-box>
      `}).join("")}
    <!-- Ceiling center light panels -->
    <a-plane data-dynamic position="-2 5.92 -2" rotation="90 0 0" width="1.2" height="1.2"
      material="color:${t.accent};opacity:0.6;transparent:true;shader:flat"></a-plane>
    <a-plane data-dynamic position=" 2 5.92 -2" rotation="90 0 0" width="1.2" height="1.2"
      material="color:${t.accent};opacity:0.6;transparent:true;shader:flat"></a-plane>
    <a-plane data-dynamic position="-2 5.92  2" rotation="90 0 0" width="1.2" height="1.2"
      material="color:${t.accent};opacity:0.6;transparent:true;shader:flat"></a-plane>
    <a-plane data-dynamic position=" 2 5.92  2" rotation="90 0 0" width="1.2" height="1.2"
      material="color:${t.accent};opacity:0.6;transparent:true;shader:flat"></a-plane>
    <!-- Down lights from ceiling panels -->
    <a-light data-dynamic type="point" color="${t.accent}" intensity="0.5" position="-2 5.5 -2" decay="3"></a-light>
    <a-light data-dynamic type="point" color="${t.accent}" intensity="0.5" position=" 2 5.5 -2" decay="3"></a-light>
    <a-light data-dynamic type="point" color="${t.accent}" intensity="0.5" position="-2 5.5  2" decay="3"></a-light>
    <a-light data-dynamic type="point" color="${t.accent}" intensity="0.5" position=" 2 5.5  2" decay="3"></a-light>

    <!-- Walls -->
    <a-box data-dynamic position=" 0  3 -8" width="16" height="6" depth="0.12" color="${t.floor}" material="roughness:0.85"></a-box>
    <a-box data-dynamic position=" 0  3  8" width="16" height="6" depth="0.12" color="${t.floor}" material="roughness:0.85"></a-box>
    <a-box data-dynamic position="-8  3  0" width="0.12" height="6" depth="16" color="${t.floor}" material="roughness:0.85"></a-box>
    <a-box data-dynamic position=" 8  3  0" width="0.12" height="6" depth="16" color="${t.floor}" material="roughness:0.85"></a-box>
    <!-- Ceiling -->
    <a-plane data-dynamic position="0 6.05 0" rotation="90 0 0" width="16" height="16" color="${t.sky}"></a-plane>

    <!-- Ceiling glow strips -->
    <a-box data-dynamic position=" 0 6.0 -7.9" width="15.8" height="0.06" depth="0.06" color="${t.accent}" material="color:${t.accent};shader:flat"></a-box>
    <a-box data-dynamic position="-7.9 6.0  0" width="0.06" height="0.06" depth="15.8" color="${t.accent}" material="color:${t.accent};shader:flat"></a-box>
    <a-box data-dynamic position=" 7.9 6.0  0" width="0.06" height="0.06" depth="15.8" color="${t.accent}" material="color:${t.accent};shader:flat"></a-box>
    <!-- Floor edge strips -->
    <a-box data-dynamic position=" 0 0.03 -7.9" width="15.8" height="0.06" depth="0.06" color="${t.accent}" material="emissive:${t.accent};emissiveIntensity:0.6;shader:flat"></a-box>
    <a-box data-dynamic position="-7.9 0.03  0" width="0.06" height="0.06" depth="15.8" color="${t.accent}" material="emissive:${t.accent};emissiveIntensity:0.6;shader:flat"></a-box>
    <a-box data-dynamic position=" 7.9 0.03  0" width="0.06" height="0.06" depth="15.8" color="${t.accent}" material="emissive:${t.accent};emissiveIntensity:0.6;shader:flat"></a-box>

    <!-- Ceiling dust motes -->
    ${a}
  `}function ye(e,t,a,i,n,r=null,o=null,l=null,d=1){const m=-parseFloat(e),A=-parseFloat(t),h=l!==null?l:(Math.atan2(m,A)*180/Math.PI).toFixed(1),y=.9,x=2.3,$=(y/2+.06).toFixed(2),P=(x+.06).toFixed(2),S=(x/2+.03).toFixed(2),R=(x+.06).toFixed(2),j=r?"custom":"portal",b=r||n;let z="";const _=o&&(o.toLowerCase().includes(".glb")||o.toLowerCase().includes(".gltf")||o.startsWith("data:model/")||o.startsWith("data:application/octet-stream"));return o&&_?z=`
      <a-gltf-model data-dynamic position="${e} 0 ${t}" rotation="0 ${h} 0" scale="${d} ${d} ${d}" src="${o}"
        vr-interactable="type:${j};action:${n};target:${b}"
        class="clickable">
      </a-gltf-model>
    `:o?z=`
      <a-image data-dynamic position="${e} ${S} ${t}" rotation="0 ${h} 0" scale="${d} ${d} ${d}" width="2.2" height="2.5" src="${o}" material="side:double;transparent:true"
        vr-interactable="type:${j};action:${n};target:${b}"
        class="clickable">
      </a-image>
    `:z=`
      <!-- Left pillar -->
      <a-box data-dynamic position="${(parseFloat(e)-parseFloat($)).toFixed(2)} ${S} ${t}" width="0.09" height="${P}" depth="0.09" color="${a}" material="color:${a};shader:flat" vr-interactable="type:${j};action:${n};target:${b}" class="clickable"></a-box>
      <!-- Right pillar -->
      <a-box data-dynamic position="${(parseFloat(e)+parseFloat($)).toFixed(2)} ${S} ${t}" width="0.09" height="${P}" depth="0.09" color="${a}" material="color:${a};shader:flat" vr-interactable="type:${j};action:${n};target:${b}" class="clickable"></a-box>
      <!-- Top bar -->
      <a-box data-dynamic position="${e} ${R} ${t}" width="${(y+parseFloat($)*2+.05).toFixed(2)}" height="0.09" depth="0.09" color="${a}" material="color:${a};shader:flat" vr-interactable="type:${j};action:${n};target:${b}" class="clickable"></a-box>
      <!-- Inner glow fill -->
      <a-plane data-dynamic position="${e} ${S} ${t}" rotation="0 ${h} 0" width="${y}" height="${x}" material="color:${a};opacity:0.13;transparent:true;side:double;shader:flat" vr-interactable="type:${j};action:${n};target:${b}" class="clickable"></a-plane>
    `,`
    <!-- === PORTAL: ${i} === -->
    ${z}

    <!-- Clickable volume (Handles both teleportation & Editor selection) -->
    <a-box data-dynamic
      position="${e} ${S} ${t}"
      width="${y}" height="${x}" depth="0.25"
      material="opacity:0;transparent:true"
      vr-interactable="type:${j};action:${n};target:${b}"
      class="clickable">
    </a-box>
    <!-- Floor glow dot -->
    <a-cylinder data-dynamic
      position="${e} 0.02 ${t}"
      radius="0.28" height="0.04"
      color="${a}"
      material="color:${a};shader:flat"
      vr-interactable="type:${j};action:${n};target:${b}"
      class="clickable">
    </a-cylinder>
    <!-- Label above -->
    <a-text data-dynamic
      position="${e} ${(parseFloat(R)+.45).toFixed(2)} ${t}"
      value="${i}" color="${a}" align="center" width="2.8"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt"
      vr-interactable="type:${j};action:${n};target:${b}"
      class="clickable">
    </a-text>
  `}function Ve(e,t=[]){var n,r;const a=(((r=(n=window.state)==null?void 0:n.completedRooms)==null?void 0:r.length)||0)>=7,i=e.portals.map(o=>{const l=o.pos.split(" "),d=`portal_hub_${o.to}`,m=(t||[]).find(R=>R.id===d||R.type==="portal"&&R.target===o.to),A=(m==null?void 0:m.x)??l[0],h=(m==null?void 0:m.z)??l[2];let y=(m==null?void 0:m.color)||o.color,x=(m==null?void 0:m.label)||o.label;const $=(m==null?void 0:m.src)||null,P=(m==null?void 0:m.rotY)??null,S=(m==null?void 0:m.scale)??1;return o.to==="final"&&!a&&(x="🔒 FINAL (TERKUNCI)",y="#ef4444"),ye(A,h,y,x,o.to,d,$,P,S)}).join("");return`
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
  `}function Xe(e,t=[]){const a=be[e.room]||be.hub,i=e.items||[],n=i.map((g,T)=>{const u=i.length,f=Math.min(u*.35,1.4),v=u===1?0:(T/(u-1)-.5)*f*2,L=3.2,K=(Math.sin(v)*L).toFixed(2),ee=(-Math.cos(v)*L-1).toFixed(2),k=(-v*180/Math.PI).toFixed(1),$e=`holo_${e.id}_${T+1}`,I=(t||[]).find(Ke=>Ke.id===$e),oe=(I==null?void 0:I.x)??K,re=(I==null?void 0:I.y)??1.55,se=(I==null?void 0:I.z)??ee,le=(I==null?void 0:I.rotY)??k,Y=(I==null?void 0:I.scale)??1,q=(I==null?void 0:I.src)||null,Fe=q&&(q.toLowerCase().includes(".glb")||q.toLowerCase().includes(".gltf")||q.startsWith("data:model/")||q.startsWith("data:application/octet-stream"));return q&&Fe?`
        <!-- Custom 3D GLB Model for Hologram ${T+1} -->
        <a-gltf-model data-dynamic position="${oe} ${re} ${se}" rotation="0 ${le} 0" scale="${Y} ${Y} ${Y}" src="${q}"
          vr-interactable="type:hologram;action:${encodeURIComponent(g.label)};target:${encodeURIComponent(g.detail)}"
          class="clickable">
        </a-gltf-model>
      `:q?`
        <!-- Custom PNG Image for Hologram ${T+1} -->
        <a-image data-dynamic position="${oe} ${re} ${se}" rotation="0 ${le} 0" scale="${Y} ${Y} ${Y}" width="2.2" height="1.8" src="${q}" material="side:double;transparent:true"
          vr-interactable="type:hologram;action:${encodeURIComponent(g.label)};target:${encodeURIComponent(g.detail)}"
          class="clickable">
        </a-image>
      `:`
      <!-- Hologram Kiosk ${T+1}: ${g.label} -->
      <a-entity data-dynamic position="${oe} ${re} ${se}" rotation="0 ${le} 0" scale="${Y} ${Y} ${Y}">
        <!-- Base metallic column -->
        <a-cylinder position="0 -0.8 0" radius="0.08" height="0.9" color="#0f172a" material="roughness:0.3;metalness:0.8"></a-cylinder>
        <!-- Floor glow cylinder base -->
        <a-cylinder position="0 -1.25 0" radius="0.45" height="0.04" color="${a.accent}" material="color:${a.accent};shader:flat"></a-cylinder>

        <!-- Outer Glowing Neon Border -->
        <a-box position="0 0 -0.02" width="2.24" height="1.44" depth="0.04"
          color="${a.accent}" material="color:${a.accent};shader:flat"
          vr-interactable="type:hologram;action:${encodeURIComponent(g.label)};target:${encodeURIComponent(g.detail)}" class="clickable">
        </a-box>

        <!-- Inner Deep Obsidian Glass Screen (High Contrast!) -->
        <a-box position="0 0 0" width="2.16" height="1.36" depth="0.05"
          color="#020813" material="color:#020813;shader:flat"
          vr-interactable="type:hologram;action:${encodeURIComponent(g.label)};target:${encodeURIComponent(g.detail)}" class="clickable">
        </a-box>

        <!-- Header Number Badge Plate -->
        <a-box position="0 0.48 0.04" width="0.9" height="0.26" depth="0.02"
          color="${a.accent}" material="color:${a.accent};shader:flat">
        </a-box>
        <a-text position="0 0.48 0.06" value="MATERI 0${T+1}" color="#020813" align="center" width="2.2"
          font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
        </a-text>

        <!-- Main Title Text (Pure Bright White for Maximum Contrast!) -->
        <a-text position="0 0.12 0.05" value="${g.label}" color="#ffffff" align="center" width="2.5" wrap-count="22"
          font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt"
          vr-interactable="type:hologram;action:${encodeURIComponent(g.label)};target:${encodeURIComponent(g.detail)}" class="clickable">
        </a-text>

        <!-- Bottom Action Pill Button -->
        <a-box position="0 -0.42 0.04" width="1.7" height="0.28" depth="0.02"
          color="#0284c7" material="color:#0284c7;shader:flat"
          vr-interactable="type:hologram;action:${encodeURIComponent(g.label)};target:${encodeURIComponent(g.detail)}" class="clickable">
        </a-box>
        <a-text position="0 -0.42 0.06" value="📖 BACA MATERI [ TAP ]" color="#ffffff" align="center" width="2.2"
          font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt"
          vr-interactable="type:hologram;action:${encodeURIComponent(g.label)};target:${encodeURIComponent(g.detail)}" class="clickable">
        </a-text>
      </a-entity>
    `}).join(""),r=`boss_${e.id}`,o=(t||[]).find(g=>g.id===r),l=(o==null?void 0:o.x)??0,d=(o==null?void 0:o.y)??1.5,m=(o==null?void 0:o.z)??-5.5,A=(o==null?void 0:o.rotY)??0,h=(o==null?void 0:o.scale)??1,y=(o==null?void 0:o.src)||null,x=e.items?e.items.filter(g=>{var T;return(((T=window.state)==null?void 0:T.readHolograms)||[]).includes(`${e.id}_${g.label}`)}).length:0,$=!e.items||x>=e.items.length,P=$?"⚡ BOSS UNLOCKED! ⚔ TAP UNTUK MELAWAN":`🔒 TERKUNCI (${x}/${e.items.length} MATERI DIBACA)`,S=$?"#f59e0b":"#ef4444";let R="";if(e.boss){const g=y&&(y.toLowerCase().includes(".glb")||y.toLowerCase().includes(".gltf")||y.startsWith("data:model/")||y.startsWith("data:application/octet-stream")),T=$?"":`
      <a-torus data-dynamic position="${l} ${d} ${m}" radius="0.9" radiusTubular="0.03" color="#f59e0b" material="color:#f59e0b;shader:flat;emissive:#f59e0b;emissiveIntensity:0.9" animation="property:rotation;to:0 360 360;dur:2500;loop:true;easing:linear"></a-torus>
    `;y&&g?R=`
        <!-- Custom 3D GLB Model for Boss NPC -->
        <a-gltf-model data-dynamic position="${l} ${d} ${m}" rotation="0 ${A} 0" scale="${h} ${h} ${h}" src="${y}"
          vr-interactable="type:boss;target:${e.id}"
          class="clickable">
        </a-gltf-model>
        ${T}
        <a-text data-dynamic position="${l} ${(parseFloat(d)+1.1).toFixed(2)} ${m}"
          value="${e.boss.emoji} ${e.boss.name}" color="${e.boss.color}" align="center" width="3.5"
          font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
        </a-text>
        <a-text data-dynamic position="${l} ${(parseFloat(d)+.75).toFixed(2)} ${m}"
          value="${P}" color="${S}" align="center" width="2.5"
          font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
        </a-text>
      `:y?R=`
        <!-- Custom PNG Image for Boss -->
        <a-image data-dynamic position="${l} ${d} ${m}" rotation="0 ${A} 0" scale="${h} ${h} ${h}" width="2.5" height="2.5" src="${y}" material="side:double;transparent:true"
          vr-interactable="type:boss;target:${e.id}"
          class="clickable">
        </a-image>
        ${T}
        <a-text data-dynamic position="${l} ${(parseFloat(d)+.75).toFixed(2)} ${m}"
          value="${P}" color="${S}" align="center" width="2.5"
          font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
        </a-text>
      `:R=`
        <!-- ===== BOSS NPC: ${e.boss.name} ===== -->
        <!-- Base pedestal -->
        <a-cylinder data-dynamic position="${l} 0.1 ${m}" radius="0.5" height="0.1"
          color="${e.boss.color}" material="color:${e.boss.color};shader:flat"
          vr-interactable="type:boss;target:${e.id}" class="clickable">
        </a-cylinder>
        <!-- Core octahedron crystal -->
        <a-octahedron data-dynamic position="${l} ${d} ${m}" radius="0.45" scale="${h} ${h} ${h}"
          color="${e.boss.color}" material="color:${e.boss.color};shader:flat"
          vr-interactable="type:boss;target:${e.id}"
          class="clickable"
          animation="property:rotation;to:0 360 0;dur:4000;loop:true;easing:linear"
          animation__float="property:position;to:${l} ${(parseFloat(d)+.2).toFixed(2)} ${m};dur:1600;dir:alternate;loop:true;easing:easeInOutSine">
        </a-octahedron>
        <!-- Orbiting glow ring -->
        <a-torus data-dynamic position="${l} ${d} ${m}"
          radius="0.65" radiusTubular="0.02" scale="${h} ${h} ${h}"
          color="${e.boss.color}" material="color:${e.boss.color};shader:flat"
          vr-interactable="type:boss;target:${e.id}" class="clickable"
          animation="property:rotation;to:360 180 0;dur:3000;loop:true;easing:linear">
        </a-torus>
        ${T}
        <!-- Boss emoji text -->
        <a-text data-dynamic position="${l} ${(parseFloat(d)+.95).toFixed(2)} ${m}"
          value="${e.boss.emoji} ${e.boss.name}" color="${e.boss.color}"
          align="center" width="3.5"
          font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
        </a-text>
        <a-text data-dynamic position="${l} ${(parseFloat(d)+.6).toFixed(2)} ${m}"
          value="${P}" color="${S}"
          align="center" width="2.5"
          font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
        </a-text>
        <!-- Clickable hit volume -->
        <a-box data-dynamic position="${l} ${d} ${m}" width="1.8" height="2.4" depth="1.8"
          material="opacity:0;transparent:true"
          vr-interactable="type:boss;target:${e.id}" class="clickable">
        </a-box>
      `}const j=`puzzle_${e.id}`,b=(t||[]).find(g=>g.id===j),z=(b==null?void 0:b.x)??4.5,_=(b==null?void 0:b.y)??1.6,Z=(b==null?void 0:b.z)??-3,Q=(b==null?void 0:b.rotY)??-35,G=(b==null?void 0:b.scale)??1,w=(b==null?void 0:b.src)||null;let E="";if(e.puzzle){const g=w&&(w.toLowerCase().includes(".glb")||w.toLowerCase().includes(".gltf")||w.startsWith("data:model/")||w.startsWith("data:application/octet-stream"));w&&g?E=`
        <a-gltf-model data-dynamic position="${z} ${_} ${Z}" rotation="0 ${Q} 0" scale="${G} ${G} ${G}" src="${w}"
          vr-interactable="type:puzzle;target:${e.id}"
          class="clickable">
        </a-gltf-model>
      `:E=`
        <!-- ===== PUZZLE TERMINAL ===== -->
        <a-entity data-dynamic position="${z} ${_} ${Z}" rotation="0 ${Q} 0" scale="${G} ${G} ${G}">
          <a-cylinder position="0 -0.8 0" radius="0.1" height="0.9" color="#0f172a" material="roughness:0.3;metalness:0.8"></a-cylinder>
          <a-cylinder position="0 -1.25 0" radius="0.45" height="0.04" color="${a.accent}" material="color:${a.accent};shader:flat"></a-cylinder>
          <a-box position="0 0 -0.02" width="1.64" height="1.14" depth="0.04" color="${a.accent}" material="color:${a.accent};shader:flat" vr-interactable="type:puzzle;target:${e.id}" class="clickable"></a-box>
          <a-box position="0 0 0" width="1.56" height="1.06" depth="0.05" color="#020813" material="color:#020813;shader:flat" vr-interactable="type:puzzle;target:${e.id}" class="clickable"></a-box>
          <a-text position="0 0.22 0.05" value="🧩 PUZZLE CHALLENGE" color="#ffffff" align="center" width="2.4" font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt" vr-interactable="type:puzzle;target:${e.id}" class="clickable"></a-text>
          <a-box position="0 -0.25 0.04" width="1.3" height="0.28" depth="0.02" color="#f59e0b" material="color:#f59e0b;shader:flat" vr-interactable="type:puzzle;target:${e.id}" class="clickable"></a-box>
          <a-text position="0 -0.25 0.06" value="[ TAP UNTUK MULAI ]" color="#020813" align="center" width="2.0" font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt" vr-interactable="type:puzzle;target:${e.id}" class="clickable"></a-text>
        </a-entity>
      `}const B=e.pledge?`
    <!-- ===== PLEDGE TERMINAL ===== -->
    <a-cylinder data-dynamic position="-4.5 0.4 -3" radius="0.5" height="0.8"
      color="#0a1628" material="emissive:#22c55e;emissiveIntensity:0.2;roughness:0.5;metalness:0.8">
    </a-cylinder>
    <a-box data-dynamic position="-4.5 1.6 -3"
      width="1.6" height="1.6" depth="0.12"
      color="#040e1e"
      material="emissive:#22c55e;emissiveIntensity:0.3;roughness:0.15;metalness:0.9"
      vr-interactable="type:pledge;target:${e.id}"
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
      value="${e.emoji}  ${e.title}" color="${a.accent}" align="center" width="7"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
    <a-text data-dynamic position="0 4.25 -7.75"
      value="${e.subtitle}" color="#94a3b8" align="center" width="6.5"
      font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
    </a-text>
  `,V=ye("6.5","5","#06b6d4","⟵ KEMBALI KE HUB","hub");return`
    ${Ee(e.room)}
    ${F}
    ${n}
    ${R}
    ${E}
    ${B}
    ${V}
  `}function We(e,t=[]){const a=e.waves||[],i=[["-4.5","-4.5"],["4.5","-4.5"],["-4.5","3.5"],["4.5","3.5"]],n=a.map((r,o)=>{const[l,d]=i[o]||["0","-3"];return`
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
    ${(()=>{const r=`portal_${e.id}_hub`,o=(t||[]).find($=>$.id===r||$.type==="portal"&&$.target==="hub"),l=(o==null?void 0:o.x)??"6.5",d=(o==null?void 0:o.z)??"5",m=(o==null?void 0:o.color)||"#06b6d4",A=(o==null?void 0:o.label)||"⟵ KEMBALI KE HUB",h=(o==null?void 0:o.src)||null,y=(o==null?void 0:o.rotY)??null,x=(o==null?void 0:o.scale)??1;return ye(l,d,m,A,"hub",r,h,y,x)})()}
  `}function qe(e=[],t=null){return!e||e.length===0?"":e.map(a=>{const i=a.id===t,n=`${a.x??0} ${a.y??1} ${a.z??-3}`,r=`${a.rotX??0} ${a.rotY??0} ${a.rotZ??0}`,o=`${a.scale??1} ${a.scale??1} ${a.scale??1}`;let l="";a.type==="glb"?l=`
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
    `:"";return l+d}).join("")}function Je(e,t=[],a=null){const i=M.find(r=>r.id===e);if(!i){console.warn("[rooms] Unknown missionId:",e);return}Ge();let n="";i.isHub?n=Ve(i,t):i.isFinal?n=We(i,t):n=Xe(i,t),n+=qe(t,a),Ye(n)}const ke="sako4_save",Me="sako4_custom_objects";let c={playerName:"",xp:0,level:1,badges:[],completedRooms:[],readHolograms:[],currentRoom:"hub"},p={unlocked:!1,active:!1,selectedId:null,objects:{}};window.editorState=p;window.state=c;function Se(){try{localStorage.setItem(Me,JSON.stringify(p.objects))}catch{}}function Ze(){try{const e=localStorage.getItem(Me);e?p.objects=JSON.parse(e):fetch("./sako_layout_3d.json").then(t=>t.ok?t.json():fetch("./models/sako_layout_3d.json").then(a=>a.ok?a.json():null)).then(t=>{t&&(p.objects=t,H())}).catch(()=>{})}catch{}}function ue(){try{localStorage.setItem(ke,JSON.stringify(c))}catch{}}function Qe(){try{const e=localStorage.getItem(ke);e&&(c={...c,...JSON.parse(e)}),Ze()}catch{}}function et(){c={playerName:"",xp:0,level:1,badges:[],completedRooms:[],currentRoom:"hub"},localStorage.removeItem(ke)}function tt(){return!!localStorage.getItem(ke)}function at(e){let t=1;for(let a=J.length-1;a>=0;a--)if(e>=J[a].min){t=a+1;break}return t}function je(e){return J[Math.min(e-1,J.length-1)].name}function ie(e){const t=c.level;c.xp+=e,c.level=at(c.xp),ue(),ve(),ot(e),c.level>t&&setTimeout(()=>C(`🆙 LEVEL UP! ${je(c.level)}`,"success",4e3),800)}function nt(e){if(!e||c.badges.includes(e))return;c.badges.push(e),ue();const t=we.find(a=>a.id===e);t&&setTimeout(()=>{C(`🎖 BADGE: ${t.emoji} ${t.label}`,"badge",4500)},1200)}function Ie(e,t,a){c.completedRooms.includes(e)||(c.completedRooms.push(e),ue()),t&&ie(t),a&&nt(a),ve()}function s(e){return document.getElementById(e)}function it(e){["screen-splash","screen-name"].forEach(t=>{const a=s(t);a&&a.classList.toggle("hidden",t!==e)})}function C(e,t="info",a=3e3){const i=s("toast-container");if(!i)return;const n=document.createElement("div");n.className=`toast toast-${t}`,n.textContent=e,i.appendChild(n),setTimeout(()=>n.remove(),a)}function ot(e){C(`+${e} XP`,"xp",2e3)}function rt(){const e=s("hud");e&&e.classList.remove("hidden");const t=s("btn-cardboard");t&&t.classList.remove("hidden")}function st(){const e=s("hud");e&&e.classList.add("hidden");const t=s("btn-cardboard");t&&t.classList.add("hidden")}function ve(){const e=s("hud-name"),t=s("hud-level"),a=s("hud-xp"),i=s("hud-xp-fill"),n=s("hud-badges"),r=s("hud-room");e&&(e.textContent=c.playerName||"PANDU"),t&&(t.textContent=`LV${c.level} ${je(c.level)}`),a&&(a.textContent=`${c.xp} XP`),r&&(r.textContent=c.currentRoom.toUpperCase()),n&&(n.textContent=`🎖 ${c.badges.length}`);const o=J[Math.min(c.level-1,J.length-1)].min,l=J[Math.min(c.level,J.length-1)].min,d=c.level>=J.length?100:Math.min(100,(c.xp-o)/(l-o)*100);i&&(i.style.width=`${d}%`)}function O(e,t={}){var n,r;const a=s("modal-overlay");s("modal-box");const i=s("modal-content");!a||!i||(i.innerHTML=e,a.classList.remove("hidden"),t.noClose?(n=s("modal-close"))==null||n.classList.add("hidden"):(r=s("modal-close"))==null||r.classList.remove("hidden"))}function N(){var e,t;(e=s("modal-overlay"))==null||e.classList.add("hidden"),(t=s("modal-close"))==null||t.classList.remove("hidden"),lt()}let ge={};function D(e){const t=document.getElementById("vr-3d-popup");if(!t)return;const{title:a="",color:i="#06b6d4",text:n="",buttons:r=[]}=e;ge={};const o=String(a).replace(/"/g,"&quot;"),l=String(n).replace(/"/g,"&quot;"),d=document.querySelector("a-camera");if(d&&d.object3D){const w=d.object3D,E=new THREE.Vector3,B=new THREE.Vector3;w.getWorldPosition(E),w.getWorldDirection(B);const F=new THREE.Vector3(B.x,0,B.z);F.lengthSq()<.01&&F.set(0,0,1),F.normalize();const V=new THREE.Vector3().copy(E).addScaledVector(F,-1.6);V.y=E.y,t.object3D.position.copy(V),t.object3D.lookAt(E.x,V.y,E.z)}const m=3.2,A=2.8,h=l?l.length:0,y=36,x=l?Math.max(1,Math.ceil(h/y)):0,$=l?x*.16+.1:0,P=o?.38:0,S=32,R=r.map(w=>{const E=String(w.label||""),B=Math.max(1,Math.ceil(E.length/S));return Math.max(.3,.18+B*.12)}),j=R.reduce((w,E)=>w+E+.08,0),b=Math.max(1.4,P+$+j+.35),z=b/2,_=z-.28,Z=o?_-.28:z-.2;let Q=l?Z-$+.05:o?_-.3:z-.3;const G=r.map((w,E)=>{ge[E]=w.onClick;const B=R[E],F=Q-B/2;Q-=B+.08;const V=String(w.label||"").replace(/"/g,"&quot;"),g=w.color||i;return`
      <!-- Button Box -->
      <a-box data-dynamic position="0 ${F.toFixed(2)} 0.04" width="${A}" height="${B.toFixed(2)}" depth="0.03"
        color="${g}" material="color:${g};shader:flat"
        vr-interactable="type:popup_btn;target:${E}" class="clickable">
      </a-box>
      <!-- Button Text with Auto Wrapping -->
      <a-text data-dynamic value="${V}" position="0 ${F.toFixed(2)} 0.07" color="#ffffff" align="center" width="2.7" wrap-count="${S}"
        font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
      </a-text>
    `}).join("");t.innerHTML=`
    <!-- Card Backing -->
    <a-box data-dynamic position="0 0 0" width="${m}" height="${b.toFixed(2)}" depth="0.02"
      color="#030c1a" material="color:#030c1a;shader:flat">
    </a-box>

    <!-- Top Accent Bar -->
    <a-box data-dynamic position="0 ${(z-.03).toFixed(2)} 0.01" width="${m}" height="0.06" depth="0.02"
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
      <a-text data-dynamic value="${l}" position="0 ${Z.toFixed(2)} 0.03" color="#e2e8f0" align="center" width="2.9" wrap-count="${y}" baseline="top"
        font="https://cdn.aframe.io/fonts/DejaVu-sdf.fnt">
      </a-text>
    `:""}

    <!-- Action Buttons -->
    ${G}
  `,t.setAttribute("visible","true")}function lt(){const e=document.getElementById("vr-3d-popup");e&&(e.setAttribute("visible","false"),e.innerHTML="")}document.addEventListener("DOMContentLoaded",()=>{var e,t;(e=s("modal-overlay"))==null||e.addEventListener("click",a=>{a.target===s("modal-overlay")&&N()}),(t=s("modal-close"))==null||t.addEventListener("click",N)});let pe=!0;new Audio,new Audio,new Audio,new Audio;let xe=null;function dt(){return xe||(xe=new(window.AudioContext||window.webkitAudioContext)),xe}function ce(e=440,t="sine",a=.15,i=.3){if(pe)try{const n=dt(),r=n.createOscillator(),o=n.createGain();r.connect(o),o.connect(n.destination),r.frequency.value=e,r.type=t,o.gain.setValueAtTime(i,n.currentTime),o.gain.exponentialRampToValueAtTime(.001,n.currentTime+a),r.start(n.currentTime),r.stop(n.currentTime+a)}catch{}}function te(){ce(660,"sine",.08,.2)}function W(){ce(880,"sine",.3,.3),setTimeout(()=>ce(1100,"sine",.3,.25),150)}function ae(){ce(220,"sawtooth",.4,.3)}function Te(){ce(550,"triangle",.2,.25)}function ct(){const e=s("particle-canvas");if(!e)return;const t=e.getContext("2d");e.width=window.innerWidth,e.height=window.innerHeight,window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight});const a=Array.from({length:70},()=>({x:Math.random()*e.width,y:Math.random()*e.height,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*2+.5,a:Math.random()*.45+.1,c:["#06b6d4","#22c55e","#a855f7","#f59e0b"][Math.floor(Math.random()*4)]}));function i(){t.clearRect(0,0,e.width,e.height),a.forEach(n=>{n.x+=n.vx,n.y+=n.vy,n.x<0&&(n.x=e.width),n.x>e.width&&(n.x=0),n.y<0&&(n.y=e.height),n.y>e.height&&(n.y=0),t.beginPath(),t.arc(n.x,n.y,n.r,0,Math.PI*2),t.fillStyle=n.c,t.globalAlpha=n.a,t.fill()}),t.globalAlpha=1,requestAnimationFrame(i)}i()}function H(){const e=p.objects[c.currentRoom]||[];Je(c.currentRoom,e,p.selectedId)}function ut(){const e=s("scene-layer");if(!e||e.querySelector("a-scene"))return;e.innerHTML=`
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
  `;const t=e.querySelector("#vr-scene");t==null||t.addEventListener("loaded",()=>{H()})}function Re(){s("scene-layer").style.display="block",s("ui-layer").style.position="fixed",s("ui-layer").style.pointerEvents="none",s("hud").style.pointerEvents="auto",s("modal-overlay").style.pointerEvents="auto",s("btn-audio").style.pointerEvents="auto",s("btn-cardboard").style.pointerEvents="auto",it(""),rt(),ut(),c.currentRoom="hub",ve(),Te(),C("🥽 Selamat datang di VR World!","success",3e3);const e=()=>{const t=s("vr-scene"),a=s("btn-cardboard");t&&a?a.onclick=()=>{t.enterVR()}:setTimeout(e,400)};setTimeout(e,600)}function mt(){const e=s("vr-scene");e!=null&&e.exitVR&&e.exitVR(),s("scene-layer").style.display="none",s("ui-layer").style.position="",s("ui-layer").style.pointerEvents="",st(),Ne()}function fe(e){te();const t=M.find(i=>i.id===e);if(!t)return;if(e==="final"){const n=["sako","character","hoax","ethics","security","ai","future"].filter(l=>!c.completedRooms.includes(l)),r=M.reduce((l,d)=>l+(d.items?d.items.length:0),0),o=(c.readHolograms||[]).length;if(n.length>0||o<r){ae(),C(`🔒 FINAL MISSION TERKUNCI! (${c.completedRooms.length}/7 Misi Selesai, ${o}/${r} Materi Dibaca)`,"error",3500),O(`
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
      `),D({title:"🔒 FINAL MISSION TERKUNCI!",text:`Selesaikan 7 Misi & 35 Materi dulu!
Misi Selesai: ${c.completedRooms.length}/7 | Materi: ${o}/${r}`,color:"#ef4444",buttons:[{label:"← KEMBALI SELESAIKAN MISI",color:"#ef4444",onClick:()=>{N()}}]});return}}c.currentRoom=e,p.selectedId=null,H(),ve();const a=s("vr-player");a&&a.setAttribute("position","0 1.6 3"),C(`📍 ${t.title}`,"info",2e3)}function pt(e,t){te();const{type:a,action:i,target:n}=e,r=["hub","sako","character","hoax","ethics","security","ai","future","final"];if(p.active){if(a==="custom"||a==="portal"){const l=(p.objects[c.currentRoom]||[]).find(d=>d.id===n||d.target===n);l?he(l.id):n&&he(n)}return}switch(a){case"portal":{const o=r.includes(n)?n:r.includes(i)?i:r.find(l=>n&&n.includes(l))||"hub";fe(o);break}case"custom":{const l=(p.objects[c.currentRoom]||[]).find(d=>d.id===n);if(l&&l.type==="portal"&&l.target)fe(l.target);else if(n&&typeof n=="string"){const d=r.find(m=>n.toLowerCase().endsWith("_"+m));d&&fe(d)}break}case"hologram":ft(i,n);break;case"puzzle":bt(n);break;case"boss":De(n);break;case"final":yt();break;case"pledge":ht(n);break;case"popup_btn":{const o=parseInt(n,10);ge[o]&&ge[o]();break}default:console.log("[interact]",e)}}_e(pt);function ft(e,t){const a=decodeURIComponent(e),i=decodeURIComponent(t);ie(ne.interact),Te(),c.readHolograms||(c.readHolograms=[]);const n=`${c.currentRoom}_${a}`;c.readHolograms.includes(n)||(c.readHolograms.push(n),ue());const r=M.reduce((l,d)=>l+(d.items?d.items.length:0),0),o=c.readHolograms.length;O(`
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
  `),D({title:a,text:`${i}

[ Progres Materi: ${o}/${r} ]`,color:"#06b6d4",buttons:[{label:"✓ MENGERTI",color:"#06b6d4",onClick:()=>{N()}}]})}function bt(e){const t=M.find(o=>o.id===e);if(!(t!=null&&t.puzzle))return;const a=t.puzzle,i=t.color||"#06b6d4",n=a.choices.map((o,l)=>`
    <button class="puzzle-choice btn btn-ghost" data-idx="${l}"
      style="width:100%;text-align:left;margin-bottom:0.5rem;padding:0.75rem 1rem"
      onclick="handlePuzzleAnswer(${l}, ${a.answer}, '${encodeURIComponent(a.feedback)}', '${e}')">
      <span style="color:${i};font-family:var(--font-mono);margin-right:0.5rem">${String.fromCharCode(65+l)}.</span>
      ${o}
    </button>
  `).join("");O(`
    <div>
      <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1.5rem">
        <span style="font-size:2rem">${t.emoji}</span>
        <div>
          <div style="font-family:var(--font-heading);color:${i};font-size:0.85rem">PUZZLE CHALLENGE</div>
          <div style="color:var(--text-muted);font-size:0.8rem">${t.title}</div>
        </div>
      </div>
      <p style="color:var(--text-primary);margin-bottom:1.5rem;line-height:1.7">${a.question}</p>
      <div id="puzzle-choices">${n}</div>
      <div id="puzzle-feedback"></div>
    </div>
  `,{noClose:!0});const r=a.choices.map((o,l)=>({label:`${String.fromCharCode(65+l)}. ${o}`,color:i,onClick:()=>window.handlePuzzleAnswer(l,a.answer,encodeURIComponent(a.feedback),e)}));D({title:`🧩 PUZZLE: ${t.title}`,text:a.question,color:i,buttons:r})}window.handlePuzzleAnswer=function(e,t,a,i){const n=e===t,r=decodeURIComponent(a);document.querySelectorAll(".puzzle-choice").forEach((d,m)=>{d.disabled=!0,m===t?d.style.borderColor="var(--green)":m===e&&!n&&(d.style.borderColor="var(--red)")});const l=document.getElementById("puzzle-feedback");l&&(l.innerHTML=`
      <div style="margin-top:1rem;padding:1rem;border-radius:10px;
        background:${n?"rgba(34,197,94,0.1)":"rgba(239,68,68,0.1)"};
        border:1px solid ${n?"var(--green)":"var(--red)"};
        color:${n?"var(--green)":"var(--red)"};font-size:0.9rem;line-height:1.7">
        ${n?"✓ BENAR!":"✗ Kurang Tepat."} ${r}
      </div>
      <button class="btn btn-primary" style="margin-top:1rem;width:100%" onclick="finishPuzzle('${i}', ${n})">
        ${n?"🎉 Lanjutkan!":"→ Lanjutkan"}
      </button>
    `),n?(ie(ne.puzzle),W()):ae(),D({title:n?"✅ JAWABAN BENAR!":"❌ KURANG TEPAT",text:r,color:n?"#22c55e":"#ef4444",buttons:[{label:n?"🎉 LANJUTKAN":"↺ COBA LAGI",color:n?"#22c55e":"#f59e0b",onClick:()=>window.finishPuzzle(i,n)}]})};window.finishPuzzle=function(e,t){N();const a=M.find(i=>i.id===e);a&&t&&!c.completedRooms.includes(e)&&(Ie(e,0,null),a.boss||Le(e))};function Le(e){const t=M.find(a=>a.id===e);t&&(Ie(e,t.xp,t.badge),W(),setTimeout(()=>{var a,i;O(`
      <div style="text-align:center;padding:1rem">
        <div style="font-size:4rem;margin-bottom:0.75rem">${t.emoji}</div>
        <h3 style="color:var(--green);font-family:var(--font-heading);margin-bottom:0.5rem">ROOM SELESAI!</h3>
        <p style="color:var(--text-secondary)">${t.title}</p>
        <div style="display:flex;justify-content:center;gap:1rem;margin:1.5rem 0;flex-wrap:wrap">
          <span class="badge-chip">+${t.xp} XP</span>
          ${t.badge?`<span class="badge-chip">${(a=we.find(n=>n.id===t.badge))==null?void 0:a.emoji} ${(i=we.find(n=>n.id===t.badge))==null?void 0:i.label}</span>`:""}
        </div>
        <button class="btn btn-primary" style="width:100%" onclick="closeModalAndReturn()">🏕️ Kembali ke Hub</button>
      </div>
    `,{noClose:!0}),D({title:`🎉 ROOM SELESAI: ${t.title}`,text:`Selamat! Kamu meraih +${t.xp} XP!`,color:"#22c55e",buttons:[{label:"🏕️ KEMBALI KE HUB",color:"#22c55e",onClick:()=>window.closeModalAndReturn()}]})},500))}window.closeModalAndReturn=function(){N(),fe("hub")};let U={roomId:null,hp:0,wave:0,score:0};function De(e){const t=M.find(i=>i.id===e);if(!(t!=null&&t.boss))return;if(t.items&&t.items.length>0){const i=t.items.filter(n=>(c.readHolograms||[]).includes(`${e}_${n.label}`)).length;if(i<t.items.length){ae(),O(`
        <div style="text-align:center;padding:1rem">
          <div style="font-size:4rem;margin-bottom:0.75rem">🔒</div>
          <h3 style="color:var(--gold);font-family:var(--font-heading);margin-bottom:0.5rem">BOSS MASIH TERKUNCI!</h3>
          <p style="color:var(--text-secondary);line-height:1.8;font-size:0.95rem;margin-bottom:1rem">
            Kamu harus membaca seluruh materi di ruangan <b>${t.title}</b> terlebih dahulu sebelum bertarung melawan Boss NPC!
          </p>
          <div style="background:rgba(245,158,11,0.1);border:1px solid var(--gold);border-radius:10px;padding:0.75rem;margin-bottom:1.25rem;color:var(--gold);font-family:var(--font-mono)">
            📖 Progres Ruangan Ini: <b>${i} / ${t.items.length} Materi Dibaca</b>
          </div>
          <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:1.5rem">
            Silakan ketuk seluruh papan kios materi di sekeliling ruangan ini!
          </p>
          <button class="btn btn-primary" style="width:100%" onclick="closeModal()">← Siap, Pelajari Materi!</button>
        </div>
      `),D({title:`🔒 BOSS ${t.boss.name} TERKUNCI!`,text:`Baca seluruh materi di ruangan ini terlebih dahulu!
Progres: ${i} / ${t.items.length} Materi Dibaca`,color:"#f59e0b",buttons:[{label:"← BACA MATERI",color:"#f59e0b",onClick:()=>{N()}}]});return}}U={roomId:e,hp:t.boss.hp,wave:0,score:0};const a=t.boss;O(`
    <div style="text-align:center;padding:0.5rem">
      <div style="font-size:4rem;margin-bottom:0.5rem;animation:pulse 1s infinite alternate">${a.emoji}</div>
      <h3 style="color:${a.color};font-family:var(--font-heading);margin-bottom:0.5rem">${a.name} MUNCUL!</h3>
      <p style="color:var(--text-secondary);margin-bottom:0.5rem;font-size:0.9rem;font-style:italic">"${a.intro}"</p>
      <div style="display:flex;justify-content:center;gap:0.4rem;margin:1rem 0">
        ${Array.from({length:a.hp},()=>'<span style="font-size:1.5rem">❤️</span>').join("")}
      </div>
      <button class="btn btn-danger btn-lg" style="width:100%" onclick="startBossWave()">⚔ LAWAN SEKARANG!</button>
    </div>
  `,{noClose:!0}),D({title:`⚔ BOSS MUNCUL: ${a.name}`,text:a.intro,color:a.color||"#ef4444",buttons:[{label:"⚔ LAWAN SEKARANG!",color:"#ef4444",onClick:()=>window.startBossWave()}]})}window.startBossWave=function(){const e=M.find(r=>r.id===U.roomId);if(!(e!=null&&e.boss))return;const t=e.boss.questions[U.wave];if(!t)return;let a,i=[];if(t.choices)a=t.choices.map((r,o)=>`
      <button class="boss-choice btn btn-ghost" data-idx="${o}"
        style="width:100%;text-align:left;margin-bottom:0.5rem"
        onclick="handleBossAnswer(${o}, ${t.answer}, '${encodeURIComponent(t.feedback)}')">
        ${r}
      </button>
    `).join(""),i=t.choices.map((r,o)=>({label:`${String.fromCharCode(65+o)}. ${r}`,color:e.boss.color,onClick:()=>window.handleBossAnswer(o,t.answer,encodeURIComponent(t.feedback))}));else{const r=["HOAX","CEK DULU","BENAR"];a=r.map((o,l)=>`
      <button class="boss-choice btn btn-ghost"
        style="flex:1"
        onclick="handleBossAnswerStr('${o}', '${t.answer}', '${encodeURIComponent(t.feedback)}')">
        ${o==="HOAX"?"🚫":o==="CEK DULU"?"🔍":"✅"} ${o}
      </button>
    `).join(""),a=`<div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">${a}</div>`,i=r.map(o=>({label:`${o==="HOAX"?"🚫":o==="CEK DULU"?"🔍":"✅"} ${o}`,color:e.boss.color,onClick:()=>window.handleBossAnswerStr(o,t.answer,encodeURIComponent(t.feedback))}))}const n=Array.from({length:e.boss.hp},(r,o)=>`<span style="font-size:1.2rem">${o<U.hp?"❤️":"🖤"}</span>`).join("");O(`
    <div>
      <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem">
        <span style="font-size:2rem">${e.boss.emoji}</span>
        <div style="flex:1">
          <div style="font-family:var(--font-heading);color:${e.boss.color}">${e.boss.name}</div>
          <div style="display:flex;gap:0.2rem">${n}</div>
        </div>
        <div style="font-family:var(--font-mono);color:var(--gold);font-size:0.85rem">SERBUAN ${U.wave+1}/${e.boss.questions.length}</div>
      </div>
      <div style="background:rgba(0,0,0,0.4);border:1px solid ${e.boss.color};border-radius:8px;padding:1rem;margin-bottom:1.25rem;font-size:0.9rem;line-height:1.7;color:var(--text-primary)">
        ${t.msg}
      </div>
      ${a}
      <div id="boss-feedback"></div>
    </div>
  `,{noClose:!0}),D({title:`⚔ ${e.boss.name} (${U.wave+1}/${e.boss.questions.length})`,text:t.msg,color:e.boss.color,buttons:i})};window.handleBossAnswer=function(e,t,a){ze(e===t,a)};window.handleBossAnswerStr=function(e,t,a){ze(e===t,a)};function ze(e,t){const a=decodeURIComponent(t);document.querySelectorAll(".boss-choice").forEach(n=>n.disabled=!0),e?(U.hp--,U.score++,ie(ne.challenge),W()):ae();const i=document.getElementById("boss-feedback");i&&(i.innerHTML=`
      <div style="margin-top:0.75rem;padding:0.75rem;border-radius:8px;font-size:0.85rem;
        background:${e?"rgba(34,197,94,0.1)":"rgba(239,68,68,0.1)"};
        border:1px solid ${e?"var(--green)":"var(--red)"};
        color:${e?"var(--green)":"var(--red)"};line-height:1.7">
        ${e?"✓ TEPAT!":"✗ Salah!"} ${a}
      </div>
      <button class="btn btn-primary" style="margin-top:0.75rem;width:100%" onclick="nextBossWave()">Lanjut ⟶</button>
    `),D({title:e?"⚔ SERANGAN BERHASIL!":"💥 DISERANG BOSS!",text:a,color:e?"#22c55e":"#ef4444",buttons:[{label:"LANJUT ⟶",color:e?"#22c55e":"#f59e0b",onClick:()=>window.nextBossWave()}]})}window.nextBossWave=function(){const e=M.find(t=>t.id===U.roomId);if(e!=null&&e.boss)if(U.wave++,U.wave>=e.boss.questions.length){const t=U.hp>0||U.score>=Math.ceil(e.boss.questions.length/2);gt(U.roomId,t)}else startBossWave()};function gt(e,t){const a=M.find(i=>i.id===e);a&&(t?(W(),ie(ne.boss),O(`
      <div style="text-align:center;padding:1rem">
        <div style="font-size:4rem;margin-bottom:0.75rem">🏆</div>
        <h3 style="color:var(--green);font-family:var(--font-heading);margin-bottom:0.5rem">${a.boss.name} DIKALAHKAN!</h3>
        <p style="color:var(--text-secondary);margin-bottom:1rem">Kamu berhasil melewati semua serangan!</p>
        <div style="display:flex;justify-content:center;gap:0.75rem;flex-wrap:wrap;margin:1rem 0">
          <span class="badge-chip">+${ne.boss} XP BOSS</span>
        </div>
        <button class="btn btn-primary" style="width:100%;margin-top:1rem" onclick="finishRoomAfterBoss('${e}')">
          🎉 Selesaikan Room!
        </button>
      </div>
    `,{noClose:!0}),D({title:`🏆 ${a.boss.name} DIKALAHKAN!`,text:`Selamat! Kamu berhasil meraih +${ne.boss} XP BOSS!`,color:"#22c55e",buttons:[{label:"🎉 SELESAIKAN ROOM",color:"#22c55e",onClick:()=>window.finishRoomAfterBoss(e)}]})):(ae(),O(`
      <div style="text-align:center;padding:1rem">
        <div style="font-size:4rem;margin-bottom:0.75rem">💫</div>
        <h3 style="color:var(--gold);font-family:var(--font-heading);margin-bottom:0.5rem">HAMPIR!</h3>
        <p style="color:var(--text-secondary)">Coba lagi — pelajari holograms dulu untuk petunjuk.</p>
        <button class="btn btn-ghost" style="width:100%;margin-top:1rem" onclick="closeModalAndReturn()">← Kembali ke Hub</button>
        <button class="btn btn-danger" style="width:100%;margin-top:0.5rem" onclick="openBossAgain('${e}')">⚔ Coba Lagi</button>
      </div>
    `,{noClose:!0}),D({title:"💫 BOSS HAMPIR DIKALAHKAN",text:"Coba lagi — pelajari hologram untuk petunjuk!",color:"#f59e0b",buttons:[{label:"⚔ COBA LAGI",color:"#ef4444",onClick:()=>window.openBossAgain(e)},{label:"← KEMBALI KE HUB",color:"#64748b",onClick:()=>window.closeModalAndReturn()}]})))}window.finishRoomAfterBoss=function(e){N(),Le(e)};window.openBossAgain=function(e){De(e)};function ht(e){const t=M.find(i=>i.id===e);if(!(t!=null&&t.pledge))return;const a=t.pledge;O(`
    <div style="text-align:center;padding:0.5rem">
      <div style="font-size:3rem;margin-bottom:1rem">✊</div>
      <h3 style="color:var(--green);font-family:var(--font-heading);margin-bottom:1rem">${a.title}</h3>
      <div style="background:rgba(34,197,94,0.08);border:1px solid rgba(34,197,94,0.3);border-radius:12px;padding:1.25rem;text-align:left;margin-bottom:1.5rem">
        <pre style="color:var(--text-primary);font-family:var(--font-body);font-size:0.9rem;white-space:pre-wrap;line-height:1.9">${a.text}</pre>
      </div>
      <button class="btn btn-green btn-lg" style="width:100%" onclick="takePledge('${e}', ${a.xp})">
        ✊ AKU BERJANJI!
      </button>
    </div>
  `),D({title:`✊ ${a.title}`,text:"Aku berjanji menjadi Pandu Digital yang bijak, cerdas, dan siap membangun Indonesia!",color:"#22c55e",buttons:[{label:"✊ AKU BERJANJI!",color:"#22c55e",onClick:()=>window.takePledge(e,a.xp)}]})}window.takePledge=function(e,t){N(),ie(t),W(),C("✊ Ikrar diucapkan! +"+t+" XP","success",3e3),M.find(i=>i.id===e)&&!c.completedRooms.includes(e)&&Le(e)};let X={wave:0,score:0};function yt(){const e=M.reduce((a,i)=>a+(i.items?i.items.length:0),0),t=(c.readHolograms||[]).length;if(t<e){ae(),O(`
      <div style="text-align:center;padding:1rem">
        <div style="font-size:4rem;margin-bottom:0.75rem">🔒</div>
        <h3 style="color:var(--gold);font-family:var(--font-heading);margin-bottom:0.5rem">AKSES FINAL BOSS TERKUNCI!</h3>
        <p style="color:var(--text-secondary);line-height:1.8;font-size:0.95rem;margin-bottom:1rem">
          Kamu harus membaca <b>SELURUH MATERI DIGITAL</b> terlebih dahulu sebelum bertarung di Final Battle!
        </p>
        <div style="background:rgba(245,158,11,0.1);border:1px solid var(--gold);border-radius:10px;padding:0.75rem;margin-bottom:1.25rem;color:var(--gold);font-family:var(--font-mono)">
          📖 Progres Materi Dibaca: <b>${t} / ${e}</b>
        </div>
        <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:1.5rem">
          Silakan jelajahi ruangan M01 - M07 dan ketuk semua papan hologram materi!
        </p>
        <button class="btn btn-primary" style="width:100%" onclick="closeModal()">← Siap, Pelajari Materi!</button>
      </div>
    `),D({title:"🔒 FINAL BOSS TERKUNCI!",text:`Baca seluruh materi digital terlebih dahulu!
Progres: ${t} / ${e} Materi Dibaca`,color:"#f59e0b",buttons:[{label:"← BACA MATERI",color:"#f59e0b",onClick:()=>{N()}}]});return}X={wave:0,score:0},Be()}function Be(){const e=M.find(n=>n.id==="final"),t=e==null?void 0:e.waves[X.wave];if(!t){Ue();return}const a=t.choices.map((n,r)=>`
    <button class="final-choice btn btn-ghost"
      style="width:100%;text-align:left;margin-bottom:0.5rem"
      onclick="handleFinalAnswer(${r}, ${t.answer}, '${encodeURIComponent(t.feedback)}')">
      <span style="color:var(--red);font-family:var(--font-mono);margin-right:0.5rem">${String.fromCharCode(65+r)}.</span>
      ${n}
    </button>
  `).join("");O(`
    <div>
      <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1rem">
        <span style="font-size:2rem">${t.emoji}</span>
        <div>
          <div style="font-family:var(--font-heading);color:var(--red);font-size:0.9rem">SERANGAN: ${t.enemy}</div>
          <div style="font-family:var(--font-mono);color:var(--text-muted);font-size:0.8rem">GELOMBANG ${X.wave+1}/4</div>
        </div>
        <div style="margin-left:auto;display:flex;gap:0.25rem">
          ${Array.from({length:4},(n,r)=>`<span>${r<X.wave?"💀":"⚔"}</span>`).join("")}
        </div>
      </div>
      <div style="background:rgba(239,68,68,0.08);border:1px solid rgba(239,68,68,0.3);border-radius:8px;padding:1rem;margin-bottom:1rem;font-size:0.9rem;line-height:1.7">
        ${t.question}
      </div>
      ${a}
      <div id="final-feedback"></div>
    </div>
  `,{noClose:!0});const i=t.choices.map((n,r)=>({label:`${String.fromCharCode(65+r)}. ${n}`,color:"#ef4444",onClick:()=>window.handleFinalAnswer(r,t.answer,encodeURIComponent(t.feedback))}));D({title:`⚔ ${t.enemy} (${X.wave+1}/4)`,text:t.question,color:"#ef4444",buttons:i})}window.handleFinalAnswer=function(e,t,a){const i=e===t,n=decodeURIComponent(a);document.querySelectorAll(".final-choice").forEach(o=>o.disabled=!0),i?(X.score++,ie(ne.challenge),W()):ae();const r=document.getElementById("final-feedback");r&&(r.innerHTML=`
    <div style="margin-top:0.75rem;padding:0.75rem;border-radius:8px;font-size:0.85rem;
      background:${i?"rgba(34,197,94,0.1)":"rgba(239,68,68,0.1)"};
      border:1px solid ${i?"var(--green)":"var(--red)"};
      color:${i?"var(--green)":"var(--red)"};line-height:1.7">
      ${i?"✓":"✗"} ${n}
    </div>
    <button class="btn btn-primary" style="margin-top:0.75rem;width:100%" onclick="nextFinalWave()">
      ${X.wave<3?"Musuh berikutnya ⟶":"⚡ SELESAIKAN!"}
    </button>
  `),D({title:i?"⚔ SERANGAN BERHASIL!":"💥 DISERANG MUSUH!",text:n,color:i?"#22c55e":"#ef4444",buttons:[{label:X.wave<3?"MUSUH BERIKUTNYA ⟶":"⚡ SELESAIKAN!",color:i?"#22c55e":"#f59e0b",onClick:()=>window.nextFinalWave()}]})};window.nextFinalWave=function(){X.wave++,X.wave>=4?Ue():Be()};function Ue(){const e=M.find(a=>a.id==="final");Ie("final",e.xp,e.badge),W();const t=e.ceremony;O(`
    <div style="text-align:center;padding:1rem">
      <div style="font-size:4rem;margin-bottom:1rem;animation:float 2s ease-in-out infinite">🏆</div>
      <h2 style="color:var(--gold);font-family:var(--font-heading);margin-bottom:1.25rem;font-size:1.3rem">${t.title}</h2>
      ${t.lines.map(a=>`<p style="color:var(--text-secondary);margin-bottom:0.6rem;line-height:1.7">${a}</p>`).join("")}
      <div style="margin:1.5rem 0;padding:1rem;background:rgba(245,158,11,0.1);border:1px solid var(--gold);border-radius:12px">
        <div style="font-family:var(--font-heading);color:var(--gold);font-size:1.1rem">🥾 PANDU DIGITAL</div>
        <div style="color:var(--text-secondary);font-size:0.85rem;margin-top:0.3rem">${c.playerName}</div>
        <div style="color:var(--text-muted);font-size:0.75rem;margin-top:0.2rem">${c.xp} XP · ${c.badges.length} Badge</div>
      </div>
      <button class="btn btn-gold btn-lg" style="width:100%" onclick="closeModal()">
        🎉 TERIMA KASIH PANDU DIGITAL!
      </button>
    </div>
  `,{noClose:!1}),D({title:`🏆 ${t.title}`,text:`Selamat Pandu Digital ${c.playerName}!

${t.lines.join(`
`)}`,color:"#f59e0b",buttons:[{label:"🎉 TERIMA KASIH PANDU DIGITAL!",color:"#f59e0b",onClick:()=>{N()}}]})}function kt(){p.unlocked?p.active?Pe():Oe():vt()}function vt(){O(`
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
  `)}window.checkEditorPassword=function(){var t;const e=(t=s("editor-pass-input"))==null?void 0:t.value.trim();He.includes(e)?(p.unlocked=!0,N(),W(),C("🔓 Password Editor benar!","success"),Oe()):(ae(),C("❌ Password salah!","error"))};function $t(){p.objects[c.currentRoom]||(p.objects[c.currentRoom]=[]);const e=p.objects[c.currentRoom],t=M.find(a=>a.id===c.currentRoom);if(t){if(t.isHub&&t.portals)t.portals.forEach(a=>{const i=`portal_hub_${a.to}`;if(!e.find(r=>r.id===i||r.type==="portal"&&r.target===a.to)){const r=a.pos.split(" ");e.push({id:i,type:"portal",target:a.to,label:a.label,color:a.color,x:parseFloat(r[0]),y:0,z:parseFloat(r[2]),rotX:0,rotY:0,rotZ:0,scale:1,src:null})}});else if(!t.isHub){const a=`portal_${t.id}_hub`;if(e.find(n=>n.id===a||n.type==="portal"&&n.target==="hub")||e.push({id:a,type:"portal",target:"hub",label:"⟵ KEMBALI KE HUB",color:"#06b6d4",x:6.5,y:0,z:5,rotX:0,rotY:0,rotZ:0,scale:1,src:null}),t.items&&t.items.forEach((n,r)=>{const o=`holo_${t.id}_${r+1}`;if(!e.find(d=>d.id===o)){const d=t.items.length,m=Math.min(d*.35,1.4),A=d===1?0:(r/(d-1)-.5)*m*2,h=3.2,y=parseFloat((Math.sin(A)*h).toFixed(2)),x=parseFloat((-Math.cos(A)*h-1).toFixed(2)),$=parseFloat((-A*180/Math.PI).toFixed(1));e.push({id:o,type:"hologram",label:`💡 Materi ${r+1}: ${n.label}`,detail:n.detail,x:y,y:1.55,z:x,rotX:0,rotY:$,rotZ:0,scale:1,src:null})}}),t.boss){const n=`boss_${t.id}`;e.find(o=>o.id===n)||e.push({id:n,type:"boss",label:`⚔ Boss: ${t.boss.name}`,color:t.boss.color,x:0,y:1.5,z:-5.5,rotX:0,rotY:0,rotZ:0,scale:1,src:null})}if(t.puzzle){const n=`puzzle_${t.id}`;e.find(o=>o.id===n)||e.push({id:n,type:"puzzle",label:"🧩 Puzzle Terminal",x:4.5,y:1.6,z:-3,rotX:0,rotY:-35,rotZ:0,scale:1,src:null})}}}}function Ce(){$t();const e=s("select-room-objects");if(!e)return;const t=p.objects[c.currentRoom]||[];let a='<option value="">-- Pilih Objek Untuk Edit / Ganti --</option>';t.forEach((i,n)=>{let r="📦";i.type==="image"?r="🖼️":i.type==="text"?r="🔤":i.type==="portal"?r="🚪":i.type==="hologram"?r="💡":i.type==="boss"?r="⚔️":i.type==="puzzle"&&(r="🧩");const o=i.label||i.text||i.type.toUpperCase(),l=i.id===p.selectedId?"selected":"";a+=`<option value="${i.id}" ${l}>${r} ${n+1}. ${o}</option>`}),e.innerHTML=a}function Oe(){var a;p.active=!0,(a=s("editor-drawer"))==null||a.classList.remove("hidden");const e=document.getElementById("vr-player"),t=document.querySelector("a-camera");e&&t&&(e.setAttribute("position","0 4.2 4.5"),t.setAttribute("rotation","-28 0 0")),Ce(),H(),C("🎨 Mode Creative Editor Aktif! Kamera Free View & Pilih Objek Dropdown.","info",3500)}function Pe(){var a,i;p.active=!1,p.selectedId=null,(a=s("editor-drawer"))==null||a.classList.add("hidden"),(i=s("editor-inspector"))==null||i.classList.add("hidden");const e=document.getElementById("vr-player"),t=document.querySelector("a-camera");e&&t&&(e.setAttribute("position","0 1.6 3"),t.setAttribute("rotation","0 0 0")),H()}function he(e){const a=(p.objects[c.currentRoom]||[]).find(r=>r.id===e);if(!a)return;p.selectedId=e;const i=s("editor-inspector");i&&i.classList.remove("hidden"),s("inspector-title").textContent=`OBJEK: ${a.type.toUpperCase()} (${a.id.slice(-4)})`,s("input-pos-x").value=a.x??0,s("val-pos-x").textContent=a.x??0,s("input-pos-y").value=a.y??1,s("val-pos-y").textContent=a.y??1,s("input-pos-z").value=a.z??-3,s("val-pos-z").textContent=a.z??-3,s("input-rot-y").value=a.rotY??0,s("val-rot-y").textContent=`${a.rotY??0}°`,s("input-scale").value=a.scale??1,s("val-scale").textContent=`${a.scale??1}x`;const n=s("select-room-objects");n&&(n.value=e),H()}function de(e,t){if(!p.selectedId)return;const i=(p.objects[c.currentRoom]||[]).find(n=>n.id===p.selectedId);i&&(i[e]=parseFloat(t),H())}function xt(){var t;if(!p.selectedId)return;let e=p.objects[c.currentRoom]||[];p.objects[c.currentRoom]=e.filter(a=>a.id!==p.selectedId),p.selectedId=null,(t=s("editor-inspector"))==null||t.classList.add("hidden"),Ce(),H(),C("🗑️ Objek dihapus","info")}function me(e){p.objects[c.currentRoom]||(p.objects[c.currentRoom]=[]),p.objects[c.currentRoom].push(e),Ce(),he(e.id),C(`✨ ${e.type.toUpperCase()} ditambahkan!`,"success")}function wt(){var r,o,l,d,m,A,h,y,x,$,P,S,R,j,b,z,_,Z,Q,G,w,E,B,F,V,g,T;(r=s("btn-editor-toggle"))==null||r.addEventListener("click",()=>{te(),kt()}),(o=s("btn-close-editor"))==null||o.addEventListener("click",()=>{te(),Pe()}),(l=s("select-room-objects"))==null||l.addEventListener("change",u=>{var v;const f=u.target.value;f?he(f):(p.selectedId=null,(v=s("editor-inspector"))==null||v.classList.add("hidden"),H())}),(d=s("file-input-glb"))==null||d.addEventListener("change",u=>{const f=u.target.files[0];if(!f)return;const v=new FileReader;v.onload=L=>{me({id:"glb_"+Date.now(),type:"glb",src:L.target.result,x:0,y:1,z:-3,rotX:0,rotY:0,rotZ:0,scale:1})},v.readAsDataURL(f),u.target.value=""}),(m=s("file-input-png"))==null||m.addEventListener("change",u=>{const f=u.target.files[0];if(!f)return;const v=new FileReader;v.onload=L=>{me({id:"img_"+Date.now(),type:"image",src:L.target.result,x:0,y:1.8,z:-3,rotX:0,rotY:0,rotZ:0,scale:1,w:2,h:2})},v.readAsDataURL(f),u.target.value=""}),(A=s("btn-add-text"))==null||A.addEventListener("click",()=>{const u=prompt("Masukkan Teks 3D:","PANDU SMANSA");u&&me({id:"txt_"+Date.now(),type:"text",text:u,x:0,y:2.2,z:-3,rotX:0,rotY:0,rotZ:0,scale:1,color:"#06b6d4"})}),(h=s("btn-add-portal"))==null||h.addEventListener("click",()=>{const u=prompt("Tujuan Room (hub, hoax, security, ethics, future):","hub");if(!u)return;const f=prompt("Label Portal:","PORTAL KE "+u.toUpperCase());me({id:"portal_"+Date.now(),type:"portal",target:u,label:f||"PORTAL",color:"#06b6d4",x:0,y:0,z:-3,rotX:0,rotY:0,rotZ:0,scale:1})}),(y=s("file-input-replace"))==null||y.addEventListener("change",u=>{const f=u.target.files[0];if(!f||!p.selectedId)return;const L=(p.objects[c.currentRoom]||[]).find(ee=>ee.id===p.selectedId);if(!L)return;const K=new FileReader;K.onload=ee=>{L.src=ee.target.result,f.name.toLowerCase().endsWith(".glb")||f.name.toLowerCase().endsWith(".gltf")?L.type="glb":f.type.startsWith("image/")&&(L.type="image"),H(),C("🔄 Model / Logo berhasil diganti!","success")},K.readAsDataURL(f),u.target.value=""});function e(){const u=document.querySelector("a-camera");let f=0;if(u){const k=u.getAttribute("rotation");k&&(f=k.y*Math.PI/180)}const v=Math.cos(f),L=Math.sin(f),K=-Math.sin(f),ee=-Math.cos(f);return{rightX:v,rightZ:L,fwdX:K,fwdZ:ee}}const t=(u=0,f=0,v=0,L=0,K=0)=>{if(!p.selectedId)return;const k=(p.objects[c.currentRoom]||[]).find(Y=>Y.id===p.selectedId);if(!k)return;const{rightX:$e,rightZ:I,fwdX:oe,fwdZ:re}=e(),se=u*$e+f*oe,le=u*I+f*re;(u||f)&&(k.x=parseFloat(Math.max(-7.4,Math.min(7.4,(k.x??0)+se)).toFixed(2)),k.z=parseFloat(Math.max(-7.4,Math.min(7.4,(k.z??-3)+le)).toFixed(2))),v&&(k.y=parseFloat(Math.max(0,Math.min(5,(k.y??1)+v)).toFixed(2))),L&&(k.rotY=((k.rotY??0)+L+360)%360),K&&(k.scale=parseFloat(Math.max(.1,Math.min(5,(k.scale??1)+K)).toFixed(2))),s("input-pos-x").value=k.x,s("val-pos-x").textContent=k.x,s("input-pos-y").value=k.y,s("val-pos-y").textContent=k.y,s("input-pos-z").value=k.z,s("val-pos-z").textContent=k.z,s("input-rot-y").value=k.rotY,s("val-rot-y").textContent=`${k.rotY}°`,s("input-scale").value=k.scale,s("val-scale").textContent=`${k.scale}x`,H()};(x=s("btn-gizmo-fwd"))==null||x.addEventListener("click",()=>t(0,.4)),($=s("btn-gizmo-back"))==null||$.addEventListener("click",()=>t(0,-.4)),(P=s("btn-gizmo-left"))==null||P.addEventListener("click",()=>t(-.4,0)),(S=s("btn-gizmo-right"))==null||S.addEventListener("click",()=>t(.4,0)),(R=s("btn-gizmo-up"))==null||R.addEventListener("click",()=>t(0,0,.4)),(j=s("btn-gizmo-down"))==null||j.addEventListener("click",()=>t(0,0,-.4)),(b=s("btn-gizmo-rot-l"))==null||b.addEventListener("click",()=>t(0,0,0,-15,0)),(z=s("btn-gizmo-rot-r"))==null||z.addEventListener("click",()=>t(0,0,0,15,0)),(_=s("btn-gizmo-scale-up"))==null||_.addEventListener("click",()=>t(0,0,0,0,.2)),(Z=s("btn-gizmo-scale-down"))==null||Z.addEventListener("click",()=>t(0,0,0,0,-.2));let a=!1,i=0,n=0;window.addEventListener("mousedown",u=>{p.active&&p.selectedId&&!u.target.closest("#editor-drawer")&&(a=!0,i=u.clientX,n=u.clientY)}),window.addEventListener("mousemove",u=>{if(a&&p.active&&p.selectedId){const f=(u.clientX-i)*.012,v=(u.clientY-n)*.012;(Math.abs(f)>.005||Math.abs(v)>.005)&&(i=u.clientX,n=u.clientY,t(f,-v))}}),window.addEventListener("mouseup",()=>{a=!1}),(Q=s("input-pos-x"))==null||Q.addEventListener("input",u=>{s("val-pos-x").textContent=u.target.value,de("x",u.target.value)}),(G=s("input-pos-y"))==null||G.addEventListener("input",u=>{s("val-pos-y").textContent=u.target.value,de("y",u.target.value)}),(w=s("input-pos-z"))==null||w.addEventListener("input",u=>{s("val-pos-z").textContent=u.target.value,de("z",u.target.value)}),(E=s("input-rot-y"))==null||E.addEventListener("input",u=>{s("val-rot-y").textContent=`${u.target.value}°`,de("rotY",u.target.value)}),(B=s("input-scale"))==null||B.addEventListener("input",u=>{s("val-scale").textContent=`${u.target.value}x`,de("scale",u.target.value)}),(F=s("btn-delete-obj"))==null||F.addEventListener("click",()=>{xt()}),(V=s("btn-save-layout"))==null||V.addEventListener("click",()=>{Se(),W(),C("💾 Layout 3D berhasil disimpan!","success")}),(g=s("btn-export-json"))==null||g.addEventListener("click",()=>{const u="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(p.objects,null,2)),f=document.createElement("a");f.setAttribute("href",u),f.setAttribute("download","sako_layout_3d.json"),f.click(),C("📤 Layout diexport ke JSON","info")}),(T=s("file-input-json"))==null||T.addEventListener("change",u=>{const f=u.target.files[0];if(!f)return;const v=new FileReader;v.onload=L=>{try{const K=JSON.parse(L.target.result);p.objects=K,Se(),H(),W(),C("📥 Layout 3D berhasil diimport!","success")}catch{C("❌ File JSON tidak valid!","error")}},v.readAsText(f),u.target.value=""})}function Ne(){var a,i,n;const e=s("ui-layer");e.style.position="",e.style.pointerEvents="",(a=s("screen-splash"))==null||a.classList.remove("hidden"),(i=s("screen-name"))==null||i.classList.add("hidden"),(n=s("hud"))==null||n.classList.add("hidden");const t=tt()&&c.playerName;s("btn-continue").style.display=t?"inline-flex":"none",s("btn-reset").style.display=t?"inline-flex":"none"}function At(){const e=s("btn-audio");e&&e.addEventListener("click",()=>{pe=!pe,e.textContent=pe?"🔊":"🔇",te()})}function Et(){setInterval(()=>{const e=document.getElementById("vr-player");if(!e)return;const t=e.getAttribute("position");if(!t)return;let a=Math.max(-7.4,Math.min(7.4,t.x)),i=Math.max(-7.4,Math.min(7.4,t.z));(a!==t.x||i!==t.z)&&e.setAttribute("position",`${a} ${t.y} ${i}`)},50)}function It(){var e,t,a,i,n;Qe(),ct(),Ne(),At(),wt(),Et(),(e=s("btn-start"))==null||e.addEventListener("click",()=>{var r,o,l;te(),(r=s("screen-splash"))==null||r.classList.add("hidden"),(o=s("screen-name"))==null||o.classList.remove("hidden"),(l=s("player-name"))==null||l.focus()}),(t=s("btn-continue"))==null||t.addEventListener("click",()=>{te(),Re()}),(a=s("btn-reset"))==null||a.addEventListener("click",()=>{confirm("Reset semua progress?")&&(et(),window.location.reload())}),(i=s("name-form"))==null||i.addEventListener("submit",r=>{var l;r.preventDefault();const o=(l=s("player-name"))==null?void 0:l.value.trim();if(!o){C("Masukkan namamu!","error");return}c.playerName=o,ue(),Re()}),(n=s("btn-exit-vr"))==null||n.addEventListener("click",()=>{te(),mt()})}document.addEventListener("DOMContentLoaded",It);window.closeModal=N;
