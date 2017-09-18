if (process.argv.length < 3)
  return console.log("usage: node song2html.js <name of file>");

const song2json = require('./song2json.js');
let song = song2json.parse(process.argv[2]);

let raw_html = '<link rel="stylesheet" href="slides.css">\n';
raw_html += '<script src="https://unpkg.com/jquery@3.2.1/dist/jquery.min.js"></script>\n';

for (var prop in song) {
  if (prop == 'title') {
    raw_html += `<div id="title" class="slide title-slide">${song['title']}</div>\n`;
  }

  if (prop.toLowerCase().startsWith('e')) {
    song[prop].forEach((slide, i) => {
      raw_html += `<div id='${prop}_${i}' class="slide">\n`;
      raw_html += `  <div class="title-header">${song.title}</div>\n`;
      raw_html += `  <div class="lyrics">\n`;
      if (slide[0])
        raw_html += `    <div>${slide[0]}</div>\n`;
      if (slide[2])
        raw_html += `    <div>${slide[2]}</div>\n`;
      raw_html += `  </div>\n`;
      raw_html += `  <div class="meaning">\n`;
      if (slide[1])
        raw_html += `    <div>${slide[1]}</div>\n`;
      if (slide[3])
        raw_html += `    <div>${slide[3]}</div>\n`;
      raw_html += `  </div>\n`;
      raw_html += `</div>\n`;
    });
  }

  if (prop.toLowerCase().startsWith('j')) {
    song[prop].forEach((slide, i) => {
      raw_html += `<div id='${prop}_${i}' class="slide">\n`;
      raw_html += `  <div class="title-header">${song.title}</div>\n`;
      raw_html += `  <div class="lyrics">\n`;
      if (slide[0])
        raw_html += `    <div>${slide[0]}</div>\n`;
      if (slide[1])
        raw_html += `    <div>${slide[1]}</div>\n`;
      if (slide[2])
        raw_html += `    <div>${slide[2]}</div>\n`;
      if (slide[3])
        raw_html += `    <div>${slide[3]}</div>\n`;
      raw_html += `  </div>\n`;
      raw_html += `</div>\n`;
    });
  }
}

console.log(raw_html);