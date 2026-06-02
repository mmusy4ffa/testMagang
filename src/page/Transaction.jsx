// import Background from "../components/Background";
import SideBar from "../components/SideBar";
import Navbar from "../components/Navbar";

export default function Transaction() {
  return (
    <div className="w-screen">
      <div className="flex">
        <SideBar />
        <div className="w-screen">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
