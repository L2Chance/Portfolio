export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} - Perez Lautaro Ivan
        </p>
      </div>
    </footer>
  );
}
