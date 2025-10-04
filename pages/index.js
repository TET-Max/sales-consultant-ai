import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function Home() {
  const [message, setMessage] = useState("Loading data...");

  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase.from("test").select("*").limit(1);
      if (error) {
        setMessage("⚠️ Connection failed: " + error.message);
      } else {
        setMessage("✅ Supabase connection successful!");
      }
    }
    testConnection();
  }, []);

  return (
    <div style={{ padding: 40, fontFamily: "Arial" }}>
      <h1>Sales Consultant AI</h1>
      <p>{message}</p>
    </div>
  );
}
