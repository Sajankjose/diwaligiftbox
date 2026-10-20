import {mkdir,cp,rm,readFile,writeFile} from 'node:fs/promises';
await rm('dist',{recursive:true,force:true});await mkdir('dist',{recursive:true});
for(const file of ['index.html','style.css','src'])await cp(file,`dist/${file}`,{recursive:true});
let html=await readFile('index.html','utf8'),css=await readFile('style.css','utf8'),js='';
for(const file of ['catalogue.js','model.js','gift-card.js','app.js'])js+=(await readFile('src/'+file,'utf8')).replace(/^import .*?;\s*$/gm,'').replace(/^export /gm,'')+'\n';
html=html.replace('<link rel="stylesheet" href="style.css">','<style>'+css+'</style>').replace('<script type="module" src="src/app.js"></script>','<script type="module">'+js+'</script>');
await writeFile('dist/wealth-box-preview.html',html);
console.log('Static build and self-contained HTML preview ready in dist/. No deployment performed.');
