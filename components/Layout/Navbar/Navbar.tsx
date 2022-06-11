import { NavbarTitle } from "./NavbarTitle";
import { NavbarContetts } from "./NavbarContents";

export const Navbar = (): JSX.Element => {
  return (
    <nav className="w-full bg-myTheme">
      <div className="w-full flex p-6">
        {/* ブログタイトル */}
        <NavbarTitle/>
        
        {/* ボタンたち　 */}
        <NavbarContetts/>
      </div>
    </nav>
  )
};