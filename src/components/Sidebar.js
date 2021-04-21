import React from "react"
import Links from "../constants/links"

import { IoMdClose } from "react-icons/io"
import styled from "styled-components"

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <Wrap>
      <aside className={`sidebar ${isOpen ? "showSidebar" : ""}`}>
        <button className="close-btn" onClick={toggle}>
          <IoMdClose />
        </button>
        <div className="sidebar-container">
          <Links styleClass="sidebar-links" />
        </div>
      </aside>
    </Wrap>
  )
}

const Wrap = styled.div`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    visibility: hidden;
    background: var(--secondary-color);
    z-index: 999;
    transform: translateX(-100%);
    display: grid;
    align-items: center;
  }
  .showSidebar {
    visibility: visible;
    transform: translateX(0);
  }

  .close-btn {
    position: absolute;
    top: 1rem;
    right: 4rem;

    background: transparent;
    border: transparent;
    font-size: 2rem;
    cursor: pointer;
  }
  @media screen and (min-width: 800px) {
    .sidebar {
      transform: translateX(-100%);
    }
  }
`
export default Sidebar
