import { useEffect, useOptimistic, useState, startTransition } from "react";
import { BASE_URL } from "../constants";

function OptimisticForm() {
  const [data, setData] = useState([]);
  const [optimisticData, setOptimisticData] = useOptimistic(
    data,
    (currentData, optimisticValue) => [
      { ...optimisticValue, isPending: true },
      ...currentData,
    ]
  );

  useEffect(() => {
    fetch(`${BASE_URL}/posts`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const submitAction = async (formData) => {
    const form = Object.fromEntries(formData.entries());
    setOptimisticData(form);
    // fetch
    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const data = await response.json();
      startTransition(() => {
        setData((previousData) => [data, ...previousData]);
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <form action={submitAction}>
        <input name="title" type="text" placeholder="Title" />
        <input name="body" type="text" placeholder="Body" />
        <button type="submit">Submit</button>
      </form>
      <div>
        {optimisticData?.map((post, index) => (
          <div key={index}>
            <span>{post?.title}</span>
            {post?.isPending && (
              <span style={{ fontSize: "12px" }}>Loading...</span>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default OptimisticForm;
