import PropTypes from "prop-types";

const Options = ({ onFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div>
      <button onClick={() => onFeedback("good")}>Good</button>
      <button onClick={() => onFeedback("neutral")}>Neutral</button>
      <button onClick={() => onFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={resetFeedback}>Reset</button>}
    </div>
  );
};

Options.propTypes = {
  onFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  resetFeedback: PropTypes.func.isRequired,
};

export default Options;
