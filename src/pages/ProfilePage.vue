<script setup>
import { AppState } from '@/AppState.js';
import { profilesService } from '@/services/ProfilesService.js';
import { projectsService } from '@/services/ProjectsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const profile = computed(() => AppState.activeProfile)
const projects = computed(() => AppState.projects)

onMounted(() => {
  getProfileById()
  getProjectsByCreatorId()
})


async function getProfileById() {
  try {
    const profileId = route.params.profileId
    logger.log('id of profile from url', profileId);
    await profilesService.getProfileById(profileId)
  } catch (error) {
    Pop.meow(error)
    logger.error(error)
  }
}

async function getProjectsByCreatorId() {
  try {
    const profileId = route.params.profileId
    await projectsService.getProjectsByCreatorId(profileId)
  } catch (error) {
    Pop.meow(error)
    logger.error(error)
  }
}
</script>


<template>
  <div v-if="profile" class="container">
    <section class="row cover-img-bg align-items-center" :style="{ backgroundImage: `url(${profile.coverImg})` }">
      <div class="col-12">
        <div class="text-light d-flex justify-content-center align-items-center gap-2">
          <h1>
            <span class="me-2">{{ profile.name }}</span>
            <a v-if="profile.linkedin" :href="profile.linkedin" target="_blank" class="text-light"
              title="Connect with me on linkedin!">
              <i class="mdi mdi-linkedin"></i>
            </a>
          </h1>
          <div class="position-relative">
            <img :src="profile.picture" :alt="profile.name" class="profile-img">
            <i v-if="profile.graduated" class="mdi mdi-palette fs-1 grad-icon"></i>
          </div>
        </div>
      </div>
    </section>
    <div class="row">
      <div class="col-12">
        <p>{{ profile.bio }}</p>
      </div>
    </div>
    <div class="row">
      <div v-for="project in projects" :key="project.id" class="col-md-4 mb-3">
        <ProjectCard :projectProp="project" />
      </div>
    </div>
  </div>
  <div v-else class="container">
    <section class="row">
      <div class="col-12">
        <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
      </div>
    </section>
  </div>
</template>


<style scoped>
.cover-img-bg {
  min-height: 60dvh;
  background-size: cover;
}

h1 {
  text-shadow: 1px 1px black;
}

.profile-img {
  height: 30dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
}

.grad-icon {
  position: absolute;
  right: 18px;
  text-shadow: 0 0 2px black;
}
</style>