import { useEffect, useState } from "react";

const FloatingWidget = () => {
  const [balance, setBalance] = useState<number | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:5000");

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.balance) {
        setBalance(data.balance);
      }
    };

    ws.onopen = () => console.log("Connected to backend WebSocket");
    ws.onclose = () => console.log("Disconnected from backend WebSocket");

    return () => ws.close();
  }, []);

  const formattedBalance =
    balance === null ? "Loading..." : `$${(balance).toFixed(3)}`;

  return (
    <div className="fixed top-3/4 right-6 bg-white rounded-xl shadow-2xl p-4 border border-gray-100 max-w-sm z-50">
      <div className="flex items-center gap-4">
        <img src="/Logo.png" alt="Logo" className="h-18 w-auto" />
        <div>
          <p className="text-s text-gray-600">Total Balance</p>
          <p className="font-bold text-[#222222]">{formattedBalance}</p>
        </div>
      </div>
    </div>
  );
};

export default FloatingWidget;
