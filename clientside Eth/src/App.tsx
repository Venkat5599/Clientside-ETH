import{ QueryClient, QueryClientProvider } from  '@tanstack/react-query'
import { useConnectors,  WagmiProvider } from 'wagmi'
import './App.css'
import { config } from './config'


const client = new QueryClient()
function App() {

  return (
<WagmiProvider  config={ config }>
  <QueryClientProvider  client = {client}>
    <ConnectWallet />
  </QueryClientProvider>
   </WagmiProvider>   
  )
}
function ConnectWallet(){

  const connectors = useConnectors()
  return (
   <div>
      {connectors.map((c) => (
        <button key={c.uid}>
          connect via {c.name}
        </button>
      ))}
    </div>
  )
  

}

export default App
