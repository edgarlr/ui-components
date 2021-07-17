const BABEL_ENV = process.env.BABEL_ENV
const isCommonJS = BABEL_ENV !== undefined && BABEL_ENV === "cjs"
const isESM = BABEL_ENV !== undefined && BABEL_ENV === "esm"

module.exports = function (api) {
  api.cache(true);

  const plugins = ['babel-plugin-styled-components'];
  const presets = [
    [
      '@babel/preset-env', 
      {
        loose: true,
        modules: isCommonJS ? "commonjs" : false,
        targets: { esmodules: isESM ? true : undefined },
      }
    ],
    [
      '@babel/preset-react', 
      { development: process.env.BABEL_ENV !== "build"}
    ]
  ];

  return {
    presets,
    plugins,
    env: {
      build: {
        ignore: [
          '**/*.test.tsx',
          '**/*.test.ts',
          '**/*.test.js',
          '**/*.stories.tsx',
        ],
      },
    },
    ignore: ['node_modules'],
  };
}