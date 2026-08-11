// Appends "😘 i hate you ×N" each time the user clicks anywhere.
const container = document.createElement('div');
container.id = 'messages';
document.body.appendChild(container);

let count = 0;

document.addEventListener('click', (e) => {
  count++;
  const el = document.createElement('div');
  el.className = 'msg';
  el.textContent = `😘 i hate you ×${count}`;
  container.appendChild(el);

  // trigger CSS transition
  void el.offsetWidth;
  el.classList.add('show');

  // keep the list from growing forever
  if (container.children.length > 60) {
    container.removeChild(container.firstChild);
  }
});
