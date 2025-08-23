import { closeModal } from "@/app/_state/slice/modal";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  children: React.ReactNode;
}

export const MoleculesModal = (props: Props) => {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state: any) => state.modal.open);

  if (!modalOpen) return (null);
  return (
    <div className={`overlay`}>
      {/* モーダル */}
      <div className="flex flex-col items-end">
        <button
          className="close-button text-6xl w-fit font-semibold text-gray-600 hover:text-gray-800 rounded-full mb-2"
          onClick={() => dispatch(closeModal())}>
            ×
        </button>
        <div className="modal bg-white rounded-2xl p-5 min-w-[600px]">
          {props.children}
        </div>
      </div>
    </div>
  );
};