import React from "react";

const ConfirmDeleteModal = ({ onDeleteConfirm }) => {
  return (
    <div
      className="modal fade modal-centered"
      id="deleteModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Confirm Delete
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            Do you want to delete Refactoring book?
          </div>
          <div className="modal-footer">
            <button
              onClick={onDeleteConfirm}
              data-bs-dismiss="modal"
              className="btn"
            >
              Delete
            </button>
            <button data-bs-dismiss="modal" className="btn btn-add">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
