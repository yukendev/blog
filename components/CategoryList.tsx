import Link from "next/link";
import TechImg from "../images/CategoryTech.svg";
import BookImg from "../images/CategoryBook.svg";
import NoteImg from "../images/CategoryNote.svg";

type CategoryListWrapperProps = {
  image: JSX.Element;
  title: string;
  href: string;
};

const CategoryListWrapper = (props: CategoryListWrapperProps): JSX.Element => {
  const { image, title, href } = props;
  return (
    <Link href={href}>
      <div className="cursor-pointer mx-5 group">
        <div className="rounded-full group-hover:bg-myBgColorHover">
          {image}
        </div>
        <div className="text-center text-myTextColor">{title}</div>
      </div>
    </Link>
  );
};

export const CategoryList = (): JSX.Element => {
  return (
    <div className="flex flex-wrap">
      {/* Technology */}
      <CategoryListWrapper
        image={<TechImg widht={50} height={50} />}
        title="Tech"
        href="/categories/tech"
      />

      {/* Book */}
      <CategoryListWrapper
        image={<BookImg widht={50} height={50} />}
        title="Book"
        href="/categories/book"
      />

      {/* Note */}
      <CategoryListWrapper
        image={<NoteImg widht={50} height={50} />}
        title="Note"
        href="/categories/note"
      />
    </div>
  );
};
