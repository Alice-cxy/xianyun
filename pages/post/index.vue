<template>
  <div class="strategy">
    <div class="menus">
      <div class="memus-list">
        <div class="memus-item">
          <span>热门城市</span>
        </div>
        <div class="memus-item">
          <span>推荐城市</span>
        </div>
        <div class="memus-item">
          <span>奔向海岛</span>
        </div>
        <div class="memus-item">
          <span>主题推荐</span>
        </div>
      </div>
      <div class="menus-recommend">
        <h4>推荐城市</h4>
        <a href="/post#">
          <img src="images/pic_sea.jpeg" />
        </a>
      </div>
    </div>
    <div class="post">
      <div class="search">
        <div class="search-bar">
          <input type="text" placeholder="请输入想去的地方，比如：'广州'" />
          <i class="el-icon-search"></i>
        </div>
        <div class="search-recommend">
          推荐：
          <span>广州</span>
          <span>上海</span>
          <span>北京</span>
        </div>
      </div>
      <div class="post-title">
          <h4>
              推荐攻略
          </h4>
          <button>
              <i class="el-icon-edit"></i>
              <span>
                  写游记
              </span>
          </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.strategy {
  width: 1000px;
  margin: 22.4px;
  padding: 20px 0;
  display: block;
  display: flex;
}
.memus {
  width: 210px;
  height: 100%;
  border: 1px solid #ddd;
  border-right: none;
  border-bottom: none;
  box-shadow: 0 0 1px #f5f5f5;
  display: flex;
}
.memus-item {
  width: 210px;
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  padding: 0 20px;
  font-size: 14px;
  position: relative;
  ::after {
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
.menus-recommend {
  h4 {
    font-weight: normal;
    padding: 20px 0 10px 0;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }
}
.post {
  display: block;
  width: 700px;
  margin-left: 40px;
}
.search {
    display: block;
    font-size: 16px;
}
.search-bar {
  width: 100%;
  height: 40px;
  line-height: 40px;
  box-sizing: border-box;
  border: 3px solid orange;
  display: flex;
  align-items: center;
  justify-content: space-between;
  input {
    flex: 1;
    padding: 0 20px;
    line-height: 40px;
    border: none;
    outline: none;
    background: none;
  }
  i {
    line-height: 35px;
    font-size: 24px;
    color: orange;
    font-weight: 700;
    margin-right: 10px;
  }
}
.search-recommend {
  display: block;
  padding: 10px 0;
  font-size: 12px;
  color: #666;
  span {
    margin-right: 5px;
  }
}
.post-title{
    display: flex;
    position: relative;
    padding: 10px;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    h4{
        display: block;
        font-weight: normal;
        font-size: 20px;
        color: orange;
        ::after {
            display: block;
            width: 72px;
            height: 2px;
            background: orange;
            position: absolute;
            bottom: 0;
            left: 0;
        }
    
    }
    button{

    }
}
</style>