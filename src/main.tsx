import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

import ProjectGallery from "./components/pages/ProjectGallery.tsx";
import Project from "./components/pages/Project.tsx";
import PatchPage from "./components/pages/PatchPage.tsx";
import RumbiPage from "./components/pages/RumbiPage.tsx";
import PlanterPage from "./components/pages/PlanterPage.tsx";
import KeyboardPage from "./components/pages/KeyboardPage.tsx";
import LFSPage from "./components/pages/LFSPage.tsx";

const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: App,
        },
        {
            path: "/project-gallery",
            Component: ProjectGallery,
        },
        {
            path: "/project",
            Component: Project,
            children: [
                {
                    path: "patch",
                    Component: PatchPage,
                },
                {
                    path: "rumbi",
                    Component: RumbiPage,
                },
                {
                    path: "planter",
                    Component: PlanterPage,
                },
                {
                    path: "keyboard",
                    Component: KeyboardPage,
                },
                {
                    path: "STM32H7",
                    Component: LFSPage,
                },
            ],
        },
    ],
    {
        basename: "/delayed_cv",
    }
);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
