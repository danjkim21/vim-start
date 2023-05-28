import DashboardLayout from "../Layout";
import useGetBookmarks from "../../../hooks/useGetBookmarks.js";
import Link from "next/link";

const Bookmarks = () => {
  const { bookmarks, setBookmarks, error, status } = useGetBookmarks();
  let bookmarkItems;

  if (bookmarks && status === 200) {
    bookmarkItems = bookmarks.map((bookmark) => {
      return (
        <article className="w-full" key={bookmark.id}>
          <Link href={bookmark.link}>
            <span className="text-cyan-300">{`<a>`}</span>
            <span>{bookmark.title}</span>
            <span className="text-cyan-300">{`</a>`}</span>
          </Link>
        </article>
      );
    });
  }

  return (
    <DashboardLayout>
      <>
        <h1>
          <span className="text-purple-300">{`<h1>`}</span>
          <span>Bookmarks</span>
          <span className="text-purple-300">{`</h1>`}</span>
        </h1>
        {bookmarkItems}
      </>
    </DashboardLayout>
  );
};

export default Bookmarks;
