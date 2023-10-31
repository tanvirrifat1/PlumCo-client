const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default Loading;
