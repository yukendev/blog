import { NavbarTitle } from "./NavbarTitle";
import { NavbarContents } from "./NavbarContents";
import { NavbarContentsForMobile } from "./NavbarContentsForMobile";
import { NavExpandButton } from "./NavExpandButton";
import { useState } from "react";

export const Navbar = (): JSX.Element => {

  const [isLinkButtonsHidden, setIsLinkButtonsHidden] = useState(true);

  const hideLinkButtons = (isHidden: boolean) => {
    setIsLinkButtonsHidden(!isHidden);
  }

  return (
    <nav className="w-full flex bg-myBgColor p-5 md:p-10">
      <div className="w-full md:flex">
        {/* ブログタイトル */}
        <NavbarTitle/>


        {/* 各種リンク 画面が大きい時(レスポンシブ) */}
        <div className="hidden md:block">
          <NavbarContents/>
        </div>
        
        {/* 各種リンク 画面が小さい時(レスポンシブ) */}
        <div className="md:hidden">
          {!isLinkButtonsHidden && <NavbarContentsForMobile/>}
        </div>
      </div>

      {/* レスポンシブ対応ボタン */}
      <NavExpandButton hideLinkButtons={hideLinkButtons}/>
    </nav>
  )
};