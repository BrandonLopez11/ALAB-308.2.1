const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius; // Area of the garden
const spacePerPlant = 0.8; // Minimum space required per plant
const maxPlants = Math.floor(area / spacePerPlant); // Maximum plants in the garden
let initialPlants = 20; // Starting number of plants

function predictGrowth(weeks) {
    let plants = initialPlants * Math.pow(2, weeks); // Plants double each week
    return plants;
}

function assessGrowth(weeks) {
    const plantsAfterWeeks = predictGrowth(weeks);
    
    if (plantsAfterWeeks > 0.8 * maxPlants) {
        return "Prune the plants to prevent overcrowding.";
    } else if (plantsAfterWeeks >= 0.5 * maxPlants) {
        return "Monitor the growth of the plants.";
    } else {
        return "You can plant more plants.";
    }
}

// Test for weeks 1, 2, and 3
for (let i = 1; i <= 3; i++) {
    console.log(`Week ${i}: ${assessGrowth(i)}`);
}

 