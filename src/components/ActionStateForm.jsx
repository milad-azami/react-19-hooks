import { useActionState } from "react";
import { BASE_URL } from "../constants";
import SubmitButton from "./SubmitButton";

function ActionStateForm() {
  const [state, submitAction] = useActionState(createPost, null);
  //   console.log("ActionStateForm rerendered");

  async function createPost(previousState, formData) {
    const form = Object.fromEntries(formData.entries());
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
      return { data, error: null };
    } catch (err) {
      return { ...previousState, error: err.message };
    }
  }

  return (
    <form action={submitAction}>
      <input name="title" type="text" placeholder="Title" />
      <input name="body" type="text" placeholder="Body" />

      {/* <button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button> */}
      <SubmitButton />

      {!!state?.error && <pre>{state.error}</pre>}

      {!!state?.data && <pre>{JSON.stringify(state.data)}</pre>}
    </form>
  );
}

export default ActionStateForm;
