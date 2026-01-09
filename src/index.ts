import { id, JsonRpcProvider } from "ethers";

const provider = new JsonRpcProvider(
  "https://eth-mainnet.g.alchemy.com/v2/osNDT-Vg5w_9RP8a43U_S");
    
  async function pollBlock(blockNumber: number) {
  const logs = await provider.getLogs({
    address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    fromBlock: blockNumber as number,
    toBlock: blockNumber as number,
    topics: [id("Transfer(address,address,uint256)")]
  });

  console.log(logs);
}

async function main(){
    const currentblock =  1;
    while(1){
        await  pollBlock(currentblock )
    }
}