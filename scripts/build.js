const args = ["run build"];
const opts = { stdio: "inherit", cwd: "rent_my_stuff", shell: true };
require("child_process").spawn("npm", args, opts);
