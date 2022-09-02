import Table from "./table.js";
import Popup from "./popup.js";

export default class mainModule {

	constructor(moduleConfig) {
        this.moduleConfig = moduleConfig;

		this.clicks = 0;
		this.parentDiv = moduleConfig.parent;

		this.moduleContainer = this.createModule();

		this.popup = new Popup(this.clicks, this.resetCounter);

		this.moduleContainer.appendChild(this.image());
		this.moduleContainer.appendChild(this.paragraphBox());

		this.parentDiv.appendChild(this.moduleContainer);
	}

	image = function () {
		const img = document.createElement("img");
		img.classList.add('noselect');
		img.classList.add('app-img');
		img.src = this.moduleConfig.imgUrl;
		img.width = 505;
		img.height = 330;
		img.ariaLabel = "image";

		return img;
	};

	paragraphBox = () => {
		const paragraphBox = document.createElement("div");
		paragraphBox.classList.add("paragraph-box");
		paragraphBox.appendChild(this.title());
		paragraphBox.appendChild(this.paragraph());
		paragraphBox.appendChild(this.button());

		return paragraphBox;
	};

	title = () => {
		const title = document.createElement("span");
		title.classList.add("paragraph-title");
		title.innerText = this.moduleConfig.title;

		return title;
	};

	paragraph = () => {
		const paragraph = document.createElement("span");
		paragraph.classList.add("paragraph-paragraph");
		paragraph.innerText = this.moduleConfig.paragraph;

		return paragraph;
	};

	button = () => {
		const btn = document.createElement("button");
		btn.classList.add("app-btn");
		btn.addEventListener("mouseup", () => {
			this.incrementClicks();
			this.makePopup();
			this.makeTable();
		});

		return btn;
	};

	createModule = () => {
		const module = document.createElement("div");
		module.classList.add("module");
		module.width = this.moduleConfig.moduleWidth;
		module.height = this.moduleConfig.moduleHeight;

		return module;
	};
    resetCounter = () =>{
        this.clicks = 0;
    }
	incrementClicks = (e) => {
		this.clicks += 1;
	};
	makePopup = () => {
		this.popup = new Popup(this.clicks, this.resetCounter);
		this.popup.appendPopup();
	}
	makeTable = () =>{
		this.table = new Table(this.popup.popup);
		this.table.appendTableToParent();
	}
}

