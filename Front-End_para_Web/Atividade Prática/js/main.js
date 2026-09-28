import { initRouter } from './modules/router.js';
import { initMobileMenu } from './modules/ui.js';

/**
 * Ponto de entrada (Entry Point) principal da aplicação.
 * Executa a inicialização dos módulos globais assim que o DOM é carregado.
 */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Inicializa os eventos do menu responsivo (Hambúrguer no Mobile)
  initMobileMenu();

  // 2. Inicializa o roteador da Single Page Application (Hash Routing)
  initRouter();

  console.log('ONG Esperança Viva - Aplicação SPA inicializada com sucesso!');
});
