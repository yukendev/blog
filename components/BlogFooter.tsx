import { Blog } from "../types";
import { TagCard } from "./TagCard";
import { Tag } from "../data/tags/type";

import Twitter from "../images/Twitter.svg";
import Clip from "../images/Clip.svg";

import { useState } from "react";

type BlogFooterProps = {
  tags: Tag[];
  blog: Blog;
};

type CopiedTooltipPropsType = {
  isHidden: boolean;
};

const CopiedTooltip = (props: CopiedTooltipPropsType) => {
  const { isHidden } = props;
  return (
    <div
      className="absolute -top-8 p-1 rounded text-slate-400"
      hidden={isHidden}
    >
      copied!
    </div>
  );
};

export const BlogFooter = (props: BlogFooterProps): JSX.Element => {
  const { tags, blog } = props;
  const [isHiddenCopied, setIsHiddenCopied] = useState(true);

  const getURL = (blogId: string): string => {
    return `https://www.yukendev.com/blog/${blogId}aaa`;
  };

  const copyButtonHandler = () => {
    try {
      navigator.clipboard.writeText(location.href);
      setIsHiddenCopied(false);
      setTimeout(() => {
        setIsHiddenCopied(true);
      }, 2000);
    } catch {
      console.log("An Error was occured with copy");
    }
  };

  return (
    <div>
      {/* タグ */}
      <div className="flex flex-wrap my-5">
        {tags.map((tag) => {
          return <TagCard tag={tag} />;
        })}
      </div>

      {/* シェアボタン */}
      <div className="my-10">シェアをしていただけると僕が大変喜びます。</div>

      <div className="flex justify-center">
        {/* twitter */}
        <div className="mr-3">
          <Twitter widht={40} height={40} />
        </div>

        {/* コピー */}
        <div className="relative flex justify-center ml-3">
          <CopiedTooltip isHidden={isHiddenCopied} />
          <button onClick={copyButtonHandler}>
            <Clip widht={40} height={40} />
          </button>
        </div>
      </div>
    </div>
  );
};
