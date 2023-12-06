bring ex;
bring cloud;
bring http;

let api = new cloud.Api(
  cors: true
);

api.get("/title", inflight () => {
  return {
    status: 200,
    body: "Hello from the API Again"
  };
});

let react = new ex.ReactApp(
  projectPath: "../client",
  localPort: 4003
);

react.addEnvironment("apiUrl", api.url);