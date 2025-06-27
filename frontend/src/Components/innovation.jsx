import ARVR from "../assets/arvrlab.jpg";
import botlab from "../assets/botlab.jpg";
import ibiliquidstudio from "../assets/ibiliquidstudio.jpg";
import ihub from "../assets/ihub.jpg";
import pistonfactory from "../assets/pistonfactory.jpeg";
import productdesign from "../assets/productdesign.jpg";

const innovationCards = [
  {
    title: "SNS V-ALIENZ PRODUCT DESIGN STUDIO",
    image: productdesign,
    description:
      "The joint venture V- Alienz SNS Product Design Studio developed by Centre for Creativity and Department of Mechanical Engineering jointly inaugurated a novel initiative “Company on Campus” to foster new product development.",
    tags: ["Product Design", "Creativity", "Innovation"],
  },
  {
    title: "BOT LAB",
    image: botlab,
    description:
      "“Bot Lab”, in association Automation Anywhere University established Coimbatore’s first Centre-of-Excellence in the field of Robotics Process Automation (BOT Lab), which provided our students with level 2 training come placement opportunities.",
    tags: ["Robotics", "Automation", "RPA"],
  },
  {
    title: "PISTON FACTORY",
    image: pistonfactory,
    description:
      '"Piston Factory", a lounge serves purpose for the students who are involved in real time project works as well as fabricating vehicles for attending various competitions conducted in various parts of the country.',
    tags: ["Fabrication", "Vehicles", "Competitions"],
  },
  {
    title: "SNS IBI LIQUID STUDIO",
    image: ibiliquidstudio,
    description:
      "As an outcome of an Ideathon – Hackathon event winning innovative projects are set to display as a prototype and product in our SNS IBI LIQUID STUDIO. It is evolving as a prime space and the budding engineers deem it a privilege if their projects get shortlisted for display.",
    tags: ["Hackathon", "Prototyping", "Showcase"],
  },
  {
    title: "I-TECH LABS (AR /VR, AI, DS, AM)",
    image: ARVR,
    description:
      "The ‘iTech Labs’ are an inter-disciplinary research space dedicated for ideating and developing innovative solutions for pressing problems. The iHub team supports incubates with technological access to those who are passionate towards problem solving and commercializing their ideas. The iHub team works incessantly under the five dedicated innovation labs, viz., AR/VR, Internet of Things, Artificial Intelligence, Machine Learning, Robotics and Automation and Additive manufacturing.",
    tags: ["AR/VR", "AI/ML", "IoT"],
  },
  {
    title: "SNS-TI INNOVATION LAB",
    image: ihub,
    description:
      "SNS-TI innovation lab is an initiative by Steps Knowledge Services, Coimbatore collaborated with Texas Instruments, Bangalore. It is a Design House catering to design, development, production and transfer of technology for new Products Development and Engineering of Special Purpose Machines (SPM), End of Line Testers, Quality Inspectors and Functional Testers for various industrial verticals.",
    tags: ["Product Development", "Engineering", "SPM"],
  },
];

const InnovationEcosystem = () => {
  return (
    <section className="bg-gray-800 py-20 px-6 relative">
      <div className="max-w-full mx-20">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-4">
            Innovation <span className="text-red-400">Ecosystem</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Experience cutting-edge technology labs where tomorrow's innovators
            build solutions for real-world challenges
          </p>
        </div>

        {/* Scrollable cards and fixed gradients */}
        <div className="relative py-2">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 min-w-[900px] pr-16">
              {innovationCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 min-w-[370px] max-w-sm flex-shrink-0 shadow-lg flex flex-col justify-between h-[430px] scroll-snap-align-start border border-gray-700"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-white text-lg font-bold mb-3">
                      {card.title}
                    </h3>
                    <div
                      className="relative flex-1 mb-4 overflow-y-auto hide-vertical-scrollbar"
                      style={{ maxHeight: "100px" }}
                    >
                      <p className="text-gray-300 text-sm">
                        {card.description}
                      </p>
                    </div>
                    <div className="flex gap-2 mt-auto overflow-x-auto hide-vertical-scrollbar whitespace-nowrap">
                      {card.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-red-500 text-white px-3 py-1 rounded-full text-xs whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="h-48 bg-gray-700">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fixed right-side gradient */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-gray-800/95 via-gray-800/60 to-transparent z-10" />

          {/* Optional: Bottom shadow */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-gray-900/60 to-transparent z-10" />
        </div>
      </div>

      {/* Hide scrollbars globally */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .hide-vertical-scrollbar::-webkit-scrollbar { display: none; }
        .hide-vertical-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default InnovationEcosystem;
