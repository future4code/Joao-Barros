### Aula 47 - Knex.js


##### Exercício 1

* a

Quando usamos a o **raw**, temos uma resposta com dois arrays, um contendo os dados que solicitamos e outro contendo informações do banco de dados. Devemos usar **index[0]** para resolver esse problema.

* b

```
const searchActor = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = "${name}"
  `);
  return result[0];
};
```

* c

```
const countActors = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = "${gender}"
  `);
	// Só colocamos esse "as count" como apelido, para ficar mais fácil de pegar
	// o valor no resultado!
  const count = result[0][0].count;
  return count;
};
```