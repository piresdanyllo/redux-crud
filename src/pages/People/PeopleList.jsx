import { connect } from "react-redux";
import { ButtonUpdateDelete, PeopleCard } from "./People.styled";
import {
  FormatCpfToRender,
  FormatDataToRender,
} from "../../utils/globalFunctions";
import { useNavigate } from "react-router-dom";
import { navigateToUpdatePerson, deletePerson } from "../../store/actions/PeopleAction";
import { navigateToCreateAddress } from "../../store/actions/AddressAction";

const PeopleList = ({people, dispatch}) => {
  const navigate = useNavigate()
  return (
    <>
    {people.map((item, i) => (
      <PeopleCard key={i}>
        <p>{item.nome}</p>
        <p>{FormatDataToRender(item.dataNascimento)}</p>
        <p>{FormatCpfToRender(item.cpf)}</p>
        <p>{item.email}</p>
        <div>
          <ButtonUpdateDelete onClick={() => navigateToUpdatePerson(item.idPessoa, dispatch, navigate)}>
            Atualizar
          </ButtonUpdateDelete>
          <ButtonUpdateDelete onClick={() => deletePerson(item.idPessoa, dispatch)}>
            Deletar
          </ButtonUpdateDelete>
          <ButtonUpdateDelete            
          onClick={() => navigateToCreateAddress(item.idPessoa, dispatch, navigate)}>
            Cadastrar Endereço
          </ButtonUpdateDelete>
          <ButtonUpdateDelete          
          >
            Cadastrar Contato
          </ButtonUpdateDelete>
        </div>
      </PeopleCard>
    ))}
  </>
  )
}

const mapStateToProps = (state) => ({
  people: state.PeopleReducer.people 
});

export default connect(mapStateToProps)(PeopleList)