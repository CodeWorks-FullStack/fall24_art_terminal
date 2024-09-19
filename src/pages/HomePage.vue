<script setup>
import { AppState } from '@/AppState.js';
import ProjectCard from '@/components/globals/ProjectCard.vue';
import { projectsService } from '@/services/ProjectsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const projects = computed(() => AppState.projects)

onMounted(() => {
  getAllProjects()
})

async function getAllProjects() {
  try {
    await projectsService.getAllProjects()
  } catch (error) {
    Pop.meow(error)
    logger.error(error)
  }
}


</script>

<template>
  <div class="container">
    <section class="row my-2">
      <div class="col-12">
        <h1>Projects</h1>
      </div>
    </section>
    <div class="row">
      <div v-for="project in projects" :key="project.id" class="col-md-4 mb-3">
        <ProjectCard :projectProp="project" />
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss"></style>
