import App from "../components/App/App";
import { RouteObject, createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/LoginPage/LoginPage";
import HomePage from "../pages/HomePage/HomePage";
import FormEdit from "../components/FormEdit/FormEdit";
import HomePagePostsEdit from "../pages/HomePagePostsEdit.tsx/HomePagePostsEdit";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LoginPage /> },
      { path: "/home", element: <HomePage /> },
      { path: "/homeposts", element: <HomePagePostsEdit /> },
      { path: "/edit/:id", element: <FormEdit /> },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const getComponentRouter = (ui: React.ReactElement) =>
  createBrowserRouter([
    {
      path: "/",
      element: ui,
    },
  ]);
