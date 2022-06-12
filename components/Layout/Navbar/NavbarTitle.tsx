import Link from 'next/link'

const blogTitle = 'ブログタイトル'

export const NavbarTitle = (): JSX.Element => {
  return(
    <Link href="/">
      <div className="font-bold text-myTextColor cursor-pointer">
        {blogTitle}
      </div>
    </Link>
  )
};
