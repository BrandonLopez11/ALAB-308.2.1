const PI = 3.1415;
const radius = 5;
const spacePerPlant = 0.8; // Minimum space required per plant

function calculateAreaForPlants(plantCount) {
    return plantCount * spacePerPlant; // Area required for the given number of plants
}

function calculateOriginalArea(radius) {
    return PI * Math.pow(radius, 2); // Area of the original garden
}

const initialPlants = 100; // Starting with 100 plants
const originalArea = calculateOriginalArea(radius); // Calculate the area of the original garden

try {
    const requiredArea = calculateAreaForPlants(initialPlants); // Area required for 100 plants

    if (requiredArea > originalArea) {
        throw new Error("Insufficient space in the garden for the plants.");
    }

    console.log(`Required area for ${initialPlants} plants: ${requiredArea.toFixed(2)} square meters`);
    console.log(`Original garden area: ${originalArea.toFixed(2)} square meters`);
} catch (error) {
    console.error("Error:", error.message);
}
