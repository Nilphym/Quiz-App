import React from 'react';
import PropTypes from 'prop-types';
import styles from './text.module.scss';

const Text = ({ tag, fontSize, content }) => {
  const Tag = tag;

  return (
    <Tag className={styles.text} style={{ fontSize }}>
      {content}
    </Tag>
  );
};

export default Text;

Text.propTypes = {
  tag: PropTypes.oneOf(['span', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  fontSize: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};
