<template>
  <div style="padding:60px;">
    <script
      type="text/javascript"
      src="https://webapi.amap.com/maps?v=1.4.15&key=6a533e6186485109b536fff01d176701"
    ></script>
    <div id="container"></div>
    <!-- <meta name="viewport" content="initial-scale=1.0, user-scalable=no" /> -->
  </div>
</template>

<script>
export default {
  mounted() {
    let map = new AMap.Map("container", {
      zoom: 11, //级别
      center: [116.397428, 39.90923], //中心点坐标
      viewMode: "3D" //使用3D视图
    });
  }
};
</script>

<style lang="less" scoped>
#container {
  width: 600px;
  height: 600px;
}
</style>