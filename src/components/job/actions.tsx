import Link from "next/link";
import { useSession } from "next-auth/client";

const Actions = ({
  onEdit,
  onDuplicate,
}: {
  onEdit: () => void;
  onDuplicate: () => void;
}) => {
  const [session] = useSession();

  return (
    <div className="flex flex-col">
      <Link href={`#apply-now`}>
        <a className="btn">Apply now</a>
      </Link>
      {session && (
        <>
          <button className="mt-5 admin" onClick={onEdit}>
            Edit job
          </button>
          <button className="mt-5 admin" onClick={onDuplicate}>
            Duplicate
          </button>
        </>
      )}
    </div>
  );
};

export default Actions;
