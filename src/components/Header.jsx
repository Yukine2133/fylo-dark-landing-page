import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header className="bg-dark-blue-intro px-5 py-6 md:px-10 flex justify-between items-center md:py-8">
      <img src={logo} className="w-1/5 md:w-1/6 lg:w-1/12" />
      <nav>
        <ul className="flex gap-10 font-raleway opacity-80">
          <li>Features</li>
          <li>Team</li>
          <li>Sign In</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
