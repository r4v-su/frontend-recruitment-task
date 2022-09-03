import Table from "./table.js";
import Popup from "./popup.js";

export default class mainModule {
	constructor(moduleConfig) {
		this.moduleConfig = moduleConfig;

		this.parentDiv = moduleConfig.parent;

		this.moduleContainer = this.createModule();
		this.id = moduleConfig.id;
		this.getClicksFromLs();
		this.popup = new Popup(this.clicks, this.resetCounter);

		this.moduleContainer.appendChild(this.image());
		this.moduleContainer.appendChild(this.paragraphBox());

		this.parentDiv.appendChild(this.moduleContainer);
	}

	image = function () {
		const img = document.createElement("img");
		img.classList.add("noselect", "app-img");
		img.src = this.moduleConfig.img.url;
		img.width = 505;
		img.height = 330;
		img.alt = this.moduleConfig.img.alt;
		img.ariaLabel = img.alt;
		img.tabIndex = 0;
		img.title = this.moduleConfig.img.title;

		return img;
	};

	paragraphBox = () => {
		const paragraphBox = document.createElement("div");
		paragraphBox.classList.add("paragraph-box");
		paragraphBox.ariaLabel = 'paragraph';
		paragraphBox.tabIndex = 0;
		paragraphBox.appendChild(this.title());
		paragraphBox.appendChild(this.paragraph());
		paragraphBox.appendChild(this.button());

		return paragraphBox;
	};

	title = () => {
		const title = document.createElement("span");
		title.classList.add("paragraph-title");
		title.ariaLabel = 'paragraph title';
		title.tabIndex = 0;
		title.title = this.moduleConfig.title;
		title.innerText = this.moduleConfig.title;


		return title;
	};

	paragraph = () => {
		const paragraph = document.createElement("span");
		paragraph.classList.add("paragraph-paragraph");
		paragraph.ariaLabel = 'paragraph';
		paragraph.tabIndex = 0;
		paragraph.innerText = this.moduleConfig.paragraph;

		return paragraph;
	};

	button = () => {
		const btn = document.createElement("button");
		btn.classList.add("app-btn");
		btn.tabIndex = 0;
		btn.ariaLabel = "button increment counter"
		btn.title = 'increment clicks';
		btn.addEventListener("click", () => {
			this.incrementClicks();
			if(!this.popup.visible){
				this.makePopup();
				this.makeTable();
			}
		});

		return btn;
	};

	createModule = () => {
		const module = document.createElement("div");
		module.id = this.moduleConfig.id ? this.moduleConfig.id : 1;
		module.classList.add("module");
		window.addEventListener('keydown', ((e) => {
			if(e.key == "Escape" && this.popup.visible) {
				this.popup.closePopup();
				this.popup.visible = false;
			}
			if(e.key == "F5" && this.popup.visible && this.clicks > 6) {
				this.popup.closePopup();
				this.popup.visible = false;
				this.popup.resetCounter();
			}
		}))


		return module;
	};

	resetCounter = () => {
			this.clicks = 0;
			this.setClicksToLs();
	};

	incrementClicks = () => {
		this.clicks += 1;
		this.setClicksToLs();
	};

	makePopup = () => {
		this.getClicksFromLs();
		this.popup = new Popup(this.clicks, this.resetCounter);
		this.popup.appendPopup();
	};

	makeTable = () => {
		this.table = new Table(this.popup.popup);
	};

	setClicksToLs() {
		sessionStorage.setItem(
			`clicks_${this.id}`,
			JSON.stringify(this.clicks)
		);
	};

	getClicksFromLs() {
		this.clicks = JSON.parse(sessionStorage.getItem(`clicks_${this.id}`));
	}
}
