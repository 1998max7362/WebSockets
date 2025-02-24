const websocket = new WebSocket('wss://socketsbay.com/wss/v2/1/demo/');

const app = document.querySelector('.app');
const input = document.querySelector('.input');
const submit = document.querySelector('.submit');

const addMessage = (text, color) => {
    const p = document.createElement('p');
    p.innerText = text;
    p.style.color = color;
    app.appendChild(p)
}

websocket.onopen = function(){
    console.log('websocket is connecting...');
}

websocket.onmessage = function({type, data}){
    if(type === 'message') addMessage(data,'red')
}

submit.addEventListener('click',(e) => {
    e.preventDefault();

    for (let step = 0; step < 5; step++) {
        const value = input.value;
        addMessage(value,'blue');
        websocket.send(value);
    }
})