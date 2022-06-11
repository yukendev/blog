import { NavbarTitle } from "./NavbarTitle";
import { NavbarContetts } from "./NavbarContents";

export const Navbar = (): JSX.Element => {
  return (
    <nav className="w-full bg-myBgColor">
      <div className="w-full flex p-10">
        {/* ブログタイトル */}
        <NavbarTitle/>
        
        {/* ボタンたち　 */}
        <NavbarContetts/>
      </div>
    </nav>
  )
};