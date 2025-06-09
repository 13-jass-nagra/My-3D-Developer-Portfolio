import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase mt-5 pt-5">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper h-[400px] overflow-hidden flex justify-center items-center">
  <img
    src="/images/HR.png"
    alt="HR Analytics Dashboard"
    className="max-h-full w-auto object-contain"
  />
</div>

            <div className="text-content">
              <h2>RetainIQ: Real-Time HR Employee Turnover Analytics Dashboard For Proactive Vigilance 


              </h2>
              <p className="text-white-50 md:text-xl">
               The model's robust predictive capabilities, grounded in advanced data analysis, offer a proactive framework for enhancing employee retention, thereby ensuring long-term organizational resilience and financial efficiency. Effectively pinpointed the critical determinants influencing employee turnover and engineered a highly precise  model. This sophisticated analytical tool is now poised to identify personnel at elevated risk of departure, enabling targeted interventions through tailored motivational incentives.
              </p>
            </div>
          </div>
{/* By strategically implementing these measures, Consultancies can substantially mitigate attrition expenses, fostering a more stable workforce while optimizing resource allocation.  */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/FD3.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2 className="text-center text-white text-xl font-semibold mt-4">
                TrustFlow Sentinel: Fraud Detection App
                </h2>
              <p className="text-center text-white-50 md:text-xl">
                Real-Time Security Solution for Fraud Detection.
              </p>
            </div>
<div className="project" ref={ycDirectoryRef}>
  <div className="image-wrapper bg-[#FFE7EB] flex justify-center items-center p-4 rounded-lg h-[250px]">
    <img
      src="/images/CF3.png"
      alt="YC Directory App"
      className="max-h-full max-w-full object-contain"
    />
  </div>
  <h2 className="text-center text-white text-xl font-semibold mt-4">
    CrowdChain: Blockchain Crowdfunding Platform
  </h2>
  <p className="text-center text-white-50 md:text-xl">
                Uses Smart Contracts to Automate Fundraising.
              </p>
</div>

            {/* <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/crowdfunding.png" alt="YC Directory App" />
              </div>
              <h2>YC Directory - A Startup Showcase App</h2>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;