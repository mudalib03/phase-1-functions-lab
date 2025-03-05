// Code your solution in this file!
const blockNumber = 50
function distanceFromHqInBlocks(blockNumber) {
    if (blockNumber > 42) {
        return blockNumber - 42;
    } else {
        return 42 - blockNumber;
    }
}

distanceFromHqInBlocks()

function distanceFromHqInFeet(blockNumber) {
    return distanceFromHqInBlocks(blockNumber) * 264;
}

distanceFromHqInFeet()

function distanceTravelledInFeet(start , end) {
    if (start > end) {
        return (start - end) * 264;
        
    } else if (end > start) {
        return (end - start) * 264;
    }
    
}

function calculatesFarePrice(start , end) {
    const distance = distanceTravelledInFeet(start , end);
    if (distance <= 400) {
        return 0;
    } else if (distance < 2000 && distance > 400) {
        return (distance - 400) * 0.02;
    } else if ( distance >= 2000 && distance < 2500) {
        return 25;
    } else if (distance > 2500){
        return "cannot travel that far";
        
    }

}

