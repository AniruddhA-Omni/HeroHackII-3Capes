import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import './Services.css'
const data = [
  {
    i: 0,
    src: "https://tnsacs.in/assets/images/blood2-01.png",
    para: "Blood Donation Is A Small Act Of Kindness That Does Great And Big Wonders.Blood Donation Is A Small Act Of Kindness That Does Great And Big Wonders.Blood Donation Is A Small Act Of Kindness That Does Great And Big Wonders.",
    btn: "Donate Now",
    href: '/blooddonation'
  },
  {
    i: 1,
    src: "https://thumbs.dreamstime.com/b/hotel-bed-sign-black-background-hotel-bed-sign-black-background-simple-vector-logo-163154018.jpg",
    para: "Urgent Need of beds?? Fill the form to notify the hospitals nearby ",
    btn: "Arrange beds",
    href: '/bed'
  },
  {
    i: 2,
    src: "https://waymaker-group.com/wp-content/uploads/2020/04/a-computer-rendering-of-sars-cov-2-virus-on-black-background-severe-acute-respiratory-syndrome-coronavirus-2-covid-19-virion-particle.jpg",
    para: "Get information about the number of cases accross the globe and other covid related analytics",
    btn: "Get Info",
    href: 'https://covid-19-tracker-132e2.web.app/'
  }
]
function Services() {
  

  return (
    <div className='service'>
      <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={15}
        totalSlides={3}
      >
        <Slider>
          {data.map((e) => (
            <Slide className='slide' index={e.i}>
              <div className='slide_1'>
                <img src={e.src} />
                <div style={{ width: 1000, marginBottom: 20 }}><strong>{e.para}</strong></div>
                <button className='sbtn'><a href={e.href}>{e.btn}</a></button>
              </div>
            </Slide>
          ))}
        </Slider>
        <ButtonBack className='sbtn'>←</ButtonBack>
        <ButtonNext className='sbtn'>→</ButtonNext>
      </CarouselProvider>
    </div>
  )
}

export default Services