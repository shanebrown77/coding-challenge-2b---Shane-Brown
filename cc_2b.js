// coding Challenge 2b - Shane Brown

const itemName = "USB-C Cable";

let unitCost = 5.50;
let currentStock = 90;
let reorderLevel = 95;
let targetStock = 225;
let weeklyDemand = 30;
let supplierLeadTimeWeeks = 2;


let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity;
let stockDeficit = Math.max(0, targetStock -currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) :0
let estimatedReorderCost = reorderQuantity * unitCost;
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;   


console.log(itemName);
console.log(weeksOfCover);
console.log(reorderNow);
console.log(reorderQuantity);
console.log(estimatedReorderCost);