use('app');

db.events.drop();
db.createCollection("events");

db.events.insertMany([
    {
        name: "EPCOT International Festival of the Arts",
        date: new Date("2025-01-17T09:00:00"),
        location: "EPCOT",
        shortDescription: "Tap in to your creative side at this dazzling festival.",
        description: "Tap in to your creative side at this dazzling festival. Discover inspiring artwork and even participate in some artistry yourself by creating some chalk art or contributing to a larger-than-life paint by numbers mural. Make sure to partake in some delicious and colorful cuisine during your visit as well!",
        numberOfAttendees: 1400,
        imageUri: "/images/festivalarts.png",
        imageSource: "https://disneyworld.disney.go.com/events-tours/epcot/epcot-international-festival-of-the-arts/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "Sweethearts' Nite",
        date: new Date("2025-02-14T20:00:00"),
        location: "Magic Kingdom",
        shortDescription: "Dance, dine, and create magical memories with your favorite person in the most romantic setting imaginable.",
        description: "Make it a night to remember! Join us for Disneyland After Dark: Sweethearts’ Nite and celebrate love under the stars. Dance, dine, and create magical memories with your favorite person in the most romantic setting imaginable.",
        numberOfAttendees: 500,
        imageUri: "/images/sweethearts.png",
        imageSource: "https://disneyland.disney.go.com/events-tours/after-dark/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "EPCOT Flower and Garden Festival",
        date: new Date("2025-03-05T09:00:00"),
        location: "EPCOT",
        shortDescription: "Explore stunning gardens and unforgettable displays inspired by some favorite Disney Characters and moments at this annual event.",
        description: "Explore stunning gardens and unforgettable displays inspired by some favorite Disney Characters and moments at this annual event. From world-renowned musical acts at the Garden Rocks Concert Series to deliciously fresh cuisine from outdoor kitchens, there is something for every sense to enjoy at the EPCOT International Flower & Garden Festival.",
        numberOfAttendees: 1500,
        imageUri: "/images/flowergarden.png",
        imageSource: "https://disneyworld.disney.go.com/events-tours/epcot/epcot-international-flower-and-garden-festival/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "90s Nite",
        date: new Date("2025-03-10T21:00:00"),
        location: "Magic Kingdom",
        shortDescription: "Disneyland After Dark: 90s Nite is the ultimate throwback experience you don’t want to miss!",
        description: "Ready to party like it’s the 90s? Disneyland After Dark: 90s Nite is the ultimate throwback experience you don’t want to miss! Relive the music, fashion, and iconic characters of your favorite decade with lower wait times on select attractions.",
        numberOfAttendees: 450,
        imageUri: "/images/nineties.png",
        imageSource: "https://disneyland.disney.go.com/events-tours/after-dark/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "runDisney Springtime Surprise",
        date: new Date("2025-03-26T08:00:00"),
        location: "EPCOT",
        shortDescription: "Lace up and join in on the runDisney Springtime Surprise!",
        description: "Lace up and join in on the runDisney Springtime Surprise! You’ll earn medals and a sense of accomplishment from the heroic effort exerted.",
        numberOfAttendees: 300,
        imageUri: "/images/runspringtime.png",
        imageSource: "https://www.tripster.com/travelguide/event/rundisney-springtime-surprise-weekend/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "After Hours at Disney's Hollywood Studios",
        date: new Date("2025-04-23T21:00:00"),
        location: "Hollywood Studios",
        shortDescription: "From shorter wait times for attractions, to delicious snacks, there is so much to enjoy at night at Disney’s Hollywood Studios!",
        description: "Enjoy fun after sundown with special event admission to Walt Disney World® Resort. From shorter wait times for attractions, to delicious snacks, there is so much to enjoy at night at Disney’s Hollywood Studios!",
        imageUri: "/images/hollywoodafterhours.png",
        imageSource: "https://disneyworld.disney.go.com/events-tours/hollywood-studios/hollywood-studios-after-hours/",
        numberOfAttendees: 700,
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "Star Wars Nite",
        date: new Date("2025-05-04T20:00:00"),
        location: "Hollywood Studios",
        shortDescription: "Join this galactic celebration just in time for Star Wars Day, when the galaxy far, far away comes to life!",
        description: "Join this galactic celebration just in time for Star Wars Day, when the galaxy far, far away comes to life! Immerse yourself in thrilling Star Wars-themed attractions, meet some iconic Characters and enjoy special surprises that will transport you to another universe. May the Force be with you!",
        numberOfAttendees: 400,
        imageUri: "/images/starwarsnite.png",
        imageSource: "https://disneyland.disney.go.com/events-tours/disneyland/after-dark-star-wars-nite/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "Disney Princess Half Marathon",
        date: new Date("2025-05-24T07:00:00"),
        location: "Magic Kingdom",
        shortDescription: "Rise up to the challenge of your choosing with the Disney Princess Half Marathon.",
        description: "Rise up to the challenge of your choosing with the Disney Princess Half Marathon. The fairest of them all can take on the Disney Fairytale Challenge!",
        numberOfAttendees: 450,
        imageUri: "/images/runprincess.png",
        imageSource: "https://disneyparksblog.com/wdw/regal-rundisney-medals-with-a-touch-of-wicked-for-the-2025-disney-princess-half-marathon-weekend/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "Disney H2O Glow After Hours",
        date: new Date("2025-06-20T18:00:00"),
        location: "Water Park",
        shortDescription: "Guests will get to experience Disney’s Typhoon Lagoon Water Park in a whole new light while enjoying lower wait times at some favorite attractions!",
        description: "Whether you want to lounge at the Beachcomber Shack or boogie at a DJ dance party, this After Hours event has you covered. Ticketed entry gets you delicious treats and refreshing beverages. Guests will get to experience Disney’s Typhoon Lagoon Water Park in a whole new light while enjoying lower wait times at some favorite attractions!",
        numberOfAttendees: 370,
        imageUri: "/images/h2o.png",
        imageSource: "https://disneyworld.disney.go.com/events-tours/typhoon-lagoon/h2o-glow-after-hours/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "Disney Springs Flavors of Florida",
        date: new Date("2025-07-23T18:00:00"),
        location: "Disney Springs",
        shortDescription: "Get a taste of the Sunshine State and delight in local flavors — only at Disney Springs!",
        description: "Get a taste of the Sunshine State and delight in local flavors — only at Disney Springs! Discover delicious Florida-inspired menu items, specially curated pairing events, culinary demonstrations from renowned chefs and more!",
        numberOfAttendees: 700,
        imageUri: "/images/flavorsofflorida.png",
        imageSource: "https://www.disneysprings.com/flavors-of-florida/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "Dole Whip Day",
        date: new Date("2025-08-01T09:00:00"),
        location: "Animal Kingdom",
        shortDescription: "Savor the sweetness of summer with an iconic, tropical treat made more fun with exclusive flavors, fun toppings and delicious dessert variations!",
        description: "Savor the sweetness of summer with an iconic, tropical treat made more fun with exclusive flavors, fun toppings and delicious dessert variations, like the pineapple upside-down cake topped with Dole whip! It’s the perfect day to beat the heat with a refreshing swirl of pineapple goodness!",
        numberOfAttendees: 500,
        imageUri: "/images/dolewhip.png",
        imageSource: "https://disneyworld.disney.go.com/dining/magic-kingdom/aloha-isle/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "EPCOT International Food and Wine Festival",
        date: new Date("2025-09-01T09:00:00"),
        location: "EPCOT",
        shortDescription: "Embark on a tasty journey of hearty food and drink across six different continents.",
        description: "The culinary adventure of the EPCOT International Food and Wine Festival kicks off in the fall! Embark on a tasty journey of hearty food and drink across six different continents.",
        numberOfAttendees: 1100,
        imageUri: "/images/foodwine.png",
        imageSource: "https://disneyworld.disney.go.com/events-tours/epcot/epcot-international-food-and-wine-festival/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "Disney Wine & Dine Half Marathon",
        date: new Date("2025-10-23T07:00:00"),
        location: "EPCOT",
        shortDescription: "This marathon weekend celebrates iconic Disney chefs and the incredible culinary delights they whip up!",
        description: "This marathon weekend celebrates iconic Disney chefs and the incredible culinary delights they whip up!",
        numberOfAttendees: 400,
        imageUri: "/images/runwinedine.png",
        imageSource: "https://disneyparksblog.com/rundisney/chefs-kiss-first-look-at-2024-disney-wine-dine-half-marathon-weekend-medals/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "Oogie Boogie Bash",
        date: new Date("2025-10-30T07:00:00"),
        location: "EPCOT",
        shortDescription: "Don your costume and dance the night away at the Oogie Boogie Bash – A Disney Halloween Party.",
        description: "Don your costume and dance the night away at the Oogie Boogie Bash – A Disney Halloween Party. This after-hours event is a frightfully fun, family-friendly bash that you won’t want to miss – but ticket availability is limited, so don’t delay on securing your admission.",
        numberOfAttendees: 1000,
        imageUri: "/images/oogieboogie.png",
        imageSource: "https://disneyland.disney.go.com/events-tours/disney-california-adventure/oogie-boogie-bash-halloween-party/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "Mickey's Not-So-Scary Halloween Party",
        date: new Date("2025-10-31T07:00:00"),
        location: "Magic Kingdom",
        shortDescription: "Enjoy trick-or-treating, fireworks, and more at Mickey’s Not-So-Scary Halloween Party!",
        description: "Enjoy trick-or-treating, fireworks, and more at Mickey’s Not-So-Scary Halloween Party! Watch a ghoulish parade and be sure and try some delicious cookies and treats.",
        numberOfAttendees: 1100,
        imageUri: "/images/halloween.png",
        imageSource: "https://disneyworld.disney.go.com/events-tours/magic-kingdom/mickeys-not-so-scary-halloween-party/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "Blizzard Beach 30th Anniversary",
        date: new Date("2025-11-01T11:00:00"),
        location: "Water Park",
        shortDescription: "Your whole family or group can enjoy frosty fun at Blizzard Beach Water Park when it reopens this winter!",
        description: "Your whole family or group can enjoy frosty fun at Blizzard Beach Water Park when it reopens this winter!",
        numberOfAttendees: 700,
        imageUri: "/images/blizzardbeach.png",
        imageSource: "https://disneyparksblog.com/wdw/celebrating-30-years-of-frosted-fun-at-disneys-blizzard-beach/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "Holidays at Disney’s Animal Kingdom",
        date: new Date("2025-11-20T09:00:00"),
        location: "Animal Kingdom",
        shortDescription: "Make sure to stop by Animal Kingdom during the holiday season for a wildly good time!",
        description: "Make sure to stop by Animal Kingdom during the holiday season for a wildly good time! The Tree of Life will have a holiday-themed projection show that you won’t want to miss! You’ll also want to be sure to stop and see Santa while he’s at the park. And there’s nothing quite like the Merry Menagerie, in which you can interact with life-size animal puppets that roam Discovery Island. ",
        numberOfAttendees: 800,
        imageUri: "/images/holidaysak.png",
        imageSource: "https://disneyworld.disney.go.com/events-tours/holidays/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "EPCOT International Festival of the Holidays",
        date: new Date("2025-11-25T09:00:00"),
        location: "EPCOT",
        shortDescription: "Celebrate the holidays as they are enjoyed around the world at this internationally-inspired event!",
        description: "Celebrate the holidays as they are enjoyed around the world at this internationally-inspired event! From meeting Santa Claus at the Odyssey Pavilion to joining a joyous tribute to Kwanzaa through JOYFUL! A Celebration of the Season, your itinerary will be packed! You’ll also want to be sure to experience the story of Christmas via the Candlelight Processional, as well as savor some seasonal flavors at the Holiday Kitchens.",
        numberOfAttendees: 1200,
        imageUri: "/images/holidaysepcot.png",
        imageSource: "https://disneyworld.disney.go.com/events-tours/holidays/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "Disney Springs Christmas Tree Stroll",
        date: new Date("2025-12-01T18:00:00"),
        location: "Disney Springs",
        shortDescription: "Take a joyous jaunt to see elegantly decorated Christmas trees, holiday displays and twinkling lights!",
        description: "Take a joyous jaunt to see elegantly decorated Christmas trees, holiday displays and twinkling lights!",
        numberOfAttendees: 600,
        imageUri: "/images/christmastree.png",
        imageSource: "https://www.disneysprings.com/entertainment/christmas-tree-stroll/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "Jollywood Nights at Disney's Hollywood Studios",
        date: new Date("2025-12-05T20:00:00"),
        location: "Hollywood Studios",
        shortDescription: "Kick off your most wonderful season with a 5-hour event where Hollywood glamor meets holiday cheer!",
        description: "Kick off your most wonderful season with a 5-hour event where Hollywood glamor meets holiday cheer! Try a Wondermade sweet treat (included with event ticket), say hello to the Mandalorian at Star Wars: Galaxy’s Edge® and check out some exclusive event merchandise while you celebrate the holiday season.",
        numberOfAttendees: 500,
        imageUri: "/images/jollywood.png",
        imageSource: "https://disneyworld.disney.go.com/events-tours/hollywood-studios/jollywood-nights/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
    {
        name: "Mickey’s Very Merry Christmas Party",
        date: new Date("2025-12-25T20:00:00"),
        location: "Magic Kingdom",
        shortDescription: "This festive event includes seasonal entertainment, a charming atmosphere, sweet seasonal treats and more.",
        description: "This festive event includes seasonal entertainment, a charming atmosphere, sweet seasonal treats and more. Make sure to set aside plenty of time to enjoy Mickey’s Once Upon a Christmas Parade and Minnie’s Wonderful Christmastime Fireworks Show!",
        numberOfAttendees: 1400,
        imageUri: "/images/mickeychristmas.png",
        imageSource: "https://disneyworld.disney.go.com/events-tours/holidays/",
        source: "https://disneyrewards.com/blog/travel-parks/disney-2025-special-events/"
    },
]);

db.events.createIndex({
    name: 'text',
    description: 'text'
  });

db.events.find();
