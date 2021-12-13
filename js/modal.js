const modalApp = () => {
  const refs = {
    body: document.querySelector('body'),
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    focusInput: document.querySelector('[data-focus]'),
    form: document.querySelector('[data-form]'),
  };

  const isOpened = () => !refs.modal.classList.contains('is-hidden');
  const isLessThan = (width = 480) => refs.body.clientWidth < width;
  const closeModal = () => {
    refs.modal.classList.add('is-hidden');
    refs.body.style.overflowY = 'auto';
    refs.form?.reset();
  };

  const toggleModal = () => {
    refs.modal.classList.toggle('is-hidden');

    if (isOpened()) {
      refs.focusInput?.focus();
    } else {
      closeModal();
    }

    if (isOpened() && isLessThan()) {
      refs.body.style.overflowY = 'hidden';
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
  window.addEventListener('resize', () => {
    if (isOpened() && isLessThan()) {
      refs.body.style.overflowY = 'hidden';
    } else {
      refs.body.style.overflowY = 'auto';
    }
  });
};

modalApp();
