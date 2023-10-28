import React from "react";
import app from "./app.module.css";
import { Routes, Route, Outlet } from "react-router-dom";
import Main from "../main";
import Login from "../login";
import Applicants from "../main/applicants";
import Vacancies from "../main/vacancies";
import Statistics from "../main/statistics";
import Planer from "../main/planer";
import Vacancy from "../main/vacancies/vacancy";
import EditVacancy from "../main/vacancies/vacancy/edit-vacancy/inex";
import Settings from "../main/settings";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Main>
              <Outlet />
            </Main>
          }
        >
          <Route path="/applicants" element={<Applicants />} />
          <Route path="/vacancies" element={<Vacancies />}>
            <Route path="vacancy" element={<Vacancy />}>
              <Route path="edit" element={<EditVacancy />} />
            </Route>
          </Route>
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/planer" element={<Planer />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/login/*" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
