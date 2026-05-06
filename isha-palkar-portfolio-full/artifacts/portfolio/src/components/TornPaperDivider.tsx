interface TornPaperDividerProps {
  flip?: boolean;
  color?: string;
  className?: string;
}

export default function TornPaperDivider({ flip = false, color = "#EDE8DC", className = "" }: TornPaperDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
      style={{ lineHeight: 0, marginBottom: flip ? undefined : "-1px", marginTop: flip ? "-1px" : undefined }}
    >
      <svg
        viewBox="0 0 1440 48"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ display: "block", width: "100%", height: 48 }}
      >
        <path
          d={`M0,0 
            L0,22 
            C40,32 80,14 120,24 
            C160,34 200,18 240,26 
            C280,36 320,12 360,22 
            C400,32 440,20 480,28 
            C520,36 560,16 600,24 
            C640,32 680,14 720,22 
            C760,30 800,18 840,26 
            C880,34 920,12 960,20 
            C1000,28 1040,22 1080,30 
            C1120,38 1160,14 1200,22 
            C1240,30 1280,20 1320,28 
            C1360,36 1400,16 1440,24
            L1440,0 Z`}
          fill={color}
        />
      </svg>
    </div>
  );
}
