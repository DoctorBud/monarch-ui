<template>
  <div id="selenium_id_content">
    <div
      id="monarch-home-container"
      class="container-fluid monarch-container monarch-home-container">

      <div class="row">
        <vml-home-intro-component/>
      </div>

      <div class="row">
        <vm-home-intro-component/>
      </div>

      <div class="row">
        <vml-home-about-monarch-component/>
      </div>

      <div class="row">
        <vm-home-about-monarch-component/>
      </div>

      <div class="row">
        <vml-home-what-we-do-component/>
      </div>

      <div class="row">
        <vm-home-what-we-do-component/>
      </div>

      <div class="row">
        <vml-home-news-component/>
      </div>

      <div class="row">
        <vm-home-news-component/>
      </div>

      <div class="row">
        <vml-home-data-component/>
      </div>

      <div class="row">
        <vm-home-data-component/>
      </div>

      <div class="row">
        <vml-home-partners-component/>
      </div>

      <div class="row">
        <vm-home-partners-component/>
      </div>

      <footer class="footer">
        <home-footer/>
      </footer>

    </div>
  </div>
</template>

<script>
import VMLHomeIntroComponent from '@/components/HomeIntro.vmlmd';
import VMHomeIntroComponent from '@/components/HomeIntro.vmd';

import VMLHomeAboutMonarchComponent from '@/components/HomeAboutMonarch.vmlmd';
import VMHomeAboutMonarchComponent from '@/components/HomeAboutMonarch.vmd';

import VMLHomeWhatWeDoComponent from '@/components/HomeWhatWeDo.vmlmd';
import VMHomeWhatWeDoComponent from '@/components/HomeWhatWeDo.vmd';

import VMLHomeNewsComponent from '@/components/HomeNews.vmlmd';
import VMHomeNewsComponent from '@/components/HomeNews.vmd';

import VMLHomeDataComponent from '@/components/HomeData.vmlmd';
import VMHomeDataComponent from '@/components/HomeData.vmd';

import VMLHomePartnersComponent from '@/components/HomePartners.vmlmd';
import VMHomePartnersComponent from '@/components/HomePartners.vmd';

import HomeFooter from '@/components/HomeFooter.vue';

export default {
  name: 'Home',
  components: {
    'home-footer': HomeFooter,
    'vml-home-intro-component': VMLHomeIntroComponent,
    'vm-home-intro-component': VMHomeIntroComponent,
    'vml-home-about-monarch-component': VMLHomeAboutMonarchComponent,
    'vm-home-about-monarch-component': VMHomeAboutMonarchComponent,
    'vml-home-what-we-do-component': VMLHomeWhatWeDoComponent,
    'vm-home-what-we-do-component': VMHomeWhatWeDoComponent,
    'vml-home-news-component': VMLHomeNewsComponent,
    'vm-home-news-component': VMHomeNewsComponent,
    'vml-home-data-component': VMLHomeDataComponent,
    'vm-home-data-component': VMHomeDataComponent,
    'vml-home-partners-component': VMLHomePartnersComponent,
    'vm-home-partners-component': VMHomePartnersComponent,
  },
  data() {
    return {
    };
  },
  async mounted() {
    /* eslint-disable */
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t.widgets.load();
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);

      t._e = [];
      t.ready = function (f) {
        t._e.push(f);
      };
      return t;
    }(document, "script", "twitter-wjs"));
    /* eslint-enable */
  }
};

</script>

<style lang="scss">
  @import "~@/style/variables";

  .monarch-home-container {
    padding-top: $navbar-height;
  }

  .monarch-home-container p {
    margin: 0 0 25px;
    font-size: 18px;
    line-height: 1.5;
    @media(min-width:$grid-float-breakpoint) {
      margin: 0 0 35px;
      font-size: 20px;
      line-height: 1.6;
    }
  }

  // .monarch-home-container a {
  //   color: $link-color;
  //   -webkit-transition: all .2s ease-in-out;
  //   -moz-transition: all .2s ease-in-out;
  //   transition: all .2s ease-in-out;
  //   &:hover,
  //   &:focus {
  //     xtext-decoration: none;
  //     color: darken($link-color,20%);
  //   }
  // }

  .monarch-home-container .light {
    font-weight: 400;
  }

  // .monarch-home-container header.intro {
  //   display: table;
  //   width: 100%;
  //   height: auto;
  //   margin: $navbar-height - 1 0 0 0;
  //   padding: 20px 0;
  //   text-align: center;
  //   color: white;
  //   background-color: $monarch-bg-color;

  //   .intro-body {
  //     display: table-cell;
  //     vertical-align: middle;

  //     .brand-heading {
  //       padding: 20px 0 20px 0;
  //     }
  //     .intro-text {
  //       margin: 5px;
  //       font-size: 18px;
  //     }
  //   }

  //   @media(min-width:$grid-float-breakpoint) {
  //     .intro-body {
  //       .intro-text {
  //         font-size: 22px;
  //         line-height: 1.2em;
  //       }
  //     }

  //   }
  // }

  .monarch-home-container .content-section {
    padding-top: 50px;
    padding-bottom: 50px;
    font-size: 18px;
  }

  .monarch-home-container .data-dashboard {
    padding-top: 50px;
    padding-bottom: 50px;
    font-size: 18px;
    background: #EBEBEB;
  }

  .monarch-home-container .news-section {
    padding-top: 30px;
    padding-bottom: 30px;
    font-size: 18px;
  }

  .monarch-home-container ul {
    max-height: 350px;
    overflow-y: auto;
  }

  .monarch-home-container ul li {
    line-height: 1.5rem;
  }

  .monarch-home-container .search-section {
    padding: 50px 10px;
  }

  .monarch-home-container .features-section {
    height: auto;
    width: 100%;
    padding: 50px 0;
    color: black;
    font-size: 18px;
    background-color: #E8E8E8;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    -o-background-size: cover;
  }

  .monarch-home-container .partners-section {
    padding: 50px 10px;
  }

  .monarch-home-container .btn.btn-dark {
    text-transform: uppercase;
    color: white;
    font-family: "Montserrat","Helvetica Neue",Helvetica,Arial,sans-serif;
    font-weight: 400;
    -webkit-transition: all .3s ease-in-out;
    -moz-transition: all .3s ease-in-out;
    transition: all .3s ease-in-out;
  }

  .monarch-home-container footer.footer {
    display: table;
    width: 100%;
    height: auto;
    padding: 50px 0 0 0;
    text-align: center;
    color: white;
    background-color: $monarch-bg-color;

    a {
      color: white;
    }
  }

  .monarch-home-container ul {
    max-height: 350px;
    overflow-y: auto;
    list-style-type: none;
  }

  .monarch-home-container ul li {
    line-height: 1.5rem;
  }

  .monarch-home-container section,
  .monarch-home-container div.vmark {
    width: 100%;
    xpadding: 0;
    xmargin: 0;
  }
</style>
