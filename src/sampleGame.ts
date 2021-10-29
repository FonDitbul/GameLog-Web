// import testGame from "./response.json"

interface cover{
    id:number,
    game:number,
    height:number,
    width:number,
    url:string
}

class GameData{
    public id;
    public name;
    public cover;

    constructor(
        id:number,
        name:string,
        cover:cover,
    ){
        this.id = id;
        this.name = name;
        this.cover = cover;
    }
}

const getGame = (category:object[]):GameData => {

}

const getGameName = (game:GameData):string => {
    return game.name;
}

const getGameCover = (game:GameData):cover => {
    return game.cover;
}

const getGameCoverURL = (cover:cover):string => {
    return cover.url;
}



export{};