export default function Spinner() {
    return (
        <div className="flex flex-col items-center justify-center space-y-2 mt-10">
      <div className="border-t-4 border-blue-400 border-solid rounded-full h-20 w-20 animate-spin"></div>
      <p className="text-lg text-gray-600">✨ Loading events... ✨</p>
    </div>
    );
}
