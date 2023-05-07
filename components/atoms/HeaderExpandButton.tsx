import Hamburger from '../../images/Hamburger.svg';
import HamburgerClosed from '../../images/Hamburger-close.svg';
import { useState } from 'react';

type Props = {
  hideLinkButtons: (isHidden: boolean) => void;
};

export const HeaderExpandButton = (props: Props): JSX.Element => {
  const { hideLinkButtons } = props;

  const [isLinkButtonsHidden, setIsLinkButtonsHidden] = useState(true);

  const onClickHandler = () => {
    setIsLinkButtonsHidden(!isLinkButtonsHidden);
    hideLinkButtons(isLinkButtonsHidden);
  };

  return (
    <button onClick={onClickHandler}>
      {isLinkButtonsHidden ? <Hamburger /> : <HamburgerClosed />}
    </button>
  );
};
