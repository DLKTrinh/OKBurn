// testOkx.js
import { fetchOkxBalance } from "./src/api/okxApi.js"; // adjust if path is different

const test = async () => {
  const testAddress = "0x7F8d94814b0A9cA18520cA2Bc5511E0d41cAAB26"; // replace with real address
  const result = await fetchOkxBalance(testAddress);
  console.log("Balance totalValue:", result);
};

test();
