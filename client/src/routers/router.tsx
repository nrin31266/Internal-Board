import AppLayout from "@/components/layout/AppLayout"
import { createBrowserRouter } from "react-router-dom"
import { Suspense, lazy, type ReactElement } from "react"
import SkeletonComponent from "@/components/SkeletonComponent"

const Projects = lazy(() => import("@/features/app/pages/Projects"))
const ProjectDetails = lazy(() => import("@/features/app/pages/ProjectDetails"))

const withSuspense = (element: ReactElement) => (
  <Suspense fallback={<SkeletonComponent/>}>
    {element}
  </Suspense>
)

const router = createBrowserRouter([
    
      {
        element: <AppLayout />, // layout bọc các route con
        children: [
           // -------------------------
          // Dashboard
          // -------------------------
          {
            path: "/",
            element: withSuspense(<Projects />),
          },

          {
              path: "/projects/:projectId",
              element: withSuspense(<ProjectDetails />),
          },

          // -------------------------
          // System
          // -------------------------
          {
            path: "/system/health",
            element: <div>Health Check Page</div>,
          },
          {
            path: "/system/queues",
            element: <div>Queue Monitor Page</div>,
          },
          {
            path: "/system/ai-jobs",
            element: <div>AI Jobs Page</div>,
          },
          {
            path: "/system/logs",
            element: <div>Logs Page</div>,
          },

          // -------------------------
          // Profile & Settings
          // -------------------------
          {
            path: "/profile",
            element: <div>Profile Page</div>,
          },
          {
            path: "/settings",
            element: <div>Settings Page</div>,
          },
        ],
      },
]);

export default router;
