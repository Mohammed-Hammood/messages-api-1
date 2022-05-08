export const getFullDate = (date_:any, type?:string):string => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'Decemberry'];
    const date = new Date(date_);
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const DISPLAY = (item:any):string => {return ((item < 10)?("0" + item.toString()): item.toString());  }
    if(type==='time')return  DISPLAY(hours) + ':' + DISPLAY(minutes);
    return  months[month] + ' '+  DISPLAY(day).toString() + ', ' + year.toString()  + ' at '+ DISPLAY(hours) + ':' + DISPLAY(minutes);
}