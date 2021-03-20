import React, { useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../../Components/Categories/Categories";
import Video from "../../Components/Video/Video";
import { getPopularVideos } from "../../redux/actions/video.action";
import SkeletonVideo from "../../Components/skeletons/SkeletonVideo";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, loading } = useSelector((state) => state.homeVideos);
  // console.log(videos);
  return (
    <Container>
      <Categories />
      <Row>
        {!loading
          ? videos?.map((video, i) => (
              <Col lg={3} md={4} key={i}>
                <Video video={video} />
              </Col>
            ))
          : [...Array(20)].map((_, i) => (
              <Col lg={3} md={4} key={i}>
                <SkeletonVideo />
              </Col>
            ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
