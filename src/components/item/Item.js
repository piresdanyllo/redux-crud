import { ListItem, Anchor } from "./Item.styled";
import { IoIosPeople } from "react-icons/io";
import { FaAddressBook } from "react-icons/fa";

const Item = ({ name, url }) => {
  return (
    <ListItem>
      {name === "Pessoas" ? (
        <>
          <IoIosPeople />
          <Anchor to={url}>{name}</Anchor>
        </>
      ) : (
        <>
          <FaAddressBook />
          <Anchor to={url}>{name}</Anchor>
        </>
      )}      
    </ListItem>
  );
};

export default Item;
