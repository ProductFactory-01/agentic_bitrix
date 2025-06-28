import amazon from "../assets/amazon.jpg";
import Infosys from "../assets/Infosys.svg";
import wipro from "../assets/wipro.svg";
import servicenow from "../assets/servicenow.png";
import intellipaat from "../assets/intellipaat.svg";
import cognizant from "../assets/cognizant.png";
import deloitte from "../assets/deloitte.svg";
import accenture from "../assets/accenture.svg";
import ey from "../assets/ey.svg";
import capgemini from "../assets/capgemini.svg";
import pwc from "../assets/pwc.svg";
import zoho from "../assets/zoho.png";
import tcs from "../assets/tcs.svg";
import kaartech from "../assets/kaartech.svg";
import zifo from "../assets/zifo.svg"; // Ensure this path is correct
// import all your logos properly

const recruiters = [
  { name: "Amazon", logo: amazon, ctc: "13.5LPA", h: "h-[50%]", w: "w-[60%]", m: "m-5" },
  {
    name: "ServiceNow",
    logo: servicenow,
    ctc: "13.5LPA",
    h: "h-[50%]",
    w: "w-[60%]",
  },
  {
    name: "Cognizant",
    logo: cognizant,
    ctc: "13.5LPA",
    h: "h-[50%]",
    w: "w-[60%]",
  },
  {
    name: "Deloitte",
    logo: deloitte,
    ctc: "13.5LPA",
    h: "h-[50%]",
    w: "w-[60%]",
  },
  {
    name: "Infosys",
    logo: Infosys,
    ctc: "13.5LPA",
    h: "h-[50%]",
    w: "w-[60%]",
  },
  { name: "Wipro", logo: wipro, ctc: "13.5LPA", h: "h-[70%]", w: "w-[40%]" },
  {
    name: "IntelliPaat",
    logo: intellipaat,
    ctc: "13.5LPA",
    h: "h-[50%]",
    w: "w-[60%]",
  },
  { name: "TCS", logo: tcs, ctc: "13.5LPA", h: "h-[50%]", w: "w-[60%]" },
  { name: "Zoho", logo: zoho, ctc: "13.5LPA", h: "h-[50%]", w: "w-[60%]" },
  {
    name: "Accenture",
    logo: accenture,
    ctc: "13.5LPA",
    h: "h-[50%]",
    w: "w-[60%]",
  },
  {
    name: "KaarTech",
    logo: kaartech,
    ctc: "13.5LPA",
    h: "h-[50%]",
    w: "w-[60%]",
  },
  {
    name: "EY",
    logo: ey,
    ctc: "13.5LPA",
    h: "h-[50%]",
    w: "w-[30%]",
  },
  {
    name: "Capgemini",
    logo: capgemini,
    ctc: "13.5LPA",
    h: "h-[50%]",
    w: "w-[70%]",
  },
  { name: "PwC", logo: pwc, ctc: "13.5LPA", h: "h-[50%]", w: "w-[40%]" },
  { name: "ZIFO", logo: zifo, ctc: "13.5LPA", h: "h-[50%]", w: "w-[40%]" },
];

const lpaRanges = ["Upto 4 LPA", "4 - 5 LPA", "5 - 10 LPA", "10 - 20 LPA"];

const Recruiters = () => {
  return (
    <section className="bg-white text-center py-20 px-4 sm:px-6 lg:px-20">
      <h3 className="text-4xl sm:text-5xl font-bold mb-6">
        <span className="text-black">Top</span>{" "}
        <span className="text-red-600">Recruiters</span>
      </h3>
      <p className="text-gray-600 mb-12 text-base sm:text-lg max-w-3xl mx-auto">
        Our students are recruited by top global companies with industry-leading
        packages
      </p>

      <div className="mb-12">
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {lpaRanges.map((range, i) => (
            <button
              key={i}
              className="px-5 py-2 rounded-full bg-red-600 text-white font-medium shadow hover:bg-red-700 transition-colors"
            >
              {range}
            </button>
          ))}
        </div>

        {/* Recruiter Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {recruiters.map((company, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-between shadow-sm hover:shadow-md transition-all h-[180px]"
            >
              <img
                src={company.logo}
                alt={company.name}
                className={`${company.h} ${company.w} object-contain max-h-full mb-3 ${company.m}`}
              />

              <span
                className={`text-md bg-gray-900 text-white px-5 py-1 rounded-md`}
              >
                {company.ctc}
              </span>
            </div>
          ))}
        </div>
      </div>

      <button className="mt-10 px-6 py-3 border border-red-500 text-red-600 rounded-full hover:bg-red-600 hover:text-white transition-all flex items-center gap-2 mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        View All Companies
      </button>
    </section>
  );
};

export default Recruiters;
