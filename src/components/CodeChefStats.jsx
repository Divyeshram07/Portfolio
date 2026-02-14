export default function CodeChefStats() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-12">
          CodeChef Rating
        </h2>

        <div className="border rounded-xl p-6 bg-white hover:shadow-md transition">

          <img
            src="https://www.codechef.com/users/divyeshram28/rating"
            alt="CodeChef Rating Graph"
            className="w-full"
          />

        </div>

      </div>
    </section>
  );
}
