import { Navbar } from '@daylix-ui/components';

export function Header() {
  return (
    <Navbar dataTheme='dark'>
      <a href="#">
        <img
          className="w-auto"
          src="/daylix_logo.svg"
          alt="daylix.pro logo" />
      </a>
    </Navbar>
  );
}

export default Header;
