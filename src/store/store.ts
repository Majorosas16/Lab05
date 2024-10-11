import { reducer } from './reducer'

//El estado global === appState / propiedades por ahora quemadas
export let appState = {
    backgroundColor: 'black',
    username: 'Juanes',
    id: 12345,
    screen: 'dashboard',
};


//Crear el dispatch recibe una accion.
export const dispatch = (action: any) => { // el dispatch clona le estado global para luego darse cuenta con el reducer que acción estoy lanzando
    
    const clone = JSON.parse(JSON.stringify(appState)); //esta linea clona lo que haya en el estado global

    appState = reducer(action, clone); // El estado global ahora va a ser igual lo que haya cambaido en el reducer. El reducer recibe una acción y trabaja con el clon

    observers.forEach((o) => o.render()); // donde haya un observador, que se ejecute el render de esa clase
};

//Agregar los observadores para los interesados, los suscritos. El store le notifica a la screen que algo cambió

let observers: any[] = []; // arreglo de observadores

export const addObserver = (ref: any) =>  {
    observers = [...observers, ref];
};