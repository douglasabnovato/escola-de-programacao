🎬 Aula 15: Conectando o Front ao Mundo Real — Integração de E-mail e UX de Conversão
📚 Nível: Avançado (Integração de APIs)

🟢 Conceito Chave: Request/Response Cycle & Mail Relay

🎯 Tema Central: Formulário de Inscrição em Etapas para a ByteClass.

🔗 Referência de Campo: Aula Experimental - Google Forms

🎯 Objetivo Cognitivo
Ao final desta aula, o aluno será capaz de:

Fragmentar um formulário extenso em etapas amigáveis (UX Multi-step).

Configurar o atributo action e method para disparos de dados.

Consumir uma API de e-mail (Formspree/Web3Forms) para receber leads sem servidor próprio.

Formulário no Google Docs

- https://docs.google.com/forms/d/1b9WNqcwfH10SyHRG_tkCF9lPhni3LH0xpGKlFQq6vic/edit?ts=6881246b

🧠 1. Ativação Mental (O "Porquê") — 5 min
🎙️ Fala do Professor
"Pessoal, imaginem que vocês criaram o site mais bonito do mundo, mas quando o cliente clica em 'Enviar', nada acontece. Um site que não coleta dados é apenas um panfleto digital.

Hoje, vamos pegar as perguntas que já usamos no nosso Google Forms e criar uma versão personalizada, com a cara da ByteClass, que entrega o lead direto na sua caixa de entrada."

🏗️ 2. Fundamento: O Ciclo do Dado — 10 min
🎙️ Fala do Professor
"Para o dado sair do navegador e chegar no seu e-mail, ele precisa de um Mensageiro (Relay).

O HTML empacota os dados (FormData).

O JavaScript faz a entrega (Fetch API).

O Relay (Formspree) recebe, formata e te envia o e-mail."

💻 3. Construção Guiada (Code-Along) — 25 min
Etapa 1: A Estrutura Semântica (HTML5)
"Cada grupo de perguntas do nosso Google Forms será uma <section> no HTML. Isso organiza o código e ajuda na navegação."

Etapa 2: Configuração de Envio (O Action)
"No action do formulário, colocamos o endpoint da API. É como o endereço no envelope de uma carta."

HTML

<form id="enrollmentForm" action="https://formspree.io/f/seu-codigo-aqui" method="POST">
  </form>
Etapa 3: Lógica de Feedback (JS)
"O aluno precisa saber que funcionou. Vamos trocar o formulário por uma mensagem de sucesso assim que o e-mail for disparado."

JavaScript
// Exemplo de captura de sucesso
if (response.ok) {
mainContainer.innerHTML = "<h2>🚀 Vaga garantida! Olhe seu e-mail.</h2>";
}
🔍 4. Consolidação e Segurança
Atributo name: "Sem o atributo name no input, o e-mail chega vazio. Ele é o rótulo da informação."

Spam Prevention: Explicar como as APIs de formulário protegem o seu e-mail pessoal de robôs.

⚠️ 5. Próximo Passo: Configuração de E-mail
Nesta fase, os alunos devem:

Criar uma conta no Formspree.

Criar um novo formulário chamado "Lead Aula Experimental".

Copiar o ID gerado e colar no projeto index.html.

Desafio: Personalizar o assunto do e-mail para "[ByteClass] Nova Inscrição: " + Nome do Aluno.

🚀 6. Desafio de Projeto (Trabalho de Conclusão)
"Baseado no formulário que criamos, adicione uma lógica que valide o campo de WhatsApp. O botão 'Próximo' só deve ser liberado se o número tiver pelo menos 11 dígitos (DDD + Número)."
