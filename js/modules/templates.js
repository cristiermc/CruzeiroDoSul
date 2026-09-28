/**
 * Base de dados simulada para renderização dinâmica dos projetos sociais
 */
const projetosData = [
  {
    id: 'educacao',
    titulo: 'Educação para o Futuro',
    categoria: 'Educação',
    badgeClass: 'badge-primary',
    descricao: 'Oferecemos reforço escolar, oficinas de informática e incentivo à leitura para crianças e jovens da comunidade local.',
    imagem: 'imagens/institucional-ong.webp',
    meta: '100 Crianças Atendidas'
  },
  {
    id: 'assistencia',
    titulo: 'Mãos que Acolhem',
    categoria: 'Assistência Social',
    badgeClass: 'badge-accent',
    descricao: 'Distribuição de cestas básicas, agasalhos e apoio psicológico para famílias em situação de extrema vulnerabilidade.',
    imagem: 'imagens/institucional-ong.webp',
    meta: '500 Famílias Impactadas'
  }
];

/**
 * Gera o template HTML para a visão Início (Home)
 * @returns {string} String HTML estruturada via Template Literals
 */
export function getHomeTemplate() {
  return `
    <section>
      <h1>A transformação começa com a sua ajuda</h1>
      <p>A ONG Esperança Viva atua no desenvolvimento social, promovendo dignidade, educação e apoio contínuo a famílias e crianças.</p>

      <div class="alert alert-sucesso">
        <strong>Impacto em 2026:</strong> Mais de 1.000 pessoas já foram beneficiadas com nossos programas este ano!
      </div>

      <div class="badge-group">
        <span class="badge badge-primary">Transparência</span>
        <span class="badge badge-accent">Ação Direta</span>
        <span class="badge badge-sucesso">Comunidade Viva</span>
      </div>

      <h2>Nossos Pilares de Atuação</h2>
      <div class="grid-pilares">
        <article>
          <h3>Educação Inclusiva</h3>
          <p>Acreditamos que o acesso à informação e ao conhecimento é a chave para romper ciclos de vulnerabilidade.</p>
        </article>
        <article>
          <h3>Acolhimento Humano</h3>
          <p>Suporte emergencial e contínuo focado em suprir necessidades básicas e restabelecer a cidadania.</p>
        </article>
      </div>
    </section>

    <section>
      <h2>Como Você Pode Ajudar?</h2>
      <div class="grid-doacao">
        <div class="card-doacao">
          <h3>Seja Voluntário</h3>
          <p>Doe seu tempo e conhecimento nas nossas ações presenciais e oficinas comunitárias.</p>
        </div>
        <div class="card-doacao">
          <h3>Seja Doador</h3>
          <p>Contribua financeiramente de forma mensal para mantermos nossos projetos ativos.</p>
        </div>
      </div>
    </section>
  `;
}

/**
 * Gera o template HTML para a visão de Projetos Sociais.
 * Utiliza o método .map() e .join() para converter o array de objetos em marcação HTML dinâmica.
 * @returns {string} String HTML montada dinamicamente
 */
export function getProjetosTemplate() {
  // Converte o array de projetos em elementos de artigo HTML dinâmicos
  const projetosHTML = projetosData.map(projeto => `
    <article id="${projeto.id}">
      <div>
        <span class="badge ${projeto.badgeClass}">${projeto.categoria}</span>
        <h3>${projeto.titulo}</h3>
        <p>${projeto.descricao}</p>
      </div>
      <figure>
        <img class="project-image" src="${projeto.imagem}" alt="${projeto.titulo}">
        <figcaption>Meta de impacto: ${projeto.meta}</figcaption>
      </figure>
    </article>
  `).join('');

  return `
    <section>
      <h1>Projetos Sociais Ativos</h1>
      <p>Conheça as iniciativas em andamento na ONG Esperança Viva e veja como a sua colaboração se transforma em resultados reais.</p>
      
      <div class="grid-projetos">
        ${projetosHTML}
      </div>
    </section>
  `;
}

/**
 * Gera o template HTML para o formulário de cadastro
 * de apoiadores e voluntários.
 * @returns {string} String HTML contendo a estrutura semântica do formulário
 */
export function getCadastroTemplate() {
  return `
    <section>
      <h1>Cadastro de Apoiadores e Voluntários</h1>
      <p>Preencha os campos abaixo para fazer parte da nossa rede de apoio social.</p>
      
      <div class="alert alert-sucesso">
        <strong>Atenção:</strong> As inscrições para o programa de voluntariado de 2026 estão abertas!
      </div>

      <div class="badge-group">
        <span class="badge badge-primary">Inscrições Abertas</span>
        <span class="badge badge-accent">Vagas Limitadas</span>
      </div>

      <form id="form-cadastro" action="#" method="POST" novalidate>
        <fieldset>
          <legend>Dados Pessoais</legend>

          <div class="form-group">
            <label for="nome">Nome Completo *</label>
            <input type="text" id="nome" name="nome" required minlength="3" placeholder="Digite seu nome completo">
            <small></small>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="email">E-mail *</label>
              <input type="email" id="email" name="email" required placeholder="seu@email.com">
              <small></small>
            </div>

            <div class="form-group">
              <label for="cpf">CPF *</label>
              <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00" maxlength="14">
              <small>Formato: 000.000.000-00</small>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="nascimento">Data de Nascimento *</label>
              <input type="date" id="nascimento" name="nascimento" required>
              <small></small>
            </div>

            <div class="form-group">
              <label for="telefone">Telefone / Whatsapp *</label>
              <input type="tel" id="telefone" name="telefone" required placeholder="(00) 00000-0000" maxlength="15">
              <small>Formato: (00) 90000-0000</small>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Endereço Residencial</legend>

          <div class="form-row">
            <div class="form-group">
              <label for="cep">CEP *</label>
              <input type="text" id="cep" name="cep" required placeholder="00000-000" maxlength="9">
              <small>Formato: 00000-000</small>
            </div>
            
            <div class="form-group">
              <label for="rua">Logradouro (Rua/Av.) *</label>
              <input type="text" id="rua" name="rua" required placeholder="Ex: Rua das Flores">
              <small></small>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="numero">Número *</label>
              <input type="text" id="numero" name="numero" required placeholder="123">
              <small></small>
            </div>

            <div class="form-group">
              <label for="bairro">Bairro *</label>
              <input type="text" id="bairro" name="bairro" required placeholder="Centro">
              <small></small>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label for="cidade">Cidade *</label>
              <input type="text" id="cidade" name="cidade" required placeholder="Tubarão">
              <small></small>
            </div>

            <div class="form-group">
              <label for="estado">Estado *</label>
              <select id="estado" name="estado" required>
                <option value="">Selecione um estado...</option>
                <option value="SC">Santa Catarina (SC)</option>
                <option value="PR">Paraná (PR)</option>
                <option value="RS">Rio Grande do Sul (RS)</option>
                <option value="SP">São Paulo (SP)</option>
              </select>
              <small></small>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>Opções de Engajamento</legend>

          <div class="form-group">
            <label for="tipo-apoio">Como prefere colaborar? *</label>
            <select id="tipo-apoio" name="tipo-apoio" required>
              <option value="">Selecione uma opção...</option>
              <option value="voluntario">Voluntário de Ações Presenciais</option>
              <option value="doador">Doador Financeiro Mensal</option>
              <option value="ambos">Voluntário e Doador</option>
            </select>
            <small></small>
          </div>

          <div class="form-group">
            <label for="disponibilidade">Disponibilidade de Horário</label>
            <select id="disponibilidade" name="disponibilidade">
              <option value="">Selecione a disponibilidade...</option>
              <option value="semana-comercial">Dias úteis (Horário comercial)</option>
              <option value="semana-noite">Dias úteis (Período noturno)</option>
              <option value="finais-semana">Finais de Semana</option>
            </select>
            <small></small>
          </div>

          <div class="form-group">
            <label for="mensagem">Mensagem / Observações</label>
            <textarea name="mensagem" id="mensagem" rows="4" placeholder="Conte-nos um pouco sobre você ou como gostaria de ajudar..."></textarea>
          </div>
        </fieldset>

        <button type="submit">Enviar Cadastro</button>
      </form>
    </section>
  `;
}
