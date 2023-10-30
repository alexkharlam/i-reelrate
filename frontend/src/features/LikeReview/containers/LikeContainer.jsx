import { useContext, useEffect } from "react";

import LikeButton from "../components/LikeButton";
import { LikeContext } from "../context/LikeContext";

function LikeContainer() {
  const { getLike } = useContext(LikeContext);

  useEffect(() => {
    getLike();
  }, [getLike]);

  return <LikeButton />;
}

export default LikeContainer;
