<template>
  <section id="projects" class="default-width">
    <h1 class="section-title">Projects</h1>

    <div class="project-grid">
      <div v-for="(project, index) in projects" :key="index" class="project">
        <div class="project-text">
          <div class="project-header">
            <h2 class="project-title">
              <a
                :href="project.url || project.homepageUrl"
                target="_blank"
                rel="noreferrer noopener"
              >
                {{ project.name }}
              </a>
            </h2>
          </div>

          <p class="project-description">{{ project.description }}</p>

          <div class="project-tags">
            <p
              v-for="(language, languageIndex) in project.languages.nodes"
              :key="languageIndex"
              class="project-tag"
              :style="`background-color: ${language.color}`"
            >
              {{ language.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  name: 'Projects',

  data() {
    return {
      projects: [
        {
          name: 'Strongr',
          description:
            'Fitness tracker web app made using Nuxt (TypeScript), Node/Express & MongoDB. ',
          languages: {
            nodes: [
              {
                color: '#41b883',
                name: 'Vue',
              },
              {
                color: '#f1e05a',
                name: 'JavaScript',
              },
            ],
          },
          homepageUrl: 'https://stron.gr/',
        },
      ],
    };
  },

  created() {
    this.fetchProjects();
  },

  methods: {
    /**
     * @summary fetch first 6 pinned repositories from Github
     */
    async fetchProjects(): Promise<void> {
      if (
        process.env.FETCH_PINNED_LAMBDA_URL &&
        typeof process.env.FETCH_PINNED_LAMBDA_URL === 'string'
      ) {
        const projects: [] = await axios
          .get(process.env.FETCH_PINNED_LAMBDA_URL)
          .then((res) => res.data);

        this.projects = this.projects.concat(projects);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
$mobileBreakpoint: 600px;
$tabletBreakpoint: 1367px;

.project-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2rem;

  @media screen and (min-width: $tabletBreakpoint) {
    grid-template-columns: repeat(3, 1fr);
  }

  .project {
    width: 100%;
    background-color: #fff;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    border: 1px solid #101010;
    position: relative;
    padding-bottom: 3rem;

    .project-text {
      .project-header {
        display: flex;

        .project-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
          text-transform: lowercase;

          a {
            text-decoration: none;
          }
        }
      }

      .project-description {
        margin-bottom: 0.5rem;
      }

      .project-tags {
        display: flex;
        position: absolute;
        bottom: 1rem;

        .project-tag {
          font-size: 0.8rem;
          color: white;
          margin-right: 0.5rem;
          padding: 0.25rem 0.5rem;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>
