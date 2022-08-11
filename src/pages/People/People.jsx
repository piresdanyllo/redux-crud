import Header from "../../components/header/Header";
import {
  Container,
  ContainerTop,
  ContainerTopRight,
  ContainerPeople,
  ContainerSortFilter,
  ButtonAdd,
  Peoples,
  TitlePeople
} from "./People.styled";
import { AiOutlineSearch, AiFillBell, AiOutlineUser } from "react-icons/ai";
import { BiSortDown } from "react-icons/bi";
import { HiFilter } from "react-icons/hi";
import PeopleList from "./PeopleList";
import { connect } from "react-redux";
import { useEffect } from "react";
import { getPeople, navigateToCreatePerson } from "../../store/actions/PeopleAction";
import { useNavigate } from "react-router-dom";


const People = ({ person, dispatch }) => {
  const navigate = useNavigate()
  useEffect(() => {
    getPeople(dispatch);
  }, []);
  return (
    <div>
      <Header />
      <div>
        <Container>
          <ContainerTop>
            <h1>Pessoas</h1>
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
          <ContainerPeople>
            <div>
              <span>Todas pessoas cadastradas</span>
              <div>
                <ContainerSortFilter>
                  <BiSortDown />
                  <span>Sort</span>
                </ContainerSortFilter>
                <ContainerSortFilter>
                  <HiFilter />
                  <span>Filter</span>
                </ContainerSortFilter>
                  <ButtonAdd onClick={() => navigateToCreatePerson(dispatch, navigate)}>Cadastrar</ButtonAdd>
              </div>
            </div>
            <TitlePeople>
              <span>Nome</span>
              <span>Data de Nascimento</span>
              <span>CPF</span>
              <span>Email</span>
              <span>Ações</span>
            </TitlePeople>
            <Peoples>
              <PeopleList />
            </Peoples>
          </ContainerPeople>
        </Container>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  people: state.PeopleReducer.people,
});

export default connect(mapStateToProps)(People);
