import styled from "styled-components";
import { Link } from "react-router-dom";

export const ListItem = styled.li`
  width: 100%;
  height: 56px;
  list-style: none;
  display: flex;
  align-items: center;
  border-left: 2px solid transparent;
  cursor: pointer;

  :hover {
    background-color: #9fa2b4;
    border-left: 2px solid #fff;

    & svg, & a {
        color: #DDE2FF;
    }
  }

  & svg {
    margin-left: 32px;
    color:#A4A6B3;
    font-size: 24px;
  }
`;

export const Anchor = styled(Link)`
  text-decoration: none;
  color:#A4A6B3;
  font-size: 20px;
  line-height: 20px;
  padding-left: 25px;
`;
