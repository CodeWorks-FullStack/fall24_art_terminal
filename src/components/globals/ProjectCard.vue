<script setup>
import { Project } from '@/models/Project.js';
import { projectsService } from '@/services/ProjectsService.js';
import { useRoute } from 'vue-router';

// NOTE information about the route (current page we are on)
const route = useRoute()

const props = defineProps({
  projectProp: { type: Project, required: true }
})

function setActiveProject() {
  projectsService.setActiveProject(props.projectProp)
}

</script>


<template>
  <div class="card">
    <img :src="projectProp.coverImg" class="card-img-top" :alt="projectProp.title">
    <div class="card-body d-flex justify-content-between">
      <div>
        <h5 class="card-title">{{ projectProp.title }}</h5>
        <!-- NOTE data-bs-toggle is used to tell which bootstrap component we are trying to show/hide. data-bs-target should match the id of the modal we are specifically trying to open -->
        <!-- REVIEW normal title attribute nothing to see here -->
        <button @click="setActiveProject()" class="btn btn-primary" data-bs-toggle="modal"
          data-bs-target="#projectModal"
          :title="`${projectProp.title} has ${projectProp.projectImgs.length} ${projectProp.projectImgs.length == 1 ? 'image' : 'images'}. Click to see ${projectProp.projectImgs.length == 1 ? 'it' : 'them'}!`">
          Details
          <i class="mdi mdi-magnify-plus"></i>
        </button>
      </div>
      <!-- NOTE adds a route parameter to the url for our requested route. We want to store the id of the creator in the url on the profile page so that we can retrieve their relevant profile information when we land on that page -->
      <!-- NOTE v-if checks to see if we are on the home page -->
      <router-link v-if="route.name == 'Home'"
        :to="{ name: 'ProfileDetails', params: { profileId: projectProp.creatorId } }"
        :title="`Go to ${projectProp.creator.name}'s Profile Page!`">
        <img :src="projectProp.creator.picture" alt="" class="creator-img">
      </router-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  object-fit: cover;
  object-position: center;
}

.card-img-top {
  height: 35dvh;
}

.creator-img {
  height: 15dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
}
</style>