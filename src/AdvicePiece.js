import React, { useState, useEffect } from "react";
import divDesktop from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";
import axios from "axios";

export const AdvicePiece = () => {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);
  const getAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      const advice = await response.data.slip;
      setAdvice(advice);
    } catch (error) {
      console.error("Error fetching advice:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAdvice();
  }, []);
  return (
    <div className="card">
      {loading ? (
        <h2>Loading.....</h2>
      ) : (
        <>
          <p>Advice #{advice.id}</p>
          <h2>"{advice.advice}"</h2>
          <img src={divDesktop} className="div-desktop" alt="divider" />
          <div className="dice" onClick={getAdvice}>
            <img src={dice} className="Cdice" alt="dice"></img>
          </div>
        </>
      )}
    </div>
  );
};
