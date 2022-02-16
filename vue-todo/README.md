# Vue-todo

A simple todo application implemented using Vue 3 with Composition API.

## Issues

- Have to specify lang="ts" on every component.
- No obvious way to solve error `'HelloWorld.vue' cannot be compiled under '--isolatedModules' because it is considered a global script file. Add an import, export, or an empty 'export {}' statement to make it a module.`
- More complex setup. Still have errors while the app runs.

## Not working

❌ baseUrl config in tsconfig does not seem to work as expected (see import in main.ts)