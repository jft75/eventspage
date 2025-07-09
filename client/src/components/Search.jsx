export default function Search({ value, onChange }) {
    return (
        <div className="relative flex items-center mt-5 ml-auto">
            <p className="absolute left-4 text-gray-400 text-xl">🔎</p>
            <input
                type="text"
                placeholder="Search events..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="pl-10 pr-4 py-2 rounded-full w-72 h-10 bg-white placeholder-gray-400 text-black"
            />
        </div>
    );
}
