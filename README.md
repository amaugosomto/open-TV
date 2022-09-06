# open-tv

A simple Vue3 front-end app built with tvmaze API

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Frameworks and Libraries Used

### Vue 3

Why?: I am familiar with only Vue 2, but I wanted to show that I understand typescript too. typescript can be used with Vue 2 but I also wanted to show that I can pick up new technologies and ideas very fast and be productive within a short period of time.

### Tailwind CSS

Why?: I wanted to show my I can put up a presentable mobile friendly website from nothing. Taking Ideas from all designs found all over the internet.

### Vitest

Why? Works easily with Vite and highly recommended for testing Vue 3 apps

### Pinia

Why? Pinia has taken over from Vuex according to Evan Yu in last years VueToronto Conference and highly recommended

## Planned Features Unadded

I wanted to implement the following features but did not have the time

- Caching of API results and images
- Better usage of placeholder images
- Better test coverage and e2e test
- Page to show seasonal episodes
- Page to show episode details
- Better error handling and logging
- Better UI, adding of animations and loading screens for slower network and dark mode
- 404 page for NotFound Page
- Better sorting and filter
- Pagination of Episode Page
