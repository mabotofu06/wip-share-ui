"use client";
import { useState } from "react";
import { MoleculesModal } from "../../molecules/Modal";
  
export const OrganismsPostFormModal = () => {
  const [open, setOpen] = useState(false);

  const [note, setNote] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const deleteImage = () => {
    setImage(null);
  }

  const submitForm = async () => {
    setOpen(true);
  }

  return (
    <div>
      <MoleculesModal>
        <div className="project-form m-8 w-[800px]">
          <div className="mb-4">
            {image ? (
              <div className="relative mt-2 w-full h-[300px] overflow-hidden">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="rounded-lg"
                  onClick={() => {
                    if (image) {
                      window.open(URL.createObjectURL(image), "_blank");
                    }
                  }}
                />
                <button className="absolute top-0 right-3 text-red-500 rounded-full text-5xl" onClick={deleteImage}>
                ×
                </button>
              </div>) : (
              <div
                className="h-[300px] border-2 border-dashed flex flex-col justify-center items-center w-full rounded-lg"
                onDragOver={e => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
                onDrop={e => {
                  e.preventDefault();
                  e.stopPropagation();
                if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                  setImage(e.dataTransfer.files[0]);
                }
                }}
              >
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer inline-block bg-green-600 text-white rounded-2xl font-bold text-lg py-3 px-6 mb-2"
                >
                  画像を投稿
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={e => {
                    if (e.target.files && e.target.files[0]) {
                    setImage(e.target.files[0]);
                    }
                  }}
                  ref={input => {
                    if (input && !image) {
                    input.value = "";
                    }
                  }}
                />
                <span className="ml-4 text-gray-500">または画像をドラッグ＆ドロップ</span>
              </div>)
            }
          </div>

          <div className="mb-4">
            <textarea
              className="w-full border rounded-3xl p-5 resize-none"
              value={note}
              onChange={e => setNote(e.target.value)}
              rows={6}
              placeholder="ポストに説明を追加しよう！"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-600 text-white rounded-2xl font-bold text-lg mt-4"
            onClick={submitForm}
          >
            投稿する
          </button>
      </div>
      </MoleculesModal>
    </div>
  );
};
