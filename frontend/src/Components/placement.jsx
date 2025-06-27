import amazon from "../assets/amazon.jpg";
import google from "../assets/google.svg";
import ibm from "../assets/IBM.png";
import microsoft from "../assets/microsoft.png";
import Infosys from "../assets/Infosys.svg";

const PlacementSection = () => {
  const topRecruiters = [
    "Google",
    "Microsoft",
    "Amazon",
    "Infosys",
    "TCS",
    "Wipro",
  ];

  const studentTestimonials = [
    {
      name: "Sakilan R",
      course: "Computer Science",
      company: "Paypal Technologies",
      package: "18 LPA",
      testimonial:
        "SNSCT's design thinking approach and AI labs equipped me perfectly for my role in a leading fintech company.",
      initials: "SR",
    },
    {
      name: "Vimal S N",
      course: "Information Technology",
      company: "Deloitte",
      package: "15 LPA",
      testimonial:
        "The industry exposure and practical learning at SNSCT made my transition to the corporate world seamless.",
      initials: "VS",
    },
    {
      name: "Dhanushkan S",
      course: "Electronics & Communication",
      company: "Accenture",
      package: "12 LPA",
      testimonial:
        "SPINE facilities and project-based learning gave me the confidence to excel in technical interviews.",
      initials: "DS",
    },
  ];

  return (
    <>
      <section className="bg-gray-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white text-4xl font-bold mb-4">
              Placement <span className="text-red-400">Excellence</span>
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our students are recruited by top global companies with
              industry-leading packages
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <div className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <div className="text-4xl font-bold text-white mb-2">21 LPA</div>
              <div className="text-gray-300 font-semibold mb-2">
                Highest Package
              </div>
              <div className="text-gray-400 text-sm">
                Achieved by our Computer Science students in top tech companies
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <div className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📊</span>
              </div>
              <div className="text-4xl font-bold text-white mb-2">96.5%</div>
              <div className="text-gray-300 font-semibold mb-2">
                Placement Rate
              </div>
              <div className="text-gray-400 text-sm">
                Industry-leading placement rate across all branches
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <div className="bg-red-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏢</span>
              </div>
              <div className="text-4xl font-bold text-white mb-2">454</div>
              <div className="text-gray-300 font-semibold mb-2">
                Company Partners
              </div>
              <div className="text-gray-400 text-sm">
                Global tech giants and startups visit our college
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* Top Recruiters */}
        <div className="bg-white text-center my-26">
          <h3 className="text-6xl font-semibold mb-2">
            <span className="text-black">Top</span>{" "}
            <span className="text-red-600">Recruiters</span>
          </h3>
          <p className="text-gray-600 mb-24 text-lg">
            Our students are recruited by top global companies with
            industry-leading packages
          </p>
          <div className="relative my-16">
            {/* Gradient overlay - Left (blue to transparent) */}
            <div className="absolute left-25 top-0 h-full w-28 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

            {/* Gradient overlay - Right (transparent to blue) */}
            <div className="absolute right-20 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <div className="flex justify-center items-center flex-wrap gap-24 relative z-0">
              <img
                src={amazon}
                alt="Amazon"
                className="h-[100px] object-contain"
              />
              <div className="flex items-center gap-44">
                <img
                  src={google}
                  alt="Google"
                  className="h-[100px] object-contain"
                />
                <img src={ibm} alt="IBM" className="h-[100px] object-contain" />
                <img
                  src={microsoft}
                  alt="Microsoft"
                  className="h-[100px] object-contain"
                />
              </div>
              <img
                src={Infosys}
                alt="Infosys"
                className="h-[100px] object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-900 py-20 px-6">
        {/* Student Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studentTestimonials.map((student, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="bg-red-500 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="text-white font-bold">
                    {student.initials}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">{student.name}</h4>
                  <p className="text-gray-400 text-sm">{student.course}</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4 italic">
                "{student.testimonial}"
              </p>
              <div className="flex justify-between items-center">
                <span className="text-red-400 font-semibold">
                  {student.package}
                </span>
                <span className="text-gray-400 text-sm">{student.company}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PlacementSection;
