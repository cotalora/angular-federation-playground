# Angular Federation Playground

Proof-of-concept project exploring **micro-frontends with Module Federation** where each MFE runs a **different version of Angular**, evaluating how to share global state/instances (e.g. `NgZone`) between them.

## Structure

| App            | Role                              | Angular | Port |
| -------------- | --------------------------------- | ------- | ---- |
| `shell`        | Shell / container                 | 17.3.12 | 4200 |
| `auth`         | Remote micro-frontend             | 17.3.12 | 4201 |
| `home`         | Remote micro-frontend             | 17.3.12 | 4202 |
| `notification` | Remote micro-frontend (zoneless)  | 21.2.16 | 4203 |
| `preferences`  | Remote micro-frontend (NgModules) | 13.4.0  | 4204 |

Each app is an independent Angular project (its own `package.json`, `node_modules`, and Angular version) that exposes a `Bootstrap` via **Module Federation** (`@angular-architects/module-federation`). The `shell` dynamically loads each MFE (`loadRemoteModule`) and mounts it into a container using `createComponent`/`bootstrapModule`, without sharing the Angular runtime across versions (`shared: {}`).

## Requirements

- Node.js and npm
- Install dependencies in **every** folder (`shell`, `auth`, `home`, `notification`, `preferences`):

```bash
cd shell && npm install
cd ../auth && npm install
cd ../home && npm install
cd ../notification && npm install
cd ../preferences && npm install
```

## How to run the project

### Option A: all at once (recommended)

From the repo root, `npm start` runs `scripts/start-all.js`, which launches `npm start` in `shell`, `auth`, `home`, `notification`, and `preferences` in parallel:

```bash
npm start
```

### Option B: manually, one by one

Start the remote MFEs first, then the shell (in separate terminals):

```bash
# In each MFE folder
npm start

# Finally, the shell
cd shell && npm start
```

Then open [http://localhost:4200](http://localhost:4200) and navigate between `/auth`, `/home`, `/notification`, and `/preferences`.

## Notes

- `notification` runs in _zoneless_ mode (`provideZonelessChangeDetection`) and also exposes a `TestService` using signals.
- `preferences` uses a classic `NgModule` (Angular 13) instead of standalone components.
- The `shell` stores its `NgZone` on `globalThis.ngZone`, and `auth`/`home`/`preferences` reuse it when available, as part of exploring shared global state across versions.
