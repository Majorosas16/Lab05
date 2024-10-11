import { addObserver, appState, dispatch } from "../store/store";

class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this) // voy agregar un observador aquí. eso significa que al arreglo de observadores el store.ts se le agrega esta clase (dashboard.ts)
		
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = '';
		const btn = this.ownerDocument.createElement('button');
		btn.innerText = 'Cambiar background';
		this.shadowRoot?.appendChild(btn);
	
	}
}

customElements.define('app-dashboard', Dashboard);