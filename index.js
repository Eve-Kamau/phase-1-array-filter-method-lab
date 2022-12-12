// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

const findMatching = drivers.filter(driver => {
return driver === 'Bobby'
});
console.log(findMatching);

const findMatchingB = drivers.filter(driver => {
    return driver === 'Sammy'
    });
    console.log(findMatchingB);

const findMatchingC = drivers.filter(driver => {
        return driver === ['Bobby', 'bobby']
        });
        console.log(findMatchingC);