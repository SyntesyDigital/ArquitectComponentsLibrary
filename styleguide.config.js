const path = require("path");

module.exports = {
  serverPort: 6109,
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
            'src/components/Forms/FieldListItem/FieldListItem.js',
            'src/components/Forms/FieldList/FieldList.js',
            'src/components/Forms/ToggleField/ToggleField.js',
          ],
          exampleMode: 'expand', // 'hide' | 'collapse' | 'expand'
          usageMode: 'hide',
        },
        {
          name: 'Layout',
        },
        {
          name: 'Components',
          components: () => [
            'src/components/Components/Modal/Modal.js',
          ],
          exampleMode: 'expand',
          usageMode: 'hide',
        },
        {
          name: 'Pages',
          components: () => [
            'src/components/Pages/BarTitle/BarTitle.js',
            'src/components/Pages/BoxAdd/BoxAdd.js',
            'src/components/Pages/BoxAddGroup/BoxAddGroup.js',
            'src/components/Pages/BoxInputAdd/BoxInputAdd.js',
            'src/components/Pages/BoxList/BoxList.js',
            'src/components/Pages/BoxWithIcon/BoxWithIcon.js',
            'src/components/Pages/ButtonDropdown/ButtonDropdown.js',
            'src/components/Pages/ButtonPrimary/ButtonPrimary.js',
            'src/components/Pages/ButtonSecondary/ButtonSecondary.js',
            'src/components/Pages/CollapsableGroup/CollapsableGroup.js',
            'src/components/Pages/DataTable/DataTable.js',
            'src/components/Pages/DragField/DragField.js',
            'src/components/Pages/PageTitle/PageTitle.js',
            'src/components/Pages/Separator/Separator.js',
            'src/components/Pages/SideBarTitle/SideBarTitle.js',
            'src/components/Pages/TabButton/TabButton.js',

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
