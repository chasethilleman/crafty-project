import craftyLogo from "../assets/crafty.png";

export default function Header() {
  return (
    <header>
      <img src={craftyLogo} className="header-logo" alt="Crafty Project Logo" />
    </header>
  );
}
