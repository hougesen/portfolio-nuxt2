<template>
  <section id="projects" class="default-width">
    <h1 class="section-titel">Projects</h1>

    <div class="project-grid">
      <div v-for="(project, index) in projects" :key="index" class="project">
        <div class="project-text">
          <div class="project-header">
            <h2 class="project-titel">
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
import Vue from 'vue'
import { gql } from 'graphql-request'

export default Vue.extend({
  name: 'Projects',
  data() {
    return {
      projects: [
        {
          name: 'Strongr',
          description: 'Fitness tracker PWA made using Vue.js/Express/MySQL. ',
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
        {
          name: 'Hayat Plakater',
          description: 'Webshop made using Nuxt.js and Strapi. ',
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
          homepageUrl: 'https://hayatplakater.dk/',
        },
      ],
    }
  },
  created() {
    this.fetchProjects()
  },
  methods: {
    async fetchProjects() {
      const query = gql`
        query GET_PROJECTS {
          user(login: "Hougesen") {
            pinnedItems(first: 6) {
              nodes {
                ... on Repository {
                  name
                  languages(
                    first: 3
                    orderBy: { field: SIZE, direction: DESC }
                  ) {
                    nodes {
                      color
                      name
                    }
                  }
                  description
                  homepageUrl
                  url
                }
              }
            }
          }
        }
      `

      const projects = await this.$graphql.default.request(query)

      this.projects = this.projects.concat(projects.user.pinnedItems.nodes)
    },
  },
})
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
}

.project {
  width: 100%;
  color: var(--black);

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

      .project-titel {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
        a {
          color: var(--black);
          text-decoration: none;
        }
      }
      .project-links {
        margin-left: auto;
        a {
          color: var(--black);
          &:hover {
            color: var(--highlight-color);
          }
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
      p {
        font-size: 0.8rem;
        color: white;
        margin-right: 0.5rem;
        padding: 0.25rem 0.5rem;
        border-radius: 2px;
      }
    }
  }
}
</style>
