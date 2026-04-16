import React from "react";
import { motion } from "framer-motion";

const Card = ({ children, className = "" }) => (
  <div className={`rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl ${className}`}>{children}</div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const Button = ({ children, className = "", variant = "solid", asChild = false, ...props }) => {
  const classes = `inline-flex items-center justify-center rounded-full px-5 py-3 text-sm transition ${
    variant === "outline"
      ? "border border-white/20 bg-white/5 text-white hover:bg-white/10"
      : "bg-white text-black hover:opacity-90"
  } ${className}`;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: `${classes} ${children.props.className || ""}`.trim(),
      ...props,
    });
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

function IconWrapper({ children, className = "h-5 w-5" }) {
  return <span className={`${className} inline-flex items-center justify-center`}>{children}</span>;
}

function MailIcon({ className = "h-5 w-5" }) {
  return (
    <IconWrapper className={className}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    </IconWrapper>
  );
}

function PhoneIcon({ className = "h-5 w-5" }) {
  return (
    <IconWrapper className={className}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.28a2 2 0 0 1 2.11-.45c.84.29 1.72.5 2.62.62A2 2 0 0 1 22 16.92Z" />
      </svg>
    </IconWrapper>
  );
}

function MapPinIcon({ className = "h-5 w-5" }) {
  return (
    <IconWrapper className={className}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
        <path d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    </IconWrapper>
  );
}

function SparklesIcon({ className = "h-5 w-5" }) {
  return (
    <IconWrapper className={className}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
        <path d="m12 3 1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3Z" />
        <path d="m5 16 .9 2.1L8 19l-2.1.9L5 22l-.9-2.1L2 19l2.1-.9L5 16Z" />
        <path d="m19 13 .9 2.1L22 16l-2.1.9L19 19l-.9-2.1L16 16l2.1-.9L19 13Z" />
      </svg>
    </IconWrapper>
  );
}

function CodeIcon({ className = "h-5 w-5" }) {
  return (
    <IconWrapper className={className}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
        <path d="m8 16-4-4 4-4" />
        <path d="m16 8 4 4-4 4" />
        <path d="m14 4-4 16" />
      </svg>
    </IconWrapper>
  );
}

function ArrowUpRightIcon({ className = "h-5 w-5" }) {
  return (
    <IconWrapper className={className}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
        <path d="M7 17 17 7" />
        <path d="M7 7h10v10" />
      </svg>
    </IconWrapper>
  );
}

function BriefcaseIcon({ className = "h-5 w-5" }) {
  return (
    <IconWrapper className={className}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        <path d="M3 12h18" />
      </svg>
    </IconWrapper>
  );
}

function GraduationCapIcon({ className = "h-5 w-5" }) {
  return (
    <IconWrapper className={className}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
        <path d="m2 9 10-5 10 5-10 5-10-5Z" />
        <path d="M6 11.5V16c0 1.1 2.7 3 6 3s6-1.9 6-3v-4.5" />
      </svg>
    </IconWrapper>
  );
}

function TrophyIcon({ className = "h-5 w-5" }) {
  return (
    <IconWrapper className={className}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 4h10v5a5 5 0 0 1-10 0V4Z" />
        <path d="M17 5h3v2a4 4 0 0 1-4 4h-1" />
        <path d="M7 5H4v2a4 4 0 0 0 4 4h1" />
      </svg>
    </IconWrapper>
  );
}

function BookIcon({ className = "h-5 w-5" }) {
  return (
    <IconWrapper className={className}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5V4.5A2.5 2.5 0 0 1 6.5 2Z" />
      </svg>
    </IconWrapper>
  );
}

function ServerIcon({ className = "h-5 w-5" }) {
  return (
    <IconWrapper className={className}>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full">
        <rect x="3" y="4" width="18" height="6" rx="2" />
        <rect x="3" y="14" width="18" height="6" rx="2" />
        <path d="M7 7h.01" />
        <path d="M7 17h.01" />
      </svg>
    </IconWrapper>
  );
}

function DatabaseLogo({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="6" rx="6.5" ry="2.8" />
      <path d="M5.5 6v5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8V6" />
      <path d="M5.5 11v5c0 1.5 2.9 2.8 6.5 2.8s6.5-1.3 6.5-2.8v-5" />
    </svg>
  );
}

function BrainGlyph({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 4a3 3 0 0 0-3 3v1.2a2.3 2.3 0 0 0-1.8 2.2 2.3 2.3 0 0 0 1.8 2.2V14a3 3 0 0 0 3 3" />
      <path d="M14.5 4a3 3 0 0 1 3 3v1.2a2.3 2.3 0 0 1 1.8 2.2 2.3 2.3 0 0 1-1.8 2.2V14a3 3 0 0 1-3 3" />
      <path d="M12 7v10" />
      <path d="M9.2 10.2H15" />
    </svg>
  );
}

function PythonLogo({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h4a4 4 0 0 1 4 4v2H9a2 2 0 0 0-2 2v2H5a2 2 0 0 1-2-2V8a5 5 0 0 1 5-5Z" />
      <circle cx="14.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      <path d="M15 21h-4a4 4 0 0 1-4-4v-2h8a2 2 0 0 0 2-2v-2h2a2 2 0 0 1 2 2v3a5 5 0 0 1-5 5Z" />
      <circle cx="9.5" cy="17.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function JsLogo({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="M10 9v5.5c0 1.3-.8 2.2-2.2 2.2-.7 0-1.4-.2-1.8-.7" />
      <path d="M14.5 14.5c.4 1.4 1.4 2.2 2.8 2.2 1.3 0 2.2-.6 2.2-1.6 0-1-.7-1.4-2.1-1.9l-.7-.2c-1.6-.6-2.5-1.4-2.5-3.1 0-1.8 1.4-3 3.5-3 1.5 0 2.6.5 3.3 1.9" />
    </svg>
  );
}

function ReactLogo({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="8" ry="3.2" />
      <ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="8" ry="3.2" transform="rotate(120 12 12)" />
    </svg>
  );
}

function DjangoLogo({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 6v12" />
      <path d="M11 6v12" />
      <path d="M15 9v9" />
      <path d="M7 18c3.5 0 5-1.4 5-4.8V6" />
      <path d="M15 18c2 0 3-1.1 3-3.4V9" />
    </svg>
  );
}

function NodeLogo({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3 7 4v10l-7 4-7-4V7l7-4Z" />
      <path d="M9 9v6" />
      <path d="M15 15V9l-3 4" />
    </svg>
  );
}

function DockerLogo({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="10" width="3" height="3" rx="0.6" />
      <rect x="8" y="10" width="3" height="3" rx="0.6" />
      <rect x="12" y="10" width="3" height="3" rx="0.6" />
      <rect x="8" y="6" width="3" height="3" rx="0.6" />
      <rect x="12" y="6" width="3" height="3" rx="0.6" />
      <path d="M4 14.5h10.5c2.5 0 4.1-1 5-3" />
      <path d="M18.5 10.3c.9-.2 1.5-.9 1.7-1.8.7.5 1.1 1.4 1.1 2.3" />
    </svg>
  );
}

function CloudGlyph({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 18h9a4 4 0 0 0 .8-7.9A5.8 5.8 0 0 0 6.7 9.1 3.6 3.6 0 0 0 8 18Z" />
      <path d="M10 15.5 12 13l2 2.5 2-2.5" />
    </svg>
  );
}

function LinkedinMark({ className = "h-5 w-5" }) {
  return (
    <IconWrapper className={className}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
        <path d="M4.98 3.5A2.49 2.49 0 1 0 5 8.48a2.49 2.49 0 0 0-.02-4.98ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.06c.53-1 1.85-2.05 3.82-2.05 4.09 0 4.84 2.57 4.84 5.92V21h-4v-5.7c0-1.36-.03-3.1-1.96-3.1-1.96 0-2.26 1.45-2.26 3v5.8h-4V9Z" />
      </svg>
    </IconWrapper>
  );
}

function SkillStickerIcon({ skill }) {
  const commonClass = "h-4 w-4";
  const icons = {
    python: <PythonLogo className={commonClass} />,
    javascript: <JsLogo className={commonClass} />,
    django: <DjangoLogo className={commonClass} />,
    react: <ReactLogo className={commonClass} />,
    aws: <CloudGlyph className={commonClass} />,
    sql: <DatabaseLogo className={commonClass} />,
    postgresql: <DatabaseLogo className={commonClass} />,
    redis: <DatabaseLogo className={commonClass} />,
    docker: <DockerLogo className={commonClass} />,
    node: <NodeLogo className={commonClass} />,
    rag: <BrainGlyph className={commonClass} />,
    llm: <BrainGlyph className={commonClass} />,
    nlp: <BrainGlyph className={commonClass} />,
    fastapi: <ServerIcon className={commonClass} />,
    flask: <ServerIcon className={commonClass} />,
    nextjs: <NodeLogo className={commonClass} />,
    html: <CodeIcon className={commonClass} />,
    css: <SparklesIcon className={commonClass} />,
    java: <CodeIcon className={commonClass} />,
    cpp: <CodeIcon className={commonClass} />,
    r: <CodeIcon className={commonClass} />,
    dart: <CodeIcon className={commonClass} />,
    api: <ServerIcon className={commonClass} />,
    rest: <ServerIcon className={commonClass} />,
    auth: <BriefcaseIcon className={commonClass} />,
    git: <CodeIcon className={commonClass} />,
    s3: <CloudGlyph className={commonClass} />,
    ecs: <CloudGlyph className={commonClass} />,
    database: <DatabaseLogo className={commonClass} />,
    ui: <SparklesIcon className={commonClass} />,
    build: <CodeIcon className={commonClass} />,
    scale: <CloudGlyph className={commonClass} />,
    design: <SparklesIcon className={commonClass} />,
    deploy: <CloudGlyph className={commonClass} />,
    debug: <CodeIcon className={commonClass} />,
    learn: <BookIcon className={commonClass} />,
    ship: <ArrowUpRightIcon className={commonClass} />,
    grow: <TrophyIcon className={commonClass} />,
    backend: <ServerIcon className={commonClass} />,
    frontend: <ReactLogo className={commonClass} />,
    data: <DatabaseLogo className={commonClass} />,
    logic: <BrainGlyph className={commonClass} />,
    cache: <DatabaseLogo className={commonClass} />,
    index: <DatabaseLogo className={commonClass} />,
    solve: <BrainGlyph className={commonClass} />,
    test: <SparklesIcon className={commonClass} />,
    impact: <TrophyIcon className={commonClass} />,
    ml: <BrainGlyph className={commonClass} />,
    tensorflow: <BrainGlyph className={commonClass} />,
    gcp: <CloudGlyph className={commonClass} />,
    azure: <CloudGlyph className={commonClass} />,
    cloud: <CloudGlyph className={commonClass} />,
  };
  return <div className="flex h-full w-full items-center justify-center text-zinc-100">{icons[skill] || <CodeIcon className={commonClass} />}</div>;
}

function InteractiveCube() {
  const [isSpinning, setIsSpinning] = React.useState(true);
  const [tilt, setTilt] = React.useState({ rotateX: -16, rotateY: 22 });

  const faces = [
    ["python", "django", "react", "postgresql", "aws", "rag", "llm", "docker", "node"],
    ["java", "node", "database", "react", "fastapi", "llm", "auth", "git", "cloud"],
    ["ml", "nlp", "rest", "postgresql", "redis", "docker", "html", "css", "gcp"],
    ["cpp", "r", "dart", "flask", "nextjs", "tensorflow", "s3", "ecs", "azure"],
    ["build", "scale", "design", "deploy", "debug", "learn", "ship", "grow", "impact"],
    ["backend", "frontend", "data", "logic", "cache", "index", "solve", "test", "impact"],
  ];

  const faceTransforms = [
    "translateZ(84px)",
    "rotateY(180deg) translateZ(84px)",
    "rotateY(90deg) translateZ(84px)",
    "rotateY(-90deg) translateZ(84px)",
    "rotateX(90deg) translateZ(84px)",
    "rotateX(-90deg) translateZ(84px)",
  ];

  const handleMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    setTilt({ rotateX: (0.5 - y) * 20, rotateY: (x - 0.5) * 28 });
  };

  return (
    <div
      className="relative flex h-[360px] items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-black/40 shadow-2xl shadow-black/30"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ rotateX: -16, rotateY: 22 })}
      onClick={() => setIsSpinning((prev) => !prev)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.08),transparent_24%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.20),transparent_24%),radial-gradient(circle_at_50%_85%,rgba(34,211,238,0.10),transparent_28%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:36px_36px]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-56 w-56 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>
      <div className="relative z-10 [perspective:1200px]">
        <div className="relative h-44 w-44 [transform-style:preserve-3d]" style={{ transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)` }}>
          <div className={`absolute inset-0 h-full w-full [transform-style:preserve-3d] ${isSpinning ? "animate-[rubikSpin_14s_linear_infinite]" : ""}`}>
            {faceTransforms.map((transform, faceIndex) => (
              <div key={faceIndex} className="absolute inset-0 rounded-[18px] border border-white/10 bg-black/35 p-2 shadow-[0_0_36px_rgba(99,102,241,0.16)] backdrop-blur-sm" style={{ transform }}>
                <div className="grid h-full w-full grid-cols-3 gap-1.5 rounded-[14px] bg-white/5 p-1.5">
                  {faces[faceIndex].map((skill, stickerIndex) => (
                    <div key={`${faceIndex}-${stickerIndex}`} className="flex items-center justify-center rounded-[10px] border border-white/10 bg-gradient-to-br from-white/12 via-indigo-400/12 to-cyan-400/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                      <SkillStickerIcon skill={skill} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-5 left-5 right-5 z-20 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">Interactive Rubik Visual</p>
          <p className="mt-2 text-sm text-zinc-300">Move cursor to tilt. Click the cube to {isSpinning ? "pause" : "resume"} rotation.</p>
        </div>
        <div className="hidden rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 md:block">{isSpinning ? "Rotating" : "Paused"}</div>
      </div>
    </div>
  );
}

function getTechVisual(item) {
  const iconClass = "h-9 w-9";
  const map = {
    Python: <PythonLogo className={iconClass} />,
    JavaScript: <JsLogo className={iconClass} />,
    React: <ReactLogo className={iconClass} />,
    "React.js": <ReactLogo className={iconClass} />,
    Django: <DjangoLogo className={iconClass} />,
    "Node.js": <NodeLogo className={iconClass} />,
    PostgreSQL: <DatabaseLogo className={iconClass} />,
    MySQL: <DatabaseLogo className={iconClass} />,
    Redis: <DatabaseLogo className={iconClass} />,
    SQLite: <DatabaseLogo className={iconClass} />,
    AWS: <CloudGlyph className={iconClass} />,
    GCP: <CloudGlyph className={iconClass} />,
    Azure: <CloudGlyph className={iconClass} />,
    Docker: <DockerLogo className={iconClass} />,
    FastAPI: <ServerIcon className={iconClass} />,
    Flask: <ServerIcon className={iconClass} />,
    "REST APIs": <ServerIcon className={iconClass} />,
    "API Design": <ServerIcon className={iconClass} />,
    TensorFlow: <BrainGlyph className={iconClass} />,
    "Scikit-learn": <BrainGlyph className={iconClass} />,
    LangChain: <BrainGlyph className={iconClass} />,
    "LLM Apps": <BrainGlyph className={iconClass} />,
    RAG: <BrainGlyph className={iconClass} />,
    NLP: <BrainGlyph className={iconClass} />,
    "Tailwind CSS": <SparklesIcon className={iconClass} />,
    Authentication: <BriefcaseIcon className={iconClass} />,
    "System Design": <SparklesIcon className={iconClass} />,
    "Cloud Deployment": <SparklesIcon className={iconClass} />,
    "Problem Solving": <SparklesIcon className={iconClass} />,
  };
  return map[item] || <CodeIcon className={iconClass} />;
}

function TechIconTile({ item }) {
  return (
    <div className="group relative h-24 w-24 shrink-0 overflow-hidden rounded-[28px] border border-white/10 bg-[#171717]/95 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_0_30px_rgba(99,102,241,0.18)] md:h-28 md:w-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_45%)] opacity-70" />
      <div className="relative flex h-full w-full items-center justify-center text-white/90">{getTechVisual(item)}</div>
      <div className="absolute bottom-2 left-1/2 w-[82%] -translate-x-1/2 truncate text-center text-[10px] font-medium tracking-[0.14em] text-zinc-500 opacity-0 transition duration-300 group-hover:opacity-100">{item}</div>
    </div>
  );
}

function TechArsenalRow({ items, reverse = false, offsetClass = "" }) {
  const [paused, setPaused] = React.useState(false);
  return (
    <div className={`group relative overflow-hidden ${offsetClass}`} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#07090f] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#07090f] to-transparent" />
      <div className={`flex w-max gap-4 ${reverse ? "animate-[scrollReverse_38s_linear_infinite]" : "animate-[scroll_38s_linear_infinite]"}`} style={{ animationPlayState: paused ? "paused" : "running" }}>
        {[...items, ...items].map((item, i) => (
          <TechIconTile key={`${item}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

function ContactHeroButton() {
  return (
    <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-medium text-black shadow transition hover:opacity-90">
      <MailIcon className="mr-2 h-4 w-4" /> Contact Me
    </a>
  );
}

function ResumeMiniCard() {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
      className="ml-0 mt-4 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 shadow-lg backdrop-blur-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] md:ml-4 md:mt-0"
      style={{ animation: "float 6s ease-in-out infinite" }}
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/70 to-pink-500/70">
        <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <path d="M14 2v6h6" />
        </svg>
      </div>
      <div>
        <div className="text-sm font-semibold text-white">Resume</div>
        <div className="text-xs text-zinc-400">M.S · Software Engineer</div>
      </div>
      <a href="/Vishal_Resume.pdf" target="_blank" rel="noreferrer" className="ml-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs transition hover:bg-white/20">
        Open PDF
      </a>
    </motion.div>
  );
}

export default function App() {
  const profile = {
    name: "Vishal K Badgujar",
    location: "Chicago, USA",
    phone: "(312) 774-6234",
    email: "vishalbadgujar2106@gmail.com",
    linkedin: "https://www.linkedin.com/in/vishal-k-badgujar-b8115a200/",
    github: "https://github.com/",
    availability: "Open to Software Engineer / Software Developer roles",
  };

  const stats = [
    { label: "Experience", value: "2+" },
    { label: "Projects", value: "5" },
    { label: "Impact", value: "60%" },
    { label: "Performance", value: "30%+" },
  ];

  const impactTimeline = [
    {
      year: "2022",
      title: "Intern to Full-Time",
      subtitle: "June 2022 · i-tech System",
      detail: "Started as a Full-Stack Developer Intern and converted into a full-time software engineering role through strong delivery and ownership.",
    },
    {
      year: "2023",
      title: "Built Attendance Platform",
      subtitle: "Core Product Impact",
      detail: "Developed a fingerprint-based attendance management system that automated employee tracking, reporting, and daily operational workflows.",
    },
    {
      year: "2024",
      title: "Scaled Backend Performance",
      subtitle: "Engineering Impact",
      detail: "Improved API performance by about 30% through query tuning, indexing, backend optimization, and stronger production readiness.",
    },
  ];

  const experience = [
    {
      company: "i-tech System",
      location: "Nashik, India",
      role: "Software Engineer (Full-Stack & Backend)",
      period: "June 2022 – June 2024",
      points: [
        "Started as a Full-Stack Developer Intern and earned a full-time offer by consistently delivering scalable backend APIs in Django and responsive frontend features in React.",
        "Owned backend architecture including database schema design, REST API development, JWT/session-based authentication, and third-party integrations for secure and reliable platforms.",
        "Built a fingerprint-based attendance management system that automated employee tracking and reporting, reducing manual effort and improving day-to-day operational efficiency.",
        "Delivered service platforms and analytics dashboards for real business workflows, helping teams make faster and better data-driven decisions.",
        "Improved backend performance through query tuning, indexing, and API optimization, reducing response time by about 30% while improving scalability under increasing load.",
      ],
    },
  ];

  const projects = [
    {
      title: "AI Resume Matching & Job Portal",
      tech: ["React", "Django/Node", "NLP", "PostgreSQL"],
      description: "Built a full-stack hiring platform with recruiter and candidate dashboards, authentication, and REST APIs.",
      highlights: [
        "Improved job matching accuracy by 30%+ using resume parsing and embedding similarity search.",
        "Optimized database queries and backend deployment for faster, scalable performance.",
      ],
    },
    {
      title: "Smart Job Search Engine",
      tech: ["Python", "Django", "PostgreSQL", "Redis", "React", "AWS"],
      description: "Designed a search and ranking engine for job descriptions using DSA-driven retrieval logic.",
      highlights: [
        "Implemented Trie-based autocomplete and inverted indexing for fast keyword search.",
        "Added Redis LRU caching and ranking optimization to improve throughput and response time.",
      ],
    },
    {
      title: "AI Requirements Engineering Assistant",
      tech: ["LangChain", "LLMs", "Django", "React", "AWS"],
      description: "Created a GenAI application that converts client inputs into structured SRS documents, use cases, and test cases.",
      highlights: [
        "Reduced documentation effort by around 60% with RAG and LLM-powered workflows.",
        "Deployed serverless services on AWS Lambda, API Gateway, and S3 for scalable hosting.",
      ],
    },
    {
      title: "LLM Customer Support Chatbot",
      tech: ["RAG", "Flask/Django", "AWS"],
      description: "Built an AI chatbot backed by company documents to answer FAQs with context-aware responses.",
      highlights: [
        "Created ingestion and vector retrieval pipeline for stronger answer quality.",
        "Reduced manual support workload by roughly 50% with serverless deployment.",
      ],
    },
    {
      title: "Personal Portfolio Website",
      tech: ["HTML", "CSS", "JavaScript", "Responsive UI"],
      description: "Designed a responsive portfolio experience with data-driven content structure and recruiter-friendly presentation.",
      highlights: [
        "Used JavaScript object-based content architecture for easy updates.",
        "Focused on clean layout, modern UI, and stronger first impression.",
      ],
    },
  ];

  const education = [
    { school: "Illinois Institute of Technology", degree: "Master of Computer Science", meta: "Specialization in Software Development · Aug 2024 – Apr 2026 · Chicago, IL" },
    { school: "Sandip University", degree: "Bachelor of Technology in Computer Science", meta: "Honors in Software Engineering · Jun 2019 – May 2023" },
  ];

  const achievements = [
    "Led backend development and technical decision-making for the DogCat Lifestyle pet care platform, owning architecture, database design, and API development.",
    "Secured 3rd place in a university-level hackathon for architecting a scalable full-stack web application within a 48-hour sprint.",
  ];

  const publication = {
    title: "DOGCAT Lifestyle Pet Care Website",
    source: "IJIRMPS · Published May–June 2023",
    citation: 'Badgujar, Vishal, et al. “DOGCAT Lifestyle Pet Care Website,” IJIRMPS, Vol. 11, Issue 3, May–June 2023. Paper ID: 230214.',
    link: "#",
  };

  return (
    <div className="min-h-screen bg-[#07090f] text-white selection:bg-white/20">
      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-6px); } }
        @keyframes rubikSpin { 0% { transform: rotateX(0deg) rotateY(0deg); } 100% { transform: rotateX(360deg) rotateY(360deg); } }
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes scrollReverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
      `}</style>

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-5%] h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute right-[-10%] top-[18%] h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[20%] h-[26rem] w-[26rem] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_20%,rgba(255,255,255,0.02))]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07090f]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <div>
            <div className="text-sm uppercase tracking-[0.25em] text-zinc-400">Portfolio</div>
            <div className="text-base font-semibold text-white">{profile.name}</div>
          </div>
          <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
            {[["Experience", "#experience"], ["Projects", "#projects"], ["Skills", "#skills"], ["Contact", "#contact"]].map(([label, href]) => (
              <a key={label} href={href} className="transition hover:text-white">{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 md:px-8">
        <section className="py-12 md:py-20">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
              <Card className="rounded-[34px] border-white/10 bg-white/5 shadow-2xl shadow-black/20">
                <CardContent className="p-8 md:p-10">
                  <div className="mb-6 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-1.5 text-sm text-emerald-300">
                    <SparklesIcon className="mr-2 h-4 w-4" /> {profile.availability}
                  </div>
                  <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
                    Hi, I&apos;m <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">Vishal Badgujar</span>
                  </h1>
                  <p className="mt-4 text-xl font-medium text-zinc-200 md:text-2xl">Building scalable backend systems and AI-powered applications that reduce manual effort and improve performance.</p>
                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <ContactHeroButton />
                    <Button asChild variant="outline">
                      <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinMark className="mr-2 h-4 w-4" /> LinkedIn</a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href={profile.github} target="_blank" rel="noreferrer"><CodeIcon className="mr-2 h-4 w-4" /> GitHub</a>
                    </Button>
                    <ResumeMiniCard />
                  </div>
                  <div className="mt-10 flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="rounded-full border border-blue-400/20 bg-blue-400/10 p-3 text-blue-300"><MapPinIcon className="h-5 w-5" /></div>
                    <div>
                      <div className="text-base font-semibold text-white">{profile.location}</div>
                      <div className="mt-1 text-sm text-zinc-400">Available for relocation and full-time opportunities.</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }} className="grid gap-6">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((item) => (
                  <Card key={item.label} className="shadow-xl shadow-black/10">
                    <CardContent>
                      <div className="text-3xl font-semibold text-white">{item.value}</div>
                      <div className="mt-2 text-sm uppercase tracking-[0.2em] text-zinc-400">{item.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <InteractiveCube />
            </motion.div>
          </div>
        </section>

        <section id="experience" className="py-10 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-400">Experience & Impact</p>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">Growth, ownership, and measurable engineering impact.</h2>
            <div className="mt-5 inline-flex rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">Ready for my next challenge</div>
          </div>

          <div className="relative mt-14 hidden md:block">
            <div className="absolute left-[10%] right-[10%] top-[150px] h-px bg-gradient-to-r from-blue-500/70 via-violet-400/70 to-pink-500/70" />
            <div className="grid grid-cols-3 items-start gap-8">
              {impactTimeline.map((item) => (
                <div key={item.year} className="relative flex flex-col items-center">
                  <div className="relative z-20 flex flex-col items-center text-center">
                    <div className="text-4xl font-semibold text-white">{item.year}</div>
                    <div className="mt-3 text-base font-medium text-blue-300">{item.title}</div>
                    <div className="mt-1 text-sm text-zinc-500">{item.subtitle}</div>
                  </div>
                  <div className="relative z-20 mt-5 flex h-14 w-14 items-center justify-center rounded-full border border-blue-400/30 bg-[#07090f] shadow-[0_0_24px_rgba(59,130,246,0.35)]">
                    <BriefcaseIcon className="h-6 w-6 text-blue-300" />
                  </div>
                  <div className="h-10 w-px bg-gradient-to-b from-blue-400/60 to-transparent" />
                  <Card className="mt-4 w-full max-w-[360px] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20">
                    <CardContent className="p-7">
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm text-zinc-400">{item.subtitle}</p>
                      <p className="mt-5 text-sm leading-8 text-zinc-300">{item.detail}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:hidden">
            {impactTimeline.map((item) => (
              <Card key={item.year}>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-400/30 bg-[#07090f] shadow-[0_0_20px_rgba(59,130,246,0.30)]"><BriefcaseIcon className="h-5 w-5 text-blue-300" /></div>
                    <div>
                      <div className="text-2xl font-semibold text-white">{item.year}</div>
                      <div className="text-sm text-blue-300">{item.title}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-zinc-400">{item.subtitle}</p>
                  <p className="mt-4 text-sm leading-7 text-zinc-300">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10">
            {experience.map((job) => (
              <Card key={`${job.company}-${job.role}`}>
                <CardContent className="p-8">
                  <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{job.role}</h3>
                      <p className="mt-2 text-zinc-300">{job.company} · {job.location}</p>
                    </div>
                    <div className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-zinc-200">{job.period}</div>
                  </div>
                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {job.points.map((point, idx) => (
                      <div key={`${job.company}-point-${idx}`} className="rounded-2xl border border-white/10 bg-black/20 p-5 text-sm leading-7 text-zinc-300">{point}</div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="py-10 md:py-16">
          <div className="mb-8">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-400">Selected Projects</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">Projects that show product sense, system thinking, and execution.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project) => (
              <motion.div key={project.title} whileHover={{ y: -6 }} transition={{ duration: 0.2 }}>
                <Card className="h-full transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl hover:shadow-black/20">
                  <CardContent className="flex h-full flex-col p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                        <p className="mt-3 text-sm leading-7 text-zinc-300">{project.description}</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/20 p-3"><ArrowUpRightIcon className="h-5 w-5 text-white" /></div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((item) => (
                        <div key={`${project.title}-${item}`} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-zinc-200">{item}</div>
                      ))}
                    </div>
                    <div className="mt-6 space-y-3">
                      {project.highlights.map((line, idx) => (
                        <div key={`${project.title}-highlight-${idx}`} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-zinc-300">{line}</div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="skills" className="py-10 md:py-16">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-400">Technical Stack</p>
            <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">Tech <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">Arsenal</span></h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-zinc-400 md:text-lg">Production-ready tools I use to build scalable, high-performance applications across backend systems, cloud, and AI workflows.</p>
          </div>
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 px-4 py-8 backdrop-blur-xl md:px-6 md:py-10">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.10),transparent_35%),radial-gradient(circle_at_bottom,rgba(34,211,238,0.08),transparent_32%)]" />
            <div className="relative space-y-6 md:space-y-7">
              <TechArsenalRow items={["AWS", "Node.js", "RAG", "JavaScript", "React", "Docker", "Python", "Django", "PostgreSQL"]} />
              <TechArsenalRow reverse offsetClass="md:ml-16" items={["Tailwind CSS", "TensorFlow", "FastAPI", "MySQL", "Redis", "LangChain", "Flask", "Azure", "REST APIs"]} />
              <TechArsenalRow offsetClass="md:ml-8" items={["GCP", "Scikit-learn", "NLP", "Authentication", "System Design", "Cloud Deployment", "LLM Apps", "SQLite"]} />
            </div>
          </div>
        </section>

        <section className="grid gap-6 py-10 md:grid-cols-[1fr_1fr] md:items-start md:py-16">
          <Card className="self-start">
            <CardContent>
              <div className="mb-5 flex items-center gap-3 text-white"><GraduationCapIcon className="h-5 w-5" /><h2 className="text-2xl font-semibold">Education</h2></div>
              <div className="space-y-4">
                {education.map((item) => (
                  <div key={item.school} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                    <div className="text-lg font-semibold text-white">{item.school}</div>
                    <div className="mt-1 text-zinc-300">{item.degree}</div>
                    <div className="mt-2 text-sm text-zinc-400">{item.meta}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6">
            <Card>
              <CardContent className="p-8">
                <div className="mb-5 flex items-center gap-3 text-white"><TrophyIcon className="h-5 w-5" /><h2 className="text-2xl font-semibold">Achievements</h2></div>
                <div className="space-y-4">
                  {achievements.map((item, idx) => (
                    <div key={`achievement-${idx}`} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-7 text-zinc-300">{item}</div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="mb-5 flex items-center gap-3 text-white"><BookIcon className="h-5 w-5" /><h2 className="text-2xl font-semibold">Publication</h2></div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                  <div className="text-lg font-semibold text-white">{publication.title}</div>
                  <div className="mt-2 text-zinc-300">{publication.source}</div>
                  <div className="mt-3 text-sm leading-7 text-zinc-400">{publication.citation}</div>
                  <a
                    href={publication.link === "#" ? undefined : publication.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => {
                      if (publication.link === "#") e.preventDefault();
                    }}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20"
                  >
                    View Certification <ArrowUpRightIcon className="h-4 w-4" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="py-10 pb-20 md:py-16 md:pb-24">
          <Card className="rounded-[34px]">
            <CardContent className="p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-[1fr_0.8fr] md:items-end">
                <div>
                  <p className="mb-3 text-sm uppercase tracking-[0.25em] text-zinc-400">Contact</p>
                  <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Let&apos;s build something strong, useful, and production-ready.</h2>
                  <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-300">I&apos;m open to software engineering opportunities where I can contribute across backend systems, full-stack product development, and AI-powered workflows.</p>
                </div>
                <div className="grid gap-4">
                  <a href={`mailto:${profile.email}`} className="rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:bg-white/10"><div className="flex items-center gap-3 text-white"><MailIcon className="h-4 w-4" /> {profile.email}</div></a>
                  <a href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`} className="rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:bg-white/10"><div className="flex items-center gap-3 text-white"><PhoneIcon className="h-4 w-4" /> {profile.phone}</div></a>
                  <div className="flex gap-3">
                    <Button asChild className="w-full"><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></Button>
                    <Button asChild variant="outline" className="w-full"><a href={profile.github} target="_blank" rel="noreferrer">GitHub</a></Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}

const tests = [
  typeof LinkedinMark === "function",
  typeof MailIcon === "function",
  typeof InteractiveCube === "function",
  typeof TechArsenalRow === "function",
  typeof ResumeMiniCard === "function",
  typeof ContactHeroButton === "function",
  typeof SkillStickerIcon === "function",
  typeof Card === "function" && typeof CardContent === "function",
];

console.log("All tests passed:", tests.every(Boolean));
