export interface Project {
    name: string
    description: string
    details: Detail[]
    tags: string[]
  }
  
  export interface Detail {
    images: string[]
    title: string
    description: string
    icons: Icon[]
    link: string
    tag: string
  }
  
  interface Icon {
    icon: string,
    name: string
  }