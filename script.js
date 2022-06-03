let plus = document.querySelector(".plus");
let minus = document.querySelector(".minus");
let rand_num = document.querySelector(".number_random");
let count2 = document.querySelector(".number");
let random = document.querySelector('.random')
let number = 1;
let ans = document.querySelector('.ans')


plus.onclick = () => {
    if (number <= 100) {
        number++;
        rand_num.innerHTML = number;

    }
};

minus.onclick = () => {
   if (number >= 1) {
       number--;
       rand_num.innerHTML = number;
    }
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
random.onclick = () => {
    document.querySelector('.ans').innerHTML = getRndInteger(0,50)
}