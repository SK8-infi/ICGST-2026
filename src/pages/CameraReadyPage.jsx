import React from 'react';
import SectionContainer from '../components/ui/SectionContainer';
import HeroSection from '../components/home/HeroSection';

export default function CameraReadyPage() {
    return (
        <div className="pt-16">
            <HeroSection
                title="Camera Ready Submission"
                subtitle="Final paper preparation and submission instructions"
                isHomePage={false}
            />

            <SectionContainer>
                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Content - Left Column */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Step 1 */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 relative overflow-hidden group hover:border-blue-300 transition-colors">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">1</span>
                                Final Camera-ready paper preparation
                            </h3>
                            <ul className="space-y-2 text-slate-600 list-disc pl-11 text-sm leading-relaxed">
                                <li>Follow the <strong>IEEE two-column A4 size</strong> standard conference format.</li>
                                <li><strong>Revise your paper</strong> based on reviewers’ comments/suggestions available on Microsoft CMT.</li>
                                <li>Maximum page limit is <strong>6 pages</strong>, including references.</li>
                                <li>Do not include an author biography at the end.</li>
                                <li>Additional pages permitted subject to extra payment of <strong>Rs. 500 ($25)</strong> per page (max 8 pages total).</li>
                                <li><strong>Similarity Index</strong> must be below 20% (excluding references) & individual similarity not greater than 10%.</li>
                                <li>Papers with similarity &gt; 20% will be summarily rejected.</li>
                                <li>Maximum file size: <strong>3 MB</strong>, PDF format without encryption/passwords.</li>
                                <li>Ensure all reviewers' comments have been addressed.</li>
                            </ul>
                        </div>

                        {/* Step 2 */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 relative overflow-hidden group hover:border-blue-300 transition-colors">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">2</span>
                                IEEE Copyright Notice
                            </h3>
                            <div className="pl-11 space-y-4 text-sm text-slate-600">
                                <p>Students must ensure the correct copyright notice is included on their papers (bottom-left of first page):</p>
                                <div className="space-y-3">
                                    <div className="bg-slate-50 p-3 rounded border border-slate-100">
                                        <p className="font-semibold text-slate-800 mb-1">Standard (Most Authors)</p>
                                        <code className="text-blue-700 bg-blue-50/50 px-1 py-0.5 rounded">979-8-3315-2716-7/25/$31.00 ©2025 IEEE</code>
                                    </div>
                                    <div className="bg-slate-50 p-3 rounded border border-slate-100">
                                        <p className="font-semibold text-slate-800 mb-1">European Union</p>
                                        <code className="text-blue-700 bg-blue-50/50 px-1 py-0.5 rounded">979-8-3315-2716-7/25/$31.00 ©2025 European Union</code>
                                    </div>
                                    <div className="bg-slate-50 p-3 rounded border border-slate-100">
                                        <p className="font-semibold text-slate-800 mb-1">Crown Government (UK, Canada, Australia)</p>
                                        <code className="text-blue-700 bg-blue-50/50 px-1 py-0.5 rounded">979-8-3315-2716-7/25/$31.00 ©2025 Crown</code>
                                    </div>
                                    <div className="bg-slate-50 p-3 rounded border border-slate-100">
                                        <p className="font-semibold text-slate-800 mb-1">US Government</p>
                                        <code className="text-blue-700 bg-blue-50/50 px-1 py-0.5 rounded">U.S. Government work not protected by U.S. copyright</code>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 relative overflow-hidden group hover:border-blue-300 transition-colors">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">3</span>
                                PDF eXpress Check
                            </h3>
                            <div className="pl-11 space-y-3 text-sm text-slate-600">
                                <p>Validate your revised paper using IEEE PDF eXpress:</p>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li><strong>Conference ID:</strong> <span className="font-mono text-blue-600 bg-blue-50 px-1 rounded">65536X</span></li>
                                    <li><a href="https://ieee-pdf-express.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Log in to IEEE PDF eXpress™</a></li>
                                    <li>First-time users: Create account with Conference ID, email, and password.</li>
                                </ul>
                                <p className="italic text-slate-500 text-xs">An online confirmation will be displayed and an email sent upon verification.</p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 relative overflow-hidden group hover:border-blue-300 transition-colors">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">4</span>
                                Camera-ready Paper Submission
                            </h3>
                            <ul className="space-y-2 text-slate-600 list-disc pl-11 text-sm">
                                <li>Submit the <strong>final verified version</strong> of the paper via CMT.</li>
                                <li>Rename file to: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">CMT_Paper_ID.pdf</code> before uploading.</li>
                                <li>Retain original paper title.</li>
                                <li><strong>Author list and order cannot be changed</strong> in the final manuscript.</li>
                            </ul>
                        </div>

                        {/* Step 5 */}
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 relative overflow-hidden group hover:border-blue-300 transition-colors">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500"></div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">5</span>
                                Submission of Copyright Form
                            </h3>
                            <div className="pl-11 space-y-3 text-sm text-slate-600">
                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-3">
                                    <p className="text-xs text-yellow-800"><strong>IMPORTANT:</strong> Ensure all authors are registered in CMT with correct names. Discrepancies may exclude submission from IEEE Xplore.</p>
                                </div>
                                <ul className="list-disc pl-5 space-y-1">
                                    <li>Click 'Submit IEEE Copyright Form' link in CMT after uploading camera-ready paper.</li>
                                    <li>Complete the form on the redirected IEEE eCF site.</li>
                                    <li>Download the completed PDF.</li>
                                    <li>Upload the PDF to CMT in the same section.</li>
                                    <li>Corresponding author may submit for all authors.</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* Sidebar - Quick Access */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-24 space-y-6">

                            {/* Stats Card */}
                            <div className="bg-slate-900 text-white rounded-xl p-6 shadow-lg">
                                <h4 className="text-lg font-bold mb-4 border-b border-slate-700 pb-2 text-white">Quick Specs</h4>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex justify-between">
                                        <span className="text-slate-300">Page Limit</span>
                                        <span className="font-semibold text-white">6 pages</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-slate-300">File Size</span>
                                        <span className="font-semibold text-white">Max 3 MB</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-slate-300">Format</span>
                                        <span className="font-semibold text-white">PDF only</span>
                                    </li>
                                    <li className="flex justify-between">
                                        <span className="text-slate-300">Similarity</span>
                                        <span className="font-semibold text-green-400">&lt; 20%</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Quick Links */}
                            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6">
                                <h4 className="text-lg font-bold text-slate-800 mb-4">Quick Access</h4>
                                <div className="space-y-3">
                                    <a href="https://cmt3.research.microsoft.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors group">
                                        <svg className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
                                        <span className="font-medium">Reviewer Comments</span>
                                    </a>
                                    <a href="https://ieee-pdf-express.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors group">
                                        <svg className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                        <span className="font-medium">PDF eXpress</span>
                                    </a>
                                    <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors group">
                                        <svg className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                        <span className="font-medium">Information for Authors</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </SectionContainer>
        </div>
    );
}
