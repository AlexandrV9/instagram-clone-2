import Profile from "../Profile/Profile";
import CardList from "../CardList/CardList";
import Header from "../Header/Header";

const MyAccount = ({
  cards,
  onCardClick,
  onClose,

}) => {
  return (
    <>
      <Header />
      <Profile />
      <CardList 
        cards={cards}
        onCardClick={onCardClick}
        onClose={onClose}
      />
    </>
  );
}

export default MyAccount;