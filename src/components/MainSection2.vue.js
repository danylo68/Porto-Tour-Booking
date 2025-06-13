import { ref } from 'vue';
const zoomedImage = ref(null);
const zoomImage = (src) => {
    zoomedImage.value = src;
};
const logeas = { title: "Appartement 2 pour deux personnes ", description: 'La loge 2 est au rez de chausssé est un apartement doté de d/une chambres,d/une salle d/eau avec douche, lavabo et WC', prix: "350,00 euros la semaine"
};
const products = [
    {
        id: 1,
        name: 'Cuisine aménagée et Bar.',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802732/cuisadogr0_ozl27a.jpg',
        imageAlt: 'Cuisine aménagée et Bar.',
    },
    {
        id: 2,
        name: 'Cuisine aménagée et Bar.',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802727/antagr4_nwipxy.jpg',
        imageAlt: 'Cuisine aménagée et Bar.',
    },
    {
        id: 3,
        name: 'Espace à vivre.',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802748/salon02_hgdr7z.jpg',
        imageAlt: 'Espace à vivre.',
    },
    {
        id: 4,
        name: 'Salon',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802748/salongr1_lwrd9e.jpg',
        imageAlt: 'Salon.',
    },
    {
        id: 5,
        name: 'Une chambre vue 1',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802727/antagr3_jyzfd3.jpg',
        imageAlt: 'La chambre vue 1.',
    },
    {
        id: 6,
        name: 'Une chambre vue 2',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802727/antagr5_gdu54m.jpg',
        imageAlt: 'La chambre vue 2.',
    },
    {
        id: 7,
        name: 'Lavabo et toilette',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802727/banosgr0_z6aqmw.jpg',
        imageAlt: 'Douche et wc.',
    },
    {
        id: 8,
        name: 'Douche et wc.',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802728/banosgr01_urp7ou.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "bg-white min-h-[70vh] py-8" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "w-full px-4 mx-auto max-w-7xl" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(Object.assign({ class: "text-2xl font-mono font-bold text-gray-800 px-4 pb-6 " }));
(__VLS_ctx.logeas.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: "text-gray-800 font-mono px-4 pb-6 " }));
(__VLS_ctx.logeas.description);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: "text-gray-800 font-mono font-bold px-4 pb-6 t" }));
(__VLS_ctx.logeas.prix);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center" }));
for (const [product] of __VLS_getVForSourceType((__VLS_ctx.products))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign(Object.assign({ onClick: (...[$event]) => {
            __VLS_ctx.zoomImage(product.imageSrc);
        } }, { key: (product.id) }), { class: "w-full max-w-[300px] cursor-pointer" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "bg-white rounded-xl shadow-md overflow-hidden border border-gray-100" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(Object.assign({ src: (product.imageSrc), alt: (product.imageAlt) }, { class: "w-full h-64 object-cover" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "p-4 space-y-1" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)(Object.assign({ class: "font-medium font-mono text-gray-800" }));
    (product.name);
}
if (__VLS_ctx.zoomedImage) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ onClick: (...[$event]) => {
            if (!(__VLS_ctx.zoomedImage))
                return;
            __VLS_ctx.zoomedImage = null;
        } }, { class: "fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "relative max-w-4xl max-h-[90vh] p-4" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(Object.assign({ src: (__VLS_ctx.zoomedImage), alt: "Zoomed image" }, { class: "max-w-full max-h-[80vh] transition duration-300 hover:scale-105 object-contain rounded-lg shadow-xl" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign({ onClick: (...[$event]) => {
            if (!(__VLS_ctx.zoomedImage))
                return;
            __VLS_ctx.zoomedImage = null;
        } }, { class: "absolute top-2 right-2 text-white text-3xl font-bold" }));
}
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-[70vh]']} */ ;
/** @type {__VLS_StyleScopedClasses['py-8']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-7xl']} */ ;
/** @type {__VLS_StyleScopedClasses['text-2xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['t']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['sm:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['lg:grid-cols-3']} */ ;
/** @type {__VLS_StyleScopedClasses['xl:grid-cols-4']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-8']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-[300px]']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-md']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-gray-100']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-64']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['space-y-1']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['fixed']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-black']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-opacity-80']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['z-50']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['max-h-[90vh]']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['max-h-[80vh]']} */ ;
/** @type {__VLS_StyleScopedClasses['transition']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:scale-105']} */ ;
/** @type {__VLS_StyleScopedClasses['object-contain']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['top-2']} */ ;
/** @type {__VLS_StyleScopedClasses['right-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            zoomedImage: zoomedImage,
            zoomImage: zoomImage,
            logeas: logeas,
            products: products,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
