import React from 'react';
import styled from 'styled-components';
import {
  FaShareAlt,
  FaHeart,
  FaRandom,
  FaForward,
  FaFastForward,
  FaBackward,
  FaFastBackward,
  FaPauseCircle,
  FaPlayCircle,
  FaRegHeart
} from 'react-icons/fa';
import { IoIosRepeat } from 'react-icons/io';
import {
  FiRepeat,
  FiPlayCircle,
  FiPauseCircle,
  FiFastForward,
  FiSkipForward,
  FiRewind,
  FiSkipBack,
  FiShare2
} from 'react-icons/fi';
import { TiArrowShuffle } from 'react-icons/ti';
import IconButton from '../components/IconButton';

const AlbumContainer = styled.div`
  background-image: url("${props => props.img}");
  background-size: cover;
  background-position: center;
  max-width: 500px;
  min-height: 800px;
  min-width: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
`;

const SongInfo = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0), 20%, rgba(0, 0, 0, 0.9));
  padding: 20px 10px 60px;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

const BandName = styled.p`
  font-size: 1.4rem;
`;

const SongName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-size: 1.6rem;
  margin-bottom: 20px;
  p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 0 10px;
  }
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export default function CurrentlyPlaying() {
  return (
    <AlbumContainer img="https://i.iheart.com/v3/re/new_assets/5b5231a69a32dbd4b37bc0fb?ops=contain(740,0)">
      <SongInfo>
        <BandName>Imagine Dragons</BandName>
        <SongName>
          <IconButton>
            <FiShare2 />
          </IconButton>
          <p>Thunder</p>
          <IconButton>
            <FaRegHeart />
          </IconButton>
        </SongName>
        <Controls>
          <IconButton>
            <TiArrowShuffle size="30" />
          </IconButton>
          <IconButton>
            <FiSkipBack size="30" />
          </IconButton>
          <IconButton>
            <FiRewind size="30" />
          </IconButton>
          <IconButton>
            <FiPauseCircle size="30" />
          </IconButton>
          <IconButton>
            <FiFastForward size="30" />
          </IconButton>
          <IconButton>
            <FiSkipForward size="30" />
          </IconButton>
          <IconButton>
            <FiRepeat size="30" />
          </IconButton>
          {/* <IoIosRepeat size="20" /> */}
        </Controls>
      </SongInfo>
    </AlbumContainer>
  );
}
