import styled from '@emotion/styled';

export const EfeitoOverlay = styled.div`
    font-family: 'Roboto', Arial, sans-serif;
    position: fixed;
    inset: 0;
    background: rgba(15, 23, 42, 0.45); /* o fundo fica levemente mais escuro, para dar ênfase ao modal */
    display: grid;
    place-items: center;
    z-index: 1000;
`;

export const Modal = styled.div`
    width: min(92vw, 720px);
    max-height: 86vh;
    background: #fff;
    border-radius: 12px;
    overflow: hidden;
    display: grid;
    grid-template-rows: auto 1fr auto;
    box-shadow: 0 10px 40px rgba(0,0,0,0.2);
`;

export const Header = styled.header`
    padding: 16px 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        margin: 0;
        font-size: 1.05rem;
    }
`;

export const BotaoFechar = styled.button`
    border: none;
    background: transparent;
    font-size: 22px;
    line-height: 1;
    cursor: pointer;
    padding: 6px 8px;
    border-radius: 8px;

    &:hover {
        background: #f5f5f5;
    }
`;

export const Conteudo = styled.div`
    padding: 8px 12px 0;
    overflow: auto;
`;

export const Info = styled.p`
    padding: 12px 8px;
    color: #555;
`;

export const Item = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 8px 16px;
    align-items: center;
    padding: 12px 8px;
    border-bottom: 1px solid #f1f1f1;
`;

export const TituloItem = styled.div`
    font-weight: 600;
    color: #222;
`;

export const PrecoItem = styled.div`
    color: #555;
    font-size: 0.95rem;
`;

export const ControleQtde = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 8px;
`;

export const BotaoQtde = styled.button`
    width: 28px;
    height: 28px;
    border-radius: 6px;
    border: 1px solid #e2e2e2;
    background: #fafafa;
    cursor: pointer;
    line-height: 1;
    font-weight: 700;

    &:hover {
        background: #f0f0f0;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const BotaoRemover = styled.button`
    border-style: dotted;
    border-color: #ee6161;
    background: transparent;
    color: #ee6161;
    cursor: pointer;
    padding: 4px 8px;
    border-radius: 6px;

    &:hover {
        background: #fee2e2;
    }
`;

export const Footer = styled.footer`
    padding: 14px 20px;
    border-top: 1px solid #eee;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
`;

export const Total = styled.div`
    font-weight: 700;
    font-size: 1.05rem;
`;

export const BotaoCheckout = styled.button`
    background: #198754;
    color: #fff;
    padding: 10px 14px;
    border: none;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        filter: brightness(0.95);
    }

    &:disabled {
        background: #9ca3af;
        cursor: not-allowed;
    }
`;