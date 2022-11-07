# LSV - Liskov Substitution principle

Subtipos precisam ser substituiveis por seus tipos de base. Ou seja, se meu programa espera um Animal, algo do tipo Cachorro (que herda de animal) deve servir como qualquer outro Animal.

Sempre que tivermos que checar por um tipo (Ex: Checar se um método ou atributo existe), estamos quebrando esse principio.

> Exemplo mais simples: Se a gente vê um mamifero, o comportamento esperado é que ele mame, se ela não mama, em teoria ele não deveria ser um mamifero.

Esse principio trabalha mais com a coerência quando a gente utiliza a relação de "é um" (QUando uma classe estende a outra, acontece esse comportamento).

## Utilizando como exemplo as classes que estamos trabalhando nas pastas **ocp** e **srp**

> Em todo lugar que eu for usar Discount, o comportamento esperado de subtipos de Discount deve ser o mesmo de Discount.
