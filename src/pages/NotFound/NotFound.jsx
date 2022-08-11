import { Link } from 'react-router-dom';
import {Container} from './NotFount.styled'

const NotFound = () => {
  return (
    <>
      <Container>
        <p>OH-OH! NOT FOUND</p>
        <Link to='/'>Clique aqui para voltar</Link>
      </Container>
    </>
  );
};

export default NotFound;
