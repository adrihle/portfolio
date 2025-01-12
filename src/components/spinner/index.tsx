import './style.scss';

interface SpinnerProps {
  baseColor?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  baseColor = 'hsl(223,15%,60%)',
}) => {
  const strokeColor = `hsl(${extractHue(baseColor)}, 20%, 75%)`; 
  const gradientStart = `hsl(${extractHue(baseColor)}, 30%, 90%)`;
  const gradientEnd = `hsl(${extractHue(baseColor)}, 30%, 70%)`;

  return (
    <svg
      role="img"
      aria-label="Mouth and eyes come from 9:00 and rotate clockwise into position, right eye blinks, then all parts rotate and merge into 3:00"
      className="smiley"
      viewBox="0 0 128 128"
      width="128px"
      height="128px"
    >
      <defs>
        <clipPath id="smiley-eyes">
          <circle
            className="smiley__eye1"
            cx="64"
            cy="64"
            r="8"
            transform="rotate(-40,64,64) translate(0,-56)"
          />
          <circle
            className="smiley__eye2"
            cx="64"
            cy="64"
            r="8"
            transform="rotate(40,64,64) translate(0,-56)"
          />
        </clipPath>
        <linearGradient id="smiley-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={gradientStart} />
          <stop offset="100%" stopColor={gradientEnd} />
        </linearGradient>
        <mask id="smiley-mask">
          <rect x="0" y="0" width="128" height="128" fill="url(#smiley-grad)" />
        </mask>
      </defs>
      <g strokeLinecap="round" strokeWidth="12" strokeDasharray="175.93 351.86">
        <g>
          <rect
            fill={baseColor}
            width="128"
            height="64"
            clipPath="url(#smiley-eyes)"
          />
          <g fill="none" stroke={strokeColor}>
            <circle
              className="smiley__mouth1"
              cx="64"
              cy="64"
              r="56"
              transform="rotate(180,64,64)"
            />
            <circle
              className="smiley__mouth2"
              cx="64"
              cy="64"
              r="56"
              transform="rotate(0,64,64)"
            />
          </g>
        </g>
        <g mask="url(#smiley-mask)">
          <rect
            fill={gradientStart}
            width="128"
            height="64"
            clipPath="url(#smiley-eyes)"
          />
          <g fill="none" stroke={gradientEnd}>
            <circle
              className="smiley__mouth1"
              cx="64"
              cy="64"
              r="56"
              transform="rotate(180,64,64)"
            />
            <circle
              className="smiley__mouth2"
              cx="64"
              cy="64"
              r="56"
              transform="rotate(0,64,64)"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export { Spinner };

function extractHue(hsl: string): number {
  const hueMatch = /hsl\((\d+),/.exec(hsl);
  return hueMatch ? parseInt(hueMatch[1], 10) : 223;
}
