<script>
	export default {
		data(){
			return {
				activeIndex: '2',
			}
		},
		methods:{
			handleSelect(key, keyPath) {
		    	console.log(key, keyPath);
		    }
		}
	}
</script>
<template>
	<div class="qqIndex">
		<header>
			<div class="header_inner">
				<div class="hearder-top fl">
					<img src="../../assets/qqMusic/logo.png" class="logo fl">
					<el-menu :default-active="activeIndex" class="el-menu-demo fl" mode="horizontal" @select="handleSelect">
						
						<el-menu-item index="2">音乐馆</el-menu-item>
						<el-menu-item index="3">我的音乐</el-menu-item>
						<el-menu-item index="4">客户端</el-menu-item>
						<el-menu-item index="5">音乐号</el-menu-item>
						<el-menu-item index="6">VIP</el-menu-item>

					</el-menu>
					<el-input class="search_input fl" placeholder="搜索音乐、MV、歌单、用户"><el-button slot="append" icon="el-icon-search"></el-button></el-input>
					<span class="login fl">登录</span>
					<el-button type="success" class="fl">开通绿钻豪华版</el-button>
					<el-button class="fl">开通付费包</el-button>
				</div>
				<div></div>
			</div>
		</header>
		
	</div>
</template>
<style scoped>
.fl{
	float: left;
}
.clearfix:after{
	clear:both;
	height:0;
	display: block;
	content:'';
}
	.login{
		padding:0 10px;
	}
	.el-button--success{
		background: #31c27c;
		border-color: #31c27c;
	}
	.header_inner{
		max-width:1200px;
		margin:0 auto;
	}
	.hearder-top{
		/*display: flex;*/
		align-items: center;
		border-bottom:solid 1px #e6e6e6;
	}
	.hearder-top .el-menu--horizontal{
		border-bottom: none;
	}
	.logo{
		/*background:url(../../assets/qqMusic/logo.png) no-repeat;*/
		width:170px;
		height:46px;
		/*background-position: center;*/
		margin-right: 20px;
		/*background-color:#fff !important; */
	}
	.search_input{
		width:220px;
	}
	.el-menu-demo{
		flex:1;
	}
	.el-menu--horizontal>.el-menu-item{
		height:90px;
		line-height: 90px;
		font-size:18px;
	}
	.el-menu--horizontal>.el-menu-item.is-active{
		border-bottom:none;
		background-color: #31c27c;
		color:#fff;
	}
</style>