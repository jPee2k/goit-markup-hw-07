(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    focusInput: document.querySelector('[data-focus]'),
    form: document.querySelector('[data-form]'),
  };

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    if (!refs.modal.classList.contains('is-hidden')) {
      refs.focusInput?.focus();
    } else {
      refs.form?.reset();
    }
  }

  function closeModal(evt) {
    if (evt.key === 'Escape' || evt.target.getAttribute('data-modal') === '') {
      refs.modal.classList.add('is-hidden');
    }
  }

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', closeModal);
  document.addEventListener('keyup', closeModal);
})();
