import { getTask } from "@/utils/actions";
import Link from "next/link";
import EditForm from "@/components/EditForm";

const SingleTaskPage = async ({ params }) => {
  const task = await getTask(params.id);
  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent mb-5">
          Back to tasks
        </Link>
        <EditForm task={task} />
      </div>
    </>
  );
};

export default SingleTaskPage;
