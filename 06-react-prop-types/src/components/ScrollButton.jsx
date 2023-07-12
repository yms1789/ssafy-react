import "../styles/ScrollButton.css";
// import { PropTypes } from "../libs/PropTypes";
import PropTypes from "prop-types";

function ScrollButton({ mode = "down", label = "스크롤 다운" }) {
  const isDown = mode === "down";
  const buttonLabel = label ?? `스크롤 ${isDown ? "다운" : "업"}`;

  return (
    <button
      type="button"
      className={isDown ? "scrollDown" : "scrollUp"}
      aria-label={buttonLabel}
      title={buttonLabel}
    >
      <svg
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
      >
        <path
          d="m112 268 144 144 144-144M256 392V100"
          fill="none"
          stroke="currentColor"
          strokeLinecap="square"
          strokeMiterlimit={10}
          strokeWidth="48px"
        />
      </svg>
    </button>
  );
}
// ScrollButton.defaultProps = {
//   mode: "down",
//   label: "스크롤 다운",
// };

// prop-types 라이브러리 활용 Props 타입 검사
ScrollButton.propTypes = {
  mode: PropTypes.string,
  label: PropTypes.string,
};

ScrollButton.Group = function ScrollButtonGroup({ onScroll, children }) {
  return (
    <div role="group" className="ScrollButtonGroup" onClick={onScroll}>
      {children}
    </div>
  );
};
// PropTypes.node ->  React.ReactNode
// PropTypes.element ->  React.ReactElement
// PropTypes.elementType ->  React.Component
ScrollButton.Group.propTypes = {
  onScroll: PropTypes.func,
  children: PropTypes.node, // React.ReactNode
};

export default ScrollButton;
