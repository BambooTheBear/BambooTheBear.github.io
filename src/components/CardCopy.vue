<script></script>
<template>
    <div
        class="h-64 w-44 flex items-center justify-start flex-col bg-gradient-to-b to-purple-950 from-violet-800 rounded-xl text-slate-300 p-2">
        <p class="text-3xl font-bold"> Skills</p>
        <br>
        <div class="flex flex-row w-full items-center pb-1">
            <div class="w-8 h-8 bg-indigo-600 rounded-lg p-1 tooltip" data-tip="Python"><img
                    src="../assets/python_icon.png"></div><progress class="progress progress-white w-32 ml-2" value="90"
                max="100"></progress>
        </div>
        <div class="flex flex-row w-full items-center pb-1">
            <div class="w-8 h-8 bg-yellow-300 rounded-lg p-1 tooltip" data-tip="Javascript"><img
                    src="../assets/JS-icon.png">
            </div><progress class="progress progress-white w-32 ml-2" value="85" max="100"></progress>
        </div>
        <div class="flex flex-row w-full items-center pb-1">
            <div class="w-8 h-8 bg-white rounded-lg p-1 tooltip" data-tip="Java"><img class="scale-150"
                    src="../assets/java-logo.png">
            </div><progress class="progress progress-white w-32 ml-2" value="80" max="100"></progress>
        </div>
        <div class="flex flex-row w-full items-center pb-1">
            <div class="w-8 h-8 bg-slate-600 p-1 rounded-lg tooltip" data-tip="VueJS"><img class="scale-100"
                    src="../assets/vue.svg">
            </div><progress class="progress progress-white w-32 ml-2" value="75" max="100"></progress>
        </div>
        <div class="flex flex-row w-full p-2 pb-6 justify-around">
            <div class="w-8 h-8 bg-slate-200 p-1 rounded-lg tooltip" data-tip="Angular"><img class="scale-100"
                    src="../assets/angular_logo.png">
            </div>
            <div class="w-8 h-8 bg-slate-200 p-1 rounded-lg tooltip" data-tip="Tailwind"><img class="scale-100"
                    src="../assets/Tailwind_CSS_Logo.svg.png">
            </div>
            <div class="w-8 h-8 bg-slate-300 rounded-lg tooltip" data-tip="SQL">
                <p class="text-orange-700 font-bold">SQL</p>
            </div>
        </div>
    </div>
</template>
<style></style>