export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`fixed inset-0 z-30 md:hidden transition-all duration-300 ${
      menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`}>
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md"></div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center space-y-8">
          {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="block text-3xl font-semibold text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:scale-110"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};