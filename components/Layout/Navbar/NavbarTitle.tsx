import Link from "next/link";
import { metaDataForBlog } from "../../../data/meta";

const { title } = metaDataForBlog;

export const NavbarTitle = (): JSX.Element => {
  return (
    <Link href="/">
      <div className="w-32 font-bold text-center text-myTextColor cursor-pointer">
        {title}
      </div>
    </Link>
  );
};
