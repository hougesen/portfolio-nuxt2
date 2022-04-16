<template>
    <section id="contact" class="default-width">
        <div class="contact-grid">
            <div class="contact-text">
                <h1 class="section-title contact-title">Wanna get in touch?</h1>

                <p class="subheading">I am always available for exciting discussions</p>

                <div class="contact-icon">
                    <span>
                        <i class="far fa-envelope fa-fw" title="email icon" />

                        <a href="mailto:mads@mhouge.dk">mads@mhouge.dk</a>
                    </span>
                </div>

                <div class="contact-icon">
                    <span>
                        <i class="fas fa-map-marker-alt fa-fw" title="location icon" />
                        Odense, Danmark
                    </span>
                </div>

                <SocialIcons class="social-icons" />
            </div>

            <div class="email-icon">
                <Icons icon="email" width="100%" />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'Contact',
});
</script>

<style lang="scss" scoped>
$mobileBreakpoint: 600px;
$tabletBreakpoint: 1367px;

#contact {
    padding-bottom: 3rem;
}

.contact-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);

    .contact-text {
        margin-top: auto;
        margin-bottom: auto;

        .contact-title {
            margin-bottom: 0;
        }

        .contact-icon {
            margin-top: 1%;

            a {
                color: var(--black);
            }

            span {
                display: inline-block;
                font-size: 1.2rem;
            }
        }

        .social-icons {
            margin-top: 1rem;
        }
    }

    .email-icon {
        margin-left: auto;
        display: none;

        @media screen and (min-width: $tabletBreakpoint) {
            grid-template-columns: repeat(2, 1fr);
            display: block;
        }
    }

    @media screen and (min-width: $tabletBreakpoint) {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>
