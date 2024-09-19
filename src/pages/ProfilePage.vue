<script setup>
import { AppState } from '@/AppState.js';
import { profilesService } from '@/services/ProfilesService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const profile = computed(() => AppState.activeProfile)

onMounted(() => {
  getProfileById()
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
</script>


<template>
  <div class="container">
    <section class="row">
      <div class="col-12">
        <h1>{{ profile }}</h1>
      </div>
    </section>
  </div>
</template>


<style scoped></style>