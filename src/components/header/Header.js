import Menu from "../menu/Menu";
import { Logo, Container } from "./Header.styled";

const Header = () => {
  return (
    <Container>
      <div>
        <Logo />
        <h1>Wolf Pack</h1>
      </div>
      <Menu />
    </Container>
  );
};

export default Header;