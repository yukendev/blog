import { TagPage } from '@components/pages/TagPage';
import { type Tag, tags } from '@constants/tags';

export default function Page({ params }: { params: { tag: Tag } }) {
  return <TagPage tag={decodeURI(params.tag) as Tag} />;
}

export const generateStaticParams = async () => {
  return tags.map((tag) => ({
    tag,
  }));
};
