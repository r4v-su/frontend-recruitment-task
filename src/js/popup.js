export default class Popup {
	constructor(clicks, resetCounter) {
		this.resetCounter = resetCounter;
		this.clicks = clicks;
		this.clicksText = document.createElement('strong');
		this.clicksText.innerText = this.clicks;
		this.title = "Alert!";

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
		const closeBtn = document.createElement("button");
		closeBtn.classList.add("popup-close");
		closeBtn.title = "Close";
		closeBtn.tabIndex = 0;
		closeBtn.ariaLabel = "close popup button"
		closeBtn.addEventListener(
			"click",
			() => {
				this.closePopup();
			},
			{ once: true }
		);

		return closeBtn;
	};

	createResetButton = () => {
		const resetBtn = document.createElement("button");
		resetBtn.classList.add("popup-reset");
		resetBtn.tabIndex = 0;
		resetBtn.title = "Reset counter";
		resetBtn.ariaLabel = "reset counter button"
		resetBtn.addEventListener(
			"click",
			() => {
				this.resetCounter();
				this.closePopup();
			},
			{ once: true }
		);

		return resetBtn;
	};

	createPopup = () => {
		const popup = document.createElement("div");
		popup.classList.add("popup");
		popup.ariaModal = true;
		popup.ariaLive = true;
		popup.ariaLabel = ""

		const popupTitle = document.createElement("h2");
		popupTitle.innerText = this.title;
		popupTitle.ariaLabel = "popup title"
		popupTitle.tabIndex = 0;
		popupTitle.classList.add("popup-title");

		const popupText = document.createElement("p");
		popupText.innerHTML = `You have clicked<strong> ${this.clicksText.innerText} times</strong> to related button.`;
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
