export default function CodingProfiles() {
  const profiles = [
    {
      name: "CodeChef",
      link: "https://www.codechef.com/users/divyeshram28",
      gradient: "from-gray-700 to-gray-900"
    },
    {
      name: "LeetCode",
      link: "https://leetcode.com/divyeshram28",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      name: "Codeforces",
      link: "https://codeforces.com/profile/divyeshram28",
      gradient: "from-blue-500 to-blue-700"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-12">
          Coding Profiles
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {profiles.map((profile, index) => (
            <a
              key={index}
              href={profile.link}
              target="_blank"
              className={`bg-gradient-to-r ${profile.gradient} text-white p-8 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}
            >
              <h3 className="text-xl font-semibold">
                {profile.name}
              </h3>

              <p className="mt-8 text-sm underline">
                Visit Profile →
              </p>
            </a>
          ))}

        </div>

      </div>
    </section>
  );
}
