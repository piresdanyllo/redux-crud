import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { ButtonAdd, ContainerForm } from "../People/People.styled";
import { Select } from "./Address.styled";
import { FormatCepToDatabase } from "../../utils/globalFunctions";
import { cepMask } from "../../utils/mask";
import MaskedInput from "react-text-mask";
import Header from "../../components/header/Header";
import { handleChangeCep } from "../../utils/globalFunctions";
import {
  createAddress,
  getAddressById,
  updateAddress,
} from "../../store/actions/AddressAction";
import { connect } from "react-redux";
import { useEffect } from "react";

const AddressForm = ({ personAddress, isLoading, dispatch }) => {
  const { idPerson, idAddress } = useParams();
  const navigate = useNavigate();
  console.log(personAddress);
  const setup = () => {
    if (idAddress) {
      getAddressById(idAddress, dispatch);
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
        <h1>
          {idAddress === undefined
            ? "Cadastrar Endereço"
            : "Atualizar Endereço"}
        </h1>
        <Formik
          initialValues={{
            cep: personAddress ? personAddress.cep : "",
            logradouro: personAddress ? personAddress.logradouro : "",
            numero: personAddress ? personAddress.numero : "",
            complemento: personAddress ? personAddress.complemento : "",
            cidade: personAddress ? personAddress.cidade : "",
            estado: personAddress ? personAddress.estado : "",
            pais: personAddress ? personAddress.pais : "",
            tipo: personAddress ? personAddress.tipo : "",
          }}
          onSubmit={(values) => {
            console.log(values);
            const valuesFormattedForDatabase = {
              idPessoa: parseInt(idPerson),
              cep: FormatCepToDatabase(values.cep),
              logradouro: values.logradouro,
              numero: parseInt(values.numero),
              complemento: values.complemento,
              cidade: values.cidade,
              estado: values.estado,
              pais: values.pais,
              tipo: values.tipo,
            };
            console.log(valuesFormattedForDatabase);
            idAddress === undefined
              ? createAddress(
                  idPerson,
                  valuesFormattedForDatabase,
                  dispatch,
                  navigate
                )
              : updateAddress(idAddress, valuesFormattedForDatabase, navigate);
          }}
        >
          {(props) => (
            <Form>
              <label htmlFor="cep">CEP *</label>
              <MaskedInput
                name="cep"
                onBlur={(event) => handleChangeCep(event, props)}
                onChange={props.handleChange}
                value={props.values.cep}
                mask={cepMask}
                placeholder="Digite seu cep"
              />
              <label htmlFor="logradouro">Logradouro *</label>
              <Field
                name="logradouro"
                id="logradouro"
                type="text"
                onChange={props.handleChange}
                value={props.values.logradouro}
                placeholder="Logradouro"
              />
              <label htmlFor="numero">Número *</label>
              <Field
                id="numero"
                name="numero"
                type="number"
                onChange={props.handleChange}
                value={props.values.numero}
                placeholder="Digite seu número"
              />
              <label htmlFor="complemento">Complemento</label>
              <Field
                id="complemento"
                name="complemento"
                type="text"
                onChange={props.handleChange}
                value={props.values.complemento}
                placeholder="Digite seu complemento"
              />
              <label htmlFor="cidade">Cidade *</label>
              <Field
                id="cidade"
                name="cidade"
                type="text"
                onChange={props.handleChange}
                value={props.values.cidade}
                placeholder="Cidade"
              />
              <label htmlFor="estado">Estado *</label>
              <Field
                id="estado"
                name="estado"
                type="text"
                onChange={props.handleChange}
                value={props.values.estado}
                placeholder="Estado"
              />
              <label htmlFor="pais">País *</label>
              <Field
                id="pais"
                name="pais"
                type="text"
                onChange={props.handleChange}
                value={props.values.pais}
                placeholder="Digite seu país"
              />
              <label htmlFor="tipo">Tipo *</label>
              <Select
                as="select"
                name="tipo"
                onChange={props.handleChange}
                value={props.values.tipo}
              >
                <option value="">Selecione um tipo</option>
                <option value="COMERCIAL">Comercial</option>
                <option value="RESIDENCIAL">Residencial</option>
              </Select>
              <ButtonAdd type="submit">
                {idAddress === undefined ? "Cadastrar" : "Atualizar"}
              </ButtonAdd>
            </Form>
          )}
        </Formik>
      </ContainerForm>
    </>
  );
};

const mapStateToProps = (state) => ({
  personAddress: state.AddressReducer.personAddress,
  isLoading: state.AddressReducer.isLoading,
});

export default connect(mapStateToProps)(AddressForm);
