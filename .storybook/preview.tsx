import type { Preview } from '@storybook/nextjs-vite';
import "../app/[locale]/globals.css";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        a11y: {
            test: 'todo',
        },
    },

    decorators: [
        (Story) => (
            <div className="dark bg-black text-white font-sans min-h-screen p-6">
                <Story />
            </div>
        ),
    ],
};

export default preview;
