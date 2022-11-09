import PropTypes from "prop-types";

export default function Square({ marker, id, handleClick }) {
  return (
    <button id={id} type="button" onClick={handleClick}>
      {marker}
    </button>
  );
}

Square.propTypes = {
  marker: PropTypes.oneOf(["X", "O"]),
  id: PropTypes.number.isRequired,
  handleClick: PropTypes.func,
};

Square.defaultProps = {
  handleClick: () => {},
  marker: "",
};
