import { NavbarTitle } from "./NavbarTitle";
import { NavbarContetts } from "./NavbarContents";

export const Navbar = (): JSX.Element => {
  return (
    <nav className="w-full">
      <div className="w-full flex">
        {/* ブログタイトル */}
        <NavbarTitle/>
        
        {/* ボタンたち　 */}
        <NavbarContetts/>
      </div>
    </nav>
  )
};