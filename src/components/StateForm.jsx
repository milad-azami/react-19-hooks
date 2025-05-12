import { useState } from "react";
import { BASE_URL } from "../constant";

import "../App.css";

const StateForm = () => {
  const [formData, setFormData] = useState({ title: "", body: "" });
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsPending(true);
    setError(null);

    try {
      const response = await fetch(`${BASE_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        id="body"
        name="body"
        type="text"
        placeholder="Body"
        value={formData.body}
        onChange={handleChange}
      />

      <button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {data && <pre>{JSON.stringify(data)}</pre>}
    </form>
  );
};

export default StateForm;
