console.log("greetings from Rafal :)");

class Popup {
	constructor(clicks, resetCounter) {
        this.resetCounter = resetCounter;
		this.clicks = clicks;
		this.title = "Alert!";
		this.text = `You have clicked ` + clicks + ` times to related button.`;

		this.backdrop = this.createBackdrop();
		this.popup = this.createPopup();
		this.closeButton = this.createCloseButton();
		this.resetCounterButton = this.createResetButton();

		this.popup.appendChild(this.closeButton);

		if (this.clicks >= 1) {
			this.popup.appendChild(this.resetCounterButton);
		}
		this.appendPopup();
	}
	createBackdrop = () => {
		const backdrop = document.createElement("div");
		backdrop.classList.add("backdrop");

		return backdrop;
	};
	createCloseButton = () => {
		const x = document.createElement("div");
		x.classList.add("x");
		x.addEventListener(
			"click",
			(e) => {
				e.preventDefault();
				this.closeModal();
			},
			{ once: true }
		);

		return x;
	};

	createPopup = () => {
		const popup = document.createElement("div");

		popup.classList.add("popup");

		const popupTitle = document.createElement("span");
		popupTitle.innerText = this.title;
		popupTitle.classList.add("popup-title");

		const popupText = document.createElement("span");
		popupText.innerText = this.text;
		popupText.classList.add("popup-text");

		popup.appendChild(popupTitle);
		popup.appendChild(popupText);

		return popup;
	};

	createResetButton = () => {
		const x = document.createElement("button");
		x.classList.add("popup-reset-btn");
        x.innerText = 'reset';
		x.addEventListener(
			"click",
			() => {
				this.resetCounter();
                this.closeModal();
			},
			{ once: true }
		);

		return x;
	};

	closeModal = () => {
		document.body.removeChild(this.backdrop);
		document.body.removeChild(this.popup);
	};

	appendPopup = () => {
		document.body.appendChild(this.backdrop);
		document.body.appendChild(this.popup);
	};
}

class App {
	constructor(appConfig) {
		this.clicks = 0;
		this.parentDiv = appConfig.parent;

		this.moduleContainer = this.moduleCreate();

		this.moduleContainer.appendChild(this.image());
		this.moduleContainer.appendChild(this.paragraphBox());

		this.parentDiv.appendChild(this.moduleContainer);
	}

	image = function () {
		const img = document.createElement("img");
		img.classList.add("app-image");
		img.src = appConfig.imgUrl;
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
		title.innerText = appConfig.title;

		return title;
	};

	paragraph = () => {
		const paragraph = document.createElement("span");
		paragraph.classList.add("paragraph-paragraph");
		paragraph.innerText = appConfig.paragraph;

		return paragraph;
	};

	button = () => {
		const appBtn = document.createElement("button");
		appBtn.classList.add("app-btn");
		appBtn.addEventListener("mouseup", () => {
            console.log(this)
			this.incrementClicks();
		});

		return appBtn;
	};

	moduleCreate = () => {
		const module = document.createElement("div");
		module.classList.add("module");
		module.width = "1440px";
		module.height = "auto";

		return module;
	};
    resetClicks = () =>{
        this.clicks = 0;
    }
	incrementClicks = (e) => {
		this.clicks += 1;
		this.popup = new Popup(this.clicks, this.resetClicks);
	};
}

const appConfig = {
	parent: document.getElementById("app"),
	title: "Lorem Ipsum",
	paragraph:
		"Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required.",
	imgUrl: "./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_16_9,c_fill,g_auto__c_scale,w_720.jpg",
};

const app = new App(appConfig);
const app2 = new App(appConfig);

console.log(app);
