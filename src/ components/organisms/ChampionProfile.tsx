import React from 'react'
import styled from 'styled-components'
import { gameChampionDataType } from '../../types/gameChampionData'


export const ChampionProfile = (props: gameChampionDataType) => {
    const {year, tournament, isHeld, name, country, highlight, imageSrc} = props

    return (
        <ProfileWrapper>
            <ProfileTextarea>
                <TournamentName>{`${year}年　${tournament}`}</TournamentName>
                <ProfileName>
                    {isHeld ? name : "まだ開催されていません。"}
                    {country && <ProfileCountry>{`（${country}）`}</ProfileCountry>}
                </ProfileName>
                {isHeld ? highlight && <TextButton href={highlight} target='_blank'>決勝戦ハイライト</TextButton> : <Winner>誰が優勝すると思いますか？</Winner>}
            </ProfileTextarea>
            <ProfileImage src={isHeld ? imageSrc : "images/dummy.jpg"} alt={name} />
        </ProfileWrapper>
    )
}

const ProfileWrapper = styled.div`
    padding-top: 50px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    max-width: 840px;
    margin-left: auto;
    margin-right: auto;
    img{
        aspect-ratio: 1;
        object-fit: cover;
        width: calc(45% - 50px);
        padding-right: 50px;
    }
`

const ProfileTextarea = styled.div`
    width: 55%;
    padding-top: 70px;
`

const TournamentName = styled.p`
    font-size: 22px;
    font-weight: bold;
    padding-bottom: 15px;
`

const ProfileName = styled.p`
    font-size: 28px;
    font-weight: bold;
    padding-bottom: 30px;
`

const ProfileCountry = styled.span``

const TextButton = styled.a`
    color: #2655ac;
    font-size: 18px;
    cursor: pointer;
`

const Winner = styled.p``

const ProfileImage = styled.img``
