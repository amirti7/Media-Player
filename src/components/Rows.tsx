import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const Row = styled.div`
  width: 100%;
  height: 20%;
`;

export default function Rows() {
  return (
    <Container>
      <audio id="myAudio">
        <source src="horse.ogg" type="audio/ogg" />
        <source src="horse.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Row>Row1</Row>
    </Container>
  );
}
