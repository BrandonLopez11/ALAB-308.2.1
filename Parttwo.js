const PI = 3.1415;
const spacePerPlant = 0.8; // Minimum space required per plant

function predictGrowth(initialPlants, weeks) {
    return initialPlants * Math.pow(2, weeks); // Plants double each week
}

function calculateAreaForPlants(plantCount) {
    return plantCount * spacePerPlant; // Area required for the given number of plants
}

function calculateNewRadius(area) {
    return Math.sqrt(area / PI); // Calculate the radius from the area
}

// Starting with 100 plants for 10 weeks
const initialPlants = 100;
const weeks = 10;

const plantsAfterWeeks = predictGrowth(initialPlants, weeks);
const requiredArea = calculateAreaForPlants(plantsAfterWeeks);
const newRadius = calculateNewRadius(requiredArea);

// Calculate additional space needed based on the original maximum capacity
const originalArea = PI * Math.pow(5, 2); // Area of the original garden
const additionalSpaceNeeded = requiredArea - originalArea;

console.log(`Plants after ${weeks} weeks: ${plantsAfterWeeks}`);
console.log(`Required area for these plants: ${requiredArea.toFixed(2)} square meters`);
console.log(`New garden radius: ${newRadius.toFixed(2)} meters`);
console.log(`Additional space needed: ${additionalSpaceNeeded.toFixed(2)} square meters`);
