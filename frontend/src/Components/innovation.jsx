
"use client"

import { useRef, useState, useEffect } from "react"

import ARVR from "../assets/arvrlab.jpg"
import botlab from "../assets/botlab.jpg"
import ibiliquidstudio from "../assets/ibiliquidstudio.jpg"
import ihub from "../assets/ihub.jpg"
import pistonfactory from "../assets/pistonfactory.jpeg"
import productdesign from "../assets/productdesign.jpg"
import Innovate from "../assets/Div [w-16]inovate.png"

const innovationCards = [
  {
    title: "SNS V-ALIENZ PRODUCT DESIGN STUDIO",
    image: productdesign,
    description:
      "The joint venture V- Alienz SNS Product Design Studio developed by Centre for Creativity and Department of Mechanical Engineering jointly inaugurated a novel initiative 'Company on Campus' to foster new product development.",
    tags: ["Product Design", "Creativity", "Innovation"],
  },
  {
    title: "BOT LAB",
    image: botlab,
    description:
      "'Bot Lab', in association Automation Anywhere University established Coimbatore's first Centre-of-Excellence in the field of Robotics Process Automation (BOT Lab), which provided our students with level 2 training come placement opportunities.",
    tags: ["Robotics", "Automation", "RPA"],
  },
  {
    title: "PISTON FACTORY",
    image: pistonfactory,
    description:
      "'Piston Factory', a lounge serves purpose for the students who are involved in real time project works as well as fabricating vehicles for attending various competitions conducted in various parts of the country.",
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
      "The 'iTech Labs' are an inter-disciplinary research space dedicated for ideating and developing innovative solutions for pressing problems. The iHub team supports incubates with technological access to those who are passionate towards problem solving and commercializing their ideas. The iHub team works incessantly under the five dedicated innovation labs, viz., AR/VR, Internet of Things, Artificial Intelligence, Machine Learning, Robotics and Automation and Additive manufacturing.",
    tags: ["AR/VR", "AI/ML", "IoT"],
  },
  {
    title: "SNS-TI INNOVATION LAB",
    image: ihub,
    description:
      "SNS-TI innovation lab is an initiative by Steps Knowledge Services, Coimbatore collaborated with Texas Instruments, Bangalore. It is a Design House catering to design, development, production and transfer of technology for new Products Development and Engineering of Special Purpose Machines (SPM), End of Line Testers, Quality Inspectors and Functional Testers for various industrial verticals.",
    tags: ["Product Development", "Engineering", "SPM"],
  },
]

const InnovationEcosystem = () => {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [activeCard, setActiveCard] = useState(0)

  // Update active card based on scroll position
  const updateActiveCard = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = 320 // Approximate card width including gap
      const scrollPosition = container.scrollLeft
      const newActiveCard = Math.round(scrollPosition / cardWidth)
      setActiveCard(Math.min(newActiveCard, innovationCards.length - 1))
    }
  }

  // Check scroll position to show/hide navigation
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)

      // Update active card
      updateActiveCard()
    }
  }

  // Scroll to specific card
  const scrollToCard = (cardIndex) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = 320 // Approximate card width including gap
      const scrollPosition = cardIndex * cardWidth
      container.scrollTo({ left: scrollPosition, behavior: "smooth" })
    }
  }

  useEffect(() => {
    checkScrollPosition()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollPosition)
      return () => container.removeEventListener("scroll", checkScrollPosition)
    }
  }, [])

  // Mouse drag functionality for desktop
  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft)
    setScrollLeft(scrollContainerRef.current.scrollLeft)
    scrollContainerRef.current.style.cursor = "grabbing"
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollContainerRef.current.offsetLeft
    const walk = (x - startX) * 2 // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk
  }

  const handleMouseUp = () => {
    setIsDragging(false)
    scrollContainerRef.current.style.cursor = "grab"
  }

  const handleMouseLeave = () => {
    setIsDragging(false)
    scrollContainerRef.current.style.cursor = "grab"
  }

  // Scroll navigation functions
  const scrollToDirection = (direction) => {
    const container = scrollContainerRef.current
    const scrollAmount = 400 // Adjust scroll distance

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section className="bg-gray-800 py-10 px-4 sm:px-6 lg:px-20 relative">
      <div className="max-w-full mx-auto lg:mx-20">
        <div className="text-center mb-6">
          <h2 className="text-white text-4xl sm:text-5xl font-bold mb-4">
            Innovation <span className="text-red-400">Ecosystem</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base">
            Experience cutting-edge technology labs where tomorrow's innovators build solutions for real-world
            challenges
          </p>
        </div>

        {/* Scrollable cards and fixed gradients */}
        <div className="relative py-2">
          {/* Navigation buttons for desktop */}
          <div className="hidden lg:block">
            {canScrollLeft && (
              <button
                onClick={() => scrollToDirection("left")}
                className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Scroll left"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}

            {canScrollRight && (
              <button
                onClick={() => scrollToDirection("right")}
                className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Scroll right"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>

          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide cursor-grab select-none"
            style={{
              scrollBehavior: "smooth",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={(e) => {
              setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft)
              setScrollLeft(scrollContainerRef.current.scrollLeft)
            }}
          >
            <div className="flex gap-4 sm:gap-6 lg:gap-8 min-w-max pr-8 sm:pr-12 lg:pr-16">
              {innovationCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 
                    w-[290px] sm:w-[320px] lg:min-w-[390px] lg:max-w-sm 
                    flex-shrink-0 shadow-lg flex flex-col justify-between 
                    h-[380px] sm:h-[410px] lg:h-[460px] 
                    scroll-snap-align-start border border-gray-700"
                >
                  <div className="p-4 sm:p-5 lg:p-6 flex flex-col flex-1">
                    <div className="mb-3 sm:mb-4">
                      <div className="bg-red-500 rounded-full w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 flex items-center justify-center">
                        <img src={Innovate || "/placeholder.svg"} alt="" className="w-full h-full" />
                      </div>
                    </div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-2 sm:mb-3 leading-tight">
                      {card.title}
                    </h3>
                    <div
                      className="relative flex-1 mb-3 sm:mb-4 overflow-y-auto hide-vertical-scrollbar"
                      style={{ maxHeight: "115px" }}
                    >
                      <p className="text-xs sm:text-sm leading-relaxed text-justify">{card.description}</p>
                    </div>
                    <div className="flex gap-1 sm:gap-2 mt-auto overflow-x-auto hide-vertical-scrollbar">
                      {card.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-red-500 text-white px-2 sm:px-3 py-1 rounded-full text-[10px] whitespace-nowrap flex-shrink-0  transition-all duration-200 hover:bg-red-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="h-32 sm:h-40 lg:h-48 bg-white p-3 sm:p-4 pt-0 flex items-center justify-center">
                    <img
                      src={card.image || "/placeholder.svg"}
                      alt={card.title}
                      className="w-full h-[90%] sm:h-[90%] object-cover rounded-lg -mt-8 sm:-mt-10"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Responsive gradients */}
          {/* Right gradient */}
          {/* <div className="pointer-events-none absolute top-0 right-0 h-full w-12 sm:w-16 lg:w-24 bg-gradient-to-l from-gray-800/95 via-gray-800/60 to-transparent z-10" /> */}

          {/* Left gradient */}
          {/* <div className="pointer-events-none absolute top-0 left-0 h-full w-12 sm:w-16 lg:w-24 bg-gradient-to-r from-gray-800/95 via-gray-800/60 to-transparent z-10" /> */}

          {/* Bottom shadow */}
          {/* <div className="pointer-events-none absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-gray-900/60 to-transparent z-10" /> */}
        </div>

        {/* Mobile scroll indicator */}
        <div className="flex justify-center mt-6 lg:hidden">
          <div className="flex space-x-2">
            {innovationCards.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeCard ? "bg-red-400 w-6" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                aria-label={`Go to ${innovationCards[idx].title}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hide scrollbars globally with mobile optimization */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { 
          display: none; 
        }
        .scrollbar-hide { 
          -ms-overflow-style: none; 
          scrollbar-width: none;
          scroll-behavior: smooth;
        }
        .scrollbar-hide:active {
          cursor: grabbing;
        }
        .hide-vertical-scrollbar::-webkit-scrollbar { 
          display: none; 
        }
        .hide-vertical-scrollbar { 
          -ms-overflow-style: none; 
          scrollbar-width: none; 
        }
        
        /* Mobile touch scrolling optimization */
        @media (max-width: 1023px) {
          .overflow-x-auto {
            -webkit-overflow-scrolling: touch;
            scroll-snap-type: x mandatory;
          }
        }
      `}</style>
    </section>
  )
}

export default InnovationEcosystem
