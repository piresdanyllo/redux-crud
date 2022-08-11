import { useFormik } from "formik";
import { handleCreateLogin } from "../../store/actions/AuthAction";
import {
  Container,
  CardLogin,
  Logo,
  Title,
  LoginTitle,
  LoginSmall,
  ButtonLogin,
  LabelLogin,
  FormLogin,
} from "./User.styled";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Users = ({auth, dispatch}) => {
    const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      login: "",
      senha: "",
    },
    onSubmit: (values) => {
      handleCreateLogin(values, dispatch, navigate);
    },
  });

  return (
    <>
      <Container>
        <CardLogin>
          <Logo />
          <Title>Wolf Pack</Title>
          <LoginTitle>Fazer cadastro</LoginTitle>
          <LoginSmall>Cria sua conta com seu usuário e senha</LoginSmall>
          <FormLogin onSubmit={formik.handleSubmit}>
            <LabelLogin htmlFor="login">Usuário</LabelLogin>
            <input
              id="login"
              name="login"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.login}
            />
            <LabelLogin htmlFor="senha">Senha</LabelLogin>
            <input
              id="senha"
              name="senha"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.senha}
            />            
            <ButtonLogin type="submit">Cadastrar</ButtonLogin>
            <LoginSmall>
              Voltar para <Link to="/">tela de login</Link>
            </LoginSmall>
          </FormLogin>
        </CardLogin>
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
    auth: state.AuthReducer.auth,
  });

export default connect(mapStateToProps)(Users);
