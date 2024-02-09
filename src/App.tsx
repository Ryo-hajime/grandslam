import React, { useState } from 'react';
import { GameChampionData, gameChampionDataType } from './types/gameChampionData';
import { HeaderText } from './ components/atoms/HeaderText';
import { ChampionProfile } from './ components/organisms/ChampionProfile';
import { SelectArea } from './ components/organisms/SelectArea';

const App = () => {
  
  const [champion, setChampion] = useState<gameChampionDataType>(GameChampionData[9]);

  return (
    <>
      <HeaderText>
          グランドスラムの優勝者を検索するアプリです。
          <br />開催年と大会を選択してください。
      </HeaderText>
      <SelectArea
        champion={champion}
        setchampion={setChampion}
      />
      <ChampionProfile
        year={champion.year}
        tournament={champion.tournament}
        isHeld={champion.isHeld}
        name={champion.name}
        country={champion.country}
        highlight={champion.highlight}
        imageSrc={champion.imageSrc}
      />
    </>
  );
}

export default App;
