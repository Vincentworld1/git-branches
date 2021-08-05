import { writeFile } from 'fs';
let name = process.argv[2];

writeFile('data.json', name, (err) => console.error('err ->', err));

console.log(`Yes, I'm doing well, how about you, ${name}?`);