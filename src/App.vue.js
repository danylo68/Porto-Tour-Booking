import NavTop from "./components/NavTop.vue";
import HeaderSection from "./components/HeaderSection.vue";
import MainSection from "./components/MainSection.vue";
import MainSection2 from "./components/MainSection2.vue";
import NavBot from './components/NavBot.vue';
import Carousel from './components/Carousel.vue';
import MainSectionHead from "./components/MainSectionHead.vue";
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)(Object.assign({ class: "flex flex-col min-h-screen" }));
/** @type {[typeof NavTop, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(NavTop, new NavTop({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
__VLS_asFunctionalElement(__VLS_intrinsicElements.header, __VLS_intrinsicElements.header)({});
/** @type {[typeof HeaderSection, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(HeaderSection, new HeaderSection({}));
const __VLS_4 = __VLS_3({}, ...__VLS_functionalComponentArgsRest(__VLS_3));
/** @type {[typeof MainSectionHead, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(MainSectionHead, new MainSectionHead({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)(Object.assign({ class: "flex-1" }));
/** @type {[typeof MainSection, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(MainSection, new MainSection({}));
const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
/** @type {[typeof MainSection2, ]} */ ;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(MainSection2, new MainSection2({}));
const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
/** @type {[typeof Carousel, ]} */ ;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent(Carousel, new Carousel({}));
const __VLS_16 = __VLS_15({}, ...__VLS_functionalComponentArgsRest(__VLS_15));
/** @type {[typeof NavBot, ]} */ ;
// @ts-ignore
const __VLS_18 = __VLS_asFunctionalComponent(NavBot, new NavBot({}));
const __VLS_19 = __VLS_18({}, ...__VLS_functionalComponentArgsRest(__VLS_18));
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['min-h-screen']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-1']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            NavTop: NavTop,
            HeaderSection: HeaderSection,
            MainSection: MainSection,
            MainSection2: MainSection2,
            NavBot: NavBot,
            Carousel: Carousel,
            MainSectionHead: MainSectionHead,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
