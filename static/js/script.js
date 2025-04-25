
const konteyner = document.getElementById('konteyner');

const totalDivs = 50 * 30;

for (let i = 0; i < totalDivs; i++) {
    const div = document.createElement('div');
    konteyner.appendChild(div);
}

const kataklar = document.querySelectorAll('.konteyner div');
let uy_list = [];
const invalidNumbers = [];

for (let i = 1; i <= 1500; i++) {
    if (i % 50 === 0) {
        invalidNumbers.push(i);
    }
}
// document.addEventListener('keydown', function(event) {
//     if (event.key === 'a' || event.key === 'A') {
//         moveBox1();
        
//     }
//     if(event.key === 'd' || event.key === 'D') {
//         moveBox();
//     }
// });
// function moveBox() {

//     let katak = kataklar[jetlar[0]+1];
//     let katak1 = kataklar[jetlar[0]];
//     const bg = window.getComputedStyle(katak).backgroundImage;
//     if (bg.includes('/static/images/home.png')) {
//         console.log(43);
//         return;
//     }
//     else{
//         katak1.style.backgroundColor="rgb(141, 66, 66)";
//         katak1.style.backgroundImage='';
//     }
//     katak1.style.backgroundSize = "cover";
//     katak1.style.backgroundRepeat = "no-repeat";
//     katak1.style.backgroundPosition = "center";

//     jetlar[0]=jetlar[0]+1;
//     katak.style.transform="scaleX(1)";
//     katak.style.backgroundImage = "url('/static/images/scooter_icon.png')";
//     katak.style.backgroundSize = "cover";
//     katak.style.backgroundRepeat = "no-repeat";
//     katak.style.backgroundPosition = "center";

// }

// function moveBox1() {

//     let katak = kataklar[jetlar[0]-1];
//     let katak1 = kataklar[jetlar[0]];
//     const bg = window.getComputedStyle(katak).backgroundImage;
//     if (bg.includes('/static/images/home.png')) {
//         return;
//     }    
//     else{
//         katak1.style.backgroundColor="rgb(141, 66, 66)";
//         katak1.style.backgroundImage='';
//     }

//     katak1.style.backgroundSize = "cover";
//     katak1.style.backgroundRepeat = "no-repeat";
//     katak1.style.backgroundPosition = "center";

//     jetlar[0]=jetlar[0]-1;
//     katak.style.transform="scaleX(-1)";
//     katak.style.backgroundImage = "url('/static/images/scooter_icon.png')";
//     katak.style.backgroundSize = "cover";
//     katak.style.backgroundRepeat = "no-repeat";
//     katak.style.backgroundPosition = "center";

// }
// Assume there's a single element with id="katak"




let positionX = 0; 
const step = 1; 
let positionY = 0;
document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'A') {
        moveBoxLeft();
    }
    if (event.key === 'd' || event.key === 'D') {
        moveBoxRight();
    }
    if (event.key === 'w' || event.key === 'W') {
        moveBoxDown();
    }
    if (event.key === 's' || event.key === 'S') {
        moveBoxUp();
    }
});

function moveBoxRight() {
    // Check if the current position has a "home" background (optional boundary logic)
    let katak = kataklar[jetlar[0]];
    const bg = window.getComputedStyle(katak).backgroundImage;
    if (bg.includes('/static/images/home.png')) {
        console.log('Cannot move into home');
        return;
    }

    // Reset previous position's styles
    katak.style.backgroundColor = 'transparent';
    katak.style.backgroundImage = '';

    positionX += step;
    katak.style.transform = `translateX(${positionX}px) scaleX(1)`; // Move right, face right
    katak.style.backgroundImage = "url('/static/images/scooter_icon.png')";
    katak.style.backgroundSize = 'cover';
    katak.style.backgroundRepeat = 'no-repeat';
    katak.style.backgroundPosition = 'center';
}
function moveBoxDown(){
    let katak = kataklar[jetlar[0]];
    const bg = window.getComputedStyle(katak).backgroundImage;
    if (bg.includes('/static/images/home.png')) {
        console.log('Cannot move into home');
        return;
    }
    katak.style.backgroundColor = 'transparent';
    katak.style.backgroundImage = '';

    positionY -= step;
    katak.style.transform = `translateY(${positionY}px) `; // Move left, face left
    katak.style.backgroundImage = "url('/static/images/scooter_icon.png')";
    katak.style.backgroundSize = 'cover';
    katak.style.backgroundRepeat = 'no-repeat';
    katak.style.backgroundPosition = 'center';
}
function moveBoxUp(){
    let katak = kataklar[jetlar[0]];
    const bg = window.getComputedStyle(katak).backgroundImage;
    if (bg.includes('/static/images/home.png')) {
        console.log('Cannot move into home');
        return;
    }
    katak.style.backgroundColor = 'transparent';
    katak.style.backgroundImage = '';

    positionY += step;
    katak.style.transform = `translateY(${positionY}px)`; // Move left, face left
    katak.style.backgroundImage = "url('/static/images/scooter_icon.png')";
    katak.style.backgroundSize = 'cover';
    katak.style.backgroundRepeat = 'no-repeat';
    katak.style.backgroundPosition = 'center';
}
function moveBoxLeft() {
    let katak = kataklar[jetlar[0]];
    const bg = window.getComputedStyle(katak).backgroundImage;
    if (bg.includes('/static/images/home.png')) {
        console.log('Cannot move into home');
        return;
    }

    katak.style.backgroundColor = 'transparent';
    katak.style.backgroundImage = '';

    positionX -= step;
    katak.style.transform = `translateX(${positionX}px) scaleX(-1)`; // Move left, face left
    katak.style.backgroundImage = "url('/static/images/scooter_icon.png')";
    katak.style.backgroundSize = 'cover';
    katak.style.backgroundRepeat = 'no-repeat';
    katak.style.backgroundPosition = 'center';
}

let usedNumbers = [];
let randomuy=Math.floor(Math.random()*100)+1;
for (let i = 0; i < randomuy; i++) {
    let randomNum;

    do {
        randomNum = Math.floor(Math.random() * 1500) + 1; 
    } while (invalidNumbers.includes(randomNum) || usedNumbers.includes(randomNum)); 
    usedNumbers.push(randomNum);
    kataklar[randomNum].style.backgroundImage = "url('/static/images/home.png')";
    kataklar[randomNum].style.backgroundSize = "cover"; 
    kataklar[randomNum].style.backgroundRepeat = "no-repeat";
    kataklar[randomNum].style.backgroundPosition = "center";
    kataklar[randomNum-1].style.backgroundImage = "url('/static/images/home.png')";
    kataklar[randomNum-1].style.backgroundSize = "cover";
    kataklar[randomNum-1].style.backgroundRepeat = "no-repeat";
    kataklar[randomNum-1].style.backgroundPosition = "center";
    uy_list.push([randomNum - 1, randomNum]);
    let katak1=kataklar[randomNum-1];

    katak1.addEventListener('mouseover', () => {
        const infoBox1 = document.getElementById("info-uy");
        const rect1 = katak1.getBoundingClientRect();
        infoBox1.style.left = `${rect1.left + 10}px`; 
        infoBox1.style.top = `${rect1.top + 30}px`;  
        infoBox1.classList.remove("hidden");
    });

    katak1.addEventListener('mouseout', () => {
        document.getElementById("info-uy").classList.add("hidden");
    });

    let katak2=kataklar[randomNum];

    katak2.addEventListener('mouseover', () =>{
        const a1=document.getElementById("info-uy");
        const rect2 = katak2.getBoundingClientRect();
        a1.style.left = `${rect2.left + 10}px`; 
        a1.style.top - `${rect2.top + 30}px`; 
        a1.classList.remove("hidden");
    })

    katak2.addEventListener('mouseout', () => {
        document.getElementById("info-uy").classList.add("hidden");
    });
}
let jetlar = [];
for (let i = 0; i < jetData.length; i++) {
    let randomNum;
    do {
        randomNum = Math.floor(Math.random() * 1500) + 1;
    } while (invalidNumbers.includes(randomNum) || usedNumbers.includes(randomNum)); 

    let katak = kataklar[randomNum];
    katak.style.backgroundImage = "url('/static/images/scooter_icon.png')";
    katak.style.backgroundSize = "cover";
    katak.style.backgroundRepeat = "no-repeat";
    katak.style.backgroundPosition = "center";
    jetlar.push(randomNum);

    katak.addEventListener('mouseover', () => {
        const infoBox = document.getElementById("info-box");
        const jetInfo = jetData[i];
        document.getElementById("info-title").innerText = jetInfo.title;
        document.getElementById("info-image").src = jetInfo.image;
        document.getElementById("info-description").innerText = jetInfo.decription;
        const rect = katak.getBoundingClientRect();
        infoBox.style.left = `${rect.left + 10}px`; 
        infoBox.style.top = `${rect.top + 30}px`;  
        infoBox.classList.remove("hidden");
    });
    katak.addEventListener('mouseout', () => {
        document.getElementById("info-box").classList.add("hidden");
    });
    katak.addEventListener('click', () => {
        const jetInfo = jetData[i];
        document.getElementById("info-title2").innerText = jetInfo.title;
        document.getElementById("info-image2").src = jetInfo.image;
        document.getElementById("info-description2").innerText = jetInfo.decription;

    })
}

console.log(jetlar);
console.log(jetData);
console.log(uy_list); 