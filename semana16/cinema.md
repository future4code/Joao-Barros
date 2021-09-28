### Aula 45 - Banco de Dados e Introdução a SQL

1.

a) VARCHAR(255) serve para criar uma chave com uma string de no maximo 255 caracteres.
DATE NOT NULL serve para preencher com a data e o valor nao pode ser nulo.

b) O workbench mostra o banco de dados sendo usado e a tabela que foi criada.

c) O workbench mostra os tipos de dados que sao aceitos na tabela, se eles podem ser nulos ou nao e se eles sao chaves primarias.

2. 

a) 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);

b) Error Code: 1062. Duplicate entry '001' for key 'PRIMARY'
Esse erro ocorreu porque uma chave primaria nao pode ser repetida.

Error Code: 1136. Column count doesn't match value count at row 1
O erro aconteceu porque a contagem de colunas nao corresponde a contagem de valores da linha 1.

Error Code: 1364. Field 'name' doesn't have a default value
O erro aconteceu porque o campo name nao tem um valor e ele nao pode ser NULL.

Error Code: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1
Valor de data incorreto: '1950' para a coluna 'birth_date' na linha 1.
nao sei de onde ele tirou esse 1950, mas ok.

3.

a) SELECT id, name, salary, birth_date, gender from Actor WHERE gender = "female";

b) SELECT salary from Actor WHERE name = "Tony Ramos";

c) Ele voltou uma linha com todos os valores NULL, sei porque.

d) SELECT id, name, salary from Actor WHERE salary > 500000;

e) Error Code: 1054. Unknown column 'nome' in 'field list'
Esse erro aconteceu porque o nome da coluna eh "name" e nao "nome".
SELECT id, name from Actor WHERE id = "002";

4.

a) SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
A query esta verificando primeiro se os nomes comecam com "A" ou "J" e depois vendo se a segunda parte que eh o salario maior que 300000 corresponde tambem com a primeira.

b) SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

c) SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

d) SELECT * FROM Actor
WHERE 
	(name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
  AND salary BETWEEN 350000 AND 900000;

5.

a) CREATE TABLE Movie (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    date DATE NOT NULL,
    evaluation INT NOT NULL
);

b) INSERT INTO Movie (id, name, synopsis, date, evaluation)
VALUES(
  "001", 
  "Se Eu Fosse Você",
  "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
  "2006-01-06", 
  7
);

c) INSERT INTO Movie (id, name, synopsis, date, evaluation)
VALUES(
  "002", 
  "Doce de mãe",
  "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
  "2012-12-27", 
  10
);

d) INSERT INTO Movie (id, name, synopsis, date, evaluation)
VALUES(
  "003", 
  "Dona Flor e Seus Dois Maridos",
  "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
  "2017-11-02", 
  8
);

6.

a) SELECT id, name, evaluation from Movie WHERE id = "001";

b) SELECT id, name, synopsis, date, evaluation from Movie WHERE name = "Meu Nome Não É Johnny";

c) SELECT id, name, synopsis from Movie WHERE evaluation > 7;

7.

a) SELECT * FROM Movie
WHERE name LIKE "%vida%";

b) SELECT * FROM Movie
WHERE name LIKE "%TERMO DE BUSCA%" OR
synopsis LIKE "%TERMO DE BUSCA%";

c) SELECT * FROM Movie
WHERE date < "2020-05-04";

d) SELECT * FROM Movie
WHERE date < "2020-05-04" AND (name LIKE "%TERMO DE BUSCA%" OR
synopsis LIKE "%TERMO DE BUSCA%") AND evaluation > 7;