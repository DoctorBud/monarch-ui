<div class="home-page-section partners-section">

#### The **Monarch Initiative** is a collaboration between:

| | | |
|:---|:---:|---:|
| [![Charite](/img/team/charite.png)](https://www.charite.de/en/) | [![Garvan](/img/team/garvan.png)](https://www.garvan.org.au/) | [![Jax](/img/team/jackson.png)](https://www.jax.org/) |
| [![LBL](/img/team/lbnl.jpeg)](https://www.lbl.gov/) | [![](/img/team/ohsu.gif)](https://www.ohsu.edu/) | [![QMUL](/img/team/qmul.png)](http://www.smd.qmul.ac.uk) |
| [![](/img/team/renci.png)](https://renci.org/) | [![](/img/team/sanger.png)](http://www.sanger.ac.uk/) |  |

Monarch is supported generously by a NIH Office of the Director Grant #5R24OD011883, as well as by NIH-UDP: HHSN268201350036C, HHSN268201400093P, NCI/Leidos #15X143. We are grateful to the many [original sources of our data](/about/sources) for allowing Monarch to integrate them in this way. Except where forbidden by the original sources, this work is licensed under a Creative Commons Attribution 3.0 License.

</div>


<style lang="scss">
@import "~@/style/variables";
@import "~@/style/home-page";

div.partners-section {
  padding: 15px 0;
  background: $home-section-light-bg;
  text-align: center;

  p {
    font-size: 1rem;
    line-height: 1.2rem;
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
}
</style>
