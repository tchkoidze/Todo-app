function Header() {
  return (
    <div
      className="header"
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "48px 24px 0 24px",
      }}
    >
      <h1
        style={{
          fontWeight: 700,
          fontSize: "20px",
          lineHeight: "20px",
          letterSpacing: "12px",
          color: "#FFFFFF",
        }}
      >
        TODO
      </h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="20"
        viewBox="0 0 29.2 31"
      >
        <path
          fill="#FFF"
          fill-rule="evenodd"
          d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
        />
      </svg>
    </div>
  );
}

export default Header;
