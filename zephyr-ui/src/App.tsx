import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ButtonsPage from "./ui-preview/buttons";
import ModalsPage from "./ui-preview/modals";
import TooltipPage from "./ui-preview/tooltips";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/ui-preview/buttons" replace />}
        />
        <Route path="/ui-preview/buttons" element={<ButtonsPage />} />
        <Route path="/ui-preview/modals" element={<ModalsPage />} />
        <Route path="/ui-preview/tooltips" element={<TooltipPage />} />

      </Routes>
    </Router>
  );
}

export default App;
