<script setup>
import { AppState } from '@/AppState.js';
import ProjectCard from '@/components/globals/ProjectCard.vue';
import { profilesService } from '@/services/ProfilesService.js';
import { projectsService } from '@/services/ProjectsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

// NOTE gives all information about the route that is currently being accessed by the router
const route = useRoute()
const profile = computed(() => AppState.activeProfile)
const projects = computed(() => AppState.projects)

// NOTE watch will watch a value, which will be the first argument passed to watch
// NOTE watch can natively watch any watchable object from Vue (ref, reactive, computed)
// NOTE if watching a primitive value, use a getter function ()=>
// NOTE whenever the watched value changes value, watch will execute your callback function (2nd argument)
// NOTE 3rd argument passed to watch will have watch execute it's callback function immediately on render (similar to onMounted)
watch(() => route.params.profileId, () => {
  getProfileById()
  getProjectsByCreatorId()
}, { immediate: true })


async function getProfileById() {
  try {
    // NOTE pulls a parameter out of the url
    // NOTE the name of your route parameter is determined by the path in the object set up in router.js: '/profiles/:profileId'
    const profileId = route.params.profileId
    logger.log('profile id from url', profileId); // if this is undefined, debug this before moving on
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
  <!-- NOTE we will not render any code in this div if profile is null or undefined. Profile will be null until network request finishes -->
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
            <i v-if="profile.graduated" class="mdi mdi-palette fs-1 grad-icon" title="Graduated"></i>
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
  <!-- NOTE if we haven't gotten our profile back from the network request -->
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