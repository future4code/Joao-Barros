### Aula 46 - Aprofundamento SQL


##### Exercício 1

* a

`ALTER TABLE Actor DROP COLUMN salary;`

Nessa query, o MySQL irá deletar a coluna de "salary" da tabela "Actor".

* b

`ALTER TABLE Actor CHANGE gender sex VARCHAR(6);`

Nessa query, o MySQL irá trocar a coluna "gender" por "sex", sendo essa última uma string de no máximo 6 caracteres.

* c

`ALTER TABLE Actor CHANGE gender gender VARCHAR(255);`

Nessa query, o MySQL irá trocar o tipo da coluna de "gender" deixando ela como string de no máximo 255 caracteres.

* d

`ALTER TABLE Actor CHANGE gender gender VARCHAR(100);`


##### Exercício 2

* a

`UPDATE Actor SET name = "Ingrid Guimarães", birth_date = "1972-07-05" WHERE id = "003";`

* b

`UPDATE Actor SET name = "JULIANA PAES" WHERE name = "Juliana Paes";`
`UPDATE Actor SET name = "Juliana Paes" WHERE name = "JULIANA PAES";`

* c

```
UPDATE Actor
SET 
name = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 600000,
gender = "male"
WHERE id = "005";
```

* d

0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

Com o resultado acima, concluímos que o MySQL não apresenta erros quando se tenta fazer uma edição em algum dado que não existe mas também não modifica nada na tabela.


##### Exercício 3

* a

`DELETE FROM Actor WHERE name = "Fernanda Montenegro";`

* b

`DELETE FROM Actor WHERE	gender = "male" AND	salary > 1000000`


##### Exercício 4

* a

`SELECT MAX(salary) FROM Actor;`

* b

`SELECT MIN(salary) FROM Actor WHERE gender = "female";`

* c

`SELECT COUNT(*) FROM Actor WHERE gender = "female";`

* d

`SELECT SUM(salary) FROM Actor;`


##### Exercício 5

* a

```
SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;
```

Devolve a contagem de atores por cada genero.

* b

`SELECT id, name FROM Actor ORDER BY name ASC;`

* c

`SELECT * FROM Actor ORDER BY salary DESC;`

* d

`SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;`

* e

`SELECT AVG(salary), gender FROM Actor GROUP BY gender;`


##### Exercício 6

* a

`ALTER TABLE Movie ADD playing_limit_date DATE;`

* b

`ALTER TABLE Movie CHANGE evaluation rating FLOAT NOT NULL;`

* c

`UPDATE Movie SET	playing_limit_date = "2020-12-31" WHERE id = "001"`

* d

`UPDATE Movie SET synopsis = "sei la" WHERE id = "001";`
0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0

O MySQL guarda o id e não faz nenhuma alteração. Minha tabela agora começa no id "002".


##### Exercício 7

* a

`SELECT COUNT(*) FROM Movie WHERE rating > 7.5;`

* b

`SELECT AVG(rating) FROM Movie;`
'9.333333333333334'

* c

`SELECT COUNT(*) FROM Movie WHERE playing_limit_date > curdate();`
'4'

* d

`SELECT COUNT(*) FROM Movie WHERE release_date > CURDATE();`

* e

`SELECT MAX(rating) FROM Movie;`

* f

`SELECT MIN(rating) FROM Movie;`


##### Exercício 8

* a

`SELECT * FROM Movie ORDER BY name ASC;`

* b

`SELECT * FROM Movie ORDER BY name DESC LIMIT 5;`

* c

```
SELECT * FROM Movie 
WHERE release_date < CURDATE() 
ORDER BY release_date DESC 
LIMIT 3;
```

* d

```
SELECT * FROM Movie 
ORDER BY rating DESC 
LIMIT 3;
```