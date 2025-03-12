export const config = {
    rpcUrl: "https://16600.rpc.thirdweb.com/", // Replace with appropriate RPC
    gasLimitMultiplier: 1.2, // 120% of estimated gas to prevent transaction failure
    gasLimitManual: 1000000, // Default gas limit if estimation is not used
    gasPriceGwei: "0.1" // Gas price in Gwei
};