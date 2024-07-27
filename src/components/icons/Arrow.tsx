const Arrow = ({ color = "#777", size = "24" }) => {
  return (
    <svg
      width={size}
      className={color}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.4102 16.59L10.8302 12L15.4102 7.41L14.0002 6L8.00016 12L14.0002 18L15.4102 16.59Z" />
    </svg>
  );
};

export default Arrow;
