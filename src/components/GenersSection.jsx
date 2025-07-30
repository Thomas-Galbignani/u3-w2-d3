import React from 'react';
import { Dropdown, ButtonGroup, DropdownButton } from 'react-bootstrap';
import { IoGridOutline } from "react-icons/io5";
import { RiGridFill } from "react-icons/ri";

const GenersSection = () => {
  return (
    <div className="d-flex bg-black p-4 justify-content-between align-items-center ">
      <div className="d-flex align-items-center">
        <h2 className="mb-0 text-light me-4">TV Shows</h2>
        <Dropdown as={ButtonGroup}>
          <DropdownButton
            variant="secondary"
            id="dropdown-genres"
            title="Genres"
            className="rounded-0"
          >
            <Dropdown.Item href="#">Comedy</Dropdown.Item>
            <Dropdown.Item href="#">Drama</Dropdown.Item>
            <Dropdown.Item href="#">Thriller</Dropdown.Item>
          </DropdownButton>
        </Dropdown>
      </div>
      <div>
        <IoGridOutline className='text-light fs-4 me-2' />
        <RiGridFill className='text-secondary fs-4 me-2' />
      </div>
    </div>
  );
};
export default GenersSection;