import type { Project } from "../data/projects";

export default function ProjectVisual({ kind }: { kind: Project["visual"] }) {
  if (kind === "index") {
    return (
      <div className="project-preview index-preview">
        <div className="index-site">
          <h4>Tokyo Climbing Gym Index</h4>
          <p>A minimalist database for climbers training hard in Tokyo.</p>
          <div className="index-filters">
            <strong>Filters</strong>
            <span>Hangboard</span>
            <span>Campus Board</span>
            <span>Spray Wall</span>
            <small>Clear</small>
          </div>
          <div className="index-table" role="presentation">
            <div className="index-row index-head">
              <span>Name</span><span>Style</span><span>Size</span><span>Cost</span><span>Quality</span>
            </div>
            <div className="index-row">
              <span>BPUMP Akihabara</span><span>Normal, Competition</span><span>big</span><span>$$$</span><span>****</span>
            </div>
            <div className="index-row">
              <span>BPUMP Ogikubo</span><span>Competition Style</span><span>small</span><span>$$$</span><span>****</span>
            </div>
            <div className="index-row">
              <span>Underground</span><span>Oldschool Style</span><span>very small</span><span>$$</span><span>*****</span>
            </div>
            <div className="index-row">
              <span>Maboo</span><span>Competition Style</span><span>small</span><span>$$</span><span>*****</span>
            </div>
            <div className="index-row">
              <span>Next Gen</span><span>Competition Style</span><span>big</span><span>$$$</span><span>*****</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "tracker") {
    return (
      <div className="project-preview tracker-preview">
        <div className="preview-bar"><span>FOCUS / 07</span><span>LOCAL ONLY</span></div>
        <div className="tracker-dashboard">
          <div className="tracker-total"><span>TODAY</span><strong>1:42</strong><small>of 2h goal</small></div>
          <div className="tracker-chart" aria-hidden="true">
            {[35, 58, 42, 76, 51, 89, 64].map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
          <div className="tracker-legend"><span>WATCH 68%</span><span>SHORTS 09%</span><span>BROWSE 23%</span></div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-preview kettle-preview">
      <div className="preview-bar"><span>BREW / 03</span><span>CONNECTED</span></div>
      <div className="kettle-dashboard">
        <div className="temperature"><strong>92.4</strong><span>°C</span></div>
        <div className="temperature-rule"><span /></div>
        <div className="kettle-status"><span>TARGET 93°C</span><span>PLUG ON</span></div>
        <div className="heat-lines"><span /><span /><span /></div>
      </div>
    </div>
  );
}
