import React, { useRef, useEffect } from "react";
import * as facemesh from "@tensorflow-models/face-landmarks-detection";
import Webcam from "react-webcam";
import Header from "./components/Header/Header";
import styled from "styled-components";
import { drawMesh } from "./utils/utlities";
import About from "./components/About";
import * as blazeface from '@tensorflow-models/blazeface'
import * as tf from "@tensorflow/tfjs";

import "./App.css";

const WebCamContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
  text-align: center;
  .face-scanner {
    display: flex;
    justify-content: center;
    background-color: #1E2D2F;
  }
`;




function App() {
  //setup the references
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  //loading facemesh model
  const runFacemesh = async () => {
    const net = await facemesh.load(
      facemesh.SupportedPackages.mediapipeFacemesh
    );
    setInterval(() => {
      detect(net);
    }, 15); // this is the time in milliseconds
  };
  // detect functionality
  const detect = async (net) => {
    const webcam = webcamRef.current;
    // checks if the webcam is up and running on the app (readstate checks to see if we are getting data)
    if (
      typeof webcam !== "undefined" &&
      webcam !== null &&
      webcam.video.readyState === 4
    ) {
      // get properties
      const video = webcam.video;
      const videoWidth = webcam.video.videoWidth;
      const videoHeight = webcam.video.videoHeight;
      //set video width
      webcam.video.width = videoWidth;
      webcam.video.height = videoHeight;
      // set the canvas properties
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;
      // make detections
      const face = await net.estimateFaces({ input: video });

      // get the context for the drawing
      const ctx = canvasRef.current.getContext("2d");




      requestAnimationFrame(() => {
        drawMesh(face, ctx);
      });
    }
  };
  useEffect(() => {
    runFacemesh();
  }, []);
  return (
    <>
      <div>
        <Header />
        <WebCamContainer>
          <div className="face-scanner">
            <canvas
              ref={canvasRef}
              style={{
                borderRadius: 12,
                zIndex: 10,
                width: 640,
                height: 480,
              }}
            ></canvas>
            <Webcam
              ref={webcamRef}
              style={{
                position: "relative",
                zIndex: 9,
                width: 640,
                height: 480,
              }}
            />
          </div>
        </WebCamContainer>
        <About/>
      </div>
    </>
  );
}

export default App;
