export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  year: string;
  summary: string;
  intro: string;
  visual: "index" | "tracker" | "kettle";
  stack: string[];
  facts: { label: string; value: string }[];
  sections: { title: string; body: string }[];
  primaryUrl: string;
  primaryLabel: string;
  sourceUrl: string;
};

export const projects: Project[] = [
  {
    slug: "tokyo-climbing-index",
    title: "Tokyo Climbing Index",
    eyebrow: "Climbing · Local guide",
    year: "2026",
    summary: "A curated, minimalist index of Tokyo bouldering gyms, with a map and filters for the training features that matter.",
    intro: "Tokyo has no shortage of climbing gyms. The harder part is choosing one: location, training boards, style, and transit time all matter. I built the index I wanted to use myself.",
    visual: "index",
    stack: ["Next.js", "TypeScript", "Maps", "Curated data"],
    facts: [
      { label: "Role", value: "Design & development" },
      { label: "Focus", value: "Useful local data" },
      { label: "Status", value: "Live and evolving" },
    ],
    sections: [
      { title: "The idea", body: "Gym directories tend to optimize for volume. I wanted a calm, opinionated tool for climbers who care about practical details—especially training facilities and where a gym sits in the city." },
      { title: "The approach", body: "The interface keeps the data close to the map and makes filtering the primary interaction. The content is deliberately curated rather than scraped into a noisy catalogue." },
      { title: "What’s next", body: "I’m exploring location-aware sorting, transit-time estimates, richer map details, and Japanese-language support without sacrificing the index’s simplicity." },
    ],
    primaryUrl: "https://tokyoindex.zachyeo.com",
    primaryLabel: "Visit the index",
    sourceUrl: "https://github.com/zyeo/tokyo-climbing-gym-index",
  },
  {
    slug: "youtube-time-tracker",
    title: "YouTube Time Tracker",
    eyebrow: "Browser extension · Local-first",
    year: "2026",
    summary: "A Chrome extension that measures focused YouTube time by page type—without sending browsing data off-device.",
    intro: "Most screen-time totals lack context. A tutorial, a long video, and thirty minutes of scrolling are not the same thing. This extension measures focused activity and makes the differences visible.",
    visual: "tracker",
    stack: ["Chrome APIs", "JavaScript", "Local storage", "Node tests"],
    facts: [
      { label: "Data", value: "Stored locally" },
      { label: "Tracks", value: "Watch, Shorts & browse" },
      { label: "Status", value: "Open source" },
    ],
    sections: [
      { title: "The idea", body: "I wanted feedback that was specific enough to change a habit, not another generic weekly total. The tracker separates page types and counts only when YouTube is actually the focused activity." },
      { title: "The approach", body: "Chrome tab, window, alarm, and storage APIs coordinate a small local state machine. Paused videos stop immediately, browsing stops after an inactivity threshold, and recent sessions stay on the device." },
      { title: "The result", body: "The popup shows today’s progress and a configurable goal; a separate dashboard adds trend charts and recent sessions. There is no account, backend, cloud sync, or off-device analytics." },
    ],
    primaryUrl: "https://github.com/zyeo/youtube-tracker-extension",
    primaryLabel: "View the source",
    sourceUrl: "https://github.com/zyeo/youtube-tracker-extension",
  },
  {
    slug: "smart-kettle-controller",
    title: "Smart Kettle Controller",
    eyebrow: "IoT · Small automation",
    year: "2026",
    summary: "An ESP32 temperature sensor and smart-plug controller that stops and reheats a kettle around a target temperature.",
    intro: "A small hardware experiment built around a very ordinary annoyance: water keeps getting hotter after the ideal brewing point, then cools while everything else gets prepared.",
    visual: "kettle",
    stack: ["Python", "ESP32", "DS18B20", "Tapo API"],
    facts: [
      { label: "Input", value: "Temperature sensor" },
      { label: "Output", value: "Smart plug" },
      { label: "Control", value: "Target-temperature loop" },
    ],
    sections: [
      { title: "The idea", body: "Treat a basic kettle as a controllable system without modifying its mains wiring. A separate sensor measures the water while a smart plug handles power." },
      { title: "The approach", body: "An ESP32 reads a DS18B20 temperature sensor. A Python controller turns the Tapo plug off at the target and back on once the temperature falls below the allowed range." },
      { title: "Why I like it", body: "It is intentionally small: one sensor, one actuator, and a clear feedback loop. It made a useful everyday object while giving me a concrete way to work across hardware, networking, and software." },
    ],
    primaryUrl: "https://github.com/zyeo/smart-kettle-controller",
    primaryLabel: "View the source",
    sourceUrl: "https://github.com/zyeo/smart-kettle-controller",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
