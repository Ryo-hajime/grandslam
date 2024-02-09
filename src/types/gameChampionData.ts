import { Tournament } from "./tournament";
import { Year } from "./year";

export interface gameChampionDataType {
    year: string;
    tournament: string;
    name: string;
    country?: string;
    imageSrc?: string;
    highlight?: string;
    isHeld: boolean;
}

export const GameChampionData: Array<gameChampionDataType> = [
    {
        year: Year[0].value,
        tournament: Tournament[0].value,
        name: "ノバク・ジョコビッチ",
        country: "セルビア🇷🇸",
        imageSrc: "./images/ao2015.jpg",
        isHeld: true
    },
    {
        year: Year[1].value,
        tournament: Tournament[0].value,
        name: "ノバク・ジョコビッチ",
        country: "セルビア🇷🇸",
        imageSrc: "./images/ao2016.jpg",
        isHeld: true
    },
    {
        year: Year[2].value,
        tournament: Tournament[0].value,
        name: "ロジャー・フェデラー",
        country: "スイス🇨🇭",
        imageSrc: "./images/ao2017.jpg",
        highlight: "https://www.youtube.com/watch?v=FBVi4wLxotU",
        isHeld: true
    },
    {   
        year: Year[3].value,
        tournament: Tournament[0].value,
        name: "ロジャー・フェデラー",
        country: "スイス🇨🇭",
        imageSrc: "./images/ao2018.jpg",
        highlight: "https://www.youtube.com/watch?v=8DSHQvlMlVA",
        isHeld: true
    },
    {   
        year: Year[4].value,
        tournament: Tournament[0].value,
        name: "ノバク・ジョコビッチ",
        country: "セルビア🇷🇸",
        imageSrc: "./images/ao2019.jpg",
        highlight: "https://www.youtube.com/watch?v=EnRV5BRXs28",
        isHeld: true
    },
    {
        year: Year[5].value,
        tournament: Tournament[0].value,
        name: "ノバク・ジョコビッチ",
        country: "セルビア🇷🇸",
        imageSrc: "./images/ao2020.jpg",
        highlight: "https://www.youtube.com/watch?v=0FsIdkTFLms",
        isHeld: true
    },
    {
        year: Year[6].value,
        tournament: Tournament[0].value,
        name: "ノバク・ジョコビッチ",
        country: "セルビア🇷🇸",
        imageSrc: "./images/ao2021.jpg",
        highlight: "https://www.youtube.com/watch?v=w4N_28vdS-Q",
        isHeld: true
    },
    {
        year: Year[7].value,
        tournament: Tournament[0].value,
        name: "ラファエル・ナダル",
        country: "スペイン🇪🇸",
        imageSrc: "./images/ao2022.jpg",
        highlight: "https://www.youtube.com/watch?v=v27M_RgrLzU",
        isHeld: true
    },
    {
        year: Year[8].value,
        tournament: Tournament[0].value,
        name: "ノバク・ジョコビッチ",
        country: "セルビア🇷🇸",
        imageSrc: "./images/ao2023.jpg",
        highlight: "https://www.youtube.com/watch?v=N2Dtsx-6aDc",
        isHeld: true
    },
    {
        year: Year[9].value,
        tournament: Tournament[0].value,
        name: "ヤニク・シナー",
        country: "イタリア🇮🇹",
        imageSrc: "./images/ao2024.jpg",
        highlight: "https://www.youtube.com/watch?v=b90INDbXX7Y",
        isHeld: true
    },
    {
        year: Year[0].value,
        tournament: Tournament[1].value,
        name: "スタン・ワウリンカ",
        country: "スイス🇨🇭",
        imageSrc: "./images/fr2015.jpg",
        highlight: "https://www.youtube.com/watch?v=JzLC_CVvLdw",
        isHeld: true
    },
    {
        year: Year[1].value,
        tournament: Tournament[1].value,
        name: "ノバク・ジョコビッチ",
        country: "セルビア🇷🇸",
        imageSrc: "./images/fr2016.jpg",
        highlight: "https://www.youtube.com/watch?v=tJ7MBFs31Bo",
        isHeld: true
    },
    {
        year: Year[2].value,
        tournament: Tournament[1].value,
        name: "ラファエル・ナダル",
        country: "スペイン🇪🇸",
        imageSrc: "./images/fr2017.jpg",
        highlight: "https://www.youtube.com/watch?v=QNgE9-0sNjQ",
        isHeld: true
    },
    {
        year: Year[3].value,
        tournament: Tournament[1].value,
        name: "ラファエル・ナダル",
        country: "スペイン🇪🇸",
        imageSrc: "./images/fr2018.jpg",
        highlight: "https://www.youtube.com/watch?v=ug17CLG3gzw",
        isHeld: true
    },
    {
        year: Year[4].value,
        tournament: Tournament[1].value,
        name: "ラファエル・ナダル",
        country: "スペイン🇪🇸",
        imageSrc: "./images/fr2019.jpg",
        highlight: "https://www.youtube.com/watch?v=bjjJnuPReVY",
        isHeld: true
    },
    {
        year: Year[5].value,
        tournament: Tournament[1].value,
        name: "ラファエル・ナダル",
        country: "スペイン🇪🇸",
        imageSrc: "./images/fr2020.jpg",
        highlight: "https://www.youtube.com/watch?v=gkIsvlZDG-Y",
        isHeld: true
    },
    {
        year: Year[6].value,
        tournament: Tournament[1].value,
        name: "ノバク・ジョコビッチ",
        country: "セルビア🇷🇸",
        imageSrc: "./images/fr2021.jpg",
        highlight: "https://www.youtube.com/watch?v=c7O8a68d_xM",
        isHeld: true
    },
    {
        year: Year[7].value,
        tournament: Tournament[1].value,
        name: "ラファエル・ナダル",
        country: "スペイン🇪🇸",
        imageSrc: "./images/fr2022.jpg",
        isHeld: true
    },
    {
        year: Year[8].value,
        tournament: Tournament[1].value,
        name: "ノバク・ジョコビッチ",
        country: "セルビア🇷🇸",
        imageSrc: "./images/fr2023.jpg",
        highlight: "https://www.youtube.com/watch?v=Rfcfzh2ujVE",
        isHeld: true
    },
    {
        year: Year[9].value,
        tournament: Tournament[1].value,
        name: "",
        country: "",
        imageSrc: "",
        isHeld: false
    },
    {
        year: Year[0].value,
        tournament: Tournament[2].value,
        name: "ノバク・ジョコビッチ",
        country: "セルビア🇷🇸",
        imageSrc: "./images/wi2015.jpg",
        highlight: "https://www.youtube.com/watch?v=7CWFcvvtrt8",
        isHeld: true
    },
    {
        year: Year[1].value,
        tournament: Tournament[2].value,
        name: "アンディ・マレー",
        country: "イギリス🇬🇧",
        imageSrc: "./images/wi2016.jpg",
        highlight: "https://www.youtube.com/watch?v=TpXmoK1aWs4",
        isHeld: true
    },
    {
        year: Year[2].value,
        tournament: Tournament[2].value,
        name: "ロジャー・フェデラー",
        country: "スイス🇨🇭",
        imageSrc: "./images/wi2017.jpg",
        highlight: "https://www.youtube.com/watch?v=1BKicTE-gvQ",
        isHeld: true
    },
    {
        year: Year[3].value,
        tournament: Tournament[2].value,
        name: "ノバク・ジョコビッチ",
        country: "セルビア🇷🇸",
        imageSrc: "./images/wi2018.jpg",
        highlight: "https://www.youtube.com/watch?v=6Rnp8AtYIow",
        isHeld: true
    },
    {
        year: Year[4].value,
        tournament: Tournament[2].value,
        name: "ノバク・ジョコビッチ",
        country: "セルビア🇷🇸",
        imageSrc: "./images/wi2019.jpg",
        highlight: "https://www.youtube.com/watch?v=mnLdAeSXZv0",
        isHeld: true
    },
    {
        year: Year[5].value,
        tournament: Tournament[2].value,
        name: "開催されませんでした。",
        country: "",
        imageSrc: "./images/wi2020.jpg",
        isHeld: true
    },
    {
        year: Year[6].value,
        tournament: Tournament[2].value,
        name: "ノバク・ジョコビッチ",
        country: "セルビア🇷🇸",
        imageSrc: "./images/wi2021.jpg",
        highlight: "https://www.youtube.com/watch?v=1IBhpowmI8s",
        isHeld: true
    },
    {
        year: Year[7].value,
        tournament: Tournament[2].value,
        name: "ノバク・ジョコビッチ",
        country: "セルビア🇷🇸",
        imageSrc: "./images/wi2022.jpg",
        highlight: "https://www.youtube.com/watch?v=2ZTT-6HXYnc",
        isHeld: true
    },
    {
        year: Year[8].value,
        tournament: Tournament[2].value,
        name: "カルロス・アルカラス",
        country: "スペイン🇪🇸",
        imageSrc: "./images/wi2023.jpg",
        highlight: "https://www.youtube.com/watch?v=dvBr9Wr8BCY",
        isHeld: true
    },
    {
        year: Year[9].value,
        tournament: Tournament[2].value,
        name: "",
        country: "",
        imageSrc: "",
        isHeld: false
    },
    {
        year: Year[0].value,
        tournament: Tournament[3].value,
        name: "ノバク・ジョコビッチ",
        country: "セルビア🇷🇸",
        imageSrc: "./images/us2015.jpg",
        isHeld: true
    },
    {
        year: Year[1].value,
        tournament: Tournament[3].value,
        name: "スタン・ワウリンカ",
        country: "スイス🇨🇭",
        imageSrc: "./images/us2016.jpg",
        isHeld: true
    },
    {
        year: Year[2].value,
        tournament: Tournament[3].value,
        name: "ラファエル・ナダル",
        country: "スペイン🇪🇸",
        imageSrc: "./images/us2017.jpg",
        highlight: "https://www.youtube.com/watch?v=5cp71egEPuI",
        isHeld: true
    },
    {
        year: Year[3].value,
        tournament: Tournament[3].value,
        name: "ノバク・ジョコビッチ",
        country: "セルビア🇷🇸",
        imageSrc: "./images/us2018.jpg",
        highlight: "https://www.youtube.com/watch?v=cl95jJEA7Kc",
        isHeld: true
    },
    {
        year: Year[4].value,
        tournament: Tournament[3].value,
        name: "ラファエル・ナダル",
        country: "スペイン🇪🇸",
        imageSrc: "./images/us2019.jpg",
        highlight: "https://www.youtube.com/watch?v=S63gJTsLiXc",
        isHeld: true
    },
    {
        year: Year[5].value,
        tournament: Tournament[3].value,
        name: "ドミニク・ティーム",
        country: "オーストリア🇦🇹",
        imageSrc: "./images/us2020.jpg",
        highlight: "https://www.youtube.com/watch?v=RIevWd_4Sig",
        isHeld: true
    },
    {
        year: Year[6].value,
        tournament: Tournament[3].value,
        name: "ダニール・メドベージェフ",
        country: "ロシア🇷🇺",
        imageSrc: "./images/us2021.jpg",
        highlight: "https://www.youtube.com/watch?v=iQcNk6lBMsE",
        isHeld: true
    },
    {
        year: Year[7].value,
        tournament: Tournament[3].value,
        name: "カルロス・アルカラス",
        country: "スペイン🇪🇸",
        imageSrc: "./images/us2022.jpg",
        highlight: "https://www.youtube.com/watch?v=SEFnfcfvLkw",
        isHeld: true
    },
    {
        year: Year[8].value,
        tournament: Tournament[3].value,
        name: "ノバク・ジョコビッチ",
        country: "セルビア🇷🇸",
        imageSrc: "./images/us2023.jpg",
        highlight: "https://www.youtube.com/watch?v=3pNQ6hDwBPg",
        isHeld: true
    },
    {
        year: Year[9].value,
        tournament: Tournament[3].value,
        name: "",
        country: "",
        imageSrc: "",
        isHeld: false
    }
]
