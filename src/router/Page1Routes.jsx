import { Page1 } from "../Page1";
import { Page1DeatalA } from "../Page1DetailA";
import { Page1DeatalB } from "../Page1DetailB";

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children: <Page1 />
  },
  {
    path: "/",
    exact: false,
    children: <Page1DeatalA />
  },
  {
    path: "/",
    exact: false,
    children: <Page1DeatalB />
  }
];
