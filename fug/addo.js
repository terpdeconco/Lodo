function applyRanges(xRange, yRange) {
    // Check if both xRange and yRange are defined
    if (xRange && yRange) {
        // Apply yRange first (vertical precedence)
        applyYRange(yRange);
        applyXRange(xRange);
    } else if (yRange) {
        applyYRange(yRange);
    } else if (xRange) {
        applyXRange(xRange);
    }
}

function applyXRange(xRange) {
    // Implement logic to apply xRange
    console.log('Applying xRange:', xRange);
}

function applyYRange(yRange) {
    // Implement logic to apply yRange
    console.log('Applying yRange:', yRange);
}

// Example usage
let xRange = [0, 100];
let yRange = [0, 200];

applyRanges(xRange, yRange);
