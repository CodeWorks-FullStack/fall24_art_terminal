import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,
  /** @type {import('./models/Account.js').Account} user info from the database*/
  // NOTE for the logged in user
  account: null,
  /** @type {import('./models/Project.js').Project[]} */
  projects: [],
  /** @type {import('./models/Project.js').Project} */
  activeProject: null,
  /** @type {import('./models/Account.js').Account} */
  // NOTE for someone else's profile
  activeProfile: null
})

