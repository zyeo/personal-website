// import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero/Intro Section (default) */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src="/profile-placeholder.png"
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-sky-500 shadow-lg mb-6 object-cover mx-auto"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4">
            Hey, I&#39;m <span className="text-sky-500">Zachary Yeo</span>
          </h1>
          <p className="text-xl text-gray-700 text-center max-w-xl mb-6 mx-auto">
            Welcome to my portfolio! 👋
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-gray-500 text-lg">
            <span>Software Developer</span>
            <span className="hidden sm:inline">|</span>
            <span>Rock Climber</span>
            <span className="hidden sm:inline">|</span>
            <span>Photographer</span>
          </div>
        </div>
      </section>

      {/* About Me Section (default) */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About Me</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Driven by curiosity and a love for building things, I enjoy creating intuitive and performant user experiences. My journey spans various fields, from developing web applications to managing projects and fostering collaboration. I believe in building not just robust applications, but also strong relationships and empowering others through teaching and mentorship.
          </p>
        </div>
      </section>

      {/* Technical Skills Section (bg-white) */}
      <section className="py-20 px-4 bg-cyan-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Technical Skills</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Python'].map(skill => (
              <span key={skill} className="bg-white px-6 py-3 rounded-xl shadow text-lg font-medium text-gray-800 border border-sky-100 border-l-4 border-sky-500 hover:bg-blue-100 transition">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section (default) */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {[1,2].map(i => (
              <div key={i} className="p-8 flex flex-col">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Project {i}</h3>
                <p className="text-gray-600 mb-4">A short description of the project goes here. Highlight what makes it interesting or unique.</p>
                <a href="#" className="mt-auto inline-block px-5 py-2 bg-sky-400 text-white rounded-md font-medium hover:bg-sky-500 transition text-center">Learn more</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Experiences Section (default) */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Job Experiences</h2>
          <div className="space-y-10">
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-900">Software Engineer @ Company A</h3>
              <span className="text-gray-500 text-sm">2022 - Present</span>
              <p className="text-gray-700 mt-2">Worked on building scalable web applications and leading a small team of developers.</p>
            </div>
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-gray-900">Frontend Developer @ Company B</h3>
              <span className="text-gray-500 text-sm">2020 - 2022</span>
              <p className="text-gray-700 mt-2">Focused on creating beautiful and responsive user interfaces with React and Tailwind CSS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section (default) */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Get in Touch</h2>
          <p className="text-gray-700 mb-8 text-lg">Interested in working together or just want to say hi? Reach out below!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:zachary.yeo@email.com"
              className="inline-block px-10 py-4 bg-amber-400 text-white rounded-md font-semibold hover:bg-amber-500 transition text-lg shadow"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/zacharyyeo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-amber-400 text-white rounded-md font-semibold hover:bg-amber-500 transition text-lg shadow"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/zyeo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-amber-400 text-white rounded-md font-semibold hover:bg-amber-500 transition text-lg shadow"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}











