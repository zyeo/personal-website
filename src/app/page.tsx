// import Image from "next/image";
import PfpFlip from "./components/pfpFlip";
export default function Home() {
  
  return (
    <>
      {/* Hero/Intro Section (default) */}
      <section className="pt-10 pb-10 px-4 text-center flex flex-col items-center scale-[1.25]">
        <PfpFlip className="my-8 scale-[1.05]" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-4">
          Hey, I&#39;m <span className="text-sky-500">Zachary Yeo</span>
        </h1>
        <p className="text-xl text-gray-700 text-center max-w-xl mb-6 mx-auto">
          Welcome to my portfolio! 👋
        </p>
        <div className="flex flex-wrap gap-4 justify-center text-gray-500 text-lg">
          <span>Software Developer</span>
          <span className="hidden sm:inline">|</span>
          <span>Building web apps, tools, and automations</span>
        </div>
        
      </section>

      {/* About Me Section (default) */}
      <section className="pt-12 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About Me</h2>
          <div className="max-w-3xl mx-auto text-left">
            <p className="text-gray-700 text-lg leading-relaxed text-left mb-4">
              I build web apps, tools, and automations that solve real problems. From frontend interfaces to backend systems, I focus on creating simple, practical products that people actually use.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed text-left">
              Recently, I've been working on data tracking tools, browser extensions, and small-scale automation systems.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Skills Section (Technical Expertise, grouped) */}
      <section className="py-20 px-4 bg-cyan-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Technical Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border-l-4 border-sky-500 shadow">
              <h3 className="font-semibold text-lg mb-2">Backend Development</h3>
              <p className="text-gray-700">Python, FastAPI, Node.js, C/C++, Java</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-sky-500 shadow">
              <h3 className="font-semibold text-lg mb-2">Frontend Development & UI/UX</h3>
              <p className="text-gray-700">React, UI/UX Principles</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-sky-500 shadow">
              <h3 className="font-semibold text-lg mb-2">Cloud & Deployment</h3>
              <p className="text-gray-700">AWS, Azure, Docker, Kubernetes, Linux</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-sky-500 shadow">
              <h3 className="font-semibold text-lg mb-2">Database Management</h3>
              <p className="text-gray-700">PostgreSQL, SQL, Milvus</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-sky-500 shadow">
              <h3 className="font-semibold text-lg mb-2">DevOps & Workflow</h3>
              <p className="text-gray-700">GitHub, CI/CD, Jenkins, Prefect</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-sky-500 shadow">
              <h3 className="font-semibold text-lg mb-2">Observability & Search</h3>
              <p className="text-gray-700">Datadog, Kibana, Elasticsearch</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-sky-500 shadow">
              <h3 className="font-semibold text-lg mb-2">Project Management</h3>
              <p className="text-gray-700">JIRA, Confluence, Agile/Scrum</p>
            </div>
            <div className="bg-white rounded-xl p-6 border-l-4 border-sky-500 shadow">
              <h3 className="font-semibold text-lg mb-2">Other</h3>
              <p className="text-gray-700">Machine Learning, NLP, System Architecture, Network Protocols</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section (default) */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Personal Projects</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {/* Project 1 */}
            <div className="p-8 flex flex-col bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Tokyo Climbing Gym Index</h3>
              <p className="text-gray-600 mb-4">A minimalist database of bouldering gyms in Tokyo</p>
              <a 
                href="https://tokyoindex.zachyeo.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-5 py-2 bg-sky-400 text-white rounded-md font-medium hover:bg-sky-500 transition text-center"
                >
                  Visit site
                </a>
            </div>
            {/* Project 2 */}
            <div className="p-8 flex flex-col bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Youtube Time Tracker Chrome Extension</h3>
              <p className="text-gray-600 mb-4">
                A lightweight tool for tracking YouTube usage and habits
              </p>
              <a 
                href="https://github.com/zyeo/youtube-tracker-extension" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-5 py-2 bg-sky-400 text-white rounded-md font-medium hover:bg-sky-500 transition text-center"
                >
                  Learn more
                </a>
            </div>
            {/* Project 3 */}
            <div className="p-8 flex flex-col bg-white rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Smart Kettle Controller</h3>
              <p className="text-gray-600 mb-4">
                A simple IoT system for maintaining the perfect brewing temperature
              </p>
              <a
                href="https://github.com/zyeo/smart-kettle-controller"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-5 py-2 bg-sky-400 text-white rounded-md font-medium hover:bg-sky-500 transition text-center"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Job Experiences Section (default) */}
      <section className="py-20 px-4 bg-cyan-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Professional Experience</h2>
          <div className="space-y-10">
            <div className="p-6 bg-white rounded-xl border-l-4 border-sky-500 shadow text-left">
              <h3 className="text-xl font-semibold text-gray-900">AI Tutor @ xAI</h3>
              <span className="text-gray-500 text-sm">August 2024 - June 2025</span>
              <p className="text-gray-700 mt-2">Labeled multimodal data to support LLM fine-tuning and evaluation.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border-l-4 border-sky-500 shadow text-left">
              <h3 className="text-xl font-semibold text-gray-900">Software Engineer Intern @ SPAN.io</h3>
              <span className="text-gray-500 text-sm">May 2023 - July 2023</span>
              <p className="text-gray-700 mt-2">Created automated data pipelines using Prefect flows and visualized data on Datadog dashboards. </p>
            </div>
            <div className="p-6 bg-white rounded-xl border-l-4 border-sky-500 shadow text-left">
              <h3 className="text-xl font-semibold text-gray-900">Software Engineer Intern @ Trend Micro</h3>
              <span className="text-gray-500 text-sm">June 2021 - August 2021</span>
              <p className="text-gray-700 mt-2">Developed an automated network health monitorintg tool that alerts teams using ELK Stack and Slack API. </p>
            </div>
          </div>
        </div>
  </section>

      {/* Get in Touch Section (default) */}
      <section className="pt-20 pb-5 px-4">
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











