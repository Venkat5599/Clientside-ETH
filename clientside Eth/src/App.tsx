import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useAccount , useConnection, useConnectors, useDisconnect, useConnect, WagmiProvider } from 'wagmi'
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
  const {address} = useAccount()
  const connectors = useConnectors()
  const {disconnect } = useDisconnect()
  const {connect} = useConnect()
  if(address){
    return (
      <div>
        you are connected {address}
        <button onClick={() => disconnect()}>Disocnneec</button>
      </div>
    )
  }
  return (
   <div>
      {connectors.map((connector => <button onClick = {() => 
      connect({connector: connector})
      }>
          connect via {connector.name}
        </button>
      ))}
    </div>
  )
  

}

export default App
