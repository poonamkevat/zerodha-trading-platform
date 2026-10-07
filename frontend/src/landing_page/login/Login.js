import React, { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://zerodha-trading-platform-e1ns.onrender.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful!");
        console.log(data);

        // Go to dashboard
        window.location.href = "https://zerodha-trading-dashboard.onrender.com";
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Check whether backend is running.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formBox}>
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "80vh",
  },

  formBox: {
    width: "350px",
    padding: "30px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },
};

export default Login;