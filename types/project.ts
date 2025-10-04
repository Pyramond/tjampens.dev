interface Source {
    title: string;
    url: string;
}

export default interface Project {
    title: string;
    year: string;
    fr: string;
    en: string;
    source?: Source;
}