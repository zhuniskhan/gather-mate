import Link from "next/link";
import Image from "next/image";

function Sidebar() {
  return (
    <div className="flex flex-col justify-between h-full">
      <Image src="/logo.svg" alt="" width={50} height={50} />
      <nav>
        <ul>
          <li className="mb-2">
            <button>
              <Link
                href="/profile"
                className="text-blue-500 hover:text-blue-300"
              />
              <p>Profile</p>
            </button>
          </li>
          <li className="mb-2">
            <Link href="/about" className="text-blue-500 hover:text-blue-300" />
            <p>Events</p>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-blue-500 hover:text-blue-300"
            />
          </li>
        </ul>
      </nav>
      <Image src="/sun-medium.svg" alt="" width={30} height={30} />
    </div>
  );
}

export default Sidebar;
