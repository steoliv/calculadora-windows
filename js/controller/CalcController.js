class CalcController {

    constructor(){

        this._operation = [];
        this._displayCalcElHtml =  document.querySelector("#display");
        this.inicialize();
        this.initEventButtons();
    }


    addEventListenerAll(element, events, fn){

        events.split(' ').forEach( event => {

            element.addEventListener(event, fn, false);
        }

        )
    }

    clearAll(){

        this._operation = [];
        
    }

    clearEntry(){

        this._operation.pop()
    }

    addOperation(value){
        
        this._operation.push(value);
        
        console.log(this._operation);
    }
    
    
    setError(){
        
        this.displayCalc = "ERROR";
        
    }
    
    
    
    execButtons(value){
        
        switch(value){

            case 'ce' : 
                this.clearAll();
            break;

            case 'c' : 
                this.clearEntry();
            break;
            
            case 'somar' : 
            
            break;

            case 'subtrair' : 
            
            break;

            case 'porcentagem' : 
            
            break;

            case 'multiplicar' : 
            
            break;

            case 'virgula' : 
            
            break;

            case 'result' : 
            
            break;

            case 'dividir' : 
            
            break;

            case '1' : 
            case '2' : 
            case '3' : 
            case '4' : 
            case '5' : 
            case '6' : 
            case '7' : 
            case '8' : 
            case '9' : 
                this.addOperation(parseInt(value));
            break;

            default :       
                this.setError();
            break;
        }


    }

    initEventButtons(){

        let buttons = document.querySelectorAll("button");
        
        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, 'click drag', e => {
                               
               let textbtn = e.srcElement.id;

               this.execButtons(textbtn);

            });


            this.addEventListenerAll(btn, 'mouseup mouseover mousedown', e => {

                btn.style.cursor = 'pointer';
            });
        });
    }


    inicialize(){


    }


    get displayCalc(){

        return this._displayCalcElHtml.innerHTML;

    }

    set displayCalc(value){
         
        this._displayCalcElHtml.innerHTML = value;

    }
    
}