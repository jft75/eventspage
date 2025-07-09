export default function Filters({ selectedLocation, onLocationClick }) {
    const categories = [
        { label: "EPCOT", value: "epcot" },
        { label: "Magic Kingdom", value: "magic-kingdom" },
        { label: "Hollywood Studios", value: "hollywood-studios" },
        { label: "Animal Kingdom", value: "animal-kingdom" },
        { label: "Disney Springs", value: "disney-springs" },
        { label: "Water Park", value: "water-park" }
      ];

    return (
        <div className="flex flex-col mt-4">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => onLocationClick(category.value)}
              className={`border border-[#1B478D] text-md mb-2 mr-3 p-2 text-center uppercase cursor-pointer transition-all duration-200
                ${selectedLocation === category.value
                  ? 'bg-[#1B478D] text-white'
                  : 'bg-white text-[#1B478D] hover:bg-[#1B478D] hover:text-white'
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      );
}
