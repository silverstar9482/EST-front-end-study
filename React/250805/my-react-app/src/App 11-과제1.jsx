import { useState } from "react";

function About() {
  return (
    <div
      style={{
        width: "100%",
        padding: "20px 30px",
        boxSizing: "border-box",
        textAlign: "right",
        marginTop: "10px",
        backgroundColor: "#ffa7a7ff",
      }}
    >
      <p>about</p>
    </div>
  );
}

function Profile() {
  return (
    <div
      style={{
        width: "100%",
        padding: "20px 30px",
        boxSizing: "border-box",
        textAlign: "right",
        marginTop: "10px",
        backgroundColor: "#a7d0ffff",
      }}
    >
      <p>profile</p>
    </div>
  );
}

function Contact() {
  return (
    <div
      style={{
        width: "100%",
        padding: "20px 30px",
        boxSizing: "border-box",
        textAlign: "right",
        marginTop: "10px",
        backgroundColor: "#75ff7bff",
      }}
    >
      <p>contact</p>
    </div>
  );
}

function App() {
  const [page, setPage] = useState("");
  return (
    <div
      style={{
        width: "100%",
        padding: "20px 30px",
        boxSizing: "border-box",
        textAlign: "right",
        backgroundColor: "#f2ffa7ff",
      }}
    >
      <button
        onClick={() => setPage("about")}
        style={{
          backgroundColor: "transparent",
          border: "none",
          fontSize: "26px",
          cursor: "pointer",
        }}
      >
        about
      </button>
      <button
        onClick={() => setPage("profile")}
        style={{
          backgroundColor: "transparent",
          border: "none",
          fontSize: "26px",
          cursor: "pointer",
        }}
      >
        profile
      </button>
      <button
        onClick={() => setPage("contact")}
        style={{
          backgroundColor: "transparent",
          border: "none",
          fontSize: "26px",
          cursor: "pointer",
        }}
      >
        contact
      </button>
      {page === "about" && <About />}
      {page === "profile" && <Profile />}
      {page === "contact" && <Contact />}
    </div>
  );
}

export default App;
