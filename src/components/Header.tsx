import { useState } from 'react';
import { Menu, X, Wallet, ShoppingCart } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigationLinks = ['About', 'Features', 'Tokenomic', 'Roadmap', 'Contact'];
  
  return (
    <header className="fixed top-0 left-0 w-full bg-[#262626] z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center ">
                <img
                  src="/OKBURN_banner.png"
                  alt="Logo"
                  className="h-20 w-auto"
                />
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8 items-center">
              {navigationLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white hover:text-[#FF0000] transition-colors duration-200 font-medium"
                >
                  {link}
                </a>
              ))}
              
              {/* Buy Button */}
              <a 
              href='https://okoswap.com/?outAddr=0x6205109a521e349305e76c21f5491b51ac1a5afb'
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
                <ShoppingCart size={16} />
                <span>Buy $OKBURN</span>
              </a>
            </nav>
            
            <button className="bg-[#FF0000] hover:bg-[#B30000] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
              <Wallet size={16} />
              <span>Connect</span>
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#FF0000] transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              {navigationLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-white hover:text-[#FF0000] transition-colors duration-200 font-medium px-2"
                >
                  {link}
                </a>
              ))}
              
              {/* Mobile Buy Button */}
              <a 
                href="https://okoswap.com/?outAddr=0x6205109a521e349305e76c21f5491b51ac1a5afb" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 justify-center mx-2"
              >
                <ShoppingCart size={16} />
                <span>Buy $OKBURN</span>
              </a>
              
              <button className="bg-[#FF0000] hover:bg-[#B30000] text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2 mx-2 justify-center">
                <Wallet size={16} />
                <span>Connect</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;