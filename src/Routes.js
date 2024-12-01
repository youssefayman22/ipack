import LandingPage from "./Pages/LandingPage.js";
import { createBrowserRouter } from "react-router-dom";
import DocumentsPage from "./Pages/DocumentsPage.jsx";
import ElectronicsPage from "./Pages/ElectronicsPage.jsx";
import PersonalCarePage from "./Pages/PersonalCarePage.js";
import MedicationsPage from "./Pages/MedicationsPage.jsx";

import ClothesOutwearPage from "./Pages/ClothesOutwearPage.jsx";
import HomewearPage from "./Pages/HomeWearPage.jsx";
import ChecklistPage from "./Pages/checklistPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/documents",
    element: <DocumentsPage />,
  },
  {
    path: "/electronics",
    element: <ElectronicsPage />,
  },
  {
    path: "/medications",
    element: <MedicationsPage />,
  },
  {
    path: "/personalCare",
    element: <PersonalCarePage />,
  },
  {
    path: "/checklist",
    element: <ChecklistPage />,
  },
  {
    path: "/homewear",
    element: <HomewearPage />,
  },
  {
    path: "/outerwearClothes",
    element: <ClothesOutwearPage />,
  },
]);
export default router;
