"use client";

import { DeleteBook } from "@/actions/action";
import { useFormStatus } from "react-dom";

export function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      disabled={pending}
      type="submit"
    >
      {pending ? "Adding..." : "Add"}
    </button>
  );
}

export function DeleteButton({ id }: { id: string }) {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded"
      onClick={() => DeleteBook(id)}
      disabled={pending}
    >
      Delete
    </button>
  );
}
