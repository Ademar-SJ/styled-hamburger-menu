import React, { useState } from 'react';
import { HamburguerMenu, MenuArea, MenuItems} from './styles';
import * as AI from 'react-icons/ai';
import * as FA from 'react-icons/fa';

function App() {
  const [open,setOpen] = useState(false);

  return (
  <>
    <HamburguerMenu open={open} onClick={() => {setOpen(!open)}}>
      <div />
      <div />
      <div />
    </HamburguerMenu>
    <MenuArea open={open}>
      <MenuItems>
        <li>
          <FA.FaReact />
          <span>React</span>
        </li>
        <li>
          <AI.AiOutlineWhatsApp />
          <span>WhatsApp</span>
        </li>
        <li>
          <FA.FaSteam />
          <span>Steam</span>
        </li>
        <li>
          <FA.FaTelegram />
          <span>Telegram</span>
        </li>
      </MenuItems>
    </MenuArea>

  </>
  );
}

export default App;
