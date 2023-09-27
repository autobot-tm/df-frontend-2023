import React, { useState } from "react";
import { useData } from "../DataContext";

const AddFormModal = () => {
  const { data, setData } = useData();
  const [bookName, setBookName] = useState("");
  const [bookAuthor, setBookAuthor] = useState("");
  const [bookTopic, setBookTopic] = useState("");

  const handleCreateBook = (e) => {
    e.preventDefault();
    if (
      bookName.trim() === "" ||
      bookAuthor.trim() === "" ||
      bookTopic.trim() === ""
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const newBook = {
      id: Math.floor(Math.random() * 1000000) + 1,
      name: bookName,
      author: bookAuthor,
      topic: bookTopic,
    };

    setData([...data, newBook]);

    setBookName("");
    setBookAuthor("");
    setBookTopic("");
  };

  return (
    <div>
      <div
        class="modal fade modal-centered"
        id="addBookModal"
        tabindex="-1"
        aria-labelledby="addBookModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <img
                style={{ width: "10%" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbS
                    JIAAAAeFBMVEX////hP17gMFTzvMThPFz0v8fjU23gOFnfI0zqh5fiRmX1ytHqgJLhO1vgMlXhQF/fKVD64eX30tj76u3wq7b75urtl6X0xMzunarytb/lXXb41tv98fPod4rqg5XxsLrnboPoeozrjp3vpLHlYHfjTWn++Prnb4SOJXEFAAAEzElEQVR4nO3c6XbaOhQFYCwUZEgsFJMwlSTEQPr+b3hLRmp50pRz0ru/n1mrXto1tqQjyaMRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPx/Xa+raY+qqpaHTXlL3VQfi0cjtBpAayFMPru5+0XdZDfrXGUupNLGPGx21O0e6mUrnPK9UyLfj6nbPszE7QZeKIReLqib3+9B+wY80/nNPXWCHmMTEvAPld/wfiDnMjDhn4zmQJ2iw8brLVMnTiV1kFb7IkbCTJoldZIWL6FP4Scx4flW/RUtYVboa+o0Ta6jPIZvJMsXzjhiwiwzFXUeW9yEmbihDmSJnJBhxNgJ+UWMnjATzDrG+Akzc0cd6i8JEmaGVb+YIqFUnEY3KRJmaksd60KShKzeNmkSZoZPKS5RwmJCHexTV0I5mP1vBZtBeFtCqYyeTYYq7Gm05lK7aUko5sty9zL4KruJdRvVY8JWu2hMqJTrsOTJrkgaJssbTQn11rnH3tgJ1UOK9rprSKh/u1+m4R5mhkel2E7oNSA5NCRU0+it9dGQ0GdQ+di09CGGv6oSshIKr7nPtqnqKp5it9ZHPaGc+Vxl0ViTlCwGNvWEeu1zlbvm5SsWHUY9oV+jZs2rO37/XZHVEsq5z9th3Tb04/AzrSUsjh7XuG1dGcgZdIm1hMqjt9+1r0DqTfwWu6ondB9q3c/a1+fUc4ImOwpOuBEdC5BSpmizm8DncNWzUYXB2NTqD6dXQ40Pz7LrBp6JFXVAe9SmxGC6fx8Ogx7RHnl7FGXaMZjpW+NSM+sxd1kXL+hrw9aYpn/uVDpF/IYM3eq9xZDVP7vs1C5PnqCPT8KjwxYcQ75I45OwcbrblpB8AuWT8OTwK6VfwPBJ6PKmMeT73TwStk+W/pWELSWLfyjhxGU34098Dp06/B/5LnW6hT+xP1y6LRrn5HVv14Sr3ClgJr4lRRfHhGPHgPL0PTG6mlxL2D2fm7ruKGawiOhQp3m5U85nTzT9xhqrTlNdN7pa7412P5kh6A9GDa7TaK9TC/TdYV+dxifVJfpXqV2n0fNLMujUV6b21Pka6jS1n9Uy7GAbg51Rff3hImjfG4PHMG1CmZFk+lvShIrDAZO+hPchCemnv6P+hGVAQr99HbH1JXQqWdQwWJYZ9ScMOYCZk89+z3oShrxoGMwrznoShnT49EWoV90JFwEBiz1NorruhEfvry2wuYXdCacBt9BnZ04SXQmnQb09/S6MN+11msU+JKDmMGB7Va/T7N//vlgO2GnRTs7I66Qf7P2lZVlerY8ibOrL6AiiVcXQ/kWZi4vw2MT+KsnJroK+DvwlSULBYGr/Kck54CvqVJdSnOVmMWn6lOA8PrNPDkRPqHnMmb7ETqh9tsInFfvbJlzG218if5+G2TN4toqZkNlb9E1ItbCmMPSLhQ12jgvz7fSM00jmgstGww7SPLKZL9Wsw6ZJ77SkP3bQJsbPVHH8xteXKvQmFmbP9An8EPbxS2WOHFaYOt0a74hS57/Z5xud91N6FS2kMvM1i8WXfouTa79//hh0Vv2E2/fhIIQa9FuVhVJa5PL5ifnbxbaankzeS8+3z9VTyeXbMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAz3/ehkmSX+beAQAAAABJRU5ErkJggg=="
                alt=""
              />
              <h5 class="modal-title" id="addBookModalLabel">
                {" "}
                <b>Add Book</b>
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form id="addBookForm">
                <div class="mb-3">
                  <label for="bookName" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter book's name"
                    class="form-control"
                    id="bookName"
                    value={bookName}
                    onChange={(e) => setBookName(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="bookAuthor" class="form-label">
                    Author
                  </label>
                  <input
                    type="text"
                    placeholder="Enter book's author"
                    class="form-control"
                    value={bookAuthor}
                    onChange={(e) => setBookAuthor(e.target.value)}
                    id="bookAuthor"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label for="bookTopic" class="form-label">
                    Topic
                  </label>
                  <select
                    class="form-select"
                    id="bookTopic"
                    value={bookTopic}
                    onChange={(e) => setBookTopic(e.target.value)}
                    required
                  >
                    <option value=""></option>
                    <option value="Artificial intelligence">
                      Trí tuệ nhân tạo
                    </option>
                    <option value="Clifford Stoll">
                      An toàn thông tin mạng
                    </option>
                    <option value="Digital">Kỹ thuật số</option>
                  </select>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-add"
                id="createBookButton"
                data-bs-dismiss="modal"
                onClick={handleCreateBook}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFormModal;
