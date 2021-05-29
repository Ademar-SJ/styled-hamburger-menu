import styled from 'styled-components';

export const HamburguerMenu = styled.div`

  width: 100vw;
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 15px;

  @media (max-width: 768px) {
    div {
      width: 30px;
      height: 5px;
      background-color: yellow;
      margin-bottom: 5px;
      transition: all 0.3s linear;
      transform-origin: 1px;

      &:nth-child(1) {
        transform: ${props => (props.open ? 'rotate(45deg)' : 0)};
      }

      &:nth-child(2) {
        transform: ${props => (props.open ? 'translateX(100%)' : 0)};
        opacity: ${props => (props.open ? 0 : 1 )};
      }

      &:nth-child(3) {
        transform: ${props => (props.open ? 'rotate(-45deg)' : 0)};
      }
    }
    height: 80px;
  }
`;

export const MenuArea = styled.div`
  position: fixed;
  width: 100vw;
  height: 80px;
  background-color: blue;
  display: flex;

  @media (max-width: 768px) {
    box-sizing: border-box;
    max-width: 200px;
    height: 100vh;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-110%)'};
    transition: all 0.3s ease-in-out;
  }
`;

export const MenuItems = styled.ul`
  display: flex;  
  list-style-type: none;
  margin: auto 50px;
  
  li {
    color: white; 
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5rem;
    margin-right: 30px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 8px;
    width: 90%;
    border: 2px solid white;
    border-radius: 8px;

    svg {
      margin-right: 5px;
      font-size: 1.8rem;
    }
  }

  li:hover {
    color: #fae634;
    border-color: #fae634;
    box-shadow: 2px 2px;
  }


  @media (max-width: 768px){
    margin: 12px 0 0 12px;
    flex-direction: column;
    align-items: flex-start;

    li {
      margin-bottom: 30px;
    }

  }


`;