export default function Header() {
  return (
    <header className="bg-neutral-800 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <ul className="flex gap-4">
          <li>
            <a href="#" className="hover:text-teal-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-teal-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
