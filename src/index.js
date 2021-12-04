const messages = [
    'oscar',
    'ana',
    'jessica',
    'laura',
    'lucatoni',
    'marcela',
    'carolina',
    'paulina'
]

const randomMsg = ()=>{
    const message = messages[Math.floor(Math.random()* messages.length)];
    console.log(message);
};

module.exports = {randomMsg}