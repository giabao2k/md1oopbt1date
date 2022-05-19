class Date{
    day;
    mon;
    year;
    constructor(d, m, y){
        this.day = d;
        this.mon = m;
        this.year = y;
    }
    getDay(){
        return this.day;
    }
    getMon(){
        return this.mon;
    }
    getYear(){
        return this.year;
    }
}