import styled from "styled-components";

export const Nav = styled.nav`
  padding-bottom: 34px;
  border-bottom: 1px solid #dfe0eb;
  width: 100%;
`;

export const Logout = styled.div`
  margin-top: 34px;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 160px;
  padding-left: 32px;

  & svg {
    font-size: 24px;
    color: #a4a6b3;
  }

  & span {
    color: #a4a6b3;
    font-size: 20px;
    background-color: transparent;
    border: none;
    text-align: start;
    line-height: 20px;
    padding-left: 25px;
  }
`;


