import React, { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from "react-router";
import { Container, Row, Col, Image } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getMovieBySlugSelector } from "../../../redux/selectors/movieSelector";
// import { getMovieBySlugAction } from "../../../redux/actions/movieActions";
import moment from "moment";
// import ModalForm from "../components/ModalForm";
import axios from "axios";

function MoviesDetailPage() {
  const { slug } = useParams();
  const [movieInfo, setMovieInfo] = useState("");
  //   const movie = useSelector(getMovieBySlugSelector);
  //   const dispatch = useDispatch();
  //   const history = useHistory();

  useEffect(() => {
    const movieDetails = async () => {
      const response = await axios.get(
        `http://localhost:3000/getMovieInfo?movie=${slug}`
      );
      const movieData = response.data;
      console.log(movieData.result);
      setMovieInfo(movieData.result);
    };
    movieDetails();
  }, []);

  const getYoutubeVideoId = (url) => {
    if (!url) {
      return null;
    }

    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };

  const VideoIframe = React.memo(({ src, height }) => (
    <iframe
      className="px-0 mb-0"
      title={movieInfo.title}
      controls
      height={height}
      allowFullScreen
      src={src}
    />
  ));

  const ScrollToTopOnMount = () => {
    useLayoutEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return null;
  };

  //   useEffect(() => {
  //     dispatch(getMovieBySlugAction(slug, history));

  //     return () => {
  //       dispatch({
  //         type: "REMOVE_MOVIE_DETAIL",
  //       });
  //     };
  //   }, [dispatch, slug, history]);

  return (
    <main className="flex-shrink-0">
      <ScrollToTopOnMount />
      <Container className="w-60">
        <Row>
          <Col md={3} className="px-0">
            <div>
              <Image
                src={movieInfo.poster}
                height={345}
                className="img-cover w-100"
              ></Image>
            </div>
          </Col>
          <Col>
            <div>
              <h5 className="fw-bold">{movieInfo.title}</h5>
            </div>
            <hr className="my-1" />
            <div>
              <span className="fw-bold">Director:</span>
              <span>{movieInfo.director}</span>
            </div>
            <div>
              <span className="fw-bold">Cast: </span>
              <span>{movieInfo.actor}</span>
            </div>
            <div>
              <span className="fw-bold">Category: </span>
              <span>{movieInfo.genre}</span>
            </div>
            <div>
              <span className="fw-bold">Premiere:</span>
              <span>{moment(movieInfo.release_date).format("DD/MM/YYYY")}</span>
            </div>
            <div>
              <span className="fw-bold">Time:</span>
              <span>{movieInfo.running_time} minute</span>
            </div>

            <div>
              <button>Book Tickets</button>
            </div>
            {/* <div>
              <span className="fw-bold">Ngôn ngữ: </span>
              <span>Tiếng Anh - Phụ đề Tiếng Việt</span>
            </div> */}
            {/* {movieInfo.state === "now-showing" ? (
              <div className="mt-2">
                <ModalForm movieInfo={movieInfo} isShow={false} />
              </div>
            ) : (
              ""
            )} */}
          </Col>
        </Row>
        <Row className="mt-2">
          <p className="px-0 mb-0">{movieInfo.description}</p>
        </Row>
        <Row className="mt-2 text-center">
          <VideoIframe
            height={444}
            src={`https://www.youtube.com/embed/${getYoutubeVideoId(
              movieInfo.trailer
            )}`}
          />
        </Row>
      </Container>
    </main>
  );
}

export default MoviesDetailPage;
