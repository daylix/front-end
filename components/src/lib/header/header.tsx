import { Button, Navbar } from '@daylix-ui/components';

export function Header() {
  return (
    <Navbar dataTheme='dark'>
      <Navbar.Start>
        <Button shape="square" tabIndex={0}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </Button>
      </Navbar.Start>
      <Navbar.Center>
        <a href="#">
          <img
            className="w-auto"
            src="/daylix_logo.svg"
            alt="daylix.pro logo" />
        </a>
      </Navbar.Center>
      <Navbar.End className="navbar-end">
        <Button color="ghost" shape="circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </Button>
        <Button color="ghost" shape="circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </Button>
      </Navbar.End>
    </Navbar>
  );
}

export default Header;
