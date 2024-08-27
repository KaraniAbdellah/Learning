// Promise All And All Settled And Race
/*
    - All
        get all resolve promises
        if one rejected --> get the rejected and stop others promises
    - All Settled
        get all resolve and rejecte promises
    - Race
        get first resolve or rejecte promise
*/


const myPromise1 = new Promise((res, rej) => {
    res("I Am The First Promise");
});
const myPromise2 = new Promise((res, rej) => {
    res("I Am The Second Promise");
});
const myPromise3 = new Promise((res, rej) => {
    res("Rejected From Third Promise");
});

Promise.all([myPromise1, myPromise2, myPromise3])
.then((msgs) => {
    console.log(msgs);
});

Promise.allSettled([myPromise1, myPromise2, myPromise3])
.then((msgs) => {
    console.log(msgs);
});

Promise.race([myPromise1, myPromise2, myPromise3])
.then((msgs) => {
    console.log(msgs);
});








