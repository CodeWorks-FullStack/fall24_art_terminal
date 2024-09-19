import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Project } from "@/models/Project.js"

class ProjectsService {

  setActiveProject(project) {
    AppState.activeProject = project
  }
  async getAllProjects() {
    const response = await api.get('api/projects')
    logger.log('GOT PROJECTS 📷🖼️', response.data)
    const newProjects = response.data.map(projectPOJO => new Project(projectPOJO))
    AppState.projects = newProjects
  }

  async getProjectsByCreatorId(creatorId) {
    const response = await api.get(`api/projects?creatorId=${creatorId}`)
    logger.log('GOT PROJECTS FOR PROFILE', response.data)
    const newProjects = response.data.map(projectPOJO => new Project(projectPOJO))
    AppState.projects = newProjects
  }
}

export const projectsService = new ProjectsService()