export default class DateAndTime{
    date!:any;
    day!:any
    month!:any;
    year!:any
    constructor(date:any){
       const splitted_date= date.split('-')
       this.day=splitted_date[2];
       this.month=splitted_date[1];
       this.year=splitted_date[0]
    }
    getWeekDay(x:any):String{
        switch(x){
            case "01":
                return 'Monday'
            case "02":
                return 'Tuesday'
            case "03":
                return 'Wednesday'
            case "04":
                return 'Thursday'
            case "05":
                 return 'Friday'
            case "06":
                return 'Saturday'
            case "07":
                return 'Sunday'
            default:
                return "Invalid Day"
        }
    }
    getMonth(x:any):String{
        switch(x){
            case "01":
                return 'January'
            case "02":
                return 'February'
            case "03":
                return 'March'
            case "04":
                return 'April'
            case "05":
                 return 'May'
            case "06":
                return 'June'
            case "07":
                return 'July'
            case "08":
                return 'August'
            case "07":
                return 'September'
            case "07":
                return 'October'
            case "07":
                return 'November'
            case "07":
                return 'De'
            default:
                return ""
        }
    }
}