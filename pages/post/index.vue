<template>
  <div class="strategy">
      <div class="menus">
          <div class="memus-list">
              <div class="memus-item"><span>热门城市</span></div>
              <div class="memus-item"><span >推荐城市</span></div>
              <div class="memus-item"><span >奔向海岛</span></div>
              <div class="memus-item"><span >主题推荐</span></div>
          </div>
          <div class="menus-recommend">
              <h4>推荐城市</h4>
              <a href="/post#">
              <img src="images/pic_sea.jpeg">
              </a>
          </div>
      </div>
      <div class="post">
          <div class="search">
              <input type="text">
              <i></i>
          </div>
      </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
*{
    margin: 0;
    padding: 0;
}
.strategy{
    width: 1000px;
    margin: 22.4px;
    padding: 20px 0;
}
.memus{
    width: 210px;
    height: 100%;
    border: 1px solid #ddd;
    border-right: none;
    border-bottom: none;
    box-shadow: 0 0 1px #f5f5f5;
    display: block;
    
}
.memus-item{
    width: 210px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    padding: 0 20px;
    font-size: 14px;
    position: relative;
    ::after{
        display: block;
        width: 10px;
        height: 10px;
        border-right: 1px solid #999;
        border-top: 1px solid #999;
        transform: rotate(45deg);
        position: absolute;
        right: 20px;
        top: 15px;
    }
}
.menus-recommend{
    h4{
        font-weight: normal;
        padding: 10px 0 10px 20px;
        border-bottom: 1px solid #ddd;
        margin-bottom: 10px;
    }
}
</style>