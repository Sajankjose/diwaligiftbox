// Same renderer powers the preview, PNG download and native file sharing.
export function paintGift(canvas,{greeting,names=[],logo,art}){
 canvas.width=1080;canvas.height=1350;const c=canvas.getContext('2d');if(!c)throw Error('Canvas is unavailable');if(!logo)throw Error('Official Geojit logo is required');
 const g=c.createLinearGradient(0,0,1080,1350);g.addColorStop(0,'#a44412');g.addColorStop(1,'#51270d');c.fillStyle=g;c.fillRect(0,0,1080,1350);
 c.strokeStyle='#d6ae6980';c.lineWidth=1.5;c.strokeRect(38,38,1004,1274);c.strokeRect(48,48,984,1254);
 // Foil corner ornament and restrained star field.
 for(const [x,y,sx,sy] of [[65,65,1,1],[1015,65,-1,1],[65,1285,1,-1],[1015,1285,-1,-1]]){c.save();c.translate(x,y);c.scale(sx,sy);for(let i=0;i<4;i++){c.beginPath();c.ellipse(24+i*17,24+i*17,15,37,-Math.PI/4,0,Math.PI*2);c.stroke()}c.restore()}
 for(let i=0;i<40;i++){const x=75+(i*137)%930,y=100+(i*97)%960;c.fillStyle=i%3?'#d6ae6944':'#efd3a8';c.beginPath();c.arc(x,y,i%3?1:2,0,Math.PI*2);c.fill()}
 c.textAlign='center';c.drawImage(logo,370,67,340,118);c.fillStyle='#ddbd94';c.font='16px "Radio Canada Big"';c.fillText('T H E   D I W A L I   W E A L T H   B O X',540,210);
 c.font='92px "Radio Canada Big"';c.fillStyle='#f6dfb0';c.fillText('Happy Diwali',540,338);
 c.font='28px "Radio Canada Big"';wrap(c,greeting||'Wishing you a brighter tomorrow.',540,405,810,39,3);
 // Same realistic artwork as the interactive reveal, cropped to its closed frame.
 if(art){c.save();c.beginPath();c.roundRect(205,490,670,470,24);c.clip();const side=art.width/2;c.drawImage(art,0,side*.19,side,side*.70,205,490,670,470);c.restore();}
 else{c.fillStyle='#f5d19b';c.font='42px "Radio Canada Big"';c.fillText('A gift of brighter possibilities',540,730)}
 c.fillStyle='#edcda0';c.font='italic 26px "Radio Canada Big"';c.fillText('Some gifts are chosen with tomorrow in mind.',540,1005);
 if(names.length){c.font='20px "Radio Canada Big"';c.fillStyle='#f4e6d5';wrap(c,names.join('  ·  '),540,1060,850,31,4)}
 c.font='20px "Radio Canada Big"';c.fillStyle='#e5c8a1';c.fillText('Handpicked by you. Guided by Geojit.',540,1235);c.font='14px "Radio Canada Big"';c.fillStyle='#dabda6';c.fillText('An ideas box. No shares are transferred. Investments carry market risk.',540,1270);
}
function wrap(c,text,x,y,width,lineHeight,max){let line='',lines=[];for(const word of text.split(/\s+/)){if(c.measureText((line?line+' ':'')+word).width>width&&line){lines.push(line);line=''}if(c.measureText(word).width>width){for(const ch of word){if(c.measureText(line+ch).width>width){lines.push(line);line=''}line+=ch}}else line+=(line?' ':'')+word}if(line)lines.push(line);lines.slice(0,max).forEach((l,i)=>c.fillText(l,x,y+i*lineHeight,width))}
export function canvasBlob(canvas){return new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('Image export is unavailable')),'image/png'))}
