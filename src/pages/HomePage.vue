<script setup>
import { projectsService } from '@/services/ProjectsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { onMounted } from 'vue';

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
  </div>
</template>

<style scoped lang="scss"></style>
