const SpineExperience = () => {
  const facilities = [
    {
      title: "Swimming Pool",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cQXHyZUJeYsuNfowcERFg6EmsluyNx.png",
      icon: "🏊",
    },
    {
      title: "Fitness Center",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cQXHyZUJeYsuNfowcERFg6EmsluyNx.png",
      icon: "💪",
    },
    {
      title: "Desktop Theater",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cQXHyZUJeYsuNfowcERFg6EmsluyNx.png",
      icon: "🎬",
    },
    {
      title: "Music Studio",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cQXHyZUJeYsuNfowcERFg6EmsluyNx.png",
      icon: "🎵",
    },
    {
      title: "Gaming Arena",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cQXHyZUJeYsuNfowcERFg6EmsluyNx.png",
      icon: "🎮",
    },
    {
      title: "Rooftop Dining",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-cQXHyZUJeYsuNfowcERFg6EmsluyNx.png",
      icon: "🍽️",
    },
  ]

  return (
    <section className="bg-gray-800 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-white text-4xl font-bold mb-4">
            SPINE <span className="text-red-400">Experience</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            5-level activity center with world-class facilities for sports, arts, entertainment, and personal growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center">
                  <div className="bg-red-500 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                    <span className="text-white text-lg">{facility.icon}</span>
                  </div>
                  <h3 className="text-white text-lg font-semibold">{facility.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SpineExperience
