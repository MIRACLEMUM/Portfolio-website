export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        

        {/* Quick Links */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-gray-200 mb-2">Quick Links</h2>
          <a href="#home" className="hover:text-green-500 transition">Home</a>
          <a href="#projects" className="hover:text-green-500 transition">Projects</a>
          <a href="#contact" className="hover:text-green-500 transition">Contact</a>
          <a href="#about" className="hover:text-green-500 transition">About</a>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-3">
          <h2 className="text-lg font-semibold text-gray-200 mb-2">Follow Me</h2>
          <div className="flex gap-4 mt-1">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10"></div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Miracle Sunday. All rights reserved.
      </div>
    </footer>
  );
}
