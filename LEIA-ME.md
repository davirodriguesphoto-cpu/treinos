# WÓD'IO · LEIA-ME (atualizado em 23/10/2026)

Este é o resumo de tudo que foi feito no WÓD'IO nesta rodada de trabalho no Claude Code (14 e 15/10/2026). Ele serve para quem pegar o projeto em seguida, seja o Claude Chat ou outra pessoa, saber em que pé tudo está.

> **Ainda não foi publicado.** Nada daqui está no ar. Ao publicar, suba **a pasta `wodio/` inteira**, não só o `index.html`: CSS, JS e ícones agora ficam em arquivos separados.

---

## 1. O que tem neste zip

```
wodio/
├── index.html              ← arquivo principal (marcação, splash e tema inicial)
├── manifest.webmanifest    ← manifesto do PWA
├── LEIA-ME.md              ← este arquivo
├── README.md               ← como rodar localmente
├── PRODUCT.md              ← quem usa, para quê, tom e princípios do produto
├── DESIGN.md               ← sistema visual completo (cores, tipos, componentes, movimento, regras)
└── assets/
    ├── css/styles.css      ← todo o CSS
    ├── js/parsers.js       ← leitura de texto de treino, relógio, grupos musculares e laudo da balança
    ├── js/app.js           ← o app (Supabase, telas, Strava, push…)
    └── icons/              ← favicons, apple-touch-icon, ícones do PWA, vetor original
```

- `parsers.js` precisa carregar antes de `app.js`, e essa ordem já está no `index.html`.
- **Dependências de CDN:**
  - sempre: Google Fonts (Barlow Condensed e Manrope), Chart.js 4.4.1 e Supabase JS 2.45.4;
  - só quando a pessoa usa: Tesseract.js 5.1.1 (leitura de foto) e PDF.js 3.11.174.
- Ficaram de fora do zip os arquivos de trabalho da ferramenta de design (`.impeccable/`): rascunhos de opções rejeitadas e snapshots de crítica. O app não precisa deles.

**Para rodar no computador:** abra um terminal dentro de `wodio/` e rode `python -m http.server 5173`. Depois acesse http://localhost:5173.

---

## 2. Pendências

- O `sw.js` (service worker) já está no GitHub e nesta pasta desde 21/10, então as notificações push voltam a funcionar.
- O botão "Conectar" do Strava mantém a cor da marca Strava, por isso o contraste dele fica abaixo do ideal no tema claro. Foi uma exceção consciente.
- Nada foi testado com a conta real: todos os testes usaram um ambiente local com banco falso. Depois de publicar, vale um teste rápido logado, principalmente de:
  - colar texto;
  - editar um treino;
  - foto do laudo;
  - excluir e desfazer.

---

## 3. O que foi feito, em ordem

### 3.1 Organização (sem mudar nada visível)
O `index.html` único, com tudo dentro, foi separado em `index.html`, `styles.css`, `parsers.js`, `app.js` e a pasta de ícones. Os caminhos foram corrigidos. Design, textos e funções ficaram iguais.

### 3.2 Documentação de produto e design
- **PRODUCT.md** registra:
  - o objetivo de virar produto público;
  - Zion como homenagem;
  - os usos (Crossfit, Hyrox, musculação, corrida, ciclo, corpo).
- **DESIGN.md** foi escrito a partir do brandbook e do histórico do projeto. Ideia central: "giz anotado durante o treino, coach anotando, placar no fim do dia". Quando há conflito, o brandbook manda. Pontos principais:
  - Barlow Condensed só para números e logo; Manrope para todo o resto;
  - apóstrofo turquesa sempre;
  - nenhuma foto;
  - sem cartões gigantes em degradê.

### 3.3 Responsivo (celular primeiro, depois tablet e desktop)
- Corrigidos os estouros de largura até 320px.
- **Tablet e desktop:**
  - a partir de 1024px, a barra de baixo vira uma barra lateral com o botão "Registrar treino";
  - a partir de 1200px, o Resumo ganha duas colunas;
  - as larguras de leitura são limitadas.

### 3.4 Crítica de UX e as 6 etapas (nota 23/40 → 25/40)
1. **Registro de treino:**
   - "Colar do WhatsApp" virou **"Colar texto"**, com botão de colar da área de transferência;
   - editor com chips de formato (AMRAP, EMOM, For time, Tabata…) e blocos recolhíveis;
   - categoria "Outros"/"Nova", com o nome do treino;
   - erros mostrados no próprio campo.
2. **Fim do treino e voz:** ao finalizar abre a folha de conclusão. Ela mostra:
   - recordes do dia;
   - dias treinados na semana;
   - a semana com o dia de hoje acendendo;
   - frases curtas no tom da marca.
3. **Segurança e dados:**
   - as caixas de confirmação do navegador foram trocadas por uma folha própria ("Cancelar" + ação com verbo claro, vermelho só para ações destrutivas);
   - excluir uma sessão não pergunta: apaga e oferece **"Desfazer"** por 7 segundos.
4. **Telas de leitura:**
   - semana com bolinhas, e descanso aparece neutro, sem ✕;
   - resultado do treino visível na linha da sessão;
   - explicações longas recolhidas em "mais";
   - tabelas mostram quando dá para rolar.
5. **Acessibilidade e contraste:**
   - tons de texto próprios para o tema claro, de modo que tudo passa no contraste nos dois temas (exceto o botão do Strava);
   - títulos de janela corretos e foco visível.
6. **Tablet e desktop:** atalho **N** para registrar treino, além do que está no item 3.3.

### 3.5 Pedidos diretos (o que foi aprovado e o que foi rejeitado)
- O cartão gigante laranja de "Colar texto" foi **rejeitado**. Voltou a grade original de **4 cartões iguais** em "Adicionar treino", só modernizada.
- As três novas composições para a tela inicial foram **rejeitadas** ("o atual tá mais bonito"). A composição atual é a aprovada e não deve ser trocada.

### 3.6 Correções da segunda crítica
- **Bug grave corrigido:** editar um treino colado apagava o resultado (ex.: "21-15-9"). Agora:
  - o resultado guardado é lido de volta para os campos;
  - o que não se encaixa fica em "Resultado anotado";
  - foi testado editando três vezes seguidas sem perda.
- A hora escolhida vale para o treino colado, e treino sem categoria continua sem categoria.
- **Seletor de exercício:**
  - mostra "Recentes" acima de "Todos";
  - tem o cartão "Da última vez" com o botão **Repetir**, que preenche tudo.
- "Outros treinos" ficam ordenados pelo uso, quatro de cada vez, com "Mais atividades" para o resto.
- A leitura de esquemas como **21-15-9** soma as repetições de cada exercício.

### 3.7 Avaliação corporal por foto do laudo
- Em "Nova avaliação", o botão **"Ler foto do laudo"** lê a foto no próprio aparelho, e a imagem não é salva.
- A leitura é feita com Tesseract em português. Funciona com laudos de InBody, Omron, Tanita, Xiaomi e relatórios de nutricionista.
- Campos lidos: peso, % de gordura, gordura em kg, músculo (% e kg), IMC, gordura visceral, metabolismo basal, RCQ, idade corporal e a data.
- Valores de referência ("peso ideal", "alvo", "controle") são ignorados.
- Cada campo preenchido fica marcado em laranja até a pessoa mexer nele. Nada é salvo sem tocar em "Salvar avaliação".

### 3.8 Tipografia (seguindo o brandbook)
- Barlow Condensed ficou restrita a números e logo.
- Foi criada uma escala fixa de papéis: título 17px, rótulo 13px, etiqueta 12px com espaçamento de .06em.
- Hierarquia, entrelinhas e ritmo foram ajustados sem trocar fontes nem a estrutura.

### 3.9 Movimento (animações sutis)
- Só posição e opacidade se movem, com desaceleração natural e sem quique.
- Ao trocar de aba, os blocos visíveis sobem 10px em sequência curta.
- Toques encolhem levemente botões e cartões.
- No mouse, os botões ganham brilho e o + gira.
- Janelas, toasts e a troca de tema têm transições suaves.
- **Abertura:** a carinha se desenha só quando o app abre do zero, não quando volta do segundo plano. Tocar na tela pula a abertura.
- Com "reduzir movimento" ligado no aparelho, nada se desloca; ficam só fades curtos.

### 3.10 Detalhes (delight)
- A saudação vira **"Tá pago hoje, {nome}."** quando já existe treino ou corrida no dia.
- O placar de treinos **sobe do número antigo ao novo** quando aumentou desde a última visita.
- Selo **PR** na linha da sessão quando alguma carga bateu o recorde anterior do exercício.
- Vibração curtinha ao concluir o treino (Android).
- Seleção de texto, cursor, caixas de marcar e barra de rolagem nas cores da marca.
- O título da aba do navegador acompanha a tela ("Sessões · WÓD'IO").
- Ao copiar um treino: "Copiado. É só colar onde quiser."

### 3.11 Overdrive: ignição do painel (só no Resumo)
Este é o momento principal da tela inicial. Uma vez por abertura do app, logo que a abertura some, o Resumo "dá a partida" como o painel de um carro, em cerca de 1,4s:
1. As 7 luzes da semana acendem de D a S, seguram juntas e as que não são reais apagam.
2. O placar e os indicadores rolam num **tambor de odômetro** até o valor real. O texto verdadeiro fica no lugar o tempo todo, então o leitor de tela não se perde.
3. Um traço de 1px em laranja dá uma volta na borda do placar, sem brilho.

A ignição não roda ao voltar do segundo plano, ao trocar de aba, nem com "reduzir movimento". Em navegadores antigos, o traço da borda não aparece e o resto funciona.

---

### 3.12 Progressão de carga e compartilhar (23/10)
- **Progressão:** no seletor de exercício do Crossfit, os modos viraram uma grade 2×2: **Padrão | Progressão / Alternado | Unilateral**.
  - Progressão abre linhas de **Carga × Repetições**, como as séries da musculação.
  - "+ série" repete a linha anterior, e é só ajustar.
  - No treino, aparece como "10×40 kg · 8×45 kg · 5×52 kg" e conta para recorde, volume e detalhe do exercício.
- **Compartilhar:** botão na tela de conclusão e em toda sessão aberta.
  - **Formato:** Stories 9:16 (1080×1920) ou Feed 3:4 (1080×1440).
  - **Fundo:** o fundo do app ou uma foto sua.
  - **O que entra:** você escolhe entre kcal, tempo, exercícios, FC média, WOD, recorde e semana.
  - O card leva o logo no topo, a data, "Tá pago." e os números. Não leva nome nem foto de perfil.
  - A imagem é montada no aparelho, e a foto não é enviada nem salva.
  - No celular, abre a folha de compartilhar (WhatsApp, Instagram…). No computador, baixa o PNG.

## 4. Regras que não devem ser quebradas

- Manter a identidade e a composição atual: ela foi aprovada.
- Usar Barlow Condensed só para números e logo, e Manrope para o resto.
- Apóstrofo turquesa sempre. Nada de fotos.
- Fundo escuro, laranja + turquesa, barra com o **+** no meio.
- Nada de cartões gigantes em degradê.
- Botões destrutivos dizem exatamente o que apagam.
- Há só dois movimentos com personalidade: a ignição ao abrir e o dia que acende ao concluir o treino.
- Todo efeito precisa ter alternativa para "reduzir movimento".

Os detalhes completos de cada componente estão no **DESIGN.md**.
