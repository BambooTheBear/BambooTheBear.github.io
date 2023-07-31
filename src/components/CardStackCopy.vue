<script setup>
import CardCopy from './CardCopy.vue'
import CoverCardCopy from './CoverCardCopy.vue'
import ImageCardCopy from './ImageCardCopy.vue'
import ForthCardCopy from './ForthCardCopy.vue'
</script>
<template>
    <div class="h-full w-full flex items-center justify-center">
        <div class="h-96 w-72 relative group floating-div">
            <div
                class="absolute w-48 h-32 rounded-full shadow-2xl group-hover:shadow-fuchsia-800 bottom-6 left-16 transition-all duration-200 ease-linear">
            </div>
            <CoverCardCopy
                class="absolute bottom-4 left-[85px] z-40 group-hover:hover:left-64 rotate-[7deg] group-hover:left-56 group-hover:rotate-[35deg] group-hover:bottom-[-4px] transition-all duration-500 ease-in-out group-hover:hover:rotate-12  group-hover:hover:scale-125 hover:z-50">
            </CoverCardCopy>
            <CardCopy
                class="absolute bottom-4 left-[70px] z-30 hover:scale-125 transition-all -rotate-[-2deg] group-hover:hover:left-[84px] group-hover:left-[100px] group-hover:-rotate-[-10deg] duration-500 ease-in-out group-hover:hover:rotate-6 hover:z-50">
            </CardCopy>
            <ImageCardCopy
                class="absolute bottom-2 left-16 z-20 -rotate-[2deg] group-hover:hover:left-[-64px] group-hover:left-[-12px] group-hover:-rotate-[15deg] transition-all duration-500 ease-in-out group-hover:hover:-rotate-12  group-hover:hover:scale-125 hover:z-50">
            </ImageCardCopy>
            <ForthCardCopy
                class="absolute bottom-2 left-[55px] z-10 -rotate-[8deg] group-hover:hover:left-[-104px] group-hover:left-[-86px] group-hover:bottom-[-16px] group-hover:-rotate-[35deg] transition-all duration-500 ease-in-out group-hover:hover:-rotate-[10deg]  group-hover:hover:scale-125 hover:z-50">
            </ForthCardCopy>
            <div
                class="w-12 h-12 bg-violet-700 rounded-lg absolute group-hover:bottom-64 group-hover:left-[350px] left-28 bottom-20 z-20 flex items-center justify-center transition-all duration-500 ease-in-out group-hover:rotate-[35deg]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 scale-150">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>

            </div>
            <div
                class="w-12 h-12 bg-purple-700 rounded-lg absolute group-hover:bottom-[350px] group-hover:left-[50px] left-28 bottom-20 z-20 flex item justify-center items-center transition-all duration-500 ease-in-out group-hover:-rotate-[33deg]">
                <span class="material-symbols-outlined scale-[2]">
                    javascript
                </span>
            </div>
            <div
                class="w-12 h-12 bg-fuchsia-900 rounded-lg absolute group-hover:bottom-[-100px] group-hover:left-[200px] left-28 bottom-20 z-20 flex item justify-center items-center transition-all duration-500 ease-in-out group-hover:-rotate-[10deg]">
                <span class="material-symbols-outlined scale-150">
                    smart_toy
                </span>
            </div>
        </div>
    </div>
</template>
<style>
.floating-div {
    cursor: pointer;
    animation: float 3s infinite ease-in-out;
}

@keyframes float {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-30px);
    }
}

.floating-div:hover {
    animation-play-state: paused;
}
</style>