import { createRootRoute, Outlet } from "@tanstack/react-router";
import WebApp from "@twa-dev/sdk";
import { Suspense } from "react";
import { FaSearch } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { ImProfile } from "react-icons/im";

import { Profile } from "~/assets/Profile.tsx";
import { Rate } from "~/assets/Rate.tsx";
import { Search } from "~/assets/Search.tsx";

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
      {/*<Suspense>*/}
      {/*  <TanStackRouterDevtools />*/}
      {/*</Suspense>*/}
      {/*<Suspense>*/}
      {/*  <TanStackQueryDevtools />*/}
      {/*</Suspense>*/}
      <div
        style={{
          backgroundColor: "#FFFFFFF2",
          borderTop: "1px solid #00000026",
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-around",
          padding: 16,
          background: "white",
          height: 107,
        }}
      >
        <div>
          <Rate />
        </div>
        <div>
          <Search />
        </div>
        <div>
          <Profile />
        </div>
      </div>
    </div>
  ),
});
