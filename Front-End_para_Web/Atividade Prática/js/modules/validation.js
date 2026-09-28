// Expressões regulares utilizadas na validação dos campos.
const REGEX_PATTERNS = {
  cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  cep: /^\d{5}-\d{3}$/,
  telefone: /^\(\d{2}\)\s?\d{4,5}-\d{4}$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
};

/**
 * Aplica máscaras de formatação enquanto o usuário digita.
 *
 * @param {HTMLInputElement} input - Campo de entrada.
 */
export function applyMask(input) {
  let value = input.value.replace(/\D/g, '');

  switch (input.id) {
    case 'cpf':
      value = value.substring(0, 11);
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d)/, '$1.$2');
      value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

      input.value = value;
      break;

    case 'cep':
      value = value.substring(0, 8);
      value = value.replace(/^(\d{5})(\d)/, '$1-$2');

      input.value = value;
      break;

    case 'telefone':
      value = value.substring(0, 11);

      if (value.length > 10) {
        value = value.replace(
          /^(\d{2})(\d{5})(\d{4})$/,
          '($1) $2-$3'
        );
      } else if (value.length > 6) {
        value = value.replace(
          /^(\d{2})(\d{4})(\d{0,4})$/,
          '($1) $2-$3'
        );
      } else if (value.length > 2) {
        value = value.replace(
          /^(\d{2})(\d{0,5})$/,
          '($1) $2'
        );
      }

      input.value = value;
      break;
  }
}

/**
 * Valida um campo individual.
 *
 * @param {HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement} input
 * @returns {boolean} True quando o campo é válido.
 */
export function validateField(input) {
  const value = input.value.trim();

  const formGroup = input.closest('.form-group');
  const smallMessage = formGroup?.querySelector('small');

  let isValid = true;
  let errorMessage = '';

  // Guarda a mensagem original do campo apenas uma vez.
  if (smallMessage && input.dataset.defaultHint === undefined) {
    input.dataset.defaultHint = smallMessage.textContent || '';
  }

  // 1. Verifica campos obrigatórios.
  if (input.required && value === '') {
    isValid = false;
    errorMessage = 'Este campo é de preenchimento obrigatório.';
  }

  // 2. Valida campos preenchidos de acordo com suas regras.
  else if (value !== '') {
    switch (input.id) {
      case 'nome':
      case 'rua':
      case 'bairro':
      case 'cidade':
        if (value.length < 3) {
          isValid = false;
          errorMessage = 'Preencha com pelo menos 3 caracteres.';
        }
        break;

      case 'email':
        if (!REGEX_PATTERNS.email.test(value)) {
          isValid = false;
          errorMessage =
            'Informe um endereço de e-mail válido (ex: seu@email.com).';
        }
        break;

      case 'cpf':
        if (!REGEX_PATTERNS.cpf.test(value)) {
          isValid = false;
          errorMessage =
            'Formato de CPF inválido. Utilize: 000.000.000-00.';
        }
        break;

      case 'cep':
        if (!REGEX_PATTERNS.cep.test(value)) {
          isValid = false;
          errorMessage =
            'Formato de CEP inválido. Utilize: 00000-000.';
        }
        break;

      case 'telefone':
        if (!REGEX_PATTERNS.telefone.test(value)) {
          isValid = false;
          errorMessage =
            'Formato inválido. Utilize: (00) 90000-0000.';
        }
        break;
    }
  }

  // 3. Atualiza o feedback visual.
  if (isValid) {
    input.classList.remove('is-invalid');

    if (value !== '') {
      input.classList.add('is-valid');
    } else {
      input.classList.remove('is-valid');
    }

    if (smallMessage) {
      smallMessage.textContent = input.dataset.defaultHint || '';
      smallMessage.style.color = '#666';
    }
  } else {
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');

    if (smallMessage) {
      smallMessage.textContent = errorMessage;
      smallMessage.style.color = '#dc3545';
    }
  }

  return isValid;
}

/**
 * Valida todos os campos obrigatórios do formulário.
 *
 * @param {HTMLFormElement} form - Formulário a ser validado.
 * @returns {boolean} True quando todos os campos são válidos.
 */
export function validateForm(form) {
  const inputs = form.querySelectorAll(
    'input[required], select[required], textarea[required]'
  );

  let isFormValid = true;
  let firstInvalidInput = null;

  inputs.forEach(input => {
    const isFieldValid = validateField(input);

    if (!isFieldValid) {
      isFormValid = false;

      if (!firstInvalidInput) {
        firstInvalidInput = input;
      }
    }
  });

  // Foca o primeiro campo inválido.
  if (firstInvalidInput) {
    firstInvalidInput.focus();
  }

  return isFormValid;
}
