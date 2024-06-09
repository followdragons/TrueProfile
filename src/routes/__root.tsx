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
import { useTonConnect } from "~/hooks/useTonConnect.ts";

import { TanStackQueryDevtools } from "../components/TanStackQueryDevTools";
import { TanStackRouterDevtools } from "../components/TanstackRouterDevTools";

WebApp.ready();
WebApp.expand();

function extractSegment(inputString) {
  // Check if the input string is long enough
  if (inputString.length <= 6) {
    return "Input string is too short";
  }

  // Extract the starting part (from the 3rd character)
  const start = inputString.substring(2, 5);

  // Extract the ending part (4 characters from the end)
  const end = inputString.substring(inputString.length - 4);

  // Combine the start, ellipsis, and end parts
  const resultString = `${start}...${end}`;

  return resultString;
}

export const Route = createRootRoute({
  component: () => {
    const { address } = useTonConnect();
    console.log(address, "address");
    const router = useRouter();
    const isSearch =
      router.history.location.pathname === "/TonRockPaperScissors/";
    const isRating =
      router.history.location.pathname === "/TonRockPaperScissors/rate";

    const isMyProfile =
      router.history.location.pathname === "/TonRockPaperScissors/myprofile";

    return (
      <div className="flex h-screen w-screen flex-col">
        <Outlet />
        {address ? (
          <div
            style={{
              backgroundColor: "#FFFFFFF2",
              borderBottom: "1px solid #00000026",
            }}
          >
            Address: {extractSegment(address)}
          </div>
        ) : null}
        {/*<div className="p-2 flex gap-2">*/}
        {/*  <Link to="/" className="[&.active]:font-bold">*/}
        {/*    Home*/}
        {/*  </Link>{' '}*/}
        {/*  <Link to="/about" className="[&.active]:font-bold">*/}
        {/*    About*/}
        {/*  </Link>*/}
        {/*</div>*/}
        {/*<hr />*/}
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
          <Link to="/myprofile">
            <Profile active={isMyProfile} />
          </Link>
        </div>
      </div>
    );
  },
});
