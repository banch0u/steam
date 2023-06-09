import Link from "next/link";
import React from "react";
import { DownloadIcon, SearchIcon } from "@/icons";
import Wrapper from "../../UI/wrapper";
import InnerContainer from "../../UI/innerContainer";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styles from "./index.module.css";
import SteamLogo from "../../../assets/steam_logo.svg";
import Image from "next/image";
const Header = () => {
  const options = [
    "简体中文 (Simplified Chinese)",
    "繁體中文 (Traditional Chinese)",
    "日本語 (Japanese)",
    "한국어 (Korean)",
    "ไทย (Thai)",
    "Български (Bulgarian)",
    "Čeština (Czech)",
    "Dansk (Danish)",
    "Deutsch (German)",
    "Español - España (Spanish - Spain)",
    "Español - Latinoamérica (Spanish - Latin America)",
    "Ελληνικά (Greek)",
    "Français (French)",
    "Italiano (Italian)",
    "Magyar (Hungarian)",
    "Nederlands (Dutch)",
    "Norsk (Norwegian)",
    "Polski (Polish)",
    "Português (Portuguese - Portugal)",
    "Português - Brasil (Portuguese - Brazil)",
    "Română (Romanian)",
    "Русский (Russian)",
    "Suomi (Finnish)",
    "Svenska (Swedish)",
    "Türkçe (Turkish)",
    "Tiếng Việt (Vietnamese)",
    "Українська (Ukrainian)",
    "Report a translation problem",
  ];

  return (
    <>
      <header className="bg-steam-900 py-2">
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
                <Dropdown
                  options={options}
                  // onChange={this._onSelect}
                  placeholder="language"
                  controlClassName={styles["dropdown"]}
                  arrowClassName={styles["dropdown-arrow"]}
                  menuClassName={styles["dropdown-menu"]}
                />
              </div>
            </div>
            <div className="text-sm flex items-center gap-16 text-steam-100 pb-6">
              <Link href={"/"}>
                <Image src={SteamLogo} width="150" />
              </Link>
              <ul className="flex gap-4">
                <li className="hover:text-white">
                  <a href="">STORE </a>
                </li>
                <li className="hover:text-white">
                  <a href="">COMMUNITY </a>
                </li>
                <li className="hover:text-white">
                  <a href="">ABOUT </a>
                </li>
                <li className="hover:text-white">
                  <a href=""> SUPPORT</a>
                </li>
              </ul>
            </div>
          </InnerContainer>
        </Wrapper>
      </header>
      <Wrapper>
        <InnerContainer>
          <nav className={styles["nav"]}>
            <ul className="flex text-sm items-center">
              <li>
                <Link href={""}>Your Store</Link>
              </li>
              <li>
                <Link href={""}>New & Noteworthy</Link>
              </li>
              <li>
                <Link href={""}>Categories</Link>
              </li>
              <li>
                <Link href={""}>Points Shop</Link>
              </li>
              <li>
                <Link href={""}>News</Link>
              </li>
              <li>
                <Link href={""}>Labs</Link>
              </li>
            </ul>
            <form className="flex px-2">
              <input type="text" placeholder="search" className="px-2" />
              <button className="px-4 w-12 py-1 bg-steam-300">
                <SearchIcon />
              </button>
            </form>
          </nav>
        </InnerContainer>
      </Wrapper>
    </>
  );
};

export default Header;
