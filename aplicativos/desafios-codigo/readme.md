### Desafios de Código

- Praticar e estudar lógica de programação e habilidade de resolver testes.

### Instrução de execução

- `Open with Live Server` no arquivo index.html

# Coleções Chaveadas

Este repositório contém a atividade prática do Curso "Coleções Chaveadas", que faz parte do Basecamp de Javascript da [Digital Innovation One](https://digitalinnovation.one/).

## Atividade 12: Maps

Criar uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

1. Criar uma função `getAdmins` que recebe um `Map`;
2. Criar um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
3. Dentro de `getAdmins`, utilize o loop `for...of` para retornar uma lista com os nomes dos usuários que são administradores.

## Atividade 13: Sets

Dado o array `[30, 30, 40, 5, 223, 2049, 3034, 5]`, retorne outro array com apenas com valores únicos.

# Funções

Projetos referentes ao curso "Funções" que ministrei pela [Digital Innovation One](https://digitalinnovation.one/).

## Atividade 14: Alunos Aprovados

1. Crie uma função que recebe o array `alunos` e um número que irá representar a média final;
2. Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
3. Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.

## Atividade 15: This

Dada a função `calculaIdade`, utilize os métodos call e apply para modificar o valor de `this`. Crie seus próprios objetos para esta atividade!

```js
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}
```

# Variáveis e Tipos

Neste repositório você encontrará a atividade prática proposta pelo curso "Variáveis e Tipos" do Basecamp de Javascript da Digital Innovation One.

## Atividade 16

Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

_Palíndromo: frase ou palavra que se pode ler, indiferentemente, da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)_

### detalhes da resolução A
- Palíndromo: "arara", "asa"

### detalhes da resolução B
- Palíndromo: "roma me tem amor", "anotaram a data da maratona", "a Rita, sobre vovô, versos atira", "ato idiota"

## Atividade 17

Troque todos os elementos pares e diferentes de zero de um array pelo número 0. Se o array for vazio, retorne -1.

Exemplo:
Input -> [1, 3, 4, 6, 80, 33, 23, 90]

Output -> [1, 3, 0, 0, 0, 33, 23, 0]

Input -> []

Output -> -1

### detalhes da resolução

- -1
````javascript
    substituirPares(false)
    substituirPares(null)
    substituirPares(0)
````
- já é zero
````javascript
    let arr = [1, 3, 4, 6, 80, 33, 23, 90];
    substituirPares(arr)
````
- substituindo
````javascript
    let arr = [1, 3, 0, 0, 0, 33, 23, 0];
    substituirPares(arr)
````
- rodar js no terminal
````node
    node substituirPares.js
````

