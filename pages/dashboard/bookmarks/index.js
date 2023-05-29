import DashboardLayout from "../Layout";
import useGetBookmarks from "../../../hooks/useGetBookmarks.js";
import Link from "next/link";
import Tag from "@/components/Tag";

const Bookmarks = () => {
  const { bookmarks, setBookmarks, error, status } = useGetBookmarks();
  let placeholder;
  let bookmarkItems;

  if (status !== 200) {
    placeholder = (
      <article className="w-full">
        <Tag tagName="p" tagColor="text-green-300">
          Loading ...
        </Tag>
      </article>
    );
  }

  if (bookmarks && status === 200) {
    bookmarkItems = bookmarks.map((bookmark) => {
      return (
        <article className="w-full" key={bookmark.id}>
          <Link href={bookmark.link}>
            <Tag tagName="a" tagColor="text-cyan-300">
              {bookmark.title}
            </Tag>
            <span className="text-gray-400">{` // ${bookmark.description}`}</span>
          </Link>
        </article>
      );
    });
  }

  return (
    <DashboardLayout>
      <>
        <h1>
          <Tag tagName="h1" tagColor="text-purple-300">
            Bookmarks
          </Tag>
        </h1>
        {placeholder}
        {bookmarkItems}
      </>
    </DashboardLayout>
  );
};

export default Bookmarks;
