// Persamaan Linear
function hitungPersamaan() {
  const input = document.getElementById("persamaan").value;
  const output = document.getElementById("outputLinear");

  const match = input.match(/([-+]?\d*)x\s*([+-]\s*\d+)?\s*=\s*(-?\d+)/);
  if (!match) {
    output.innerText = "Format salah. Contoh: 2x + 5 = 15";
    return;
  }

  let a = parseFloat(match[1].replace(/^$/, '1').replace('-', '-1'));
  let b = match[2] ? parseFloat(match[2].replace(/\s/g, '')) : 0;
  let c = parseFloat(match[3]);

  const step1 = `${a}x + ${b} = ${c}`;
  const step2 = `${a}x = ${c} - ${b} => ${a}x = ${c - b}`;
  const step3 = `x = ${(c - b)} / ${a} => x = ${(c - b) / a}`;

  output.innerText = `Langkah-langkah:\n1. ${step1}\n2. ${step2}\n3. ${step3}\nHasil: x = ${(c - b) / a}`;
}

function clearPersamaan() {
  document.getElementById("persamaan").value = '';
  document.getElementById("outputLinear").innerText = '';
}

// Kalkulator Biasa
function hitung(operasi) {
  const a = parseFloat(document.getElementById("angka1").value);
  const b = parseFloat(document.getElementById("angka2").value);
  const output = document.getElementById("outputKalkulator");

  let hasil;
  let langkah;

  switch (operasi) {
    case 'tambah':
      hasil = a + b;
      langkah = `${a} + ${b} = ${hasil}`;
      break;
    case 'kurang':
      hasil = a - b;
      langkah = `${a} - ${b} = ${hasil}`;
      break;
    case 'kali':
      hasil = a * b;
      langkah = `${a} × ${b} = ${hasil}`;
      break;
    case 'bagi':
      hasil = b !== 0 ? a / b : 'Tak terdefinisi';
      langkah = b !== 0 ? `${a} ÷ ${b} = ${hasil}` : 'Pembagian dengan nol tidak valid';
      break;
  }

  output.innerText = `Langkah-langkah:\n${langkah}\nHasil: ${hasil}`;
}

function clearKalkulator() {
  document.getElementById("angka1").value = '';
  document.getElementById("angka2").value = '';
  document.getElementById("outputKalkulator").innerText = '';
}

// Pythagoras
function hitungPythagoras() {
  const a = parseFloat(document.getElementById("pytaA").value);
  const b = parseFloat(document.getElementById("pytaB").value);
  const output = document.getElementById("outputPythagoras");

  const a2 = a * a;
  const b2 = b * b;
  const c2 = a2 + b2;
  const c = Math.sqrt(c2).toFixed(2);

  output.innerText = `Langkah-langkah:\n1. a² + b² = c²\n2. ${a}² + ${b}² = ${a2} + ${b2} = ${c2}\n3. √${c2} = ${c}\nHasil: c = ${c}`;
}

function clearPythagoras() {
  document.getElementById("pytaA").value = '';
  document.getElementById("pytaB").value = '';
  document.getElementById("outputPythagoras").innerText = '';
}

// Persamaan Linear 3 Variabel
function hitungSPL3() {
  const v1 = document.getElementById("plv1").value.trim().split(" ").map(Number);
  const v2 = document.getElementById("plv2").value.trim().split(" ").map(Number);
  const v3 = document.getElementById("plv3").value.trim().split(" ").map(Number);
  const out = document.getElementById("outputSPL3");

  if (v1.length !== 4 || v2.length !== 4 || v3.length !== 4) {
    out.innerText = "Masukkan 4 angka per baris. Contoh: 2 3 -1 4";
    return;
  }

  const [a1, b1, c1, d1] = v1;
  const [a2, b2, c2, d2] = v2;
  const [a3, b3, c3, d3] = v3;

  const D = a1*(b2*c3 - b3*c2) - b1*(a2*c3 - a3*c2) + c1*(a2*b3 - a3*b2);
  const Dx = d1*(b2*c3 - b3*c2) - b1*(d2*c3 - d3*c2) + c1*(d2*b3 - d3*b2);
  const Dy = a1*(d2*c3 - d3*c2) - d1*(a2*c3 - a3*c2) + c1*(a2*d3 - a3*d2);
  const Dz = a1*(b2*d3 - b3*d2) - b1*(a2*d3 - a3*d2) + d1*(a2*b3 - a3*b2);

  if (D === 0) {
    out.innerText = "Tidak ada solusi unik.";
    return;
  }

  const x = (Dx / D).toFixed(2);
  const y = (Dy / D).toFixed(2);
  const z = (Dz / D).toFixed(2);

  out.innerText = `Menggunakan metode Cramer:\nD = ${D}, Dx = ${Dx}, Dy = ${Dy}, Dz = ${Dz}\nHasil: x = ${x}, y = ${y}, z = ${z}`;
}

function clearSPL3() {
  document.getElementById("plv1").value = '';
  document.getElementById("plv2").value = '';
  document.getElementById("plv3").value = '';
  document.getElementById("outputSPL3").innerText = '';
}

// Fungsi Kuadrat
function hitungKuadrat() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const output = document.getElementById("outputKuadrat");

  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    output.innerText = "Harap isi semua nilai a, b, dan c.";
    return;
  }

  const D = b * b - 4 * a * c;
  let langkah = `Langkah-langkah:\n`;
  langkah += `1. Diketahui: a = ${a}, b = ${b}, c = ${c}\n`;
  langkah += `2. Hitung diskriminan: D = b² - 4ac = ${b}² - 4(${a})(${c}) = ${D}\n`;

  if (D > 0) {
    const x1 = (-b + Math.sqrt(D)) / (2 * a);
    const x2 = (-b - Math.sqrt(D)) / (2 * a);
    langkah += `3. Karena D > 0, maka ada 2 solusi nyata:\n`;
    langkah += `x1 = (-b + √D) / 2a = ${x1.toFixed(2)}\n`;
    langkah += `x2 = (-b - √D) / 2a = ${x2.toFixed(2)}\n`;
  } else if (D === 0) {
    const x = -b / (2 * a);
    langkah += `3. Karena D = 0, maka hanya ada 1 solusi:\n`;
    langkah += `x = -b / 2a = ${x.toFixed(2)}\n`;
  } else {
    langkah += `3. Karena D < 0, maka tidak ada solusi nyata (akar imajiner).\n`;
  }

  output.innerText = langkah;
}

function clearKuadrat() {
  document.getElementById("a").value = '';
  document.getElementById("b").value = '';
  document.getElementById("c").value = '';
  document.getElementById("outputKuadrat").innerText = '';
}
// Statistika
function hitungStatistika() {
  const input = document.getElementById("dataStatistika").value;
  const output = document.getElementById("outputStatistika");

  let data = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
  if (data.length === 0) {
    output.innerText = "Masukkan data yang valid.";
    return;
  }

  data.sort((a, b) => a - b);

  const mean = data.reduce((a, b) => a + b, 0) / data.length;
  const mid = Math.floor(data.length / 2);
  const median = data.length % 2 === 0 ? (data[mid - 1] + data[mid]) / 2 : data[mid];
  const count = {};
  data.forEach(val => count[val] = (count[val] || 0) + 1);
  const maxCount = Math.max(...Object.values(count));
  const modus = Object.keys(count).filter(key => count[key] == maxCount).map(Number);
  const variance = data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length;
  const stdDev = Math.sqrt(variance);

  output.innerText =
    `Langkah-langkah:\n1. Data: ${data.join(', ')}\n2. Rata-rata = ${mean.toFixed(2)}\n3. Median = ${median}\n4. Modus = ${modus.join(', ')}\n5. Standar Deviasi = ${stdDev.toFixed(2)}`;
}

function clearStatistika() {
  document.getElementById("dataStatistika").value = '';
  document.getElementById("outputStatistika").innerText = '';
}

// FPB & KPK
function hitungFPBKPK() {
  const a = parseInt(document.getElementById("angkaFpb").value);
  const b = parseInt(document.getElementById("angkaKpk").value);
  const out = document.getElementById("outputFpbKpk");

  function fpb(x, y) {
    while (y) {
      let t = y;
      y = x % y;
      x = t;
    }
    return x;
  }

  const hasilFpb = fpb(a, b);
  const hasilKpk = (a * b) / hasilFpb;

  out.innerText =
    `Langkah-langkah:\n1. FPB dari ${a} dan ${b} adalah ${hasilFpb}\n2. KPK = (${a} × ${b}) ÷ FPB = ${hasilKpk}\nHasil:\nFPB = ${hasilFpb}, KPK = ${hasilKpk}`;
}

function clearFPBKPK() {
  document.getElementById("angkaFpb").value = '';
  document.getElementById("angkaKpk").value = '';
  document.getElementById("outputFpbKpk").innerText = '';
}

// Trigonometri
function hitungTrigonometri() {
  const depan = parseFloat(document.getElementById("sisiDepan").value);
  const samping = parseFloat(document.getElementById("sisiSamping").value);
  const miring = parseFloat(document.getElementById("sisiMiring").value);
  const out = document.getElementById("outputTrigonometri");

  let sin = depan && miring ? (depan / miring).toFixed(3) : "-";
  let cos = samping && miring ? (samping / miring).toFixed(3) : "-";
  let tan = depan && samping ? (depan / samping).toFixed(3) : "-";

  out.innerText =
    `Perbandingan Trigonometri:\n1. sin = depan/miring = ${sin}\n2. cos = samping/miring = ${cos}\n3. tan = depan/samping = ${tan}`;
}

function clearTrigonometri() {
  document.getElementById("sisiDepan").value = '';
  document.getElementById("sisiSamping").value = '';
  document.getElementById("sisiMiring").value = '';
  document.getElementById("outputTrigonometri").innerText = '';
}