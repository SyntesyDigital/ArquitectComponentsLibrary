const path = require("path");

module.exports = {
  serverPort: 6101,
  theme: {
    color: {
      link: '#fff',
      linkHover: '#eeeeee',
      sidebarBackground: '#4dc7ee',
      baseBackground: '#fff',
    },
    fontFamily: {
      base: '"Helvetica Neue"',
    }
  },
  styles: {
    Logo: {
      logo: {
        backgroundImage: "url('http://www.syntesy.io/modules/front/images/logo.jpg')",
        backgroundSize: '180px',
        height: '60px',
        width: '100%',
        color: 'transparent',
      },
    }
  }, 
  styleguideDir: "dist-docs",
  pagePerSection: true,
  sections: [
    {
      sections: [
        {
          name: 'Forms',
          components: () => [
            'src/components/Forms/InputField/InputField.js',
            'src/components/Forms/IconField/IconField.js',
            'src/components/Forms/SelectField/SelectField.js',
          ],
          exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
          usageMode: 'hide',
        },
        {
          name: 'Layout',
          components: () => [
            'src/components/Forms/InputField/InputField.js',
            'src/components/Forms/IconField/IconField.js',
            'src/components/Forms/SelectField/SelectField.js',
          ],
          exampleMode: 'expand',
          usageMode: 'hide', 
        },
        {
          name: 'Components',
          components: () => [
            'src/components/Pages/Modal/Modal.js',
          ],
          exampleMode: 'expand',
          usageMode: 'hide',
        },
        {
          name: 'Pages',
          components: () => [
            'src/components/Pages/DataTable/DataTable.js',
          ],
          exampleMode: 'expand',
          usageMode: 'hide',
        },
      ],
    }
  ],
  require: [
    path.join(__dirname, 'src/library.scss')
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        },
        {
          test: /\.scss$/,
          loaders: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    }
  },
  moduleAliases: {
    "architect-components-library": path.resolve(__dirname, "src")
  }
};
