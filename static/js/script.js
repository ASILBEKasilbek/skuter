
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
}

for(let i=0;i<jetData.length;i++){
    let randomNum;
    do {
        randomNum = Math.floor(Math.random() * 1500) + 1;

    } while (invalidNumbers.includes(randomNum) || usedNumbers.includes(randomNum)); 
    kataklar[randomNum].style.backgroundImage = "url('/static/images/scooter_icon.png')";
    kataklar[randomNum].style.backgroundSize = "cover"; // yoki "cover"
    kataklar[randomNum].style.backgroundRepeat = "no-repeat";
    kataklar[randomNum].style.backgroundPosition = "center";
}

console.log(jetData);

console.log(uy_list); 