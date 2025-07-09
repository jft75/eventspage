export default function ReloadButton({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="px-4 py-2 bg-[#1B478D] text-white font-semibold rounded-lg shadow-md hover:bg-[#15376F]"
      >
        Try Again
      </button>
    );
  }
