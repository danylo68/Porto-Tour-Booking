import { ref } from 'vue';
const images = [
    'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802753/zebreros_qfeov2.jpg',
    'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802748/rainha_zljas3.jpg',
    'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802743/portodouro1_uv8ikc.jpg',
    'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802742/jardimPorto_q4b9au.jpg',
    'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802737/gardenporto_vkj8ho.jpg',
    'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802732/eifel2_izinab.jpg',
    'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802732/costanova_t3fxbz.jpg',
    'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802728/benagil1_z58ioo.jpg',
    'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802727/arouca_ez5zbc.jpg',
    'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802726/algarve3_s849kd.jpg',
    'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802726/algarve1_dzxpug.jpg',
    'https://res.cloudinary.com/dp17akqzu/image/upload/v1749821941/emanuel-haas-CBRAZqV1OLI-unsplash_cedslc.jpg',
    'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802742/porto4_bd7aor.jpg',
    'https://res.cloudinary.com/dp17akqzu/image/upload/v1749802737/fatima_ltj5cj.jpg',
    'https://res.cloudinary.com/dp17akqzu/image/upload/a_180/v1749802727/arouca_ez5zbc.jpg',
    'https://res.cloudinary.com/dp17akqzu/image/upload/a_90/v1749802737/fatima1_eu3mu7.jpg',
];
const currentIndex = ref(0);
function next() {
    currentIndex.value = (currentIndex.value + 1) % images.length;
}
function prev() {
    currentIndex.value =
        (currentIndex.value - 1 + images.length) % images.length;
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "relative w-full overflow-hidden" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex transition-transform duration-500 ease-in-out" }, { style: ({ transform: `translateX(-${__VLS_ctx.currentIndex * 100}%)` }) }));
for (const [image, index] of __VLS_getVForSourceType((__VLS_ctx.images))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ key: (index) }, { class: "w-full flex-shrink-0" }));
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)(Object.assign({ src: (image), alt: "Photo Portugal" }, { class: "w-full h-144 object-cover rounded-lg shadow-lg" }));
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign({ onClick: (__VLS_ctx.prev) }, { class: "absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)(Object.assign({ onClick: (__VLS_ctx.next) }, { class: "absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 p-2 rounded-full shadow hover:bg-white" }));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2" }));
for (const [_, i] of __VLS_getVForSourceType((__VLS_ctx.images))) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)(Object.assign(Object.assign({ key: (i) }, { class: "w-3 h-3 rounded-full" }), { class: ({
            'bg-white': __VLS_ctx.currentIndex === i,
            'bg-gray-400': __VLS_ctx.currentIndex !== i
        }) }));
}
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-transform']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-500']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-in-out']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-shrink-0']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-144']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['top-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['left-2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-y-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white/70']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['top-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['right-2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-y-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white/70']} */ ;
/** @type {__VLS_StyleScopedClasses['p-2']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-4']} */ ;
/** @type {__VLS_StyleScopedClasses['left-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['-translate-x-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-2']} */ ;
/** @type {__VLS_StyleScopedClasses['w-3']} */ ;
/** @type {__VLS_StyleScopedClasses['h-3']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-gray-400']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            images: images,
            currentIndex: currentIndex,
            next: next,
            prev: prev,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
