import "./ScrollButton.css";
// 0. mode or type : 'up' | 'down'
// 1. props.label
// 2. props.className
function ScrollButton({ mode = "down" }) {
  const isUpMode = mode.includes("up");
  const buttonLabel = isUpMode ? "스크롤 업" : "스크롤 다운";
  const buttonClassName = isUpMode ? "scrollUp" : "scrollDown";
  return (
    <>
      <button
        type="button"
        className={buttonClassName}
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
    </>
  );
}

ScrollButton.Group = function ScrollButtonGroup({ children }) {
  const handleScrollMove = ({ currentTarget, target }) => {
    const { top } = currentTarget.getBoundingClientRect();
    const appElement = document.querySelector(".App");

    if (target.matches(".scrollDown")) {
      appElement.scroll({
        top,
        behavior: "smooth",
      });
    }
    if (target.matches(".scrollUp")) {
      appElement.scroll({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <div role="group" className="buttonGroup" onClick={handleScrollMove}>
      {children}
    </div>
  );
};

// 컴파운드 컴포넌트 패턴
// <ScrollButton.Group />
export default ScrollButton;
