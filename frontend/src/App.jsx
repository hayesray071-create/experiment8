import { useState } from "react";
import axios from "axios";

function App() {
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");

  const submitFeedback = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/feedback",
        feedback,
        {
          headers: {
            "Content-Type": "text/plain"
          }
        }
      );

      setMessage(response.data);
    } catch (error) {
      setMessage("Unable to submit feedback.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <h1>Feedback System</h1>

      <input
        type="text"
        placeholder="Enter your feedback"
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />

      <button onClick={submitFeedback}>
        Submit
      </button>

      <p>{message}</p>
    </div>
  );
}

export default App;