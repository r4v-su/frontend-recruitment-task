import MainModule from "./mainModule.js"

console.log("greetings from Rafal :)");

const moduleConfig = {
	parent: document.getElementById("app"),
	title: "Lorem Ipsum",
	id: '1',
	paragraph:
		"Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required.",

	img: {
		url: "./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_16_9,c_fill,g_auto__c_scale,w_720.jpg",
		alt: "view of beach at sunset or sunrise with crystal-clear water ald palms in background",
		title: "beach-image"
		}

};

const MainModule1 = new MainModule(moduleConfig);


