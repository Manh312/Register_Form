export function renderForm() {
  const formContainer = document.createElement('div');
formContainer.className = 'bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-[500px] h-auto mx-auto';

  formContainer.innerHTML = `
    <h2 class="text-[28px] font-semibold mb-6 text-[#2C2A29] leading-none">Đăng ký</h2>
    <form class="space-y-4" id="register-form" novalidate>
      <div>
        <label class="block text-sm font-semibold mb-1 text-black">Số điện thoại</label>
        <input id="phone" type="text" placeholder="Nhập số điện thoại" class="w-full bg-gray-100 text-black p-3 rounded-md focus:outline-none">
        <p id="phone-error" class="text-red-500 text-sm mt-1 hidden">Vui lòng nhập số điện thoại hợp lệ.</p>
      </div>
      <div>
        <label class="block text-sm font-semibold mb-1 text-black">Mật khẩu</label>
        <input id="password" type="password" placeholder="Nhập mật khẩu" class="w-full bg-gray-100 text-black p-3 rounded-md focus:outline-none">
        <p id="password-error" class="text-red-500 text-sm mt-1 hidden">Mật khẩu phải có ít nhất 6 ký tự.</p>
      </div>
      <p class="text-sm text-[#4B4B4B] leading-snug">
        Với việc đăng ký tài khoản, bạn chấp nhận các 
        <span class="text-[#FFA21A] font-medium cursor-pointer">điều khoản</span> và 
        <span class="text-[#FFA21A] font-medium cursor-pointer">chính sách</span> của chúng tôi.
      </p>
      <button type="submit" class="w-full bg-[#FFA21A] hover:bg-[#e69316] text-black font-semibold py-3 rounded-md">
        Tiếp theo
      </button>
      <p class="text-center text-sm text-[#4B4B4B] mt-2">
        Bạn đã có tài khoản? 
        <a href="#" class="text-blue-600 font-medium hover:underline">Đăng nhập</a>
      </p>
    </form>
  `;

  // Thêm validation JS
  setTimeout(() => {
    const form = formContainer.querySelector('#register-form');
    const phoneInput = form.querySelector('#phone');
    const passwordInput = form.querySelector('#password');
    const phoneError = form.querySelector('#phone-error');
    const passwordError = form.querySelector('#password-error');

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate số điện thoại (Việt Nam: bắt đầu bằng 0, 10 số)
      const phone = phoneInput.value.trim();
      const phoneRegex = /^0\\d{9}$/;
      if (!phoneRegex.test(phone)) {
        phoneError.classList.remove('hidden');
        isValid = false;
      } else {
        phoneError.classList.add('hidden');
      }

      // Validate mật khẩu >= 6 ký tự
      const password = passwordInput.value.trim();
      if (password.length < 6) {
        passwordError.classList.remove('hidden');
        isValid = false;
      } else {
        passwordError.classList.add('hidden');
      }

      if (isValid) {
        // Gửi dữ liệu nếu hợp lệ
        console.log('Form is valid. Gửi dữ liệu:', { phone, password });
        // Bạn có thể thay bằng: fetch/postData(...) nếu cần gửi về server
      }
    });
  }, 0);

  return formContainer;
}
