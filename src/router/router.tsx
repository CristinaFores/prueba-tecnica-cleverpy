import App from "../components/App/App";
import LoginForm from "../components/LoginForm/LoginForm";
import ListPosts from "../components/ListPosts/ListPosts";
import { RouteObject, createBrowserRouter } from "react-router-dom";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <LoginForm /> },
      { path: "/home", element: <ListPosts /> },
    ],
  },
];

export const router = createBrowserRouter(routes);

export const getComponentRouter = (Ui: React.ReactElement) =>
  createBrowserRouter([
    {
      path: "/",
      element: Ui,
    },
  ]);
