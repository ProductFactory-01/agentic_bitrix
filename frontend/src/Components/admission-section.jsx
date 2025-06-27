import admission from '../assets/admission.jpg';

const AdmissionSection = () => {
  return (
    <section className="bg-red-500 py-16 px-6 relative overflow-hidden">
      {/* Background Image Overlay */}
      <img
        src={admission}
        alt="Admission"
        className="absolute inset-0 w-full h-full object-cover opacity-30 z-0 pointer-events-none"
        style={{ mixBlendMode: 'multiply' }}
      />

      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-red-400 rounded-full opacity-20 -translate-x-32 -translate-y-32"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600 rounded-full opacity-20 translate-x-48 translate-y-48"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-white text-5xl font-semibold mb-6">
          Admission <span className="text-yellow-300">2025</span>
        </h2>

        <p className="text-white opacity-90 text-lg mb-8 leading-relaxed">
          Join India's most innovative engineering college. Limited seats available for{" "}
          <span className="font-semibold">18 UG Programs</span>, <span className="font-semibold">10 PG Programs</span>,
          <span className="text-white opacity-90"> and </span><span className="font-semibold">5 PhD Programs</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-red-500 transition-colors flex items-center justify-center">
            <span className="mr-2">📞</span>
            Call: 9003665865
          </button>
          <button className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
            <span className="mr-2">📝</span>
            Apply Online Now
          </button>
        </div>

        {/* Scholarship Banner */}
        <div className="bg-transparent rounded-lg p-6 max-w-2xl mx-auto">
          <div className="flex items-center justify-center mb-2">
            <span className="text-2xl mr-3">🎓</span>
            <h3 className="text-black text-xl font-bold">₹70+ Lakh Scholarships Available</h3>
          </div>
          <p className="text-black text-sm">
            Merit-based scholarships, work-while-learn programs, and financial aid for deserving students
          </p>
        </div>
      </div>
    </section>
  )
}

export default AdmissionSection
