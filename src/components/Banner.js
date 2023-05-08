import React from 'react';
import './banner.scss';

function Banner() {
  const banners = [
    'https://rukminim1.flixcart.com/image/416/416/poster/z/g/b/deadpool-comic-book-character-hollywood-movie-poster-original-imaecjz68dxa4ygf.jpeg',
    'https://rukminim1.flixcart.com/image/416/416/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg',
    // 'https://rukminim1.flixcart.com/image/416/416/poster/z/g/b/deadpool-comic-book-character-hollywood-movie-poster-original-imaecjz68dxa4ygf.jpeg',
    // 'https://rukminim1.flixcart.com/image/416/416/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg',
    // 'https://rukminim1.flixcart.com/image/416/416/poster/z/g/b/deadpool-comic-book-character-hollywood-movie-poster-original-imaecjz68dxa4ygf.jpeg',
    // 'https://rukminim1.flixcart.com/image/416/416/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg',
    // 'https://rukminim1.flixcart.com/image/416/416/poster/z/g/b/deadpool-comic-book-character-hollywood-movie-poster-original-imaecjz68dxa4ygf.jpeg',
    // 'https://rukminim1.flixcart.com/image/416/416/jf8khow0/poster/a/u/h/small-hollywood-movie-poster-blade-runner-2049-ridley-scott-original-imaf3qvx88xenydd.jpeg',
  ];

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={0}
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={1}
          aria-label="Slide 2"
        />
        {/* <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={2}
          aria-label="Slide 3"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={3}
          aria-label="Slide 4"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={4}
          aria-label="Slide 5"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={5}
          aria-label="Slide 6"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={6}
          aria-label="Slide 7"
        />
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to={7}
          aria-label="Slide 8"
        /> */}
      </div>

      {/* <div className="box-border h-32 w-32 p-4 border-4"> */}
      <div className="carousel-inner">
        {banners.map((url, i) => {
          let className = i === 0 ? 'carousel-item active' : 'carousel-item';
          return (
            <div key={i} className={className} data-bs-interval={3000}>
              <img src={url} className="mx-auto d-block w-45 h-15 img-banner" alt={'slide' + i} />
            </div>
          );
        })}
      </div>
    </div>
    // </div>
  );
}

export default Banner;
