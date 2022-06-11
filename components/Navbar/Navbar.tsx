import { NavbarTitle } from "./NavbarTitle";
import { NavbarContetts } from "./NavbarContents";

export const Navbar = (): JSX.Element => {
  return (
    <nav className="navbar navbar-light bg-danger p-3">
      <div className="container-fluid mx-3 d-flex justify-content-start">
        {/* ブログタイトル */}
        <NavbarTitle/>
        
        {/* ボタンたち　 */}
        <NavbarContetts/>
      </div>
    </nav>
  )
};