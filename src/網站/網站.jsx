import React from 'react';
import 頁頭 from './頁頭';
import 頁尾 from './頁尾';

import Debug from 'debug';
var debug = Debug('sia2:網站');

export default class 網站 extends React.Component {

  render () {
    return (
        <div className='app background'>
          <頁頭/>
          {this.props.children}
          <頁尾/>
        </div>
      );
  }
}

