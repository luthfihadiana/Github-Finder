# Github Finder

## Prereq
- Node version > 18.0.0 (some dependency need version 18.0.0)

## How to run

First of all, don't forget to install dependency

```bash
yarn install 
```

After that, add `.env` file to your code. You can check `.env.example` for template `.env`
```
VITE_GITHUB_PERSONAL_TOKEN=YOUR_GITHUB_TOKEN_PERSONAL
```
Generate your own github personal token. For tutorial, you can check this [link](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens) for reference.

After add `.env`, you can run the application
```bash
yarn dev
```

Then you are ready to start the project!


## Tech Stack
- Vite
- React
- Redux
- @Redux/Toolkit
- Redux-persist
- HTML
- JS
- Octokit (Request github API)
- React Router

