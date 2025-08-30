import React from "react";
import { useNavigate } from "react-router-dom";

const HiddenMiningButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/mining");
  };

  return (
    <div className="hidden-mining-button-container">
      <button
        className="hidden-mining-button"
        onClick={handleClick}
        aria-label="Access Mining Dashboard"
      >
        ⛏️
      </button>
      <div className="mining-tooltip">
        <div className="tooltip-content">
          <span className="tooltip-title">🤫 Secret Mining Dashboard</span>
          <span className="tooltip-description">
            Live Bitcoin mining stats from my rig! Real-time hashrate, shares,
            and worker details. Shhh... it's our little secret! 🚀
          </span>
        </div>
      </div>
    </div>
  );
};

export default HiddenMiningButton;
