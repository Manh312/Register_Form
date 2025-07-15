import { renderHeader } from './components/header.js';
import { renderForm } from './components/form.js';
import { renderFooter } from './components/footer.js';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(renderHeader());

  // Tạo main
  const main = document.createElement('main');
  main.className = 'flex-1 bg-no-repeat bg-cover bg-center relative h-screen';
  main.style.backgroundImage = `url('/src/assets/background_image.jpg')`;

  // Lớp phủ màu vàng
  const overlay = document.createElement('div');
  overlay.className = 'absolute inset-0 bg-[#FFC900] opacity-70 z-0';
  main.appendChild(overlay);

  // Tạo container bọc form để căn giữa
  const formWrapper = document.createElement('div');
  formWrapper.className = 'absolute inset-0 flex justify-center items-center z-10';
  formWrapper.appendChild(renderForm());

  main.appendChild(formWrapper);
  document.body.appendChild(main);
  document.body.appendChild(renderFooter());
});
