import Notes from "../pages/Notes";
import Note from "../pages/Note";
import NotFound from "../pages/404";

const Routes = [
  {
    path: "/",
    component: Notes,
  },
  {
    path: "/note/:id",
    component: Note,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default Routes;
