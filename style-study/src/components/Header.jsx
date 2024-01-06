import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header className="flex flex-col itens-center mt-8 mb-16">
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </header>
  );
}
