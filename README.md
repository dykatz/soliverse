# SoliVerse

SoliVerse is a social media server.

## Designing

There is a diagram of the database schema stored in [this](/meta/schema.vuerd.json) file. To view and edit it, use the [vuerd](https://github.com/vuerd/vuerd) tool.

## Developing

Clone the project and install dependencies with:

```sh
npm install
```

Create a `.env` file with:

```sh
npm run make-env
```

Adjust the resulting `.env` file to have the correct DB url.

Start a development server and open it in the browser, which will hot-reload changes, with:

```sh
npm run dev -- --open
```

The project uses the following major dependencies:

- [SolidStart](https://start.solidjs.com) — application framework
- [Solid](https://solidjs.com) - component framework
- [UnoCSS](https://uno.antfu.me/) — atomic CSS framework

VS Code is _highly_ recommended for development. Install the recommended extensions to be consistent with other developers.

## Deploying

Compile a production build of SoliVerse with:

```sh
npm run build
```

SoliVerse deployed with _adapters_, which optimize your project for deployment to different services.

By default, SoliVerse makes a node app that can run on any server. To use a different adapter (e.g. for serverless deployment), add one to the `devDependencies` in `package.json` and specify it in your `vite.config.js`. The official adapters are the `start-*` packages listed [here](https://github.com/solidjs/solid-start/tree/main/packages).

The node app can be started with:

```
npm start
```

## Licensing

SoliVerse follows in the footsteps of other federated social media projects, like [Mastodon](https://joinmastodon.org/) and [Pleroma](https://pleroma.social/), and is licensed under the [AGPL license](https://www.gnu.org/licenses/agpl-3.0.en.html). Read the [`LICENSE`](/LICENSE.md) file for more details.
