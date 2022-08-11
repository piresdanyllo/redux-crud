import moment from "moment";
import axios from "axios";

export const FormatDataToDatabase = (value) => {
  return moment(value, "DD/MM/YYYY").format("YYYY-MM-DD");
};

export const FormatDataToRender = (value) => {
  return moment(value, "YYYY-MM-DD").format("DD/MM/YYYY");
};

export const FormatCpfToDatabase = (value) => {
  return value.replaceAll(".", "").replace("-", "");
};

export const FormatCpfToRender = (value) => {
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
};

export const FormatCepToRender = (value) => {
  return value.replace(/(\d{5})(\d{3})/g, "$1-$2");
};

export const FormatCepToDatabase = (value) => {
  return value.replace("-", "");
};

export const FormatPhoneToRender = (value) => {
  return value.replace(/(\d{2})(\d{5})(\d{4})/g, "($1)$2-$3");
};

export const handleChangeCep = async (event, props) => {
  const cep = event.target.value?.replace(/[^0-9]/g, "");

  try {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    props.setFieldValue("logradouro", data.logradouro);
    props.setFieldValue("numero", data.numero);
    props.setFieldValue("complemento", data.complemento);
    props.setFieldValue("cidade", data.localidade);
    props.setFieldValue("estado", data.uf);
  } catch (error) {
    console.log(error);
  }
};
