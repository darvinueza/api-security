const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const hash = await bcrypt.hash(password, 10);
  console.log(hash);
}

async function verifyPassword(password, hash) {
  const isMatch = await bcrypt.compare(password, hash);
  console.log(isMatch);
}

//hashPassword('DaRv1n&2021');

verifyPassword('DaRv1n&2021', '$2b$10$pi5nYyH8VH.wwWyEdklJf.O20KLFJI6Unt3sFEgUHFS0JzLOhfDNS');
