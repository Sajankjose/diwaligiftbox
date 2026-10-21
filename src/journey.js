import {STOCKS,CONFIG} from './catalogue.js';
export const SMARTFOLIOS_URL='https://smartfolios.geojit.com/';
export const MUHURAT={date:'Sunday, 8 November 2026',time:'2:20–3:30 PM IST',end:Date.parse('2026-11-08T15:30:00+05:30')};
export function suggestedBasket(amount){
 const budget=Math.round(Number(amount)*100),prices=STOCKS.map(s=>Math.round(s.price*100));
 if(prices.some(p=>!Number.isSafeInteger(p)||p<=0))return {ok:false,reason:'prices'};
 const minimum=prices.reduce((a,b)=>a+b,0);
 if(!Number.isSafeInteger(budget)||budget<minimum||budget>100000000)return {ok:false,reason:'budget',minimum:Math.ceil(minimum/100)};
 const extra=Math.floor((budget-minimum)/STOCKS.length),basket={};
 STOCKS.forEach((s,i)=>basket[s.id]=Math.min(CONFIG.maxQuantity,1+Math.floor(extra/prices[i])));
 const spent=STOCKS.reduce((v,s,i)=>v+basket[s.id]*prices[i],0);
 return {ok:true,basket,amount:budget/100,total:spent/100,remainder:(budget-spent)/100,minimum:minimum/100};
}
export function basketChanged(s){return s.origin==='suggested'&&JSON.stringify(STOCKS.map(x=>s.basket[x.id]||0))!==JSON.stringify(STOCKS.map(x=>s.baseline?.[x.id]||0))}
export function portfolioPayload(s,details=false){return {v:1,detail:details,rows:STOCKS.filter(x=>s.basket[x.id]>0).map(x=>details?[x.id,s.basket[x.id],x.price]:[x.id])}}
export function validatePortfolio(p){
 if(!p||p.v!==1||typeof p.detail!=='boolean'||!Array.isArray(p.rows)||!p.rows.length||p.rows.length>STOCKS.length)throw Error('Invalid portfolio link');
 const ids=new Set();for(const r of p.rows){if(!Array.isArray(r)||r.length!==(p.detail?3:1)||!STOCKS.some(x=>x.id===r[0])||ids.has(r[0]))throw Error('Invalid company');ids.add(r[0]);if(p.detail&&(!Number.isSafeInteger(r[1])||r[1]<1||r[1]>CONFIG.maxQuantity||!Number.isFinite(r[2])||r[2]<=0||r[2]>1000000))throw Error('Invalid quantity or reference price')}
 return p;
}
