import {mkdir,cp,rm,readFile,writeFile} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});
for(const file of ['index.html','style.css','src','assets'])await cp(file,`dist/${file}`,{recursive:true});
let html=await readFile('index.html','utf8'),css=await readFile('style.css','utf8'),js='';
for(const file of ['icons.js','brand.js','catalogue.js','model.js','gift-card.js','app.js'])js+=(await readFile('src/'+file,'utf8')).replace(/^import .*?;\s*$/gm,'').replace(/^export /gm,'')+'\n';
for(const weight of [400,500,600,700]){const bytes=await readFile(`assets/radio-canada-big-${weight}.ttf`);css=css.replace(`assets/radio-canada-big-${weight}.ttf`,`data:font/ttf;base64,${bytes.toString('base64')}`);}
js=js.replaceAll('assets/gift-diwali.webp','data:image/webp;base64,'+(await readFile('assets/gift-diwali.webp')).toString('base64'));
html=html.replace('<link rel="stylesheet" href="style.css">','<style>'+css+'</style>').replace('<script type="module" src="src/app.js"></script>','<script type="module">'+js+'</script>');
await writeFile('dist/wealth-box-preview.html',html);
console.log('Static build and self-contained HTML preview ready in dist/. No deployment performed.');
