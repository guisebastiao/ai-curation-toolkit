import { Detail } from "@/components/detail";
import { Outlet } from "react-router-dom";
import ReactLenis from "lenis/react";

export const CommonRoute = () => {
  return (
    <ReactLenis root>
      <main className="relative flex flex-col items-center bg-background overflow-hidden">
        <Detail />
        <Outlet />
      </main>
    </ReactLenis>
  );
};
