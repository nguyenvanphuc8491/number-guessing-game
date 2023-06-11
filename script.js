'use strict';
// Tạo 1 số ngẫu nhiên từ 1-20
let correctNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let message = document.querySelector('.message');
// function test() {}
// document.querySelector('.check').addEventListener('click', test);

// lắng nghe sự kiện click trên nút Check
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  // nếu không nhập gì
  if (!guess) {
    message.textContent = 'Số Từ 1 Đến 20!';
    // nếu số nhập lớn hơn số ngẫu nhiên bí mật
  } else if (guess > correctNumber) {
    if (score >= 1) {
      message.textContent = 'Cao Rồi!😁';
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (score < 1) {
      message.textContent = 'kakaka😂Thua Rồi Bạn Ơi';
      document.querySelector('.score').textContent = 0;
    }

    // nếu số nhập nhỏ hơn số ngẫu nhiên bí mật
  } else if (guess < correctNumber) {
    if (score >= 1) {
      message.textContent = 'Thấp Quá!😜';
      score--;
      document.querySelector('.score').textContent = score;
    }
    if (score < 1) {
      message.textContent = 'Há Há Thua Rồi Nè 😂';
      document.querySelector('.score').textContent = 0;
    }
    // Nếu số nhập bằng số ngẫu nhiên bí mật
  } else if (guess === correctNumber) {
    if (score >= 1 && score > highscore) {
      message.textContent = 'Chúc Mừng👏👏 Số Bí Ẩn Đây rồi!';
      document.querySelector('.number').textContent = correctNumber;
      document.querySelector('body').style.backgroundColor = '#60b347';
      // document.querySelector('.number').style.width = '30rem';
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      // Vô hiệu hoá nút check
      document.querySelector('.check').disabled = true;
    }
  }
});
console.log(correctNumber);
// Khi bấm nút again, phục hồi trạng thái ban đầu trừ highscore
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  correctNumber = Math.trunc(Math.random() * 20) + 1;

  message.textContent = 'Bắt Đầu Đoán Số...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // Khôi phục lại nút check
  document.querySelector('.check').disabled = false;
  console.log(correctNumber);
});
