// Your JS code goes here
const listBook = [
  {
    id: 1,
    name: "Deep Learning - Cuộc Cách Mạng Học Sâu",
    author: "Terrence J. Sejnowski",
    topic: "Trí tuệ nhân tạo",
  },
  {
    id: 2,
    name: "Gián Điệp Mạng",
    author: "Information Security",
    topic: "An toàn thông tin mạng",
  },
  {
    id: 3,
    name: "Cuộc Chiến Công Nghệ Số",
    author: "Charles Arthur",
    topic: "Kỹ thuật số",
  },
];

const jsonData = JSON.stringify(listBook);
localStorage.setItem("listBookStorage", jsonData); //lưu vào localStorage
let list = [];

const displayBooks = (books) => {
  var tbody = document.getElementById("table-body");
  tbody.innerHTML = "";

  books.forEach((item) => {
    var row = document.createElement("tr");
    row.innerHTML = `
          <td>${item.name}</td>
          <td>${item.author}</td>
          <td>${item.topic}</td>
          <td>
            <a href="#" style="color: #D3445A" data-bs-toggle="modal" data-bs-target="#showDeleteModal" 
                data-book-id="${item.id}">Delete</a>
          </td>
        `;
    tbody.appendChild(row);
  });

  const deleteButtons = document.querySelectorAll(
    '[data-bs-toggle="modal"][data-bs-target="#showDeleteModal"]'
  );
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      const bookIdToDelete = parseInt(button.getAttribute("data-book-id"));

      document
        .getElementById("confirmDeleteButton")
        .setAttribute("data-book-id", bookIdToDelete);
    });
  });
};

//moi data để process
const storedData = localStorage.getItem("listBookStorage");

// SEARCH-BOOK
if (storedData) {
  list = JSON.parse(storedData);
  displayBooks(list);

  document.getElementById("searchInput").addEventListener("input", (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.toLowerCase();

    const filteredBooks = list.filter((book) =>
      book.name.toLowerCase().includes(searchTerm)
    );

    displayBooks(filteredBooks);
  });
}

// DELETE-BOOK
document.getElementById("confirmDeleteButton").onclick = () => {
  const bookIdToDelete = parseInt(
    document.getElementById("confirmDeleteButton").getAttribute("data-book-id")
  );
  console.log(bookIdToDelete);
  const index = list.findIndex((book) => book.id === bookIdToDelete);

  if (index !== -1) {
    list.splice(index, 1);

    localStorage.setItem("listBookStorage", JSON.stringify(list));

    displayBooks(list);
  }
  $("#showDeleteModal").modal("hide");
};

//ADDING-BOOK MODAL
document.getElementById("addBookButton").addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Add Book button clicked");
  //Reset value vừa tạo
  document.getElementById("addBookForm").reset();
});

//ADDING-BOOK
document.getElementById("createBookButton").onclick = () => {
  const bookName = document.getElementById("bookName").value;
  const bookAuthor = document.getElementById("bookAuthor").value;
  const bookTopic = document.getElementById("bookTopic").value;

  if (bookName.trim() === "" || bookAuthor.trim() === "") {
    alert("Name and Author are required fields.");
    return;
  }

  const newBook = {
    id: list.length + 1,
    name: bookName,
    author: bookAuthor,
    topic: bookTopic,
  };

  list.push(newBook);
  localStorage.setItem("listBookStorage", JSON.stringify(list));
  displayBooks(list);

  $("#addBookModal").modal("hide");
};
