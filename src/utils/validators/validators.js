

export const required =(value)=> {

    if(value){
        return undefined
    }
    return 'Field required'

}


export const maxLengthCreator=(maxLength)=>
    (value)=> {

    if(value&&value.length>maxLength){
        return `MAX length is ${maxLength} symbol`
    }
    return undefined

}

