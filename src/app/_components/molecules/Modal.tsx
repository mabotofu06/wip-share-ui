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
      <div className="flex flex-col">
        <div className="modal bg-white rounded-2xl p-5 min-w-[600px]">
          <div className="flex justify-end">
            <button
              className="text-center text-3xl font-semibold text-gray-600 hover:bg-gray-100 rounded-full w-[40px] h-[40px]"
              onClick={() => dispatch(closeModal())}>
                ×
            </button>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};