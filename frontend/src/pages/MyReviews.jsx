import { useSelector } from "react-redux";
import AllReviews from "../components/reviewLists/AllReviews";

function MyReviews() {
  const auth = useSelector((state) => state.auth);

  return (
    <>
      <AllReviews title={`${auth.user.name} - my reviews`} user={true} />
    </>
  );
}

export default MyReviews;
