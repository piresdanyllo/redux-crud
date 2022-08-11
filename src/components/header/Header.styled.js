import styled from "styled-components";
import { SiWolframlanguage } from "react-icons/si";

export const Container = styled.header`
  width: 255px;
  background: #363740;
  padding: 37px 0;
  position: fixed;
  height: 100vh;

  & div:first-child {
    display: flex;
    align-items: center;
    margin-bottom: 60px;
    padding-left: 32px;

    & h1 {
      font-weight: 700;
      font-size: 19px;
      color: #a4a6b3;
      margin-left: 12px;
    }
  }
`;

export const Logo = styled(SiWolframlanguage)`
  font-size: 32px;
  color: #a4a6b3; ;
`;
