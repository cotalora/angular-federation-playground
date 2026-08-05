# Angular Federation Playground

Proof-of-concept project exploring **micro-frontends with Module Federation** where each MFE runs a **different version of Angular**, evaluating how to share global state/instances (e.g. `NgZone`) between them.

## Structure

| App     | Role                              | Angular | Port |
| ------- | --------------------------------- | ------- | ---- |
| `host`  | Shell / container                 | 17.3.12 | 4200 |
| `mfe-1` | Remote micro-frontend             | 17.3.12 | 4201 |
| `mfe-2` | Remote micro-frontend             | 17.3.12 | 4202 |
| `mfe-3` | Remote micro-frontend (zoneless)  | 21.2.16 | 4203 |
| `mfe-4` | Remote micro-frontend (NgModules) | 13.4.0  | 4204 |

Each app is an independent Angular project (its own `package.json`, `node_modules`, and Angular version) that exposes a `Bootstrap` via **Module Federation** (`@angular-architects/module-federation`). The `host` dynamically loads each MFE (`loadRemoteModule`) and mounts it into a container using `createComponent`/`bootstrapModule`, without sharing the Angular runtime across versions (`shared: {}`).

## Requirements

- Node.js and npm
- Install dependencies in **every** folder (`host`, `mfe-1`, `mfe-2`, `mfe-3`, `mfe-4`):

```bash
cd host && npm install
cd ../mfe-1 && npm install
cd ../mfe-2 && npm install
cd ../mfe-3 && npm install
cd ../mfe-4 && npm install
```

## How to run the project

### Option A: all at once (recommended)

From the repo root, `npm start` runs `scripts/start-all.js`, which launches `npm start` in `host`, `mfe-1`, `mfe-2`, `mfe-3`, and `mfe-4` in parallel:

```bash
npm start
```

### Option B: manually, one by one

Start the remote MFEs first, then the host (in separate terminals):

```bash
# In each MFE folder
npm start

# Finally, the host
cd host && npm start
```

Then open [http://localhost:4200](http://localhost:4200) and navigate between `/mfe-1`, `/mfe-2`, `/mfe-3`, and `/mfe-4`.

## Notes

- `mfe-3` runs in _zoneless_ mode (`provideZonelessChangeDetection`) and also exposes a `TestService` using signals.
- `mfe-4` uses a classic `NgModule` (Angular 13) instead of standalone components.
- The `host` stores its `NgZone` on `globalThis.ngZone`, and `mfe-1`/`mfe-2`/`mfe-4` reuse it when available, as part of exploring shared global state across versions.
