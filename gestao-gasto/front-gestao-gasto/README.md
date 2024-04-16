# Sistema de Gerenciamento de Gastos

Este é um sistema de gerenciamento de gastos desenvolvido com Angular no frontend, Java Spring Boot no backend e MySQL como banco de dados.

## Tecnologias Utilizadas

- Angular 12
- Angular Material
- Java Spring Boot 2.5.4
- MySQL

## Configuração

### Frontend (Angular)

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Instale o Angular CLI globalmente via npm: `npm install -g @angular/cli`.
3. Clone este repositório.
4. Navegue até o diretório do frontend: `cd frontend-gestao-gastos`.
5. Instale as dependências do projeto: `npm install`.
6. Inicie o servidor de desenvolvimento: `ng serve`.
7. Abra o navegador e acesse `http://localhost:4200`.

### Backend (Java Spring Boot)

1. Certifique-se de ter o JDK e o Maven instalados em sua máquina.
2. Clone este repositório.
3. Navegue até o diretório do backend: `cd backend-gestao-gastos`.
4. Configure as propriedades do banco de dados MySQL em `src/main/resources/application.properties`.
5. Compile o projeto: `mvn clean install`.
6. Execute o projeto: `mvn spring-boot:run`.

## Funcionalidades

- Autenticação de usuário.
- Cadastro, visualização, edição e exclusão de usuários.
- Gerenciamento de gastos.
- Relatórios de gastos por usuário.
- Troca de senha do usuário.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).