function Button({ type, children }) {
  // const color = type === "edit" ? "bg-amber-600" : "bg-red-400";
  return (
    <button className={`font-mono h-15 w-20 bg-amber-600 mx-4 rounded-xl`}>
      {children}
    </button>
  );
}

export default Button;
