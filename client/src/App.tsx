import { Routes, Route } from "react-router-dom";
import HomePage from "@pages/home/Homepage";
import Login from "@pages/auth/login/Login";
import Signup from "@pages/auth/signup/Signup";
import Dashboard from "@pages/dashboard/Dashboard";
import TalentProfile from "@pages/marketplace/TalentProfile";
import BrowseTalents from "@pages/marketplace/BrowseTalents";
import Account from "@pages/account/Account";
import ResetPassword from "@pages/auth/resetPassword/ResetPassword";
import Settings from "@pages/settings/Settings";
import Layout from "./Layout";
import NotFoundPage from "@pages/notFoundPage/NotFoundPage";
import VerifyAcccount from "./pages/auth/accountVerification/VerifyAcccount";
import Booking from "@pages/booking/Booking";
import Checkout from "@pages/checkout/Checkout";
import GapPage from "@pages/gig/GigPage";
import Payment from "./components/payment/Payment";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/profile" element={<Account />} />
        <Route path="/profile/settings" element={<Settings />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/browse" element={<BrowseTalents />} />
        <Route path="/:profile" element={<TalentProfile />} />
        <Route path="/browse/:gigId" element={<GapPage />} />
        <Route path="/book" element={<Booking />} />
        <Route path="book/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile/earnings" element={<VerifyAcccount />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
