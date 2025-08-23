"use client";
import { useState } from "react";
  
export const OrganismsProjectFormModal = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<File[]>([]);
  const [showContinueModal, setShowContinueModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでAPI送信などの処理を実装
    setShowContinueModal(true);
  };

  const handleContinue = () => {
    setShowContinueModal(false);
    setShowPostModal(true);
  };

  const handleReject = () => {
    window.location.href = "/Project/User";
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-bold mb-6 text-green-700">新しいプロジェクトを作成</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            className="w-full border rounded px-3 py-2"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="プロジェクトのタイトルを入力"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            className="w-full border rounded px-3 py-2"
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={5}
            placeholder="プロジェクトの説明を入力"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 bg-green-600 text-white rounded font-bold text-lg mt-4"
        >
          投稿する
        </button>
      </form>
    </div>
  );
};
