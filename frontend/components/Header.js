import Link from 'next/link';
import styled from 'styled-components';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};


const Logo = styled.h1`
  font-size: 2.5rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  /* transform: skew(-7deg); */
  text-align: center;
  margin: 0;
  a {
    padding: 2rem;
    background:  hsla(100,0%,0%,.5);
    color: white;
    font-family: "Great Vibes", cursive;
  }`
 ;

const StyledHeader = styled.header`
  .container {
    margin: 0;
    width: 100vw;
    height: 20vh;
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    align-content: center;
    background: url('../static/header-background.jpeg') no-repeat center;
  }
    
  
`;

const Header = () => (
  <StyledHeader>
    <div className="container">
      <Logo>
        <Link href="/">
          <a>Pro Shop Amatőr Teniszbajnokság</a>
        </Link>
      </Logo>
    </div>
  
  </StyledHeader>
);

export default Header;
