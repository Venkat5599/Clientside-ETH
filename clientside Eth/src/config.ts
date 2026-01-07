import {http , createConfig} from  'wagmi'
import {mainnet} from 'wagmi/chains'
import { injected    } from 'wagmi/connectors'

export const config =   createConfig({
    connectors: [injected()],
    chains : [mainnet],
    transports: {
        [mainnet.id]: http("https://eth-mainnet.g.alchemy.com/v2/osNDT-Vg5w_9RP8a43U_S"), 

    },

}) 
