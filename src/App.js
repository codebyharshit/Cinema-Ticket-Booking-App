import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Movies from "./components/Movies";
import MoviesDetailPage from "./components/MoviesDetailPage";
import AddMovie from "./components/AddMovie";

const App = () => {
  return (
    <>
      <Header />
      {/* <Home /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/movies/detail/:slug" element={<MoviesDetailPage />} />
        <Route exact path="/addMovie" element={<AddMovie />} />
        {/* <Route exact from="/movies/:state" component={MoviePage} />
        <Route exact from="/cineplexs" component={CineplexPage} />
        <Route exact from="/showtimes" component={ShowtimePage} />
        <Route
          exact
          from="/booking/tickets/:showtimeId"
          component={BookingPage}
        />
        <Route exact from="/payment" component={PaymentPage} />
        <Route exact from="/payment/:id" component={PaymentDetailPage} />
        <Route exact from="/profile" component={ProfilePage} />
        <Route exact from="/history" component={HistoryPage} />
        <Route exact from="/login" component={LoginPage} />
        <Route exact from="/register" component={RegisterPage} />
        <Route exact from="/enter-code" component={EnterCode} />
        <Route exact from="/verified-email" component={VerifiedEmail} />
        <Route exact from="/forgot-password" component={ForgotPassword} />
        <Route exact from="/reset-password" component={ResetPassword} />
        <Route exact from="/change-password" component={ChangePassword} />
        <Route component={NotFound} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
