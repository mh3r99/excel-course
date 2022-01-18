console.log("module-js");

async function start() {
  return await Promise.resolve("await");
}

start().then(console.log);
