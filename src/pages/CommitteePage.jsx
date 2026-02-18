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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
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
                <div className="grid grid-cols-1 gap-6 max-w-md mx-auto">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
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
        <div className="bg-white rounded-xl shadow-sm border border-neutral-100 p-6 text-center hover:shadow-md transition-shadow">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-white shadow-lg"
                style={{ backgroundColor: '#003366' }}>
                {member.image ? (
                    <img src={member.image} alt={member.name} className="w-full h-full rounded-full object-cover" />
                ) : (
                    initials
                )}
            </div>

            {/* Name */}
            <h3 className="text-base font-bold text-neutral-900 mb-1">{member.name}</h3>

            {/* Designation */}
            <p className="text-xs font-semibold text-primary-700 uppercase tracking-wider mb-2">{member.designation}</p>

            {/* Affiliation */}
            <p className="text-sm text-neutral-600">{member.affiliation}</p>

            {/* Email */}
            {member.email && (
                <a href={`mailto:${member.email}`} className="text-xs text-primary-600 hover:text-primary-800 mt-2 inline-block">
                    {member.email}
                </a>
            )}
        </div>
    );
}
