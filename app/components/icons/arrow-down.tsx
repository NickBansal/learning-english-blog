export const ArrowDown = ({ className = '' }: { className?: string }) => {
  return (
    <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}>
      <g>
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M13 12h7l-8 8-8-8h7V4h2z" />
      </g>
    </svg>
  );
};
