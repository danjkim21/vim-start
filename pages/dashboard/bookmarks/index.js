import DashboardLayout from "../Layout";
import useGetBookmarks from "../../../hooks/useGetBookmarks.js";
import Link from "next/link";

const Bookmarks = () => {
  const { bookmarks, setBookmarks, error, status } = useGetBookmarks();
  let placeholder;
  let bookmarkItems;

  if (status !== 200) {
    placeholder = (
      <article className="w-full">
        <span className="text-green-300">{`<p>`}</span>
        <span>Loading ...</span>
        <span className="text-green-300">{`</p>`}</span>
      </article>
    );
  }

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
        {placeholder}
        {bookmarkItems}
      </>
    </DashboardLayout>
  );
};

export default Bookmarks;
