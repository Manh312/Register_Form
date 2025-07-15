export function renderHeader() {
  const header = document.createElement('header');
  header.className = 'bg-white w-full shadow px-4';

  header.innerHTML = `
    <div class="w-full max-w-[1280px] mx-auto flex items-center justify-start py-4 px-4">
      <!-- Logo -->
      <img src="/src/assets/icon.jpg" alt="ComacPro Logo" class="h-[34px] w-auto">

      <!-- Hamburger button (ẩn trên desktop) -->
      <button id="menu-toggle" class="md:hidden ml-auto text-black focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <!-- Menu ngang (hiển thị từ md trở lên) -->
      <nav id="nav-menu" class="hidden md:flex ml-6 space-x-6 text-base text-black font-semibold">
        <a href="#" class="hover:text-gray-600">Cho thuê</a>
        <a href="#" class="hover:text-gray-600">Bán</a>
        <a href="#" class="hover:text-gray-600">Danh mục</a>
        <a href="#" class="hover:text-gray-600">Blogs</a>
        <a href="#" class="hover:text-gray-600">FAQ</a>
        <a href="#" class="hover:text-gray-600">Về chúng tôi</a>
      </nav>
    </div>

    <!-- Menu mobile -->
    <div id="mobile-menu" class="md:hidden hidden px-4 pb-4 space-y-2 text-base text-black font-semibold">
      <a href="#" class="block hover:text-gray-600">Cho thuê</a>
      <a href="#" class="block hover:text-gray-600">Bán</a>
      <a href="#" class="block hover:text-gray-600">Danh mục</a>
      <a href="#" class="block hover:text-gray-600">Blogs</a>
      <a href="#" class="block hover:text-gray-600">FAQ</a>
      <a href="#" class="block hover:text-gray-600">Về chúng tôi</a>
    </div>
  `;

  // Toggle dropdown menu on mobile
  setTimeout(() => {
    const toggle = header.querySelector('#menu-toggle');
    const mobileMenu = header.querySelector('#mobile-menu');
    toggle?.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }, 0);

  return header;
}
