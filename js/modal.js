const modalApp = () => {
  const refs = {
    body: document.querySelector('body'),
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    focusInput: document.querySelector('[data-focus]'),
    form: document.querySelector('[data-form]'),
  };

  const closeModal = () => {
    refs.modal.classList.add('is-hidden');
    refs.form?.reset();
    refs.body.style.overflowY = 'auto';
  };

  const toggleModal = () => {
    refs.modal.classList.toggle('is-hidden');
    if (!refs.modal.classList.contains('is-hidden')) {
      refs.focusInput?.focus();
      refs.body.style.overflowY = 'hidden';
    } else {
      closeModal();
    }
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', (evt) => {
    if (evt.target.getAttribute('data-modal') === '') {
      closeModal();
    }
  });
  document.addEventListener('keyup', (evt) => {
    if (evt.key === 'Escape') {
      closeModal();
    }
  });
};

modalApp();
