export default {
    scripts: {
      check: "deno check --all src/asignador.ts",
      test: "deno test --allow-read --unstable --allow-net test/test_asignador.ts",
    },
};