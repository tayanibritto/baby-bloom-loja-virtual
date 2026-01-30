import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
    font-family: 'Roboto', Arial, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px 24px;
    border-bottom: 1px solid #bcd1e9;
    background: #f8fcff;
    
    z-index: 10;
    gap: 12px;
`;

export const AreaLogin = styled.div`
    width: 100%;
    display: inline-flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 24px;
    padding: 0;
    margin: 0;
    top: 0;

    @media (max-width: 480px) {
        align-items: start;
        justify-content: start;
    }

`;

export const TextoLogin = styled.span`
    color: #5174a5;
    font-size: 0.95rem;

    @media (max-width: 480px) {
        display: none; /* neste caso, aparece só o ícone */
    }
`;


export const InputLogin = styled.input`
    background: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 16px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);

    &:hover {
        background-color: #fff0f8;
    }

    @media (max-width: 480px) {
        gap: 5px;
        padding: 5px;
    }

    @media (max-width: 640px) {
        gap: 12px;
        padding: 8px 12px;
    } 
`;

export const BotaoLogin = styled.button`
    background-color: #6c757d;
    color: #fff;
    padding: 10px 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #7cb2db;
    }
`;

export const LinkLogin = styled.a`
    color: #ffa0cc;
    font-size: 0.95rem;
    text-decoration: none;

    &:hover {
        color: #7cb2db;
    }
`;

export const LogoIMG = styled.img`
    margin-top: 0;
    width: 384px;
    height: auto;
    max-width: 90vw;
`;

export const NavBar = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const NavList = styled.ul`
    list-style: none;
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 24px;
    padding: 0;
    margin: 0;

    background: #fff;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    padding: 10px 16px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);

    @media (max-width: 640px) {
        gap: 12px;
        padding: 8px 12px;
    }
`;

export const NavItem = styled.li`
    display: inline-flex;
    align-items: center;
`;

export const NavLink = styled.button`
    background: transparent;
    border: none;
    color: #334155;
    font-weight: 500;
    font-size: 0.95rem;
    padding: 8px 10px;
    border-radius: 8px;
    cursor: pointer;

    transition: background-color 0.15s ease, color 0.15s ease;

    &:hover, &:focus-visible {
        background: #f1f5f9;
        color: #0f172a;
        outline: none;
    }
`;

export const AreaCarrinho = styled.button`
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 8px;

    background: #fff;
    border: 1px solid #e2e8f0;
    cursor: pointer;
    padding: 6px 10px;
    border-radius: 10px;

    transition: background-color 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    &:hover, &:focus-visible {
        background-color: #fff;
        border-color: #cbd5e1;
        box-shadow: 0 2px 6px rgba(0,0,0,0.06);
        outline: none;
    }
`;

export const IconeCarrinho = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    color: #334155;
    font-size: 14px;
`;

export const BadgeCarrinho = styled.span`
    position: absolute;
    top: -6px;
    right: -6px;
    min-width: 18px;
    height: 18px;
    padding: 0 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: #ff828c;
    color: #fff;
    font-size: 11px;
    font-weight: 700;
    border-radius: 999px;

    /* Fica escondido quando está 0, mas o layout do botão permanece */
    visibility: ${({ cont }) => (cont > 0 ? "visible" : "hidden")};
`;

export const TextoCarrinho = styled.span`
    font-size: 0.95rem;
    color: #333;

    @media (max-width: 480px) {
        display: none; /* neste caso, aparece só o ícone */
    }
`;