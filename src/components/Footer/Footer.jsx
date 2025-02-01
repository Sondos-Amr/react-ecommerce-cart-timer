export default function Footer() {
  return (
    <footer>
      <div className="container container-footer">
        <FooterList />
        <CopyRight />
      </div>
    </footer>
  );
}
function CopyRight() {
  return (
    <div className="copyright-container">
      <span className="copyright-contant">© Copyright Stylish 2023.</span>
    </div>
  );
}
function FooterList() {
  return (
    <div className="footer-list">
      <div className="footer-content">
        {datafooter.map((list, index) => (
          <ul key={index}>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
const datafooter = [
  [
    "Info",
    "Track Your Order",
    "Our Blog",
    "Privacy policy",
    "Shipping",
    "Contact Us",
    "Help",
    "Community",
  ],
  [
    "About",
    "History",
    "Our Team",
    "Services",
    "Company",
    "Manufacture",
    "Wholesale",
    "Retail",
  ],
  [
    "Women Shoes",
    "Track Your Order",
    "Our Blog",
    "Privacy policy",
    "Shipping",
    "Contact Us",
    "Help",
    "Community",
  ],
  [
    "Popular",
    "Prices Drop",
    "New Products",
    "Best Sales",
    "Stores",
    "Login",
    "Cart",
  ],
  ["Mens Collection", "Delivery", "About Us", "Shoes", "Contact Us"],
  [
    "Get In Touch",
    "Stylish Online Store 123 Main Street, Toulouse - France.",
    "Call us: (+33) 800 456 789-987",
    "contact@yourwebsite.com",
  ],
];
