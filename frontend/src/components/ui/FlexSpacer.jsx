import classNames from "classnames";

function FlexSpacer({ children, className }) {
  const divClass = classNames(
    "flex justify-between gap-2 items-center",
    className,
  );

  return <div className={divClass}>{children}</div>;
}

export default FlexSpacer;
