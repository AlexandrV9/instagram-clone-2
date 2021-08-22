import './App.css';

import React from 'react';
import { Route, Switch } from 'react-router';

import MyAccount from '../MyAccount/MyAccount';
import ImagePopup from '../ImagePopup/ImagePopup';
import Publications from '../Publications/Publications';

function App() {

  const [cards, setCards] = React.useState([
    {link: 'https://images.unsplash.com/photo-1471479917193-f00955256257?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2896&q=80',
      _id: '1' 
    },
    {link: 'https://images.unsplash.com/photo-1502489597346-dad15683d4c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
    _id: '2'  
    },
    {link: 'https://images.unsplash.com/photo-1606220838315-056192d5e927?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80 ',
    _id: '3' 
    },
    {link: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    _id: '4'  
    },
    {link: 'https://images.unsplash.com/photo-1493238792000-8113da705763?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    _id: '5'  
    },
    {link: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80 ',
    _id: '6' 
    },
    {link: 'https://images.unsplash.com/photo-1494905998402-395d579af36f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    _id: '7'  
    },
    {link: 'https://images.unsplash.com/photo-1541443131876-44b03de101c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    _id: '8'  
    },
    {link: 'https://images.unsplash.com/photo-1555626906-fcf10d6851b4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80 ',
    _id: '9' 
    },
    {link: 'https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
    _id: '10'  
    },
    {link: 'https://images.unsplash.com/photo-1490641815614-b45106d6dd04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
    _id: '11'  
    },
    {link: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=667&q=80 ',
    _id: '12' 
    }
  ]);

  const [selectedCard, setSelectedCard] = React.useState({});

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  // const handleCloseAllPopups = () => {
  //   setSelectedCard(false);
  // }

  // const handleCloseMenuByOverlay =(event) => {
  //   console.log(event);
  // }

  return (
    <Switch>

      <Route exact path="/">
        <MyAccount 
          cards={cards}
          onCardClick={handleCardClick}
        />
      </Route>

      <Route path="/publications">
        <Publications 
          cards={cards}     
        />
      </Route>

    </Switch>

    // {/* <div>Автор иконок: <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/ru/" title="Flaticon">www.flaticon.com</a></div> */}
    

  );
}

export default App;
