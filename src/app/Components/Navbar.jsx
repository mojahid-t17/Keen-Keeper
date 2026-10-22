
const Navbar = () => {
    const navLink= <>
      <li><a >Home </a></li>
      <li><a>TimeLine</a></li>
      <li><a>Statas</a></li>
    </>
    return (
        <div className="navbar shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      {navLink}
     
    </ul>
  </div>
</div>
    );
};

export default Navbar;