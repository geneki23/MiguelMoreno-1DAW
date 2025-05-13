'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        const hobbies = form.querySelectorAll('.hobby:checked');
        if (hobbies.length === 0) {
          event.preventDefault();
          event.stopPropagation();
          form.querySelector('fieldset').classList.add('is-invalid');
        }
  
        const pass = form.querySelector('#pass').value;
        const pass2 = form.querySelector('#pass2').value;
        if (pass !== pass2) {
          event.preventDefault();
          event.stopPropagation();
          form.querySelector('#pass2').classList.add('is-invalid');
        }
  
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
  
        form.classList.add('was-validated');
      }, false);
    });
  