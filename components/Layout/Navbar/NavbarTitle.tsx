import Link from "next/link";

const blogTitle = "てずかのブログ";

export const NavbarTitle = (): JSX.Element => {
  return (
    <Link href="/">
      <div className="w-32 font-bold text-center text-myTextColor cursor-pointer">
        {blogTitle}
      </div>
    </Link>
  );
};
