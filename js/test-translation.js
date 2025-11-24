/* 
 * GUIA DE TESTE - SISTEMA DE TRADUÇÃO
 * ==================================== 
 */

// 1. Testar no Console do Navegador
// Abra o console (F12) e execute:

// Mudar para inglês:
changeLanguage('en');

// Mudar para espanhol:
changeLanguage('es');

// Voltar para português:
changeLanguage('pt');

// 2. Verificar armazenamento local:
localStorage.getItem('preferredLanguage');

// 3. Limpar preferência salva (para teste):
localStorage.removeItem('preferredLanguage');
location.reload();

// 4. Testar todos os elementos traduzidos:
document.querySelectorAll('[data-lang]').forEach(el => {
  console.log(el.getAttribute('data-lang'), ':', el.textContent);
});

// 5. Contar elementos traduzíveis:
console.log('Total de elementos traduzíveis:', document.querySelectorAll('[data-lang]').length);

/*
 * CHECKLIST DE TESTES
 * ===================
 * 
 * [ ] Clicar nas bandeiras PT, EN, ES
 * [ ] Verificar se todos os textos mudam
 * [ ] Recarregar a página e ver se mantém o idioma escolhido
 * [ ] Testar no modo Black Mirror
 * [ ] Testar em dispositivos móveis
 * [ ] Verificar se links externos funcionam
 * [ ] Verificar console para erros
 */

/*
 * ELEMENTOS QUE DEVEM SER TRADUZIDOS
 * ===================================
 * 
 * - Objetivo profissional
 * - Cargo atual
 * - Títulos das seções (Hard Skills, Soft Skills, etc.)
 * - Lista de soft skills
 * - Idiomas e níveis
 * - Experiências profissionais (títulos, períodos, descrições)
 * - Educação (cursos, períodos, disciplinas)
 * - Projetos (títulos e descrições)
 * - Botões e links (Ver Projeto, Ver Mais)
 * - Footer (Minhas mídias sociais)
 * - Botão Black Mirror
 */
