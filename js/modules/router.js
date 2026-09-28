import {
  getHomeTemplate,
  getProjetosTemplate,
  getCadastroTemplate
} from './templates.js';

import {
  initCadastroEvents,
  updateActiveNavLink
} from './ui.js';

// Mapeamento das rotas por hash e suas respectivas funções geradoras de template.
const routes = {
  '': getHomeTemplate,
  '#inicio': getHomeTemplate,
  '#projetos': getProjetosTemplate,
  '#cadastro': getCadastroTemplate
};

/**
 * Controla a navegação da SPA e renderiza a visão correspondente.
 */
export function handleRouting() {
  // Captura o hash atual ou assume a página inicial.
  const hash = window.location.hash || '#inicio';

  // Usa a rota correspondente ou retorna para a Home.
  const renderTemplate = routes[hash] || getHomeTemplate;

  // Localiza o container principal da aplicação.
  const appContainer = document.getElementById('app');

  if (!appContainer) {
    console.error('Container principal da aplicação não encontrado.');
    return;
  }

  // Injeta o template da rota atual.
  appContainer.innerHTML = renderTemplate();

  // Atualiza o link ativo da navegação.
  updateActiveNavLink(hash);

  // Inicializa os eventos específicos da página de cadastro.
  if (hash === '#cadastro') {
    initCadastroEvents();
  }

  // Retorna a visualização para o topo da página.
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/**
 * Inicializa os ouvintes globais de navegação da SPA.
 */
export function initRouter() {
  // Monitora alterações no hash da URL.
  window.addEventListener('hashchange', handleRouting);

  // Renderiza a rota inicial.
  handleRouting();
}
