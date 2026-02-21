# Guia de Suporte - TI

Aplicação desktop informativa desenvolvida para auxiliar colaboradores
na resolução de problemas simples de tecnologia (nível N1) e na
orientação correta para abertura de chamados junto à equipe de TI.

O sistema também atua como canal de comunicação preventiva,
permitindo a divulgação de boas práticas, avisos e orientações
relacionadas ao uso de recursos tecnológicos.

---

## Objetivo

Centralizar informações operacionais em um único aplicativo offline,
promovendo autonomia dos usuários, padronização de orientações e
redução de chamados recorrentes de baixa complexidade.

---

## Escopo

O Guia de Suporte - TI contempla:

- Problemas simples de infraestrutura (impressoras, rede, computadores)
- Orientações básicas relacionadas a sistemas corporativos (Protheus, SGMP e Coletores)
- Dúvidas frequentes sobre ferramentas Microsoft (Outlook, Teams, OneDrive)
- Procedimentos de orientação para abertura correta de chamados

O conteúdo possui caráter exclusivamente informativo,
sem exposição de dados sensíveis ou detalhes técnicos internos.

---

## Benefícios

- Redução de chamados repetitivos
- Melhor qualidade na abertura de chamados
- Comunicação direta entre TI e colaboradores
- Disseminação de boas práticas de segurança
- Melhoria na experiência do usuário
- Otimização do tempo do time de suporte

---

## Arquitetura

- Aplicação baseada em SPA (Single Page Application)
- Conteúdo carregado dinamicamente via arquivos JSON
- Estrutura hierárquica: Categoria → Subcategoria → Problema → Passos
- Sidebar fixa com navegação entre:
  - Suporte
  - Sistemas
  - Office
- Múltiplos accordions abertos simultaneamente
- Funcionamento 100% offline

---

## Tecnologias

- HTML5
- CSS3 (modularizado)
- JavaScript Vanilla
- Estrutura preparada para empacotamento com Electron

---

## Público-alvo

- Colaboradores das unidades atendidas
- Suporte N1
- Service Desk
