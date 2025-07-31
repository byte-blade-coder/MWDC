import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import SubNavbar from "../components/SubNavbar";
import PageHeader from "../components/PageHeader";
import SolutionForm from "../components/SolutionForm"; // TASKS
import Definitions from "../components/Definitions";
import Planning from "../components/Planning";

function MissionLayout() {
  return (
    <div className="min-h-screen bg-[#1C1C1C]">
      <SubNavbar />
      <PageHeader />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function Mission() {
  return (
    <Routes>
      <Route element={<MissionLayout />}>
        <Route index element={<Navigate to="tasks" replace />} />
        <Route path="definitions" element={<Definitions />} />
        <Route path="tasks" element={<SolutionForm />} />
        <Route path="planning" element={<Planning />} />
      </Route>
    </Routes>
  );
}

export default Mission;
