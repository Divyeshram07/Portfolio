import { useEffect, useState } from "react";

function Counter({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}</span>;
}

export default function Stats() {
  const stats = [
    { label: "Projects Built", value: 12, suffix: "+" },
    { label: "Problems Solved", value: 500, suffix: "+" },
    { label: "Internships", value: 2, suffix: "" },
  ];

  return (
    <section id="stats" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">

        {stats.map((stat, index) => (
          <div key={index}>
            <h2 className="text-4xl font-semibold">
              <Counter end={stat.value} />
              {stat.suffix}
            </h2>
            <p className="mt-2 text-gray-500">{stat.label}</p>
          </div>
        ))}

      </div>
    </section>
  );
}
