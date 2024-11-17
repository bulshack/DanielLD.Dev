// MediaGallery.js

import React, { useState } from 'react';
import './MediaGallery.css';
import { motion, AnimatePresence } from 'framer-motion';

const MediaGallery = ({ media, title }) => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openMedia = (index) => {
    setSelectedIndex(index);
  };

  const closeMedia = () => {
    setSelectedIndex(null);
  };

  const nextMedia = () => {
    setSelectedIndex((prevIndex) => (prevIndex + 1) % media.length);
  };

  const prevMedia = () => {
    setSelectedIndex((prevIndex) => (prevIndex - 1 + media.length) % media.length);
  };

  return (
    <div className="media-gallery">
      <h3>Gallery</h3>
      <div className="media-thumbnails">
        {media.map((mediaItem, index) => (
          <div key={index} className="thumbnail-wrapper" onClick={() => openMedia(index)}>
            {mediaItem.type === 'image' ? (
              <img
                src={mediaItem.src}
                alt={`${title} Media ${index + 1}`}
                className="media-thumbnail"
              />
            ) : (
              <video
                src={mediaItem.src}
                className="media-thumbnail"
                muted
                loop
              />
            )}
          </div>
        ))}
      </div>

      {/* Fullscreen Media Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="media-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMedia}
          >
            <motion.div
              className="media-content"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              {media[selectedIndex].type === 'image' ? (
                <img
                  src={media[selectedIndex].src}
                  alt={`${title} Media ${selectedIndex + 1}`}
                  className="media-fullscreen-image"
                />
              ) : (
                <video
                  src={media[selectedIndex].src}
                  className="media-fullscreen-video"
                  controls
                  autoPlay
                />
              )}
              {/* Navigation Buttons */}
              {media.length > 1 && (
                <>
                  <button className="media-nav-button prev" onClick={prevMedia}>
                    &#10094;
                  </button>
                  <button className="media-nav-button next" onClick={nextMedia}>
                    &#10095;
                  </button>
                </>
              )}
              {/* Close Button */}
              <button className="media-close-button" onClick={closeMedia}>
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MediaGallery;
