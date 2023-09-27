import React, { useState, useEffect } from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";
import AddFormModal from "./AddFormModal";
import { useData } from "../DataContext";
import { useTheme } from "../DataContext";

const TableForm = () => {
  const { data, setData } = useData();
  const [text, setText] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  const { theme } = useTheme();

  const [displayedData, setDisplayedData] = useState(data);

  useEffect(() => {
    setDisplayedData(data);
  }, [data]);

  const handleSearchBook = (e) => {
    const searchText = e.target.value;
    setText(searchText);

    const filteredBooks = data.filter((book) =>
      book.name.toLowerCase().includes(searchText.toLowerCase())
    );

    setDisplayedData(filteredBooks);
  };

  const handleDeleteClick = (event) => {
    const bookId = event.target.getAttribute("data-book-id");
    setSelectedBook(bookId);
  };

  const deleteBookById = (bookId) => {
    const updatedData = displayedData.filter((book) => book.id !== bookId);
    setData(updatedData);
  };

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = displayedData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(displayedData.length / recordsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      className={`container-fluid pt-5 ${
        theme === "light" ? "theme-light" : "theme-dark"
      }`}
    >
      <div className="container main-content ">
        <div className=" flex-search">
          <form
            className={`d-flex mb-3 search-form ${
              theme === "light" ? "theme-light" : "theme-dark"
            }`}
          >
            <input
              className={`form-control me-2 search-book ${
                theme === "light" ? "form-light" : "form-dark"
              }`}
              id="searchInput"
              type="search"
              value={text}
              onChange={handleSearchBook}
              placeholder="Search Book"
              aria-label="Search"
            />
            <button
              className={`btn ${theme === "light" ? "btn-add" : "btn-add"}`}
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#addBookModal"
            >
              Add Book
            </button>
          </form>
        </div>

        <table
          className={`table table-bordered table-books ${
            theme === "light" ? "text-dark" : "text-light"
          }`}
        >
          <thead>
            <tr>
              <th
                className={` ${theme === "light" ? "text-dark" : "text-light"}`}
                scope="col"
              >
                Name
              </th>
              <th
                className={` ${theme === "light" ? "text-dark" : "text-light"}`}
                scope="col"
              >
                Author
              </th>
              <th
                className={` ${theme === "light" ? "text-dark" : "text-light"}`}
                scope="col"
              >
                Topic
              </th>
              <th
                className={` ${theme === "light" ? "text-dark" : "text-light"}`}
                scope="col"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody id="table-body">
            {currentRecords.map((book) => (
              <tr key={book.id}>
                <td
                  className={` ${
                    theme === "light" ? "text-dark" : "text-light"
                  }`}
                >
                  {book.name}
                </td>
                <td
                  className={` ${
                    theme === "light" ? "text-dark" : "text-light"
                  }`}
                >
                  {book.author}
                </td>
                <td
                  className={` ${
                    theme === "light" ? "text-dark" : "text-light"
                  }`}
                >
                  {book.topic}
                </td>
                <td>
                  <button
                    type="button"
                    className={`btn ${
                      theme === "light" ? "btn-add" : "btn-add"
                    }`}
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                    data-book-id={book.id}
                    onClick={handleDeleteClick}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          className={`pagination ${
            theme === "light" ? "theme-light" : "theme-dark"
          }`}
        >
          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => setCurrentPage(number)}
              className={`btn ${
                currentPage === number ? "btn-add" : "btn-light"
              }`}
            >
              {number}
            </button>
          ))}
        </div>

        <ConfirmDeleteModal
          onDeleteConfirm={() => {
            if (selectedBook) {
              deleteBookById(parseInt(selectedBook, 10));
            }
          }}
        />
        <AddFormModal />
      </div>
    </div>
  );
};

export default TableForm;
