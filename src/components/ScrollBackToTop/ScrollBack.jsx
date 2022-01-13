import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { Fab } from '@mui/material';
import './scrollBackStyle.css';

const GoBackButton = function button() {
  return (
    <section>
      <Link
        className="arrow-wrapper"
        smooth
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
            smooth
            to="#home"
          />
        </Fab>
      </Link>
    </section>
  );
};

export default GoBackButton;
