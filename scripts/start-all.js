const { spawn } = require("child_process");
const path = require("path");

const apps = ["shell", "auth", "home", "notification", "preferences"];
const root = path.resolve(__dirname, "..");

apps.forEach((app) => {
  const cwd = path.join(root, app);
  const child = spawn("npm", ["start"], { cwd, shell: true, stdio: "inherit" });

  child.on("error", (err) => {
    console.error(`[${app}] error to start:`, err.message);
  });

  child.on("exit", (code) => {
    console.log(`[${app}] process was terminated with code ${code}`);
  });
});
