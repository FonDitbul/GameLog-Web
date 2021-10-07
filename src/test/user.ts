interface user{
    id:number,
    email:string,
    nickname:string,
    password:string,
    signDate:number,
}

const testUser:user = {
    id:1,
    email:'test@naver.com',
    nickname:'testUser',
    password:'123456',
    signDate:12345
}

export {testUser};