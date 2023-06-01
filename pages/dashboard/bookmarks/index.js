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
        <li className="w-full" key={bookmark.id}>
          <Link href={bookmark.link} className="text-slate-200">
            <Tag tagName="a" tagColor="text-purple-400">
              {bookmark.title}
            </Tag>
          </Link>
          <span className="text-slate-400">{` // ${bookmark.description}`}</span>
        </li>
      );
    });
  }

  return (
    <DashboardLayout>
      <>
        <h1>
          <span className="text-violet-300">import</span> <span>{`{`}</span>{" "}
          <span className="text-orange-200">{`Bookmarks`}</span>{" "}
          <span>{`}`}</span> <span className="text-violet-300">from</span>{" "}
          <span>{`'`}</span>
          <span className="text-green-300">{`~/workspace/api`}</span>
          <span>{`'`}</span>
        </h1>

        <div className="mt-4 ">
          {placeholder}
          <ol className="list-decimal list-inside px-4 marker:text-slate-400">
            {bookmarkItems}
          </ol>
        </div>
      </>
    </DashboardLayout>
  );
};

export default Bookmarks;
