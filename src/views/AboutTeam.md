<div
  class="container-fluid monarch-view monarch-about-view">
  <div class="content">
    <h1 class="text-center">Monarch Development Team</h1>
    <div class="card p-3 bg-light">
      <h3>
        Participating Institutions
      </h3>
      <div class="teamtoc">
        <dl>
          <!-- https://vuejs.org/v2/guide/list.html#v-for-on-a-lt-template-gt -->
          <template
            v-for="institution in institutions">
            <dt><a v-bind:href="'#' + institution.id">{{ institution.name }}</a></dt>
            <dd>
              {{ institution.peopleNames.join(', ') }}
            </dd>
          </template>
        </dl>
      </div>
    </div>
    <div
      v-for="institution in institutions"
      v-bind:id="institution.id"
      class="card py-2 team">
      <h3>
        <a
          v-bind:href="institution.website"
          target="_blank"
          rel="noreferrer">
          <img
            class="teamlogo"
            v-bind:src="institution.logo">
          {{institution.name}}
        </a>
      </h3>
      <div
        v-for="member in institution.people"
        class="teammember">
        <div class="memberhead">
          <div class="membername">{{ member.name }}</div>
          <div class="membertitle">{{ member.title }}</div>
        </div>
        <img
          class="memberpicture"
          v-bind:src="member.picture"/>
        <div class="clear"></div>
        <div class="memberbio">
          {{ member.bio }}
        </div>
        <!--
        <div class="membercontact">
          {{#email}}
          <a title="email" href="mailto:{{email}}" target="_blank"><img class="contactlogo" src="/image/logo-email.png" /></a> {{/email}} {{#website}}
          <a title="website" href="{{{website}}}" target="_blank"><img class="contactlogo" src="/image/logo-website.png" /></a> {{/website}} {{#twitter}}
          <a title="twitter" href="{{{twitter}}}" target="_blank"><img class="contactlogo" src="/image/logo-twitter.png" /></a> {{/twitter}} {{#facebook}}
          <a title="facebook" href="{{{facebook}}}" target="_blank"><img class="contactlogo" src="/image/logo-facebook.png" /></a> {{/facebook}}
        </div>
        -->
      </div>
<!--
      <div class="teammember">
        <div class="membername">{{name}} (alumni {{title}})</div>
      </div>
      {{/alumni}} {{/people}}
-->
  </div>
  <team-footer></team-footer>
</div>


<style lang="scss">
@import "~@/style/variables";

.container-fluid.monarch-view.monarch-about-view {
  h1, h2, h3, h4, h5, h6 {
    clear:both;
  }

  figure {
    display:table;

    img {
      padding:15px;
    }
  }

  .right {
    float:right;
  }

  .left {
    float:left;
  }

  .center {
    margin-left:auto;
    margin-right:auto;
    vertical-align:middle;
    text-align:center;
  }

  .bottomright {
    float:right;
    position:relative;
    bottom:0;
    right:0;
  }

  figcaption {
    text-align:justify;
    font-size:12px;
    word-wrap:normal;
    display:table-caption;
    caption-side: bottom;
    padding: 0 10px 5px;
    line-height: 16px;
  }

  table {
    margin: auto;
    text-align: center;
    td a img {
      max-width: 120px;
      margin: 5px;
    }

    @media(min-width:$grid-float-breakpoint) {
      td a img {
        max-width: 200px;
      }
    }
  }

/*
  .collab-table {
    table-layout: fixed;
    width: 100%;
  }

  .collab-table td {
    width: 125px;
    vertical-align: middle;
    text-align: center;
  }

  .collab-table img {
    margin-left: auto;
    margin-right: auto;
    max-height: 125px;
    max-width: 125px;
  }
*/
}

</style>


<script>
import getTeam from '@/api/Team';

export default {
  components: {
    'team-footer': require('@/components/Footer.md').default,
  },
  data() {
    return {
      institutions: [],
    };
  },
  async mounted() {
    this.institutions = (await getTeam()).institutions;
    console.log('institutions', this.institutions);
  }
};
</script>
