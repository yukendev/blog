import Link from 'next/link'

type NavBarContentWrapperProps = {
  title: string,
  href: string
}

const NavBarContentWrapper = (props: NavBarContentWrapperProps): JSX.Element => {
  const { title, href } = props;
  return (
    <Link href={href}>
      <div className="rounded px-2 py-1 mx-3 text-myTextColor cursor-pointer hover:bg-myBgColorHover">
        {title}
      </div>
    </Link>
  )
}


export const NavbarContetts = (): JSX.Element => {
  return (
    <div className="flex mx-10">
      {/* Home */}
      <NavBarContentWrapper title='Home' href='/'/>

      {/* About */}
      <NavBarContentWrapper title='About' href='/'/>

      {/* Twitter */}
      <NavBarContentWrapper title='Twitter' href='/'/>

      {/* Github */}
      <NavBarContentWrapper title='Github' href='/'/>

    </div>
  )
}