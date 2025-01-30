import React, { useState } from "react";
import { signup, login } from "../api";
import { useNavigate } from "react-router-dom";
import "../styles/AuthForm.css";

const AuthForm = ({ isLogin, onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let response;
      if (isLogin) {
        response = await login({ email: formData.email, password: formData.password });
      } else {
        response = await signup(formData);
      }

      localStorage.setItem("token", response.token);
      window.dispatchEvent(new Event("storage")); 
      onClose();
      navigate("/dashboard");
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      {error && <p className="error-text">{error}</p>}

      {!isLogin && (
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
        </div>
      )}

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Your Password" value={formData.password} onChange={handleChange} />
      </div>

      <button type="submit" className="auth-submit" disabled={loading}>
        {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
      </button>
    </form>
  );
};

export default AuthForm;
