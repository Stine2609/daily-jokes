return;
// HTTP fetch example
fetch('http://ip.jsontest.com/')
    .then((response) => response.json())
    .then((responseData) => {
        console.log('response object:', responseData)

    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log("Fetch complete");
    });

