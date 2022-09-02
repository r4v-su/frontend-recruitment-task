export default class Table {
	constructor(parentDiv) {
		this.parentDiv = parentDiv;
		this.url = "https://jsonplaceholder.typicode.com/users";

		this.table = this.tableTable();
		this.head = this.tableHead;
		this.body = this.tableBody;

		this.appendRowsToBody();
		this.appendTableToParent();
	}

	tableHead = (() => {
		const thead = document.createElement("thead");
		const thr = document.createElement("tr");
		const heads = ["name", "email", "address", "company"];
		heads.forEach((head) => {
			let th = document.createElement("th");
			th.innerText = head;
			thr.appendChild(th);
		});
		thead.appendChild(thr);

		return thead;
	})();

	tableBody = (() => {
		const tbody = document.createElement("tbody");
		return tbody;
	})();

	tableTable = () => {
		const table = document.createElement("table");
		table.classList.add("table");

		return table;
	};

	getData = async function () {
		const rows = [];
		console.log(rows);
		await fetch(this.url)
			.then((response) => response.json())
			.then((people) =>
				people.forEach((person) => {
					let tr = document.createElement("tr");
					tr.innerHTML = `
                    <td>${person.name}</td>
                    <td>${person.email}</td>
                    <td>${
						person.address.street +
						", " +
						person.address.suite +
						", " +
						person.address.city +
						", " +
						person.address.zipcode
					}</td>
                    <td>${person.company.name}</td>`;
					rows.push(tr);
				})
			);
		return rows;
	};

	appendRowsToBody = async function () {
		const loader = document.createElement("div");
		loader.classList.add("loader");
		this.parentDiv.appendChild(loader);
		let rows = await this.getData();
		setTimeout(() => {
			this.parentDiv.removeChild(loader);
			rows.forEach((row) => {
				this.body.appendChild(row);
				this.table.appendChild(this.head);
				this.table.appendChild(this.body);
				this.appendTableToParent();
			});
		}, 300);
	};

	appendTableToParent = () => {
		this.parentDiv.appendChild(this.table);
	};
}
