export default class Popup {
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

		if (this.clicks > 5) {
			this.popup.appendChild(this.resetCounterButton);
		}
	}

	createBackdrop = () => {
		const backdrop = document.createElement("div");
		backdrop.classList.add("backdrop");
		backdrop.addEventListener(
			"click",
			(e) => {
				e.preventDefault();
				this.closePopup();
			},
			{ once: true }
		);
		return backdrop;
	};

	createCloseButton = () => {
		const x = document.createElement("div");
		x.classList.add("popup-close");
		x.title = "Close";
		x.addEventListener(
			"click",
			(e) => {
				e.preventDefault();
				this.closePopup();
			},
			{ once: true }
		);

		return x;
	};

	createResetButton = () => {
		const x = document.createElement("div");
		x.classList.add("popup-reset");
		x.title = "Reset counter";
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

		const popupTitle = document.createElement("span");
		popupTitle.innerText = this.title;
		popupTitle.classList.add("popup-title");

		const popupText = document.createElement("span");
		popupText.innerText = this.text;
		popupText.classList.add("popup-text");

		popup.appendChild(popupTitle);
		popup.appendChild(popupText);

        return popup
    };

	closePopup = () => {
		document.body.removeChild(this.backdrop);
		document.body.removeChild(this.popup);
	};

	appendPopup = () => {
		document.body.appendChild(this.backdrop);
		document.body.appendChild(this.popup);
	};
}
