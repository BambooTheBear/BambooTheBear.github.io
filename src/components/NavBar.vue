<script setup>
</script>

<template>
    <div class="navbar bg-base-300">
        <div class="navbar-start">
            <a href="#">
                <button class="btn-ghost rounded-lg text-4xl">Bamboo</button>
            </a>
        </div>
        <div class="navbar-center">
            <div class="tooltip tooltip-bottom px-2" data-tip="About Me">
                <a href="#AboutMe">
                    <button class="btn-ghost btn-square rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                        </svg>
                    </button>
                </a>
            </div>
            <div class="tooltip tooltip-bottom px-2" data-tip="Academia">
                <a href="#Academia">
                    <button class="btn-ghost btn-square rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                        </svg></button>
                </a>
            </div>
            <div class="tooltip tooltip-bottom px-2" data-tip="Experience"> <a href="#Experience">
                    <button class="btn-ghost btn-square rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke-width="{1.5}" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                        </svg>
                    </button>
                </a>
            </div>
            <div class="tooltip tooltip-bottom px-2 text-center" data-tip="Achievements">
                <button class="btn-ghost btn-square rounded-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="{1.5}" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                    </svg>

                </button>
            </div>
        </div>
        <div class="navbar-end">
            <div class="tooltip tooltip-bottom px-2 text-center" v-bind:data-tip="email">
                <button class="btn-primary btn-circle" @mouseover="resetEmail()" @click="copyEmail()"><svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.7" stroke="black"
                        className="w-6 h-6">
                        <path stroke-linecap="round"
                            d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                    </svg>

                </button>
            </div>
            <div class="tooltip tooltip-bottom px-2 text-center" data-tip="Github">
                <a href="https://github.com/BambooTheBear" target="_blank">
                    <button class="btn-primary btn-circle"><img src="\src\assets\github-icon.png">
                    </button>
                </a>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "copy email"
        }
    },
    methods: {
        copyEmail() {
            this.email = "email copied to clipboard ✓"
            navigator.clipboard.writeText("bennokolar@gmail.com");
        },
        resetEmail() {
            this.email = "copy email"
        }
    }
}
</script>
<style scoped></style>
