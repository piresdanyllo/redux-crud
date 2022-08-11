import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 255px;
  width: calc(100vw - 285px);
  padding: 20px;

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  padding: 10px 0;
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: 700;
  background-color: #363740;
  color: #dde2ff;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: 0.3px;
    color: #252733;
  }

  & svg {
    color: #c5c7cd;
    font-size: 16px;
  }
`;

export const ContainerTopRight = styled.div`
  display: flex;
  align-items: center;
  height: 32px;

  & div:first-child {
    border-right: 1px solid #dfe0eb;
  }

  & div:first-child svg:first-child {
    margin-right: 25px;
  }

  & div:first-child svg:last-child {
    margin-right: 32px;
  }

  & div:last-child {
    display: flex;
    align-items: center;

    & span {
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.2px;
      color: #252733;
      margin-left: 32px;
      margin-right: 14px;
    }

    & div {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      border: 1px solid #000;
      display: flex;
      justify-content: center;

      & svg {
        font-size: 25px;
      }
    }
  }
`;

export const ContainerPeople = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #ffffff;
  border: 1px solid #dfe0eb;
  border-radius: 8px;
  margin-top: 58px;
  padding: 32px 0;

  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px 32px;

    > span {
      font-weight: 700;
      font-size: 19px;
      line-height: 24px;
      letter-spacing: 0.4px;
      color: #252733;
    }

    > div {
      display: flex;
      align-items: center;

      & div:last-child {
        margin-left: 34px;
      }
    }
  }
`;

export const ContainerSortFilter = styled.div`
  display: flex;
  align-items: center;

  :nth-child(2) {
    margin: 0 15px;
  }

  & span {
    margin-left: 10px;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #4b506d;
  }
`;

export const ButtonAdd = styled(Button)`
  width: 150px;
`;

export const Peoples = styled.div`
  border-top: 1.5px solid #dfe0eb;
`;

export const TitlePeople = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  padding: 0 32px 10px;

  & span {
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.2px;
    color: #9fa2b4;
  }
`;

export const PeopleCard = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  padding: 25px 32px;
  border-bottom: 1px solid #dfe0eb;

  :last-child {
    border-bottom: none;
  }

  & p {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.2px;
    color: #252733;
    align-self: center;
  }

  & div {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    & button {
      :nth-child(-n+2) {
        margin-bottom: 10px;
      }
    }
  }
`;

export const ButtonUpdateDelete = styled(Button)`
  width: 90px;
  height: 50px;
`;

export const ModalDelete = styled.div`
  margin-bottom: 20px;
`;

export const ButtonModalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ButtonsModal = styled(Button)`
  width: 100px;
`;

export const ContainerForm = styled.div`
  position: absolute;
  left: 255px;
  width: calc(100vw - 255px);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  & h1 {
    margin-bottom: 50px;
  }

  & form {
    display: flex;
    flex-direction: column;

    & label {
      color: #9fa2b4;
      font-size: 12px;
      text-transform: uppercase;
      font-weight: bold;
      padding-bottom: 10px;
    }

    & input {
      width: 700px;
      height: 35px;
      outline: none;
      border-radius: 4px;
      margin-bottom: 15px;
      background: #fcfdfe;
      border: 1px solid #f0f1f7;
      border-radius: 8px;
      padding: 11px 8px 11px 16px;
    }
  }
`;

export const ButtonCreateEdit = styled(Button)`
  width: 200px;
`;
