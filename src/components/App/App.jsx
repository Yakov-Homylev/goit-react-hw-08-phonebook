import React, { useEffect, lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import AppBar from "components/AppBar/AppBar";
import { userRefresh } from "redux/authorization/authorization-operations";
import {
  getErrorMessage,
  getLoadingStatus,
} from "redux/authorization/authorization-selectors";
import { Wrapper } from "./App.styled";
import Loader from "components/Loader/Loader";
const ContactsView = lazy(() =>
  import("components/ContactsPage/ContactsView/ContactsView")
);
const RegistrationView = lazy(() =>
  import("components/RegistrationPage/RegistrationView/RegistrationView")
);
const AuthorizationView = lazy(() =>
  import("components/AuthorizationPage/AuthorizationView/AuthorizationView")
);

function App() {
  const dispatch = useDispatch();
  const errorMessage = useSelector(getErrorMessage);
  const isLoading = useSelector(getLoadingStatus);

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    <Wrapper>
      <Toaster position="top-right" reverseOrder={false} />
      <AppBar />

      {isLoading ? (
        <Loader />
      ) : (
        <Routes>
          <Route
            path="contacts"
            element={
              <Suspense fallback={<Loader />}>
                <ContactsView />
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<Loader />}>
                <RegistrationView />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<Loader />}>
                <AuthorizationView />
              </Suspense>
            }
          />
          <Route path="*" element={<Navigate to="contacts" />} />
        </Routes>
      )}

      {errorMessage && toast.error(`${errorMessage}`)}
    </Wrapper>
  );
}

export default App;
