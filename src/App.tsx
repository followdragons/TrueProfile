import { RouterProvider, createRouter } from '@tanstack/react-router'
import './App.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { env } from './env'
import { TonClientProvider } from './context/TonClient'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './libs/queries/queryClient'

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
  <QueryClientProvider client={queryClient}>
    <TonConnectUIProvider
      manifestUrl="https://valeryv99.github.io/TonRockPaperScissors/tonconnect-manifest.json"
      actionsConfiguration={{
        twaReturnUrl: "https://t.me/valery_99_bot",
      }}
    >
      <TonClientProvider>
        <RouterProvider router={router} basepath={env.VITE_BASE_URL} />
      </TonClientProvider>
    </TonConnectUIProvider>
  </QueryClientProvider>
)



export default App;
