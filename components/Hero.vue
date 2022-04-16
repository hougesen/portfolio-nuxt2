<template>
    <section class="default-width">
        <div class="hero-grid">
            <div class="hero-grid-item hero-image hero-image--mobile">
                <picture>
                    <source srcset="@/assets/images/personal/cirkelbillede1.webp" type="image/webp" />

                    <source srcset="@/assets/images/personal/cirkelbillede1.png" type="image/png" />

                    <img src="@/assets/images/personal/cirkelbillede1.png" alt="Billede af mig - Mads Hougesen" />
                </picture>
            </div>

            <div class="hero-grid-item hero-grid-text">
                <h1 class="section-title">
                    <span class="highlight-color" @mouseover="changeHighlightColor"> Hi, </span>
                    I'm Mads
                </h1>

                <p>
                    I am a software developer from Denmark. Lover of all things programming, so I am always learning new
                    technologies.
                </p>

                <p>
                    I currently work @
                    <a href="https://cavea.io" rel="noreferrer noopener" target="_blank">cavea.io</a>
                    while studying for my bachelor's degree in web development.
                </p>

                <SocialIcons class="hero-icons" />
            </div>

            <div class="hero-grid-item hero-image hero-image--desktop">
                <picture>
                    <source srcset="@/assets/images/personal/cirkelbillede1.webp" type="image/webp" />

                    <source srcset="@/assets/images/personal/cirkelbillede1.png" type="image/png" />

                    <img src="@/assets/images/personal/cirkelbillede1.png" alt="Image of me - Mads Hougesen" />
                </picture>
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Hero',

    methods: {
        /**
         * @summary emit to parent to change highlight color
         * @emits {Event}
         */
        changeHighlightColor(): void {
            this.$emit('changeHighlight');
        },
    },
});
</script>

<style lang="scss" scoped>
$mobileBreakpoint: 600px;
$tabletBreakpoint: 1367px;

.hero-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    .hero-grid-item {
        width: 100%;
    }

    .hero-grid-text {
        margin: auto;

        .section-title {
            margin-bottom: 0;
        }

        p {
            font-size: 1.1rem;

            @media screen and (min-width: $tabletBreakpoint) {
                font-size: 1.5rem;
            }
        }

        .hero-icons {
            margin-top: 1rem;
        }
    }

    .hero-image {
        margin-left: auto;
        margin-top: auto;
        margin-bottom: auto;
        text-align: right;
        width: 70%;

        &--desktop {
            display: block;

            @media screen and (max-width: $tabletBreakpoint) {
                display: none;
            }
        }

        &--mobile {
            display: none;
            margin: auto;
            text-align: center;
            margin-bottom: 1rem;

            img {
                width: 100%;

                @media screen and (min-width: $mobileBreakpoint) {
                    width: 70%;
                    max-width: 350px;
                }
            }

            @media screen and (max-width: $tabletBreakpoint) {
                display: block;
            }
        }
    }

    @media screen and (min-width: $tabletBreakpoint) {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
