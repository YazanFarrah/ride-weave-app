import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Rider pages
import RiderLogin from "./pages/rider/auth/Login";
import RiderVerify from "./pages/rider/auth/Verify";
import RiderProfile from "./pages/rider/auth/Profile";
import RiderHome from "./pages/rider/Home";
import RiderRequest from "./pages/rider/Request";
import RiderRideStatus from "./pages/rider/RideStatus";
import RiderActivity from "./pages/rider/Activity";
import RiderWallet from "./pages/rider/Wallet";
import RiderNotifications from "./pages/rider/Notifications";
import RiderSupport from "./pages/rider/Support";

// Driver pages
import DriverLogin from "./pages/driver/auth/Login";
import DriverDocuments from "./pages/driver/auth/Documents";
import DriverVehicle from "./pages/driver/auth/Vehicle";
import DriverHome from "./pages/driver/Home";
import DriverRideActive from "./pages/driver/RideActive";
import DriverWallet from "./pages/driver/Wallet";
import DriverActivity from "./pages/driver/Activity";
import DriverNotifications from "./pages/driver/Notifications";
import DriverProfile from "./pages/driver/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Rider Routes */}
          <Route path="/rider/auth/login" element={<RiderLogin />} />
          <Route path="/rider/auth/verify" element={<RiderVerify />} />
          <Route path="/rider/auth/profile" element={<RiderProfile />} />
          <Route path="/rider/home" element={<RiderHome />} />
          <Route path="/rider/request" element={<RiderRequest />} />
          <Route path="/rider/ride-status" element={<RiderRideStatus />} />
          <Route path="/rider/activity" element={<RiderActivity />} />
          <Route path="/rider/wallet" element={<RiderWallet />} />
          <Route path="/rider/notifications" element={<RiderNotifications />} />
          <Route path="/rider/support" element={<RiderSupport />} />
          
          {/* Driver Routes */}
          <Route path="/driver/auth/login" element={<DriverLogin />} />
          <Route path="/driver/auth/documents" element={<DriverDocuments />} />
          <Route path="/driver/auth/vehicle" element={<DriverVehicle />} />
          <Route path="/driver/home" element={<DriverHome />} />
          <Route path="/driver/ride-active" element={<DriverRideActive />} />
          <Route path="/driver/wallet" element={<DriverWallet />} />
          <Route path="/driver/activity" element={<DriverActivity />} />
          <Route path="/driver/notifications" element={<DriverNotifications />} />
          <Route path="/driver/profile" element={<DriverProfile />} />
          
          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
