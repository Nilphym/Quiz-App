import React from 'react';
import PropTypes from 'prop-types';
import Text from '../Text';
import styles from './button.module.scss';
import colors from '../../colors';

const buttonTypes = {
  success: colors.buttonSuccess,
  fail: colors.buttonFail,
  default: colors.button
}

const Button = ({ onClick, content, fontSize, type, width }) => {
  const customStyles = { backgroundColor: buttonTypes[type], width };

  return (
    <button
      onClick={onClick}
      className={styles.button}
      style={customStyles}
    >
      <Text
        tag="span"
        fontSize={fontSize}
        content={content}
      />
    </button>
  );
};

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['default', 'success', 'fail']),
  width: PropTypes.string.isRequired
};

Button.defaultProps = {
  type: 'default'
};
