class CalcController{

    constructor(){
        this._local='pt-BR';
        this._displayCalcEl =  document.querySelector('#display');
        this._dateEl= document.querySelector("#data");
        this._timeEl= document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        }

        initialize(){
        this.setDisplayDateTime() 
         setInterval(()=>{
            this.setDisplayDateTime() 

         },1000);

        }

        setDisplayDateTime(){
            this.displayDate = this.currentDate.toLocaleDateString(this._local,{
                day:"2-digit",
                month:"long",
                year:"numeric"
            })
            this.displayTime = this.currentDate.toLocaleTimeString(this._local,);
        }

        get displayCalc(){
            return this._displayCalcEl.innerHTML;
        }
        set displayCalc(valor){
            this._displayCalcEl.innerHTML = valor;
        }

        get displayTime(){            
            return this._timeEl.innerHTML 
        }
        set displayTime(value){   
            return this._timeEl.innerHTML = value
        }

        get displayDate(){
            this._dateEl.innerHTML
        }
        set displayDate(value){            
            return this._dateEl.innerHTML = value
        }

        get currentDate(){
            return new Date();
        }

        set currentDate(value){
            this._currentDate= value;
        }
    
    
}
