// operațiune asincronă de lungă durată
function delay(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

// metodă asincronă, remarcăm keyword-ul async
async function exampleAsyncFunction() {
    console.log("Start");

    // folosind keyword-ul await, se va aștepta finalizarea 
    //  executării metodei asincrone înainte de a trece mai departe
    await delay(2000);

    // linie de cod ce va fi executată similar cu modelul sincron
    console.log("After 2 seconds");
}

exampleAsyncFunction();