for (let i = 0; i<=100; i++)
    if (i % 3 === 0) {
        console.log('Marco!');
    } else if (i % 5 === 0) {
        console.log('Polo!');
    } else if (i % 3 === 0 && i % 5 === 0) {
        console.log('Marco Polo!');
    } else {
        console.log('The number is not part of the game.');
    }
