import Hamburger from '@images/Hamburger.svg';
import HamburgerClosed from '@images/Hamburger-close.svg';
import { MouseEventHandler } from 'react';

type HeaderExpandButtonProps = {
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
  isHeaderExpand: boolean;
};

export const HeaderExpandButton = (
  props: HeaderExpandButtonProps,
): JSX.Element => (
  <button onClick={props.onClickHandler}>
    {!props.isHeaderExpand ? <Hamburger /> : <HamburgerClosed />}
  </button>
);
