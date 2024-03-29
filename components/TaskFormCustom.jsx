"use client";
import { createTaskCustom } from "@/utils/actions";
import { useEffect } from "react";

import { useFormState } from "react-dom";
import toast from "react-hot-toast";
import { SubmitBtn } from "./SubmitBtn";

// const SubmitBtn = () => {
//   const { pending } = useFormStatus();
//   return (
//     <button
//       type="submit"
//       className="btn btn-primary join-item"
//       disabled={pending}
//     >
//       {pending ? "please wait..." : "create task"}
//     </button>
//   );
// };

const initialState = {
  message: null,
};

const TaskForm = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState);
  useEffect(() => {
    if (state.message && state.message.toLowerCase().includes("error")) {
      toast.error(state.message);
      return;
    }
    if (state.message) {
      toast.success("task created");
    }
  }, [state]);
  return (
    <form action={formAction}>
      {/* {state.message ? <p className='mb-2'>{state.message}</p> : null} */}
      <div className="join w-full">
        <input
          type="text "
          className="input input-bordered join-item w-full"
          placeholder="type here"
          name="content"
          required
        />
        <SubmitBtn />
      </div>
    </form>
  );
};
export default TaskForm;
