import React, { useEffect} from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";
import getAllData from "../../api/axiosConfig";



export default function Reviews() {

  useEffect(() => {
    getAllData();
  }, []);

   
  return (
    <Container>
      <Row>
        <Col>
          <h3>Reviews</h3>
        </Col>
      </Row>

      <Row className="mt-2">
        <Col>
          <img src={movies.poster} alt="poster image" />
        </Col>

        <Col>
          {
            <>
              <Row>
                <Col>
                  <ReviewForm
                    labelText="Write a Review?"
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </>
          }
        </Col>
      </Row>
    </Container>
  );
}
