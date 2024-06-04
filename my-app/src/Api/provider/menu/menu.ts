import request from "../../request";


export function BebidasAPI(){
    return request(
        {
            url: "bebidas",
            method: 'GET',
        }
    )
}

export function EntrantesAPI(){
    return request(
        {
            url: 'entrantes',
            method: 'GET'
        }
    )
}

export function PlatosAPI(){
    return request(
        {
            url: 'platos',
            method: 'GET'
        }
    )
}

export function PostresAPI(){
    return request(
        {
            url:'postres',
            method: 'GET'
        }
    )
}