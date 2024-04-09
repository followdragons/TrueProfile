import { createRootRoute, Outlet } from "@tanstack/react-router";
import WebApp from "@twa-dev/sdk";
import { Suspense } from "react";

import { TanStackQueryDevtools } from "../components/TanStackQueryDevTools";
import { TanStackRouterDevtools } from "../components/TanstackRouterDevTools";

WebApp.ready();
WebApp.expand();

export const Route = createRootRoute({
  component: () => (
    <div className="flex h-screen w-screen flex-col">
      {/*<div className="p-2 flex gap-2">*/}
      {/*  <Link to="/" className="[&.active]:font-bold">*/}
      {/*    Home*/}
      {/*  </Link>{' '}*/}
      {/*  <Link to="/about" className="[&.active]:font-bold">*/}
      {/*    About*/}
      {/*  </Link>*/}
      {/*</div>*/}
      {/*<hr />*/}
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
      <Suspense>
        <TanStackQueryDevtools />
      </Suspense>
    </div>
  ),
});
