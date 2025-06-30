import React, { useState } from 'react';
import amazon from "../assets/amazon.jpg";
import Highicon from '../assets/students/high.png';
import Rate from "../assets/rate.svg?react";
import Comp from "../assets/comp.svg?react";
import viyash from "../assets/students/viyash.png";
import syed from "../assets/students/syed.png";
import jithesh from "../assets/students/jithesh.png";
import harine from "../assets/students/harine.png";
import gokul from "../assets/students/gokul.png";
import barath from "../assets/students/barath.png";
import abi from "../assets/students/abi.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import cadence from "../assets/cadence.svg";
import datainsights from "../assets/datainsights.svg";
import deloitte from "../assets/deloitte.svg";
import dome from "../assets/dome.svg";
import joshtech from "../assets/joshtech.svg";
import juspay from "../assets/juspay.svg";
import microfocus from "../assets/microfocus.svg";
import multicoreware from "../assets/multicoreware.svg";
import servicenow from "../assets/servicenow.svg";
import sobha from "../assets/sobha.svg";
import trilogy from "../assets/trilogy.svg";
import aai from "../assets/aai.svg";
import aliens from "../assets/aliens.svg";
import bosch from "../assets/bosch.svg";
import cognizant from "../assets/cognizant.svg";
import infosys from "../assets/infosys.svg";
import tcs from "../assets/tcs.svg";
import presidio from "../assets/presidio.svg";
import intellipaat from "../assets/intellipaat.svg";
import gupshup from "../assets/gupshup.svg";
import wileyedge from "../assets/wileyedge.svg";
import propertypistol from "../assets/propertypistol.svg";
import kaartech from "../assets/kaartech.svg";
import pwc from "../assets/pwc.svg";
import mrcooper from "../assets/mrcooper.svg";
import inmovidu from "../assets/inmovidu.svg";
import accenture from "../assets/accenture.svg";
import wipro from "../assets/wipro.svg";
import jsw from "../assets/jsw.svg";
import mastech from "../assets/mastech.svg";
import propel from "../assets/propel.svg";
import mitsogo from "../assets/mitsogo.svg";
import zoho from "../assets/zoho.svg";
import kpmg from "../assets/kpmg.svg";
import hexaware from "../assets/hexaware.svg";
import unacademy from "../assets/unacademy.svg";
import acmegrade from "../assets/acmegrade.svg";
import ihs from "../assets/ihs.svg";
import tringapps from "../assets/tringapps.svg";
import rice from "../assets/rice.svg";
import maventic from "../assets/maventic.svg";
import viewall from "../assets/viewall.svg";
import cotiviti from "../assets/cotiviti.svg";
import mallow from "../assets/mallow.svg";
import icici from "../assets/icici.svg";
import terv from "../assets/terv.svg";
import cure from "../assets/cure.svg";
import global from "../assets/global.svg";
import elgi from "../assets/elgi.svg";
import infynd from "../assets/infynd.svg";
import joyalukkas from "../assets/joyalukkas.svg";
import esaf  from "../assets/esaf.svg";
import chegg from "../assets/chegg.svg";
import faceprep from "../assets/faceprep.svg";
import milkymist from "../assets/milkymist.svg";
import artech from "../assets/artech.svg";
import apex from "../assets/apex.svg";
import dailee from "../assets/dailee.svg";
import oodu from "../assets/oodu.svg";
import technologies from "../assets/technologies.svg";
import web from "../assets/web.svg";
import ybs from "../assets/ybs.svg";
import finan from "../assets/finan.svg";
import thozhar from "../assets/thozhar.png";
import accserv from "../assets/accserv.png";

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

  const studentPlacements = [
    {
      name: "VIYASH B",
      company: "SOBHA CONSTRUCTION - CORE",
      package: "13.5 LPA",
      image: viyash,
    },
    {
      name: "SYED ANWAR S",
      company: "SOBHA CONSTRUCTION LLC, DUBAI - CORE",
      package: "13.5 LPA",
      image: syed,
    },
    {
      name: "GOKULNATH V",
      company: "SOBHA CONSTRUCTION - CORE",
      package: "13.5 LPA",
      image: gokul,
    },
    {
      name: "JITHESH R JARO",
      company: "EDUCATION - MGMT",
      package: "10 LPA",
      image: jithesh,
    },
    {
      name: "BARATH M",
      company: "LAUNCHED GLOBAL - IT",
      package: "7 LPA",
      image: barath,
    },
    {
      name: "ABISHECK N",
      company: "LAUNCHED - IT",
      package: "8 LPA",
      image: abi,
    },
    {
      name: "HARINIE B",
      company: "INTELLIPAAT - ITES",
      package: "9 LPA",
      image: harine,
    },
  ];

  // Sample data for top recruiters with packages
  const allRecruiters = [
    { name: "DOME", logo: dome, package: "11 LPA" },
    { name: "Cadence", logo: cadence, package: "15 LPA" },
    { name: "Data Insights", logo: datainsights, package: "36 LPA" },
    { name: "Deloitte", logo: deloitte, package: "21 LPA" },
    { name: "JoshTech", logo: joshtech, package: "19 LPA" },
    { name: "Juspay", logo: juspay, package: "27 LPA" },
    { name: "Micro Focus", logo: microfocus, package: "11 LPA" },
    { name: "Multicoreware", logo: multicoreware, package: "11 LPA" },
    { name: "serviceNow", logo: servicenow, package: "45 LPA" },
    { name: "Sobha", logo: sobha, package: "13.5 LPA" },
    { name: "Trilogy", logo: trilogy, package: "36 LPA" },
    { name: "Amazon", logo: amazon, package: "22 LPA" },
    { name: "AAI", logo: aai, package: "8 LPA" },
    { name: "Aliens", logo: aliens, package: "7 LPA" },
    { name: "Bosch", logo: bosch, package: "7 LPA" },
    { name: "Cognizant", logo: cognizant, package: "6.75 LPA" },
    { name: "infosys", logo: infosys, package: "9.5 LPA" },
    { name: "TCS", logo: tcs, package: "9 LPA" },
    { name: "Presidio", logo: presidio, package: "9.5 LPA" },
    { name: "Intellipaat", logo: intellipaat, package: "9 LPA" },
    { name: "Gupshup", logo: gupshup, package: "13.5 LPA" },
    { name: "Wiley Edge", logo: wileyedge, package: "9 LPA" },
    { name: "Property Pistol", logo: propertypistol, package: "8.4 LPA" },
    { name: "KaarTech", logo: kaartech, package: "8 LPA" },
    { name: "PwC", logo: pwc, package: "8 LPA" },
    { name: "Mr Cooper", logo: mrcooper, package: "7.5 LPA" },
    { name: "InMovidu", logo: inmovidu, package: "7 LPA" },
    { name: "Accenture", logo: accenture, package: "6.5 LPA" },
    { name: "Wipro", logo: wipro, package: "6.5 LPA" },
    { name: "JSW", logo: jsw, package: "6.5 LPA" },
    { name: "Mastech", logo: mastech, package: "6.5 LPA" },
    { name: "Propel", logo: propel, package: "6.5 LPA" },
    { name: "Mitsogo", logo: mitsogo, package: "6.5 LPA" },
    { name: "Zoho", logo: zoho, package: "6 LPA" },
    { name: "KPMG", logo: kpmg, package: "6 LPA" },
    { name: "Hexaware", logo: hexaware, package: "6 LPA" },
    { name: "Unacademy", logo: unacademy, package: "6 LPA" },
    { name: "Acmegrade", logo: acmegrade, package: "6 LPA" },
    { name: "IHS", logo: ihs, package: "6 LPA" },
    { name: "Tringapps", logo: tringapps, package: "6 LPA" },
    { name: "Rice", logo: rice, package: "6 LPA" },
    { name: "Maventic", logo: maventic, package: "6 LPA" },
    { name: "Cotiviti", logo: cotiviti, package: "4 LPA" },
    { name: "Mallow", logo: mallow, package: "4.2 LPA" },
    { name: "ICICI", logo: icici, package: "4.5 LPA" },
    { name: "Terv", logo: terv, package: "4.5 LPA" },
    { name: "Cure", logo: cure, package: "4 LPA" },
    { name: "Global", logo: global, package: "4 LPA" },
    { name: "Elgi", logo: elgi, package: "4.5 LPA" },
    { name: "Infynd", logo: infynd, package: "4.3 LPA" },
    { name: "Joyalukkas", logo: joyalukkas, package: "4,9 LPA" },
    { name: "ESAF", logo: esaf, package: "4.3 LPA" },
    { name: "Chegg", logo: chegg, package: "4 LPA" },
    { name: "FacePrep", logo: faceprep, package: "4 LPA" },
    { name: "MilkyMist", logo: milkymist, package: "4.5 LPA" },
    { name: "Artech", logo: artech, package: "4 LPA" },
    { name: "Apex", logo: apex, package: "4 LPA" },
    { name: "Dailee", logo: dailee, package: "4 LPA" },
    { name: "Oodu", logo: oodu, package: "4.2 LPA" },
    { name: "Technologies", logo: technologies, package: "4 LPA" },
    { name: "Web", logo: web, package: "4 LPA" },
    { name: "YBS", logo: ybs, package: "4 LPA" },
    { name: "Finan", logo: finan, package: "4 LPA" },
    { name: "Thozhar", logo: thozhar, package: "4 LPA" },
    { name: "AccServ", logo: accserv, package: "4 LPA" }
  ];

  // Package filter options without "All Packages"
  const packageFilters = [
    { label: "20 LPA & Above", value: "20+" },
    { label: "10-20 LPA", value: "10-20" },
    { label: "5-10 LPA", value: "5-10" },
    { label: "Up to 5 LPA", value: "0-5" },
  ];

  // State for package filter and visible recruiters
  const [selectedPackage, setSelectedPackage] = useState("20+");
  const [showAll, setShowAll] = useState(false);

  // Sort recruiters based on package in descending order
  const sortedRecruiters = [...allRecruiters].sort((a, b) => {
    const packageA = parseFloat(a.package);
    const packageB = parseFloat(b.package);
    return packageB - packageA;
  });

  // Filter recruiters based on package
  const filteredRecruiters = sortedRecruiters.filter(recruiter => {
    const packageValue = parseFloat(recruiter.package);

    switch (selectedPackage) {
      case "20+":
        return packageValue >= 20;
      case "10-20":
        return packageValue >= 10 && packageValue < 20;
      case "5-10":
        return packageValue >= 5 && packageValue < 10;
      case "0-5":
        return packageValue < 5;
      default:
        return true;
    }
  });

  // Determine how many recruiters to show
  const recruitersToShow = showAll ? filteredRecruiters : filteredRecruiters.slice(0, 15);

  return (
    <>
      {/* Top Recruiters Section */}
     <div className="bg-[#111827] py-3 px-0 lg:px-1 xl:px-2">
  <section className="bg-white text-center py-20 px-4 sm:px-6 lg:px-20 m-4">
    <h3 className="text-4xl sm:text-5xl font-bold mb-2">
      <span className="text-black">Top</span> <span className="text-red-600">Recruiters</span>
    </h3>
    <p className="text-gray-600 mb-8 text-base sm:text-lg max-w-3xl mx-auto">
      Our students are recruited by top global companies with industry-leading packages
    </p>

    {/* Package Filter */}
    <div className="flex justify-center mb-8 flex-wrap gap-2">
      {packageFilters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => {
            setSelectedPackage(filter.value);
            setShowAll(false);
          }}
          className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium transition-colors ${
            selectedPackage === filter.value
              ? 'bg-red-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>

    {/* Recruiter Grid - Single responsive grid without manual row grouping */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-full mx-auto">
      {recruitersToShow.map((recruiter, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-[#111827] overflow-hidden hover:shadow-lg transition-shadow"
        >
          {/* Logo and Company Name Section */}
          <div className="px-6 pt-1 text-center">
            <div className="w-20 h-16 flex items-center justify-center mx-auto mb-3">
              <img
                src={recruiter.logo || "/placeholder.svg"}
                alt={`${recruiter.name} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* Package Footer */}
          <div className="bg-[#111827] text-center py-2">
            <p className="text-white font-bold text-lg">{recruiter.package}</p>
          </div>
        </div>
      ))}
    </div>

    {/* View All Button */}
    {filteredRecruiters.length > 15 && (
      <div className="mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-red-600 border border-red-600 cursor-pointer font-medium py-2 px-6 rounded-full flex items-center justify-center mx-auto"
        >
          <img
            src={viewall}
            alt={showAll ? "View less" : "View all"}
            className="w-5 h-5 mr-2 inline-block"
          />
          <span>{showAll ? "View Less Companies" : "View All Companies"}</span>
        </button>
      </div>
    )}
  </section>
</div>

      <section className="bg-gray-900 pb-10 pt-4 px-4 sm:px-6 lg:px-20">
        <div className="mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-white text-4xl sm:text-5xl font-bold mb-4">
              Placement <span className="text-red-400">Excellence</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto">
              Our students are recruited by top global companies with
              industry-leading packages
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
            {[
              {
                icon: <img src={Highicon} className="h-16 w-16" alt="High package icon" />,
                title: "21 LPA",
                subtitle: "Highest Package",
                desc: "Achieved by our Computer Science students in top tech companies",
              },
              {
                icon: <Rate className="h-8 w-8 text-yellow-500" />,
                title: "96.5%",
                subtitle: "Placement Rate",
                desc: "Industry-leading placement rate across all branches",
              },
              {
                icon: <Comp className="h-8 w-8 text-yellow-500" />,
                title: "454",
                subtitle: "Company Partners",
                desc: "Global tech giants and startups visit our college",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-gray-800 rounded-xl border border-gray-700 p-6 sm:p-14 text-center"
              >
                <div className="bg-red-500 rounded-full w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl sm:text-2xl">
                    {stat.icon}
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.title}
                </div>
                <div className="text-gray-300 font-semibold mb-2">
                  {stat.subtitle}
                </div>
                <div className="text-gray-400 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Testimonials */}
      <section className="bg-gray-900 px-4 sm:px-6 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-4">
            Student <span className="text-red-400">Testimonials</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
            5-level activity center with world-class facilities for sports,
            arts, entertainment, and personal growth
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studentTestimonials.map((student, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 sm:p-8 w-full min-h-[18rem] flex flex-col justify-between border border-gray-700"
            >
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-red-500 rounded-full w-14 h-14 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">
                      {student.initials}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{student.name}</h4>
                    <p className="text-gray-400 text-md">{student.course}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg mb-4 mt-10 italic">
                  "{student.testimonial}"
                </p>
              </div>
              <div className="flex justify-between items-center pt-4">
                <span className="text-red-400 font-semibold">
                  {student.package}
                </span>
                <span className="text-gray-400 text-md">{student.company}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PlacementSection;