# Themer `sanity build` simplest example

Shows the minimum required setup for a Studio v3 install to be able to use `await import()` calls in `sanity.config.ts` to use Themer themes.

It loads the Verdant theme:
<img width="920" alt="image" src="https://user-images.githubusercontent.com/81981/180381906-c477532e-74f4-4178-9032-e752142911ee.png">

[https://example-v3-studio.vercel.app/](View project live)
It only lets you see the login screen in the theme, to see the full studio:
1. Create a new project: https://www.sanity.io/get-started
2. Fork this repo.
3. Modify the `projectId` and `dataset` in `sanity.config.ts`.
4. `npm start` and open `http://localhost:3333`.

Related demos:
