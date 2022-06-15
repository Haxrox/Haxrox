import axios from 'axios';

class Project {
    constructor(data) {
        this.Data = data;
        this.Timestamp = Date.now();
    }

    IsStale() {
        return false;
    }
}

class ProjectsService {
    Projects = []
    ProjectData = {}
    BasicProjects = []

    GetAllProjects() {
        if (this.Projects.length > 0) {
            return new Promise((resolve, reject) => resolve(this.Projects));
        } else {
            return axios.get(`https://haxtech.azurewebsites.net/api/projects/`).then(response => {
                this.Projects = response.data;
                return response.data;
            });
        }
    }

    GetBasicProjects() {
        if (this.BasicProjects.length > 0) {
            return new Promise((resolve, reject) => resolve(this.BasicProjects));
        } else {
            return axios.get("https://haxtech.azurewebsites.net/api/projects/basic").then(response => {
                this.BasicProjects = response.data;
                return response.data;
            });
        }
    }

    GetDetailedProject(title) {
        const project = this.ProjectData[title]?.data;

        if (!project || project?.IsStale()) {
            return axios.get(`https://haxtech.azurewebsites.net/api/projects/detailed/${title}`).then(response => {
                this.ProjectData[title] = new Project(response.data);
                return response.data;
            });
        } else {
            return new Promise((resolve, reject) => {
                resolve(project);
            });
        }
    }

}

export default new ProjectsService()