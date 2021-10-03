import { BrowserRouter as Router, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <div>
      <Router>
        <Route path="/people/:id" component={DetailsPage} />
        <Route path="/" exact component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
