import SideNavbar from "../components/SideNavbar";

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-blue-800">
        <SideNavbar />
      </div>

      {/* Contenido principal */}
      <div className="flex-grow bg-white">
        {/* Contenido de tu aplicación */}
      </div>
    </div>
  );
}