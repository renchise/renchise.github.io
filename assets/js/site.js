
(function () {
  const modal = document.createElement('div');
  modal.className = 'modal';
  modal.innerHTML = `
    <div class="modal-inner" role="dialog" aria-modal="true" aria-label="Image preview">
      <div class="modal-head">
        <strong id="modalTitle">Preview</strong>
        <button type="button" class="modal-close" aria-label="Close preview">Close</button>
      </div>
      <div class="modal-image"><img alt="Preview" id="modalImg"></div>
    </div>`;
  document.addEventListener('DOMContentLoaded', () => {
    document.body.appendChild(modal);
    const img = modal.querySelector('#modalImg');
    const title = modal.querySelector('#modalTitle');
    const closeBtn = modal.querySelector('.modal-close');
    const close = () => modal.classList.remove('open');
    closeBtn.addEventListener('click', close);
    modal.addEventListener('click', (e) => { if (e.target === modal) close(); });
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
    document.querySelectorAll('[data-zoomable]').forEach((el) => {
      el.addEventListener('click', () => {
        const src = el.getAttribute('data-full') || el.src;
        const label = el.getAttribute('data-label') || el.alt || 'Preview';
        img.src = src;
        img.alt = label;
        title.textContent = label;
        modal.classList.add('open');
      });
    });
  });
})();
