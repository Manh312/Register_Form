export function renderSuccessForm() {
  const successContainer = document.createElement('div');
  successContainer.className = 'bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-[500px] mx-auto text-center'; // Added text-center for centering content

  successContainer.innerHTML = `
    <div class="mb-6 flex justify-center">
      <img src="./src/assets/emoji.jpg" alt="Success Icon" class="w-32 h-32 object-contain"> </div>
    <h2 class="text-[28px] font-semibold mb-4 text-[#2C2A29]">Đăng ký thành công</h2>
    <p class="text-sm text-[#2C2A29] mb-6">Cảm ơn bạn đã đăng ký tài khoản.</p>
    <p class="text-sm text-[#2C2A29] mb-8">Để có thể đăng bài mua bán, chúng tôi cần xác thực tài khoản của bạn, vui lòng bổ sung thông tin.</p>
    
    <div class="space-y-4">
      <button type="button" class="w-full bg-[#FFA21A] hover:bg-[#cc8215] text-[#121110] font-semibold py-3 rounded-md transition-colors duration-200">
        Bổ sung thông tin
      </button>
      <button type="button" class="w-full font-semibold text-[#1A77FF] py-3 rounded-md hover:bg-gray-100 transition-colors duration-200">
        Bỏ qua
      </button>
    </div>
  `;

  return successContainer;
}