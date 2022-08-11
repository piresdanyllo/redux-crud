import Header from "../../components/header/Header";
import {
  Container,
  ContainerTop,
  ContainerTopRight,
  ContainerAddress,
  ContainerSortFilter,
  AllAddress,
  TitleAddress,
} from "./Address.styled";
import { AiOutlineSearch, AiFillBell, AiOutlineUser } from "react-icons/ai";
import { BiSortDown } from "react-icons/bi";
import { HiFilter } from "react-icons/hi";
import AddressList from "./AddressList";
import { useEffect } from "react";
import { getAddress } from "../../store/actions/AddressAction";
import { connect } from "react-redux";

const Address = ({dispatch}) => {
  useEffect(() => {
    getAddress(dispatch)
  },[])
  return (
    <div>
      <Header />
      <div>
        <Container>
          <ContainerTop>
            <h1>Endereços</h1>
            <ContainerTopRight>
              <div>
                <AiOutlineSearch />
                <AiFillBell />
              </div>
              <div>
                <span>usuário</span>
                <div>
                  <AiOutlineUser />
                </div>
              </div>
            </ContainerTopRight>
          </ContainerTop>
          <ContainerAddress>
            <div>
              <span>Todas endereços cadastrados</span>
              <div>
                <ContainerSortFilter>
                  <BiSortDown />
                  <span>Sort</span>
                </ContainerSortFilter>
                <ContainerSortFilter>
                  <HiFilter />
                  <span>Filter</span>
                </ContainerSortFilter>
              </div>
            </div>
            <TitleAddress>
              <span>Nome</span>
              <span>Tipo</span>
              <span>CEP</span>
              <span>Cidade</span>
              <span>Estado</span>
              <span>Ações</span>
            </TitleAddress>
            <AllAddress>
              <AddressList />
            </AllAddress>
          </ContainerAddress>
        </Container>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  address: state.AddressReducer.address,
});

export default connect(mapStateToProps)(Address);
