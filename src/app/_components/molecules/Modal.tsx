import { closeModal } from "@/app/_state/slice/modal";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

type Props = {
  title: string;
  acceptBtnLabel?: string;
  acceptBtnOnClick?: () => Promise<void>;
  children: React.ReactNode;
}

export const MoleculesModal = (
  { title = "Modal Title", acceptBtnLabel, acceptBtnOnClick, children }: Props) => {
  const dispatch = useDispatch();
  const modalOpen = useSelector((state: any) => state.modal.open);

  if (!modalOpen) return (null);
  return (
    <div className={`overlay`}>
      {/* モーダル */}
      <div className="modal bg-white rounded-2xl p-5 min-w-[600px]">
        
        <div className="modal-header">
          <h2 className="modal-title text-2xl font-bold mb-6 text-green-700">{title}</h2>
        </div>
        
        {children}

        <div className="modal-footer flex justify-between">
          <button className="close-button text-red-500 text-xl border p-2 rounded-2xl" onClick={() => dispatch(closeModal())}>
            閉じる
          </button>
          {
            acceptBtnLabel && acceptBtnOnClick
              ? <button className="accept-btn bg-green-600 text-white rounded-xl px-4 py-2" onClick={acceptBtnOnClick}>{acceptBtnLabel}</button>
              : null
          }
        </div>
      </div>
    </div>
  );
};