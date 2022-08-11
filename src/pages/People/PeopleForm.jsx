import { useNavigate, useParams } from "react-router-dom";
import { Formik } from "formik";
import Header from "../../components/header/Header";
import { ButtonCreateEdit, ContainerForm } from "./People.styled";
import {
  FormatCpfToDatabase,
  FormatDataToDatabase,
  FormatDataToRender,
} from "../../utils/globalFunctions";
import MaskedInput from "react-text-mask";
import { dataMask, cpfMask } from "../../utils/mask";
import {
  createPeople,
  getPerson,
  updatePerson,
} from "../../store/actions/PeopleAction";
import { connect } from "react-redux";
import { useEffect } from "react";

const PeopleForm = ({ person, isLoading, isUpdate, dispatch }) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const setup = () => {
    if (id) {
      getPerson(id, dispatch);
    }
  };

  useEffect(() => {
    setup();
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }
  return (
    <>
      <Header />
      <ContainerForm>
        <h1>{id ? "Atualizar cadastro" : "Cadastrar"}</h1>
        <Formik
          initialValues={{
            nome: person ? person.nome : "",
            dataNascimento: person
              ? FormatDataToRender(person.dataNascimento)
              : "",
            cpf: person ? person.cpf : "",
            email: person ? person.email : "",
          }}
          onSubmit={(values) => {
            const valuesFormattedForDatabase = {
              nome: values.nome,
              dataNascimento: FormatDataToDatabase(values.dataNascimento),
              cpf: FormatCpfToDatabase(values.cpf),
              email: values.email,
            };
            id
              ? updatePerson(valuesFormattedForDatabase, id, navigate)
              : createPeople(valuesFormattedForDatabase, dispatch, navigate);
          }}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <label htmlFor="nome">Nome *</label>
              <input
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.nome}
                name="nome"
                placeholder="Digite seu nome"
              />
              <label htmlFor="dataNascimento">Data de Nascimento *</label>
              <MaskedInput
                mask={dataMask}
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.dataNascimento}
                name="dataNascimento"
                placeholder="Digite sua data de nascimento"
              />
              <label htmlFor="cpf">CPF *</label>
              <MaskedInput
                mask={cpfMask}
                type="text"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.cpf}
                name="cpf"
                placeholder="Digite seu CPF"
              />
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.email}
                name="email"
                placeholder="Digite seu email"
              />
              <ButtonCreateEdit type="submit">
                {id ? "Atualizar" : "Cadastrar"}
              </ButtonCreateEdit>
            </form>
          )}
        </Formik>
      </ContainerForm>
    </>
  );
};

const mapStateToProps = (state) => ({
  person: state.PeopleReducer.person,
  isLoading: state.PeopleReducer.isLoading,
  isUpdate: state.PeopleReducer.isUpdate,
});

export default connect(mapStateToProps)(PeopleForm);
