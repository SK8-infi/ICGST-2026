import {
    honoraryGeneralChairs,
    generalChairs,
    conferenceChairs,
    conferenceCoChairs,
    organizingChairs,
} from '../data/committeeData';

import HeroSection from '../components/home/HeroSection';

export default function CommitteePage() {
    return (
        <div className="bg-neutral-50 pb-16">
            {/* Page Header */}
            <HeroSection
                title="Organizing Committee"
                subtitle="Meet the distinguished organizing committee of ICGST-2026."
            />

            <section className="py-8 md:py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-10">
                        {/* Honorary General Chairs */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-5 text-center">Honorary General Chairs</h2>
                            <div className="flex flex-wrap justify-center items-stretch gap-4">
                                {honoraryGeneralChairs.map((member, index) => (
                                    <MemberCard key={index} member={member} />
                                ))}
                            </div>
                        </div>

                        {/* General Chairs */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-5 text-center">General Chairs</h2>
                            <div className="flex flex-wrap justify-center items-stretch gap-4">
                                {generalChairs.map((member, index) => (
                                    <MemberCard key={index} member={member} />
                                ))}
                            </div>
                        </div>

                        {/* Conference Chairs */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-5 text-center">Conference Chairs</h2>
                            <div className="flex flex-wrap justify-center items-stretch gap-4">
                                {conferenceChairs.map((member, index) => (
                                    <MemberCard key={index} member={member} />
                                ))}
                            </div>
                        </div>

                        {/* Conference Co-Chair */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-5 text-center">Conference Co-Chair</h2>
                            <div className="flex flex-wrap justify-center items-stretch gap-4">
                                {conferenceCoChairs.map((member, index) => (
                                    <MemberCard key={index} member={member} />
                                ))}
                            </div>
                        </div>

                        {/* Organizing Chairs */}
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-5 text-center">Organizing Chairs</h2>
                            <div className="flex flex-wrap justify-center items-stretch gap-4">
                                {organizingChairs.map((member, index) => (
                                    <MemberCard key={index} member={member} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function MemberCard({ member }) {
    const initials = member.name === 'TBD'
        ? '?'
        : member.name
            .split(' ')
            .filter(n => !['Dr.', 'Prof.', 'Mr.', 'Ms.', 'Mrs.'].includes(n))
            .map(n => n.charAt(0))
            .join('')
            .slice(0, 2);

    return (
        <div className="flex-1 w-full min-w-[240px] max-w-[260px] bg-white rounded-xl shadow-sm border border-neutral-100 p-4 xl:p-5 text-center hover:shadow-md transition-shadow flex flex-col items-center justify-start">
            {/* Avatar */}
            {member.profileUrl ? (
                <a href={member.profileUrl} target="_blank" rel="noopener noreferrer" className="block relative group flex-shrink-0">
                    <div
                        className="w-20 h-20 xl:w-24 xl:h-24 rounded-2xl mb-3 mx-auto flex items-center justify-center text-xl xl:text-2xl font-bold text-white shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105"
                        style={{ backgroundColor: '#003366' }}
                    >
                        {member.image ? (
                            <img
                                src={member.image}
                                alt={member.name}
                                onError={(e) => {
                                    e.target.onerror = null; // prevents looping
                                    e.target.style.display = 'none'; // hide broken image
                                    e.target.parentElement.innerHTML = initials; // fallback to initials
                                }}
                                className="w-full h-full object-cover rounded-2xl"
                            />
                        ) : (
                            initials
                        )}
                    </div>
                </a>
            ) : (
                <div
                    className="w-20 h-20 xl:w-24 xl:h-24 rounded-2xl mb-3 mx-auto flex items-center justify-center text-xl xl:text-2xl font-bold text-white shadow-md overflow-hidden flex-shrink-0"
                    style={{ backgroundColor: '#003366' }}
                >
                    {member.image ? (
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 hover:scale-110"
                        />
                    ) : (
                        initials
                    )}
                </div>
            )}

            {/* Name */}
            {member.profileUrl ? (
                <a href={member.profileUrl} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-neutral-900 mb-1 hover:text-primary-600 transition-colors">
                    {member.name}
                </a>
            ) : (
                <h3 className="text-lg font-bold text-neutral-900 mb-1">{member.name}</h3>
            )}

            {/* Designation */}
            {member.designation ? (
                <p className="text-xs font-bold text-primary-700 uppercase tracking-wider mb-2 leading-tight">{member.designation}</p>
            ) : (
                <div className="mb-2"></div>
            )}

            {/* Affiliation */}
            <p className="text-xs xl:text-sm text-neutral-600 leading-snug">{member.affiliation}</p>

            {/* Email */}
            {member.email && (
                <a href={`mailto:${member.email}`} className="text-xs text-primary-600 hover:text-primary-800 mt-2 inline-block font-medium">
                    {member.email}
                </a>
            )}
        </div>
    );
}
