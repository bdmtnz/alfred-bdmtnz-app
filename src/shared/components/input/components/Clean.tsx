interface CleanButtonProps {
  onClick: () => void;
  color?: string;
}

const CleanButton: React.FC<CleanButtonProps> = ({ onClick, color }) => {
  return (
    <button
        title="Clear"
        type="button"
        onClick={onClick}
        className="clean-button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke={color ? color : "currentColor"}
        className="size-8">
        <title>Clear</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    </button>
  );
};

export default CleanButton;