import { renderHeader } from './components/header.js';
import { renderForm } from './components/form.js';
import { renderFooter } from './components/footer.js';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  // Header
  document.body.appendChild(renderHeader());

  // Main background
  const main = document.createElement('main');
  main.className = 'flex-1 bg-no-repeat bg-cover bg-center relative min-h-screen';
  main.style.backgroundImage = `url('/src/assets/background_image.jpg')`;

  // Overlay màu vàng
  const overlay = document.createElement('div');
  overlay.className = 'absolute inset-0 bg-[#FFC900] opacity-70 z-0';
  main.appendChild(overlay);

  // Container động (để thay đổi form)
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'absolute inset-0 flex justify-center items-center z-10';
  contentWrapper.id = 'form-content'; // <-- Cho phép thay đổi form sau này
  contentWrapper.appendChild(renderForm()); // Render form đăng ký lúc đầu
  main.appendChild(contentWrapper);

  // Gắn main vào body
  document.body.appendChild(main);

  // Footer
  document.body.appendChild(renderFooter());
});
