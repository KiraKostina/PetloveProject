// import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NewsPage = lazy(() => import("./pages/NewsPage/NewsPage"));

import Loader from "./components/Loader/Loader";
import SharedLayout from "./components/SharedLayout/SharedLayout";

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/" element={<SharedLayout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            {/* <Route path="/notices" element={<NoticesPage />} />
            <Route path="/friends" element={<OurFriendsPage />} />
            <Route path="/profile" element={<ProfilePage />} />

            <Route path="/add-pet" element={<AddPetPage />} />

            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="*" element={<NotFoundPage />} /> */}
          </Route>
        </Routes>
      </Suspense>

      {/* <Toaster /> */}
    </>
  );
}

export default App;
