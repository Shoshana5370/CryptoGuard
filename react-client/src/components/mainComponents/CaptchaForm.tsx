import { useEffect, useState } from "react";
import axios from "axios";

export default function CaptchaForm() {
  const [captchaUrl, setCaptchaUrl] = useState("");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const refreshCaptcha = () => {
    setCaptchaUrl("https://localhost:7207/api/Captcha");
  };

  useEffect(() => {
    refreshCaptcha();
  }, []);

  const handleVerify = async () => {
    const res = await axios.post("https://localhost:7207/api/Captcha/verify", { input });
    setResult(res.data.success ? "✔️ Passed" : "❌ Failed");
  };

  return (
    <div className="p-4">
      <img src={captchaUrl} alt="captcha" className="mb-2 border" />
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter the code"
        className="border p-1"
      />
      <div className="mt-2 space-x-2">
        <button onClick={handleVerify} className="px-2 py-1 bg-blue-500 text-white">Verify</button>
        <button onClick={refreshCaptcha} className="px-2 py-1 bg-gray-300">Refresh</button>
      </div>
      <p className="mt-2">{result}</p>
    </div>
  );
}
