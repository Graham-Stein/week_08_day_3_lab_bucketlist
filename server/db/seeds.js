use bucketList;
db.dropDatabase();

db.bucketListItems.insertMany([
  {
    type: "Bungee Jumping",
    image: "../../public/images/Bungee-flying.jpg"
  },
  {
    type: "Swim with Dolphins",
    image: "../../public/images/dolphins.jpg"
  },
  {
    type: "See the Northern lights",
    image: "../../public/images/lights.jpg"
  }
]);
