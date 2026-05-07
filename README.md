# Todo App 📝
 
App de gerenciamento de tarefas construído do zero com **React Native** e **NestJS**.
 
---
 
## Sobre o projeto
 
Projeto fullstack desenvolvido para praticar os fundamentos de desenvolvimento mobile e backend. O app permite criar, listar, concluir e deletar tarefas, com os dados persistidos em banco de dados PostgreSQL.
 
---
 
## Tecnologias
 
**Backend**
- [NestJS](https://nestjs.com/) — framework Node.js
- [TypeORM](https://typeorm.io/) — ORM para banco de dados
- [PostgreSQL](https://www.postgresql.org/) — banco de dados relacional
**Mobile**
- [React Native](https://reactnative.dev/) — framework mobile
- [Expo](https://expo.dev/) — plataforma de desenvolvimento
- [Axios](https://axios-http.com/) — cliente HTTP
---
 
## Funcionalidades
 
- ✅ Listar tarefas
- ✅ Criar tarefa
- ✅ Marcar tarefa como concluída
- ✅ Deletar tarefa
---
 
## Estrutura do projeto
 
```
todo-app/
  api-todo/        → backend NestJS
  todo-mobile/     → app React Native
```
 
---
 
## Como rodar
 
### Backend
 
```bash
cd api-todo
npm install
npm run start:dev
```
 
> Configure o banco PostgreSQL e crie o banco `tasksbd` antes de rodar.
 
### Mobile
 
```bash
cd todo-mobile
npm install
npx expo start
```
 
> Atualize o IP no arquivo `src/services/api.ts` para o IP da sua máquina.
 
---
 
## API
 
| Método | Rota | Descrição |
|--------|------|-----------|
| GET | /tasks | Lista todas as tarefas |
| POST | /tasks | Cria uma tarefa |
| PATCH | /tasks/:id/done | Marca como concluída |
| DELETE | /tasks/:id | Deleta uma tarefa |
 
---
 
## Aprendizados
 
- Arquitetura de APIs REST com NestJS (Module, Controller, Service)
- Mapeamento de entidades com TypeORM
- Consumo de API no React Native com Axios
- Gerenciamento de estado com useState e useEffect
- Navegação com Expo Router
 
