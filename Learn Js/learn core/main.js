

async function getData() {
    console.log("before");
    try {
        let myPromise = fetch("https://api.github.com/users/KaraniAbdellah");
        await myPromise.then((result) => {
            let Data = result.json();
            return Data;
        }).then((Data) => {
            console.log(Data);
        });
    } catch(error) {
        console.log(error);
    } finally {
        
    }
    console.log("after");
}

getData();





