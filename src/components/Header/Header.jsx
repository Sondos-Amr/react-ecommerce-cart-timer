export default function Header() {
  return (
    <section className="header">
      <div className="container container-header">
        <Logo />
        <RightHeader />
      </div>
    </section>
  );
}

function Logo() {
  return (
    <div className="logo-container">
      <img className="logo" src="/assets/logo/main-logo.png" alt="logo" />
    </div>
  );
}

function HeaderItem({ item, key }) {
  return (
    <li className="header-item" key={key}>
      <a href="#">{item}</a>
    </li>
  );
}

const navContent = ["home", " men", "Women", "Page", "Shop", "Sale"];
function Nav() {
  return (
    <div className="nac-container">
      <ul>
        {navContent.map((navItem, index) => (
          <HeaderItem item={navItem} key={index} />
        ))}
      </ul>
    </div>
  );
}

const icons = [
  <i class="fa-regular fa-user"></i>,
  <i class="fa-solid fa-cart-shopping"></i>,
  <i class="fa-solid fa-magnifying-glass"></i>,
];
function IconHeader() {
  return (
    <div className="icon-header">
      <ul>
        {icons.map((icon, index) => (
          <HeaderItem item={icon} key={index} />
        ))}
      </ul>
    </div>
  );
}
function RightHeader() {
  return (
    <div className="right-header">
      <Nav />
      <IconHeader />
    </div>
  );
}
