const entryField = document.querySelector('.input_text');
const btn = document.querySelector('button');
const dragString = document.querySelector('.new_string');
const storage = window.localStorage;


btn.onclick = addString;

let coordX;
let coordY;

function addString () {
    let str = entryField.value;
       
    for (let i = 0; i < str.length; i++) {
        let span = document.createElement('span');
        span.className = 'new_letter';
        span.id = i;
        span.addEventListener ('dragstart', (evt) => {
            evt.dataTransfer.setData('text/html', 'dragstart');
            coordX = evt.offsetX;
            coordY = evt.offsetY;
        });

        span.addEventListener ('dragend', (evt) => {
            span.style.position = 'absolute';
            span.style.top = (evt.pageY - coordY) + "px";
            span.style.left = (evt.pageX - coordX) + "px";
    
            console.log('dragend')
        });
        span.draggable = 'true';
        dragString.append(span);
        span.innerHTML = str[i];  
        
    }
}


