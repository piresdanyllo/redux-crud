import styled from "styled-components";
import { SiWolframlanguage } from "react-icons/si";

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled(FlexCenter)`
  background-color: #363740;
  width: 100%;
  height: 100vh;
`;

export const CardLogin = styled(FlexCenter)`
  background-color: #fff;
  width: 380px;
  height: 582px;
  padding: 40px 32px;
  flex-direction: column;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
`;

export const Logo = styled(SiWolframlanguage)`
  font-size: 48px;
`;

export const Title = styled.h1`
  color: #a4a6b3;
  font-size: 19px;
  font-weight: bold;
  margin-top: 12px;
  height: 32px;
`;

export const LoginTitle = styled.h2`
  color: #252733;
  font-weight: 700;
  font-size: 24px;
  margin: 32px 0 12px 0;
`;

export const LoginSmall = styled.span`
  color: #9fa2b4;
  font-size: 14px;
  text-align: center;

  & a {
    color: #3751ff;
    text-decoration: none;
    cursor: pointer;
  }
`;

export const LabelLogin = styled.label`
  color: #9fa2b4;
  font-size: 12px;
  text-transform: uppercase;
  margin-bottom: 6px;
  font-weight: bold;
`;

export const FormLogin = styled.form`
  margin-top: 48px;
  display: flex;
  flex-direction: column;

  & input {
    background: #FCFDFE;
    margin-bottom: 24px;
    border: 1px solid #f0f1f7;
    border-radius: 8px;
    width: 316px;
    height: 42px;
    padding: 11px 8px 11px 16px;
    outline: none;
  }

  & div {
    display: flex;
    justify-content: space-between;

    & span {
        font-size: 10px;
        color: #9FA2B4;
        cursor: pointer;
    }
  }
`;

export const ButtonLogin = styled.button`
  width: 316px;
  height: 48px;
  padding: 15px 0 13px 0;
  margin-bottom: 32px;
  background: #3751ff;
  box-shadow: 0px 4px 12px rgba(55, 81, 255, 0.24);
  border-radius: 8px;
  border: none;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
`;
