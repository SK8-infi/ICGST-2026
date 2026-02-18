import { useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { NAV_ITEMS, ROUTES } from '../../constants/routes';
import NavLinks from './NavLinks';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isTravelDropdownOpen, setIsTravelDropdownOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSmoothScrollNav = (e, path) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        setTimeout(() => {
            navigate(path);
            setIsMenuOpen(false);
            setIsDropdownOpen(false);
        }, 300);
    };

    return (
        <header className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
            {/* Top Branding Bar - College Branding */}
            <a
                href="https://iiitm.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block border-b-2 hover:bg-[#001f4d] transition-colors"
                style={{ backgroundColor: '#002855', borderColor: '#001a3a' }}
            >
                <div className="flex items-center w-full min-h-[48px] py-1 px-2 sm:px-4">
                    {/* Left Column - Logo */}
                    <div className="w-10 sm:w-14 flex-shrink-0 flex justify-start">
                        <div className="bg-white rounded-full p-[3px] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center shadow-lg">
                            <img
                                src="https://lh3.googleusercontent.com/d/1LNtqXOXfvsyYZaclWSc2QM-yzpxov1vw"
                                alt="ABV-IIITM Gwalior Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Center Column - Text */}
                    <div className="flex-1 flex items-center justify-center px-2 overflow-hidden">
                        <h2
                            className="text-white font-bold uppercase text-center leading-tight tracking-tight"
                            style={{
                                fontSize: 'clamp(0.6rem, 1.6vw, 1.4rem)',
                                letterSpacing: '0.01em',
                                color: '#ffffff',
                                textWrap: 'balance'
                            }}
                        >
                            Atal Bihari Vajpayee Indian Institute of Information Technology and Management, Gwalior
                        </h2>
                    </div>
                </div>
            </a>

            {/* Main navbar */}
            <nav className="border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative flex items-center justify-between h-12">
                        {/* Conference Acronym */}
                        <div className="flex-shrink-0 flex items-center gap-3 mr-4 lg:mr-8">
                            <Link to={ROUTES.HOME} className="font-bold text-[#002855] text-xl md:text-2xl tracking-tight whitespace-nowrap pt-1 lg:pt-0 hover:opacity-80 transition-opacity">
                                ICGST-2026
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <NavLinks mobile={false} items={NAV_ITEMS.slice(0, 2)} />

                            {/* Call for Papers Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center px-1 py-1 xl:px-2 text-[10px] xl:text-xs font-medium tracking-wide uppercase text-slate-700 hover:text-blue-700 transition-colors">
                                    Call for Papers
                                    <svg className="w-3 h-3 ml-0.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {/* Invisible bridge to prevent menu closing when moving cursor */}
                                <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>

                                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50 border border-slate-100 ring-1 ring-black ring-opacity-5">
                                    <div className="py-1">
                                        <Link to={ROUTES.TRACKS} className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700">
                                            Conference Tracks
                                        </Link>
                                        <Link to={ROUTES.GUIDELINES} className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700">
                                            Submission Guidelines
                                        </Link>
                                        <Link to={ROUTES.CAMERA_READY} className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700">
                                            Camera Ready Submission
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Right Links: Important Dates, Registration */}
                            <NavLinks mobile={false} items={NAV_ITEMS.slice(2, 4)} />

                            {/* Travel Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center px-1 py-1 xl:px-2 text-[10px] xl:text-xs font-medium tracking-wide uppercase text-slate-700 hover:text-blue-700 transition-colors">
                                    Travel
                                    <svg className="w-3 h-3 ml-0.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className="absolute top-full left-0 w-full h-2 bg-transparent"></div>
                                <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left z-50 border border-slate-100 ring-1 ring-black ring-opacity-5">
                                    <div className="py-1">
                                        <Link to={ROUTES.TRAVEL_VISA} className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700">
                                            Travel Visa
                                        </Link>
                                        <Link to={ROUTES.TRAVEL_VENUE} className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700">
                                            Venue & Directions
                                        </Link>
                                        <Link to={ROUTES.TRAVEL_EXPLORE} className="block px-4 py-2 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700">
                                            Explore Gwalior
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Committee, Contact */}
                            <NavLinks mobile={false} items={NAV_ITEMS.slice(4)} />

                            {/* Submit Button */}
                            <a
                                href="https://cmt3.research.microsoft.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-105"
                            >
                                Submit Paper
                            </a>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 text-gray-500 ml-auto focus:outline-none"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Navigation Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden py-2 border-t border-gray-100 bg-white shadow-xl rounded-b-xl px-2 pb-4">
                            <div className="flex flex-col gap-1">
                                <NavLinks mobile={true} setIsMenuOpen={setIsMenuOpen} />

                                {/* Mobile Dropdown for Call for Papers */}
                                <div className="border-l-4 border-transparent">
                                    <button
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                                    >
                                        <span>Call for Papers</span>
                                        <svg className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {isDropdownOpen && (
                                        <div className="pl-4 bg-slate-50 rounded-md mt-1">
                                            <NavLink
                                                to={ROUTES.TRACKS}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={({ isActive }) => `block px-4 py-2 text-sm ${isActive ? 'text-blue-700 font-bold' : 'text-slate-600'}`}
                                            >
                                                Conference Tracks
                                            </NavLink>
                                            <NavLink
                                                to={ROUTES.GUIDELINES}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={({ isActive }) => `block px-4 py-2 text-sm ${isActive ? 'text-blue-700 font-bold' : 'text-slate-600'}`}
                                            >
                                                Submission Guidelines
                                            </NavLink>
                                            <NavLink
                                                to={ROUTES.CAMERA_READY}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={({ isActive }) => `block px-4 py-2 text-sm ${isActive ? 'text-blue-700 font-bold' : 'text-slate-600'}`}
                                            >
                                                Camera Ready
                                            </NavLink>
                                        </div>
                                    )}
                                </div>

                                {/* Mobile Dropdown for Travel */}
                                <div className="border-l-4 border-transparent">
                                    <button
                                        onClick={() => setIsTravelDropdownOpen(!isTravelDropdownOpen)}
                                        className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                                    >
                                        <span>Travel</span>
                                        <svg className={`w-4 h-4 transition-transform ${isTravelDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {isTravelDropdownOpen && (
                                        <div className="pl-4 bg-slate-50 rounded-md mt-1">
                                            <NavLink
                                                to={ROUTES.TRAVEL_VISA}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={({ isActive }) => `block px-4 py-2 text-sm ${isActive ? 'text-blue-700 font-bold' : 'text-slate-600'}`}
                                            >
                                                Travel Visa
                                            </NavLink>
                                            <NavLink
                                                to={ROUTES.TRAVEL_VENUE}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={({ isActive }) => `block px-4 py-2 text-sm ${isActive ? 'text-blue-700 font-bold' : 'text-slate-600'}`}
                                            >
                                                Venue & Directions
                                            </NavLink>
                                            <NavLink
                                                to={ROUTES.TRAVEL_EXPLORE}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={({ isActive }) => `block px-4 py-2 text-sm ${isActive ? 'text-blue-700 font-bold' : 'text-slate-600'}`}
                                            >
                                                Explore Gwalior
                                            </NavLink>
                                        </div>
                                    )}
                                </div>

                                <a
                                    href="https://cmt3.research.microsoft.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 text-center block w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                                >
                                    Submit Paper
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}
