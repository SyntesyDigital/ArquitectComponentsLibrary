import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import { uglify } from "rollup-plugin-uglify";
import packageJSON from "./package.json";
import sass from 'rollup-plugin-sass';

const input = "./src/index.js";
const minifyExtension = pathToFile => pathToFile.replace(/\.js$/, ".min.js");

export default [
  // CommonJS
  {
    input,
    output: {
      file: packageJSON.main,
      format: "cjs",
      sourcemap: true
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      commonjs(
        {
          include: 'node_modules/**',
          // left-hand side can be an absolute path, a path
          // relative to the current directory, or the name
          // of a module in node_modules
          namedExports: {
            'node_modules/react/index.js': [
              'cloneElement',
              'createContext',
              'Component',
              'createElement'
            ],
            'node_modules/react-dom/index.js': ['render', 'hydrate'],
            'node_modules/react-is/index.js': [
              'isElement',
              'isValidElementType',
              'ForwardRef',
              'Memo',
              'isFragment'
            ]
          }
        }
      ),
      sass({
        insert: true,
      })
    ]
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.main),
      format: "cjs",
      sourcemap: true
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      commonjs(
        {
          include: 'node_modules/**',
          // left-hand side can be an absolute path, a path
          // relative to the current directory, or the name
          // of a module in node_modules
          namedExports: {
            'node_modules/react/index.js': [
              'cloneElement',
              'createContext',
              'Component',
              'createElement'
            ],
            'node_modules/react-dom/index.js': ['render', 'hydrate'],
            'node_modules/react-is/index.js': [
              'isElement',
              'isValidElementType',
              'ForwardRef',
              'Memo',
              'isFragment'
            ]
          }
        }
      ),
      uglify(),
      sass({
        insert: true,
      })
    ]
  },
  // UMD
  {
    input,
    output: {
      file: packageJSON.browser,
      format: "umd",
      sourcemap: true,
      name: "reactSampleComponentsLibrary",
      globals: {
        react: "React",
        "@emotion/styled": "styled",
        "@emotion/core": "core"
      }
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      commonjs(
        {
          include: 'node_modules/**',
          // left-hand side can be an absolute path, a path
          // relative to the current directory, or the name
          // of a module in node_modules
          namedExports: {
            'node_modules/react/index.js': [
              'cloneElement',
              'createContext',
              'Component',
              'createElement'
            ],
            'node_modules/react-dom/index.js': ['render', 'hydrate'],
            'node_modules/react-is/index.js': [
              'isElement',
              'isValidElementType',
              'ForwardRef',
              'Memo',
              'isFragment'
            ]
          }
        }
      ),
      sass({
        insert: true,
      })
    ]
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.browser),
      format: "umd",
      sourcemap: true,
      name: "reactSampleComponentsLibrary",
      globals: {
        react: "React",
        "@emotion/styled": "styled",
        "@emotion/core": "core"
      }
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      commonjs(
        {
          include: 'node_modules/**',
          // left-hand side can be an absolute path, a path
          // relative to the current directory, or the name
          // of a module in node_modules
          namedExports: {
            'node_modules/react/index.js': [
              'cloneElement',
              'createContext',
              'Component',
              'createElement'
            ],
            'node_modules/react-dom/index.js': ['render', 'hydrate'],
            'node_modules/react-is/index.js': [
              'isElement',
              'isValidElementType',
              'ForwardRef',
              'Memo',
              'isFragment'
            ]
          }
        }
      ),
      sass({
        insert: true,
      }),
      terser()
    ]
  },
  // ES
  {
    input,
    output: {
      file: packageJSON.module,
      format: "es",
      sourcemap: true,
      exports: "named"
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      sass({
        insert: true,
      }),
      commonjs(
        {
          include: 'node_modules/**',
          // left-hand side can be an absolute path, a path
          // relative to the current directory, or the name
          // of a module in node_modules
          namedExports: {
            'node_modules/react/index.js': [
              'cloneElement',
              'createContext',
              'Component',
              'createElement'
            ],
            'node_modules/react-dom/index.js': ['render', 'hydrate'],
            'node_modules/react-is/index.js': [
              'isElement',
              'isValidElementType',
              'ForwardRef',
              'Memo',
              'isFragment'
            ]
          }
        }
      ),
    ]
  },
  {
    input,
    output: {
      file: minifyExtension(packageJSON.module),
      format: "es",
      sourcemap: true,
      exports: "named"
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      external(),
      resolve(),
      commonjs(
        {
          include: 'node_modules/**',
          // left-hand side can be an absolute path, a path
          // relative to the current directory, or the name
          // of a module in node_modules
          namedExports: {
            'node_modules/react/index.js': [
              'cloneElement',
              'createContext',
              'Component',
              'createElement'
            ],
            'node_modules/react-dom/index.js': ['render', 'hydrate'],
            'node_modules/react-is/index.js': [
              'isElement',
              'isValidElementType',
              'ForwardRef',
              'Memo',
              'isFragment'
            ]
          }
        }
      ),
      sass({
        insert: true,
      }),
      terser()
    ]
  }
];
