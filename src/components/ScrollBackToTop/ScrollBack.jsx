import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Fab } from '@mui/material';
import './scrollBackStyle.css';

const GoBackButton = function button() {
  const [isVisible, setIsVisible] = useState(false);

  const handleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    window.addEventListener('scroll', handleVisibility);

    return () => {
      window.removeEventListener('scroll', handleVisibility);
    };
  });

  return (
    <section>
      {isVisible
        && (
        <Link
          onClick={handleScroll}
          className="arrow-wrapper"
          to="#home"
          key={0}
        >
          <Fab
            fontSize="medium"
            color="primary"
            style={{
              backgroundColor: '#407A79',
              opacity: 0.7
            }}
          >
            <ArrowUpwardIcon
              style={{
                fontSize: '40px'
              }}
              to="#home"
            />
          </Fab>
        </Link>
        )}
    </section>
  );
};

export default GoBackButton;
