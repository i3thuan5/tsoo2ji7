
import React from 'react';
import { Link } from 'react-router';

export default class ToLam extends React.Component {
  render () {
    return (
      <footer className='app footer inverted'>
        <div className='ui stackable inverted container menu'>
          <a className='item' target='_blank' href='https://github.com/i3thuan5/tsoo2ji7'>Github</a>
          <a className='item' target='_blank' href='http://xn--jny.xn--v0qr21b.xn--kpry57d/'>相關專案</a>
        </div>
      </footer>
    );
  }
}
