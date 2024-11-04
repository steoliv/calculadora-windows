class CalcController {

    constructor(){

        this._displayCalc = '0' ;
        this.inicialize();
        this.initEventButtosn();
    }


    addEventListenerAll(element, events, fn){

        events.split(' ').forEach( event => {

            element.addEventListener(event, fn, false);
        }

        )
    }

    initEventButtosn(){

        let buttons = document.querySelectorAll(".btn");
        
        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, 'click drag', e => {
                
                console.log(btn.className.replace("btn-",""));
            });


            this.addEventListenerAll(btn, 'mouseup mouseover mousedown', e => {

                btn.style.cursor = 'pointer';
            });
        });
    }


    inicialize(){
        let displayCalcEl = document.querySelector("#display");

        displayCalcEl.innerHTML = "123456";
    }


    get displayCalc(){

        return this._displayCalc;

    }

    set displayCalc(value){
         
        this._displayCalc = value;

    }
}