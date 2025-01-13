<p align="center">
  <a><img src="https://yolocoliving.com.br/wp-content/uploads/2024/07/logo-coliving-branca.svg" width="120" alt="Nest Logo" /></a>
</p>

# Backend - YOLO Coliving 🏠

Este é o back-end do projeto **YOLO Coliving**, desenvolvido com **NestJS** para gerenciar o cadastro de pessoas no sistema de coliving. Ele fornece uma API RESTful para realizar operações CRUD (Create, Read, Update, Delete) e importar dados de uma API externa.

---

## 🚀 Funcionalidades

- **CRUD de Pessoas**: Adicionar, listar, atualizar e excluir pessoas.
- **Importação de Dados**: Consome uma API externa para importar uma base inicial de pessoas.
- **Integração com DynamoDB**: Os dados são armazenados em um banco de dados DynamoDB na AWS.

---

## 🛠️ Tecnologias Utilizadas

- **Node.js** com **NestJS**
- **AWS DynamoDB** (banco de dados)
- **Axios** (consumo de APIs)
- **@aws-sdk/client-dynamodb** (SDK oficial da AWS para DynamoDB)


