const getData = new Promise((resolve, reject) => {
    setTimeout(() => {
        const result = { data : { name: 'Asitha' }};
        const error = new Error('Something went wrong')
        reject(error)
    }, 4000);
});

getData.then(result => {
        console.log(result);
    }
).catch(error => {
    console.log(error);
})
