# **Desafio: Criação de uma API RestFull**

Este desafio foi proposto pela Cubos Academy e foi desenvolvido em dupla, onde fui responsável pela parte B e minha dupla pela parte A.

💎 O objetivo principal é criar um banco de dados e endpoints que funcionem de acordo com o proposto.

## **🛠️ Ferramentas e Linguagens**

- JavaScript
- SQL
- NodeJs
- Notion
- Banco de dados PostgreSQL
- Beekeeper
- Insomnia
- Git
- GitHub

## **👣 Passo-a-Passo**

1. **Criação de uma Task List**
    - Dada a complexidade do projeto e as diversas regras de erro, optei por usar uma task list para manter controle do progresso e garantir que as etapas estivessem no caminho correto. O link para o modelo criado pode ser acessado [aqui](https://www.notion.so/Terceiro-Desafio-4a37e12885dc401997484786fdeef7eb?pvs=21).
2. **Criação de banco de dados em SQL no Beekeeper**
    - Com a task list pronta, o próximo passo foi criar o banco de dados. Para isso, utilizei a ferramenta Beekeeper em conjunto com o PostgreSQL. O PostgreSQL foi utilizado para armazenar os bancos de dados e facilitar a comunicação, enquanto o Beekeeper permitiu a manipulação do banco de dados com SQL.
3. **Inserção das bibliotecas**
    - Vamos inserir todas as bibliotecas iniciais necessárias para a nossa API:
    
    ```java
    javaCopy code
    npm init -y
    npm install -D nodemon
    npm install express pg (Para instalar a biblioteca PostgreSQL e nodemon)
    npm install bcrypt (codificar as senhas)
    npm install jsonwebtoken (Criação de token)
    npm install dotenv (para manter as senhas fora do arquivo e protegê-las)
    
    ```
    
4. **Criar os arquivos para cada situação**
    - **Index.js**: O arquivo **`index.js`** é responsável por iniciar e manter a conexão com o servidor e vincular as rotas.
    - **Rotas.js**: O arquivo **`rotas.js`** contém todas as rotas e manipulações de endpoints da sua API.
    - **Conexao.js**: O arquivo **`conexao.js`** é responsável por manter a conexão do banco de dados com a sua API.
5. **Criar uma pasta de controladores e nessa pasta ficarão todas as operações dos endpoints**
    - **📄 Pasta controladores**
        - **usuarios.js**: Ficarão os endpoints
            - Post /usuario: Cadastrar Usuário
            - Post /login: Login Usuário
            - Get /usuario: Detalhar Usuário
            - Get /categoria: Atualizar Usuário
        - **categorias.js**: Ficarão os endpoints
            - Get /categoria: Listar categorias
        - **transacoes.js**: Ficarão os endpoints
            - Post /transacao: Listar transações
            - Get /transacao/:id: Detalhar transações
            - Post /transacao: Cadastrar transações
            - Put /transacao/:id: Editar transação
            - Delete /transacao/:id: Remover transação
            - Get /transacao/extrato: Extrato
6. **Criar uma pasta de verificações de token, que funcionarão como middleware**.

## **🚀 Funcionalidades e Recursos**

A API serve como um controle básico dos usuários para mapear suas receitas, incluindo entradas e saídas financeiras.

### **Funcionalidades da API:**

1. Cadastro de usuários e login seguro.
2. Gerenciamento de categorias para transações.
3. Registros detalhados de transações financeiras.
4. Geração de extratos e relatórios financeiros.

OBS: Para interagir com a API, é necessária a instalação do Insomnia, que permite a visualização e o funcionamento dos endpoints.

**Considerações Especiais:** Para acessar os outros endpoints, é necessário cadastrar uma senha. Isso ocorre devido à configuração da biblioteca dotenv, que protege a senha do usuário. Para cadastrar a senha, execute o seguinte comando no terminal:

```bash
export CHAVE_SECRETA='sua_chave_aqui'

```

Certifique-se de substituir 'sua_chave_aqui' pela sua senha desejada.

Se possível: ⭐️ Star o projeto 🐛 Encontrar e relatar issues

Disponibilizado com ♥ por Joice.
