// Chave padronizada utilizada para o armazenamento na memória local do navegador
const STORAGE_KEY = 'ong_cadastros';

/**
 * Recupera a lista de cadastros salvos no localStorage.
 * Aplica JSON.parse para converter a string em array/objeto JavaScript.
 *
 * @returns {Array} Lista de cadastros salvos ou um array vazio por padrão.
 */
export function getCadastros() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    // Se existirem dados, converte com JSON.parse; caso contrário, retorna array vazio
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Erro ao ler dados do localStorage:', error);
    return [];
  }
}

/**
 * Salva um novo registro no localStorage.
 * Adiciona o novo cadastro à lista existente e serializa com JSON.stringify.
 *
 * @param {Object} novoCadastro - Objeto com os dados validados do formulário.
 * @returns {boolean} Retorna true se a gravação for bem-sucedida.
 */
export function saveCadastro(novoCadastro) {
  try {
    // 1. Recupera o histórico atual de cadastros
    const cadastros = getCadastros();

    // 2. Adiciona campos de controle (ID único e data de registro)
    const registroCompleto = {
      id: Date.now().toString(36) + Math.random().toString(36).substring(2),
      dataCriacao: new Date().toISOString(),
      ...novoCadastro
    };

    // 3. Adiciona o novo registro ao array
    cadastros.push(registroCompleto);

    // 4. Converte o array atualizado em string JSON e grava no localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cadastros));

    return true;
  } catch (error) {
    console.error('Erro ao salvar no localStorage:', error);
    return false;
  }
}

/**
 * Limpa todos os cadastros armazenados no localStorage (útil para rotinas de teste/reset).
 */
export function clearCadastros() {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Erro ao limpar o localStorage:', error);
    return false;
  }
}
