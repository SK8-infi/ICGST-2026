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
        <>
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
                                    className="ml-4 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium !text-white bg-[#002855] hover:bg-[#001a3a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#002855] transition-all transform hover:scale-105"
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

                        {/* Mobile Navigation Menu — comment placeholder (actual drawer is outside header) */}
                    </div>
                </nav>
            </header>

            {/* Mobile Navigation Drawer — rendered OUTSIDE header to avoid backdrop-blur containing block */}
            {
                isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 z-[60] bg-black/50 lg:hidden"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Drawer */}
                        <div className="fixed top-0 right-0 z-[70] w-[280px] h-screen bg-[#001c3d] shadow-2xl flex flex-col lg:hidden">
                            {/* Drawer Header */}
                            <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between">
                                <span className="font-bold text-lg tracking-wide text-white">ICGST-2026</span>
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-1 text-white hover:text-gray-300 transition-colors focus:outline-none"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {/* Drawer Content — simple centered list */}
                            <div className="flex-1 overflow-y-auto py-6 flex flex-col items-center">
                                {/* Home */}
                                <NavLink to={ROUTES.HOME} onClick={() => setIsMenuOpen(false)}
                                    style={{ color: 'white' }}
                                    className={({ isActive }) => `py-3 text-base font-medium transition-colors !text-white ${isActive ? 'font-bold' : ''}`}>
                                    Home
                                </NavLink>

                                {/* About */}
                                <NavLink to={ROUTES.ABOUT} onClick={() => setIsMenuOpen(false)}
                                    style={{ color: 'white' }}
                                    className={({ isActive }) => `py-3 text-base font-medium transition-colors !text-white ${isActive ? 'font-bold' : ''}`}>
                                    About
                                </NavLink>

                                {/* Call for Papers with chevron */}
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    style={{ color: 'white' }}
                                    className="flex items-center justify-center gap-2 py-3 text-base font-medium !text-white transition-colors"
                                >
                                    Call for Papers
                                    <svg className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isDropdownOpen && (
                                    <div className="flex flex-col items-center gap-0 pb-1">
                                        <NavLink to={ROUTES.TRACKS} onClick={() => setIsMenuOpen(false)}
                                            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                            className={({ isActive }) => `py-2 text-sm transition-colors !text-white/80 ${isActive ? '!text-white font-bold' : 'hover:!text-white'}`}>
                                            Conference Tracks
                                        </NavLink>
                                        <NavLink to={ROUTES.GUIDELINES} onClick={() => setIsMenuOpen(false)}
                                            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                            className={({ isActive }) => `py-2 text-sm transition-colors !text-white/80 ${isActive ? '!text-white font-bold' : 'hover:!text-white'}`}>
                                            Submission Guidelines
                                        </NavLink>
                                        <NavLink to={ROUTES.CAMERA_READY} onClick={() => setIsMenuOpen(false)}
                                            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                            className={({ isActive }) => `py-2 text-sm transition-colors !text-white/80 ${isActive ? '!text-white font-bold' : 'hover:!text-white'}`}>
                                            Camera Ready
                                        </NavLink>
                                    </div>
                                )}

                                {/* Important Dates */}
                                <NavLink to={ROUTES.IMPORTANT_DATES} onClick={() => setIsMenuOpen(false)}
                                    style={{ color: 'white' }}
                                    className={({ isActive }) => `py-3 text-base font-medium transition-colors !text-white ${isActive ? 'font-bold' : ''}`}>
                                    Important Dates
                                </NavLink>

                                {/* Registration */}
                                <NavLink to={ROUTES.REGISTRATION} onClick={() => setIsMenuOpen(false)}
                                    style={{ color: 'white' }}
                                    className={({ isActive }) => `py-3 text-base font-medium transition-colors !text-white ${isActive ? 'font-bold' : ''}`}>
                                    Registration
                                </NavLink>

                                {/* Travel with chevron */}
                                <button
                                    onClick={() => setIsTravelDropdownOpen(!isTravelDropdownOpen)}
                                    style={{ color: 'white' }}
                                    className="flex items-center justify-center gap-2 py-3 text-base font-medium !text-white transition-colors"
                                >
                                    Travel
                                    <svg className={`w-4 h-4 transition-transform duration-200 ${isTravelDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                {isTravelDropdownOpen && (
                                    <div className="flex flex-col items-center gap-0 pb-1">
                                        <NavLink to={ROUTES.TRAVEL_VISA} onClick={() => setIsMenuOpen(false)}
                                            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                            className={({ isActive }) => `py-2 text-sm transition-colors !text-white/80 ${isActive ? '!text-white font-bold' : 'hover:!text-white'}`}>
                                            Travel Visa
                                        </NavLink>
                                        <NavLink to={ROUTES.TRAVEL_VENUE} onClick={() => setIsMenuOpen(false)}
                                            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                            className={({ isActive }) => `py-2 text-sm transition-colors !text-white/80 ${isActive ? '!text-white font-bold' : 'hover:!text-white'}`}>
                                            Venue & Directions
                                        </NavLink>
                                        <NavLink to={ROUTES.TRAVEL_EXPLORE} onClick={() => setIsMenuOpen(false)}
                                            style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                                            className={({ isActive }) => `py-2 text-sm transition-colors !text-white/80 ${isActive ? '!text-white font-bold' : 'hover:!text-white'}`}>
                                            Explore Gwalior
                                        </NavLink>
                                    </div>
                                )}

                                {/* Committee */}
                                <NavLink to={ROUTES.COMMITTEE} onClick={() => setIsMenuOpen(false)}
                                    style={{ color: 'white' }}
                                    className={({ isActive }) => `py-3 text-base font-medium transition-colors !text-white ${isActive ? 'font-bold' : ''}`}>
                                    Committee
                                </NavLink>

                                {/* Contact */}
                                <NavLink to={ROUTES.CONTACT} onClick={() => setIsMenuOpen(false)}
                                    style={{ color: 'white' }}
                                    className={({ isActive }) => `py-3 text-base font-medium transition-colors !text-white ${isActive ? 'font-bold' : ''}`}>
                                    Contact Us
                                </NavLink>
                            </div>

                            {/* Drawer Footer */}
                            <div className="px-6 py-4 border-t border-white/10">
                                <a
                                    href="https://cmt3.research.microsoft.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-full px-4 py-3 rounded-lg text-sm font-bold text-[#002855] bg-white hover:bg-gray-100 transition-all"
                                >
                                    Submit Paper
                                </a>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    );
}
