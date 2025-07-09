export default function Modal({ isOpen, setIsOpen, imageUri, name, date, location, description, numberOfAttendees }) {
    if (!isOpen) {
        return null;
    }

    const formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date(date));

    return (
        <div>
            <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/40 z-50">
                <div className="relative flex flex-col items-center bg-white rounded-lg w-150 h-115 shadow-lg shadow-gray-700">
                    <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 mr-1 text-xl font-semibold text-white bg-black/30 w-8 cursor-pointer">x</button>
                    <img
                        src={imageUri}
                        alt=""
                        className="w-150 h-60 object-cover rounded-t-sm"
                    />

                    <h3 className="text-2xl font-bold mt-3 mb-1 text-center">{name}</h3>

                    <p className="text-md font-semibold text-center" >{formattedDate} | {location}</p>

                    <p className="text-md font-semibold text-center" >{numberOfAttendees} Attendees</p>

                    <p className="text-sm font-thin m-3 mb-5 text-center">{description}</p>

                    {/* <div className="flex justify-center gap-3">
                        <button className="bg-white border border-gray-400 border-2 rounded-md text-gray-400 w-40 p-2 mr-2 hover:border-gray-600 cursor-pointer hover:text-gray-600">I&apos;m Not Going</button>

                        <button className="bg-[#006e99] border border-[#004F6E] text-white border-2 rounded-md w-40 p-2 mr-1 hover:bg-[#004F6E] cursor-pointer hover:text-white">I&apos;m Going!</button>
                    </div> */}
                </div>
            </div>
        </div>

    )
}
