import { useState } from "react";
import { Link } from "react-router-dom";
import { MdRefresh, MdAccountCircle } from "react-icons/md";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";
import { useAuth } from "../context/AuthContext";
import { auth } from "../firebase/config";
import { HiMenu } from "react-icons/hi";

function WorkspaceHeader({
  onSearch,
  isGrid,
  toggleLayout,
  toggleSidebar,
  isSidebarOpen,
}) {
  const { currentUser, setCurrentUser } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleRefresh = () => {
    window.location.reload();
  };

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        localStorage.removeItem("user");
        setCurrentUser(null);
      })
      .catch((error) => {
        console.error("Error during logout:", error);
      });
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const renderProfilePicture = () => {
    if (currentUser.photoURL) {
      return (
        <img
          src={currentUser.photoURL}
          alt={`${currentUser.email || "User"}'s profile`}
          className="w-full h-full object-cover"
        />
      );
    }
    if (currentUser?.email) {
      const initial = currentUser.email.charAt(0).toUpperCase();
      return (
        <div className="w-full h-full flex items-center justify-center bg-primary text-white text-xl font-bold">
          {initial}
        </div>
      );
    }
    return (
      <MdAccountCircle
        className="w-full h-full text-gray-400"
        aria-hidden="true"
      />
    );
  };

  return (
    <header className="sticky z-50 border-b border-b-primary bg-white flex items-center justify-between top-0 left-0 right-0 p-2 w-full">
      <div className="flex items-center space-x-4">
        <button
          className="md:hidden w-12 h-12 rounded-full flex items-center justify-center text-primary hover:bg-gray-100 focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Toggle Menu"
        >
          <HiMenu className="w-8 h-8" />
        </button>
        <Link to="/" className="hidden md:block">
          <img src="images/Note-it.svg" alt="Note-it Logo" className="h-8" />
        </Link>
      </div>

      <div className="flex-1 mx-4">
        <form>
          <div className="relative">
            <input
              id="searchNotes"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>
        </form>
      </div>

      <div className="flex items-center space-x-4">
        <button
          className="w-12 h-12 rounded-full flex items-center justify-center text-primary hover:bg-gray-100 focus:outline-none"
          aria-label="Refresh"
          onClick={handleRefresh}
        >
          <MdRefresh className="w-8 h-8" />
        </button>
        <button
          className="w-12 h-12 rounded-full flex items-center justify-center text-primary hover:bg-gray-100 focus:outline-none"
          onClick={toggleLayout}
          aria-label={isGrid ? "Switch to Flex View" : "Switch to Grid View"}
        >
          {isGrid ? (
            <CiGrid41 className="w-8 h-8" />
          ) : (
            <CiGrid2H className="w-8 h-8" />
          )}
        </button>
        <div className="relative">
          <button
            className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300 flex items-center justify-center"
            onClick={toggleDropdown}
            aria-label="User Profile"
            aria-expanded={dropdownOpen}
          >
            {renderProfilePicture()}
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
              <button
                onClick={handleLogout}
                className="block px-4 py-2 text-gray-800 text-left hover:bg-gray-100 w-full"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default WorkspaceHeader;
