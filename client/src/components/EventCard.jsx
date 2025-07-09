import axios from 'axios';
import { useState } from "react";
import Modal from "./Modal";

export default function EventCard({ _id, imageUri, name, date, location, shortDescription, description, numberOfAttendees }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isRSVPed, setIsRSVPed] = useState(false);

    const formattedDate = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(new Date(date));

    const handleRSVPClick = async () => {
        try {
            if (!isRSVPed) {
                console.log("RSVPing");
                await axios.post(`/api/events/${_id}/rsvp`);
                setIsRSVPed(true);
            } else {
                console.log("Canceling RSVP");
                await axios.post(`/api/events/${_id}/cancel-rsvp`);
                setIsRSVPed(false);
            }
        } catch (error) {
            console.error("Error during RSVP:", error);
        }
    };

    return (
        <div
            className="relative flex items-center gap-4 border w-250 h-50 ml-4 mt-5 bg-white">

            <img className="w-70 h-50 object-cover border-y"
                src={imageUri}
                alt=""
            />

            <div className="flex flex-col text-left m-3">

                <button
                    onClick={() => setIsOpen(true)}
                    className="text-3xl font-bold text-left cursor-pointer hover:underline">
                    {name}
                </button>

                <p className="text-md mt-1">{formattedDate} | {location} | {numberOfAttendees} Attendees</p>

                <p className="text-med text-gray-500 italic mt-2 pb-12">{shortDescription}</p>

                {/* <div className="flex gap-3 ml-auto">
                    <button className="bg-white border border-gray-400 border-2 border-spacing-2 rounded-md text-gray-400 w-40 p-2 mr-2 hover:border-gray-600 cursor-pointer hover:text-gray-600">I&apos;m Not Going</button>

                    <button className="bg-[#006e99] border border-[#004F6E] text-white border-2 rounded-md w-40 p-2 mr-1 hover:bg-[#004F6E] cursor-pointer hover:text-white">I&apos;m Going!</button>
                </div> */}

                {/* <div className="absolute bottom-4 right-4 flex gap-3 mt-30">
                    <button className="bg-white border border-gray-400 border-2 rounded-md text-gray-400 w-40 p-2 hover:border-gray-600 cursor-pointer hover:text-gray-600">
                        I&apos;m Not Going
                    </button>

                    <button className="bg-[#006e99] border border-[#004F6E] text-white border-2 rounded-md w-40 p-2 hover:bg-[#004F6E] cursor-pointer hover:text-white">
                        I&apos;m Going!
                    </button>
                </div> */}

                <div className="absolute bottom-4 right-4 flex gap-3 mt-30">
                    <button
                        onClick={handleRSVPClick}
                        className={`border border-2 rounded-md w-40 p-2 font-semibold transition duration-200 ${isRSVPed
                                ? 'bg-red-100 border-red-400 text-red-700 hover:bg-red-200'
                                : 'bg-[#006e99] border-[#004F6E] text-white hover:bg-[#004F6E]'
                            }`}
                    >
                        {isRSVPed ? "I'm Not Going" : "I'm Going!"}
                    </button>
                </div>

                {isOpen && <Modal
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    imageUri={imageUri}
                    name={name}
                    date={formattedDate}
                    location={location}
                    description={description}
                    numberOfAttendees={numberOfAttendees}
                />}
            </div>

        </div>
    )
}
