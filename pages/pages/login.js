import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) {
      setMessage("⚠️ Login failed: " + error.message);
    } else {
      setMessage("✅ Check your email for the login link!");
    }
  }

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Login to Sales Consultant AI</h1>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: 10,
            marginBottom: 10,
            width: "300px",
            borderRadius: 4,
            border: "1px solid #ccc",
          }}
        />
        <br />
        <button
          type="submit"
          style={{
            padding: 10,
            width: "320px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: 4,
          }}
        >
          Send Login Link
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
}
