import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { path: "/ui-preview/buttons", label: "Buttons" },
  { path: "/ui-preview/modals", label: "Modals" },
];

function PreviewLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-[#E5E5E5] sticky">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 border-r border-gray-200 p-4 h-full top-0 fixed">
        <h2 className="text-xl font-bold mb-4">UI Preview</h2>
        <nav className="space-y-2">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-4 py-2 rounded-md ${
                location.pathname === item.path
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 pl-64">{children}</div>
    </div>
  );
}

export default PreviewLayout;
