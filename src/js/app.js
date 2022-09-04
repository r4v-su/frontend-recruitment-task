import MainModule from "./mainModule.js"

console.log("greetings from Rafal :)");

const module1Config = {
	parent: document.getElementById("app"),
	title: "Lorem Ipsum",
	id: '1',
	paragraph:
		"Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required.",
	img: {
		alt: "view of beach at sunset or sunrise with crystal-clear water ald palms in background",
		title: "beach-image",
		srcset: "./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_450.jpg 450w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_630.jpg 630w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_767.jpg 767w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_4_3,c_fill,g_auto__c_scale,w_538.jpg 538w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_4_3,c_fill,g_auto__c_scale,w_694.jpg 694w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_16_9,c_fill,g_auto__c_scale,w_596.jpg 596w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_16_9,c_fill,g_auto__c_scale,w_720.jpg 720w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_480.jpg 480w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_784.jpg 784w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1002.jpg 1000w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1002.jpg 1002w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1234.jpg 1234w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1394.jpg 1394w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1400.jpg 1400w",
		}
};


//to chceck  reusabilty  uncomment theese lines//

/*const module2Config = {
	parent: document.getElementById("app"),
	title: "Dolor Sit",
	id: '1',
	paragraph:
		"Infinitely scalable, feature-rich and cloud-native data management and protection for modern and legacy infrastructures and SaaS platforms, managed via a single app with no hardware required.",
	img: {
		alt: "view of beach at sunset or sunrise with crystal-clear water ald palms in background",
		title: "beach-image",
		srcset: "./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_200.jpg 200w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_450.jpg 450w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_630.jpg 630w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_1_1,c_fill,g_auto__c_scale,w_767.jpg 767w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_4_3,c_fill,g_auto__c_scale,w_538.jpg 538w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_4_3,c_fill,g_auto__c_scale,w_694.jpg 694w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_16_9,c_fill,g_auto__c_scale,w_596.jpg 596w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_ar_16_9,c_fill,g_auto__c_scale,w_720.jpg 720w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_480.jpg 480w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_784.jpg 784w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1002.jpg 1000w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1002.jpg 1002w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1234.jpg 1234w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1394.jpg 1394w, ./images/sean-o-KMn4VEeEPR8-unsplash_1_s6zmfh_c_scale,w_1400.jpg 1400w",
	}
};*/

const MainModule1 = new MainModule(module1Config);
//const MainModule2 = new MainModule(module2Config);

