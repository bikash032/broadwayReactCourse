 export const greetingMessage=()=>{

    let date=new Date()
const hours=date.getHours()
if(hours<=12){
    return "GoodMorning !!"
}else if(hours<=17){
    return "Good Afternoon !!"
}else if(hours<=21){
    return "Good Evening !!"
}else{
    return "Good Night !!"
}
  
}
