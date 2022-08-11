import api from "../../api";

export const handleLogin = async (values, dispatch, navigate) => {
  try {
    const { data } = await api.post("/auth", values);
    const logado = {
      type: "SET_LOGIN",
      token: data,
    };
    localStorage.setItem("token", data);
    api.defaults.headers.common["authorization"] = data;
    dispatch(logado);
    navigate("/people");
  } catch (error) {
    alert(error);
  }
};

export const handleLogout = (dispatch, navigate) => {
  const deslogado = {
    type: "SET_LOGOUT",
  };
  localStorage.removeItem("token");
  api.defaults.headers.common["authorization"] = undefined;
  dispatch(deslogado);
  navigate("/");
};

export const handleCreateLogin = async (values, dispatch, navigate) => {
  try {
    await api.post("/auth/create", values);
    const criarLogin = {
      type: "SET_CREATE_LOGIN",
    };
    api.defaults.headers.common["authorization"] = undefined;
    dispatch(criarLogin);
    navigate("/");
  } catch (error) {
    alert(error);
  }
};
