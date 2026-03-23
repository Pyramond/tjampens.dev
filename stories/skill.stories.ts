import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import SkillPill from "@/components/ui/skill-pill";

const meta = {
    component: SkillPill,
} satisfies Meta<typeof SkillPill>

export default meta;


type Story = StoryObj<typeof SkillPill>;

export const Skill_Pill: Story = {
    args: {
        name: "NextJS"
    }
}