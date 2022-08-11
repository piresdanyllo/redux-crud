import { FormatCepToRender } from "../../utils/globalFunctions";
import { ButtonUpdateDelete, AddressCard } from "./Address.styled";
import { connect } from "react-redux";
import { deleteAddress, navigateToUpdateAddress } from "../../store/actions/AddressAction";
import { useNavigate } from "react-router-dom";

const AddressList = ({address, dispatch}) => {
  const navigate = useNavigate()
  return (
    <>
    {address.map((item, i) => (
      item.enderecos.map((end,i) =>(
        <AddressCard key={i}>
        <p>{item.nome}</p>
        <p>{end.tipo}</p>
        <p>{FormatCepToRender(end.cep)}</p>
        <p>{end.cidade}</p>
        <p>{end.estado}</p>
        <div>
          <ButtonUpdateDelete onClick={() => navigateToUpdateAddress(item.idPessoa, end.idEndereco, dispatch, navigate)}>
            Atualizar
          </ButtonUpdateDelete>
          <ButtonUpdateDelete onClick={() => deleteAddress(end.idEndereco, dispatch)}>
            Deletar
          </ButtonUpdateDelete>
        </div>
      </AddressCard>
    ))
    ))}
  </>
  )
}

const mapStateToProps = (state) => ({
  address: state.AddressReducer.address 
});

export default connect(mapStateToProps)(AddressList)