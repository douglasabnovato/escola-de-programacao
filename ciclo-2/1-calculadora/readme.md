🎬 Aula 14: Emerald Calc — Arquitetura de Estado e Interfaces de Alto Contraste
📚 Nível: Avançado (Módulo DOM) — Construindo Lógicas de Negócio

🟢 Conceito Chave: Máquina de Estados (State Machine) via Data-Attributes

🎯 Tema Central: Desenvolvimento de uma Calculadora Profissional com UX Emerald.

📅 Data: 19 de Março de 2026

🎯 Objetivo Cognitivo
Ao final desta aula, o aluno será capaz de:

Gerenciar o estado de uma aplicação complexa usando data-attributes no HTML.

Implementar o conceito de Single Responsibility em funções JavaScript.

Criar interfaces modernas com Glassmorphism e CSS Variables para Branding.

🧠 1. Problema Inicial (Ativação Mental) — 5 min
🎙️ Fala do Professor
"Pessoal, pensem no seguinte: uma calculadora parece simples, mas ela tem 'memória'. Se você digita 5 +, ela precisa guardar o 5 e o + enquanto você digita o próximo número.

Como o código sabe se o próximo clique é para continuar o número ou para começar um novo? Hoje vamos parar de usar variáveis soltas e vamos ensinar o nosso HTML a 'lembrar' em que fase da conta ele está."

🏗️ 2. Fundamento (Clareza Antes do Código) — 10 min
🎙️ Fala do Professor
"Antes de codar, entendam o Fluxo de Consciência da calculadora:

O Ativo (First Value): O primeiro número que você digitou.

A Intenção (Operator): O que você quer fazer com ele?

O Modificador (Mod Value): O segundo número ou a repetição da operação.

O Estado Anterior (Previous Key Type): O que eu acabei de clicar? Isso define o que o próximo clique fará."

💻 3. Construção Guiada (Com Pensamento Explícito) — 20 min
Etapa 1: O DNA da Calculadora (Data-Attributes)
"Não vamos apenas criar botões. Vamos dar 'propriedades' a eles para que o JS saiba quem é quem sem precisar ler o texto do botão."

HTML

<div class="calculator" 
     data-first-value="" 
     data-operator="" 
     data-previous-key-type="">
  </div>
Etapa 2: A Estética Emerald (Deep Green)
"O verde esmeralda traz seriedade e tecnologia. Usaremos backdrop-filter para o efeito de vidro e text-shadow para simular o brilho de telas de computadores antigos (retro-tech)."

CSS
.calculator {
background: rgba(255, 255, 255, 0.03);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.1);
}
Etapa 3: A Lógica de Decisão (O Cérebro)
"Vou criar uma função que decide o que fazer baseada no 'tipo' da tecla. Isso evita que o código vire um 'espaguete' de if/else."

JavaScript
const getKeyType = key => {
const { action } = key.dataset;
if (!action) return 'number';
if (['add', 'subtract', 'multiply', 'divide'].includes(action)) return 'operator';
return action;
};
🔍 4. Consolidação Técnica (Perguntas Estratégicas)
Por que usamos data-attributes em vez de variáveis globais?

(Resposta esperada: Para manter o estado vinculado ao componente e facilitar a manutenção e o debug via inspeção do HTML).

O que o previousKeyType resolve no nosso fluxo?

(Resposta esperada: Ele permite saber se o usuário acabou de clicar em um operador, para que o próximo número limpe o visor e comece a nova entrada).

⚠️ 5. Pontos de Atenção (Erro Comum)
Floating Point: Explique por que 0.1 + 0.2 pode dar 0.3000000004 e como o toFixed() ou Math.round resolvem isso.

Z-Index e Blur: Lembre que o efeito de vidro precisa de um fundo com cores/formas para ser percebido.

🎯 6. Exercício Imediato (15 min)
Tarefa: Implemente a função de Delete (⌫). O aluno deve criar a lógica para remover apenas o último dígito do visor, garantindo que se o visor ficar vazio, ele mostre 0.

🚀 7. Desafio de Projeto (Para Casa)
Adicione um Histórico de Operações que utilize localStorage.

O histórico deve persistir mesmo se o usuário atualizar a página (F5).

Entrega: Link do repositório no GitHub com um README seguindo o padrão ByteClass (Objetivos, Aprendizados e Identidade Visual).

Instrutor: Douglas Novato

Escola: ByteClass — 2026

Ecossistema: learnTECH
