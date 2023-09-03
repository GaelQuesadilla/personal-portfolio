import "bootstrap/dist/js/bootstrap.min.js";
import "./styles/index.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/ROUTES.JS";
import { Index } from "./routes/Index";
import { MainLayout } from "./layouts/MainLayout";

export const App = () => {
  return (
    <>
      <Router>
        <MainLayout>
          <Routes>
            <Route exact path={ROUTES.INDEX.href} Component={() => <Index />} />
          </Routes>
        </MainLayout>
      </Router>
    </>
  );
};
