import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import Rows from "./components/Rows";
import { AiFillPlayCircle } from "react-icons/ai";
import { ImLoop } from "react-icons/im";
import { FaRegStopCircle } from "react-icons/fa";

const Container = styled.div`
  height: 60vh;
  width: 40vw;
  background-color: lightgrey;
  margin: auto;
`;

const Title = styled.h1``;

const LoopingStatement = styled.p`
  color: red;
`;
export interface RowAudio {
  src: string;
  on: boolean;
}

const initState: RowAudio[] = [
  {
    src: "DRUMS",
    on: true,
  },
  {
    src: "B VOC",
    on: true,
  },
  {
    src: "ALL TRACK",
    on: true,
  },
  {
    src: "_tambourine_shake_higher",
    on: true,
  },
  {
    src: "JIBRISH",
    on: true,
  },
  {
    src: "LEAD 1",
    on: true,
  },
  {
    src: "UUHO VOC",
    on: true,
  },
  {
    src: "HE HE VOC",
    on: true,
  },
];
export default function App() {
  const [rowAudios, setRowAudios] = useState<RowAudio[]>(initState);
  const [value, setValue] = useState<number>(0);
  const [isLooping, setIsLooping] = useState<boolean>(false);

  function playSongs() {
    let audios = document.getElementsByTagName("audio");
    var audiosArr = Array.prototype.slice.call(audios, 0);
    console.log("audiosArr", audiosArr);
    audiosArr.forEach((audio) => {
      audio.play();
    });
    progressBarUpdate();
  }

  function stopMusic() {
    let audios = document.getElementsByTagName("audio");
    var audiosArr = Array.prototype.slice.call(audios, 0);
    audiosArr.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
      audio.loop = false;
    });
    stopProgressBarUpdate();
  }

  function stopProgressBarUpdate() {
    setValue(18);
  }

  function loopMusic() {
    setIsLooping(!isLooping);
    let audios = document.getElementsByTagName("audio");
    var audiosArr = Array.prototype.slice.call(audios, 0);
    audiosArr.forEach((audio) => {
      if (!audio.muted) {
        if (!audio.loop) audio.loop = true;
        else audio.loop = false;
      }
    });
  }

  function progressBarUpdate() {
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 1;
        if (newValue >= 18) {
          clearInterval(interval);
          setValue(0);
          console.log("hey1");
        }
        return newValue;
      });
    }, 1000);
  }

  return (
    <Container className="App">
      <Title>Looper</Title>
      <Rows rows={rowAudios} />
      <audio id="DRUMS" src="/audio/DRUMS.mp3"></audio>
      <audio id="B VOC" src="/B VOC.mp3"></audio>
      <audio id="ALL TRACK" src="/audio/ALL TRACK.mp3"></audio>
      <audio
        id="_tambourine_shake_higher"
        src="/audio/_tambourine_shake_higher.mp3"
      ></audio>
      <audio id="JIBRISH" src="/audio/JIBRISH.mp3"></audio>
      <audio id="LEAD 1" src="/audio/LEAD 1.mp3"></audio>
      <audio id="UUHO VOC" src="/audio/UUHO VOC.mp3"></audio>
      <audio id="HE HE VOC" src="/audio/HE HE VOC.mp3"></audio>
      {"00:" + value}
      <progress value={value} max={18}></progress>
      {"0:18"}
      <br></br>
      <button onClick={playSongs}>
        <AiFillPlayCircle />
      </button>
      <button onClick={stopMusic}>
        <FaRegStopCircle />
      </button>
      <button onClick={loopMusic}>
        <ImLoop />
      </button>
      <br></br>
      <LoopingStatement>
        {isLooping ? "Looping" : "Not Looping"}
      </LoopingStatement>
    </Container>
  );
}
