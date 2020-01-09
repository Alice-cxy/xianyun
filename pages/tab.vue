<template>
  <div class="tab">
      <!-- <div v-for="(item,index) in ['新闻','体育','娱乐']" :key='index' @handelclick(index = active)>
          {{item}}
      </div> -->
      <div v-if="current===0">
          <ul>
              <li>新闻1</li>
              <li>新闻2</li>
              <li>新闻3</li>
          </ul>
      </div>
      <div v-if="current===1">
          <ul>
              <li>体育1</li>
              <li>体育2</li>
              <li>体育3</li>
          </ul>
      </div>
      <div :v-if="current===2">
          <ul>
              <li>娱乐1</li>
              <li>娱乐2</li>
              <li>娱乐3</li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            current
        }
    },
    methods: {
        handelclick(index) {
            index=current
        }
    }
}
</script>

<style lang="less" scoped>
.active{
    color: #f00;
}
</style>