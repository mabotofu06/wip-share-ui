import { closeModal } from "@/app/_state/slice/modal";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const MoleculesModal = ({
  props = { open: false },
  children
}: { props?: { open: boolean }; children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state: any) => state.modal.open);

  if (!modalOpen) return null;
  return (
    <div className={`overlay`}>
      <div className="modal bg-white">
        <div className="modal-header">
          <h2 className="modal-title">Modal Title</h2>
        </div>
        {children}
        <div className="modal-footer bg-white">
          <button className="close-button border border-red-500 rounded-xl" onClick={() => dispatch(closeModal())}>Close</button>
        </div>
      </div>
    </div>
  );
};