import SettingForm from "parts/SettingForm";
import Sidebar from "parts/Sidebar";
import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Settings() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const DETAILS = useSelector((state) => state.users);

  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <main className="flex-1">
        <div className="px-16">
          <section className="flex flex-col mt-8">
            <h1 className="text-4xl text-gray-900 font-medium">Settings</h1>
            <p className="text-lg text-gray-600">
              Secure your data informations
            </p>
          </section>

          <SettingForm details={DETAILS} />
        </div>
      </main>
    </div>
  );
}
