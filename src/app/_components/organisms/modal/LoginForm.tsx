import { useState } from "react";
import { supabase } from "@/app/_constants/supabase/client";

export default function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    setLoading(false);
  };

  const handleSignIn = async () => {
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) setError(error.message);
    setLoading(false);
  };

  return (
    <div className="overlay">
      <div className="max-w-sm mx-auto p-4 border rounded bg-white z-50">
        <h2 className="text-lg font-bold mb-4">ログイン / 新規登録</h2>
        <input
          type="email"
          placeholder="メールアドレス"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        <input
          type="password"
          placeholder="パスワード"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className="w-full mb-2 p-2 border rounded"
        />
        {error && <div className="text-red-500 mb-2">{error}</div>}
        <button
          onClick={handleSignIn}
          disabled={loading}
          className="w-full bg-green-600 text-white py-2 rounded mb-2"
        >
          ログイン
        </button>
        <button
          onClick={handleSignUp}
          disabled={loading}
          className="w-full bg-gray-300 text-black py-2 rounded"
        >
          新規登録
        </button>
      </div>
    </div>
  );
}