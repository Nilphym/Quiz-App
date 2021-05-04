import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './linkButton.module.scss';
import Text from '../Text';

const LinkButton = ({ destination, content, fontSize, roundSize }) => {
  const customStyles = { width: roundSize, height: roundSize };

  return (
    <Link
      to={destination}
      className={styles.button}
      style={customStyles}
    >
      <Text
        tag="span"
        fontSize={fontSize}
        content={content}
      />
    </Link>
  );
};

export default LinkButton;

LinkButton.propTypes = {
  destination: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  roundSize: PropTypes.string.isRequired
}
