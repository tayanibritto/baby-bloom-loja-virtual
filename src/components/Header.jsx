import { useCarrinho } from "../hooks/useCarrinho.jsx";
import LogoPNG from "../assets/Logo.png"
import {
    HeaderContainer,
    AreaLogin,
    TextoLogin,
    InputLogin,
    BotaoLogin,
    LinkLogin,
    LogoIMG,
    NavBar,
    NavList,
    NavItem,
    NavLink,
    AreaCarrinho,
    IconeCarrinho,
    BadgeCarrinho,
    TextoCarrinho,
} from "./Header.styles.jsx";

function Header({ onAbrirCarrinho }) {
    const { totalItensCarrinho } = useCarrinho();

    return (
        <HeaderContainer>

            <AreaLogin aria-label="Login">
                <TextoLogin>Login: </TextoLogin>
                <InputLogin aria-label="E-mail" type="email" id="email" placeholder="Digite seu e-mail" required></InputLogin>
                <InputLogin aria-label="Senha" type="password" id="senha" placeholder="Digite sua senha" required></InputLogin>
                <BotaoLogin aria-label="Entrar" type="button" title="Entrar">Entrar</BotaoLogin>
                <LinkLogin aria-label="Esqueci minha senha" href="#">Esqueci minha senha</LinkLogin>  
                <LinkLogin aria-label="Cadastrar" href="#">Quero me cadastrar</LinkLogin>
            </AreaLogin>

            <LogoIMG src={LogoPNG} alt="Logo"/>

            <NavBar aria-label="Menu principal">
                <NavList role="menubar">
                    <NavItem role="none">
                        <NavLink role="menuitem">Home</NavLink>
                    </NavItem>
                    <NavItem role="none">
                        <NavLink role="menuitem">Quem Somos</NavLink>
                    </NavItem>
                    <NavItem role="none">
                        <NavLink role="menuitem">Produtos</NavLink>
                    </NavItem>
                    <NavItem role="none">
                        <NavLink role="menuitem">Depoimentos</NavLink>
                    </NavItem>
                    <NavItem role="none">
                        <NavLink role="menuitem">Fale Conosco</NavLink>
                    </NavItem>
                    <NavItem role="none">
                        <AreaCarrinho
                            type="button"
                            onClick={onAbrirCarrinho}
                            aria-label={`Carrinho: ${totalItensCarrinho} ${totalItensCarrinho === 1 ? "item" : "itens" }`}
                            title="Abrir carrinho"
                        >
                            <IconeCarrinho aria-hidden="true">🛒</IconeCarrinho>
                            <TextoCarrinho>Carrinho</TextoCarrinho>
                            <BadgeCarrinho cont={totalItensCarrinho} > {totalItensCarrinho} </BadgeCarrinho>
                        </AreaCarrinho>
                    </NavItem>
                </NavList>
            </NavBar>

        </HeaderContainer>
    );
}

export default Header;