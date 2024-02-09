import styled from 'styled-components'
import { SelectOption } from '../molecules/SelectOption'
import { SearchButton } from '../atoms/SearchButton'
import { Year, yearType } from '../../types/year'
import { Tournament, tournamentType } from '../../types/tournament'
import { useState } from 'react'
import { GameChampionData, gameChampionDataType } from '../../types/gameChampionData'

type SelectAreaType = {
  champion: gameChampionDataType;
  setchampion: React.Dispatch<React.SetStateAction<gameChampionDataType>>;
}

export const SelectArea = (props: SelectAreaType) => {

  const {champion, setchampion} = props

  const [selectedYear, setSelectedYear] = useState<yearType>(Year[9]);
  const [selectedTournament, setSelectedTournament] = useState<tournamentType>(Tournament[0]);
  
  const onChangeYear = (value: yearType) => setSelectedYear(value);  
  
  const onChangeTournament = (value: tournamentType) =>  setSelectedTournament(value);
  
  const onClickSearch = () => {
    const newChampion = GameChampionData.filter(({year}) => year === selectedYear.value).find(({tournament}) => tournament === selectedTournament.value) || champion
    setchampion(newChampion)
  };
  
  return (
    <SelectAreaContents>
        <SelectOption
          options={Year}
          defaultValue={selectedYear}
          onChange={onChangeYear}
        >
          開催年
        </SelectOption>
        <SelectOption
          options={Tournament}
          defaultValue={selectedTournament}
          onChange={onChangeTournament}
        >
          大会
        </SelectOption>
        <SearchButton onClick={() => onClickSearch()}>検索する</SearchButton>
    </SelectAreaContents>
  )
}

const SelectAreaContents = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`
