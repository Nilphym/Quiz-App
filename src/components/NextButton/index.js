import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './nextButton.module.scss';

const NextButton = ({ destination, onClick }) => {
  const Tag = destination ? Link : 'button';
  const attributes = destination ? { to: destination } : { onClick: onClick };

  return (
    <Tag
      {...attributes}
      className={styles.button}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="109" height="109" viewBox="0 0 109 109">
        <g id="Group_1" data-name="Group 1" transform="translate(-267 -696)">
          <circle id="Ellipse_2" data-name="Ellipse 2" cx="54.5" cy="54.5" r="54.5" transform="translate(267 696)" fill="#fff"/>
          <path id="Polygon_1" data-name="Polygon 1" d="M34,0,68,59H0Z" transform="translate(359 716) rotate(90)" fill="#ff7e7e"/>
        </g>
      </svg>
    </Tag>
  );
};

export default NextButton;

NextButton.propTypes = {
  destination: PropTypes.string,
  onClick: PropTypes.func
};

NextButton.defaultProps = {
  destination: undefined,
  onClick: undefined
};
