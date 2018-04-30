
import React from 'react';
import { Link } from 'react-router';

export default class ToLam extends React.Component {
  render () {
    return (
      <footer className='app footer inverted'>
        <div className='ui stackable inverted container menu'>
          <a className='item' target='_blank' href='https://xn--v0qr21b.xn--kpry57d/'>意傳科技</a>
          <a className='item' target='_blank' href='https://github.com/i3thuan5/tsoo2ji7'>前端專案</a>
          <a className='item' target='_blank' href='https://github.com/i3thuan5/han3_ji7_tsoo1_kian3'>後端專案</a>
        </div>
      </footer>
    );
  }
}
