export interface UserData{
    id? : string,
    username : string,
    phone : Number,
    email : string,
    country : string,
    state : string,
    countryCode : string,
    skills : Array<Skills>
}

interface Skills{
    ratting : string,
    skillName : string
}

export interface LoginData {
    email : string,
    password : string
}

export interface TokenData{
    token : string
}