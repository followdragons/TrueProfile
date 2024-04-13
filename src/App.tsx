import "./App.css";

import { QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { TonConnectUIProvider } from "@tonconnect/ui-react";

import { TonClientProvider } from "./context/TonClient";
import { env } from "./env";
import { queryClient } from "./libs/queries/queryClient";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
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
);

export default App;
