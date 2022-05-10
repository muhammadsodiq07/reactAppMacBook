import React from 'react'
import Hero from './Hero'
import './Hero.css'

function HeroImg() {
  return (
    <div className="heroDiv">
      <div className="slider container">
        <ul className="slider__list d-flex">
          <li className="slider__item">
            <img
              src="https://cdn.macbro.uz/macbro/94afd179-46f3-49df-aaa5-de83d8210be1"
              alt="juice"
            />
          </li>
          <li className="slider__item">
            <img
              src="https://cdn.macbro.uz/macbro/d396e206-2cb4-4ae0-8549-6496ae82f7ca"
              alt="juice"
            />
          </li>
          <li className="slider__item">
            <img
              src="https://cdn.macbro.uz/macbro/32740eb9-79c2-4f28-93f8-5a04c8672f12"
              alt="juice"
            />
          </li>
          <li className="slider__item">
            <img
              src="https://cdn.macbro.uz/macbro/605bacc5-0b9d-4736-a189-32380916d1bf"
              alt="juice"
            />
          </li>
          <li className="slider__item">
            <img
              src="https://cdn.macbro.uz/macbro/4a2be20b-558e-4dda-852e-413b23b153e3"
              alt="juice"
            />
          </li>
        </ul>
        <ul className="slider__small-list d-flex align-items-center">
          <li className="slider__small-item">
            <button className="slider__btn active">
              <img
                src="https://cdn.macbro.uz/macbro/94afd179-46f3-49df-aaa5-de83d8210be1"
                alt="juice"
              />
            </button>
          </li>
          <li className="slider__small-item">
            <button className="slider__btn">
              <img
                src="https://cdn.macbro.uz/macbro/d396e206-2cb4-4ae0-8549-6496ae82f7ca"
                alt="juice"
              />
            </button>
          </li>
          <li className="slider__small-item">
            <button className="slider__btn">
              <img
                src="https://cdn.macbro.uz/macbro/32740eb9-79c2-4f28-93f8-5a04c8672f12"
                alt="juice"
              />
            </button>
          </li>
          <li className="slider__small-item">
            <button className="slider__btn">
              <img
                src="https://cdn.macbro.uz/macbro/605bacc5-0b9d-4736-a189-32380916d1bf"
                alt="juice"
              />
            </button>
          </li>
          <li className="slider__small-item">
            <button className="slider__btn">
              <img
                src="https://cdn.macbro.uz/macbro/4a2be20b-558e-4dda-852e-413b23b153e3"
                alt="juice"
              />
            </button>
          </li>
        </ul>
      </div>
        <Hero />
    </div>
  )
}

export default HeroImg

window.addEventListener('load', () => {
  let elSliderBtns = document.querySelectorAll('.slider__btn')
  elSliderBtns.forEach((item, index) => {
    item.addEventListener('click', () => {
      console.log('ok')
      let elSliderList = document.querySelector('.slider__list')
      elSliderList.style.transform = `translateX(${-index * 400}px)`
    })
  })
})
