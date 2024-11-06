import {Component} from 'react'

import './index.css'

const HEAD_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const TAIL_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: HEAD_IMG_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = HEAD_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImage = TAIL_IMG_URL
      latestTailsCount += 1
    }

    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app">
        <div className="coin-toss-card">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img
            src={tossResultImage}
            alt="toss result"
            className="toss-result-img"
          />
          <button type="button" className="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="count-card">
            <p>Total: {totalCount}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
