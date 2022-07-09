import Link from "next/link";
import { metaDataForBlog } from "../../../data/meta";
import BouzuyaImg from "../../../images/Bouzuya.svg";

const { title } = metaDataForBlog;

export const NavbarTitle = (): JSX.Element => {
  return (
    <Link href="/">
      <div className="flex items-center w-32 font-bold text-center text-myTextColor cursor-pointer">
        <BouzuyaImg widht={30} height={30} />
        {title}
      </div>
    </Link>
  );
};
