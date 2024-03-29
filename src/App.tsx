import './App.css'

import {TonConnectButton, TonConnectUIProvider} from "@tonconnect/ui-react";

function App() {
  return (
      <TonConnectUIProvider
          manifestUrl="https://valeryv99.github.io/TonRockPaperScissors/tonconnect-manifest.json"
          // actionsConfiguration={{
            // twaReturnUrl: 'https://t.me/<YOUR_APP_NAME>'
        // }}
      >
          <span>My App with React UI</span>
          <TonConnectButton/>
      </TonConnectUIProvider>
  )
}

export default App
