import React from "react";
import { useTranslation } from "react-i18next";
import Translate from "../translate/Translate";
import { NavLink } from "react-router-dom";
import { Button } from "@mantine/core";
import "@/index.css";
const Header = () => {
  const { t } = useTranslation();
  return (
    <div
      // style={{ width: 200, height: 36, paddingTop: 44, paddingLeft: 38 }}
      className="w-[1420px] flex items-center justify-start mx-auto py-8 px-14"
    >
      <div>
        <svg
          className="w-40 h-9"
          // width={160}
          height={36}
          viewBox="0 0 160 43"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.4104 40.7111V42.6294H6.7431C3.01861 42.6294 0.000244141 39.6111 0.000244141 35.8874V7.15433C0.000244141 3.42616 3.01861 0.408203 6.7431 0.408203H28.4104V2.3229C26.7358 2.34902 25.377 3.71555 25.377 5.39677C25.377 7.07514 26.7358 8.44167 28.4104 8.46412V10.3862C26.7358 10.4127 25.377 11.7751 25.377 13.4572C25.377 15.1392 26.7358 16.5049 28.4104 16.5278V18.4462C26.7358 18.4727 25.377 19.8351 25.377 21.5204C25.377 23.1988 26.7358 24.5649 28.4104 24.5874V26.5098C26.7358 26.5323 25.377 27.8984 25.377 29.5804C25.377 31.2584 26.7358 32.6286 28.4104 32.6515V34.5694C26.7358 34.5923 25.377 35.9584 25.377 37.6409C25.377 39.3221 26.7358 40.6886 28.4104 40.7111"
            fill="#FFDC00"
          ></path>{" "}
          <path
            d="M124.469 30.4205C124.469 31.8278 123.327 32.9691 121.919 32.9691C120.512 32.9691 119.374 31.8278 119.374 30.4205C119.374 29.0123 120.512 27.8711 121.919 27.8711C123.327 27.8711 124.469 29.0123 124.469 30.4205Z"
            fill="#FFDC00"
          ></path>{" "}
          <path
            d="M11.6436 32.3849H15.4317V17.1028L11.6436 18.3792V32.3849Z"
            fill="#828283"
          ></path>{" "}
          <path
            d="M13.5391 10.6494C12.1313 10.6494 10.9897 11.7947 10.9897 13.1988C10.9897 14.6061 12.1313 15.7474 13.5391 15.7474C14.9468 15.7474 16.0885 14.6061 16.0885 13.1988C16.0885 11.7947 14.9468 10.6494 13.5391 10.6494Z"
            fill="#828283"
          ></path>{" "}
          <g className="text-color" fill="white">
            <path d="M38.7801 29.0307C38.2507 28.7414 37.9874 28.0471 37.9874 26.9585V20.1295H42.3205V17.1005H37.9874V13.1699L34.196 14.4087V17.1005H31.4099V20.1295H34.196V26.7222C34.196 30.1005 35.9303 31.5536 36.9625 32.116C37.845 32.6009 38.7947 32.796 39.7299 32.796C41.3858 32.796 43.0037 32.1805 44.1454 31.4524L42.1813 28.6209C41.0552 29.3422 39.5458 29.4507 38.7801 29.0307Z" />
            <path d="M48.6942 10.6494C47.2864 10.6494 46.1444 11.7947 46.1444 13.1988C46.1444 14.6061 47.2864 15.7474 48.6942 15.7474C50.102 15.7474 51.2436 14.6061 51.2436 13.1988C51.2436 11.7947 50.102 10.6494 48.6942 10.6494Z" />
            <path d="M46.7986 32.3849H50.5867V17.1028L46.7986 18.3792V32.3849Z" />
            <path d="M61.7797 20.1442C63.5483 20.1442 65.065 21.1956 65.7744 22.6969L69.0711 20.7977C67.7005 18.1626 64.9487 16.3564 61.7797 16.3564C57.2442 16.3564 53.5573 20.043 53.5573 24.5777C53.5573 29.1087 57.2442 32.7952 61.7797 32.7952C64.9487 32.7952 67.7005 30.9895 69.0711 28.3581L65.7744 26.4548C65.065 27.9569 63.5483 29.0079 61.7797 29.0079C59.3356 29.0079 57.3495 27.0181 57.3495 24.5777C57.3495 22.134 59.3356 20.1442 61.7797 20.1442Z" />
            <path d="M85.5175 16.9143H80.2273L75.2224 22.0498V9.95801L71.4342 11.2347V32.3845H75.2224V27.4821L76.2701 26.4119L81.2787 32.3845H86.2273L78.924 23.6825L85.5175 16.9143Z" />
            <path d="M90.4653 22.6707C91.1788 21.1838 92.6878 20.1446 94.449 20.1446C96.2062 20.1446 97.7155 21.1838 98.4323 22.6707H90.4653ZM94.449 16.3564C89.9172 16.3564 86.2266 20.0429 86.2266 24.5776C86.2266 29.1082 89.9172 32.7952 94.449 32.7952C97.4788 32.7952 100.126 31.1433 101.553 28.6919L98.2596 26.796C97.4935 28.1103 96.0821 29.007 94.449 29.007C92.3955 29.007 90.6792 27.5956 90.1764 25.6964H102.585C102.634 25.3282 102.668 24.9568 102.668 24.5776C102.668 23.9209 102.585 23.2821 102.435 22.6707C101.575 19.0556 98.3241 16.3564 94.449 16.3564Z" />
            <path d="M114.333 28.6206C113.206 29.3418 111.697 29.4541 110.927 29.03C110.401 28.741 110.135 28.0504 110.135 26.9614V20.1292H114.472V17.1031H110.135V13.1729L106.347 14.4116V17.1031H103.561V20.1292H106.347V26.721C106.347 30.1035 108.078 31.5524 109.11 32.1194C109.996 32.6039 110.946 32.7953 111.881 32.7953C113.537 32.7953 115.155 32.1794 116.293 31.4512L114.333 28.6206Z" />
          </g>
          <path
            d="M138.01 28.0396C138.891 27.1898 139.332 26.089 139.332 24.7368C139.332 23.3849 138.891 22.2792 138.01 21.4188C137.129 20.558 136.115 20.1278 134.968 20.1278C133.718 20.1278 132.688 20.5482 131.879 21.3878C131.07 22.2278 130.665 23.3441 130.665 24.7368C130.665 26.1298 131.07 27.2413 131.879 28.0702C132.688 28.9 133.718 29.3147 134.968 29.3147C136.115 29.3147 137.129 28.8898 138.01 28.0396ZM143.388 32.3878H139.332V31.1894C137.959 32.2955 136.269 32.8486 134.261 32.8486C132.233 32.8486 130.47 32.08 128.975 30.5445C127.479 29.0078 126.732 27.0723 126.732 24.7368C126.732 22.4017 127.484 20.4613 128.99 18.9147C130.496 17.3678 132.253 16.5947 134.261 16.5947C136.289 16.5947 137.979 17.158 139.332 18.2845V17.0551H143.388V32.3878Z"
            fill="#828283"
          ></path>{" "}
          <path
            d="M159.829 32.3876H146.215V29.7451L154.451 20.3741H146.43V17.0553H159.46V19.7594L151.224 29.0692H159.829V32.3876Z"
            fill="#828283"
          ></path>
        </svg>
      </div>
      <div className="flex gap-15 ml-10 align-center">
        <Translate />

        <ul className="flex text-white align-center list-none size-1.25rem pr-1.25rem font-bold!">
          <li
            className="w-28 relative whitespace-nowrap leading-7 pr-5"
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "SF Pro Display",
              fontSize: "1.25rem",
              fontWeight: "700",
            }}
          >
            <NavLink
              to="/events"
              className={({ isActive }) => `
    relative
    before:content-['']
    before:absolute
    before:left-0
    before:bottom-[-9px]
    before:right-5
    before:h-[9px]
    before:opacity-0
    before:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 88 9%27%3E%3Cpath fill=%27%23fd0%27 d=%27m0 5 88-5v4L0 9z%27/%3E%3C/svg%3E')]
    before:bg-no-repeat
    before:bg-center
    before:bg-size-[100px]
    before:transition-opacity
    before:duration-300
    hover:before:opacity-100
    ${isActive ? "before:opacity-100" : ""}
  `}
            >
              {t("header.All_events")}
            </NavLink>
          </li>
          <li
            className="w-28 relative whitespace-nowrap leading-7 pr-5"
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "SF Pro Display",
              fontSize: "1.25rem",
              fontWeight: "700",
            }}
          >
            <NavLink
              to="/concerts"
              className="relative
    before:content-['']
    before:absolute
    before:left-0
    before:bottom-[-9px]
    before:right-5
    before:h-[9px]
    before:opacity-0
    before:bg-no-repeat
    before:bg-center
    before:bg-size-[100px]
    before:transition-opacity
    before:duration-300
    hover:before:opacity-100"
            >
              {t("header.Concert")}
            </NavLink>
          </li>
          <li
            className="w-28 relative whitespace-nowrap leading-7 pr-5"
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "SF Pro Display",
              fontSize: "1.25rem",
              fontWeight: "700",
            }}
          >
            <NavLink
              to="/theatre"
              className={({ isActive }) => `
    relative
    before:content-['']
    before:absolute
    before:left-0
    before:bottom-[-9px]
    before:right-5
    before:h-[9px]
    before:opacity-0
    before:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 88 9%27%3E%3Cpath fill=%27%23fd0%27 d=%27m0 5 88-5v4L0 9z%27/%3E%3C/svg%3E')]
    before:bg-no-repeat
    before:bg-center
    before:bg-size-[100px]
    before:transition-opacity
    before:duration-300
    hover:before:opacity-100
    ${isActive ? "before:opacity-100" : ""}
  `}
            >
              {t("header.Theatre")}
            </NavLink>
          </li>
          <li
            className="w-28 relative whitespace-nowrap leading-7 pr-5"
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "SF Pro Display",
              fontSize: "1.25rem",
              fontWeight: "700",
            }}
          >
            <NavLink
              to="/kids"
              className={({ isActive }) => `
    relative
    before:content-['']
    before:absolute
    before:left-0
    before:bottom-[-9px]
    before:right-5
    before:h-[9px]
    before:opacity-0
    before:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 88 9%27%3E%3Cpath fill=%27%23fd0%27 d=%27m0 5 88-5v4L0 9z%27/%3E%3C/svg%3E')]
    before:bg-no-repeat
    before:bg-center
    before:bg-size-[100px]
    before:transition-opacity
    before:duration-300
    hover:before:opacity-100
    ${isActive ? "before:opacity-100" : ""}
  `}
            >
              {t("header.Kids")}
            </NavLink>
          </li>
          <li
            className="w-45 relative whitespace-nowrap leading-7 pr-5"
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "SF Pro Display",
              fontSize: "1.25rem",
              fontWeight: "700",
            }}
          >
            <NavLink
              to="/dream-fest-2026"
              className={({ isActive }) => `
    relative
    before:content-['']
    before:absolute
    before:left-0
    before:bottom-[-9px]
    before:right-5
    before:h-[9px]
    before:opacity-0
    before:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 88 9%27%3E%3Cpath fill=%27%23fd0%27 d=%27m0 5 88-5v4L0 9z%27/%3E%3C/svg%3E')]
    before:bg-no-repeat
    before:bg-center
    before:bg-size-[100px]
    before:transition-opacity
    before:duration-300
    hover:before:opacity-100
    ${isActive ? "before:opacity-100" : ""}
  `}
            >
              {t("header.Dream_Fest_2026")}
            </NavLink>
          </li>
          <li
            className="w-28 relative whitespace-nowrap leading-7 pr-5"
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "SF Pro Display",
              fontSize: "1.25rem",
              fontWeight: "700",
            }}
          >
            <NavLink
              to="/sport"
              className={({ isActive }) => `
    relative
    before:content-['']
    before:absolute
    before:left-0
    before:bottom-[-9px]
    before:right-5
    before:h-[9px]
    before:opacity-0
    before:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 88 9%27%3E%3Cpath fill=%27%23fd0%27 d=%27m0 5 88-5v4L0 9z%27/%3E%3C/svg%3E')]
    before:bg-no-repeat
    before:bg-center
    before:bg-size-[100px]
    before:transition-opacity
    before:duration-300
    hover:before:opacity-100
    ${isActive ? "before:opacity-100" : ""}
  `}
            >
              {t("header.Sport")}
            </NavLink>
          </li>
        </ul>
      </div>
      <div style={{ width: "50px", height: "50px", padding: 15 }}>
        <svg
          style={{ width: 20, height: 20 }}
          viewBox="0 0 34 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M29.6201 4.6423C28.0671 2.93842 25.9362 2 23.6195 2C21.8878 2 20.3018 2.55384 18.9057 3.646C18.2012 4.19729 17.5628 4.87175 17 5.65898C16.4374 4.87199 15.7988 4.19729 15.0941 3.646C13.6982 2.55384 12.1122 2 10.3805 2C8.06377 2 5.93265 2.93842 4.37968 4.6423C2.84526 6.32627 2 8.62682 2 11.1205C2 13.6871 2.94551 16.0365 4.97546 18.5144C6.79141 20.7309 9.40135 22.981 12.4237 25.5864C13.4558 26.4762 14.6256 27.4848 15.8403 28.5592C16.1611 28.8435 16.5729 29 17 29C17.4269 29 17.8389 28.8435 18.1593 28.5596C19.374 27.4851 20.5445 26.476 21.577 25.5858C24.5989 22.9807 27.2088 20.7309 29.0248 18.5141C31.0547 16.0365 32 13.6871 32 11.1202C32 8.62682 31.1547 6.32627 29.6201 4.6423Z"
            stroke="white"
            stroke-width="3"
          ></path>
        </svg>
      </div>
      <div>
        <Button
          style={{ width: "50px", height: "50px", padding: 15 }}
          className="bg-transparent!"
        >
          <svg
            className="w-5 h-5 text-white"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="7.5"
              cy="7.5"
              r="6.5"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M13 13L17 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default Header;
