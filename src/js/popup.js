export default class Popup {
	constructor(clicks, resetCounter) {
		this.resetCounter = resetCounter;
		this.clicks = clicks;
		this.title = "Alert!";
		this.text = `You have clicked ` + clicks + ` times to related button.`;

		this.visible = false;

		this.backdrop = this.createBackdrop();
		this.popup = this.createPopup();
		this.closeButton = this.createCloseButton();
		this.resetCounterButton = this.createResetButton();

		this.popup.appendChild(this.closeButton);

		if (this.clicks > 5) {
			this.popup.appendChild(this.resetCounterButton);
		}
	}

	createBackdrop = () => {
		const backdrop = document.createElement("div");
		backdrop.classList.add("backdrop");
		backdrop.addEventListener(
			"click",
			() => {
				this.closePopup();
			},
			{ once: true }
		);
		return backdrop;
	};

	createCloseButton = () => {
		const x = document.createElement("button");
		x.classList.add("popup-close");
		x.title = "Close";
		x.tabIndex = "0";
		x.ariaLabel = "close popup button"
		x.addEventListener(
			"click",
			() => {
				this.closePopup();
			},
			{ once: true }
		);

		return x;
	};

	createResetButton = () => {
		const x = document.createElement("button");
		x.classList.add("popup-reset");
		x.tabIndex = "0";
		x.title = "Reset counter";
		x.ariaLabel = "reset counter button"
		x.addEventListener(
			"click",
			() => {
				this.resetCounter();
				this.closePopup();
			},
			{ once: true }
		);

		return x;
	};

	createPopup = () => {
		const popup = document.createElement("div");
		popup.classList.add("popup");
		popup.ariaModal = true;
		popup.ariaLive = true;
		popup.ariaLabel = ""


		const popupTitle = document.createElement("span");
		popupTitle.innerText = this.title;
		popupTitle.ariaLabel = "popup title"
		popupTitle.tabIndex = 0;
		popupTitle.classList.add("popup-title");


		const popupText = document.createElement("span");
		popupText.innerText = this.text;
		popupText.ariaLabel = "popup text"
		popupText.tabIndex = 0;
		popupText.classList.add("popup-text");

		popup.appendChild(popupTitle);
		popup.appendChild(popupText);

        return popup
    };

	closePopup = () => {
		this.visible = false;
		document.body.removeChild(this.backdrop);
		document.body.removeChild(this.popup);
	};

	appendPopup = () => {
		this.visible = true;
		document.body.appendChild(this.backdrop);
		document.body.appendChild(this.popup);
	};
}
