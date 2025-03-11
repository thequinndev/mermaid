import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    build: {
        lib: {
            entry: {
                index: resolve(__dirname, 'src/index.ts'),
            },
            name: 'Mermaid'
        },
        sourcemap: true
    },
    test: {
        globals: true,
        environment: 'node',
        include: ['src/**/*.test.ts', 'src/**/*.spec.ts'], 
        coverage: {
          thresholds: {
            100: true,
          },
          reporter: ["text", "json", "html"],
          exclude: [
            '**/node_modules/**', // Ignore
            '**/dist/**', // Ignore
            '**/examples/**', // Ignore examples
            // Config files only
            '.eslintrc.js' ,                                                                                                                                                
            'vite.config.mts'
          ]
        },
    },
});