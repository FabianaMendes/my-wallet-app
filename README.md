<h1 align="center">My Wallet App</h1>

<img align="center" alt="my-wallet-app" src="./src/assets/mywallet.gif">

<p align="center" >  
    <a href="#descrição">Descrição</a> • 
    <a href="#objetivos">Objetivos</a> • 
    <a href="#status">Status</a> • 
    <a href="#como_rodar_o_app_localmente">Como rodar o App localmente</a> • 
    <a href="#tecnologias">Tecnologias</a> • 
    <a href="#versão">Versão</a>
</p>


## Descrição
- Aplicação totalmente responsiva, utilizando **React + Typescript**, com temas Light/Dark
- Temos uma tela inicial com formulário de login, após login o usuário é encaminhado para a página principal com Dashboard onde são exibidos gráficos com resumos de transações por período. Temos também as páginas de entradas e saídas, onde são listadas por mês e ano, podendo ainda utilizar o filtro  "recorrente/eventual" em cada uma delas
- [Clique aqui](https://www.figma.com/file/nOGmUkhcINJt6nd57R4ENu/Minha-Carteira?node-id=3%3A561) para ver o layout de referência utilizado para a construção da interface de usuário
- Você pode conferir o app em produção clicando [aqui!](https://my-wallet-fabiana.netlify.app/)
- ❗ ATENÇÃO! ❗ _Para logar utilize os seguintes dados: **e-mail: mywallet@gmail, senha: 123**_



## Objetivos
- Através dos gráficos temos uma compreensão mais clara dos dados, podendo interpretá-los de uma forma mais fácil e objetiva. Neste projeto, podemos visualizar a variação das movimentações, qual mês gastou mais e porquê, se fechou no positivo ou negativo, relação das entradas e saídas por percentual da categoria(recorrente ou eventual), o que nos auxilia na identificação dos "vilões ou heróis" do nosso orçamento, etc. Esses relatórios nos auxiliam nas tomadas de decisão como cortes de gastos, possíveis investimentos, necessidade de aumento de renda, etc.
- Praticar Typescript e manipulação de dados JSON.



## Status

⚡✅  Finalizado - Concluído  ✅⚡



## Como rodar o App localmente

- Abra o terminal de comando e clone o repositório:
``` $ git clone https://github.com/FabianaMendes/my-wallet-app.git ```
- Acesse a pasta do projeto pelo terminal: 
``` $ cd my-wallet-app ```
- Instale as dependências:
``` $ npm install ```
- Para abrir o projeto no seu editor de código: 
``` $ code . ``` 
- Para rodar a aplicação localmente:
``` $ npm start ```
_O servidor irá iniciar automaticamente na porta:3000 - acesse [http://localhost:3000](http://localhost:3000)
Para parar a aplicação pressione Ctrl + c_



## Tecnologias

O que foi utilizado na construção desse projeto?

**Web-app [React](https://pt-br.reactjs.org/) + [Typescript]()**
- [React Router](https://reactrouter.com/web/guides/quick-start)
- [React Icons](https://www.npmjs.com/package/react-icons)
- [React Countup](https://www.npmjs.com/package/react-countup)
- [React Switch](https://www.npmjs.com/package/react-switch)
- [Recharts](https://recharts.org/en-US/)
- [Styled Components](https://styled-components.com/)

**Utilitários**
- [Visual Studio Code](https://code.visualstudio.com/)
- [Npm](https://www.npmjs.com/)
- [Figma](https://www.figma.com/)
- Font: [Roboto](https://fonts.google.com/specimen/Roboto?query=roboto)

**Recursos Diversos**
- Styled Components
- Grid Layout
- Validação do próprio HTML
- Animações (keyframes)
- Functional Components
- Formatação de valores e datas
- Filtros mês/ano, recorrente/eventual
- Hooks (autenticação e tema)
- Provider para o tema (salvo em localStorage)
- Rotas públicas e privadas
- Responsividade (@media)



## Versão 
<p>Versão 1.0</p>