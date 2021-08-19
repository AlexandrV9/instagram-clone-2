import './App.css';
import React from 'react';

import MyAccount from '../MyAccount/MyAccount';
import ImagePopup from '../ImagePopup/ImagePopup';

function App() {

  const [cards, setCards] = React.useState([
    {link: 'https://images.unsplash.com/photo-1471479917193-f00955256257?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2896&q=80' },
    {link: 'https://images.unsplash.com/photo-1502489597346-dad15683d4c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' },
    {link: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 '},
    {link: 'https://images.unsplash.com/photo-1471479917193-f00955256257?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2896&q=80' },
    {link: 'https://images.unsplash.com/photo-1502489597346-dad15683d4c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' },
    {link: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 '},
    {link: 'https://images.unsplash.com/photo-1471479917193-f00955256257?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2896&q=80' },
    {link: 'https://images.unsplash.com/photo-1502489597346-dad15683d4c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' },
    {link: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 '},
    {link: 'https://images.unsplash.com/photo-1471479917193-f00955256257?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2896&q=80' },
    {link: 'https://images.unsplash.com/photo-1502489597346-dad15683d4c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80' },
    {link: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 '}
  ]);
  const [selectedCard, setSelectedCard] = React.useState(false);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const handleCloseAllPopups = () => {
    setSelectedCard(false);
  }

  return (
    <>
      <MyAccount 
        cards={cards}
        onCardClick={handleCardClick}
      />
      <ImagePopup
        card={selectedCard}
        onClose={handleCloseAllPopups}
      />
    </>
  );
}

export default App;
