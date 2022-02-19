---
date: '2018-03-30'
title: 'Utilizando o Método Copy em Python'
description: 'Entendendo a importância das referências em Python, realizando uma shallow copy utilizando o método copy.'
category: 'Python'
color: '#3776AB'
---

## Introdução

Referências são importantes para compreendermos como os argumentos são passados às funções.
Quando um método/função é declarado e seus argumentos são
passados, seus valores são copiados para atributos por meio
de parâmetros.
Para que possamos exemplificar melhor o nosso estudo, usaremos listas em ~~Java~~ [Python](https://www.python.org/)
e usaremos uma referência para o parâmetro.

```python
>>> # Exemplo 1: cópia de referência de uma lista
>>> ham = ['A', 'B', 'C', 'D', 'E', 'F']
>>> id(ham)
4461285128
>>> cheese = ham
>>> cheese
['A', 'B', 'C', 'D', 'E', 'F']
>>> id(cheese)
4461285128
>>> cheese[1] = 36
>>> cheese
['A', 36, 'C', 'D', 'E', 'F']
>>> ham
['A', 36, 'C', 'D', 'E', 'F']
>>> cheese == ham
True
>>> cheese is ham
True
```

Assim, podemos concluir que a nova variável declarada 'cheese', apenas apontou para a referência da variável 'ham', é tanto que as duas variáveis possuem o mesmo id.

### Agora veremos um exemplo de uma nova lista criada a partir de outra.

```python
>>> # Exemplo 2: duas listas distintas
>>> ham = ['A', 'B', 'C', 'D', 'E']
>>> id(ham)
4584690568
>>> # slice assignment
>>> cheese = ham[:]   # uma nova lista criada
>>> cheese
['A', 'B', 'C', 'D', 'E']
>>> cheese == ham
True
>>> cheese is ham
False
>>> cheese[1] = 36
>>> cheese
['A', 36, 'C', 'D', 'E']
>>> ham
['A', 'B', 'C', 'D', 'E']
>>> cheese == ham
False
>>> cheese is ham
False
```

Nesse exemplo, percebemos que a variável declarada 'cheese', realizou uma cópia superficial (shallow copy) de 'ham' utilizando um [slice assignment](https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range), o que cria um novo id para a variável que, ao modificarmos seu valor, 'ham' continuou inalterado.

### No terceiro exemplo, utilizaremos o método copy para realizarmos uma shallow copy.

```python
>>> # Exemplo 3: shallow copy utilizando o método copy
>>> import copy   # importamos o módulo copy
>>> ham = ['A', 'B', 'C', 'D', 'E']
>>> id(ham)
4467385800
>>> cheese = copy.copy(ham)
>>> cheese
['A', 'B', 'C', 'D', 'E']
>>> id(cheese)
4467370888
>>> cheese == ham
True
>>> cheese is ham
False
>>> cheese[3] = 29
>>> cheese
['A', 'B', 'C', 29, 'E']
>>> ham
['A', 'B', 'C', 'D', 'E']
>>> cheese == ham
False
```

## Conclusão

Bom, esse post foi bem básico e tentou abordar o uso das listas utilizando as slice assignment e o método copy, que ao meu ver é mais **Pythonico**. Lembre-se o que diz **_The Zen of Python:_**

> #### ...
>
> #### _'Explicit is better than implicit'._
>
> #### ...

Espero ter ajudado a enriquecer seus conhecimentos nessa linguagem cobra 🐍 que é o **Python**.
Em um post futuro irei abordar sobre o método deepcopy, também do módulo copy.
