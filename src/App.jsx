import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ApplyJob from "./pages/ApplyJob"
import Applications from "./pages/Applications"
import RecuriterLogin from "./components/RecuriterLogin"
import { useContext } from "react"
import { AppContext } from "./context/AppContext"
import Dashboard from "./pages/Dashboard"
import AddJob from "./pages/AddJob"
import ManageJobs from "./pages/ManageJobs"
import VeiwApplications from "./pages/VeiwApplications"
import "../node_modules/quill/dist/quill.snow.css"

const App = () => {
  const { showRecruiterLogin } = useContext(AppContext)
  return (
    <div>
      {showRecruiterLogin && <RecuriterLogin />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/applications" element={<Applications />} />
        {/* Start Dashboard Routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="add-job" element={<AddJob />} />
          <Route path="manage-jobs" element={<ManageJobs />} />
          <Route path="view-applications" element={<VeiwApplications />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
