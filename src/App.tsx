
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/Notfound/Notfound";
import Home from "./pages/Home/Home";
import EmailVerification from "./pages/emailVerification/EmailVerification";


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emailVerification/:token" element={<EmailVerification />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
