import { LightningElement,track,wire } from 'lwc';
import {registerListener, unregisterAllListeners} from 'c/pubsub';
import {CurrentPageReference} from 'lightning/navigation';

export default class CanvassSubscriber extends LightningElement {
    @track color;
    @wire(CurrentPageReference) pageRef;

    connectedCallback(){
        registerListener("changedColor")
    }

    disconnectedCallback(){
        unregisterAllListeners(this);
    }

    handleChangedColor(colorCode){
        console.log("color -->"+colorCode);
        this.color=colorCode;
    }

    get colorSytle(){
        return 'background-color:${this.color}';
    }
}