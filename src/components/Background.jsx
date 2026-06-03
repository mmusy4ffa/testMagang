function Background({ children }) {
  return (
    <div className="bg-[#F5F7FA] flex-1 overflow-x-hidden scrollbar-hide ">
      {children}
    </div>
  );
}
export default Background;
