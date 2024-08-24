

// Example 1
var uploadVideo = new Promise((resolveFun, rejecteFun) => {

    // do some operations ...
    let completed = true;
    if (completed) {
        resolveFun("Successfully Uploaded.");
    } else rejecteFun("Sorry, Failed!!!");

});

uploadVideo.then((msg) => {
    ;console.log(`then Called ==> ${msg}`)
}).catch((msg) => {
    console.log(`catch Called ==> ${msg}`);
});


// Example 2 --> More Then One Video Uploaded
var uploadVideo1 = new Promise((resolveFun, rejecteFun) => {
    resolveFun("Uploaded, Video 1");
    // rejecteFun("Failed, Video 1");
});
var uploadVideo2 = new Promise((resolveFun, rejecteFun) => {
    resolveFun("Uploaded, Video 2");
    rejecteFun("Failed, Video 2");
});
var uploadVideo3 = new Promise((resolveFun, rejecteFun) => {
    // resolveFun("Uploaded, Video 3");
    rejecteFun("Failed, Video 3");
});


// We Print all Successed Operations
Promise.all([uploadVideo1, uploadVideo2, uploadVideo3]).then((msgs) => {
    console.log(msgs); // ['Uploaded, Video 1', 'Uploaded, Video 2', 'Uploaded, Video 3']
}).catch((msgs) => { 
    // in the first error --> he print an error
    // stop all operations
    console.log(msgs); // Failed, Video 3
})


// We Print Just One Sucessed Operations
Promise.race([uploadVideo1, uploadVideo2, uploadVideo3]).then((msgs) => {
    console.log(msgs);
}).catch((msgs) => {
    console.log(msgs); // Upload Video 1
})




