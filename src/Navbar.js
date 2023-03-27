function Navbar(props) {
  const navItem = "Home";
  let darkMode = false;

  return (
    <nav>
      <h3>You are now at {props.location}</h3>

      <a href="/">{navItem}</a>
      <a>Contact</a>
      <a>{props.navlink}</a>
      <p>Dark Mode: {darkMode === false ? "Off" : "On"}</p>
    </nav>
  );
}

export default Navbar;
