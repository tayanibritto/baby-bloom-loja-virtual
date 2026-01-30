import { useState  } from 'react';
import Header from './components/Header.jsx';
import CardProduto from './components/CardProduto.jsx';
import ModalCarrinho from './components/ModalCarrinho.jsx';
import Footer from './components/Footer.jsx';
import Produto1 from './assets/store/produto1.png';
import Produto2 from './assets/store/produto2.png';
import Produto3 from './assets/store/produto3.png';

import {
  Destaque,
  SessaoProdutos,
} from './App.styles.jsx';

const produtos = [
  { id: 1, imagem: Produto1, nome: "Meias Divertidas", preco: 29.90  },
  { id: 2, imagem: Produto2, nome: "Pelúcia Hipoalergênica", preco: 249.90 },
  { id: 3, imagem: Produto3, nome: "Macacão 100% Algodão", preco: 169.90 }
]

function App() {

  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  return (
    <>
      <Header onAbrirCarrinho={() => setCarrinhoAberto(true)} />

      <Destaque>Produtos em Destaque:</Destaque>
      <SessaoProdutos>
        {produtos.map((prod) => (
          <CardProduto key={prod.id} id={prod.id} imagem={prod.imagem} nome={prod.nome} preco={prod.preco} />
        ))}
      </SessaoProdutos>

      <ModalCarrinho
        aberto={carrinhoAberto}
        onClose={() => setCarrinhoAberto(false)}
      />

      <Footer />
    </>
  );

}

export default App;
