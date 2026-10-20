// Retained prototype data. All prices and business descriptions are demonstrations.
export const CONFIG = {version:2,initialCapacity:6,expansion:3,maxCapacity:30,maxQuantity:999999,concentration:.4,priceLabel:'Illustrative reference prices · Demo catalogue, 20 Oct 2026',researchDate:null};
export const THEMES = [
 ['all','All Stocks','Explore every business story.','✦'],
 ['finance','Foundations of Finance',"Businesses contributing to the country’s financial landscape.",'▥'],
 ['tomorrow','Building Tomorrow','Engineering, manufacturing and infrastructure.','⌂'],
 ['change','The Changing World','Technology, digital services and transformation.','✧'],
 ['aspiration','The Aspirational Economy','Consumption, lifestyle and evolving aspirations.','◇'],
 ['essentials','Everyday Essentials','Important products and services in daily life.','❋']
];
export const STOCKS = [
 ['ICICI','ICICI Bank','Banking','finance',1381,'A familiar part of India’s financial story.','An established private-sector bank participating in financial services.','IB','#8a5740'],
 ['TECHM','Tech Mahindra','IT Services','change',1779.1,'Ideas for a world being reimagined.','A technology-services company with exposure to enterprise digital transformation.','TM','#59665f'],
 ['LT','Larsen & Toubro','Infrastructure','tomorrow',3661.9,'Building the possibilities of tomorrow.','An engineering and infrastructure business linked to industrial and capital investment.','LT','#6e7183'],
 ['EXIDE','Exide Industries','Auto Components','essentials',359.35,'Energy behind everyday journeys.','A battery manufacturer serving automotive and industrial markets.','EX','#8b6657'],
 ['KALYAN','Kalyan Jewellers','Consumer Retail','aspiration',552,'Celebrating an aspirational India.','A jewellery retailer participating in evolving consumer aspirations.','KJ','#9c7a42'],
 ['SAGILITY','Sagility India','Healthcare Services','change',43.99,'Services for a changing world.','A healthcare-focused services business with technology-enabled operations.','SI','#687c73'],
 ['BEML','BEML','Engineering','tomorrow',1939.6,'The makers behind a moving nation.','An industrial manufacturer serving defence, mining and mobility.','BM','#7f6675'],
 ['MOTHERSON','Samvardhana Motherson','Auto Components','tomorrow',158.15,'Connecting a world of manufacturing.','An automotive-component business with exposure to manufacturing supply chains.','SM','#77724b']
].map(([id,name,sector,theme,price,story,description,monogram,color])=>({id,name,sector,theme,price,story,description,monogram,color,research:null,risks:null,researchDate:null}));
