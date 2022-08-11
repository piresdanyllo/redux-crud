import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import People from "./pages/People/People";
import { connect } from "react-redux";
import { useEffect } from "react";
import api from "./api";
import User from "./pages/User/User";
import NotFound from "./pages/NotFound/NotFound";
import PeopleForm from "./pages/People/PeopleForm";
import Address from "./pages/Address/Address"
import AddressForm from "./pages/Address/AddressForm";

const Routers = ({ auth, dispatch }) => {
  const token = localStorage.getItem("token");


  useEffect(() => {
    if (token) {
      const logado = {
        type: "SET_LOGIN",
        token: token,
      };
      api.defaults.headers.common["Authorization"] = token;
      dispatch(logado);      
    }
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {auth.isLogged ? (
          <>
            <Route path="/people" element={<People />} />
            <Route path="/people/create" element={<PeopleForm />} />
            <Route path="/people/edit/:id" element={<PeopleForm />} />
            <Route path="/address" element={<Address />} />
            <Route path="/address/create/:idPerson" element={<AddressForm />} />
            <Route path="/address/edit/:idPerson/:idAddress" element={<AddressForm />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login />} />
            <Route path="/users" element={<User />} />
          </>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer.auth,
});

export default connect(mapStateToProps)(Routers);
