// Same renderer powers the preview, PNG download and native file sharing.
export function paintGift(canvas,{greeting,names=[]}){
 canvas.width=1080;canvas.height=1350;const c=canvas.getContext('2d');if(!c)throw Error('Canvas is unavailable');
 const g=c.createLinearGradient(0,0,1080,1350);g.addColorStop(0,'#874858');g.addColorStop(1,'#452031');c.fillStyle=g;c.fillRect(0,0,1080,1350);
 c.strokeStyle='#d6ae6980';c.lineWidth=1.5;c.strokeRect(38,38,1004,1274);c.strokeRect(48,48,984,1254);
 // Foil corner ornament and restrained star field.
 for(const [x,y,sx,sy] of [[65,65,1,1],[1015,65,-1,1],[65,1285,1,-1],[1015,1285,-1,-1]]){c.save();c.translate(x,y);c.scale(sx,sy);for(let i=0;i<4;i++){c.beginPath();c.ellipse(24+i*17,24+i*17,15,37,-Math.PI/4,0,Math.PI*2);c.stroke()}c.restore()}
 for(let i=0;i<40;i++){const x=75+(i*137)%930,y=100+(i*97)%960;c.fillStyle=i%3?'#d6ae6944':'#efd3a8';c.beginPath();c.arc(x,y,i%3?1:2,0,Math.PI*2);c.fill()}
 c.textAlign='center';c.fillStyle='#fff0d6';c.font='bold 38px Arial';c.fillText('GEOJIT',540,146);c.fillStyle='#ddbd94';c.font='16px Arial';c.fillText('T H E   D I W A L I   W E A L T H   B O X',540,191);
 c.font='92px Georgia';c.fillStyle='#f6dfb0';c.fillText('Happy Diwali',540,338);
 c.font='28px Georgia';wrap(c,greeting||'Wishing you a brighter tomorrow.',540,405,810,39,3);
 // A folded-paper gift box with gold foil bands and ribbon loops.
 c.save();c.translate(540,690);c.rotate(-.09);c.shadowColor='#1e0b24aa';c.shadowBlur=45;c.shadowOffsetY=24;
 c.fillStyle='#48202f';c.fillRect(-250,-100,500,240);c.shadowBlur=0;c.shadowOffsetY=0;
 let box=c.createLinearGradient(-260,-150,260,100);box.addColorStop(0,'#a46073');box.addColorStop(1,'#6c3045');c.fillStyle=box;c.fillRect(-265,-130,530,230);
 c.strokeStyle='#d6ae69';c.strokeRect(-253,-118,506,206);c.strokeRect(-241,-106,482,182);
 const ribbon=c.createLinearGradient(-35,0,35,0);ribbon.addColorStop(0,'#b48a49');ribbon.addColorStop(.5,'#f9e1a8');ribbon.addColorStop(1,'#c89a56');c.fillStyle=ribbon;c.fillRect(-35,-130,70,230);
 const band=c.createLinearGradient(0,-42,0,17);band.addColorStop(0,'#b88d4e');band.addColorStop(.5,'#f6dca1');band.addColorStop(1,'#cba362');c.fillStyle=band;c.fillRect(-265,-42,530,59);
 c.lineWidth=18;c.strokeStyle='#ddbc7b';for(const sign of [-1,1]){c.save();c.scale(sign,1);c.beginPath();c.ellipse(62,-58,66,29,-.38,0,Math.PI*2);c.stroke();c.restore()}
 c.fillStyle='#d7b06d';c.beginPath();c.arc(0,-15,37,0,Math.PI*2);c.fill();c.strokeStyle='#f7e2af';c.lineWidth=2;c.stroke();c.fillStyle='#713342';c.font='30px Georgia';c.fillText('G',0,-4);c.restore();
 // Diyas: light without a decorative emoji dependency.
 for(const x of [220,860]){const glow=c.createRadialGradient(x,898,2,x,898,65);glow.addColorStop(0,'#fbdc9366');glow.addColorStop(1,'#fbdc9300');c.fillStyle=glow;c.fillRect(x-65,833,130,130);c.fillStyle='#c59a5b';c.beginPath();c.ellipse(x,936,43,17,0,0,Math.PI);c.fill();c.fillStyle='#ffe6a8';c.beginPath();c.moveTo(x,880);c.bezierCurveTo(x+26,915,x+8,937,x,932);c.bezierCurveTo(x-17,930,x-15,909,x,880);c.fill()}
 c.fillStyle='#edcda0';c.font='italic 26px Georgia';c.fillText('Some gifts are chosen with tomorrow in mind.',540,1005);
 if(names.length){c.font='20px Arial';c.fillStyle='#f4e6d5';wrap(c,names.join('  ·  '),540,1060,850,31,4)}
 c.font='20px Arial';c.fillStyle='#e5c8a1';c.fillText('Handpicked by you. Guided by Geojit.',540,1235);c.font='14px Arial';c.fillStyle='#dabda6';c.fillText('An ideas box. No shares are transferred. Investments carry market risk.',540,1270);
}
function wrap(c,text,x,y,width,lineHeight,max){let line='',lines=[];for(const word of text.split(/\s+/)){if(c.measureText((line?line+' ':'')+word).width>width&&line){lines.push(line);line=''}if(c.measureText(word).width>width){for(const ch of word){if(c.measureText(line+ch).width>width){lines.push(line);line=''}line+=ch}}else line+=(line?' ':'')+word}if(line)lines.push(line);lines.slice(0,max).forEach((l,i)=>c.fillText(l,x,y+i*lineHeight,width))}
export function canvasBlob(canvas){return new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('Image export is unavailable')),'image/png'))}
