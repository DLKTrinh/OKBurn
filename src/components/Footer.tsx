
const Footer = () => {
  return (
    <footer id="contact" className="bg-[#1a1a1a] border-t border-[#333333] py-6">
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between text-gray-400 text-sm px-4">
       
        {/* Left: Logo (stick to left edge) */}
        <div className="flex items-center gap-2">
          <img src="./OKBURN_banner.png" alt="OKBURN Logo" className="h-18 w-auto" />
        </div>
       
        {/* Center: Text (stay centered) */}
        <div className="flex-1 text-center">
          {/* Social Links */}
          <div className="flex justify-center mb-3">
            <a 
              href="https://twitter.com/okburn_xlayer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Follow OKBURN on Twitter"
            >
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path 
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" 
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          
          <p>© 2025 OKBURN. All rights reserved.</p>
          <p className="text-xs mt-1">
            Disclaimer: OKBURN is an experimental decentralized protocol.  
 No guaranteed returns. DYOR before using.
          </p>
        </div>
        
        {/* Right: Placeholder for balance */}
        <div className="w-16">{/* keeps spacing balanced */}</div>
      </div>
    </footer>
  );
};

export default Footer;