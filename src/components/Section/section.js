import React from 'react';
import PropTypes from 'prop-types';
import styles from './section.module.css';

const Section = ({ title, children }) => (
    <div>
      <h2 className={styles.title}>{title}</h2>
      {children}
      </div>
  );
  
  Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
  };
  
export default Section;