import SectionContainer from '../components/ui/SectionContainer';
import HeroSection from '../components/home/HeroSection';
import Button from '../components/ui/Button';
import { ROUTES } from '../constants/routes';

export default function PaperSubmissionPage() {
    return (
        <div className="pt-16 pb-16">
            <HeroSection
                title="Paper Submission"
                subtitle="How to Submit paper in ICGST-2026"
                isHomePage={false}
            />
            <SectionContainer background="white">
                <div className="max-w-4xl mx-auto px-4 prose prose-slate prose-blue lg:prose-lg mt-8">
                    <p>
                        Prospective authors are encouraged to submit full papers in PDF format not exceeding 6 pages in double-column includes all figures, tables, and references. The paper must follow the standard IEEE template. Papers not compliant with the IEEE template including appropriate referencing or exceeding the page limit will be returned without review. Only original papers that have not been published or submitted for publication elsewhere will be considered. The paper must clearly indicate the research area, main results, and contributions. All accepted and presented papers will undergo submission for possible inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements.
                    </p>

                    <p>
                        Submission of a scientific paper is considered a commitment that, upon acceptance, authors will submit their camera-ready version for inclusion in the formal proceedings and will present the paper at the conference. Each accepted contribution must have at least one paid registration by the time the camera-ready paper is submitted for inclusion in the proceedings. ICGST reserves the right to remove from IEEE Xplore papers and posters not presented at the symposium.
                    </p>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg my-8">
                        <h3 className="text-xl font-bold text-blue-900 mt-0 mb-4">Submission Portal</h3>
                        <p className="text-blue-800 mb-6">
                            For you to be able to access the submission system as an author, reviewer, program committee member, session chair, etc., you need to create an account on Microsoft CMT using the Submit button given below:
                        </p>
                        <div className="flex items-center gap-4 flex-wrap">
                            <Button href="https://cmt3.research.microsoft.com/ICGST2026/Submission/Index" variant="primary" external>
                                Submit a Paper
                            </Button>
                            <Button to={ROUTES.TRACKS} variant="outline">
                                View Call for Papers
                            </Button>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6 my-8">
                        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-slate-900 mt-0 mb-2">IEEE Templates</h3>
                            <p className="text-slate-600 text-sm mb-4">
                                We prefer the submission in LaTeX format. Kindly prepare your paper in LaTeX format for the proper IEEE format.
                            </p>
                            <div className="flex gap-3">
                                <a href="https://template-selector.ieee.org/secure/templateSelector/publicationType" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4">
                                    LaTeX Template
                                </a>
                                <span className="text-slate-300">|</span>
                                <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-blue-600 hover:text-blue-800 underline decoration-2 underline-offset-4">
                                    .DOC Template
                                </a>
                            </div>
                        </div>
                        <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                            <h3 className="text-lg font-bold text-slate-900 mt-0 mb-2">Important Deadlines</h3>
                            <ul className="text-slate-600 text-sm space-y-2 m-0 p-0 list-none">
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                    <span>Paper Submission: <strong className="text-slate-900">May 15, 2026</strong></span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                    <span>Acceptance Notification: <strong className="text-slate-900">July 15, 2026</strong></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="px-4 py-2 bg-slate-100 rounded-lg inline-block text-xl font-bold text-slate-900 mb-4 inline-block">Review Process</h3>
                    <p>
                        The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support. Accepted papers will be assigned to a regular technical session. All papers will go through a rigorous, single-blind reviewing process.
                    </p>
                    <p>
                        At least one author of an accepted paper will have to register at the conference in order to submit the final version. All accepted papers presented at the conference will be published in the conference proceeding and submitted to IEEE Xplore for publication subject to their norms. They should satisfy the requirements given in the publication policy.
                    </p>
                    <p>
                        The <strong>E-Copyright form</strong> must be submitted by the author or presenter at the time of registration.
                    </p>

                    <h3 className="px-4 py-2 bg-slate-100 rounded-lg inline-block text-xl font-bold text-slate-900 mt-8 mb-4 inline-block">IEEE Policies</h3>
                    <p>
                        IEEE reserves the right to exclude a paper from distribution after the conference (e.g., by not including it in IEEE Xplore) if the paper is not presented at the conference. Papers are reviewed on the basis that they do not contain plagiarized material and have not been submitted to any other conference at the same time (double submission). These matters are taken very seriously and IEEE will take action against any author who has engaged in either practice.
                    </p>

                    <div className="mt-12 text-center p-6 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-slate-600 mb-4">
                            For any clarifications regarding the paper submission, please contact us.
                        </p>
                        <Button to={ROUTES.CONTACT} variant="outline">
                            Contact Support
                        </Button>
                    </div>
                </div>
            </SectionContainer>
        </div>
    );
}
