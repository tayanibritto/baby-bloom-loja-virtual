import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useCarrinho } from '../hooks/useCarrinho.jsx';
import {
    EfeitoOverlay,
    Modal, 
    Header,
    BotaoFechar,
    Conteudo,
    Info,
    Item,
    TituloItem,
    PrecoItem,
    ControleQtde,
    BotaoQtde,
    BotaoRemover,
    Footer,
    Total,
    BotaoCheckout,
} from './ModalCarrinho.styles.jsx';

function ModalCarrinho({ aberto, onClose }) {
    const {
        itens,
        adicionarAoCarrinho,
        diminuirQuantidade,
        removerDoCarrinho,
        qtdeItensCarrinho,
        totalValor,
    } = useCarrinho();

    const EfeitoOverlayRef = useRef(null);

    // Carrinho fecha com tecla ESC
    useEffect(() => {
        if (!aberto) return;
        function handleKey(e) {
            if (e.key === "Escape") onClose?.();
        }
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [aberto, onClose]);

    if (!aberto) return null;

    const totalBRL = totalValor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
    });

    return createPortal(
        <EfeitoOverlay
            ref={EfeitoOverlayRef}
            onClick={(e) => {
                //fecha ao clicar fora do conteúdo do carrinho
                if (e.target === EfeitoOverlayRef.current) onClose?.();
                }}
            role="presentation"
        >
            <Modal
                role="dialog"
                aria-modal="true"
                aria-label="Carrinho"
            >
                <Header>
                    <h3>Carrinho</h3>
                    <BotaoFechar
                        type="button"
                        aria-label="Fechar carrinho"
                        onClick={onClose}
                    >
                        X
                    </BotaoFechar>
                </Header>

                <Conteudo>
                    { itens.length === 0 ? (
                        <Info>
                            Seu carrinho está vazio.
                        </Info>
                    ) : (
                        itens.map((p) => {
                            const precoDoItem = (p.preco * p.quantidade).toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL"
                            });
                            return (
                                <Item key={p.id}>
                                    <TituloItem>{p.nome}</TituloItem>
                                    <PrecoItem>{precoDoItem}</PrecoItem>

                                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                        <ControleQtde aria-label={`${p.nome}`}>
                                            <BotaoQtde
                                                type="button"
                                                aria-label="Diminuir quantidade"
                                                onClick={ () => diminuirQuantidade(p.id) }
                                                disabled={p.quantidade <= 1}
                                            >
                                                -
                                            </BotaoQtde>

                                            <span aria-live="polite" style={{ minWidth: 20, textAlign: "center"}}>
                                                {p.quantidade}
                                            </span>

                                            <BotaoQtde
                                                type="button"
                                                aria-label="Aumentar quantidade"
                                                onClick={() => 
                                                    adicionarAoCarrinho({ id: p.id, nome: p.nome, preco: p.preco})
                                                }
                                            >
                                                +
                                            </BotaoQtde>
                                        </ControleQtde>

                                        <BotaoRemover
                                            type="button"
                                            aria-label={`Remover ${p.nome}`}
                                            onClick={() => removerDoCarrinho(p.id)}
                                        >
                                            Remover
                                        </BotaoRemover>
                                    </div>
                                </Item>
                            );
                        })
                    )}
                </Conteudo>

                <Footer>
                    <Total>Total: {totalBRL}</Total>
                    <BotaoCheckout
                        type="button"
                        disabled={itens.length === 0}
                    >
                        Finalizar compra
                    </BotaoCheckout>
                </Footer>
            </Modal>
        </EfeitoOverlay>,
        document.body
    );
}

export default ModalCarrinho;