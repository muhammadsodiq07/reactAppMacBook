import React, { Component } from 'react'
import './Hero.css'

class Hero extends Component {
  constructor(props) {
    super(props)
    this.one = 'one'

    this.state = {
      oldone: {
        ram: 8,
        memory: 256,
        count: 0,
        price: 12333000,
      },
    }
  }

  isOldOne = () => {
    this.setState({
      oldone: {
        ram: 16,
        memory: 256,
        count: 0,
        price: 16713000,
      },
    })
  }

  isCount2 = () => {
    this.setState({
      oldone: {
        ram: 16,
        memory: 256,
        count: this.state.oldone.count + 1,
        price: this.state.oldone.price + 16713000,
      },
    })
  }
  isOldOne3 = () => {
    this.setState({
      oldone: {
        ram: 8,
        memory: 512,
        count: 0,
        price: 14869000,
      },
    })
  }
  isCount3 = () => {
    this.setState({
      oldone: {
        ram: 8,
        memory: 512,
        count: this.state.oldone.count + 1,
        price: this.state.oldone.price + 14869000,
      },
    })
  }
  isOldOne4 = () => {
    this.setState({
      oldone: {
        ram: 8,
        memory: 256,
        count: 0,
        price: 16713000,
      },
    })
  }
  isOldOne5 = () => {
    this.setState({
      oldone: {
        ram: 16,
        memory: "1TB",
        count: 0,
        price: 21323500,
      },
    })
  }
  isCount5 = () => {
    this.setState({
      oldone: {
        ram: 16,
        memory: "1TB",
        count: this.state.oldone.count + 1,
        price: this.state.oldone.price + 21323500,
      },
    })
  }
  isOldOne1 = () => {
    this.setState({
      oldone: {
        ram: 8,
        memory: 256,
        count: 0,
        price: 12333000,
      },
    })
  }
  isCount1 = () => {
    this.setState({
      oldone: {
        ram: 8,
        memory: 256,
        count: this.state.oldone.count + 1,
        price: this.state.oldone.price + 12333000,
      },
    })
  }

  isCountMinus = () => {
    if(this.state.oldone.count > 0) {
      this.setState({
        oldone: {
          ram: 8,
          memory: 256,
          count: this.state.oldone.count - 1,
          price: this.state.oldone.price - 12333000,
        },
      })
    }
  }
  isCountMinus1 = () => {
    if(this.state.oldone.count > 0) {
      this.setState({
        oldone: {
          ram: 8,
          memory: 256,
          count: this.state.oldone.count - 1,
          price: this.state.oldone.price - 16713000,
        },
      })
    }
  }
  isCountMinus2 = () => {
    if(this.state.oldone.count > 0) {
      this.setState({
        oldone: {
          ram: 8,
          memory: 256,
          count: this.state.oldone.count - 1,
          price: this.state.oldone.price - 14869000,
        },
      })
    }
  }
  isCountMinus3 = () => {
    if(this.state.oldone.count > 0) {
      this.setState({
        oldone: {
          ram: 8,
          memory: 256,
          count: this.state.oldone.count - 1,
          price: this.state.oldone.price - 21323500,
        },
      })
    }
  }
  render() {
    return (
      <div>
        <div className="mac container">
          <div className="mac__main">
            <div className="mac__title-div">
              <h1 className="mac__title">
                MacBook Air 13-inch <br /> M1/{this.state.oldone.ram}/{this.state.oldone.memory} Gold
              </h1>
            </div>
            <div className="mac__ram-title">
              <p className="mac__ram-p">Ram</p>
              <div className="mac__ram-div">
                <button
                  onClick={this.isOldOne1}
                  className="mac__ram-btn gb8 btnActive"
                >
                  8GB
                </button>
                <button onClick={this.isOldOne} className="mac__ram-btn gb15">
                  16GB
                </button>
              </div>
            </div>
            <div className="mac__memory-title">
              <p className="mac__memory-p">Xotira Hajmi</p>
              <div className="mac__memory-div">
                <button onClick={this.isOldOne4} className="mac__memory-btn gb265 btnmemoryActive">
                  256GB
                </button>
                <button onClick={this.isOldOne3} className="mac__memory-btn gb512">512GB</button>
                <button onClick={this.isOldOne5} className="mac__memory-btn tb1">1TB</button>
              </div>
            </div>
            <div className="mac__colors-title">
              <p className="mac__title-color">Ranglar</p>
              <div className="mac__colors-div">
                <button className="mac__colors__btn colorActive">
                  <div className="mac__ball"></div>
                  <span>Tilla Rang</span>
                </button>
                <button className="mac__colors__btn twoBtn2">
                  <div className="mac__ball ball2"></div>
                  <span>Kumush Rang</span>
                </button>
              </div>
              <button className="mac__colors__btn threeBtn">
                <div className="mac__ball ball3"></div>
                <span>Kosmis Rang</span>
              </button>
            </div>
            <div className="mac__count-section">
              <div className="mac__count-div d-flex">
                <button onClick={this.isCountMinus} className="mac__minus count__btn">
                  <i class="bx bx-minus"></i>
                </button>
                <button onClick={this.isCountMinus1} className="mac__minus2 count__btn">
                  <i class="bx bx-minus"></i>
                </button>
                <button onClick={this.isCountMinus2} className="mac__minus3 count__btn">
                  <i class="bx bx-minus"></i>
                </button>
                <button onClick={this.isCountMinus3} className="mac__minus4 count__btn">
                  <i class="bx bx-minus"></i>
                </button>
                <button className="mac__span-count">
                  {this.state.oldone.count}
                </button>
                <button
                  onClick={this.isCount1}
                  className="mac__plus count__btn"
                >
                  <i class="bx bx-plus"></i>
                </button>
                <button
                  onClick={this.isCount2}
                  className="mac__plus2 count__btn"
                >
                  <i class="bx bx-plus"></i>
                </button>
                <button
                  onClick={this.isCount3}
                  className="mac__plus3 count__btn"
                >
                  <i class="bx bx-plus"></i>
                </button>
                <button
                  onClick={this.isCount5}
                  className="mac__plus5 count__btn"
                >
                  <i class="bx bx-plus"></i>
                </button>
              </div>
              <p className="mac__count-text">
                {this.state.oldone.price} {this.isCount1} {this.isCountMinus}so'm
              </p>
              <p className="mac__span-upcase">14429500 so'm</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero



window.addEventListener('load', () => {
  const elbtn = document.querySelector('.gb15')
  const elbtn2 = document.querySelector('.gb8')
  const elbtn5 = document.querySelector('.tb1')
  elbtn.addEventListener('click', () => {
    elbtn.style.border = '3px solid #458FDA'
    elbtn2.style.border = '3px solid gray'
    elbtn5.style.display = 'block'
  })
})

window.addEventListener('load', () => {
  const elbtn3 = document.querySelector('.gb15')
  const elbtn4 = document.querySelector('.gb8')
  const elbtn6 = document.querySelector('.tb1')
  elbtn4.addEventListener('click', () => {
    elbtn3.style.border = '3px solid gray'
    elbtn4.style.border = '3px solid #458FDA'
    elbtn6.style.display = 'none'
  })
})


window.addEventListener('load', () => {
  const elbtn = document.querySelector('.gb512')
  const elbtn2 = document.querySelector('.gb265')
  const elbtn5 = document.querySelector('.tb1')
  elbtn.addEventListener('click', () => {
    elbtn.style.border = '3px solid #458FDA'
    elbtn2.style.border = '3px solid gray'
    elbtn5.style.display = 'block'
  })
})


window.addEventListener('load', () => {
  const elbtn3 = document.querySelector('.gb512')
  const elbtn4 = document.querySelector('.gb265')
  const elbtn6 = document.querySelector('.tb1')
  elbtn4.addEventListener('click', () => {
    elbtn3.style.border = '3px solid gray'
    elbtn4.style.border = '3px solid #458FDA'
    elbtn6.style.display = 'none'
  })
})


window.addEventListener('load', () => {
  const elbtn3 = document.querySelector('.gb512')
  const elbtn4 = document.querySelector('.gb265')
  const elbtn6 = document.querySelector('.tb1')
  elbtn6.addEventListener('click', () => {
    elbtn3.style.border = '3px solid gray'
    elbtn4.style.border = '3px solid gray'
    elbtn6.style.border = '3px solid #458FDA'
  })
})

window.addEventListener('load', () => {
  const elbtn3 = document.querySelector('.gb512')
  const elbtn4 = document.querySelector('.gb265')
  const elbtn6 = document.querySelector('.tb1')
  elbtn3.addEventListener('click', () => {
    elbtn3.style.border = '3px solid #458FDA'
    elbtn4.style.border = '3px solid gray'
    elbtn6.style.border = '3px solid gray'
  })
})








// Count1

window.addEventListener('load', () => {
  const elCountBtn = document.querySelector('.mac__plus2');
  const elCountBtn1 = document.querySelector('.mac__plus');
  const elCountMinus2 = document.querySelector('.mac__minus2');
  const elCountMinus = document.querySelector('.mac__minus');
  const elbtn = document.querySelector('.gb15');
  elbtn.addEventListener("click", () => {
    elCountBtn.style.display = 'block';
    elCountMinus2.style.display = 'block';
    elCountBtn1.style.display = 'none';
    elCountMinus.style.display = 'none';
  });
})

window.addEventListener('load', () => {
  const elCountBtn = document.querySelector('.mac__plus2');
  const elCountBtn1 = document.querySelector('.mac__plus');
  const elCountMinus2 = document.querySelector('.mac__minus2');
  const elCountMinus = document.querySelector('.mac__minus');
  const elbtn2 = document.querySelector('.gb8')
  elbtn2.addEventListener("click", () => {
    elCountBtn.style.display = 'none';
    elCountBtn1.style.display = 'block';
    elCountMinus.style.display = 'block';
    elCountMinus2.style.display = 'none';
  });
})


// Count2


window.addEventListener('load', () => {
  const elCountBtn = document.querySelector('.mac__plus2');
  const elCountBtn1 = document.querySelector('.mac__plus');
  const elCountBtn2 = document.querySelector('.mac__plus3');
  const elCountMinus = document.querySelector('.mac__minus');
  const elCountMinus2 = document.querySelector('.mac__minus2');
  const elCountMinus3 = document.querySelector('.mac__minus3');
  const elbtn3 = document.querySelector('.gb512')
  elbtn3.addEventListener("click", () => {
    elCountBtn.style.display = 'none';
    elCountBtn1.style.display = 'none';
    elCountBtn2.style.display = 'block';
    elCountMinus.style.display = 'none';
    elCountMinus2.style.display = 'none';
    elCountMinus3.style.display = 'block';
  });
})

window.addEventListener('load', () => {
  const elCountBtn = document.querySelector('.mac__plus2');
  const elCountBtn1 = document.querySelector('.mac__plus');
  const elCountBtn2 = document.querySelector('.mac__plus3');
  const elCountMinus = document.querySelector('.mac__minus');
  const elCountMinus2 = document.querySelector('.mac__minus2');
  const elCountMinus3 = document.querySelector('.mac__minus3');
  const elbtn3 = document.querySelector('.gb265')
  elbtn3.addEventListener("click", () => {
    elCountBtn.style.display = 'none';
    elCountBtn1.style.display = 'block';
    elCountBtn2.style.display = 'none';
    elCountMinus2.style.display = 'none';
    elCountMinus.style.display = 'block';
    elCountMinus3.style.display = 'none';
  });
})


window.addEventListener('load', () => {
  const elCountBtn = document.querySelector('.mac__plus2');
  const elCountBtn1 = document.querySelector('.mac__plus');
  const elCountBtn2 = document.querySelector('.mac__plus3');
  const elCountMinus = document.querySelector('.mac__minus');
  const elCountMinus2 = document.querySelector('.mac__minus2');
  const elCountMinus3 = document.querySelector('.mac__minus3');
  const elbtn3 = document.querySelector('.gb265')
  elbtn3.addEventListener("click", () => {
    elCountBtn.style.display = 'block';
    elCountBtn1.style.display = 'none';
    elCountBtn2.style.display = 'none';
    elCountMinus2.style.display = 'block';
    elCountMinus.style.display = 'none';
    elCountMinus3.style.display = 'none';
  });
})


window.addEventListener('load', () => {
  const elCountBtn = document.querySelector('.mac__plus2');
  const elCountBtn1 = document.querySelector('.mac__plus');
  const elCountBtn2 = document.querySelector('.mac__plus3');
  const elCountMinus = document.querySelector('.mac__minus');
  const elCountMinus2 = document.querySelector('.mac__minus2');
  const elCountMinus3 = document.querySelector('.mac__minus3');
  const elbtn2 = document.querySelector('.gb8')
  elbtn2.addEventListener("click", () => {
    elCountBtn.style.display = 'none';
    elCountBtn1.style.display = 'block';
    elCountBtn2.style.display = 'none';
    elCountMinus2.style.display = 'none';
    elCountMinus.style.display = 'block';
    elCountMinus3.style.display = 'none';
  });
})


window.addEventListener('load', () => {
  const elCountBtn = document.querySelector('.mac__plus2');
  const elCountBtn1 = document.querySelector('.mac__plus');
  const elCountBtn2 = document.querySelector('.mac__plus3');
  const elCountMinus = document.querySelector('.mac__minus');
  const elCountMinus2 = document.querySelector('.mac__minus2');
  const elCountMinus3 = document.querySelector('.mac__minus3');
  const elbtn3 = document.querySelector('.gb15')
  elbtn3.addEventListener("click", () => {
    elCountBtn.style.display = 'block';
    elCountBtn1.style.display = 'none';
    elCountBtn2.style.display = 'none';
    elCountMinus2.style.display = 'block';
    elCountMinus3.style.display = 'none';
    elCountMinus.style.display = 'none';
  });
})


window.addEventListener('load', () => {
  const elCountBtn = document.querySelector('.mac__plus2');
  const elCountBtn1 = document.querySelector('.mac__plus');
  const elCountBtn5 = document.querySelector('.mac__plus5');
  const elCountBtn2 = document.querySelector('.mac__plus3');
  const elCountMinus = document.querySelector('.mac__minus');
  const elCountMinus2 = document.querySelector('.mac__minus2');
  const elCountMinus3 = document.querySelector('.mac__minus3');
  const elCountMinus4 = document.querySelector('.mac__minus4');
  const elbtn6 = document.querySelector('.tb1')
  elbtn6.addEventListener("click", () => {
    elCountBtn.style.display = 'none';
    elCountBtn1.style.display = 'none';
    elCountBtn2.style.display = 'none';
    elCountBtn5.style.display = 'block';
    elCountMinus.style.display = 'none';
    elCountMinus2.style.display = 'none';
    elCountMinus3.style.display = 'none';
    elCountMinus4.style.display = 'block';
  });
})



window.addEventListener('load', () => {
  const elCountBtn = document.querySelector('.mac__plus2');
  const elCountBtn1 = document.querySelector('.mac__plus');
  const elCountBtn5 = document.querySelector('.mac__plus5');
  const elCountBtn2 = document.querySelector('.mac__plus3');
  const elCountMinus = document.querySelector('.mac__minus');
  const elCountMinus2 = document.querySelector('.mac__minus2');
  const elCountMinus3 = document.querySelector('.mac__minus3');
  const elCountMinus4 = document.querySelector('.mac__minus4');
  const elbtn3 = document.querySelector('.gb265')
  elbtn3.addEventListener("click", () => {
    elCountBtn.style.display = 'block';
    elCountBtn1.style.display = 'none';
    elCountBtn2.style.display = 'none';
    elCountBtn5.style.display = 'none';
    elCountMinus2.style.display = 'block';
    elCountMinus.style.display = 'none';
    elCountMinus4.style.display = 'none';
    elCountMinus3.style.display = 'none';
  });
})



window.addEventListener('load', () => {
  const elCountBtn = document.querySelector('.mac__plus2');
  const elCountBtn1 = document.querySelector('.mac__plus');
  const elCountBtn5 = document.querySelector('.mac__plus5');
  const elCountBtn2 = document.querySelector('.mac__plus3');
  const elCountMinus = document.querySelector('.mac__minus');
  const elCountMinus2 = document.querySelector('.mac__minus2');
  const elCountMinus3 = document.querySelector('.mac__minus3');
  const elCountMinus4 = document.querySelector('.mac__minus4');
  const elbtn3 = document.querySelector('.gb512')
  elbtn3.addEventListener("click", () => {
    elCountBtn.style.display = 'none';
    elCountBtn1.style.display = 'none';
    elCountBtn2.style.display = 'block';
    elCountBtn5.style.display = 'none';
    elCountMinus2.style.display = 'none';
    elCountMinus4.style.display = 'none';
    elCountMinus3.style.display = 'block';
    elCountMinus.style.display = 'none';
  });
})





window.addEventListener('load', () => {
  const elCountBtn = document.querySelector('.mac__plus2');
  const elCountBtn1 = document.querySelector('.mac__plus');
  const elCountBtn5 = document.querySelector('.mac__plus5');
  const elCountBtn2 = document.querySelector('.mac__plus3');
  const elCountMinus = document.querySelector('.mac__minus');
  const elCountMinus2 = document.querySelector('.mac__minus2');
  const elCountMinus3 = document.querySelector('.mac__minus3');
  const elCountMinus4 = document.querySelector('.mac__minus4');
  const elbtn3 = document.querySelector('.gb15')
  elbtn3.addEventListener("click", () => {
    elCountBtn.style.display = 'block';
    elCountBtn1.style.display = 'none';
    elCountBtn2.style.display = 'none';
    elCountBtn5.style.display = 'none';
    elCountMinus2.style.display = 'block';
    elCountMinus4.style.display = 'none';
    elCountMinus3.style.display = 'none';
    elCountMinus.style.display = 'none';
  });
})