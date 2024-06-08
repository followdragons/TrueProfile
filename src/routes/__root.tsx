import {
  createRootRoute,
  Link,
  Outlet,
  useRouter,
} from "@tanstack/react-router";
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
  component: () => {
    const router = useRouter();
    const isSearch =
      router.history.location.pathname === "/TonRockPaperScissors/";
    const isRating =
      router.history.location.pathname === "/TonRockPaperScissors/rate";

    return (
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
          <Link to="/rate">
            <Rate active={isRating} />
          </Link>
          <Link to="/">
            <Search active={isSearch} />
          </Link>
          <div>
            <Profile />
          </div>
        </div>
      </div>
    );
  },
});
