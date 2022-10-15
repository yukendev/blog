import Hamburger from '../../../images/Hamburger.svg';
import HamburgerClosed from '../../../images/Hamburger-close.svg';
import { useState } from 'react';

type PropsType = {
  hideLinkButtons: (isHidden: boolean) => void;
};

export const NavExpandButton = (props: PropsType): JSX.Element => {
  const { hideLinkButtons } = props;

  const [isLinkButtonsHidden, setIsLinkButtonsHidden] = useState(true);

  const onClickHandler = () => {
    setIsLinkButtonsHidden(!isLinkButtonsHidden);
    hideLinkButtons(isLinkButtonsHidden);
  };

  return (
    <div className='ml-auto md:hidden'>
      <button onClick={onClickHandler}>
        {isLinkButtonsHidden ? <Hamburger /> : <HamburgerClosed />}
      </button>
    </div>
  );
};
