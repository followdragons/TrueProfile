import { createRootRoute, Outlet } from "@tanstack/react-router";
import WebApp from "@twa-dev/sdk";
import { Suspense } from "react";
import { FaSearch } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { ImProfile } from "react-icons/im";

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
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-around",
          fontSize: 30,
          padding: 20,
          background: "rgb(229, 231, 235)",
          color: "white",
        }}
      >
        <div
          className="bg-blue-500"
          style={{
            padding: "30px",
            borderRadius: "50%",
            borderTopLeftRadius: "0px",
            borderBottomLeftRadius: "0px",
          }}
        >
          <GiPodiumWinner />
        </div>
        <div
          className="bg-blue-500"
          style={{ padding: "30px", borderRadius: "50%" }}
        >
          <FaSearch />
        </div>
        <div
          className="bg-blue-500"
          style={{
            padding: "30px",
            borderRadius: "50%",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
        >
          <ImProfile />
        </div>
      </div>
    </div>
  ),
});
