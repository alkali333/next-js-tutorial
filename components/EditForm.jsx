import { editTask } from "@/utils/actions";

const initialState = {
  message: null,
};

const EditForm = ({ task }) => {
  const { id, completed, content } = task;

  return (
    <form
      action={editTask}
      className="max-w-sm p-12 border border-base-300 rounded-lg"
    >
      <input type="hidden" name="id" value={id} />
      <input
        type="text"
        required
        defaultValue={content}
        name="content"
        className="input input-bordered w-full"
      />
      <div className="form-control mb-4">
        <label
          htmlFor="completed"
          className="flex justify-end cursor-pointer space-x-2 py-3"
        >
          <span className="text-sm font-medium">completed</span>
          <input
            type="checkbox"
            defaultChecked={completed}
            id="completed"
            name="completed"
            className="checkbox checkbox-primary checkbox-sm"
          />
        </label>
        <button type="submit" className="btn btn-primary btn-block btn-small">
          Update
        </button>
      </div>
    </form>
  );
};

export default EditForm;
