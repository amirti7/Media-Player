import styled from "styled-components";
import { RowAudio } from "../App";

const colors = [
  "maroon",
  "purple",
  "blue",
  "darkgreen",
  "aqua",
  "blueviolet",
  "chocolate",
  "crimson",
  "deeppink",
];
const Container = styled.div`
  width: 100%;
  height: 100%;
  text-align: left;
`;
const MenuMute = styled.span`
  float: right;
`;

const MenuName = styled.span`
  text-align: left;
`;
const Row = styled.div`
  width: 100%;
  height: 10%;
`;

interface props {
  rows: RowAudio[];
}

const Rows: React.FC<props> = ({ rows }) => {
  function changeIsMuted(rowName: string) {
    let audios = document.getElementsByTagName("audio");
    var audiosArr = Array.prototype.slice.call(audios, 0);
    let selectedAudio = audiosArr.find((audio) => audio.id == rowName);
    if (!selectedAudio.muted) selectedAudio.muted = true;
    else selectedAudio.muted = false;
  }
  return (
    <Container>
      <MenuName>
        <b>
          <u>Channel Name</u>
        </b>
      </MenuName>
      <MenuMute>
        <b>
          <u>Mute Channel</u>
        </b>
      </MenuMute>
      {rows.map((row) => (
        <Row
          style={{
            backgroundColor: `${colors.at(rows.indexOf(row))}`,
          }}
        >
          {row.src}&nbsp;&nbsp;
          <input
            style={{ float: "right" }}
            type="checkbox"
            onChange={() => changeIsMuted(row.src)}
          />
          {/* <label>Mute</label> */}
          <br></br>
        </Row>
      ))}
    </Container>
  );
};

export default Rows;
