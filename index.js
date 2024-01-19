// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    const hq = 42; 
    return Math.abs(location - hq); 
};
console.log(distanceFromHqInBlocks(33));

function distanceFromHqInFeet(location) {
    const feetPerBlock = 264; 
    const hq = 42;
    const distanceInBlocks = Math.abs(location - hq);
    const distanceInFeet = distanceInBlocks * feetPerBlock;

    return distanceInFeet;
};
console.log(distanceFromHqInFeet(33));

{
    function distanceTravelledInFeet(start,end){
        const feetPerBlock = 264;
        const distanceInBlocks = Math.abs(end-start);
        const distanceInFeet = distanceInBlocks * feetPerBlock;

        return distanceInFeet;
    };
    console.log(distanceTravelledInFeet(1,9));
}
 
    function calculateFarePrice(start,destination){
        const feetPerBlock = 264;
        const distanceInBlocks = Math.abs(destination - start);
        const distanceInFeet = distanceInBlocks * feetPerBlock;
        if (distanceInFeet <= 400){
            return 0;
        }
        else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
            return 0.02 * (distanceInFeet - 400);
        }
        else if (distanceInFeet > 2000 && distanceInFeet <= 2500){
            return 25;
        }
        else {
            return 'Rides over 2500 feet are not allowed';
        }
    }
    console.log(calculateFarePrice(12,23));
