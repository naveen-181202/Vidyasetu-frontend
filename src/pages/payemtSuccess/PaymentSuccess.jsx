import React from "react";
import "./paymentSuccess.css";
import { Link, useParams } from "react-router-dom";

const PaymentSuccess = ({ user }) => {
  const params = useParams();
  return (
    <div className="paymentSuccess-page">
      {user && (
        <div className="success-message">
          <h2>Payement Successfull</h2>
          <p>Your course subscription has been acyivated</p>
          <p>Reference no-{params.id}</p>
          <Link to={`/${user._id}/dashboard`} className="common-btn">
            Go To Dashborad
          </Link>
        </div>
      )}
    </div>
  );
};
export default PaymentSuccess;
