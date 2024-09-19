<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';

const project = computed(() => AppState.activeProject)

</script>


<template>
  <!-- NOTE make sure this part of the modal is always in the code so we can open it -->
  <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <!-- NOTE inner part of the modal is hidden until an active project is set in the appstate -->
      <div v-if="project" class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="projectModalLabel">{{ project.title }}</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="container">
            <div class="row">
              <div v-for="(projectImg, index) in project.projectImgs" :key="projectImg" class="col-12 mb-3">
                <img :src="projectImg" :alt="`Picture ${index + 1} of ${project.projectImgs.length}`"
                  class="img-fluid w-100">
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  max-height: 80dvh;
  object-fit: cover;
}
</style>