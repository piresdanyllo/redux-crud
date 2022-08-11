import { BiLogOut } from "react-icons/bi";
import Item from "../item/Item";
import { Logout, Nav } from "./Menu.styled";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../store/actions/AuthAction";
import { connect } from "react-redux";

const Menu = ({dispatch}) => {
  const navigate = useNavigate()
  return (
    <>
      <Nav>
        <ul>
            <>
              <Item name="Pessoas" url="/people" />
              <Item name="Endereço" url="/address" />
              <Item name="Contatos" url="/contact" />
            </>
        </ul>
      </Nav>
      <Logout onClick={() => handleLogout(dispatch, navigate)}>
        <BiLogOut></BiLogOut>
        <span>Sair</span>
      </Logout>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer.auth,
});

export default connect(mapStateToProps)(Menu);
