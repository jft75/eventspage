import { useEffect, useState } from 'react';
import axios from 'axios';
import {useDebounce} from 'use-debounce';

import Filters from './components/Filters'
import EventCard from './components/EventCard';
import Modal from './components/Modal';
import Spinner from './components/Spinner';
import ReloadButton from './components/ReloadButton';
import Search from './components/Search';

export default function Home() {

  const [isLoading, setIsLoading] = useState(false);
  const [dataError, setDataError] = useState();
  const [eventsData, setEventsData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState();
  const [search, setSearch] = useState('');
  const [debouncedSearch] = useDebounce(search, 500);

  function handleLocationClick(location) {
    if (selectedLocation === location) {
      setSelectedLocation(undefined);
    } else {
      setSelectedLocation(location);
    }
  }

  function loadEventsData() {
    setIsLoading(true);
    setDataError(undefined);

    const params = {};
    if(selectedLocation) {params.location = selectedLocation};
    if (debouncedSearch) {params.q = debouncedSearch};

    axios.get('/api/events', {params})
      .then((response) => {
        console.log("Data loaded", response.data);
        setEventsData(response.data);
      })
      .catch((error) => {
        console.error("Error loading data", error);
        setDataError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    loadEventsData();
  }, [selectedLocation, debouncedSearch]);

  const categories = [
    "EPCOT",
    "Magic Kingdom",
    "Hollywood Studios",
    "Animal Kingdom",
    "Disney Springs",
    "Water Park"
  ];

  return (
    <div>
      <Modal />

      {dataError && (
        <div className="flex justify-center items-center h-[80vh] text-center">
          <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg">
            <p className="mb-4 font-semibold">Oops! Something went wrong while loading the events.</p>
            <ReloadButton onClick={loadEventsData}>Try Again</ReloadButton>
          </div>
        </div>
      )}

      {isLoading &&
        <div className="flex items-center justify-center min-h-screen">
          <Spinner />
        </div>
      }

      {
        (!isLoading && !dataError) &&
        <div className="mb-7">
          <header className="max-w-screen bg-[#1B478D]">
            <div className="flex max-w-screen-xl mx-auto gap-8 pt-4 pb-2 text-white">
              <img src="/images/whitewdwlogo.png"
                alt="Walt Disney World logo"
                className="w-60 object-contain"
              // Source:https://logos-world.net/disney-world-logo/
              >
              </img>

              <h1 className="text-4xl uppercase font-semibold ml-5 mr-5 mt-5 mb-5">Events 2025</h1>

              <Search value={search} onChange={setSearch} />

            </div>
          </header>


          <div className="flex justify-center">
            <Filters
              selectedLocation={selectedLocation}
              onLocationClick={handleLocationClick}
              categories={categories}
            />

            <div className="flex flex-col">
              {eventsData.map((item) => (
                <EventCard
                  key={item._id}
                  _id={item._id}
                  imageUri={item.imageUri}
                  name={item.name}
                  shortDescription={item.shortDescription}
                  description={item.description}
                  date={item.date}
                  location={item.location}
                  numberOfAttendees={item.numberOfAttendees}
                />
              ))}
            </div>
          </div>
        </div>
      }
    </div >
  )
}
