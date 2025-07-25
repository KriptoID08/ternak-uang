// Array kategori utama
const kategoriUtama = ['Financial Literacy' , 'Principles Investing'];

const modulList = [
  {
    judul: 'Apa itu Personal Finance?',
    kategori: 'Financial Literacy',
    gambar: 'images/Personal-Finance.jpg',
    links: ['https://drive.google.com/file/d/1dSbfF0iEVUnU1likx2bIsVl2EZxqVR5k/view?usp=drive_link']
  },
  {
    judul: 'Metode Snowball vs Metode Avalanche',
    kategori: 'Financial Literacy',
    gambar: 'images/Snowball-VS-Avalanche.jpg',
    links: ['https://drive.google.com/file/d/1fe14EdSM495vWoPQj36b2_fjhVTvNXSn/view?usp=drive_link']
  },
  {
    judul: 'Bahaya Cicilan & Gaya Hidup Kredit',
    kategori: 'Financial Literacy',
    gambar: 'images/cicilan.jpeg',
    links: ['https://drive.google.com/file/d/1hXPkOxwXoEbtbP7Rce-XKmvavSfCyEtN/view?usp=drive_link']
  },
  {
    judul: 'Cara Menentukan Dana Darurat',
    kategori: 'Financial Literacy',
    gambar: 'images/caradanadarurat.jpeg',
    links: ['https://drive.google.com/file/d/170s27LEKhWbWcmXAqP5ywbGvCpQPgDox/view?usp=drive_link']
  },
   {
    judul: 'Dimana Menyimpan Dana Darurat',
    kategori: 'Financial Literacy',
    gambar: 'images/simpandarurat.jpeg',
    links: ['https://drive.google.com/file/d/1k7V3UUla87cFup8EqNpoxdxc_uQ26Whd/view?usp=drive_link']
  }, 
   {
    judul: 'Kebiasaan Menabung',
    kategori: 'Financial Literacy',
    gambar: 'images/menabung.jpeg',
    links: ['https://drive.google.com/file/d/1E6Mlp9caOurMSunny0gLRigWBNjWrW1r/view?usp=drive_link']
  }, 
   {
    judul: 'Rich Mindset vs Poor Mindset',
    kategori: 'Financial Literacy',
    gambar: 'images/Rich-Mindset-VS-Poor-Mindset.jpg',
    links: ['https://drive.google.com/file/d/1N8fwAJFd6ASLWDQJEeDRfAjoK_qDWt7z/view?usp=drive_link']
  },
   {
    judul: 'Membuat Tujuan Keuangan',
    kategori: 'Financial Literacy',
    gambar: 'images/Membuat-Tujuan-Keuangan.jpg',
    links: ['https://drive.google.com/file/d/1YPYPJwS7L6aOkWo0pWD0sInRvBQUJenn/view?usp=drive_link']
  },
   {
    judul: 'Membuat Anggaran Bulanan',
    kategori: 'Financial Literacy',
    gambar: 'images/Membuat-Anggaran-Bulanan.jpg',
    links: ['https://drive.google.com/file/d/1boy20ijS2OLFET63zNyYoRMkxA-MRKnM/view?usp=drive_link']
  },
   {
    judul: 'Cara Mengatur Gaji Secara Efektif',
    kategori: 'Financial Literacy',
    gambar: 'images/gaji.jpeg',
    links: ['https://drive.google.com/file/d/1akTAmU-UgVyQd1EeLKYydo0vUe3vNWkk/view?usp=drive_link']
  },
   {
    judul: 'Membongkar Kebocoroan Keuangan',
    kategori: 'Financial Literacy',
    gambar: 'images/Membongkar-Kebocoran-Keuangan.jpg',
    links: ['https://drive.google.com/file/d/1_Ig29NVGCOAhjGfctLqujhY8glSqvhgk/view?usp=drive_link']
  },
   {
    judul: 'Strategi Tingkatkan Penghasilan',
    kategori: 'Financial Literacy',
    gambar: 'images/Strategi-Tingkatkan-Penghasilan.jpg',
    links: ['https://drive.google.com/file/d/11t_-tMk6ZN1EsPAZtjlMIzSslHvyWjw7/view?usp=drive_link']
  },
   {
    judul: 'Memahami Utang Produktif VS Konsumtif',
    kategori: 'Financial Literacy',
    gambar: 'images/Utang-Produktif-VS-Konsumtif.jpg',
    links: ['https://drive.google.com/file/d/1oYhDkWimUTHhwxe9BhyzP5832671HxTO/view?usp=drive_link']
  },
   {
    judul: 'Kelola Kartu Kredit Secara Bijak',
    kategori: 'Financial Literacy',
    gambar: 'images/Kartu-Kredit-Secara-Bijak.jpg',
    links: ['https://drive.google.com/file/d/1SRxPhrMBxg-NdHj0sxQz8L_hzYcMQGZU/view?usp=drive_link']
  },
  {
  judul: 'The Wealth Blueprint',
  kategori: 'Principles Investing',
  gambar: 'images/the-wealth-blueprint.jpeg',
  links: [
    { url: 'https://drive.google.com/file/d/19Snm5L2k5pfpsVCWC0Vxayk6j3DxThpa/view?usp=drive_link', label: '1.Compounding Interest, Keajaiban ke 8 dunia' },
    { url: 'https://drive.google.com/file/d/1b0h857lI9J_bbH9XNYJCBJ2CSO03YMp_/view?usp=drive_link', label: '2.Gaya Hidup Sederhana' },
    { url: 'https://drive.google.com/file/d/1PBw5P0EIBN0Qwmq25IXpDA_vwqb4MLtD/view?usp=drive_link', label: '3.Jangan Pernah Kehilangan Uang' },
    { url: 'https://drive.google.com/file/d/1b2SUHPwCtPNM8wVI6mITuJYa2GLIRIIo/view?usp=drive_link', label: '4.Investasi Sebagai Bisnis' },
    { url: 'https://drive.google.com/file/d/1yPG2VVMvun3MhxA6DvtxaowPz792GDVQ/view?usp=drive_link', label: '5.Strategi Kekayaan Jangka Panjang' },
    { url: 'https://drive.google.com/file/d/1twVlobFTj-RNrJpLQ-DNwte7HanQah8Y/view?usp=drive_link', label: '6.Avoiding Stupidity' },
    { url: 'https://drive.google.com/file/d/1CnVpCWbp8PvGoRrsJclPzEFE8WeTdioE/view?usp=drive_link', label: '7.Berinvestasi Untuk Legacy' },
  ]
  },
  {
  judul: 'The Investor`s Mind',
  kategori: 'Principles Investing',
  gambar: 'images/the-investors-mind.jpeg',
  links: [
    { url: 'https://drive.google.com/file/d/1AOJtx9f8i5CoRTqBfZf0OqzQifH1Xqwl/view?usp=drive_link', label: '1.Integritas dan Kesabaran' },
    { url: 'https://drive.google.com/file/d/19uZNZdm6C1MwjCUHSaB2x5utCbPHuzW4/view?usp=drive_link', label: '2.Circle of Competence' },
    { url: 'https://drive.google.com/file/d/17hE1JoSQDg1H6aMjsqCGUThmbU5ohD52/view?usp=drive_link', label: '3.The Psychology Money' },
    { url: 'https://drive.google.com/file/d/1u8KOLWvOvXa_UyaNF8M3zFiySsD-oJ0C/view?usp=drive_link', label: '4.Mental Models 101' },
    { url: 'https://drive.google.com/file/d/1GHLRAhtHPKjKj63NGYT5Y9iU_FN81XqW/view?usp=drive_link', label: '5.Value VS Price' },
    { url: 'https://drive.google.com/file/d/1gtNLC0JEOUsz0eAInArcSfSpfdL5yjSo/view?usp=drive_link', label: '6.Margin of Safety' },
    { url: 'https://drive.google.com/file/d/1Rst1fpZM2arOMNjd_tYpbxee1D4vsy-B/view?usp=drive_link', label: '7.The Long Term Mindset' },
  ]
 },
  {
  judul: 'Behavorial Finance',
  kategori: 'Principles Investing',
  gambar: 'images/bhivoral-finance.jpeg',
  links: [
    { url: 'https://drive.google.com/file/d/1-64cMJaupxgoN9lZdZgfu-rQ2HxgzA21/view?usp=drive_link', label: '1.Cognitive Bias' },
    { url: 'https://drive.google.com/file/d/1-7brmxq7fGpdotTIikNYSuoaNkpul-ca/view?usp=drive_link', label: '2.Market Herding and History of Bubbles' },
    { url: 'https://drive.google.com/file/d/1-99Blczlufh2sOwANj8rpDYa0B02bPA4/view?usp=drive_link', label: '3.Emotional Discipline' },
  ]
},
  {
  judul: 'Principles of Investing',
  kategori: 'Principles Investing',
  gambar: 'images/principles-of-investing.jpeg',
  links: [
    { url: 'https://drive.google.com/file/d/15iBrVhpXDpjWsBgCQZgMB_zuu-KUrY3n/view?usp=drive_link', label: '1.Time Value of Money' },
    { url: 'https://drive.google.com/file/d/11UwKr8hfRX9Sdt3Cul8fPyXG40Hm4wwO/view?usp=drive_link', label: '2.Risk VS Return' },
    { url: 'https://drive.google.com/file/d/19bHtEqFrPzXxB0bN6CN0x5ilC-VBZ8D-/view?usp=drive_link', label: '3.Asset Classes' },
  ]
},
  {
  judul: 'Financial Accounting',
  kategori: 'Principles Investing',
  gambar: 'images/financial-accounting.jpeg',
  links: [
    { url: 'https://drive.google.com/file/d/1-26AlQwEl6DW3UpB5V21Qi6yZfiFyNRq/view?usp=drive_link', label: '1.Rasio Finansial' },
    { url: 'https://drive.google.com/file/d/1vGneEbPOEDP91w2PRdDMUHTQoZ85umO1/view?usp=drive_link', label: '2.Accounting Red Flags' },
    { url: 'https://drive.google.com/file/d/1gryIcleTzGiyb_vEHdKq2uqyfVshvcDP/view?usp=drive_link', label: '3.Menghitung Discounted Cash Flow' },
  ]
},
  {
  judul: 'Capital Market Mastery',
  kategori: 'Principles Investing',
  gambar: 'images/capital-market.jpeg',
  links: [
    { url: 'https://drive.google.com/file/d/1DOeNnqD355vquAryZgLh3klCLdO0Ay5c/view?usp=drive_link', label: '1.Fundamental Analysis 101' },
    { url: 'https://drive.google.com/file/d/1xz-cojxOFxlErr2SMXOOUNFX8JG47D2M/view?usp=drive_link', label: '2.Menganalisis Bisnis Hebat' },
    { url: 'https://drive.google.com/file/d/12gfuXVcWJKuIR_tyNmqmYJU8PuBA2L5S/view?usp=drive_link', label: '3.Time is the friend of the Wonderful business' },
    { url: 'https://drive.google.com/file/d/1BRz-uJXzYnnshOGSBjGHwbrWGkHL14L3/view?usp=drive_link', label: '4.Mr.Market is your Servant' },
    { url: 'https://drive.google.com/file/d/1_KHAZAB93M0sCXFdbm8e4_yPPwHxUF68/view?usp=drive_link', label: '5.Sektor dan Siklus' },
    { url: 'https://drive.google.com/file/d/1fCCU8BVAE90j2tof6TWN9kqDllUtM_Pj/view?usp=drive_link', label: '6.Diversifikasi VS Konsentrasi' },
    { url: 'https://drive.google.com/file/d/1bNrqXnSwZzg8zf2yA6D2xPaTiribbPFs/view?usp=drive_link', label: '7.Saham Sebagai Instrumen Kekayaan' },
  ]
 },
  {
  judul: 'Assets Classes',
  kategori: 'Principles Investing',
  gambar: 'images/assetsclas.webp',
  links: [
    { url: 'https://youtu.be/azD_aYYxY_c?si=pSGGrSDyuWhcFMtY', label: '1.Cash & Cash Equivalents' },
    { url: 'https://youtu.be/Ea87cujfaSI?si=-duMDvgqSL3W6X5E', label: '2.Bonds' },
    { url: 'https://youtu.be/tD1UbHo3tQA?si=IqIWejasHLWwdEGu', label: '3.Stock' },
    { url: 'https://youtu.be/8QFz1oGqQII?si=rW5A7r0HwdgwF9XQ', label: '4.Commodities' },
    { url: 'https://youtu.be/0S-nPVOVIxI?si=Jg9npn6P6oexcVK8', label: '5.Alternative Assets' },
  ]
 },
  {
  judul: 'Macroeconomic For Investor',
  kategori: 'Principles Investing',
  gambar: 'images/macroeconimi.webp',
  links: [
    { url: 'https://youtu.be/GBNfYbxe5kQ?si=eB-FIooxpmiNJ_Hg', label: '1.Inflasi Suku Bunga dan GDP' },
    { url: 'https://youtu.be/uoYTsYrkYXs?si=f5p6u1kqwYwefd1x', label: '2.Siklus Bisnis' },
    { url: 'https://youtu.be/c6dUxRNNav4?si=sSB0JBGeW3dDuzsc', label: '3.Bank Sentral, Quantitative Easing dan Kebijakan Fiskal' },
  ]
},
];

const researchData = [
  {
    title: "Bank BCA $BBCA",
    image: "images/bca.png",
    link: "https://cdn.discordapp.com/attachments/1391250387314675844/1391257343018274816/Ternakuang_Research_-_BBCA.pdf?ex=68712b9e&is=686fda1e&hm=1286d5c32254a35166b8492ea4cb4760902f81d20d9bf1c818954a29da3fe56c&",
    category: "research"
  },

];

// ====== GENERATE MODUL KATEGORI ======
const modulContainer = document.getElementById('modul-container');

function generateModul(filteredKeyword = '') {
  modulContainer.innerHTML = '';

  kategoriUtama.forEach(kategori => {
    const row = document.createElement('div');
    row.classList.add('kategori-row');

    const modulDalamKategori = modulList.filter(modul =>
      modul.kategori === kategori &&
      modul.judul.toLowerCase().includes(filteredKeyword)
    );

    if (modulDalamKategori.length > 0) {
      modulDalamKategori.forEach(modulData => {
        const modul = createModulCard(modulData);
        row.appendChild(modul);
      });

      const section = document.createElement('div');
      section.classList.add('kategori-section');

      const title = document.createElement('h2');
      title.innerText = kategori;
      title.classList.add('kategori-title');

      const lihatSemuaBtn = document.createElement('button');
      lihatSemuaBtn.innerText = '📂 Lihat Semua';
      lihatSemuaBtn.classList.add('modul-button');
      lihatSemuaBtn.onclick = () => bukaModal(kategori);

      section.appendChild(title);
      section.appendChild(row);
      section.appendChild(lihatSemuaBtn);
      modulContainer.appendChild(section);
    }
  });
}

function createModulCard(modulData) {
  const modul = document.createElement('div');
  modul.classList.add('modul');

  const img = document.createElement('img');
  img.src = modulData.gambar;
  img.alt = modulData.judul;

  const h3 = document.createElement('h3');
  h3.innerText = modulData.judul;
  h3.classList.add('modul-judul');

  modul.appendChild(img);
  modul.appendChild(h3);

  const links = modulData.links;

  if (links.length === 1) {
    const linkObj = links[0];
    const url = typeof linkObj === 'string' ? linkObj : linkObj.url;
    const label = typeof linkObj === 'string' ? '▶️ Tonton' : `▶️ ${linkObj.label}`;

    const btn = document.createElement('a');
    btn.href = url;
    btn.classList.add('modul-button');
    btn.innerText = label;
    btn.target = '_blank';
    modul.appendChild(btn);
  } else {
    const details = document.createElement('details');
    details.classList.add('modul-dropdown');

    const summary = document.createElement('summary');
    summary.innerText = '▶️ Pilih Video';
    summary.classList.add('dropdown-summary');
    details.appendChild(summary);

    links.forEach((linkObj, index) => {
      const url = typeof linkObj === 'string' ? linkObj : linkObj.url;
      const label = typeof linkObj === 'string' ? `Tonton ${index + 1}` : linkObj.label || `Tonton ${index + 1}`;

      const item = document.createElement('div');
      item.innerText = label;
      item.classList.add('dropdown-item');
      item.onclick = () => {
        window.open(url, '_blank');
        details.removeAttribute('open');
      };
      details.appendChild(item);
    });

    modul.appendChild(details);
  }

  return modul;
}

// ====== MODAL POPUP ======
function bukaModal(kategori) {
  const modal = document.getElementById('modul-modal');
  const modalContent = document.getElementById('modul-modal-content');
  modalContent.innerHTML = '';

  const judul = document.createElement('h2');
  judul.innerText = kategori;
  judul.classList.add('modal-title');
  modalContent.appendChild(judul);

  const grid = document.createElement('div');
  grid.classList.add('modal-grid');

  modulList
    .filter(modul => modul.kategori === kategori)
    .forEach(modulData => {
      const modul = createModulCard(modulData);
      grid.appendChild(modul);
    });

  const closeBtn = document.createElement('button');
  closeBtn.innerText = '✖';
  closeBtn.classList.add('close-button');
  closeBtn.onclick = tutupModal;

  modalContent.appendChild(grid);
  modalContent.appendChild(closeBtn);
  modal.style.display = 'flex';
}

function tutupModal() {
  document.getElementById('modul-modal').style.display = 'none';
}

// ====== KLIK DI LUAR MODAL UNTUK TUTUP ======
document.getElementById('modul-modal').addEventListener('click', function (e) {
  if (e.target.id === 'modul-modal') {
    tutupModal();
  }
});

// ====== HALAMAN RISET ======
const risetContainer = document.getElementById('halaman-riset');

function generateResearch() {
  risetContainer.innerHTML = '';
  const wrapper = document.createElement('div');
  wrapper.classList.add('riset-container');

  researchData.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('riset-card');

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.title;

    const title = document.createElement('p');
    title.innerText = item.title;

    const btn = document.createElement('a');
    btn.href = item.link;
    btn.innerText = '📄 Lihat Riset';
    btn.classList.add('modul-button');
    btn.target = '_blank';

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(btn);
    wrapper.appendChild(card);
  });

  risetContainer.appendChild(wrapper);
}

// ====== HALAMAN UTAMA ======
const modulPage = document.getElementById('modul-container');
const risetPage = document.getElementById('halaman-riset');
const profilPage = document.getElementById('halaman-profil');

function showPage(page) {
  modulPage.style.display = (page === 'modul') ? 'block' : 'none';
  risetPage.style.display = (page === 'riset') ? 'block' : 'none';
  profilPage.style.display = (page === 'profil') ? 'block' : 'none';

  if (page === 'riset') generateResearch();
}

// ====== PENCARIAN ======
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', () => {
  const keyword = searchInput.value.trim().toLowerCase();
  generateModul(keyword);
});

// ====== INISIALISASI ======
generateModul();
