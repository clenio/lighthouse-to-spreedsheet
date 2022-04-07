const file = process.argv[2];
import fs from 'fs';
import clipboardy from 'clipboardy';

let rawdata = fs.readFileSync(file);

const obj = JSON.parse(rawdata);
let conteudo = "🌐 Site	🎯 Score	🏎️ Performance	♿ Accessibility	❤️ Best Pratices	📇 SEO	📱 PWA \n";

for (const item of obj) {
    let verifica = item.detail
    if (verifica != undefined) {
	conteudo += item.url+"	"+parseInt(item.score*100)+"	"+parseInt(item.detail.performance*100)+"	"+parseInt(item.detail.accessibility*100)+"	"+parseInt(item["detail"]["best-practices"]*100)+"	"+parseInt(item.detail.seo*100)+"	"+parseInt(item.detail.pwa*100)+" \n"
    } else {
        console.log("error")
    }
}

console.log(conteudo)
clipboardy.writeSync(conteudo);