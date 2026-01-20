export default function Routine() {
  return (
    <div className="min-h-screen bg-ivory px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold text-charcoal mb-8 text-center">
          Your Personalized Routine
        </h1>

        <div className="grid md:grid-cols-2 gap-6">
          {["AM Routine", "PM Routine"].map((time) => (
            <div
              key={time}
              className="bg-white rounded-3xl shadow-lg p-6"
            >
              <h2 className="text-xl font-medium text-charcoal mb-4">
                {time}
              </h2>

              <ul className="space-y-3 text-gray-700">
                <li>• Gentle Cleanser</li>
                <li>• Hydrating Toner</li>
                <li>• Lightweight Serum</li>
                <li>• Moisturizer</li>
                {time === "AM Routine" && <li>• Sunscreen</li>}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/diary"
            className="inline-block bg-charcoal text-white px-8 py-3 rounded-xl"
          >
            Track Today’s Skin →
          </a>
        </div>
      </div>
    </div>
  )
}
