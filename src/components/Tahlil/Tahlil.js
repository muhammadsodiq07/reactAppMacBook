import React from 'react'
import './Tahlil.css'

function Tahlil() {
  return (
    <div>
      <section id="text" className="text">
        <div className="container">
          <div className="text__btn-holder d-flex align-items-center">
            <button className="text__summary">Tahlil</button>
            <button className="text__spec">Texnik xususiyatlari</button>
            <span className="text__color" />
          </div>
          <div className="text__summary-info show-it">
            <p className="text__summary-text">
              Eng ingichka va yengil Apple noutbuki endi M1 chipi tufayli yanada
              kuchliroq ishlaydi. 8 yadroli protsessor sizning vazifalaringizni
              katta tezlik blan amalga oshiradi. 8 yadroli GPU-ning to'liq
              quvvatidan foydalanib, grafikani talab qiladigan dasturlar va
              o'yinlarning keyingi darajasiga chiqing. Mashinani o'rganish uchun
              16 yadroli Neural Engine yordamida operatsiyalarini tezlashtiradi
              va 18 soatgacha zaryad olmasdan ishlaydi. MacBook Air hali ham
              ixcham, lekin hozir u ancha kuchliroq.
            </p>
          </div>
          <div className="text__specifications">
            <p className="text__spec-text p-0 m-0">Ekran: 13,3 "(2560x1600)</p>
            <p className="text__spec-text p-0 m-0">Matritsa: IPS</p>
            <p className="text__spec-text p-0 m-0">
              Protsessor: Apple M1 (8x3200 MGts)
            </p>
            <p className="text__spec-text p-0 m-0">
              Video karta: Apple grafikasi 8 yadroli, Apple grafikasi 7 yadroli
            </p>
            <p className="text__spec-text p-0 m-0">
              Ulagichlar: Mikrofon / naushniklar kombinatsiyasi, Thunderbolt /
              USB 4 x 2
            </p>
            <p className="text__spec-text p-0 m-0">
              USB Type-C funktsiyasi: Quvvatni etkazib berish, Thunderbolt 3,
              Thunderbolt 4
            </p>
            <p className="text__spec-text p-0 m-0">
              Simsiz interfeyslar: Wi-Fi 802.11ax, Bluetooth 5.0
            </p>
            <p className="text__spec-text p-0 m-0">Batareya quvvati: 49,9 Wh</p>
            <p className="text__spec-text p-0 m-0">Ish vaqti: 18 soat</p>
            <p className="text__spec-text p-0 m-0">Operatsion tizim: macOS</p>
            <p className="text__spec-text p-0 m-0">
              Hajmi: 304.1x212.4x16.1 mm
            </p>
            <p className="text__spec-text p-0 m-0">Og'irligi: 1,29 kg</p>
          </div>
        </div>
      </section>
      <section id="laptopMac" className="laptopMac position-relative">
        <div className="container">
          <h2 className="laptopMac__title">O'xshash mahsulotlar</h2>
          <div className="laptopMac__list-holder position-relative">
            <ul className="laptopMac__list">
              <li className="laptopMac__item col-4">
                <button className="laptopMac__btn">
                  <div className="laptopMac__img-container">
                    <img
                      src="https://cdn.macbro.uz/macbro/ad319481-63dc-4bc2-bf4d-7a6c7aec02f5"
                      alt="computer"
                    />
                  </div>
                  <p className="laptopMac__name">MacBook Pro 13" (with M1)</p>
                  <span className="laptopMac__price">14 949 500</span>
                </button>
              </li>
              <li className="laptopMac__item col-4">
                <button className="laptopMac__btn">
                  <div className="laptopMac__img-container">
                    <img
                      src="https://cdn.macbro.uz/macbro/68a37b19-71f9-4342-addb-eae078edf11e"
                      alt="computer"
                    />
                  </div>
                  <p className="laptopMac__name">
                    MacBook Air 13" (with Intel)
                  </p>
                </button>
              </li>
              <li className="laptopMac__item col-4">
                <button className="laptopMac__btn">
                  <div className="laptopMac__img-container">
                    <img
                      src="https://cdn.macbro.uz/macbro/98128be6-9be6-4691-a236-ea092158ed2a"
                      alt="computer"
                    />
                  </div>
                  <p className="laptopMac__name">
                    MacBook Pro 13-inch (with Intel)
                  </p>
                </button>
              </li>
              <li className="laptopMac__item col-4">
                <button className="laptopMac__btn">
                  <div className="laptopMac__img-container">
                    <img
                      src="https://cdn.macbro.uz/macbro/6d8aecc6-0e5e-40b5-b33d-3d9774f4208d"
                      alt="computer"
                    />
                  </div>
                  <p className="laptopMac__name">MacBook Pro 16-inch</p>
                  <span className="laptopMac__price">25 694 000 so'm</span>
                </button>
              </li>
              <li className="laptopMac__item col-4">
                <button className="laptopMac__btn">
                  <div className="laptopMac__img-container">
                    <img
                      src="https://cdn.macbro.uz/macbro/c9ad4d28-1980-4eaf-8b38-8007adcdf12e"
                      alt="computer"
                    />
                  </div>
                  <p className="laptopMac__name">Mac mini</p>
                  <span className="laptopMac__price">9 110 000</span>
                </button>
              </li>
              <li className="laptopMac__item col-4">
                <button className="laptopMac__btn">
                  <div className="laptopMac__img-container">
                    <img
                      src="https://cdn.macbro.uz/macbro/955623b2-fcab-4ff4-9b70-459ef3c8e905"
                      alt="computer"
                    />
                  </div>
                  <p className="laptopMac__name">iMac 24</p>
                  <span className="laptopMac__price">19 270 500 so'm</span>
                </button>
              </li>
              <li className="laptopMac__item col-4">
                <button className="laptopMac__btn">
                  <div className="laptopMac__img-container">
                    <img
                      src="https://cdn.macbro.uz/macbro/46c341eb-d0ca-448a-a547-f6f45d6ba95a"
                      alt="computer"
                    />
                  </div>
                  <p className="laptopMac__name">iMac 27</p>
                  <span className="laptopMac__price">22 190 500 so'm</span>
                </button>
              </li>
              <li className="laptopMac__item col-4">
                <button className="laptopMac__btn">
                  <div className="laptopMac__img-container">
                    <img
                      src="https://cdn.macbro.uz/macbro/0dafb741-6d31-43d6-b824-0b1ba4422271"
                      alt="computer"
                    />
                  </div>
                  <p className="laptopMac__name">MacBook Pro 14-inch</p>
                  <span className="laptopMac__price">23 358 000 so'm</span>
                </button>
              </li>
              <li className="laptopMac__item col-4">
                <button className="laptopMac__btn">
                  <div className="laptopMac__img-container">
                    <img
                      src="https://cdn.macbro.uz/macbro/b9c18548-4286-4fd8-91ce-d89903f46e64"
                      alt="computer"
                    />
                  </div>
                  <p className="laptopMac__name">MacBook Pro 16-inch</p>
                  <span className="laptopMac__price">28 614 000 so'm</span>
                </button>
              </li>
              <li className="laptopMac__item col-4">
                <button className="laptopMac__btn">
                  <div className="laptopMac__img-container">
                    <img
                      src="https://cdn.macbro.uz/macbro/df7ae0bb-ff0d-40b0-8fe8-d52c4a38d884"
                      alt="computer"
                    />
                  </div>
                  <p className="laptopMac__name">iMac 21</p>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <button className="arrow-btn left">
          <i className="bx bx-chevron-left" />
        </button>
        <button className="arrow-btn right">
          <i className="bx bx-chevron-right" />
        </button>
      </section>
    </div>
  )
}

export default Tahlil

window.addEventListener('load', () => {

// Bottom slider

let elSimilarList = document.querySelector(".laptopMac__list");
let elRight = document.querySelector(".right");
let elLeft = document.querySelector(".left");
let elCheck = 0;

elRight.addEventListener("click", () => {
  elCheck++;

  carouselIt();
});

elLeft.addEventListener("click", () => {
  elCheck--;
  carouselIt();
});

function carouselIt(){
  if(elCheck === 0){
    elLeft.style.display = "none";
  } else if(elCheck > 0){
    elLeft.style.display = "block";
  }

  if(elCheck === 7){
    elRight.style.display = "none";
  } else{
    elRight.style.display = "block";
  }

  elSimilarList.style.transform = `translate(${-elCheck * 33.3}%)`;
}
})
