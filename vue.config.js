const markdownIt = require('markdown-it')({
  html: true,
  breaks: true,
  linkify: true
});
const mila = require('markdown-it-link-attributes');

// console.log('########markdownIt', Object.keys(markdownIt));
// console.log('#######');


// // Remember old renderer, if overriden, or proxy to default renderer
// const defaultMarkdownItRender = markdownIt.renderer.rules.link_open || function defaultRender(tokens, idx, options, env, self) {
//   return self.renderToken(tokens, idx, options);
// };

// markdownIt.renderer.rules.link_open = function link(tokens, idx, options, env, self) {
//   // If you are sure other plugins can't add `target` - drop check below
//   const aIndex = tokens[idx].attrIndex('target');

//   if (aIndex < 0) {
//     tokens[idx].attrPush(['target', '_blank']); // add new attribute
//   }
//   else {
//     tokens[idx].attrs[aIndex][1] = '_blank'; // replace value of existing attr
//   }

//   // pass token to default renderer.
//   return defaultMarkdownItRender(tokens, idx, options, env, self);
// };


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


    // vue-markdown-loader
    markdownIt.raw = true;
    markdownIt.foo = true;
    markdownIt.preprocess = function preprocess(md, source) {
      console.log('preprocess', Object.keys(md));
      console.log('');

      md.use(mila, {
        attrs: {
          target: '_blank',
          rel: 'noopener'
        }
      });

      // Remember old renderer, if overriden, or proxy to default renderer
      const defaultRender = md.renderer.rules.link_open || function defaultRender(tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options);
      };

      md.renderer.rules.link_open = function link(tokens, idx, options, env, self) {
        // If you are sure other plugins can't add `target` - drop check below
        const aIndex = tokens[idx].attrIndex('target');

        if (aIndex < 0) {
          tokens[idx].attrPush(['target', '_blank']); // add new attribute
        }
        else {
          tokens[idx].attrs[aIndex][1] = '_blank'; // replace value of existing attr
        }

        // pass token to default renderer.
        return defaultRender(tokens, idx, options, env, self);
      };

      // do any thing
      return source;
    };

    config.module
      .rule('vmlmd')
      .test(/\.vmlmd$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options(markdownIt);
    // .options({
    //   raw: true,
    //   wrapper: 'article',
    //   options: markdownIt
    // });


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

    // vmark-loader
    config.module
      .rule('vmd')
      .test(/\.vmd$/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vmark-loader')
      .loader('vmark-loader')
      .options({
        extend: function extend(md) {
          md.use(mila, {
            attrs: {
              target: '_blank',
              rel: 'noopener'
            }
          });

          // // https://github.com/markdown-it/markdown-it/blob/master/docs/architecture.md#renderer

          // // Remember old renderer, if overriden, or proxy to default renderer
          // const defaultRender = md.renderer.rules.link_open || function defaultRender(tokens, idx, options, env, self) {
          //   return self.renderToken(tokens, idx, options);
          // };

          // md.renderer.rules.link_open = function link(tokens, idx, options, env, self) {
          //   // If you are sure other plugins can't add `target` - drop check below
          //   const aIndex = tokens[idx].attrIndex('target');

          //   if (aIndex < 0) {
          //     tokens[idx].attrPush(['target', '_blank']); // add new attribute
          //   }
          //   else {
          //     tokens[idx].attrs[aIndex][1] = '_blank'; // replace value of existing attr
          //   }

          //   // pass token to default renderer.
          //   return defaultRender(tokens, idx, options, env, self);
          // };
        }
      });
    // .end();


    // markdown-to-vue-loader
    // config.module
    //   .rule('m2vmd')
    //   .test(/\.m2vmd$/)
    //   .use('vue-loader')
    //   .loader('vue-loader')
    //   .end()
    //   .use('markdown-to-vue-loader')
    //   .loader('markdown-to-vue-loader')
    //   .end();
    // // .options({
    // //   componentNamespace: 'M2VNS',
    // //   componentWrapper: `<section></section`,
    // // });



    // my-markdown-loader
    // config.module
    //   .rule('mmlmd')
    //   .test(/\.mmlmd$/)
    //   .use('my-markdown-loader')
    //   .loader('my-markdown-loader')
    //   .end();

    // config.module
    //   .rule('fmlmd')
    //   .test(/\.fmlmd$/)
    //   // .use('vue-loader')
    //   // .loader('vue-loader')
    //   // .end()
    //   .use('frontmatter-markdown-loader')
    //   .loader('frontmatter-markdown-loader')
    //   .end();

    // config.module
    //   .rule('fmlvmd')
    //   .test(/\.fmlvmd$/)
    //   // .use('vue-loader')
    //   // .loader('vue-loader')
    //   // .end()
    //   .use('frontmatter-markdown-loader')
    //   .loader('frontmatter-markdown-loader')
    //   .options({
    //     vue: true
    //   });
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
