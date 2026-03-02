# CRUD de Alunos 

Projeto full stack desenvolvido com o objetivo de consolidar conhecimentos práticos em **React**, **Node.js**, **Express** e **PostgreSQL**, aplicando boas práticas de arquitetura, separação de responsabilidades e integração frontend/backend.

---

## Visão Geral

A aplicação permite realizar o **cadastro, listagem, edição e exclusão de alunos**, utilizando uma API própria e banco de dados relacional real.

Fluxo da aplicação:

```
React (Frontend)
   ↓
API REST (Node.js + Express)
   ↓
PostgreSQL (Banco de Dados)
```

---

## Tecnologias Utilizadas

### Frontend

* React.js
* Axios
* React Bootstrap

### Backend

* Node.js
* Express
* PostgreSQL
* Prisma
* Supabase
* Render

### Ferramentas

* Thunder Client (testes de API)
* Git e GitHub

---

---

## Funcionalidades

*  Listar alunos
*  Cadastrar novo aluno
*  Atualizar dados do aluno
*  Excluir aluno
*  Persistência real em banco de dados

---

##  Endpoints da API

| Método | Rota        | Descrição             |
| ------ | ----------- | --------------------- |
| GET    | /alunos     | Lista todos os alunos |
| GET    | /alunos/:id | Busca aluno por ID    |
| POST   | /alunos     | Cadastra novo aluno   |
| PUT    | /alunos/:id | Atualiza aluno        |
| DELETE | /alunos/:id | Remove aluno          |

---

##  Como Executar o Projeto

### Pré-requisitos

* Node.js
* PostgreSQL

### Backend

```bash
npm install
node src/index.js
```

Servidor disponível em:

```
http://localhost:3001
```

### Frontend

```bash
npm install
npm start
```

Aplicação disponível em:

```
http://localhost:3000
```

---

## 🧠 Aprendizados

Este projeto foi desenvolvido com foco em:

* Arquitetura em camadas
* Separação de responsabilidades
* Integração frontend/backend
* SQL parametrizado (segurança)
* Versionamento profissional com Git

---

##  Próximos Passos

* Variáveis de ambiente (.env)
* Tratamento global de erros
* Melhorias de UX/UI
* Deploy da aplicação

---

📌 *Projeto desenvolvido para fins de aprendizado.*
