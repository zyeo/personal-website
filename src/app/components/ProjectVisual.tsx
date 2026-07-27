import type { Project } from "../data/projects";

export default function ProjectVisual({ kind }: { kind: Project["visual"] }) {
  if (kind === "index") {
    return (
      <div className="project-preview index-preview">
        <div className="preview-bar"><span>TOKYO / CLIMB</span><span>35.6762° N</span></div>
        <div className="index-map">
          <span className="map-line line-one" />
          <span className="map-line line-two" />
          <span className="map-line line-three" />
          <span className="map-pin pin-one">01</span>
          <span className="map-pin pin-two">02</span>
          <span className="map-pin pin-three">03</span>
          <div className="index-panel">
            <p>GYM INDEX</p>
            <strong>Find your wall.</strong>
            <span>Board training · Open now</span>
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
