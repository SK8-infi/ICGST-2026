import { introContent, conferenceObjectives, conferenceScope } from '../data/conferenceData';
import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import Card from '../components/ui/Card';

import HeroSection from '../components/home/HeroSection';

export default function AboutPage() {
    return (
        <>
            {/* Page Header */}
            <HeroSection
                title="About the Conference"
                subtitle="Learn more about ICGST-2026 and our vision for green and sustainable technologies."
            />

            {/* Background & Rationale - Clean Academic Refinement */}
            <SectionContainer background="white" className="relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start relative z-10">
                    {/* Left Column: Text Content */}
                    <div className="order-1 lg:order-1">
                        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full">
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                            <span className="text-xs font-bold text-blue-800 uppercase tracking-widest">Introduction</span>
                        </div>

                        <SectionHeader
                            title="Background & Rationale"
                            centered={false}
                            className="!mb-8"
                        />

                        <div className="prose prose-lg text-slate-700 space-y-6">
                            <p className="text-xl md:text-2xl text-slate-900 font-semibold leading-snug">
                                The accelerating impacts of <span className="text-blue-700">climate change</span>, resource depletion, and energy insecurity have made <span className="text-blue-600">sustainability</span> a defining global priority.
                            </p>
                            <p className="text-base md:text-lg leading-relaxed text-slate-600">
                                Technological innovations—when aligned with environmental responsibility and social inclusivity—can play a transformative role in addressing these challenges. Emerging paradigms such as <span className="text-blue-800 font-bold decoration-blue-200 decoration-2 underline-offset-4 underline">Green Manufacturing, Industry 5.0, Circular Economy, and Clean Energy Systems</span> are redefining how industries, governments, and societies function.
                            </p>
                            <div className="bg-slate-50 border-l-4 border-blue-600 p-6 rounded-r-2xl italic shadow-sm">
                                <p className="text-base md:text-lg leading-relaxed text-slate-700 m-0 font-medium">
                                    "{introContent.aboutConference}"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Scope Card - Light Refined Version */}
                    <div className="order-2 lg:order-2 lg:sticky lg:top-24">
                        <div className="relative rounded-3xl bg-white border border-slate-200 shadow-[0_20px_50px_rgba(0,40,85,0.1)] overflow-hidden">
                            {/* Blue Header Accent */}
                            <div className="h-2 w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900"></div>

                            <div className="p-8 md:p-10">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-14 h-14 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black text-slate-900 tracking-tight leading-none uppercase">
                                            Conference
                                        </h3>
                                        <div className="text-blue-600 font-bold text-lg tracking-wider">SCOPE & VISION</div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <p className="text-slate-700 text-lg leading-relaxed font-medium">
                                        {conferenceScope}
                                    </p>

                                    <div className="pt-8 border-t border-slate-100">
                                        <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Pioneering Fields</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {['Green Tech', 'Digital Sustainability', 'Green AI', 'Policy'].map((tag, i) => (
                                                <span key={i} className="px-3 py-1 bg-blue-50 border border-blue-100 rounded-lg text-xs font-bold text-blue-700 uppercase tracking-wider">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative corner element */}
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-50 rounded-full opacity-50 blur-2xl"></div>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            {/* Objectives */}
            <SectionContainer background="light">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <SectionHeader
                        title="Conference Objectives"
                        subtitle="The primary objectives of ICGST-2026"
                    />
                </div>
                <div className="max-w-4xl mx-auto grid gap-4">
                    {conferenceObjectives.map((objective, index) => (
                        <div key={index} className="group flex items-start gap-5 p-5 bg-white rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-primary-100">
                            <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 font-bold text-lg shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                                {index + 1}
                            </div>
                            <p className="text-base md:text-lg text-slate-700 leading-relaxed pt-1.5">{objective}</p>
                        </div>
                    ))}
                </div>
            </SectionContainer>

            {/* Focus Areas */}
            <SectionContainer background="white">
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <SectionHeader
                        title="Key Focus Areas"
                        subtitle="Driving innovation across sustainability domains"
                    />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    <FocusCard
                        icon={
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0" />
                            </svg>
                        }
                        title="Green Manufacturing"
                        description="Industry 5.0, circular manufacturing, and sustainable production"
                    />
                    <FocusCard
                        icon={
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        }
                        title="Clean Energy"
                        description="Renewables, smart grids, and energy storage systems"
                    />
                    <FocusCard
                        icon={
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                        }
                        title="Circular Economy"
                        description="E-waste recycling, resource recovery, and lifecycle assessment"
                    />
                    <FocusCard
                        icon={
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        }
                        title="Green Mobility"
                        description="EVs, hydrogen mobility, and intelligent transport systems"
                    />
                </div>
            </SectionContainer>
        </>
    );
}

function FocusCard({ icon, title, description }) {
    return (
        <Card className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left p-6 h-full hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 shrink-0">
                {icon}
            </div>
            <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">{title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{description}</p>
            </div>
        </Card>
    );
}
