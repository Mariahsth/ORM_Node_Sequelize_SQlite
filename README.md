# Desenvolvimento de uma API no Node.js com ORM -> Sequelize 

* Freamework Express
* Biblioteca SQLite
* ORM sequelize e sequelize-cli
* Ferramenta eslint
* Ferramenta nodemon

## Construção de 4 entidades relacionais no SQL:
->Pessoas, Cursos, Matriculas e Categorias  
![entidades](https://github.com/user-attachments/assets/9ecbaaef-c8ea-4c9d-b247-9b207e3bc9de)

### Requisitos do projeto:

* O cliente não gostaria que registros importantes do sistema, como as Pessoas, sejam apagados definitivamente do banco de dados. -> OK

* Para deixar a interface mais limpa, o cliente gostaria que na lista de Pessoas, por padrão, fossem exibidos somente os usuários ativos. -> OK

* Foram percebidas algumas falhas de validação dos formulários por parte do front-end, o que resultou em dados de email inválidos no banco. É desejável que essa validação não seja responsabilidade exclusiva do front. -> OK

* É importante poder consultar todas as matrículas confirmadas referentes a estudante X de forma rápida. -> OK

* O cliente gostaria de poder consultar as turmas abertas por intervalo de data, para não receber informações desnecessárias (como turmas antigas). -> OK

* O cliente quer poder consultar as matrículas por curso e saber quais delas estão lotadas, para organizar melhor as matrículas. -> OK

* O cliente gostaria que, uma vez que o cadastro de um estudante fosse desativado, todas as matrículas relativas a este estudante automaticamente passassem a constar como “canceladas”. -> OK


