import React, { useState } from "react";

const AddMovie = () => {
  const [formData, setFormData] = useState({
    title: "",
    poster: "",
    director: "",
    actor: "",
    genre: "",
    releaseDate: "",
    runningTime: "",
    trailer: "",
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("formData", formData)
    // fetch("/api/movies", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => {
    //     if (response.ok) {
    //       console.log("Movie added successfully");
    //     } else {
    //       console.error("Movie could not be added");
    //     }
    //   })
    //   .catch((error) => {
    //     console.error("Error adding movie:", error);
    //   });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div className="flex-shrink-0">
      <div className="container mx-auto p-4">
        <form
          className="bg-white rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleFormSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              name="title"
              type="text"
              placeholder="Enter movie title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="poster"
            >
              Poster
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="poster"
              name="poster"
              type="text"
              placeholder="Enter movie poster URL"
              value={formData.poster}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="director"
            >
              Director
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="director"
              name="director"
              type="text"
              placeholder="Enter movie director"
              value={formData.director}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="actor"
            >
              Actor
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="actor"
              type="text"
              name="actor"
              placeholder="Enter movie actor"
              value={formData.actor}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="genre"
            >
              Genre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="genre"
              name="genre"
              type="text"
              placeholder="Enter movie genre"
              value={formData.genre}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="release_date"
            >
              Release Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="release_date"
              name="releaseDate"
              type="text"
              placeholder="Enter movie release date"
              value={formData.releaseDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="running_time"
            >
              Running Time
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="running_time"
              name="runningTime"
              type="text"
              placeholder="Enter movie running time"
              value={formData.runningTime}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="running_time"
            >
              Trailer
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="trailer"
              placeholder="Enter movie running time"
              type="text"
              name="trailer"
              value={formData.trailer}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="block text-gray-700 font-bold mb-2">
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
