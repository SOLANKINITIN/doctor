import classNames from 'classnames';
import React from 'react';

import styles from './View.module.scss';

const View = (props) => {
  const viewStyles = {};

  if (props.flexDirection) {
    viewStyles.flexDirection = props.flexDirection;
  }

  if (props.alignItems) {
    viewStyles.alignItems = props.alignItems;
  }

  return (
    <div
      className={classNames(styles.root, {
        [styles.flexGrow]: props.flexGrow,
      }, props.className)}
      style={{ ...props.style, ...viewStyles }}
    >
      {props.children}
    </div>
  );
};

export default View;
