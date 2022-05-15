import './Control.css';
import Calculadora from './Calculadora';
import Calorias from './Calorias';

export default function Control() {

    //logica de los botones

function One() {    
    console.log('One');
}

function Two() {
    console.log('Two');
}

    return (
        <div>
            <form action="" className="control">
                <input type="radio" name="botones" id="button_1" defaultValue="1" onClick={One}/>
                <label htmlFor="button_1" id="button_one">Calculadora</label>
                <input type="radio" name="botones" id="button_2" defaultValue="2" onClick={Two}/>
                <label htmlFor="button_2" id="button_two">Calorias</label>
            </form>
            <Calculadora />
            <Calorias />
        </div>
    );
}