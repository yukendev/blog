import Hamburger from '../../images/Hamburger.svg';
import HamburgerClosed from '../../images/Hamburger-close.svg';
import { MouseEventHandler } from 'react';

type Props = {
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
  isHeaderExpand: boolean;
};

export const HeaderExpandButton = (props: Props): JSX.Element => (
  <button onClick={props.onClickHandler}>
    {!props.isHeaderExpand ? <Hamburger /> : <HamburgerClosed />}
  </button>
);
