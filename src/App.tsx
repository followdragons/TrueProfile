import { RouterProvider, createRouter } from '@tanstack/react-router'
import './App.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { env } from './env'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const App = () => (
  <TonConnectUIProvider
    manifestUrl="https://valeryv99.github.io/TonRockPaperScissors/tonconnect-manifest.json"
    actionsConfiguration={{
      twaReturnUrl: "https://t.me/valery_99_bot",
    }}
  >
    <RouterProvider router={router} basepath={env.VITE_BASE_URL} />
  </TonConnectUIProvider>
)



export default App;
