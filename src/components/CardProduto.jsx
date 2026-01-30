import { useCarrinho } from '../hooks/useCarrinho.jsx';

import {
    CardContainer,
    ProdutoImagem,
    ProdutoNome,
    ProdutoPreco,
    BotaoAdicionar,
} from './CardProduto.styles.jsx';

function CardProduto({ id, imagem, nome, preco }) {
    const { adicionarAoCarrinho, estaNoCarrinho } = useCarrinho();
    const adicionado = estaNoCarrinho(id);

    const precoBRL = preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    });

    return (
        <CardContainer>
            <ProdutoImagem src={imagem} alt={nome} />

            <ProdutoNome> {nome} </ProdutoNome>
            <ProdutoPreco> {precoBRL} </ProdutoPreco>

            <BotaoAdicionar
                adicionado = {adicionado}
                onClick={() => adicionarAoCarrinho({ id, nome, preco })}
            >
                {adicionado ? 'Adicionado! (clique para adicionar mais 1)' : 'Adicionar ao Carrinho'}
            </BotaoAdicionar>
        </CardContainer>
    );
}

export default CardProduto;