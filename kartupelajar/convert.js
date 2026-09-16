const fs = require('fs');

const content = fs.readFileSync('KARTU_PERPUS_KELAS_X.csv', 'utf8');

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

const rows = parseCSV(content);
const header = rows[0];
console.log('Headers:', header);

const students = [];
for (let i = 1; i < rows.length; i++) {
  const r = rows[i];
  if (r.length < 5) continue;
  students.push({
    no: r[0],
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
console.log('Parsed total students:', students.length);
fs.writeFileSync('students_data.json', JSON.stringify(students, null, 2), 'utf8');
