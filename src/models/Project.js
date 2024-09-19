export class Project {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.coverImg = data.coverImg
    this.creatorId = data.creatorId
    this.projectImgs = data.projectImgs
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    // TODO make this better
    this.creator = data.creator
  }
}

const data = {
  "id": "66e4682e3c7b1c3f6cfd7d68",
  "_id": "66e4682e3c7b1c3f6cfd7d68",
  "title": "Building blocks",
  "coverImg": "https://cwuploaddemo.blob.core.windows.net/demo/668d81b3991d8145dc633f4c/introToWebDevBackgroun3.png",
  "creatorId": "66d0a8f659c53113966bc895",
  "projectImgs": [
    "https://cwuploaddemo.blob.core.windows.net/demo/668d81b3991d8145dc633f4c/html-js-css.png"
  ],
  "createdAt": "2024-09-13T16:28:30.594Z",
  "updatedAt": "2024-09-13T16:28:30.594Z",
  "__v": 0,
  "creator": {
    "_id": "66d0a8f659c53113966bc895",
    "subs": [
      "auth0|66d0a8f5915dc5a347b1bca5"
    ],
    "email": "oslotheoragutan@gachamon.mon",
    "name": "Oslo the Great",
    "picture": "https://cwuploaddemo.blob.core.windows.net/demo/668d81b3991d8145dc633f4c/DioBrando.png",
    "bio": "The Great Oslo orangutan, check out this sick kick flip!",
    "coverImg": "https://cwuploaddemo.blob.core.windows.net/demo/668d81b3991d8145dc633f4c/Cups-Warehouse.png",
    "github": "",
    "linkedin": "https://github.com/",
    "resume": "",
    "class": "",
    "graduated": false,
    "createdAt": "2024-08-29T16:59:48.143Z",
    "updatedAt": "2024-09-13T16:55:07.533Z",
    "__v": 0,
    "id": "66d0a8f659c53113966bc895"
  },
}