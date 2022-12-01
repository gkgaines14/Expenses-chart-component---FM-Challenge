//Import json data
import data from './data.json' assert {type:'json'};
console.log(data)
console.log(typeof data)

console.log(data[0]['amount'])

var root = document.querySelector(':root')
var rootStyles = getComputedStyle(root)

// UI element varables
let monBar = document.querySelector('#mon-bar');
let tueBar = document.querySelector('#tue-bar');
let wedBar = document.querySelector('#wed-bar');
let thuBar = document.querySelector('#thu-bar');
let friBar = document.querySelector('#fri-bar');
let satBar = document.querySelector('#sat-bar');
let sunBar = document.querySelector('#sun-bar');

let monAmt = document.querySelector('#mon-amt');
let tueAmt = document.querySelector('#tue-amt');
let wedAmt = document.querySelector('#wed-amt');
let thuAmt = document.querySelector('#thu-amt');
let friAmt = document.querySelector('#fri-amt');
let satAmt = document.querySelector('#sat-amt');
let sunAmt = document.querySelector('#sun-amt');

//Set bar values
monAmt.innerHTML = '$'+data[0]['amount']
tueAmt.innerHTML = '$'+data[1]['amount']
wedAmt.innerHTML = '$'+data[2]['amount']
thuAmt.innerHTML = '$'+data[3]['amount']
friAmt.innerHTML = '$'+data[4]['amount']
satAmt.innerHTML = '$'+data[5]['amount']
sunAmt.innerHTML = '$'+data[6]['amount']

//Set bar lengths
let max = findMax()
function findMax(){
    let arr = data.slice()
    arr.sort((a,b)=>b['amount']-a['amount'])
    return arr[0]['amount']
}

console.log(max)
console.log(data)

console.log(data[0]['amount']/max)

root.style.setProperty('--mon-size',((data[0]['amount']/max)*150)+'px')
root.style.setProperty('--tue-size',((data[1]['amount']/max)*150)+'px')
root.style.setProperty('--wed-size',((data[2]['amount']/max)*150)+'px')
root.style.setProperty('--thu-size',((data[3]['amount']/max)*150)+'px')
root.style.setProperty('--fri-size',((data[4]['amount']/max)*150)+'px')
root.style.setProperty('--sat-size',((data[5]['amount']/max)*150)+'px')
root.style.setProperty('--sun-size',((data[6]['amount']/max)*150)+'px')






// set cyan bar for today
switch (new Date().getDay()){
    case 1: monBar.style.setProperty('background-color','var(--cyan)');
    break;
    case 2: 
    tueBar.style.setProperty('background-color','var(--cyan)');
    break;
    case 3: wedBar.style.setProperty('background-color','var(--cyan)');
    break;
    case 4: thuBar.style.setProperty('background-color','var(--cyan)');
    break;
    case 5: friBar.style.setProperty('background-color','var(--cyan)');
    break;
    case 6: satBar.style.setProperty('background-color','var(--cyan)');
    break;
    default: sunBar.style.setProperty('background-color','var(--cyan)');
}

// display amt box on hover
monBar.addEventListener('mouseover',()=>monAmt.style.setProperty('visibility','visible'))
monBar.addEventListener('mouseout',()=>monAmt.style.setProperty('visibility','hidden'))

tueBar.addEventListener('mouseover',()=>tueAmt.style.setProperty('visibility','visible'))
tueBar.addEventListener('mouseout',()=>tueAmt.style.setProperty('visibility','hidden'))

wedBar.addEventListener('mouseover',()=>wedAmt.style.setProperty('visibility','visible'))
wedBar.addEventListener('mouseout',()=>wedAmt.style.setProperty('visibility','hidden'))

thuBar.addEventListener('mouseover',()=>thuAmt.style.setProperty('visibility','visible'))
thuBar.addEventListener('mouseout',()=>thuAmt.style.setProperty('visibility','hidden'))

friBar.addEventListener('mouseover',()=>friAmt.style.setProperty('visibility','visible'))
friBar.addEventListener('mouseout',()=>friAmt.style.setProperty('visibility','hidden'))

satBar.addEventListener('mouseover',()=>satAmt.style.setProperty('visibility','visible'))
satBar.addEventListener('mouseout',()=>satAmt.style.setProperty('visibility','hidden'))

sunBar.addEventListener('mouseover',()=>sunAmt.style.setProperty('visibility','visible'))
sunBar.addEventListener('mouseout',()=>sunAmt.style.setProperty('visibility','hidden'))


