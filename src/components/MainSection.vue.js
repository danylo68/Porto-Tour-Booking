import { ref } from 'vue';
const zoomedImage = ref(null);
const zoomImage = (src) => {
    zoomedImage.value = src;
};
const logeas = {
    title: 'Appartement "Videira" pour quatres personnes',
    description: 'L appartement 1 est au premier niveau : un appartement avec terrasse de 30 m², deux chambres, une salle d’eau avec douche, lavabo et WC.',
    prix: '400,00 euros la semaine',
};
const products = [
    {
        id: 1,
        name: 'Appt 1 Terrasse',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802749/terasseanta_njlfdr.jpg',
        imageAlt: 'Terrasse Anta',
    },
    {
        id: 2,
        name: 'Appt 1 Terrasse',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/a_vflip/v1749802726/anta1_zcp9bz.jpg',
        imageAlt: 'Vue salon',
    },
    {
        id: 3,
        name: 'Terrasse table',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802753/terassetable_plyiha.jpg',
        imageAlt: 'Table sur terrasse',
    },
    {
        id: 2,
        name: 'Cuisine aménagée.',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749822828/cuisado_vfxwo7.jpg',
        imageAlt: 'Cuisine aménagée et Bar.',
    },
    {
        id: 4,
        name: 'Appt 1 Salon',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802748/salon1_xh5hio.jpg',
        imageAlt: 'Appt 1 Salon',
    },
    {
        id: 5,
        name: 'Salon clair et spacieux',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/a_180/v1749802726/anta2_qtnygp.jpg',
        imageAlt: 'Salon clair et spacieux',
    },
    {
        id: 6,
        name: 'Salle de bains moderne',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/a_180/v1749802728/banosgr1_hmf7vi.jpg',
        imageAlt: 'Salle de bains moderne',
    },
    {
        id: 7,
        name: 'Chambre 1 avec lit double',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802731/chambre2_xncvz2.jpg',
        imageAlt: 'Chambre 1 avec lit double',
    },
    {
        id: 8,
        name: 'Chambre 2 avec lit double',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802731/chambre1_qont9e.jpg',
        imageAlt: 'Chambre 2 avec lit double',
    },
    {
        id: 8,
        name: 'Jardin autour de la maison',
        href: '#',
        imageSrc: 'https://res.cloudinary.com/dp17akqzu/image/upload/v1749827102/jardim_hmekf2.jpg',
        imageAlt: 'Jardin autour de la maison',
    },
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "bg-white min-h-[70vh] py-8" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "w-full px-4 mx-auto max-w-7xl" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)(Object.assign({ class: "text-2xl font-mono font-bold text-gray-800 px-4 pb-6 " }));
(__VLS_ctx.logeas.title);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: "text-gray-800 font-mono px-4 pb-4 " }));
(__VLS_ctx.logeas.description);
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)(Object.assign({ class: "text-gray-800 font-mono font-bold px-4 pb-6 " }));
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
/** @type {__VLS_StyleScopedClasses['pb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-800']} */ ;
/** @type {__VLS_StyleScopedClasses['font-mono']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-6']} */ ;
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
