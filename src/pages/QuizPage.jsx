export default function Quiz() {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-xl p-8">
        <h1 className="text-3xl font-semibold text-charcoal text-center mb-2">
          IVORY
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Personalized skincare, thoughtfully designed
        </p>

        <h2 className="text-xl font-medium text-charcoal mb-4">
          What best describes your skin?
        </h2>

        <div className="space-y-3">
          {["Oily", "Dry", "Combination", "Sensitive"].map((type) => (
            <button
              key={type}
              className="w-full py-3 rounded-xl border border-sage text-charcoal hover:bg-sage hover:text-white transition"
            >
              {type}
            </button>
          ))}
        </div>

        <a
          href="/routine"
          className="block mt-8 text-center bg-charcoal text-white py-3 rounded-xl hover:opacity-90 transition"
        >
          Generate My Routine →
        </a>
      </div>
    </div>
  )
}
