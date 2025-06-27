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
    icon: "🏊",
    image: swimming,
    description:
      "Dive into the clear waters of the Majestic Swimming Pool. Relax your body and rejuvenate your mind through joyful swimming.",
  },
  {
    title: "INDOOR CRICKET",
    icon: "🏏",
    image: cricket,
    description:
      "Make the most of your leisure time at the All-Weather Indoor Pitch. Spark your inner sports spirit and give your best shot.",
  },
  {
    title: "GYMNASIUM",
    icon: "💪",
    image: gym,
    description:
      "Hit the multipurpose gym, train hard, and burn calories. Shape up with confidence — No Pain, No Gain.",
  },
  {
    title: "GAMING CENTER",
    icon: "🎮",
    image: gaming,
    description:
      "Enjoy a wide range of innovative games in our Gaming Center. Be an enthusiastic gamer — don’t just pause, start gaming.",
  },
  {
    title: "MINI-THEATRE",
    icon: "🎬",
    image: theatre,
    description:
      "Watch movies or cultural shows in the plush Mini-Theatre. Relax, entertain yourself, and create lasting memories.",
  },
  {
    title: "MUSIC & RECORDING STUDIO",
    icon: "🎵",
    image: music,
    description:
      "Feel the beat and fuel your soul at the Music Studio. Record, connect, and unleash your musical talent.",
  },
  {
    title: "DANCE STUDIO & ART ROOM",
    icon: "🩰",
    image: dance,
    description:
      "Dance to your rhythm and express your creativity. Explore the world of art and let your imagination soar.",
  },
  {
    title: "CONNECTION LOUNGE",
    icon: "☕",
    image: connection,
    description:
      "Take a breath and relax in the Connection Lounge. Unwind fully and recharge during your stay.",
  },
]

const SpineExperience = () => {
  return (
    <section className="bg-gray-800 py-20 px-6 relative">
      <div className="max-w-full mx-20">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-4">
            SPINE{" "}
            <span className="text-red-400">Experience</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            5-level activity center with world-class facilities for sports, arts,
            entertainment, and personal growth
          </p>
        </div>
        {/* Scrollable cards and fixed gradients */}
        <div className="relative py-2">
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-8 min-w-[900px] pr-16">
              {facilities.map((facility, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 min-w-[370px] max-w-sm flex-shrink-0 shadow-lg flex flex-col justify-between h-[370px] scroll-snap-align-start border border-gray-700"
                >
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center mb-3">
                      <div className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                        <span className="text-white text-lg font-bold">
                          {facility.icon}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold">
                        {facility.title}
                      </h3>
                    </div>
                    <p className="text-sm text-gray-700 ">
                      {facility.description}
                    </p>
                  </div>
                  <div className="bg-white p-4 flex items-center justify-center">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-[90%] -mt-10 object-cover rounded-lg"
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
      `}</style>
    </section>
  )
}

export default SpineExperience
