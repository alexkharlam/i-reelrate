function FlexSpacer({ children, className }) {
  return (
    <div
      className={`flex justify-between gap-2 items-center ${className || ""}`}
    >
      {children}
    </div>
  );
}

export default FlexSpacer;
