import DashboardLayout from "../Layout";
import useGetBookmarks from "../../../hooks/useGetBookmarks.js";

const Bookmarks = () => {
  const { bookmarks, setBookmarks, error, status } = useGetBookmarks();
  console.log(bookmarks, status);

  return (
    <DashboardLayout>
      <>Bookmarks page</>
    </DashboardLayout>
  );
};

export default Bookmarks;
