import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
// import 'swiper/components/pagination/pagination.min.css';
// import 'swiper/components/navigation/navigation.min.css';
import './Event.scss';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/core';
import { Image } from 'react-bootstrap';

SwiperCore.use([Autoplay, Pagination, Navigation]);

const Event = () => {
  const events = [
    'https://api.time.com/wp-content/uploads/2022/12/4-1.jpg',
    'https://media1.popsugar-assets.com/files/thumbor/ypxsBbabpXc2aXhMhjwnrJPGmm4/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2020/03/31/932/n/1922283/983de8085e83b4a9dc3d15.52422073_/i/foreign-movies-on-netflix.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcAkZ5u3UlAAYn_cSSNRmQ3DthiEhUuqEe9A&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv_7Q3ToeIwogH2KmVxVQP95ex4ozKuisX2IVBukhs4ABkhs0mXcYe36HUTp0ILt2qHpU&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Fe5shsdMWk9n-piSuIJFtYcGrObSiZJeNyLbY5Q4BclXtNAbtlCS0tw7-6KQlWbx07M&usqp=CAU',
  ];

  return (
    <div className="text-center mt-3">
      {/* <img src="https://www.cgv.vn/skin/frontend/cgv/default/images/h3_event.gif" alt="event" /> */}
      <div className="container px-0 mt-3">
        <Swiper
          slidesPerView={4}
          spaceBetween={20}
          slidesPerGroup={1}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          loopFillGroupWithBlank={true}>
          {events.map((event, i) => (
            <SwiperSlide key={i}>
              <Image className="img-event" src={event} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="container w-75 px-0 mt-3 d-flex justify-content-between">
        <div>
          <Image thumbnail src="https://www.cgv.vn/media/wysiwyg/packages/214x245.jpg" />
        </div>
        <div>
          <Image thumbnail src="https://www.cgv.vn/media/wysiwyg/2021/U22_WEB_496x247.jpg" />
        </div>
        <div>
          <Image
            thumbnail
            src="https://www.cgv.vn/media/wysiwyg/2021/CGV-DIGITAL-HALL-RENTAL-214x245.png"
          />
        </div>
      </div> */}
    </div>
  );
}

export default Event;
