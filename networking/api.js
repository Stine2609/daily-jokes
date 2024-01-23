// HTTP fetch example
fetch('http://localhost:3000')
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

