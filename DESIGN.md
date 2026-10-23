---
name: WÓD'IO
description: seu treino diário. Registro de treinos de CrossFit e Hyrox que mostra a evolução de cada um.
colors:
  laranja: "#FF8A3D"
  laranja-claro: "#F97A2E"
  coral: "#F2546B"
  turquesa: "#2EC4B6"
  roxo: "#8B5CF6"
  roxo-fundo: "#7C3AED"
  roxo-texto: "#C4B5FD"
  roxo-texto-claro: "#6D28D9"
  coral-rosado: "#FF7E8E"
  coral-rosado-claro: "#C93A56"
  tinta-laranja: "#1C0F06"
  marinho: "#0E111A"
  marinho-elevado: "#1C2130"
  marinho-folha: "#131724"
  texto-escuro: "#EEF1F7"
  apagado-escuro: "#A3ABBD"
  vidro-escuro: "rgba(255,255,255,.06)"
  borda-vidro-escuro: "rgba(255,255,255,.10)"
  lavanda: "#F4F2FA"
  lavanda-folha: "#F8F6FC"
  tinta: "#1B1E2B"
  apagado-claro: "#5B6175"
  vidro-claro: "rgba(255,255,255,.62)"
  borda-vidro-claro: "rgba(255,255,255,.95)"
  linha-clara: "rgba(27,30,43,.09)"
  zona-leve: "#5B8DEF"
  zona-intensivo: "#2EC4B6"
  zona-aerobico: "#F2C14E"
  zona-anaerobico: "#FF8A3D"
  zona-vo2: "#E5484D"
  carga: "#F5C451"
  carga-claro: "#B7791F"
  bom: "#4ADE9B"
  bom-claro: "#14945F"
  ruim: "#F2786E"
  ruim-claro: "#C8443A"
  strava: "#FC4C02"
typography:
  logotipo:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "36px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: ".01em"
  numero-heroi:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "72px"
    fontWeight: 700
    lineHeight: 0.85
  numero-cartao:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: 1.1
  saudacao:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "26px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "-.02em"
  titulo-secao:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "21px"
    fontWeight: 800
    letterSpacing: "-.02em"
  titulo-cartao:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 800
    letterSpacing: "-.02em"
  corpo:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.5
  apoio:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  assinatura:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "13px"
    fontWeight: 500
    letterSpacing: ".18em"
  etiqueta:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "12px"
    fontWeight: 800
    letterSpacing: ".06em"
  rotulo-aba:
    fontFamily: "Manrope, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "11px"
    fontWeight: 600
rounded:
  campo: "14px"
  item: "16px"
  bloco: "20px"
  cartao: "22px"
  painel: "26px"
  folha: "28px"
  barra: "36px"
  pilula: "999px"
spacing:
  xxs: "4px"
  xs: "6px"
  sm: "8px"
  md: "10px"
  lg: "12px"
  xl: "14px"
  gutter: "18px"
  secao: "34px"
components:
  button-primary:
    backgroundColor: "{colors.laranja}"
    textColor: "{colors.tinta-laranja}"
    rounded: "{rounded.pilula}"
    padding: "10px 18px"
    typography: "{typography.corpo}"
  button-secondary:
    backgroundColor: "{colors.vidro-escuro}"
    textColor: "{colors.texto-escuro}"
    rounded: "{rounded.pilula}"
    padding: "10px 18px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.texto-escuro}"
    rounded: "{rounded.pilula}"
    padding: "10px 18px"
  button-finalizar:
    backgroundColor: "{colors.laranja}"
    textColor: "{colors.tinta-laranja}"
    rounded: "{rounded.bloco}"
    padding: "14px"
  fab-registrar:
    backgroundColor: "{colors.laranja}"
    textColor: "#FFFFFF"
    rounded: "{rounded.pilula}"
    size: "62px"
  input:
    backgroundColor: "{colors.vidro-escuro}"
    textColor: "{colors.texto-escuro}"
    rounded: "{rounded.campo}"
    padding: "12px"
  search:
    backgroundColor: "{colors.vidro-escuro}"
    textColor: "{colors.texto-escuro}"
    rounded: "{rounded.pilula}"
    padding: "13px 16px"
  chip:
    backgroundColor: "{colors.vidro-escuro}"
    textColor: "{colors.texto-escuro}"
    rounded: "{rounded.pilula}"
    padding: "7px 14px"
  chip-selected:
    backgroundColor: "{colors.texto-escuro}"
    textColor: "{colors.marinho}"
    rounded: "{rounded.pilula}"
    padding: "7px 14px"
  card-kpi:
    backgroundColor: "{colors.vidro-escuro}"
    textColor: "{colors.texto-escuro}"
    rounded: "{rounded.cartao}"
    padding: "14px 16px"
  panel:
    backgroundColor: "{colors.vidro-escuro}"
    textColor: "{colors.texto-escuro}"
    rounded: "{rounded.painel}"
    padding: "18px"
  hero-semana:
    backgroundColor: "{colors.vidro-escuro}"
    textColor: "{colors.texto-escuro}"
    rounded: "{rounded.folha}"
    padding: "20px"
  nav-tabs:
    backgroundColor: "{colors.marinho-folha}"
    textColor: "{colors.apagado-escuro}"
    rounded: "{rounded.barra}"
    padding: "7px 8px"
  nav-tab-active:
    backgroundColor: "{colors.laranja}"
    textColor: "{colors.laranja}"
    rounded: "24px"
  dialog:
    backgroundColor: "{colors.marinho-folha}"
    textColor: "{colors.texto-escuro}"
    rounded: "{rounded.folha}"
  toast:
    backgroundColor: "{colors.marinho-elevado}"
    textColor: "{colors.texto-escuro}"
    rounded: "{rounded.pilula}"
    padding: "11px 18px"
  card-ciclo:
    backgroundColor: "{colors.coral-rosado}"
    textColor: "{colors.texto-escuro}"
    rounded: "{rounded.painel}"
    padding: "16px 18px"
---

# Design System: WÓD'IO

## Overview

**Creative North Star: "O Quadro do Dia"**

O WÓD'IO é o dia de treino no box, do começo ao fim, em três momentos. Antes, o coach escreve o WOD no quadro para todo mundo seguir. Durante, cada um anota no giz para não se perder nos rounds. No fim do dia, o quadro vira placar de quem treinou. O app tem os três: a **lousa** (fundo marinho, a carinha e o apóstrofo desenhados em giz, o treino escrito para seguir), o **giz anotado** (registro rápido, blocos, séries, rascunho que se salva sozinho) e o **placar** (número enorme em Barlow Condensed como herói, semana em bolinhas, histórico).

O material é **vidro sobre noite**. Cartões translúcidos e desfocados flutuam sobre um marinho profundo, com manchas de cor borradas (laranja no topo, roxo no meio, rosa embaixo) que dão calor sem virar decoração. A energia vem de um único degradê laranja → coral, usado nos botões principais, nas chaves ligadas e nos dias treinados. O resto é contido: texto em Manrope, cinzas frios, bordas finas de luz. A marca é crua (traço de giz, falhas e rebarbas de propósito) e o dado é polido. Essa tensão é a identidade.

A densidade é de app de celular usado com uma mão, suado, no box. Os alvos de toque são grandes (44px ou mais), tudo é pílula ou cartão bem arredondado, e cada tela tem um número que manda. O brandbook (`brandbook-wodio.html`, versão 1, outubro de 2026) é a autoridade da marca. Este documento registra como ela está implementada no app.

**Key Characteristics:**
- Fundo marinho `#0E111A` (escuro) ou lavanda `#F4F2FA` (claro), nunca branco puro nem preto puro.
- Vidro translúcido com desfoque de 22px em todo cartão, painel, lista e tabela.
- Um degradê de energia, laranja → coral, reservado para ação e conquista.
- Número como herói: Barlow Condensed grande; o resto em Manrope.
- Pílula em todo controle; cantos de 14 a 28px nos contêineres.
- Marca em traço de giz desenhado à mão; interface em ícones de linha arredondada.
- Ilustração, nunca foto.

## Colors

Três cores oficiais, uma base escura e um apoio contido; cada cor tem um par para o tema claro.

### Primary
- **Laranja Energia** (`laranja`; tema claro `laranja-claro`): a cor da marca. O logotipo no tema escuro, a aba ativa, o início do degradê dos botões principais, a borda do rascunho em andamento e o realce do bloco aberto. É energia, não texto corrido.
- **Coral Brilho** (`coral`): só como fim do degradê laranja → coral e no brilho colorido das sombras dos botões principais. Nunca aparece sozinho como cor de superfície.

### Secondary
- **Turquesa Assinatura** (`turquesa`): o apóstrofo do WÓD'IO, sempre, em qualquer fundo. Fora do logotipo, só aparece como zona "Intensivo" em gráficos.

### Tertiary
- **Roxo Musculação** (`roxo`, `roxo-fundo`; texto `roxo-texto`, claro `roxo-texto-claro`): o anel do dia de hoje na semana, o anel de foco, o fim do degradê do botão + (registrar treino), os gráficos de musculação e volume, o cartão de seleção grande e o cartão de relatório.
- **Coral Rosado do Ciclo** (`coral-rosado`; claro `coral-rosado-claro`): exclusivo do Meu ciclo. Cartão, calendário, botão principal do módulo (degradê coral rosado → roxo) e o segmento ativo das anotações.

### Neutral
- **Marinho Noite** (`marinho`): fundo do app no tema escuro e cor de fundo dos chips selecionados.
- **Marinho Elevado** (`marinho-elevado`): superfícies sólidas acima do vidro, como toasts e avatares.
- **Marinho Folha** (`marinho-folha`): diálogos, folhas de baixo, cabeçalho de janela e barra de navegação.
- **Branco Gelo** (`texto-escuro`) e **Cinza Névoa** (`apagado-escuro`): texto principal e texto de apoio no escuro.
- **Vidro** (`vidro-escuro` com `borda-vidro-escuro`): o preenchimento e a borda de todo cartão no escuro.
- **Lavanda Manhã** (`lavanda`), **Lavanda Folha** (`lavanda-folha`), **Tinta** (`tinta`), **Cinza Ardósia** (`apagado-claro`), **Vidro Leitoso** (`vidro-claro` com `borda-vidro-claro`) e **Linha** (`linha-clara`): os mesmos papéis no tema claro.

### Cores de dados
- **Zonas de FC** (`zona-leve`, `zona-intensivo`, `zona-aerobico`, `zona-anaerobico`, `zona-vo2`): faixas de zona, legendas e gráficos de batimento e calorias. No visual novo, a zona anaeróbica foi igualada ao laranja da marca.
- **Carga** (`carga`; claro `carga-claro`): os números de carga nas listas e a borda de aviso.
- **Bom / Ruim** (`bom`, `ruim` e pares claros): variação positiva ou negativa nos indicadores, botão de excluir e avisos de vencido.
- **Strava** (`strava`): só a faixa lateral do aviso "Treino do Strava adicionado".

### Named Rules
**A Regra do Apóstrofo.** O apóstrofo de WÓD'IO é turquesa em qualquer fundo, tema ou peça. O nome sempre leva o acento e o apóstrofo.

**A Regra do Degradê Único.** O degradê laranja → coral é a única cor de ação. Ele marca o botão principal, a chave ligada, o segmento ativo e o dia treinado. Um botão de destaque por tela.

**A Regra do Dado Separado.** As cores das zonas de FC existem para gráficos e faixas de dado. Nunca entram em peças de marca, botões ou fundos.

**A Regra do Ciclo.** O coral rosado é do Meu ciclo e de mais nada.

**A Regra do Tom de Texto.** Cor usada como texto tem um par mais fechado no tema claro, com o mesmo tom: laranja `#A63F0C`, apóstrofo turquesa `#0E8A80` (texto grande), turquesa pequeno `#0B7C73`, coral do ciclo `#A82A45`, verde `#0D7349`, vermelho `#B23A31`, dourado da carga `#8A5A10`, amarelo `#87650E`, azul `#2C5BC0`. No escuro, as cores originais já passam. Botões e degradês continuam com as cores cheias. No código, use os tokens `--acc1-t`, `--ap`, `--cic-t`, `--good-t`, `--bad-t`, `--load-t`, `--z1-t` a `--z5-t` para texto; nunca a cor de preenchimento.

## Typography

**Display Font:** Barlow Condensed (com sans-serif)
**Body Font:** Manrope (com system-ui, -apple-system, Segoe UI, sans-serif)

**Character:** A condensada é o placar: estreita, alta e pesada, feita para números que precisam caber grandes numa tela de celular. A Manrope é a voz: geométrica, calorosa e firme nos títulos em ExtraBold. Duas famílias, e só.

### Hierarchy
- **Logotipo** (Barlow Condensed 700 itálico, 36px no cabeçalho, 58 a 64px na abertura e no login, altura de linha 1): só o nome WÓD'IO. O itálico existe apenas aqui.
- **Número herói** (Barlow Condensed 700, 72px; 58px em telas de até 420px; altura de linha 0,85): o total de treinos no topo da tela inicial, com a unidade em Manrope 700 de 17px ao lado.
- **Número de cartão** (Barlow Condensed 600, 26 a 34px): indicadores, totais da vida, carga nas listas, cartão do ciclo e seletores de duração.
- **Saudação** (Manrope 800, 26px, −0,02em): "Bom treino, Davi" no topo da tela inicial, sempre com o nome.
- **Título de seção** (Manrope 800, 21px, −0,02em): títulos das abas e seções ("Visão geral", "Histórico").
- **Título de cartão** (Manrope 800, 17px): cabeçalhos de cartão e de janela, sempre o mesmo tamanho.
- **Corpo** (Manrope 400, 15px, altura de linha 1,5): texto corrido e controles.
- **Apoio** (Manrope 400 a 500, 13 a 14px, cor apagada): subtítulos, notas e explicações.
- **Assinatura** (Manrope 500, 13px, 0,18em; 0,22em na abertura, em minúsculas): "seu treino diário" embaixo do logotipo.
- **Rótulo** (Manrope 600 a 700, 13px; 11px só nas abas da barra de baixo): metadados, legendas, cabeçalhos de tabela e dias da semana. Nada de 12,5px.
- **Etiqueta** (Manrope 800, 12px, 0,06em, caixa alta): sobretítulos de grupo ("Composição", "Recentes", "Recorde novo"), sempre com o mesmo desenho. Os cabeçalhos das seções da Conta usam o mesmo traço em 13px, porque são botões.
- **Números:** toda Barlow de número usa entrelinha 1,1 e algarismos de largura fixa (`tabular-nums`), para não dançar em tabelas, cartões e placares.
- **Medida de leitura:** textos de apoio (`.sub`, `.note`) param em 68 caracteres por linha e usam entrelinha 1,55.

### Named Rules
**A Regra do Placar.** Barlow Condensed é para números e para o logotipo. Nunca para parágrafo, botão ou título de texto.

**A Regra das Duas Famílias.** Nenhuma terceira fonte entra, nem em peça de marca.

## Layout

O app é uma coluna única pensada para o celular. O conteúdo fica num contêiner de até 980px, centralizado, com respiro lateral de 18px. A barra de navegação flutua a 12px das bordas e do fundo, respeita a área segura do iPhone e tem no máximo 640px. Por isso o conteúdo reserva cerca de 150px embaixo.

O cabeçalho (carinha, logotipo e assinatura à esquerda; tema e avatar à direita) gruda no topo com vidro e encolhe ao rolar. A tela inicial empilha: saudação, cartão herói com o número e a semana em sete bolinhas, cartão do Meu ciclo (quando se aplica) e os indicadores em grade automática (mínimo de 150px por coluna, espaço de 12px).

O ritmo de espaço é miúdo e regular: 4, 6, 8, 10, 12 e 14px dentro dos componentes, 18px de respiro lateral e 34px antes de cada título de seção. Nos aparelhos com recorte na lateral, o respiro aumenta para respeitar a área segura.

**Pontos de quebra** (celular primeiro):
- **Até 359px:** a carinha do cabeçalho vai para 44px e a assinatura fica mais justa, para caber ao lado dos botões.
- **Até 380px:** indicadores, métricas do Corpo e totais em grade de duas colunas; números de cartão fluidos (22 a 30px); lista de grupos musculares mais compacta.
- **Até 520px:** formulários lado a lado empilham.
- **Até 640px:** grades de duas colunas viram uma.
- **A partir de 641px (tablet e desktop):** indicadores da tela inicial em três colunas.
- **A partir de 768px:** no cartão herói, a semana em bolinhas fica ao lado do número, e não embaixo.
- **A partir de 1024px (desktop):** a barra de baixo vira uma barra lateral fixa de 216px à esquerda, com "Registrar treino" (pílula em degradê, com texto) no topo e as quatro abas em lista (ícone + nome). O conteúdo ocupa o resto, até 1180px, centralizado. No login não há barra.
- **A partir de 1200px:** o Resumo vira duas colunas. À esquerda (400px), o placar fica parado ao rolar: saudação, número, semana, Meu ciclo e indicadores em duas colunas. À direita, os dados: quilômetros, carga em alta, frequência e intensidade. Os gráficos lado a lado só voltam a partir de 1440px.
- **Tablet (641 a 1023px):** mantém a barra de baixo, que fica no alcance do polegar.
- **Celular deitado ou tela baixa (até 520px de altura):** cabeçalho já compacto, barra de baixo mais fina e rodapé do registro de treino numa linha só.

**A Regra da Largura Que Encolhe.** Nenhuma grade ou gráfico tem largura mínima maior que a tela: colunas usam `minmax(0, 1fr)` e gráficos acompanham o contêiner. A página nunca rola para o lado.

**A Regra do Dedo.** Em telas de toque, todo controle tem área de toque de pelo menos 44px, mesmo que o desenho seja menor. Chips e links ganham área invisível; o desenho não muda. Janelas de registro sobem de baixo, ocupam a tela e têm o rodapé de ações fixo. Abas trocam com deslize lateral, e dá para arrastar entre elas.

## Elevation & Depth

A profundidade vem do vidro, não da sombra. Cada cartão é translúcido, desfoca o que está atrás (22 a 24px, saturação 150%) e tem um filete de luz no topo interno. As manchas de cor fixas atrás do conteúdo são o que o vidro desfoca, e é isso que faz a tela parecer viva. As sombras são largas e suaves, só para separar camadas. Os botões de ação ganham um brilho colorido do próprio degradê.

### Shadow Vocabulary
- **Vidro** (`inset 0 1px 0 rgba(255,255,255,.07), 0 18px 40px rgba(0,0,0,.22)`; no claro `inset 0 1px 0 #fff, 0 14px 32px rgba(60,40,110,.08)`): todo cartão, painel, lista e tabela.
- **Brilho de ação** (`0 10px 24px` do coral a 32%, mais filete branco a 35% no topo interno): botão principal, FINALIZAR TREINO e dia treinado.
- **Botão +** (`0 14px 30px` do coral a 45%): o botão de registrar, que flutua 22px acima da barra.
- **Barra flutuante** (`inset 0 1px 0 rgba(255,255,255,.08), 0 18px 44px rgba(0,0,0,.35)`; no claro, sombra arroxeada a 16%).
- **Janela** (`0 30px 80px rgba(0,0,0,.4)`, com o fundo de trás escurecido e desfocado em 6px).

### Named Rules
**A Regra do Vidro.** Toda superfície de conteúdo é vidro: preenchimento translúcido, borda de luz e desfoque. Cartão sólido é exceção, reservada a toast e avatar.

**A Regra das Manchas.** Três manchas borradas (laranja, roxo, rosa) ficam fixas atrás de tudo, com opacidade de 20 a 30%. Elas existem para o vidro ter o que desfocar, nunca como ilustração.

## Shapes

Tudo é macio e arredondado, com uma escala clara: campo 14px, item de lista 16px, bloco e cartão secundário 20px, cartão 22px, painel 26px e janela 28px. Botões, chips, segmentos, buscas, toasts e chaves são pílulas completas. A barra de baixo tem 36px. As únicas linhas retas e duras do sistema são as faixas de zona de FC e as marcas de legenda (2 a 4px).

O contraste de forma é intencional: a interface é geométrica e redonda, e a marca é irregular. A carinha e o logotipo vêm do traço de giz na lousa, com falhas e rebarbas. Os ícones da interface são de linha arredondada, no mesmo peso dos ícones de gravidez do Meu ciclo.

## Components

### Buttons
Pílulas táteis e confiantes, com o verbo sempre no rótulo.
- **Shape:** pílula completa (999px), com 10px por 18px de respiro; o pequeno tem 7px por 14px.
- **Primary:** degradê laranja → coral a 135°, texto em tinta escura de laranja, ExtraBold, com brilho colorido embaixo. Um por tela.
- **Secondary:** vidro com borda de linha e texto normal, peso 700.
- **Ghost:** transparente com borda de linha ("Ainda não tenho conta").
- **Danger:** borda e fundo em vermelho a 8 a 40%, texto vermelho ("Apagar dados", "Excluir").
- **FINALIZAR TREINO:** o mesmo degradê, em Manrope 800 15px, caixa alta espaçada (0,08em) e cantos de 20px, preso no rodapé da janela de treino. O rodapé é uma linha só: "Continuar depois" (ghost) à esquerda e FINALIZAR à direita. Cancelar fica no ‹ do topo, longe do polegar.
- **Foco:** contorno roxo de 2px com 2px de afastamento.

### Chips
- **Style:** pílula em vidro com borda de linha, 7px por 14px, peso 600.
- **State:** selecionado inverte as cores (fundo no tom do texto, texto no tom do fundo). Segmentos ficam numa trilha em pílula, e o ativo ganha o degradê com brilho.

### Cards / Containers
- **Corner Style:** cartão de indicador 22px, painel 26px, cartão herói 28px.
- **Background:** vidro (ver Elevation). Cartões especiais misturam cor no vidro: o primeiro total de km recebe laranja a 22%, o relatório recebe roxo a 14% e o ciclo, coral rosado mais roxo.
- **Border:** 1px de borda de vidro. Estados de aviso tingem a borda: carga a 40% para treino em andamento, laranja a 45% para rascunho e vermelho a 45% para vencido.
- **Internal Padding:** 14 a 16px nos indicadores, 18px nos painéis, 20px no herói.

### Inputs / Fields
- **Style:** vidro com borda de linha, cantos de 14px e texto de 16px (evita o zoom do iPhone). Busca e seletores grandes de data e duração usam 16px ou pílula.
- **Focus:** contorno roxo de 2px.
- **Senha:** botão de olho dentro do campo, à direita.
- **Tamanho:** todo campo, seletor e caixa de texto tem pelo menos 16px, para o iPhone não dar zoom ao tocar.
- **Erro:** aparece junto do campo, nunca só num aviso que some. O campo (ou o bloco) ganha contorno vermelho de 2px, a mensagem fica logo abaixo em vermelho 14px/600, a tela rola até ele e o foco vai para o campo. O erro some quando a pessoa mexe no campo. O toast fica para sucesso e para o que não tem campo (conexão, por exemplo).

### Navigation
- **Style:** barra de abas flutuante, de vidro escuro (folha a 86%), com cantos de 36px, presa a 12px das bordas. Tem cinco posições: Resumo, Exercícios, o botão + no centro, Corpo e Sessões.
- **Abas:** ícone de linha sobre rótulo de 11px, cinza quando inativa. A ativa fica laranja, com fundo laranja a 14% em pílula de 24px.
- **Botão +:** círculo de 62px com o degradê laranja → coral → roxo, borda branca a 35%, subindo 22px acima da barra. É a ação de registrar treino e só ela. No desktop vira a pílula "Registrar treino" no topo da barra lateral, no degradê de ação (laranja → coral) com texto em tinta escura, e a tecla N abre o mesmo registro (fora de campos de texto e janelas).

### Semana em bolinhas
Sete círculos (D S T Q Q S S) de 32 a 42px conforme a largura da tela, no cartão herói. Dia treinado: degradê com ícone branco e brilho. Hoje: anel roxo de 2px, com a letra em roxo claro. Dia passado sem treino é descanso, não falta: contorno fino com um ponto neutro no centro, nunca ✕. Dia futuro: contorno tracejado a 55%.

### Cartão Meu ciclo
Vidro tingido de coral rosado (20%) indo para roxo (12%), com cantos de 26px. Fechado, mostra só o topo ("Faltam X dias", nível e a seta ▾); tocar no topo abre o resto. O número grande é Barlow Condensed coral rosado. O aviso do ginecologista aparece em todas as telas do módulo.

### Adicionar treino
Data e horário no topo e, abaixo, quatro cartões de mesmo peso em grade 2×2: Crossfit & Hyrox, Musculação, Outros treinos e Colar texto. Nenhum cartão ganha destaque sobre os outros (cada pessoa registra do seu jeito). Os cartões usam Manrope; "Colar texto" já tenta colar o que está copiado.

### Editor de Crossfit & Hyrox
O WOD abre aberto; Warm up e Skill começam recolhidos numa linha só ("+ anotar"). Um bloco aberto pode voltar a recolher com "não teve". O formato do bloco é uma fileira de chips (AMRAP, EMOM, For Time) e "Mais formatos" revela os outros. A categoria vem de uma lista (as já usadas, "Outros" e "+ Nova categoria…"); o nome do treino ("Fran", "Death Burpee") é um campo separado e opcional, que aparece no histórico como "Categoria · Nome". Editar um treino já concluído abre o mesmo editor, com um único botão "SALVAR ALTERAÇÕES".

### Fim do treino
O pico da jornada. Ao finalizar um treino novo (Crossfit, Musculação, Outros treinos, corrida ou texto colado com uma sessão), abre uma folha central de até 440px com brilho laranja no topo. A carinha entra com um "pop" (0,7s com desaceleração suave; some com redução de movimento), seguida de "Tá pago, [nome]!" em Manrope 800 26px e uma frase do amigo zoeiro. Até três números em Barlow Condensed (exercícios, duração, kcal; na corrida, km, ritmo e duração), o resultado do WOD, os recordes novos (carga maior que qualquer sessão anterior, corrida mais longa, melhor ritmo) num cartão tingido de laranja e a semana em bolinhas. Ações: "Ver treino" (ghost) e "Fechar" (degradê). Editar um treino já concluído não abre a folha; mostra só "Alterações salvas.".

**A Regra do Placar Final.** Todo treino concluído termina com o nome da pessoa e o número que ela fez. Nunca só um aviso que some.

### Página do exercício
O herói é o recorde: carga máxima em Barlow Condensed 64px com "kg" pequeno, a data embaixo e, ao lado, quanto subiu desde a primeira vez (em verde). Sem carga, o herói é a melhor sessão (reps, distância ou tempo). "‹ Todos os exercícios" é um link discreto, nunca o botão em degradê. O gráfico tem os dois eixos nomeados: carga (kg) e volume (kg). Tabelas que rolam para o lado mostram uma sombra na borda.

### Mapa corporal
Contorno fino em cinza (o texto a 55%) e sem tom de pele. Músculo sem trabalho fica quase transparente; leve, cinza claro; médio, pêssego (laranja com branco); forte (metade do máximo ou mais), laranja cheio. A lista ao lado mostra só os grupos trabalhados, até 6, com "Ver todos os grupos" para o resto.

### Textos de apoio
Explicações com mais de uma frase mostram só a primeira; o resto abre em "mais". O número e o gráfico vêm antes da explicação.

### Movimento
Só `transform` e opacidade se movem; desaceleração natural (`cubic-bezier(.16,1,.3,1)`), nunca quique.
- **Momento principal:** na tela de conclusão, depois da carinha, o dia de hoje acende na semana (cresce de 55% com leve passada de 108%, 0,7s).
- **Entrada de conteúdo:** ao trocar de aba ou abrir/fechar um exercício, só os blocos visíveis sobem 10px e aparecem em 0,42s, com 45ms entre eles e no máximo 6 passos. Filtros e chips não reanimam a tela. O conteúdo nunca fica escondido se o script falhar.
- **Toque:** botões, chips, cartões e opções encolhem 3% em 140ms; linhas e sessões, 1%; os ícones da barra, 12%.
- **Hover (só onde há mouse):** botões principais ganham brilho, cartões de opção sobem 2px, o + gira 90°.
- **Transições:** janelas aparecem com fade e leve aproximação (0,26s), seções que abrem revelam o conteúdo (0,28s), o aviso de baixo sobe, a troca de tema faz fade de cor.
- **Redução de movimento:** nada se desloca nem anima; ficam os fades curtos de cor e opacidade que confirmam o toque.

- **Ignição do painel (só no Resumo, uma vez por abertura do app):** começa no instante em que a abertura se dissolve e dura cerca de 1,4s, como o painel de um carro na partida.
  - As sete luzes da semana acendem uma a uma de D a S (no degradê da marca), seguram juntas e as que não são reais apagam, sobrando só o estado verdadeiro.
  - Os números do placar e dos indicadores rolam num tambor de odômetro até o valor real: o placar primeiro, depois os indicadores, um atrás do outro. O dígito da direita dá uma volta a mais. O texto real fica no lugar o tempo todo (transparente) e volta intacto quando o último dígito assenta.
  - Um traço de 1px no laranja percorre uma volta na borda do placar e some. Sem brilho, sem sombra.
  - Não roda ao voltar do segundo plano, ao trocar de aba, nem com redução de movimento (tudo aparece pronto). Sem `@property`, o traço da borda não aparece; o resto funciona.

**A Regra do Placar Que Acende.** Há só dois movimentos com personalidade: a ignição do painel ao abrir o app e o dia que acende ao terminar o treino. O resto só confirma o toque ou explica a mudança, e nunca faz a pessoa esperar.

### Detalhes
O app percebe o esforço com precisão, como o aceno de um coach, sem festa.
- **Saudação:** "Bom treino, {nome}." vira "Tá pago hoje, {nome}." quando já existe um treino concluído ou uma corrida no dia.
- **Placar que gira:** quando o total de treinos aumentou desde a última visita, o número sobe do valor antigo ao novo em 0,65s (dígitos de largura fixa). Só acontece nesse caso, nunca em diferença maior que 20 e nunca com redução de movimento.
- **Selo PR:** a linha da sessão ganha uma pílula "PR" (Manrope 800 11px, tom de texto do laranja sobre laranja a 14%) quando alguma carga daquele treino passou o melhor anterior do exercício.
- **Toque físico:** ao abrir a tela de conclusão, uma vibração de 12ms (só onde o aparelho permite e sem redução de movimento).
- **Acabamento do navegador:** seleção de texto, cursor de digitação, caixas e rádios no laranja da marca; barra de rolagem fina no tom do texto; o título da aba acompanha a tela ("Sessões · WÓD'IO").
- **Voz:** ao copiar um treino, "Copiado. É só colar onde quiser."

### Confirmação e desfazer
Nada de caixa de confirmação do navegador. A confirmação é uma folha central de até 420px: título em pergunta (Manrope 800 20px), uma frase dizendo exatamente o que se perde e dois botões lado a lado, "Cancelar" (ghost, recebe o foco) e a ação com o verbo do que acontece ("Apagar dados do ciclo", "Restaurar", "Descartar"). Ação destrutiva usa o vermelho escurecido sólido com texto branco; as outras, o degradê. Excluir uma sessão não pergunta: apaga e mostra um aviso com "Desfazer" por 7 segundos.

**A Regra do Botão Que Diz o Que Faz.** Um botão destrutivo nomeia o que apaga ("Apagar dados do ciclo", não "Apagar dados") e nunca fica com o mesmo peso dos botões vizinhos.

### Seletor de exercício
Sem busca, mostra "Recentes" (os 6 últimos exercícios usados) acima de "Todos". No celular o teclado não abre sozinho, para a lista ficar visível. Ao escolher um exercício que já foi feito, um cartão "Da última vez · data · recorde" mostra o que foi feito em Barlow e oferece "Repetir", que preenche os campos de uma vez.

No Crossfit, o modo do exercício tem quatro opções em grade 2×2: **Padrão | Progressão / Alternado | Unilateral**. Progressão troca os campos de carga e repetições por linhas "1ª, 2ª, 3ª…" com Carga (kg) e Repetições lado a lado, como as séries da musculação. "+ série" repete os valores da linha anterior e põe o cursor na carga nova. O item salva no mesmo formato da musculação (`ladder`), aparece como "10×40 kg · 8×45 kg · 5×52 kg" e conta para recorde, volume e detalhe do exercício.

### Compartilhar
Na tela de conclusão ("Compartilhar", acima de Ver treino/Fechar) e em toda sessão aberta. A janela mostra a prévia e permite escolher:
- **Formato:** Stories 9:16 (1080×1920) ou Feed 3:4 (1080×1440).
- **Fundo:** o fundo do app (marinho com os brilhos laranja, roxo e coral) ou uma foto da pessoa, com um véu escuro que começa logo acima do bloco de informações.
- **Enquadrar:** com foto, a própria prévia vira a área de recorte, já no formato escolhido. Arrastar posiciona; pinça, rodinha ou o controle Zoom (1× a 4×) aproximam; as setas do teclado também movem. A foto sempre cobre o quadro inteiro, sem sobrar borda.
- **O que aparece:** chips com kcal, tempo, exercícios, FC média (desligada por padrão), WOD, recorde e semana, conforme o treino tiver.

O card leva no topo o selo do app, como o do relógio: o ícone (carinha laranja num quadrado marinho de cantos arredondados, contorno branco sutil e sombra leve) ao lado do WÓD'IO com o apóstrofo turquesa. Embaixo vêm a data e o tipo, "Tá pago." (Manrope 800), o número principal em Barlow 240px, até três números secundários, o WOD, o recorde (caixa laranja com o ganho em verde) e a semana em bolinhas. Não leva nome nem foto de perfil. A imagem é montada no aparelho, e a foto não é enviada nem salva. Onde o celular permite, abre a folha de compartilhar do sistema; nos outros, baixa o PNG.

### Treino de musculação
Acima da lista de exercícios fica uma linha com a contagem ("11 exercícios", rótulo 13px em tom suave) e "+ exercício" à direita, além do botão no fim da lista. O exercício novo sempre entra no fim, para manter a ordem, e a tela rola até ele (sem animação com redução de movimento).

### Manual do usuário
`manual.html`, na raiz, é publicado junto com o app. Dá para mandar o link como apresentação, e ele também abre pela Conta, no cartão **Como usar o WÓD'IO** (ícone de livro laranja, logo abaixo do cartão do perfil). O cartão abre numa aba nova porque o app instalado no iPhone não tem botão de voltar.
- **Visual:** o mesmo mundo do app, com fundo marinho e os brilhos laranja e roxo, Manrope no texto, Barlow só nos números e o apóstrofo turquesa.
- **Navegação:** menu lateral fixo em acordeão, com 5 grupos (Começando, Registrar, Depois do treino, Evolução, Conta) e as 17 seções numeradas. Só um grupo fica aberto por vez: abrir um fecha o outro, e a rolagem abre sozinha o grupo da seção que está na tela, que fica destacada. No celular, o menu abre por cima, a partir do botão "Menu" no topo.
- **Strava:** aparece no manual como **Beta teste**, com o aviso "Apenas 10 vagas disponíveis no total".
- **Telas:** prints reais do app em mockups de celular. Mostram John (escuro) e Mary (claro), com os totais do Davi.
- **Capa:** os dois temas sobrepostos (John escuro na frente, Mary clara atrás, inclinada 4°), com a legenda sobre o botão da lua/sol.
- **Mockup:** tem uma faixa de status de 24px no topo da tela, para o recorte da câmera não cobrir o app.
- **Seções:**
  - Corpo mostra os mapas masculino e feminino;
  - Meu ciclo cobre relação sexual, gravidez e como desligar o acompanhamento.
- **Para atualizar os prints:** use o ambiente de teste com `?john` ou `?mary`.

### Ações da sessão
Numa linha só, à direita: **Compartilhar** (pílula ghost) e **Editar** (pílula), as duas com ícone de traço 18px antes do texto, e um botão **⋯** (44px). Os ⋯ abrem um menu flutuante (fundo elevado, cantos de 18px, sombra suave, abre para cima com um fade curto) com ícone e nome em cada item: Anexar print (só na corrida), Copiar treino e Exportar .txt. Depois de uma linha fina vem **Excluir** em vermelho, sempre por último e longe do Editar. O menu fecha com Esc (o foco volta para os ⋯), ao tocar fora, ao rolar e ao escolher um item. As setas do teclado navegam entre os itens.

**A Regra do Ícone Com Nome.** Toda ação leva ícone e nome juntos. O único ícone sozinho é o ⋯, que tem nome para o leitor de tela ("Mais ações"). Copiar e exportar fazem coisas parecidas e, sem nome, se confundem.

### Outros treinos
Os tipos aparecem ordenados pelo uso, quatro de cada vez, com "Mais atividades" (chip tracejado) para o resto; o tipo já vem marcado com o último usado. Dentro dos editores, "Anexar print" e "Sincronizar com o Strava" são ações de apoio (vidro e contorno laranja do Strava), e o único destaque é o FINALIZAR.

### Nova avaliação
No topo, uma caixa em vidro com "Ler foto do laudo" (botão secundário) e uma linha explicando que a foto é lida no aparelho e não fica salva. O app lê o laudo (InBody, Omron, Tanita, Xiaomi, relatório de nutricionista), preenche os campos e a data, e marca cada campo preenchido com borda laranja e fundo levemente tingido; a marca some quando a pessoa edita o campo. Valores de referência ("peso ideal", "alvo", "controle") são ignorados. Nada é salvo sem a pessoa tocar em "Salvar avaliação".

### Janelas e folhas
Folha marinha com cantos de 28px e o fundo de trás escurecido e desfocado. O registro de treino sobe de baixo como painel de tela cheia, com cantos de 28px só no topo e rodapé de ações em vidro. Toasts são pílulas sólidas no marinho elevado, com sombra suave.

### Abertura
A carinha se desenha em 3,7s: primeiro a boca, depois os olhos e por fim o círculo em giro. Em seguida o logotipo sobe e a assinatura desce. Com redução de movimento ativada, tudo aparece pronto em 0,6s.

## Do's and Don'ts

### Do:
- **Do** escrever WÓD'IO com acento e com o apóstrofo turquesa (`turquesa`), em qualquer fundo.
- **Do** usar o degradê laranja → coral só na ação principal da tela, na chave ligada, no segmento ativo e no dia treinado.
- **Do** colocar todo conteúdo em vidro (preenchimento translúcido, borda de luz, desfoque de 22px) sobre as manchas de cor.
- **Do** dar a cada tela um número herói em Barlow Condensed e deixar o texto em Manrope.
- **Do** usar pílula em todo controle e manter a escala de cantos 14 / 16 / 20 / 22 / 26 / 28px.
- **Do** usar o coral rosado apenas no Meu ciclo, sempre com o aviso do ginecologista.
- **Do** respeitar a redução de movimento: animações e transições somem quando ela está ativa.
- **Do** manter alvos de toque com 44px ou mais.
- **Do** garantir contraste de pelo menos 4,5:1 no texto, nos dois temas.

### Don't:
- **Don't** usar foto de pessoa. Use ilustração: linha arredondada na interface e traço de giz nas peças de marca.
- **Don't** limpar, vetorizar em geometria, esticar ou recolorir fora do padrão o traço de giz da carinha.
- **Don't** usar Barlow Condensed em parágrafo, botão, nome de pessoa ou palavra solta (nível, dia da semana), nem itálico fora do logotipo.
- **Don't** usar cores das zonas de FC fora de gráficos e faixas de dado.
- **Don't** colocar mais de um botão de destaque por tela.
- **Don't** usar fundo branco puro ou preto puro. A base é marinho `#0E111A` ou lavanda `#F4F2FA`.
- **Don't** introduzir uma terceira família tipográfica.

## Divergências conhecidas

Restos do visual anterior que ainda estão no código. O brandbook e este documento mandam.

- **Camada antiga no CSS:** a primeira metade de `assets/css/styles.css` define o visual antigo, e os blocos "VISUAL NOVO" e seguintes sobrescrevem por cima. Funciona, mas valores antigos (cantos de 8 a 12px, cores `#121722`/`#F28C38` nos tokens base) continuam no arquivo e o detector os aponta. Limpar quando houver tempo, sem mudar o resultado na tela.
- **Zona anaeróbica = laranja da marca:** `--z4` é `#FF8A3D`, igual ao laranja da marca, o que contraria a Regra do Dado Separado. As calorias também usam essa cor.
- **Botão "Conectar com Strava" (Conta):** branco sobre `#FC4C02` (3,3:1), cor oficial do Strava. Dentro dos editores, o Strava já é contorno com texto em tom de leitura.

Resolvido em 14/10/2026: abertura e cor da barra do navegador com o marinho e o laranja oficiais; contraste do tema claro; fonte Barlow comum removida; Arial do botão Bora; faixa lateral grossa do aviso do Strava.
