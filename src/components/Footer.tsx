export default function Footer() {
  return (
    <footer className="bg-neutral-800 py-4 mt-8">
      <div className="container mx-auto text-center text-sm text-neutral-400">
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
}
