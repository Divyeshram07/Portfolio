export default function CodingPlatforms() {
  const platforms = [
    { name: "LeetCode", value: "500+ Problems" },
    { name: "CodeChef", value: "4★ Rating" },
    { name: "HackerRank", value: "Gold Badge" },
    { name: "GitHub", value: "Active Contributor" },
  ];

  return (
    <section id="coding" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-12">
          Coding Platforms
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="border-b pb-4 transition-all duration-300 hover:opacity-70"
            >
              <h3 className="text-lg font-medium">
                {platform.name}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {platform.value}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
