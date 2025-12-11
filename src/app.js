import React from "react";
import "./practice.css";

const books = [
  {
    author: "Gianna Mago",
    title: "You Got This",
    img: "https://m.media-amazon.com/images/I/91g4K+FXBLL._AC_UL480_FMwebp_QL65_.jpg",
  },
  {
    author: "Frances Garcia",
    title: "Ikigai",
    img: "https://m.media-amazon.com/images/I/81l3rZK4lnL._AC_UY327_FMwebp_QL65_.jpg",
  },
];

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => (
        <Book key={index} {...book} />
      ))}
    </section>
  );
};

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

export default BookList;
