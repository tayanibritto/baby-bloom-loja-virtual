import styled from '@emotion/styled';

export const CardContainer = styled.div`
    border: 1px solid #ccc;
    padding: 16px;
    border-radius: 8px;
    width: 250px;
    margin: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const ProdutoImagem = styled.img`
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
`;

export const ProdutoNome = styled.h3`
    margin: 0;
    font-size: 1.2rem;
`;

export const ProdutoPreco = styled.p`
    margin: 0;
    font-weight: 500;
    color: #333;
`;

export const BotaoAdicionar = styled.button `
    background-color: ${(props) => (props.adicionado ? '#198754' : '#6c757d')};
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: ${(props) => (props.adicionado ? '#b38459' : '#7cb2db')};
    }
`;