<script setup>
import Card from './Card.vue'
import CoverCard from './CoverCard.vue'
import ImageCard from './ImageCard.vue'
</script>
<template>
    <div class="h-full w-full flex items-center justify-center">
        <div class="h-96 w-72 relative group  floating-div">
            <div
                class="absolute w-48 h-32 rounded-full shadow-2xl group-hover:shadow-secondary bottom-4 left-16 transition-all duration-200 ease-linear">
            </div>
            <CoverCard
                class="absolute bottom-6 left-24 z-30 group-hover:hover:left-64 rotate-[5deg] group-hover:left-56 group-hover:rotate-[25deg] group-hover:bottom-0 transition-all duration-500 ease-in-out group-hover:hover:rotate-12  group-hover:hover:scale-125 hover:z-50">
            </CoverCard>
            <Card class="absolute bottom-4 left-20 z-20 hover:scale-125 transition-all duration-500 ease-in-out hover:z-50">
            </Card>
            <ImageCard
                class="absolute bottom-2 left-16 z-10 -rotate-[5deg] group-hover:hover:left-[-84px] group-hover:left-[-36px] group-hover:-rotate-[25deg] transition-all duration-500 ease-in-out group-hover:hover:-rotate-12  group-hover:hover:scale-125 hover:z-50">
            </ImageCard>
            <div
                class="w-12 h-12 bg-cyan-500 rounded-lg absolute group-hover:bottom-72 group-hover:left-[300px] left-28 bottom-20 z-20 flex item justify-center transition-all duration-500 ease-in-out group-hover:rotate-45">
                <img src="src/assets/a_plus_icon_132650.png" class="scale-75">
            </div>
            <div
                class="w-12 h-12 bg-sky-700 rounded-lg absolute group-hover:bottom-[350px] group-hover:left-[50px] left-28 bottom-20 z-20 flex item justify-center items-center transition-all duration-500 ease-in-out group-hover:-rotate-[33deg]">
                <span class="material-symbols-outlined scale-150">
                    design_services
                </span>
            </div>
            <div
                class="w-12 h-12 bg-indigo-800 rounded-lg absolute group-hover:bottom-[-50px] group-hover:left-[150px] left-28 bottom-20 z-20 flex item justify-center items-center transition-all duration-500 ease-in-out group-hover:-rotate-[39deg]">
                <span class="material-symbols-outlined scale-150">
                    glyphs
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