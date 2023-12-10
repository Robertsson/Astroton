export type Site = {
    lang : string;
    website : string;
    author: string;
    intro: {
        short:string;
    }
    description: {
        short:string;
        medium:string;
        long:string;
    };
    title: string;
    githubUrl: string;
}