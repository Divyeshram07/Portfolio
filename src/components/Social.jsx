export default function Social() {
  const socials = [
    {
      name: "GitHub",
      username: "@yourusername",
      description: "Open source projects & contributions",
      link: "https://github.com/yourusername",
      color: "hover:bg-gray-100",
      svg: (
        <path d="M12 .5C5.7.5.5 5.7.5 12c0 5 3.2 9.2 7.6 10.7.6.1.8-.3.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.1-1.6-1.1-1.6-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.5-.3-5.1-1.2-5.1-5.4 0-1.2.4-2.2 1-3-.1-.3-.4-1.4.1-2.9 0 0 .9-.3 3 .9a10.4 10.4 0 0 1 5.5 0c2.1-1.2 3-.9 3-.9.5 1.5.2 2.6.1 2.9.6.8 1 1.8 1 3 0 4.2-2.6 5.1-5.1 5.4.4.3.7 1 .7 2v3c0 .3.2.7.8.6A10.8 10.8 0 0 0 23.5 12c0-6.3-5.2-11.5-11.5-11.5z" />
      )
    },
    {
      name: "LinkedIn",
      username: "Divyesh Ram",
      description: "Professional network & experience",
      link: "https://linkedin.com/in/yourprofile",
      color: "hover:bg-blue-50",
      svg: (
        <path d="M4.98 3.5C4.98 5 3.85 6 2.49 6S0 5 0 3.5 1.13 1 2.49 1s2.49 1 2.49 2.5zM.24 8.25h4.5V24h-4.5V8.25zM8.25 8.25h4.32v2.15h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V24h-4.5v-7.8c0-1.86-.03-4.26-2.6-4.26-2.6 0-3 2.04-3 4.14V24h-4.5V8.25z"/>
      )
    },
    {
      name: "Instagram",
      username: "@yourhandle",
      description: "Personal updates & highlights",
      link: "https://instagram.com/yourhandle",
      color: "hover:bg-pink-50",
      svg: (
        <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm5 5.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm4.5-.9a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/>
      )
    },
    {
      name: "Twitter (X)",
      username: "@yourhandle",
      description: "Tech thoughts & insights",
      link: "https://twitter.com/yourhandle",
      color: "hover:bg-gray-100",
      svg: (
        <path d="M24 4.6c-.9.4-1.8.6-2.8.8 1-.6 1.8-1.5 2.2-2.6-.9.6-2 .9-3.1 1.1A4.7 4.7 0 0 0 16.7 2c-2.6 0-4.7 2.1-4.7 4.7 0 .4 0 .7.1 1C7.7 7.5 4.1 5.7 1.7 2.9c-.4.7-.6 1.5-.6 2.3 0 1.6.8 3 2.1 3.8-.8 0-1.5-.2-2.1-.6v.1c0 2.2 1.6 4 3.6 4.4-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.9 2.4 3.2 4.5 3.3A9.5 9.5 0 0 1 0 19.5a13.4 13.4 0 0 0 7.3 2.1c8.8 0 13.6-7.3 13.6-13.6v-.6c.9-.6 1.7-1.4 2.3-2.4z"/>
      )
    },
    {
      name: "Facebook",
      username: "Divyesh Ram",
      description: "Community & connections",
      link: "https://facebook.com/yourprofile",
      color: "hover:bg-blue-50",
      svg: (
        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.5v-3h2.5V9.5c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h3l-.5 3h-2.5v7A10 10 0 0 0 22 12z"/>
      )
    }
  ];

  return (
    <section id="social" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-semibold mb-16 text-center">
          Connect With Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-6 border rounded-xl transition-all duration-300 hover:shadow-md ${social.color}`}
            >
              <div className="flex items-center gap-4">

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-8 h-8 text-gray-700"
                >
                  {social.svg}
                </svg>

                <div>
                  <h3 className="text-lg font-medium">
                    {social.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {social.username}
                  </p>
                </div>

              </div>

              <p className="text-gray-600 mt-4 text-sm">
                {social.description}
              </p>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}
