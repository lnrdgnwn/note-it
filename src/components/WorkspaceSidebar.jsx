import { FaRegStickyNote, FaArchive, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function WorkspaceSidebar({ isSidebarOpen, toggleSidebar }) {
  return (
    <div className="relative">
      <div
        className={`${
          isSidebarOpen ? "block pt-[72px]" : "hidden pt-4"
        } md:block w-64 bg-primary text-white p-4 h-screen fixed inset-0 top-0 left-0 z-50 border-r  border-[#D1D0D0]`}
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold mb-4 hidden sm:block">Workspace</h2>
        </div>

        <ul className="text-white">
          <li>
            <Link
              to="/workspace"
              className="flex items-center py-2 hover:bg-gray-700 px-2"
            >
              <FaRegStickyNote className="mr-2" />
              <span className="inline text-inter">Notes</span>
            </Link>
          </li>
          <li>
            <Link
              to="/workspace/archive"
              className="flex items-center py-2 hover:bg-gray-700 px-2"
            >
              <FaArchive className="mr-2" />
              <span className="inline text-inter">Archived</span>
            </Link>
          </li>
          <li>
            <Link
              to="/workspace/trash"
              className="flex items-center py-2 hover:bg-gray-700 px-2"
            >
              <FaTrash className="mr-2" />
              <span className="inline text-inter">Trash</span>
            </Link>
          </li>
        </ul>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
}

export default WorkspaceSidebar;
