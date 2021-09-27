const HOURHAND = document.querySelector('.hand.hour');
const MINHAND = document.querySelector('.hand.minute');
const SECHAND = document.querySelector('.hand.second');

function apnaTimeAega() {
  let apnaTime = new Date();
  minute = apnaTime.getMinutes();
  second = apnaTime.getSeconds();
  hour = apnaTime.getHours();
  console.clear();
  console.log(hour + ':' + minute + ':' + second);

  let secPosition = (second * 360) / 60;
  let minPosition = (minute * 360) / 60 + (second * 360) / 60 / 60;
  let hourPosition = (hour * 360) / 12 + (minute * 360) / 60 / 12;

  HOURHAND.style.transform = 'rotate(' + hourPosition + 'deg)';
  MINHAND.style.transform = 'rotate(' + minPosition + 'deg)';
  SECHAND.style.transform = 'rotate(' + secPosition + 'deg)';
}

setInterval(apnaTimeAega, 1000);
