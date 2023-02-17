for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}
const myGifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}

console.log(wrapGifts(myGifts))


function writeCards(names, event) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        messages.push(message)
    }
        return messages;
}
function countDown (startingNumber) {
    while (startingNumber >= 0){
        console.log(startingNumber);
        startingNumber = startingNumber - 1;
    }
    
}
