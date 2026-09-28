import { saveCadastro } from './storage.js';
import { validateField, validateForm, applyMask } from './validation.js';

// Importação da biblioteca externa SweetAlert2 via CDN como ES6 Module
import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11/+esm';

/**
 * Configuração personalizada do Toast (Notificação flutuante não obstrutiva)
 */
const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 3500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

/**
 * Atualiza o estado visual do link ativo (.active) no menu de navegação.
 * @param {string} currentHash - Hash da rota atual (ex: #cadastro)
 */
export function updateActiveNavLink(currentHash) {
  const navLinks = document.querySelectorAll('nav a');
  const targetHash = currentHash || '#inicio';

  navLinks.forEach(link => {
    // Remove a classe ativa de todos os links
    link.classList.remove('active');

    // Adiciona a classe ativa se a propriedade href coincidir com a rota atual
    if (link.getAttribute('href') === targetHash) {
      link.classList.add('active');
    }
  });
}

/**
 * Inicializa o controle de abertura e fechamento do Menu Hambúrguer (Mobile).
 */
export function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');

  if (menuToggle && nav) {
    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('active');

    menuToggle.setAttribute('aria-expanded', isOpen);
  });

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
}

/**
 * Inicializa os ouvintes de eventos dinâmicos para a página de cadastro.
 * Executado pelo roteador sempre que a rota '#cadastro' é renderizada.
 */
export function initCadastroEvents() {
  const form = document.getElementById('form-cadastro');

  if (!form) return;

  // 1. Escuta a submissão do formulário
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Intercepta a submissão padrão do navegador

    // Executa a validação global de consistência
    const isFormValid = validateForm(form);

    if (isFormValid) {
      // Captura os dados do formulário e organiza em um objeto
      const formData = new FormData(form);
      const cadastroDados = Object.fromEntries(formData.entries());

      // Persiste os dados no localStorage
      const salvoComSucesso = saveCadastro(cadastroDados);

      if (salvoComSucesso) {
        // Exibe o modal elegante de confirmação via SweetAlert2
        Swal.fire({
          title: 'Cadastro Realizado!',
          text: 'Agradecemos seu interesse em colaborar com a ONG Esperança Viva.',
          icon: 'success',
          confirmButtonColor: '#1b4332',
          confirmButtonText: 'Concluir'
        });

        // Limpa os campos do formulário
        form.reset();

        // Limpa as classes de validação visual do formulário
        form.querySelectorAll('.is-valid, .is-invalid').forEach(el => {
          el.classList.remove('is-valid', 'is-invalid');
        });
      } else {
        // Dispara notificação de erro
        Toast.fire({
          icon: 'error',
          title: 'Erro ao salvar os dados. Tente novamente.'
        });
      }
    } else {
      // Notificação no canto da tela informando pendências no preenchimento
      Toast.fire({
        icon: 'warning',
        title: 'Por favor, corrija os campos marcados em vermelho.'
      });
    }
  });

  // 2. Mapeia os eventos 'input' e 'blur' para cada campo do formulário (Validação em tempo real e Máscaras)
  const inputs = form.querySelectorAll('input, select, textarea');

  inputs.forEach(input => {
  input.addEventListener('input', () => {
    applyMask(input);
    validateField(input);
  });

  input.addEventListener('blur', () => {
    validateField(input);
  });
});
}
