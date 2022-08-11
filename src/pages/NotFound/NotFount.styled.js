import styled from "styled-components";

export const Container = styled.div`
  background-color: #363740;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & p {
    font-size: 40px;
    padding: 20px;
  }

  & a {
    text-decoration: none;
    color: #000;
    border: 1px solid #000;
    padding: 10px;
    border-radius: 3px;

    :hover {
        background-color: #000;
        color: #fff
    }
  }
`;