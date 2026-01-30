import { useContext } from 'react';
import { CarrinhoContext } from '../context/CarrinhoContext.jsx';

//Hook para acessar o contexto do carrinho
export function useCarrinho() {
    const contexto = useContext(CarrinhoContext);

    if (!contexto) {
        throw new Error("useCarrinho deve ser usado dentro de <CarrinhoProvider>");
    }

    return contexto;
}