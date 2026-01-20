export default function Diary() {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center px-4">
      <div className="bg-white max-w-xl w-full rounded-3xl shadow-xl p-8">
        <h1 className="text-2xl font-semibold text-charcoal mb-6 text-center">
          Skin Diary
        </h1>

        <div className="grid grid-cols-2 gap-4 mb-6 text-gray-700">
          <div className="bg-ivory rounded-xl p-4">
            🧴 <strong>Skin:</strong> Oily
          </div>
          <div className="bg-ivory rounded-xl p-4">
            😴 <strong>Sleep:</strong> 5 hrs
          </div>
          <div className="bg-ivory rounded-xl p-4">
            🌤 <strong>Weather:</strong> Humid
          </div>
          <div className="bg-ivory rounded-xl p-4">
            💧 <strong>Hydration:</strong> Low
          </div>
        </div>

        <div className="bg-sage/20 rounded-2xl p-5">
          <h2 className="font-medium text-charcoal mb-2">
            Pattern Insight
          </h2>
          <p className="text-gray-700 text-sm">
            Repeated low sleep combined with humid weather correlates with increased oil production and breakouts.
          </p>
        </div>
      </div>
    </div>
  )
}
