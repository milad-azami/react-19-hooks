import React, { useTransition } from "react";
import { BASE_URL } from "../constant";

function TransitionComponent() {
  const [isPending, startTransition] = useTransition();

  const getPost = async () => {
    const response = await fetch(`${BASE_URL}/posts/1`);
    const json = await response.json();
    return json;
  };

  const clickHandler = () => {
    startTransition(async () => {
      const result = await getPost();
      console.log(result);
    });
  };

  return (
    <div>
      <button onClick={clickHandler}>
        {isPending ? "Loading..." : "Fetch Data"}
      </button>
    </div>
  );
}

export default TransitionComponent;
