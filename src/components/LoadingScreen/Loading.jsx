import React from "react";
import "./loading.css";
import BounceLoader from "react-spinners/BounceLoader";

const Loading = ({ loading }) => {
  return (
    <div className={`loading__container_${loading}`}>
      <div className="loading__loader">
        <BounceLoader color="#f50d32" loading={loading} size={50} />
      </div>
      <div className="loading__text">
        <p>Welcome</p>
        <h2>Wait a bit</h2>
      </div>
    </div>
  );
};

export default Loading;
