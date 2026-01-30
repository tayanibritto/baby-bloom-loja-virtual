import { createContext, useMemo, useState, useCallback } from "react";

export const CarrinhoContext = createContext(null);

export function CarrinhoProvider({ children }) {
    const [itens, setItens] = useState([]);

    //Adicionar itens ao carrinho
    const adicionarAoCarrinho = useCallback((produto) => {
        setItens((prev) => {
            const haItem = prev.findIndex((item) => item.id === produto.id);

            //Se já existe item no carrinho
            if (haItem !== -1) {
                const novosItens = [...prev];
                novosItens[haItem] = {
                    ...novosItens[haItem],
                    quantidade: novosItens[haItem].quantidade + 1
                };
                return novosItens;
            }

            //Se não existe item no carrinho ainda
            return [
                ...prev, { ...produto, quantidade: 1 }
            ];
        });
    }, []);

    //Diminuir quantidade de cada item do carrinho
    const diminuirQuantidade = useCallback((id) => {
        setItens((prev) => {
            const haItem = prev.findIndex((item) => item.id === id);

            if (haItem === -1) return prev;

            const atual = prev[haItem];

            // Se só tem um item, remove o item
            if (atual.quantidade <= 1) {
                return prev.filter((i) => i.id !== id);
            }

            const novos = [...prev];

            novos[haItem] = { ...atual, quantidade: atual.quantidade - 1 };
            return novos;
        });
    }, []);

    //Remover itens do carrinho
    const removerDoCarrinho = useCallback((id) => {
        setItens((prev) => prev.filter((item) => item.id !== id));
    }, []);

    //Verifica se um produto está no carrinho
    const estaNoCarrinho = useCallback(
        (id) => itens.some((item) => item.id === id),
        [itens]
    );

    //Quantidade de itens no carrinho
    const qtdeItensCarrinho = useCallback(
        (id) => itens.find((item) => item.id === id)?.quantidade ?? 0,
        [itens]
    )

    //Total de itens no carrinho
    const totalItensCarrinho = useMemo(
        () => itens.reduce((i, item) => i + item.quantidade, 0),
        [itens]
    );

    //Valor total do carrinho
    const totalValor = useMemo(
        () => itens.reduce((i, item) => i + item.preco * item.quantidade, 0),
        [itens]
    );

    //Objeto final que o contexto fornece para todos os outros componentes
    const objGeral = useMemo(
        () => ({
            itens,
            adicionarAoCarrinho,
            diminuirQuantidade,
            removerDoCarrinho,
            estaNoCarrinho,
            qtdeItensCarrinho,
            totalItensCarrinho,
            totalValor,
        }),
        [
            itens,
            adicionarAoCarrinho,
            diminuirQuantidade,
            removerDoCarrinho,
            estaNoCarrinho,
            qtdeItensCarrinho,
            totalItensCarrinho,
            totalValor,
        ]
    );

    return <CarrinhoContext.Provider value={objGeral}>{ children }</CarrinhoContext.Provider>;

}