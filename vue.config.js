module.exports = {
  outputDir: 'docs',
  baseUrl: '/monarch-ui/',

  // lintOnSave: false,

  chainWebpack: (config) => {
    config.resolveLoader.modules.add(
      '/Users/bud/MI/monarch-ui/src/loaders/'
    );

    // config.module
    //   .rule('markdown')
    //   .resourceQuery(/blockType=markdown/)
    //   .use('markdown-loader')
    //   .loader('markdown-loader')
    //   .tap((options) => {
    //     /* eslint no-param-reassign: 0 */
    //     console.log('#######options', options);
    //   });


    config.module
      .rule('fmlmd')
      .test(/\.fmlmd$/)
      // .use('vue-loader')
      // .loader('vue-loader')
      // .end()
      .use('frontmatter-markdown-loader')
      .loader('frontmatter-markdown-loader')
      .end();

    config.module
      .rule('fmlvmd')
      .test(/\.fmlvmd$/)
      // .use('vue-loader')
      // .loader('vue-loader')
      // .end()
      .use('frontmatter-markdown-loader')
      .loader('frontmatter-markdown-loader')
      .options({
        vue: true
      });

    // markdown-to-vue-loader
    config.module
      .rule('m2vmd')
      .test(/\.m2vmd$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('markdown-to-vue-loader')
      .loader('markdown-to-vue-loader')
      .end();


    // my-markdown-loader
    config.module
      .rule('mmlmd')
      .test(/\.mmlmd$/)
      .use('my-markdown-loader')
      .loader('my-markdown-loader')
      .end();

    // vue-markdown-loader
    config.module
      .rule('vmlmd')
      .test(/\.vmlmd$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      });


    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        /* eslint no-param-reassign: 0 */
        options.transformAssetUrls = {
          'img': 'src',
          'image': 'xlink:href',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'img-src',
          'b-carousel-slide': 'img-src',
          'b-embed': 'src'
        };

        return options;
      });

    // // vmark-loader
    // config.module
    //   .rule('vmd')
    //   .test(/\.vmd$/)
    //   .use('vmark-loader')
    //   .loader('vmark-loader')
    //   .loader('vue-loader')
    //   .end();
  }

/*
const path = require('path');
  // Based on:
  //  https://github.com/vuejs/vue-cli/issues/1647#issuecomment-399093605
  //
  chainWebpack: config => {
    config.plugin('define').tap(definitions => {
      definitions[0] = Object.assign(definitions[0], {
        'monarchNGPrelude': path.join(__dirname, 'src/style/variables.scss')
      });
      return definitions;
    });
  }
*/
};
