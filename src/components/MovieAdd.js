import React, { useState } from "react";
import Modal from 'react-modal'
import MovieRating from './MovieRating'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function MovieAdd({ add}) {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [inputTitle,setInputTitle]=useState("")
  const [inputGenre,setInputGenre]=useState("")
  const [inputCover,setInputCover]=useState("")
  const [inputRating,setInputRating]=useState(0)
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setInputTitle('');
    setInputRating('');
    setInputCover('');
    setInputGenre('');
  }

  const handleSubmit = (e) => {
    let newMovie = {
      title: inputTitle,
      rating: inputRating,
      cover: inputCover,
      genre: inputGenre,
    };
    add(e, newMovie);
    setIsOpen(false);
    setInputTitle('');
    setInputRating('');
    setInputCover('');
    setInputGenre('');
  };

  return (
    <div className="Add-btn-container">
      <button className="Add-btn" onClick={openModal}>
        +
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A Movie</h1>
        <form>
          <label>Movie Title</label>
          <input
            value={inputTitle}
            type="text"
            name="name"
            required
            onChange={(e) => setInputTitle(e.target.value)}
          />
          <label>Movie Rate</label>
        
          <MovieRating rating={inputRating} starI={setInputRating} />

          <label>Movie Genre</label>
          <input
            value={inputGenre}
            type="text"
            name="date"
            required
            onChange={(e) => setInputGenre(e.target.value)}
          />
          <label>Movie Cover</label>
          <input
            value={inputCover}
            type="url"
            name="image"
            required
            onChange={(e) => setInputCover(e.target.value)}
          />
        </form>
        <button className="Modal-btn" onClick={handleSubmit}>
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
}

export default MovieAdd;