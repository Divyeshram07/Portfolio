export default function Blog() {
  const posts = [
    {
      title: "Optimizing NLP Pipelines for Production",
      date: "Jan 2026",
      desc: "How to improve inference performance in real-world NLP systems."
    },
    {
      title: "Building Scalable MERN Applications",
      date: "Dec 2025",
      desc: "Architecture patterns for scalable full-stack systems."
    }
  ];

  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-12">
          Writing
        </h2>

        <div className="space-y-12">
          {posts.map((post, index) => (
            <div
              key={index}
              className="border-b pb-6 hover:opacity-70 transition-all duration-300"
            >
              <h3 className="text-xl font-medium">
                {post.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {post.date}
              </p>

              <p className="text-gray-600 mt-3">
                {post.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
