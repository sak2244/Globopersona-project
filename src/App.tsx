import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./features/dashboard/Dashboard";
import EmailListsDashboard from "./features/campaign/list/EmailLists";
import UploadEmailListPage from "./features/campaign/uploadlist/UploadEmailList";
import MapFieldsPage from "./features/campaign/uploadlist/components/StepTwo";
import ContactDetailsPage from "./features/campaign/contact-details/ContactDetailsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/dashboard" />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="/campaigns" element={<EmailListsDashboard />} />
        <Route path="/upload-email-list" element={<UploadEmailListPage />} />
        <Route path="/map-fields-page" element={<MapFieldsPage />} />
        <Route path="/contact-details-page" element={<ContactDetailsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
