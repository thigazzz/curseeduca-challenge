# Desafio Curseduca
Um Desafio-entrevista para a equipe do Curseduca, onde consiste em desenvolver toda uma aplicação de um E-commerce para vendas digitais.
Tanto front-end quanto back-end.

# Installation and Setup
Clone the project
```bash
git clone https://github.com/thigazzz/curseeduca-challenge.git
```
Move to backend folder
```bash
cd curseeduca-challenge/
cd back
npm install
```
Setup database and Prisma
```bash
cp prisma/.env.example .env
npx prisma migrate dev --name init
```
Run application
```bash
npm run start
```
Move to frontend folder
```bash
cd ..
cd front
npm install
```
Run application
```bash
npm run dev
```


# Built with
## Front-end
- Next.js
- Tailwind
## Back-end
- Nest.js
- MySQL como banco de dados (Usei o sqlite)
- Prisma como ORM


# Features
- [x] Catálogo de produtos com paginação
- [x] Filtragem de produtos por categoria
- [ ] Busca por nome de produto
- [x] Adicionar e remover produtos do carrinho
- [x] Finalizar a compra (deve zerar o carrinho do usuário)

## Example
![Catálogo da loja](https://github.com/thigazzz/curseeduca-challenge/assets/86504455/bd73fd95-19b5-4587-8d43-cf724c526ae9)
![Página do produto](https://github.com/thigazzz/curseeduca-challenge/assets/86504455/df7c51ff-67d5-47de-b366-c43a11f967c9)
![Página do carrinho](https://github.com/thigazzz/curseeduca-challenge/assets/86504455/a2669cdb-407a-4155-85d7-717f712c0eac)
