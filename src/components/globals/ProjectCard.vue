<script setup>
import { Project } from '@/models/Project.js';
import { projectsService } from '@/services/ProjectsService.js';


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
        <button @click="setActiveProject()" class="btn btn-primary" data-bs-toggle="modal"
          data-bs-target="#projectModal"
          :title="`${projectProp.title} has ${projectProp.projectImgs.length} ${projectProp.projectImgs.length == 1 ? 'image' : 'images'}. Click to see ${projectProp.projectImgs.length == 1 ? 'it' : 'them'}!`">
          Details
          <i class="mdi mdi-magnify-plus"></i>
        </button>
      </div>
      <img :src="projectProp.creator.picture" alt="" class="creator-img">
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