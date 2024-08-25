// Repeat All Promise Lessons


var uploadVideo1 = new Promise((resolve, reject) => {
        resolve("Video Uploaded With Success 1");
        reject("Video Rejected With Failed 1");
});

var uploadVideo2 = new Promise((resolve, reject) => {
    resolve("Video Uploaded With Success 2");
    reject("Video Rejected With Failed 2");
});

var uploadVideo3 = new Promise((resolve, reject) => {
    resolve("Video Uploaded With Success 3");
    reject("Video Rejected With Failed 3");
});


Promise.all([uploadVideo1, uploadVideo2, uploadVideo3])
.then((msg) => console.log(msg))
.catch((msg) => console.log(msg));


Promise.race([uploadVideo1, uploadVideo2, uploadVideo3])
.then((msg) => console.log(msg))
.catch((msg) => console.log(msg));









