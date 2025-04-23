
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
        document.getElementById("info-description").innerText = jetInfo.description;
    
        const rect = katak.getBoundingClientRect();
    
        infoBox.style.left = `${rect.left + 10}px`; // kichik surish
        infoBox.style.top = `${rect.top + 10}px`;   // kichik surish
        infoBox.classList.remove("hidden");
    });
    

    katak.addEventListener('mouseout', () => {
        document.getElementById("info-box").classList.add("hidden");
    });
}

console.log(jetData);
console.log(uy_list); 