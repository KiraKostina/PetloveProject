// import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <>
      <SharedLayout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            {/* <Route path="/home" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/notices" element={<NoticesPage />} />
            <Route path="/friends" element={<OurFriendsPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            <Route path="/add-pet" element={<AddPetPage />} />

            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </Suspense>
      </SharedLayout>
      {/* <Toaster /> */}
    </>
  );
}

export default App;
