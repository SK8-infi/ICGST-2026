import React from 'react';
import SectionContainer from '../components/ui/SectionContainer';
import HeroSection from '../components/home/HeroSection';
// actually let's use a solid header instead of hero component to be consistent with other pages if preferred, 
// but reusing HeroSection with title is common in this codebase.

export default function SubmissionGuidelinesPage() {
    return (
        <div className="pt-16">
            <HeroSection
                title="Submission Guidelines"
                subtitle="Instructions for prospective authors"
                isHomePage={false}
            />

            <SectionContainer>
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Introduction */}
                    <div className="prose prose-lg max-w-none text-slate-600">
                        <p className="text-lg leading-relaxed">
                            Prospective authors are invited to submit original technical papers for publication in the ICGST-2026.
                            All presented papers will be submitted to the IEEE for possible inclusion in IEEE Xplore.
                        </p>
                    </div>

                    {/* Guidelines List */}
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                        <div className="px-6 py-4" style={{ backgroundColor: '#002855' }}>
                            <h2 className="text-xl font-bold text-white flex items-center gap-2">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Paper Submission Guidelines
                            </h2>
                        </div>
                        <div className="p-6 md:p-8">
                            <ul className="space-y-4 text-slate-700 list-disc pl-5 marker:text-blue-500">
                                <li>All conference submissions should be written in English with a <strong>maximum paper length of six (6) printed pages</strong> (10-point font), including figures and tables.</li>
                                <li><strong>LaTeX</strong> is the preferred method to prepare your manuscript. Please use the standard LaTeX IEEE conference template.</li>
                                <li>For <strong>Microsoft Word</strong>, please use the most current version of the IEEE conference template to reduce conversion issues.</li>
                                <li>All co-authors must be listed with affiliation details in the initial submission. <strong>No further authors can be added</strong> for selected papers.</li>
                                <li>Authors receiving final acceptance after revision can only register for the conference. They must submit a final manuscript for IEEE proceedings.</li>
                                <li>Please upload camera-ready paper and an eCopy transfer file in <strong>Microsoft CMT</strong>.</li>
                                <li>All registered papers <strong>must be presented</strong> at the conference.</li>
                                <li>Ensure the camera-ready paper is generated using the provided template (containing IEEE copyright notice) and verified with <strong>PDF Express</strong>.</li>
                                <li>The completed <strong>IEEE electronic copyright form (ECF)</strong> needs to be transferred as per IEEE requirements.</li>
                                <li>Review is <strong>single blind</strong>. Papers with poor quality or high similarity index will be desk rejected without review.</li>
                                <li>All presented papers will be submitted to IEEE for possible publication in <strong>IEEE Xplore</strong>.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Resources & Templates */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                            <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Templates
                            </h3>
                            <div className="space-y-3">
                                <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2 px-4 bg-white border border-blue-200 rounded-lg text-blue-700 font-medium hover:bg-blue-600 hover:text-white transition-colors">
                                    Download IEEE Conference Template
                                </a>
                            </div>
                        </div>

                        <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-100">
                            <h3 className="text-lg font-bold text-indigo-900 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                                Submission
                            </h3>
                            <div className="space-y-3">
                                <a href="https://cmt3.research.microsoft.com/" target="_blank" rel="noopener noreferrer" className="block w-full text-center py-2 px-4 bg-[#002855] !text-white rounded-lg font-bold hover:bg-[#001a3a] transition-colors shadow-md">
                                    Submit via Microsoft CMT
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </SectionContainer>
        </div>
    );
}
