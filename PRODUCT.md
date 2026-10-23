# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Pessoas que treinam CrossFit, Hyrox, musculação e corrida e querem um histórico próprio da sua evolução. Hoje: um grupo de amigos que treinam juntos, por convite do Davi Rodrigues (criador e administrador). Direção confirmada: virar produto público, aberto para qualquer pessoa se cadastrar e assinar.

O uso acontece no celular, em todos estes momentos:

- **Logo após o treino**, ainda no box: registrar colando o texto do jeito que se manda no WhatsApp, ou anexando o print do relógio.
- **Durante o treino**: preencher séries e cargas e fechar com FINALIZAR TREINO.
- **Depois, com calma**: ver gráficos de carga, frequência, intensidade, corridas e corpo.
- **Periodicamente**: registrar avaliações de bioimpedância e medidas.

## Product Purpose

Registrar treinos, corridas e avaliações corporais com o mínimo de digitação e transformar isso em histórico e evolução legíveis. O sucesso é a pessoa registrar todo treino sem esforço e enxergar o próprio progresso.

## Positioning

O app aceita o treino do jeito que ele já existe na vida da pessoa, sem obrigar a preencher formulário: o texto colado do WhatsApp, o print do relógio (lido no próprio celular), o PDF ou a foto da folha do personal, a conversa exportada do WhatsApp e a importação automática do Strava. CrossFit/Hyrox, musculação e corrida ficam num só lugar.

## Operating Context

- PWA em pt-BR, usado principalmente no celular (instalável, tela cheia, área segura do iPhone).
- Relógios Xiaomi, Garmin, Samsung e Apple Watch, via Strava ou print.
- Treinos chegam por WhatsApp e por personal trainers (PDF/foto com Treino A, B, C…).
- Notificação diária "O chamado das 5h": uma frase diferente por dia, às 5h da manhã.
- Backup em arquivo .json que a pessoa guarda no Drive ou no WhatsApp; backups automáticos diários por 30 dias.

## Capabilities and Constraints

- Abas: Resumo, Exercícios, Corpo, Sessões. Mais Conta (perfil, Meu ciclo, segurança, dados, notificações, Membros, Strava, termos).
- Tipos de treino: Crossfit & Hyrox (warm up, skill e WOD), Musculação (Treino A, B, C…), Outros treinos (corrida, bike, aerobic dance…), Manual.
- Leitura de texto, OCR de foto (Tesseract.js) e PDF (PDF.js), tudo no próprio aparelho; prints e fotos não ficam salvos.
- Mapa corporal de frente e de costas com grupos musculares; bioimpedância, peso, composição e medidas.
- Meu ciclo: acompanhamento do ciclo menstrual para quem marca sexo feminino no perfil. Não é método contraceptivo nem diagnóstico.
- Dados no Supabase (login por e-mail e senha), com cache offline e fila de sincronização.
- Tema claro, escuro e automático.
- Treino só pode ter data passada, nunca futura.
- Stack atual: HTML/CSS/JS sem build, Chart.js e Supabase JS via CDN.
- **Em aberto:** com a abertura ao público, mudam o modelo de acesso (hoje só por convite), a mensalidade (hoje R$ 3,99/mês, por Pix ou cartão, sem fidelidade) e os termos de uso, que ainda descrevem o app como pessoal para um grupo de amigos.

## Brand Commitments

- Nome: WÓD'IO, com acento e apóstrofo. Assinatura: "seu treino diário".
- Marca: a carinha brava desenhada à mão (`assets/icons/favicon.svg`, `assets/icons/wodio-icon-vector.svg`).
- Voz: português brasileiro informal e direto, com humor de box ("o horário dos guerreiros", "uma cutucada pra treinar", "Leva 5 segundos").
- "Feito com 🧡 pro Zion" é uma homenagem a uma pessoa e fica.

## Evidence on Hand

- Não há depoimentos, números de usuários, métricas ou imprensa. Não inventar.
- Os termos de uso e privacidade existentes no app são a fonte sobre dados, direitos e saúde.

## Product Principles

1. **O treino entra do jeito que já existe.** Colar, fotografar, importar: digitar é o último recurso.
2. **Privado por padrão.** Cada pessoa só vê os próprios dados; o que é lido no aparelho fica no aparelho.
3. **Evolução visível.** Todo registro tem que virar algo que a pessoa enxerga no histórico.
4. **Rápido no box.** Registrar logo depois do treino, com uma mão e suado, sem fricção.
5. **Honesto sobre saúde.** Estimativas são informativas, nunca orientação médica.
