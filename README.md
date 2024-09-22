# ToDoList_Codex - Estrutura do projeto (back-end):
- **./conn**: É a pasta que contém a conexão com o banco de dados utilizado no projeto (MongoBD)
- **./models**: É a pasta que traz os modelos dos objetos que são salvos no banco de dados. Ela que é responsável por consultar as movimentações no BD e enviar os resultados
- **./routes**: É a pasta de rotas do projeto, nela, encontramos o sistema de roteamento do projeto
- **app.js** é nosso arquivo principal a ser rodado, nele, encontramos os comandos essenciais para inicializar o projeto.

# ToDoList_Codex - Documentação do back-end:

**Cadastro de Perfil:**

# Endpoint:
- POST /api/v1/registrar
# Descrição:
- Cadastra um novo perfil
# Parâmetros:
- {
  "name": "string",
  "gender": "string",
  "idade": "number",
  "email": "string",
  "senha": "string",
  "List": type: mongoose.Types.ObjectId,
        ref: "List"
}
# Respostas:
- (200): <Retorna o usuário>
# Exemplos de Uso:
- No insomnia: 
--- Passa o <link do back-end>/api/v1/registrar 
--- Põe o request do tipo POST
--- No Body do insomnia: {"name": "Erik",
  "gender": "Masculino",
  "idade": 21,
  "email": "erik@gmail.com",
  "senha": "123456"
--- Envia a requisição
}
**Entrar no Perfil:**

# Endpoint:
- POST api/v1/login
# Descrição:
- Realiza o login
# Parâmetros:
- {"email": "string",
  "senha": "string"
  }
# Respostas:
- (200) <Entra no /getUserTodo/:id>
# Exemplos de Uso:
- No insomnia: 
--- Passa o <link do back-end>/api/v1/login
--- Põe o request do tipo POST
--- No Body do insomnia: {
  "email": "erik@gmail.com",
  "senha": "123456"}
--- Envia a requisição

**Editar Perfil:**

# Endpoint:
- PUT api/v1/atualizaUser/:id
# Descrição:
- Atualiza um usuário existente
# Parâmetros:
- {
  "name": "string",
  "gender": "string",
  "idade": "number",
  "email": "string",
  "senhaAtual": "string",
  "novaSenha": "string"
}
# Respostas:
- (200) <Retorna a mensagem 'Usuário atualizado'>
# Exemplos de Uso:
- No insomnia: 
--- Passa o <link do back-end>/api/v1/atualizaUser/:id 
--- Põe o request do tipo PUT
--- No Body do insomnia: {"name": "Erik Alves",
  "gender": "Masculino",
  "idade": 21,
  "email": "erik@gmail.com",
  "senhaAtual": "123456",
  "novaSenha": "12345678"
  }
--- Envia a requisição

**Adicionar Tarefas:**

# Endpoint:
- POST api/v2/addTodo
# Descrição:
- Adiciona uma nova ToDo para o usuário logado
# Parâmetros:
- {
  "title": "string",
  "body": "string",
  "checkbox": "boolean",
  "email": "string"
}
# Respostas:
- (200) <Json({Lista geral de ToDos do usuário})>
# Exemplos de Uso:
- No insomnia: 
--- Passa o <link do back-end>/api/v1/addTodo/:id 
--- Põe o request do tipo POST
--- No Body do insomnia: {
  "title": "titulo da tarefaaaa",
  "body": "descriçãoooo da tarefa",
  "checkbox": false,
  "email": "email@usuario.com"
  }
--- Envia a requisição

**Editar Tarefa:**

# Endpoint:
- PUT api/v2/atualizaTodo/:id
# Descrição:
- Atualiza os dados da ToDo do usuário logado
# Parâmetros:
- {
  "title": "string",
  "body": "string",
  "checkbox": "boolean",
  "email": "string"
}
# Respostas:
- (200) <message: "ToDo Atualizada">
# Exemplos de Uso:
- No insomnia: 
--- Passa o <link do back-end>/api/v1/atualizaTodo/:id 
--- Põe o request do tipo PUT
--- No Body do insomnia: {
  "title": "titulo da tarefa",
  "body": "descrição da tarefa",
  "checkbox": true,
  "email": "email@usuario.com"
  }
--- Envia a requisição

**Excluir Tarefa:**

# Endpoint:
- DELETE api/v2/delTodo/:id
# Descrição:
- Deleta uma ToDo do usuário logado (deleta a que ele selecionar)
# Parâmetros:
- id da Todo a ser deletada
# Respostas:
- (200) <message: "ToDo deletada">
# Exemplos de Uso:
- No insomnia: 
--- Passa o <link do back-end>/api/v1/delTodo/:id 
--- Põe o request do tipo DELETE
--- Envia a requisição

**Marcar Tarefa como concluída:**

- Essa requisição é feita com um botão de check-box assíncrono, ou seja, ele não tem endpoint explícito nem modo de uso, muito menos parâmetros a serem passados.

**Visualizar Tarefas:**

# Endpoint:
- GET api/v2/getUserTodo/:id
# Descrição:
- Lista todas as tarefas cadastradas do usuário logado (se houver).
# Parâmetros:
- id do usuário logado
# Respostas:
- (200) <Json({Lista geral de ToDos do usuário})> ou <Message: "Sem ToDo">
# Exemplos de Uso:
- No insomnia: 
--- Passa o <link do back-end>/api/v1/getUserTodo/:id 
--- Põe o request do tipo GET
--- Envia a requisição