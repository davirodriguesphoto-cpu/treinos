// node tests/laudo-fitmass.test.js — trecho de laudo Fitmass (PDF) como o pdf.js entrega, sem dados pessoais
const assert=require('assert'); const {lerLaudo}=require('../assets/js/parsers.js');
const texto=`DATA DO EXAME
24/10/2026 · 08:38
GORDURA
24,9   %
MASSA
MUSCULAR
41,6   %
METAB. BASAL
1.329   kcal
IDADE FISIOLÓG ICA
36   anos
PE S O ATU A L
59,1   kg
Gordura
14,7   kg
IMC   kg/m²   24,3   NORMAL
Massa muscular   kg   24,6   NORMAL
Gordura corporal   kg   14,7   SAUDÁVEL
Nível de gordura visceral   nível   7   SAUDÁVEL
Peso
59,1   kg
Subcutânea   12,7   86%
Gordura interna   2,0   14%
Peso alvo   59,1 → meta 58,7 kg
Ajustar gordura   24,9% → meta 24,0%`;
assert.deepStrictEqual(lerLaudo(texto),{gorduraPct:24.9,basal:1329,idadeCorporal:36,gorduraKg:14.7,imc:24.3,musculoKg:24.6,visceral:7,peso:59.1,date:'2026-10-24',musculoPct:41.6});
console.log('ok');
