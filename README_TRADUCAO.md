# 🌍 Sistema de Tradução Multilíngue

## Descrição

Este portfólio agora suporta **3 idiomas**:
- 🇧🇷 **Português** (padrão)
- 🇺🇸 **Inglês**
- 🇪🇸 **Espanhol**

## Como Funciona

### 1. Seletor de Idioma
No topo da página, há um **seletor de idioma** com bandeiras dos três países. Ao clicar em uma bandeira, toda a página é traduzida automaticamente.

### 2. Armazenamento da Preferência
A escolha do idioma é **salva no navegador** (localStorage), então quando o usuário voltar à página, ela será exibida no idioma escolhido anteriormente.

### 3. Tradução Dinâmica
Todos os textos traduzíveis possuem o atributo `data-lang`, que é usado pelo JavaScript para substituir o conteúdo quando o idioma é alterado.

## Arquivos Modificados

### `js/translations.js`
- Contém todas as traduções em um objeto JavaScript
- Função `changeLanguage(lang)` para alternar idiomas
- Carregamento automático da preferência salva

### `index.html`
- Adição do seletor de idioma no topo
- Atributos `data-lang` em todos os elementos de texto
- Link para o arquivo `translations.js`

### `css/style.css`
- Estilos para os botões de idioma
- Efeitos hover e estado ativo

## Como Adicionar Novas Traduções

1. Abra `js/translations.js`
2. Localize o objeto `translations`
3. Adicione a nova chave em cada idioma:

```javascript
const translations = {
  pt: {
    novaChave: "Texto em Português"
  },
  en: {
    novaChave: "Text in English"
  },
  es: {
    novaChave: "Texto en Español"
  }
};
```

4. No HTML, adicione o atributo `data-lang`:

```html
<span data-lang="novaChave">Texto em Português</span>
```

## Recursos Implementados

✅ Tradução completa de todo o conteúdo  
✅ Seletor de idioma com bandeiras  
✅ Armazenamento de preferência  
✅ Compatível com modo Black Mirror  
✅ Responsivo e funcional em todos os dispositivos  

## Compatibilidade

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## Estrutura de Traduções

O arquivo `translations.js` contém traduções para:

- **Informações pessoais**: objetivo, cargo, localização
- **Habilidades**: Hard Skills e Soft Skills
- **Idiomas**: níveis de proficiência
- **Certificados**: seção de certificados
- **Experiência Profissional**: todas as experiências de trabalho
- **Educação**: cursos e formações
- **Projetos**: descrições de projetos em destaque
- **Interface**: botões, links e mensagens do sistema

## Suporte

Para adicionar mais idiomas ou modificar traduções, edite o arquivo `js/translations.js` seguindo a estrutura existente.
