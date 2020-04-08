import classNames from 'classnames';
import React from 'react';

import styles from './ScrollView.module.scss';

class ScrollView extends React.Component{
  componentDidMount() {
    // if (this.props.useSlipScroll) {
    //   $(ReactDOM.findDOMNode(this)).slimScroll({
    //     height: 'auto',
    //     position: 'right',
    //     size: '8px',
    //     color: '#9ea5ab',
    //     wheelStep: 5,
    //     touchScrollStep: 20,
    //   });
    // }
  }
  render() {
    const { horizontal, children, useSlipScroll, className } = this.props;

    if (useSlipScroll) {
      return (
        <div className={className}>
          {children}
        </div>
      );
    }

    return (
      <div
        className={classNames(styles.root, {
          [styles.horizontal]: horizontal,
        })}
      >
        {children}
      </div>
    );
  }
}

export default ScrollView;
