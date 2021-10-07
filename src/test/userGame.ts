interface cover{
    id:number,
    game:number,
    height:number,
    width:number,
    url:string
}

interface userGame{
    id:number,
    userid:number,
    
    gameId:number,
    gameName:string,
    cover:cover,
    aggregated_rating:number,
    aggregated_rating_count:number,
    first_release_date:number,

    userGameRating:number,
    userGameMemo:string,
    userGameStatus:string,
    createdTime:number,
}

const testUserGame:userGame = {
    id:5,
    userid:1,
        
    gameId:7342,
    gameName:'INSIDE',
    cover:{"id":113194,"game":7342,"height":960,"width":720,"url":"//images.igdb.com/igdb/image/upload/t_thumb/co2fca.jpg"},
    aggregated_rating:4.8,
    aggregated_rating_count:34,
    first_release_date:12345,

    userGameRating:4,
    userGameMemo:'ㅋㅋㅋㅋㅋ',
    userGameStatus:'todo',
    createdTime:553534,
}

export {testUserGame};