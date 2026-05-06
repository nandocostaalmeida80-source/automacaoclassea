# PROMPT MASTER — Construção de Landing Page Low Ticket

> **Como usar:** preencha o bloco de **INPUTS DO PRODUTO** abaixo e envie este prompt completo para a IA de construção (Claude, GPT, ou para o time de copy/design). Os blocos `{{variáveis}}` serão substituídos pelas informações do seu produto. As seções, ordem, lógica de copy e padrões visuais são fixos — não devem ser alterados, apenas adaptados ao produto.

---

## 🎯 OBJETIVO DA TAREFA

Construa uma landing page de venda direta para um produto **low ticket** (ticket entre R$ 19 e R$ 97), seguindo o modelo validado de copy persuasiva no mercado brasileiro de infoprodutos. A página deve receber tráfego pago do Meta Ads e converter visitantes frios em compradores em uma única visita, sem necessidade de aquecimento prévio.

A página NÃO é um site institucional, NÃO tem menu de navegação, NÃO tem múltiplas páginas. É uma **single page de venda** com lógica linear PAS (Problema → Agitação → Solução) + AIDA + oferta empilhada estilo Hormozi.

---

## 📥 INPUTS DO PRODUTO

Preencha as variáveis abaixo antes de gerar a página:

### 1. Identificação do produto
- **Nome do produto:** {{NOME_DO_PRODUTO}}
- **Categoria/nicho:** {{NICHO}} *(ex: tráfego pago, emagrecimento, finanças, marketing digital, etc.)*
- **Tipo de entrega:** {{TIPO_ENTREGA}} *(ex: curso em vídeo, PDF, biblioteca de templates, planilha, comunidade)*
- **Plataforma de pagamento:** {{PLATAFORMA}} *(ex: Hotmart, Kiwify, Eduzz)*
- **Link de checkout:** {{LINK_CHECKOUT}}

### 2. Público-alvo
- **Avatar principal:** {{AVATAR}} *(ex: infoprodutor iniciante que roda tráfego pago e não consegue ROI 2)*
- **Dor central (1 frase):** {{DOR_CENTRAL}}
- **Desejo central (1 frase):** {{DESEJO_CENTRAL}}
- **3 pensamentos de frustração que o avatar tem:** {{PENSAMENTOS_FRUSTRACAO}}
- **Nível de consciência:** {{NIVEL_CONSCIENCIA}} *(consciente do problema / consciente da solução / consciente do produto)*

### 3. Promessa e transformação
- **Promessa numérica concreta (headline):** {{PROMESSA_NUMERICA}} *(ex: "ROI 2+", "10kg em 60 dias", "R$ 5k em 30 dias")*
- **Mecanismo único (o "como"):** {{MECANISMO}} *(ex: "estruturas de campanha que forçam o algoritmo", "método das 3 refeições")*
- **Top 4-6 transformações que o cliente terá:** {{TRANSFORMACOES}}

### 4. Oferta
- **Entregáveis principais (4-5 itens):** {{ENTREGAVEIS_PRINCIPAIS}} *(cada um com nome + descrição curta + valor percebido em R$)*
- **Bônus (2-3 itens):** {{BONUS}} *(mesmo formato dos entregáveis)*
- **Soma do valor percebido (preço cheio riscado):** R$ {{PRECO_CHEIO}}
- **Preço parcelado:** {{PARCELAS}}x de R$ {{VALOR_PARCELA}}
- **Preço à vista:** R$ {{PRECO_AVISTA}}
- **Tempo de acesso:** {{TEMPO_ACESSO}}

### 5. Prova social
- **3-5 prints de resultados/depoimentos:** {{PROVAS_VISUAIS}} *(URLs ou descrições)*
- **Cita big players ou parceiros?** {{NOMES_AUTORIDADE}} *(opcional)*

### 6. Autor / Autoridade
- **Nome do produtor:** {{NOME_PRODUTOR}}
- **Foto/avatar:** {{FOTO_PRODUTOR}}
- **Bio curta (3-4 linhas, com credenciais e números):** {{BIO_AUTOR}}

### 7. Identidade visual
- **Cor primária:** {{COR_PRIMARIA}} *(hex)*
- **Cor secundária / destaque:** {{COR_SECUNDARIA}} *(hex)*
- **Cor de fundo:** {{COR_FUNDO}} *(geralmente claro/branco no corpo, escuro no footer)*
- **Tipografia:** {{TIPOGRAFIA}} *(ex: Inter, Poppins, Montserrat)*
- **Logomarca (claro e escuro):** {{LOGO_URLS}}
- **Mockup do produto:** {{MOCKUP_URL}}
- **Estilo dos ícones:** {{ESTILO_ICONES}} *(3D / flat / emoji)*

### 8. Tracking
- **Pixel do Meta Ads:** {{PIXEL_META}}
- **Outros pixels (GA, GTM, TikTok):** {{OUTROS_PIXELS}}
- **E-mail de contato:** {{EMAIL_CONTATO}}
- **CNPJ + razão social (footer):** {{CNPJ}}

---

## 🧠 LÓGICA DE VENDAS (não alterar)

A página deve seguir uma jornada psicológica em 5 atos:

1. **Identificação da dor** — headline valida a dor específica do avatar com promessa numérica concreta.
2. **Prova social antecipada** — resultados reais aparecem ANTES da explicação do produto, quebrando a objeção "será que funciona?" antes que ela se forme.
3. **Agitação da dor** — espelha o monólogo interno do avatar para criar identificação emocional.
4. **Solução + transformação** — pergunta-ponte ("se você pudesse… isso é interessante?") conecta dor à oferta e lista os benefícios concretos.
5. **Empilhamento de valor + fechamento** — oferta com ancoragem tripla de preço, bônus, fechamento "duas opções" forçando posicionamento.

A copy deve usar **primeira pessoa do produtor** ("minha biblioteca", "minhas estruturas", "eu sei…"), criando proximidade. Linguagem direta, frases curtas, palavras simples. Evitar jargão técnico salvo quando for o jargão do nicho que o avatar já entende.

---

## 🧩 ESTRUTURA OBRIGATÓRIA — 17 BLOCOS NA ORDEM

### Bloco 1 — Header
- Logo centralizada em fundo claro, minimalista, sem menu de navegação.
- Largura máxima do logo: ~200px.

### Bloco 2 — Hero / Headline principal
- **H1:** promessa numérica concreta + dor *(ex: "Não consegue {{PROMESSA_NUMERICA}} com seu {{NICHO}}?")*
- **Sub-headline:** explicação do mecanismo único, em até 2 linhas, com palavras-chave em **negrito**.
- **Mockup do produto** ao lado ou abaixo da headline.
- **CTA primário** (botão) opcional aqui — depende da temperatura do tráfego.
- Usar fundo claro, headline em fonte grande (48-64px desktop / 32-40px mobile).

### Bloco 3 — Prova social visual (resultados reais)
- Título curto: *"Veja abaixo resultados reais de quem usa {{NOME_DO_PRODUTO}}"*.
- 3 prints lado a lado (desktop) / empilhados (mobile): dashboards, depoimentos em texto, prints de WhatsApp ou de painel da plataforma.
- Imagens devem parecer reais e não-editadas (manter watermarks da plataforma original).

### Bloco 4 — Bloco de dor / agitação
- Título: *"Eu sei… seu {{produto/situação}} não funciona e {{consequência}}, não é mesmo?"*
- Sub-bloco *"e você sofre todo dia com pensamentos como…"* + imagem de pessoa pensativa OU lista visual dos 3 pensamentos de frustração definidos no input.
- Frase de fechamento: *"Você não aguenta mais {{dor concreta}}…"* com ícone triste ao lado.

### Bloco 5 — Pergunta-ponte
- Título: *"Agora eu te pergunto…"*
- Pergunta retórica: *"Se você pudesse {{ter o resultado prometido}}, isso é interessante pra você?"*
- Resposta âncora: *"Se sua resposta for SIM, {{NOME_DO_PRODUTO}} é para você."*

### Bloco 6 — "Com o produto você vai…"
- Lista de 4-6 benefícios (não features) com ícones temáticos ao lado de cada.
- Cada item começa com verbo de ação no infinitivo: *"Parar de…", "Escalar…", "Copiar…", "Ter…"*.
- Usar grid de 2 ou 3 colunas no desktop.

### Bloco 7 — Detalhamento dos entregáveis principais
- Título da seção: *"Veja tudo que você vai receber com {{NOME_DO_PRODUTO}}"*.
- 4-5 cards, cada um com:
  - Título do entregável (H3)
  - Parágrafo de copy explicando o benefício (não a feature)
  - Mockup ou imagem ilustrativa
- Layout alternado: imagem-esquerda/texto-direita → imagem-direita/texto-esquerda → repete.

### Bloco 8 — Bloco de bônus
- Título de transição: *"Ainda não acabou!"* ou *"E tem mais!"* (chamada de atenção).
- 2-3 bônus no mesmo formato dos entregáveis (card com título + copy + imagem).
- Cada bônus deve ter percepção de valor próprio e poder ser vendido separadamente.

### Bloco 9 — "Para quem é" (qualificação do avatar)
- Título: *"{{NOME_DO_PRODUTO}} é para você que:"*
- Checklist com 4-5 perfis específicos do avatar, cada um com ícone de check verde.
- Cada item deve fazer o visitante pensar *"é exatamente o meu caso"*.

### Bloco 10 — Recapitulação da oferta empilhada
- Título: *"Recapitulando… veja tudo que você vai receber"*.
- Lista numerada com cada entregável + bônus, **com valor individual em R$ ao lado de cada item**.
- Linha de soma: *"Tudo isso deveria custar: R$ {{PRECO_CHEIO}}"* (riscado).
- Frase-âncora: *"Mas hoje você tem acesso por apenas:"*

### Bloco 11 — Oferta principal + CTA #1
- Bloco visual destacado com:
  - Mockup do produto
  - "De R$ {{PRECO_CHEIO}} por:"
  - Preço parcelado em fonte grande: **{{PARCELAS}}x R$ {{VALOR_PARCELA}}**
  - Preço à vista em fonte menor: *"ou R$ {{PRECO_AVISTA}} à vista"*
  - **Botão CTA grande, cor de destaque, texto em primeira pessoa:** *"EU QUERO {{produto}}!"* / *"QUERO MINHA {{produto}}!"*
  - Selos abaixo do botão: *"Compra 100% segura"* / *"Acesso imediato"* / *"Pagamento via Pix ou cartão"*

### Bloco 12 — Passo a passo pós-compra
- Título: *"Compre agora e receba seu acesso no e-mail imediatamente!"*
- 3 etapas em ícones/cards:
  1. **Faça sua compra** — *"Em poucos minutos você recebe seu acesso na caixa de entrada."*
  2. **Acesse o material** — *"Disponível para download/acesso imediato no celular ou computador."*
  3. **Tudo pronto!** — *"Agora é só {{ação que gera o resultado}}."*

### Bloco 13 — Fechamento "duas opções"
- Título: *"Agora você tem duas escolhas:"*
- **Opção 1** — card com ícone vermelho/negativo + texto: *"Continuar {{repetindo o problema}}, vendo {{consequência ruim}} e pensando que o problema é com você."*
- **Opção 2** — card com ícone verde/positivo + texto: *"Investir R$ {{PRECO_AVISTA}} e finalmente {{ter a transformação}}."*
- Frase de fechamento: *"Eu sei (e você também sabe): a opção 2 é a mais inteligente."*
- CTA repetido logo abaixo.

### Bloco 14 — Autoridade / sobre o autor
- Foto do produtor (lateral ou centralizada).
- H2: *"O criador de {{NOME_DO_PRODUTO}} é {{NOME_PRODUTOR}}"*.
- Bio em 3-4 linhas com:
  - Credencial principal (ex: "criador do movimento X", "fundador de Y")
  - Número impressionante (faturamento, alunos, anos de mercado)
  - Conexão com a dor: *"Antes de dominar {{tema}}, ele também {{passou pelo problema}}…"*
  - Chamada para ação: *"Agora ele entrega os mesmos {{materiais/métodos}} que usa na própria operação."*

### Bloco 15 — Recapitulação final + CTA #2
- **Repete exatamente o bloco 10 + 11** (checklist da oferta + bloco de preço + botão).
- Esse é o último empurrão para quem rolou até o fim sem clicar.

### Bloco 16 — FAQ (perguntas frequentes)
- Título: *"Perguntas frequentes"*.
- Mínimo 5 perguntas, em formato accordion ou expandido:
  1. Qual é a forma de pagamento?
  2. O pagamento é seguro?
  3. Funciona pra mim? *(reforça que serve para o avatar)*
  4. Como vou acessar o material?
  5. Por quanto tempo tenho acesso?
- Respostas curtas e diretas, máximo 2 linhas cada.

### Bloco 17 — Footer
- Logo em fundo escuro.
- E-mail de contato: *"Tem alguma dúvida? Mande pelo e-mail: {{EMAIL_CONTATO}}"*.
- Disclaimer Meta/Facebook (obrigatório):
  > *"Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. A compra desse material não garante nenhum tipo de resultado. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais de alunos."*
- CNPJ + razão social.
- Copyright © {{ANO}}.

---

## ✍️ DIRETRIZES DE COPY

- **Voz:** primeira pessoa do produtor ("eu", "minha", "minhas").
- **Pronome do leitor:** sempre "você" (nunca "vocês" ou "a gente").
- **Tom:** direto, confiante, levemente provocativo. Sem excesso de formalidade.
- **Frases:** curtas, máximo 20 palavras por frase.
- **Parágrafos:** máximo 3 linhas.
- **Negritos:** apenas em palavras-chave de promessa, números e gatilhos. Nunca negritar frase inteira.
- **Números concretos:** usar sempre que possível (ROI 2+, 32 formatos, 40 mil públicos, 7 dígitos).
- **Evitar:** "incrível", "revolucionário", "único no mercado", "transformador" — palavras gastas. Substituir por descrição concreta do que o produto faz.
- **Repetição estratégica:** o nome do produto deve aparecer 8-12 vezes ao longo da página.

---

## 🎨 DIRETRIZES DE DESIGN

- **Layout:** single page, scroll vertical, sem menu fixo.
- **Largura máxima do conteúdo:** 1200px centralizado.
- **Espaçamento entre blocos:** 80-120px desktop / 48-64px mobile.
- **Mobile-first:** mais de 80% do tráfego pago vem de mobile, então o design começa pelo mobile e adapta para desktop.
- **Velocidade:** página leve, imagens otimizadas (WebP), sem vídeos pesados no carregamento inicial.
- **Botões CTA:** cor de destaque vibrante (geralmente verde, laranja ou amarelo), tamanho grande (min 56px de altura), com leve animação de pulse ou hover.
- **Ícones:** estilo consistente em toda a página (ou todos 3D, ou todos flat — não misturar).
- **Imagens de mockup:** sempre com sombra suave, fundo destacado da página.

---

## 🔁 REPETIÇÕES E PADRÕES OBRIGATÓRIOS

- **CTA Hotmart/checkout aparece no mínimo 2 vezes** (após bloco 11 e após bloco 13/15).
- **Preço cheio riscado + parcelado destacado + à vista menor** — ancoragem tripla, sempre nessa hierarquia visual.
- **Pixel do Meta Ads** carregado no `<head>` da página desde o lançamento.
- **Selo de garantia/segurança** próximo a cada CTA.
- **Sem timer regressivo nem escassez falsa** — o tráfego é pago e contínuo, escassez artificial reduz credibilidade.

---

## ✅ CHECKLIST FINAL ANTES DE PUBLICAR

- [ ] Pixel Meta Ads instalado e disparando evento de PageView
- [ ] Pixel Meta Ads disparando evento de InitiateCheckout no clique do CTA
- [ ] Link do checkout testado em mobile e desktop
- [ ] Página testada em iPhone, Android e desktop (Chrome + Safari)
- [ ] Imagens otimizadas (peso total da página < 2MB)
- [ ] Tempo de carregamento < 3s (testar no PageSpeed Insights)
- [ ] Disclaimer do Facebook presente no footer
- [ ] CNPJ presente no footer
- [ ] E-mail de contato funcional
- [ ] FAQ cobrindo no mínimo as 5 dúvidas padrão
- [ ] CTA aparece pelo menos 2x ao longo da página
- [ ] Headline contém promessa numérica concreta
- [ ] Prova social aparece antes da explicação do produto
- [ ] Bloco "duas opções" presente antes do fechamento

---

## 📤 OUTPUT ESPERADO

Ao receber os inputs preenchidos, devolva:
1. **Estrutura HTML/JSX completa da landing page** (caso o pedido seja código), OU
2. **Briefing detalhado por bloco** com a copy final escrita + descrição visual de cada seção (caso o pedido seja para entregar a um designer/copywriter), OU
3. **Wireframe estruturado em texto/markdown** com cada bloco enumerado e seu conteúdo (caso o pedido seja apenas planejamento).

Sempre indique no final qual variável do input não foi preenchida e qual suposição foi feita para preencher a lacuna.
