"use client";

import { useFormStatus } from "react-dom";

function FormSumbit() {
  const status = useFormStatus();

  if (status.pending) {
    return <p>Post is creating...</p>;
  }
  return (
    <>
      <button type="reset">Reset</button>
      <button>Create Post</button>
    </>
  );
}

export default FormSumbit;
