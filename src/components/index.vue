
<template>
  <div class="index">
    <header class="hearder-top"><span>Vue</span></header>
   <div class="main_wrap">
     <el-row class="main">
      <el-col :span="6" :xs="10" v-for="(item, index) in cartList" :key="index" :offset="index > 0 ? 3 : 0">
        <router-link to="/Todo">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.img" class="image">
            <div style="padding: 14px;">
              <span>{{item.title}}</span>
              <div class="bottom clearfix">
                <time class="time">技术：{{item.desc}}</time>
              </div>
            </div>
          </el-card>
        </router-link>
      </el-col>
    </el-row>
   </div>
   <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
    return{
      cartList:[
        {
          img:require('../assets/todo.png'),
          title:'todoMvc例子',
          desc:'vuex+vue'
        },
        {
          img:require('../assets/qq.png'),
          title:'仿照QQ音乐',
          desc:'vuex+vue'
        },
        {
          img:require('../assets/todo.png'),
          title:'todoMvc例子',
          desc:'vuex+vue'
        }
      ]
    }
  },
  components:{
  },
  methods:{
     handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  computed:{
  }
}
</script>

<style scoped>
html,body{
  padding:0;
  margin:0;
}
a{
  text-decoration: none;
}
.index{
  margin-top: 260px;
}
.hearder-top{
  position: fixed;
  top:0;
  left:0;
  right:0;
  height:100px;
  line-height: 100px;
  text-align: center;
  font-size: 80px;
  border-bottom:1px solid #eee;
  box-shadow: 0 2px 12px rgba(0,0,0,.1);
  background-color: #fff;
}
.hearder-top span{
  background-color: #fff;
  position: absolute;
  /*display: inline-block;*/
  left:50%;
  top:26px;
  /*top:100px;*/
  width:170px;
  height:170px;
  line-height: 170px;
  border-radius: 50%;
  border:1px solid #eee;
  transform:translate(-50%,-50%);
  color:rgba(66,185,131,.6);
  box-shadow: 0px 4px 4px rgba(66,185,131,.5);
  transform:rotate3d(0.2,0,0,35deg);
  /*text-shadow: 4px 4px 4px rgba(175, 47, 47, 0.15);*/

}
.main_wrap{
  margin-top: 85px;
  background: url(../../static/img/bg.png) no-repeat;
  width:100%;
  height:100%;
  
}
.main{
  padding-top: 50px;
  width:80%;
  margin:80px auto 0;
}
.time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>
