"use client";

import { useState } from "react";
import { IoAlertCircleOutline } from "react-icons/io5";
import AppealModal from "./AppealModal";

export default function AppealButton({ brand }) {
 const [isModalOpen, setIsModalOpen] = useState(false);

 return (
  <>
   <button
    onClick={() => setIsModalOpen(true)}
    className="inline-flex items-center gap-2 rounded-lg border-2 border-orange-500 bg-linear-to-r from-orange-500 to-orange-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:from-orange-600 hover:to-orange-700"
   >
    <IoAlertCircleOutline className="h-5 w-5" />
    İtiraz Et
   </button>
   <AppealModal
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)}
    brand={brand}
   />
  </>
 );
}

