import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import CollegeFeeComparison from "./tools/CollegeFeeComparison";
import LoanEligibilityCalculator from "./tools/LoanEligibilityCalculator";
import ScholarshipFinder from "./tools/ScholarshipFinder";

import ProgramPage from "./pages/ProgramPage";
import CollegePage from "./CollegePage";
import AboutUs from "./AboutUs";
import BookMentor from "./pages/BookMentor";
import Footer from "./Footer";

function App() {
  return (
    <div className=" bg-black m-0 p-0">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route
            path="/tools/college-fee-comparison"
            element={<CollegeFeeComparison />}
          />
          <Route
            path="/tools/loan-eligibility"
            element={<LoanEligibilityCalculator />}
          />
          <Route
            path="/tools/scholarship-finder"
            element={<ScholarshipFinder />}
          />

          <Route path="/programs" element={<ProgramPage />} />
          <Route path="/colleges" element={<CollegePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/book-mentor" element={<BookMentor />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
