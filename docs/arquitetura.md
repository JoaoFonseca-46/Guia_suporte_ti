## Modelo Arquitetural

A aplicação segue separação clara de responsabilidades:

- Interface: HTML
- Estilo: CSS modularizado
- Lógica: JavaScript dividido por responsabilidade
- Dados: Arquivos JSON estruturados hierarquicamente

Estrutura hierárquica do conteúdo:

Categoria → Subcategoria → Problema → Passos → Imagens

---

## Estrutura de Diretórios

app/
  css/
    variables.css
    layout.css
    components.css

  js/
    config.js
    app.js
    navigation.js
    loader.js
    renderer.js
    accordion-control.js
    messages.js

  data/
    suporte.json
    sistemas.json
    office.json
    mensagens.json

Outras pastas:

assets/ → recursos visuais  
docs/ → documentação técnica  
scripts/ → automações futuras  

---

## Decisões Arquiteturais

### Sidebar
- Fixa
- Navegação entre Suporte, Sistemas e Office
- Área dedicada a mensagens rotativas
- Exibição de versão da aplicação

### Carregamento de Conteúdo
- Carregamento por seção ativa
- Apenas a seção selecionada é carregada
- Evita sobrecarga inicial

### Accordion
- Todos os níveis iniciam fechados
- Múltiplos itens podem permanecer abertos
- Controle total pelo usuário

### Mensagens
- Rotação automática a cada intervalo configurável
- Mensagens armazenadas em JSON
- Caráter informativo e preventivo

---

## Escalabilidade

A arquitetura foi projetada para permitir:

- Integração futura com API de chamados (SysAid)
- Expansão de categorias e problemas
- Inclusão de sistema de busca
- Empacotamento via Electron
- Possível personalização por unidade/empresa

Sem necessidade de reestruturação da base.
