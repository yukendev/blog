import Link from "next/link";

type NavBarContentWrapperProps = {
  title: string;
  href: string;
};

const NavBarContentWrapper = (
  props: NavBarContentWrapperProps
): JSX.Element => {
  const { title, href } = props;
  return (
    <Link href={href}>
      <div className="rounded px-2 py-3 mx-3 text-myTextColor cursor-pointer hover:bg-myBgColorHover">
        {title}
      </div>
    </Link>
  );
};

const NavBarContentWrapperForExternal = (
  props: NavBarContentWrapperProps
): JSX.Element => {
  const { title, href } = props;
  return (
    <div className="rounded px-2 py-3 mx-3 text-myTextColor cursor-pointer hover:bg-myBgColorHover">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </div>
  );
};

export const NavbarContentsForMobile = (): JSX.Element => {
  return (
    <div className="bg-myBgColorHover mt-3 rounded-xl p-3">
      {/* Home */}
      <NavBarContentWrapper title="Home" href="/" />

      {/* About */}
      <NavBarContentWrapper title="About" href="/me" />

      {/* Twitter */}
      <NavBarContentWrapperForExternal
        title="Twitter"
        href="https://twitter.com/tezuka_0906_wtf"
      />

      {/* Github */}
      <NavBarContentWrapperForExternal
        title="Github"
        href="https://github.com/yukendev"
      />
    </div>
  );
};
