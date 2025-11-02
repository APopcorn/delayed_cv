import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

import ProjectGallery from "./components/pages/ProjectGallery.tsx";
import PatchPage from "./components/pages/PatchPage.tsx";
import Project from "./components/pages/Project.tsx";

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
