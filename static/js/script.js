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

    kataklar[randomNum - 1].style.backgroundColor = 'blue';
    kataklar[randomNum].style.backgroundColor = 'blue';

    uy_list.push([randomNum - 1, randomNum]);
}

for(let i=0;i<4;i++){
    let randomNum;
    do {
        randomNum = Math.floor(Math.random() * 1500) + 1;

    } while (invalidNumbers.includes(randomNum) || usedNumbers.includes(randomNum)); 
    
    kataklar[randomNum].style.backgroundImage = "url('images/image.png')";

}

for (let i = 0; i < totalDivs; i++) {
    const div = document.createElement('div');
    konteyner.appendChild(div);
    kataklar.push(div);

    const tooltip = document.createElement('div');
    tooltip.classList.add('tooltip');
    tooltip.textContent = `Cell ${i + 1}`; 
    div.appendChild(tooltip);
    div.addEventListener('mouseover', function() {
        tooltip.style.display = 'block'; 
    });
    div.addEventListener('mouseout', function() {
        tooltip.style.display = 'none';
    });
}


console.log(uy_list);