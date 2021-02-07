import Link from 'next/link';
import NavStyles from './styles/NavStyles';
import User from './User';
import Signout from './Signout';

const Nav = () => (
  <User>
  
    {({ data: { me } }) => (
    <NavStyles>
      <Link href="/">
        <a>Hírek</a>
      </Link>
      <Link href="/calendar">
        <a>Versenynaptár</a>
      </Link>
      <Link href="/rankings">
        <a>Ranglisták</a>
      </Link>
      <Link href="/players">
        <a>Játékosok</a>
      </Link>
      
      {!me && ( 
          <Link href="/login">
            <a>Belépés</a>
          </Link>
      )}
  
     
     {me && ( 
       <>
       <Signout />
      {me && me.permissions.includes("ADMIN") && (
          
          <Link href="/admin">
            <a>Admin</a>
          </Link>
      )}
      </>
     )}
    </NavStyles>
   )}
   </User> 
);

export default Nav;
