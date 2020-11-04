import React from 'react';
import less from './index.less';
import classNames from 'classnames/bind';

const cx = classNames.bind(less);

export default () => {
  return (
    <div>
      <h1 className={cx('title')}>💗 Hello, electron-umi</h1>
    </div>
  );
}
