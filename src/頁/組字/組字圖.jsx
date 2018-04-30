import React from 'react';
let  oo1 = '■';
let beh8 = '□';

export default class 組字圖 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      顯示烏: true,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.圖交換.bind(this), 1000); // Call a method on the mixin
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }

  圖交換() {
    this.setState({ 顯示烏: !this.state.顯示烏 });
  }

  組字圖片網址(組字式, 字體='宋體')
  {
    return `http://xn--p8s937b.xn--v0qr21b.xn--kpry57d/${encodeURIComponent(組字式)}.png?%E5%AD%97%E9%AB%94=${字體}`;
  }

  幾字() {
    let { 組字式 } = this.props;
    let num = 0;
    let i = 0;
    while (i < 組字式.length && num < 1) {
      if (this.是組合符號無(組字式[i])) {
        num--;
      } else {
        num++;
      }
      
      // UTF-16 代理對，要跳過
      if ((組字式.charCodeAt(i) & 0xf800) === 0xd800 &&
          i < 組字式.length - 1 &&
          (組字式.charCodeAt(i + 1) & 0xf800) === 0xd800)
        i++;

      i++;
    }

    return num;
  }

  補烏組字式()
  {
    let 幾字 = this.幾字();
    let 烏組字式 = this.props.組字式;
    if (幾字 < 1) {
      烏組字式 += oo1;
      幾字++;
    }

    while (幾字 < 1) {
      烏組字式 += beh8;
      幾字++;
    }

    return 烏組字式;
  }

  補白組字式()
  {
    let 幾字 = this.幾字();
    let 白組字式 = this.props.組字式;
    while (幾字 < 1) {
      白組字式 += beh8;
      幾字++;
    }

    return 白組字式;
  }

  是組合符號無(ji7) {
    switch (ji7) {
    case '⿰':
    case '⿱':
    case '⿲':
    case '⿳':
    case '⿴':
    case '⿵':
    case '⿶':
    case '⿷':
    case '⿸':
    case '⿹':
    case '⿺':
    case '⿻':
    case '⿿':
      return true;
  }
    return false;
  }

  render () {
    let 顯示組字式;
    if (this.state.顯示烏)
      顯示組字式 = this.補烏組字式();
    else
      顯示組字式 = this.補白組字式();
    return (
                <div id="too5tsip8">
                  <img id="hian2si7too5it4" src={this.組字圖片網址(顯示組字式)}/>
                </div>
     );
  }
}

