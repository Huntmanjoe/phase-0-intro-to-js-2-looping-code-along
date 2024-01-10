function writeCards(namesArray, eventName) {
    const thankYouMessages = [];

    for (let i = 0; i < namesArray.length; i++) {
        const message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;

        thankYouMessages.push(message);
    }
    return thankYouMessages;
}
const names = ["Hunter", "Shane", "Jesee"];
const event = 'Birthday';
const messages = writeCards(names, event);
console.log(messages);

function countDown() {
    let nim = 10
    while (nim >= 0) {
        console.log(nim--)
    }
}

console.log(hi);