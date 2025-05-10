import { useActionState } from "react";

const ActionStateForm = () => {
  const [state, submitAction, isPending] = useActionState(createPost, {
    data: null,
    error: null,
  });

  async function createPost(previousState, formData) {
    // const title = formData.get("title");
    // const body = formData.get("body");

    const form = Object.fromEntries(formData.entries());
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status}`);
      }

      const data = await response.json();
      return { data, error: null };
    } catch (err) {
      return { data: previousState, error: err.message };
    }
  }

  return (
    <form action={submitAction}>
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Title"
        value={state.title}
      />
      <input
        id="body"
        name="body"
        type="text"
        placeholder="Body"
        value={state.body}
      />

      <button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button>

      {state.error && <p style={{ color: "red" }}>Error: {state.error}</p>}

      {state.data && <pre>{JSON.stringify(state.data)}</pre>}
    </form>
  );
};

export default ActionStateForm;
