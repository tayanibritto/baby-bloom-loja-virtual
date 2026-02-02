Título: Baby Bloom - Loja Virtual

Descrição: Aplicação em React que simula a página principal de uma loja virtual especializada em artigos para bebês. O protótipo já possui um carrinho de compras funcional. O usuário consegue adicionar e remover produtos, além de aumentar ou diminuir quantidade, e o código calcula automaticamente o valor de acordo com a variação dos itens. A folha de estilos utilizada foi a Emotion/Styled.

Tecnologias utilizadas: React.js · JSX (JavaScript eXtension) · Node.js · Emotion/Styled

Instalação:

Passos para clonar e rodar: git clone https://github.com/tayanibritto/baby-bloom-loja-virtual.git · cd baby-bloom-loja-virtual · npm install · npm run dev · copiar e colar a URL que o terminal mostrar (geralmente http://localhost:5173) · É necessário ter o Node.js instalado.

Como usar: Você pode adicionar os produtos que quiser clicando no botão "Adicionar ao Carrinho" e clicar no botão "Carrinho" para visualizar o produto adicionado. Pode aumentar ou diminuir quantidade, ou remover todos os produtos iguais adicionados.

Estrutura do Projeto:

src/
    assets/
        store/
            produto1.png
            produto2.png
            produto3.png
        Logo.png
    components/
        CardProduto.jsx
        CardProduto.styles.jsx
        Footer.jsx
        Footer.styles.jsx
        Header.jsx
        Header.styles.jsx
        ModalCarrinho.jsx
        ModalCarrinho.styles.jsx
    context/
        CarrinhoContext.jsx
    hooks
        useCarrinho.jsx
    App.jsx
    App.styles.jsx
    main.jsx
.gitignore
index.html
package.json
package-lock.json
vite.config.js

Observações: É necessário ter o Node.js instalado para o projeto funcionar.
