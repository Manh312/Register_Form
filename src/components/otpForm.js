import { renderSuccessForm } from "./successForm";

export function renderOTPForm() {
  const otpContainer = document.createElement('div');
  otpContainer.className = 'bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-[500px] h-auto mx-auto';

  otpContainer.innerHTML = `
    <button type="button" id="back-btn" class="text-sm text-[#3F3E3C] mb-4 flex items-center space-x-1">
      <i class="fas fa-arrow-left"></i><span>Quay lại bước trước?</span>
    </button>
    <h2 class="text-[28px] font-semibold mb-2 text-[#2C2A29]">Xác thực số điện thoại</h2>
    <p class="text-sm text-[#2C2A29] mb-4">OTP đã được gửi đến số điện thoại đã đăng ký của bạn.</p>
    
    <form class="space-y-4" id="otp-form" novalidate>
      <div>
        <label class="block text-sm font-semibold mb-1 text-black">Mã xác thực</label>
        <input id="otp-input" type="text" placeholder="Nhập mã xác thực"
          class="w-full bg-gray-100 text-black p-3 rounded-md focus:outline-none border border-transparent transition-all">
        <p id="otp-error" class="text-red-500 text-sm mt-1 hidden">OTP không đúng, vui lòng nhập lại</p>
      </div>
      <p class="text-sm float-end text-[#3F3E3C]">
        Không nhận được OTP? 
        <span id="resend-text" class="font-medium text-[#FFA21A] cursor-not-allowed select-none">Gửi lại sau: <span id="countdown">59</span> giây</span>
      </p>
      <button type="submit" class="w-full bg-[#FFA21A] hover:bg-[#e69316] text-black font-semibold py-3 rounded-md">
        Xác thực
      </button>
      <p class="text-center text-sm text-[#2C2A29] mt-2">
        Bạn đã có tài khoản? 
        <a href="#" class="text-[#1A77FF] font-semibold">Đăng nhập</a>
      </p>
    </form>
  `;

  setTimeout(() => {
    const form = otpContainer.querySelector('#otp-form');
    const otpInput = otpContainer.querySelector('#otp-input');
    const errorMsg = otpContainer.querySelector('#otp-error');
    const resendText = otpContainer.querySelector('#resend-text');
    const countdownEl = otpContainer.querySelector('#countdown');
    const backBtn = otpContainer.querySelector('#back-btn');

    let timer;
    let secondsLeft = 59;

    function startCountdown() {
      resendText.classList.remove('text-[#1A77FF]');
      resendText.classList.add('text-[#FFA21A]', 'cursor-not-allowed');
      resendText.innerHTML = `Gửi lại sau: <span id="countdown">${secondsLeft}</span> giây`;

      timer = setInterval(() => {
        secondsLeft--;
        const newCountdown = otpContainer.querySelector('#countdown');
        if (newCountdown) newCountdown.textContent = secondsLeft;

        if (secondsLeft <= 0) {
          clearInterval(timer);
          resendText.textContent = 'Gửi lại OTP';
          resendText.classList.remove('text-[#FFA21A]', 'cursor-not-allowed');
          resendText.classList.add('text-[#1A77FF]', 'cursor-pointer');
        }
      }, 1000);
    }

    // Bắt đầu countdown ban đầu
    startCountdown();

    // Xử lý gửi lại
    resendText.addEventListener('click', () => {
      if (resendText.classList.contains('cursor-pointer')) {
        console.log('🔁 Đã gửi lại OTP!');
        secondsLeft = 59;
        startCountdown();
      }
    });

    // Submit form
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const otp = otpInput.value.trim();
      const isValidOTP = /^\d{6}$/.test(otp);

      if (!isValidOTP) {
        otpInput.classList.add('border-red-500');
        otpInput.classList.remove('border-transparent');
        errorMsg.classList.remove('hidden');
      } else {
        otpInput.classList.remove('border-red-500');
        otpInput.classList.add('border-transparent');
        errorMsg.classList.add('hidden');
        console.log('✅ OTP hợp lệ:', otp);
        // Chuyển hướng sang successForm
        const contentWrapper = document.querySelector('#form-content');
        if (contentWrapper) {
          contentWrapper.innerHTML = ''; // Xóa form cũ
          contentWrapper.appendChild(renderSuccessForm()); // Thêm successForm
        }
      }
    });

    // Quay lại bước trước
    backBtn.addEventListener('click', () => {
      window.history.back();
    });
  }, 0);

  return otpContainer;
}