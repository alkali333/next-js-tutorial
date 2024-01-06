"use client";
import React from "react";
import { deleteTask } from "@/utils/actions";
import { useFormStatus } from "react-dom";

const DeleteButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      className="btn btn-xs text-black bg-red-800 hover:bg-red-600 uppercase"
      disabled={pending}
    >
      {pending ? "pending... " : "delete"}
    </button>
  );
};

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type="hidden" name="id" value={id} />
      <DeleteButton />
    </form>
  );
};

export default DeleteForm;
