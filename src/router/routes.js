import React from "react";

import Main from "../pages/Main";
import Contacts from "../pages/Contacts";
import AboutUs from "../pages/AboutUs/AboutUs";
import JournalDetails from "../pages/JournalDetails";
import Journaltheme from "../pages/JournalTheme/JounrnalTheme";

import {
  MAIN_PAGE_ROUTE,
  CONTACTS_ROUTE,
  ABOUT_US_ROUTE,
  JOURNAL_DETAILS_ROUTE,
  JOURNAL_THEME_ROUTE,
} from "../config/consts";

export const publicRoutes = [
  {
    path: MAIN_PAGE_ROUTE,
    element: <Main />,
    exact: true,
  },
  {
    path: CONTACTS_ROUTE,
    element: <Contacts />,
    exact: true,
  },
  {
    path: ABOUT_US_ROUTE,
    element: <AboutUs />,
    exact: true,
  },
  {
    path: `${JOURNAL_DETAILS_ROUTE}/:id/*`,
    element: <JournalDetails />,
    exact: true,
  },
  {
    path: `${JOURNAL_THEME_ROUTE}/:id/*`,
    element: <Journaltheme />,
    exact: true,
  },
];
