export async function getOkxBalance(address: string): Promise<string> {
  try {
    const res = await fetch(`http://localhost:5000/api/balance/${address}`);
    if (!res.ok) throw new Error("Failed to fetch balance");

    const data: { balance?: string } = await res.json();
    return data.balance ?? "0"; // Return the balance string directly
  } catch (err) {
    console.error("API fetch error:", err);
    return "0";
  }
}
