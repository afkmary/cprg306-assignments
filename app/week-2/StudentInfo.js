import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      <h2>Name: Mary Garcia</h2>
      <p>
        GitHub Repo:{" "}
        <Link href="https://github.com/afkmary/cprg306-assignments" className="link">
          https://github.com/afkmary/cprg306-assignments
        </Link>
      </p>
    </div>
  );
}
