import { FaSearch } from "react-icons/fa";

import "../Search/Search.sass"

export function Search({ searchOpen, toggleSearch }) {
    return (
        <>
            {/* 1. Search Bar for Desktop (hidden on mobile) */}
            <div className="navbar__search navbar__search--desktop">
                <input type="text" placeholder="Search product..." />
                <FaSearch size={18} className="navbar__search-icon" />
            </div>

            {/* 2. Mobile Search Toggle Icon (visible on mobile, changes color when active) */}
            <button 
                className={`navbar__search-toggle ${searchOpen ? "navbar__search-toggle--active" : ""}`}
                onClick={toggleSearch}
            >
                <FaSearch size={24} />
            </button>
        </>
    );
}

export function MobileSearch({ searchOpen }) {
    return (
        <div className={`navbar__search-mobile ${searchOpen ? "navbar__search-mobile--open" : ""}`}>
            <div className="navbar__search-mobile-container">
                <input type="text" placeholder="Search product..." />
            </div>
        </div>
    );
}