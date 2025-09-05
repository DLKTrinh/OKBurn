import { useState } from "react";
import { Copy, Wallet } from "lucide-react";

const WalletBar = () => {
  const walletAddress = "0x1234ABCD5678EF9012345678ABCD1234EF567890"; // sample wallet
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(walletAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="flex items-center bg-[#1a1a1a] border border-gray-800 rounded-xl p-3 max-w-xl text-wh">
      {/* Wallet address (selectable text) */}
      <p className="flex-1 text-white font-mono text-sm truncate cursor-text">
        <Wallet className="inline-block mr-2 mb-1 w-5 h-5" />
        {walletAddress}
      </p>

      {/* Copy button */}
      <button
        onClick={handleCopy}
        className="ml-3 p-2 rounded-lg bg-[#FF0000] text-white hover:bg-red-600 transition"
      >
        <Copy className="w-4 h-4" />
      </button>

      {/* Copy feedback */}
      {copied && (
        <span className="ml-2 text-white text-xs">Copied!</span>
      )}
    </div>
  );
};

export default WalletBar;
