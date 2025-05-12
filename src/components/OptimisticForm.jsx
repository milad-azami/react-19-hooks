import { startTransition, useEffect, useOptimistic, useState } from "react";
import { BASE_URL } from "../constant";

const OptimisticForm = () => {
  const [data, setData] = useState([]);
  const [optimisticData, setOptimisticData] = useOptimistic(
    data,
    (state, newItem) => {
      return [{ ...newItem, isPending: true }, ...state];
    }
  );

  useEffect(() => {
    fetch(`${BASE_URL}/posts?userId=1`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const submitAction = async (formData) => {
    const form = Object.fromEntries(formData.entries());
    setOptimisticData(form);

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

      const result = await response.json();

      startTransition(() => {
        setData((prevData) => [result, ...prevData]);
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
        {optimisticData.map((opt, index) => (
          <div key={index}>
            <span>{opt?.title}</span>
            {opt.isPending && (
              <span style={{ fontSize: "8px", paddingLeft: "6px" }}>
                Loading...
              </span>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default OptimisticForm;
