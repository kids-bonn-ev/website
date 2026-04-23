// Decorative SVG shape library - organic blobs, leaf, arches, stripes, dots.
// Inspired by the motifs in the KIDS e.V. logo.

const Blob = ({ fill = "#a1c480", style = {}, rot = 0 }) => (
  <svg viewBox="0 0 200 200" style={{ overflow: "visible", transform: `rotate(${rot}deg)`, ...style }}>
    <path
      d="M44,-60C56,-51,63,-35,68,-18C73,-1,76,17,70,32C64,47,49,58,32,65C15,72,-5,75,-23,70C-40,64,-54,49,-62,32C-70,14,-72,-6,-66,-23C-60,-39,-46,-52,-31,-60C-16,-68,0,-70,15,-68C30,-67,44,-69,44,-60Z"
      transform="translate(100 100)"
      fill={fill}
    />
  </svg>
);

const Leaf = ({ fill = "#c8a9ce", stripe = "#fff", style = {}, rot = 0 }) => (
  <svg viewBox="0 0 100 180" style={{ overflow: "visible", transform: `rotate(${rot}deg)`, ...style }}>
    <path d="M50,5 Q95,45 95,120 Q95,175 50,175 Q5,175 5,120 Q5,45 50,5 Z" fill={fill}/>
    <g stroke={stripe} strokeWidth="4" strokeLinecap="round" opacity="0.85">
      <line x1="50" y1="30" x2="50" y2="160"/>
      <line x1="30" y1="50" x2="70" y2="50"/>
      <line x1="25" y1="75" x2="75" y2="75"/>
      <line x1="20" y1="100" x2="80" y2="100"/>
      <line x1="22" y1="125" x2="78" y2="125"/>
      <line x1="30" y1="150" x2="70" y2="150"/>
    </g>
  </svg>
);

const Arch = ({ fill = "#eacb2c", style = {}, rot = 0 }) => (
  <svg viewBox="0 0 200 200" style={{ overflow: "visible", transform: `rotate(${rot}deg)`, ...style }}>
    <path d="M10,190 L10,100 Q10,10 100,10 Q190,10 190,100 L190,190 Z" fill={fill}/>
  </svg>
);

const Dots = ({ color = "#c3651d", cols = 4, rows = 6, style = {} }) => {
  const dots = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++)
    dots.push(<circle key={`${r}-${c}`} cx={10 + c*18} cy={10 + r*18} r="4" fill={color}/>);
  return <svg viewBox={`0 0 ${cols*18} ${rows*18}`} style={{ overflow: "visible", ...style }}>{dots}</svg>;
};

const Stripes = ({ color = "#93acd1", count = 6, style = {}, rot = 0 }) => {
  const lines = [];
  for (let i = 0; i < count; i++)
    lines.push(<rect key={i} x={i*14} y="0" width="6" height="120" rx="3" fill={color}/>);
  return <svg viewBox={`0 0 ${count*14} 120`} style={{ overflow: "visible", transform: `rotate(${rot}deg)`, ...style }}>{lines}</svg>;
};

const Squiggle = ({ color = "#c3651d", style = {}, rot = 0 }) => (
  <svg viewBox="0 0 200 40" style={{ overflow: "visible", transform: `rotate(${rot}deg)`, ...style }}>
    <path d="M2,20 Q20,2 40,20 T80,20 T120,20 T160,20 T198,20" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round"/>
  </svg>
);

const Sun = ({ color = "#eacb2c", style = {}, rot = 0 }) => (
  <svg viewBox="0 0 200 200" style={{ overflow: "visible", transform: `rotate(${rot}deg)`, ...style }}>
    <circle cx="100" cy="100" r="42" fill={color}/>
    {Array.from({length: 12}).map((_, i) => {
      const a = (i / 12) * Math.PI * 2;
      const x1 = 100 + Math.cos(a) * 60, y1 = 100 + Math.sin(a) * 60;
      const x2 = 100 + Math.cos(a) * 86, y2 = 100 + Math.sin(a) * 86;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="8" strokeLinecap="round"/>;
    })}
  </svg>
);

const Path = ({ color = "#eacb2c", style = {} }) => (
  <svg viewBox="0 0 400 60" style={{ overflow: "visible", ...style }}>
    <path d="M5,30 Q100,-10 200,30 T395,30" fill="none" stroke={color} strokeWidth="18" strokeLinecap="round" strokeDasharray="2 14"/>
  </svg>
);

// Abstract image placeholder tile - colored block with palette shapes layered in.
// idx selects a preset composition so different tiles look visually distinct.
const AbstractTile = ({ idx = 0, style = {}, label }) => {
  const presets = [
    { bg: "#ddab88", shapes: [<circle cx="40" cy="60" r="28" fill="#c3651d"/>, <rect x="70" y="20" width="18" height="80" rx="9" fill="#fbf6ef"/>] },
    { bg: "#c8a9ce", shapes: [<path d="M50,10 Q95,45 95,80 Q95,110 50,110 Q5,110 5,80 Q5,45 50,10 Z" fill="#eacb2c"/>, <circle cx="50" cy="70" r="10" fill="#c3651d"/>] },
    { bg: "#a1c480", shapes: [<circle cx="60" cy="60" r="36" fill="#fbf6ef"/>, <circle cx="60" cy="60" r="18" fill="#eacb2c"/>, <circle cx="60" cy="60" r="6" fill="#c3651d"/>] },
    { bg: "#93acd1", shapes: [<path d="M10,110 L10,60 Q10,10 60,10 Q110,10 110,60 L110,110 Z" fill="#fbf6ef"/>, <circle cx="60" cy="60" r="14" fill="#eacb2c"/>] },
    { bg: "#eacb2c", shapes: [<rect x="20" y="20" width="18" height="80" rx="9" fill="#c8a9ce"/>, <rect x="50" y="10" width="18" height="90" rx="9" fill="#c3651d"/>, <rect x="80" y="30" width="18" height="70" rx="9" fill="#a1c480"/>] },
    { bg: "#c3651d", shapes: [<circle cx="40" cy="40" r="20" fill="#ddab88"/>, <circle cx="80" cy="80" r="26" fill="#eacb2c"/>, <path d="M20,100 Q60,60 100,100" fill="none" stroke="#fbf6ef" strokeWidth="5" strokeLinecap="round"/>] },
    { bg: "#ddab88", shapes: [<path d="M60,20 Q95,50 95,90 Q95,110 60,110 Q25,110 25,90 Q25,50 60,20 Z" fill="#a1c480"/>, <g stroke="#fbf6ef" strokeWidth="2" strokeLinecap="round"><line x1="60" y1="40" x2="60" y2="100"/><line x1="40" y1="60" x2="80" y2="60"/><line x1="35" y1="80" x2="85" y2="80"/></g>] },
    { bg: "#c8a9ce", shapes: [<circle cx="60" cy="60" r="34" fill="none" stroke="#fbf6ef" strokeWidth="4" strokeDasharray="3 6"/>, <circle cx="60" cy="60" r="16" fill="#c3651d"/>] },
  ];
  const p = presets[idx % presets.length];
  return (
    <div style={{ background: p.bg, borderRadius: 24, position: "relative", overflow: "hidden", ...style }}>
      <svg viewBox="0 0 120 120" preserveAspectRatio="xMidYMid slice" style={{ width: "100%", height: "100%" }}>
        {p.shapes.map((s, i) => <g key={i}>{s}</g>)}
      </svg>
      {label && <span style={{ position: "absolute", left: 14, bottom: 12, fontFamily: "ui-monospace, monospace", fontSize: 11, color: "rgba(255,255,255,.85)", background: "rgba(0,0,0,.18)", padding: "3px 8px", borderRadius: 999 }}>{label}</span>}
    </div>
  );
};

Object.assign(window, { Blob, Leaf, Arch, Dots, Stripes, Squiggle, Sun, Path, AbstractTile });
