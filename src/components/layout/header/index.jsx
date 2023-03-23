import Link from "next/link";
import React from "react";
import { DownloadIcon } from "@/icons";
import Wrapper from "./UI/wrapper";
import InnerContainer from "./UI/innerContainer";
const Header = () => {
  return (
    <header className="bg-steam-900">
      <Wrapper>
        <InnerContainer>
          <div className="text-xs flex justify-end gap-2">
            <Link
              href={""}
              className="inline-flex items-center gap-1 bg-green-600 px-2 py-1 text-steam-100 hover:text-white transition"
            >
              <DownloadIcon /> <span>Install Steam</span>
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href={""}
                className="text-steam-100 hover:text-white transition"
              >
                login
              </Link>
              <div className="text-steam-100 hover:text-white transition">
                language
              </div>
            </div>
          </div>
        </InnerContainer>
      </Wrapper>
    </header>
  );
};

export default Header;
