
"use client"

import { useRef, useState, useEffect } from "react"

// Import statements (you'll need to add these images to your project)
import connection from "../assets/connection.webp"
import cricket from "../assets/cricket.webp"
import dance from "../assets/dance.webp"
import gaming from "../assets/gaming.webp"
import gym from "../assets/gym.webp"
import music from "../assets/music.webp"
import theatre from "../assets/theatre.webp"
import swimming from "../assets/swimmingpool.png"
import gamingicon from "../assets/gamingicon.svg"
import gymicon from "../assets/gymicon.svg"
import musicicon from "../assets/musicicon.svg"
import theatreicon from "../assets/theatreicon.svg"
import swimmingicon from "../assets/swimmingicon.svg"
import connectionicon from "../assets/connectionicon.svg"
import cricketicon from "../assets/cricketicon.svg"
import danceicon from "../assets/danceicon.svg"

const facilities = [
  {
    title: "SWIMMING POOL",
    icon: <img src={swimmingicon || "/placeholder.svg"} alt="Swimming Icon" className="w-10 h-full" />,
    image: swimming,
    description:
      "Dive into the clear waters of the Majestic Swimming Pool. Relax your body and rejuvenate your mind through joyful swimming.",
  },
  {
    title: "INDOOR CRICKET",
    icon: <img src={cricketicon || "/placeholder.svg"} alt="Indoor Cricket Icon" className="w-10 h-full" />,
    image: cricket,
    description:
      "Make the most of your leisure time at the All-Weather Indoor Pitch. Spark your inner sports spirit and give your best shot.",
  },
  {
    title: "GYMNASIUM",
    icon: <img src={gymicon || "/placeholder.svg"} alt="Gym Icon" className="w-10 h-full" />,
    image: gym,
    description:
      "Hit the multipurpose gym, train hard, and burn calories. Shape up with confidence — No Pain, No Gain.",
  },
  {
    title: "GAMING CENTER",
    icon: <img src={gamingicon || "/placeholder.svg"} alt="Gaming Icon" className="w-10 h-full" />,
    image: gaming,
    description:
      "Enjoy a wide range of innovative games in our Gaming Center. Be an enthusiastic gamer — don't just pause, start gaming.",
  },
  {
    title: "MINI-THEATRE",
    icon: <img src={theatreicon || "/placeholder.svg"} alt="Theatre Icon" className="w-10 h-full" />,
    image: theatre,
    description:
      "Watch movies or cultural shows in the plush Mini-Theatre. Relax, entertain yourself, and create lasting memories.",
  },
  {
    title: "MUSIC & RECORDING STUDIO",
    icon: <img src={musicicon || "/placeholder.svg"} alt="Music Icon" className="w-10 h-full" />,
    image: music,
    description:
      "Feel the beat and fuel your soul at the Music Studio. Record, connect, and unleash your musical talent.",
  },
  {
    title: "DANCE STUDIO & ART ROOM",
    icon: <img src={danceicon || "/placeholder.svg"} alt="Dance Icon" className="w-10 h-full" />,
    image: dance,
    description:
      "Dance to your rhythm and express your creativity. Explore the world of art and let your imagination soar.",
  },
  {
    title: "CONNECTION LOUNGE",
    icon: <img src={connectionicon || "/placeholder.svg"} alt="Connection Icon" className="w-10 h-full" />,
    image: connection,
    description: "Take a breath and relax in the Connection Lounge. Unwind fully and recharge during your stay.",
  },
]

const SpineExperience = () => {
  const scrollContainerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [activeCard, setActiveCard] = useState(0)

  // Add this function after the existing functions
  const updateActiveCard = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current
      const cardWidth = 320 // Approximate card width including gap
      const scrollPosition = container.scrollLeft
      const newActiveCard = Math.round(scrollPosition / cardWidth)
      setActiveCard(Math.min(newActiveCard, facilities.length - 1))
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

  // Add function to scroll to specific card
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
    <section className="bg-gray-800 py-10 px-4 sm:px-6 relative">
      <div className="max-w-full mx-4 sm:mx-8 lg:mx-20">
        <div className="text-center mb-6">
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            SPINE <span className="text-red-400">Experience</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base">
            5-level activity center with world-class facilities for sports, arts, entertainment, and personal growth
          </p>
        </div>

        {/* Scrollable cards container */}
        <div className="relative py-2">
          {/* Navigation buttons for desktop */}
          <div className="hidden lg:block">
            {canScrollLeft && (
              <button
                onClick={() => scrollToDirection("left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
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
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Scroll right"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>

          {/* Scrollable container */}
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide cursor-grab select-none"
            style={{
              scrollBehavior: "smooth",
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch", // Better iOS scrolling
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
            <div className="flex gap-4 sm:gap-6 lg:gap-8 min-w-max px-4 sm:px-8 lg:px-16">
              {facilities.map((facility, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 w-[280px] sm:w-[320px] lg:w-[370px] flex-shrink-0 shadow-lg flex flex-col justify-between h-[350px] sm:h-[370px] border border-gray-700"
                  style={{ scrollSnapAlign: "start" }}
                >
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    <div className="flex items-center mb-3">
                      <div className="rounded-full w-10 h-10 flex items-center justify-center mr-3">
                        <span className="text-white text-lg font-bold">{facility.icon}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold leading-tight">{facility.title}</h3>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">{facility.description}</p>
                  </div>
                  <div className="bg-white p-3 sm:p-4 flex items-center justify-center">
                    <img
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      className="w-full h-[90%] sm:h-[90%] object-cover rounded-lg -mt-8 sm:-mt-10"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fixed right-side gradient */}
          {/* <div className="pointer-events-none absolute top-0 right-0 h-full w-12 sm:w-16 lg:w-24 bg-gradient-to-l from-gray-800/95 via-gray-800/60 to-transparent z-10" /> */}

          {/* Fixed left-side gradient */}
          {/* <div className="pointer-events-none absolute top-0 left-0 h-full w-12 sm:w-16 lg:w-24 bg-gradient-to-r from-gray-800/95 via-gray-800/60 to-transparent z-10" /> */}

          {/* Bottom shadow */}
          {/* <div className="pointer-events-none absolute bottom-0 left-0 w-full h-4 bg-gradient-to-t from-gray-900/60 to-transparent z-10" /> */}
        </div>

        {/* Mobile scroll indicator */}
        <div className="flex justify-center mt-6 lg:hidden">
          <div className="flex space-x-2">
            {facilities.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToCard(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeCard ? "bg-red-400 w-6" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                aria-label={`Go to ${facilities[idx].title}`}
              />
            ))}
          </div>

        </div>
      </div>

      {/* Enhanced scrollbar hiding */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { 
          display: none; 
        }
        .scrollbar-hide { 
          -ms-overflow-style: none; 
          scrollbar-width: none; 
        }
        .scrollbar-hide:active {
          cursor: grabbing;
        }
      `}</style>
    </section>
  )
}

export default SpineExperience
