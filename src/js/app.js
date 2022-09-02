import Table from "./table.js";
import MainModule from "./mainModule.js"

console.log("greetings from Rafal :)");

const moduleConfig = {
	parent: document.getElementById("app"),
	title: "Lorem Ipsum",
	paragraph:
		"Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required.",
	imgUrl: "./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_16_9,c_fill,g_auto__c_scale,w_720.jpg",
	moduleWidth: "1440px",
	moduleHeight: "auto"
};


const MainModule1 = new MainModule(moduleConfig);
const MainModule2 = new MainModule(moduleConfig);

console.log(MainModule1);

