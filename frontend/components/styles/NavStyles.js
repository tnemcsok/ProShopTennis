import styled from 'styled-components';

const NavStyles = styled.div`
  position: -webkit-sticky;
	position: sticky;
	top: 0;
  width: 100%;
  height: 8vh;
  padding: 0;
  display: flex;
  justify-content: space-evenly;
  background: rgb(64, 126, 147);
  font-size: 1.8rem;
  
  a,
  button {
    font-family: "Great Vibes", cursive;
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    text-decoration: none;
    color: white;
   
 
    &:after {
      height: 2px;
      background: rgba(250, 255, 250, 0.7);
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    @media (max-width: 700px) {
        width: calc(100% - 10px);
    }
    }
  }

`;

export default NavStyles;
