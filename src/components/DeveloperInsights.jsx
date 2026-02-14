import { useEffect, useState } from "react";

export default function DeveloperInsights() {
  const [github, setGithub] = useState(null);
  const username = "Divyeshram07";

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        setGithub(data);
      })
      .catch((err) => console.error(err));
  }, []);

  if (!github) {
    return (
      <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-500">Loading Developer Insights...</p>
        </div>
      </section>
    );
  }

  if (github.message === "Not Found") {
    return (
      <section className="py-24 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-red-500">GitHub user not found.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-12">
          Developer Insights
        </h2>

        <div className="bg-white rounded-2xl shadow-lg p-8 transition hover:shadow-xl">

          {/* Header */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">

            <div className="flex items-center gap-6">

              <img
                src={github.avatar_url}
                alt="GitHub Avatar"
                className="w-20 h-20 rounded-full border-4 border-red-500 shadow-md"
              />

              <div>
                <h3 className="text-xl font-semibold">
                  {github.name || github.login}
                </h3>

                <p className="text-gray-500">
                  @{github.login}
                </p>

                {github.bio && (
                  <p className="text-sm text-gray-400 mt-1 max-w-md">
                    {github.bio}
                  </p>
                )}
              </div>
            </div>

            <a
              href={github.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 md:mt-0 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
            >
              View Profile →
            </a>

          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">

            <StatCard title="Repositories" value={github.public_repos} />
            <StatCard title="Followers" value={github.followers} />
            <StatCard title="Following" value={github.following} />
            <StatCard title="Gists" value={github.public_gists} />

          </div>

          {/* Contribution Heatmap */}
          <h4 className="text-lg font-medium mb-6">
            Contribution Heatmap
          </h4>

          <div className="overflow-x-auto">
            <img
              src={`https://ghchart.rshah.org/${username}`}
              alt="GitHub Contribution Graph"
              className="w-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

/* --------- Sub Component --------- */

function StatCard({ title, value }) {
  return (
    <div className="p-6 bg-gray-50 rounded-xl text-center border hover:shadow-md transition">
      <p className="text-2xl font-bold">
        {value}
      </p>
      <p className="text-gray-500 text-sm mt-1">
        {title}
      </p>
    </div>
  );
}
