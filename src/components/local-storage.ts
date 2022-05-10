const data_name = 'messages#0z';
export const updateFavorite = (id:number):void => {
    const messages = getMessages();
    let updated = false;
    const message = {
        id:id,
        favorite:true,
    };
   
    for(let i = 0; i < messages.length; i++){
        if(messages[i].id === id){
            updated = true;
            if(messages[i].favorite === true){
                messages[i].favorite = false;
            }else {
                messages[i].favorite = true;
            }
        }
    }
    localStorage.setItem(data_name, JSON.stringify(messages));

    if(!updated){
        messages.push(message);
        localStorage.setItem(data_name, JSON.stringify(messages));
    }
}
export const getFavorite = (id:number):boolean => {
    const messages = getMessages();
    for(let i = 0; i < messages.length; i++){
        if(messages[i].id === id){
            return messages[i].favorite;
        }
    }
    return false;
}
const getMessages = () => {
    if(localStorage.getItem(data_name) !== undefined && localStorage.getItem(data_name) !== null){
        const data:any = JSON.parse(localStorage.getItem(data_name) || '[]'); 
        return data;
    }
    localStorage.setItem(data_name, JSON.stringify([]));
    return [];
}