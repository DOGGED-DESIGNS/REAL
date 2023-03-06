import { FormatQuoteOutlined } from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import React from "react";

import "../../App.css";

import "./Carousel.scss";
import Owl from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

// (".testimonials .container .owl-carousel");

const Carousel = () => {
  return (
    <div className="testimonials">
      <div className=" container">
        <Typography
          variant="h5"
          className=" font-weight-bold my-4 text-capitalize text-center"
        >
          {" "}
          see what people have to <br /> say about us{" "}
        </Typography>

        <Owl
          items={3}
          margin={8}
          autoplay={true}
          responsive={{
            0: {
              items: 1,
            },
            544: {
              items: 1,
            },
            644: {
              items: 1,
            },
          }}
          className="owl-theme"
        >
          <div className="  p-4 row">
            <div className="  col-12">
              <div className=" test p-4  shadow bg-white">
                <FormatQuoteOutlined
                  fontSize="large"
                  sx={{ color: "yellow" }}
                  className=" d-block my-4"
                />
                <Typography
                  variant="span"
                  className=" text-black-50 text-capitalize text-center"
                >
                  {" "}
                  we have been good customers for a very long time and i can
                  testify that dogged designs has never regretted patrunizing
                  them cys ther are the bes in the game
                </Typography>

                <div
                  className="  d-flex align-items-center mt-3 "
                  style={{ gap: "30px" }}
                >
                  <Avatar src="https://images.pexels.com/photos/11491093/pexels-photo-11491093.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />

                  <div className=" mt-4">
                    <Typography
                      variant="span"
                      className=" d-block text-capitalize font-weight-bold"
                    >
                      harry port
                    </Typography>
                    <Typography
                      variant="span"
                      className=" text-black-50 text-capitalize"
                    >
                      this is what i want to do
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="  p-4 row">
            <div className="  col-12">
              <div className=" test p-4  shadow bg-white">
                <FormatQuoteOutlined
                  fontSize="large"
                  sx={{ color: "yellow" }}
                  className=" d-block my-4"
                />
                <Typography
                  variant="span"
                  className=" text-black-50 text-capitalize text-center"
                >
                  {" "}
                  we have been good customers for a very long time and i can
                  testify that dogged designs has never regretted patrunizing
                  them cys ther are the bes in the game
                </Typography>

                <div
                  className=" d-flex align-items-center mt-3 "
                  style={{ gap: "30px" }}
                >
                  <Avatar src="https://images.pexels.com/photos/11491093/pexels-photo-11491093.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />

                  <div className=" mt-4">
                    <Typography
                      variant="span"
                      className=" d-block text-capitalize font-weight-bold"
                    >
                      harry port
                    </Typography>
                    <Typography
                      variant="span"
                      className=" text-black-50 text-capitalize"
                    >
                      this is what i want to do
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="  p-4 row">
            <div className="  col-12">
              <div className=" test p-4  shadow bg-white">
                <FormatQuoteOutlined
                  fontSize="large"
                  sx={{ color: "yellow" }}
                  className=" d-block my-4"
                />
                <Typography
                  variant="span"
                  className=" text-black-50 text-capitalize text-center"
                >
                  {" "}
                  we have been good customers for a very long time and i can
                  testify that dogged designs has never regretted patrunizing
                  them cys ther are the bes in the game
                </Typography>

                <div
                  className=" d-flex align-items-center mt-3 "
                  style={{ gap: "30px" }}
                >
                  <Avatar src="https://images.pexels.com/photos/11491093/pexels-photo-11491093.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />

                  <div className=" mt-4">
                    <Typography
                      variant="span"
                      className=" d-block text-capitalize font-weight-bold"
                    >
                      harry port
                    </Typography>
                    <Typography
                      variant="span"
                      className=" text-black-50 text-capitalize"
                    >
                      this is what i want to do
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="  p-4 row">
            <div className="  col-12">
              <div className=" test p-4  shadow bg-white">
                <FormatQuoteOutlined
                  fontSize="large"
                  sx={{ color: "yellow" }}
                  className=" d-block my-4"
                />
                <Typography
                  variant="span"
                  className=" text-black-50 text-capitalize text-center"
                >
                  {" "}
                  we have been good customers for a very long time and i can
                  testify that dogged designs has never regretted patrunizing
                  them cys ther are the bes in the game
                </Typography>

                <div
                  className=" d-flex align-items-center mt-3 "
                  style={{ gap: "30px" }}
                >
                  <Avatar src="https://images.pexels.com/photos/11491093/pexels-photo-11491093.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />

                  <div className=" mt-4">
                    <Typography
                      variant="span"
                      className=" d-block text-capitalize font-weight-bold"
                    >
                      harry port
                    </Typography>
                    <Typography
                      variant="span"
                      className=" text-black-50 text-capitalize"
                    >
                      this is what i want to do
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="  p-4 row">
            <div className="  col-12">
              <div className=" test p-4  shadow bg-white">
                <FormatQuoteOutlined
                  fontSize="large"
                  sx={{ color: "yellow" }}
                  className=" d-block my-4"
                />
                <Typography
                  variant="span"
                  className=" text-black-50 text-capitalize text-center"
                >
                  {" "}
                  we have been good customers for a very long time and i can
                  testify that dogged designs has never regretted patrunizing
                  them cys ther are the bes in the game
                </Typography>

                <div
                  className=" d-flex align-items-center mt-3 "
                  style={{ gap: "30px" }}
                >
                  <Avatar src="https://images.pexels.com/photos/11491093/pexels-photo-11491093.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />

                  <div className=" mt-4">
                    <Typography
                      variant="span"
                      className=" d-block text-capitalize font-weight-bold"
                    >
                      harry port
                    </Typography>
                    <Typography
                      variant="span"
                      className=" text-black-50 text-capitalize"
                    >
                      this is what i want to do
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="  p-4 row">
            <div className="  col-12">
              <div className=" test p-4  shadow bg-white">
                <FormatQuoteOutlined
                  fontSize="large"
                  sx={{ color: "yellow" }}
                  className=" d-block my-4"
                />
                <Typography
                  variant="span"
                  className=" text-black-50 text-capitalize text-center"
                >
                  {" "}
                  we have been good customers for a very long time and i can
                  testify that dogged designs has never regretted patrunizing
                  them cys ther are the bes in the game
                </Typography>

                <div
                  className=" d-flex align-items-center mt-3 "
                  style={{ gap: "30px" }}
                >
                  <Avatar src="https://images.pexels.com/photos/11491093/pexels-photo-11491093.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />

                  <div className=" mt-4">
                    <Typography
                      variant="span"
                      className=" d-block text-capitalize font-weight-bold"
                    >
                      harry port
                    </Typography>
                    <Typography
                      variant="span"
                      className=" text-black-50 text-capitalize"
                    >
                      this is what i want to do
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="  p-4 row">
            <div className="  col-12">
              <div className=" test p-4  shadow bg-white">
                <FormatQuoteOutlined
                  fontSize="large"
                  sx={{ color: "yellow" }}
                  className=" d-block my-4"
                />
                <Typography
                  variant="span"
                  className=" text-black-50 text-capitalize text-center"
                >
                  {" "}
                  we have been good customers for a very long time and i can
                  testify that dogged designs has never regretted patrunizing
                  them cys ther are the bes in the game
                </Typography>

                <div
                  className=" d-flex align-items-center mt-3 "
                  style={{ gap: "30px" }}
                >
                  <Avatar src="https://images.pexels.com/photos/11491093/pexels-photo-11491093.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" />

                  <div className=" mt-4">
                    <Typography
                      variant="span"
                      className=" d-block text-capitalize font-weight-bold"
                    >
                      harry port
                    </Typography>
                    <Typography
                      variant="span"
                      className=" text-black-50 text-capitalize"
                    >
                      this is what i want to do
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Owl>
      </div>
    </div>
  );
};

export default Carousel;
