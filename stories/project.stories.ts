import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Project from "@/components/home/project";

const meta = {
    component: Project,
} satisfies Meta<typeof Project>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProjectCard: Story = {
    args: {
        title: "Test Projet",
        fr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac massa aliquam, faucibus elit et, finibus nunc. Suspendisse non gravida libero, maximus lacinia massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec non mi vel elit placerat euismod nec sed lectus. Suspendisse dictum congue sodales. Nam sit amet mollis odio. Vestibulum laoreet efficitur feugiat. ",
        en: "",
        year: "2025",
        source: {
            title: "Github",
            url: "github.com/Pyramond/Oneblind"
        },
        stack: ["Java", "Motion", "C++", "Firebase", "FastAPI", "NodeJS", "NPM", "Redux", "Sass"]
    }
}