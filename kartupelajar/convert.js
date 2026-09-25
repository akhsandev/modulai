const fs = require('fs');

function parseCSV(text) {
  const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
  const rows = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const row = [];
    let insideQuotes = false;
    let field = '';
    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        row.push(field.trim());
        field = '';
      } else {
        field += char;
      }
    }
    row.push(field.trim());
    rows.push(row);
  }
  return rows;
}

const students = [];

// 1. Baca Kelas X
if (fs.existsSync('KARTU_PERPUS_KELAS_X.csv')) {
  const contentX = fs.readFileSync('KARTU_PERPUS_KELAS_X.csv', 'utf8');
  const rowsX = parseCSV(contentX);
  console.log('Read Kelas X rows:', rowsX.length - 1);
  for (let i = 1; i < rowsX.length; i++) {
    const r = rowsX[i];
    if (r.length < 5) continue;
    students.push({
      no: String(students.length + 1),
      kelas: r[1],
      nama: r[2],
      ttl: r[3],
      nisn: r[4],
      jk: r[5],
      alamat: r[6] || '-',
      qrId: r[7] || '',
      status: 'Pending',
      fotoUrl: '',
      updatedAt: ''
    });
  }
}

// 2. Baca Kelas XI
if (fs.existsSync('KARTU_PERPUS_KELAS_XI_BELUM_BUAT.csv')) {
  const contentXI = fs.readFileSync('KARTU_PERPUS_KELAS_XI_BELUM_BUAT.csv', 'utf8');
  const rowsXI = parseCSV(contentXI);
  console.log('Read Kelas XI rows:', rowsXI.length - 1);
  for (let i = 1; i < rowsXI.length; i++) {
    const r = rowsXI[i];
    if (r.length < 5) continue;
    students.push({
      no: String(students.length + 1),
      kelas: r[1],
      nama: r[2],
      ttl: r[3],
      nisn: r[4],
      jk: r[5],
      alamat: r[6] || '-',
      qrId: r[7] || '',
      status: 'Pending',
      fotoUrl: '',
      updatedAt: ''
    });
  }
}

console.log('Total merged students (Kelas X + XI):', students.length);
fs.writeFileSync('students_data.json', JSON.stringify(students, null, 2), 'utf8');
console.log('Successfully written to students_data.json');
