import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import AppBar from "components/AppBar/AppBar";
import ContactsView from "components/ContactsPage/ContactsView/ContactsView";
import RegistrationView from "components/RegistrationPage/RegistrationView/RegistrationView";
import AuthorizationView from "components/AuthorizationPage/AuthorizationView/AuthorizationView";
import { userRefresh } from "redux/authorization/authorization-operations";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userRefresh());
  }, [dispatch]);

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <AppBar />
      <Routes>
        <Route path="contacts" element={<ContactsView />} />
        <Route path="register" element={<RegistrationView />} />
        <Route path="login" element={<AuthorizationView />} />
        <Route path="*" element={<Navigate to="contacts" />} />
      </Routes>
    </div>
  );
}

export default App;
