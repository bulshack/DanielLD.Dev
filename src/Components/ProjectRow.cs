.project-row-container {
  position: relative;
}

.project-row {
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
}

.project-row::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Webkit browsers */
}

.scroll-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(20, 20, 20, 0.7);
  border: none;
  color: #fff;
  padding: 10px;
  cursor: pointer;
  font-size: 2rem;
  z-index: 1;
  transition: opacity 0.3s;
}

.scroll-button.left {
  left: 10px;
}

.scroll-button.right {
  right: 10px;
}

/* Only show buttons on hover for devices that support hover */
@media (hover: hover) {
  .scroll-button {
    opacity: 0;
  }

  .project-row-container:hover .scroll-button {
    opacity: 1;
  }
}

/* On touch devices, always show the buttons when scrolling is possible */
@media (hover: none) {
  .scroll-button {
    opacity: 1;
  }
}
