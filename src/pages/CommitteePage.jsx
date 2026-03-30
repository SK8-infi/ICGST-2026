import {
    honoraryGeneralChairs,
    generalChairs,
    conferenceChairs,
    conferenceCoChairs,
    organizingChairs,
} from '../data/committeeData';

import SectionContainer, { SectionHeader } from '../components/ui/SectionContainer';
import HeroSection from '../components/home/HeroSection';

export default function CommitteePage() {
    return (
        <>
            {/* Page Header */}
            <HeroSection
                title="Organizing Committee"
                subtitle="Meet the distinguished organizing committee of ICGST-2026."
            />

            {/* Honorary General Chairs */}
            <SectionContainer background="white">
                <SectionHeader
                    title="Honorary General Chairs"
                />
                <div className="flex flex-wrap justify-center items-stretch gap-6 max-w-7xl mx-auto px-4">
                    {honoraryGeneralChairs.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>
            </SectionContainer>

            {/* General Chairs */}
            <SectionContainer background="light">
                <SectionHeader
                    title="General Chairs"
                />
                <div className="flex flex-wrap justify-center items-stretch gap-6 max-w-7xl mx-auto px-4">
                    {generalChairs.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>
            </SectionContainer>

            {/* Conference Chairs */}
            <SectionContainer background="white">
                <SectionHeader
                    title="Conference Chairs"
                />
                <div className="flex flex-wrap justify-center items-stretch gap-6 max-w-7xl mx-auto px-4">
                    {conferenceChairs.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>
            </SectionContainer>

            {/* Conference Co-Chair */}
            <SectionContainer background="light">
                <SectionHeader
                    title="Conference Co-Chair"
                />
                <div className="flex flex-wrap justify-center items-stretch gap-6 max-w-7xl mx-auto px-4">
                    {conferenceCoChairs.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>
            </SectionContainer>

            {/* Organizing Chairs */}
            <SectionContainer background="white">
                <SectionHeader
                    title="Organizing Chairs"
                />
                <div className="flex flex-wrap justify-center items-stretch gap-6 max-w-7xl mx-auto px-4">
                    {organizingChairs.map((member, index) => (
                        <MemberCard key={index} member={member} />
                    ))}
                </div>
            </SectionContainer>
        </>
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
        <div className="flex-1 w-full min-w-[260px] max-w-[280px] bg-white rounded-xl shadow-sm border border-neutral-100 p-6 xl:p-8 text-center hover:shadow-md transition-shadow flex flex-col items-center justify-start">
            {/* Avatar */}
            {member.profileUrl ? (
                <a href={member.profileUrl} target="_blank" rel="noopener noreferrer" className="block relative group flex-shrink-0">
                    <div
                        className="w-24 h-24 xl:w-28 xl:h-28 rounded-2xl mb-4 mx-auto flex items-center justify-center text-2xl xl:text-3xl font-bold text-white shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105"
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
                    className="w-24 h-24 xl:w-28 xl:h-28 rounded-2xl mb-4 mx-auto flex items-center justify-center text-2xl xl:text-3xl font-bold text-white shadow-md overflow-hidden flex-shrink-0"
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
                <a href={member.profileUrl} target="_blank" rel="noopener noreferrer" className="text-xl font-bold text-neutral-900 mb-2 hover:text-primary-600 transition-colors">
                    {member.name}
                </a>
            ) : (
                <h3 className="text-xl font-bold text-neutral-900 mb-2">{member.name}</h3>
            )}

            {/* Designation */}
            <p className="text-xs xl:text-sm font-bold text-primary-700 uppercase tracking-wider mb-3 leading-tight">{member.designation}</p>

            {/* Affiliation */}
            <p className="text-sm xl:text-base text-neutral-600 leading-snug">{member.affiliation}</p>

            {/* Email */}
            {member.email && (
                <a href={`mailto:${member.email}`} className="text-sm text-primary-600 hover:text-primary-800 mt-3 inline-block font-medium">
                    {member.email}
                </a>
            )}
        </div>
    );
}
