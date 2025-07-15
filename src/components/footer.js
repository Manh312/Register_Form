export function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'bg-gray-100 p-4 text-center font-semibold';
  footer.innerHTML = `
    <p>© 2024 comacPro, Ltd. All Rights Reserved</p>
  `;
  return footer;
}