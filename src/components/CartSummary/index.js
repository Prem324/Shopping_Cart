import "./index.css";

const THRESHOLD = 1000;

const CartSummary = ({ subtotal }) => {
  const progress = Math.min((subtotal / THRESHOLD) * 100, 100);
  const needsMore = Math.max(THRESHOLD - subtotal, 0);
  const hasFreeGift = subtotal >= THRESHOLD;
  return (
    <div className="free-gift-container">
      <div className="subtotal-container">
        <p className="subtotal-heading">Subtotal:</p>
        <p className="total">₹{subtotal}</p>
      </div>
      <hr className="hr-line" />
      <div className="eligibility-track-container">
        {hasFreeGift ? (
          <p className="eligibility-note">You got a free Wireless Mouse!</p>
        ) : (
          <>
            <p className="eligibility-note">
              Add ₹{needsMore} more to get a FREE Wireless Mouse!
            </p>
            <div className="progress-bar" style={{ width: `${progress}%` }}>
              {progress}%
            </div>{" "}
          </>
        )}
      </div>
    </div>
  );
};
export default CartSummary;
