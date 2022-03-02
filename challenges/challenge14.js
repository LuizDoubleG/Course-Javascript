// Price Band
// Objective: Create a price band object array that can be used on an amazon-like site
// After that: Create a function to instance this objects
// priceBand, tooltip (tip that shows when you pass your mouse cursor above something),
// ...,minimum and maximum prices

// Array of price bands: 
let priceBand = [
    {tooltip: 'up to $200', minimum: 0, maximum: 200},
    {tooltip: 'from $200 up to $500', minimum: 200, maximum: 500},
    {tooltip: '$500 or more', minimum: 500, maximum: 9999999},
];
console.log(priceBand);

// or
// Factory Function:
function createPriceBand(tooltip, min, max) {
    return {
        tooltip,
        min,
        max,
    }
}
// Array of Factory Function objects 
let priceBand2 = [
    createPriceBand('up to $300',0,300),
    createPriceBand('from $300 up to $700',300,700),
    createPriceBand('$700 or more',700,9999999)
];
console.log(priceBand2);

// Same results untill now

// or
// Constructor Function:

function PriceBand(tooltip, min, max){
    this.tooltip = tooltip,
    this.min = min,
    this.max = max
}
// Array of Constructor Function objects
let priceBand3 = [new PriceBand('up to $300',0,300),
new PriceBand ('from $300 up to $700',300,700),
new PriceBand('$700 or more',700,9999999)];

console.log(priceBand3);
