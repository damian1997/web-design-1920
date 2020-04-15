import fs from 'fs'
const csv = require('csv-parser');

init()

export default function init() {
  const PATH = '/Users/damianveltkamp/Documents/development/web-design-1920/data/Jaarplan-2020-Imke-Larissa.csv'
  const CSV = readFile(PATH)
  const JSON = csvToJson(CSV)
}

function readFile(PATH) {
  return fs.readFileSync(PATH)
}

function csvToJson(CSV) {
  const results = [];
fs.createReadStream('/Users/damianveltkamp/Documents/development/web-design-1920/data/Jaarplan-2020-Imke-Larissa.csv')
    .pipe(csv({ separator: ';' }))
    .on('data', (data) => {
      console.log(data)
      results.push(data)
    })
  .on('end', () => {
  });
  //const JSON = d3.csvParse(CSV)
  //console.log(JSON)
}
