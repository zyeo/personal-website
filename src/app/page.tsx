// import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold">Welcome to my portfolio 👋</h1>
      </main>
      <section className="flex flex-col items-center justify-center mt-12">
        <h2 className="text-3xl font-semibold mb-4">Zachary Yeo</h2>
        <p className="text-lg text-gray-600 mb-6 text-center max-w-xl">
          I&#39;m a passionate software developer specializing in building modern web applications with React, Next.js, and TypeScript.
        </p>
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition"
        >
          View My Projects
        </a>
      </section>
    </>
  );
}











