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
      <div className="flex justify-center items-center font-semibold h-full">
        <p className="text-7xl font-thin">L</p>
        <div className="w-10 h-10 border-8 border-dashed rounded-full animate-spin mt-5 border-green-600"></div>
        <p className="text-7xl font-thin">ading....</p>
      </div>
    </div>
  );
};

export default Loading;
