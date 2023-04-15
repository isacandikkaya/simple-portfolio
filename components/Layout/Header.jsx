import Link from "next/link";
export default function Header() {
  return (
    <>
      <div className="flex justify-center">
        <div>
          <Link href="/">
            <a className="ptext-white font-bold text-4xl"></a>
          </Link>
        </div>
      </div>
    </>
  );
}
