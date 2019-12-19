<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },

  created(){
    // get post put patch delete 
    //get 获取数据
    //post 表单提交，文件上传
    //put更新数据，将所有数据提交到服务端
    //patch更新数据，只推送更新的数据
    // delete删除数据
    // this.axios.get("./data.json",{
    //   params:{
    //     // id:12
    //   }
    // }).then((res)=>{
    //   console.log(res)
    // })

    this.axios({
      method:'get',
      url:'./data.json',
      params:{
        id:12,
        cs:"mde",
        two:"toew"
      }
    }).then((res)=>{
      console.log(res)
    })
    //post  form-data：文件上传，图片上传 
    //applicition/json
    // let data = {
    //   id:5
    // }
    // this.axios.post("/post",data).then((res)=>{
    //   console.log(res)
    // })


    // this.axios({
    //     method:'post',
    //     url:'/post',
    //     data:data
    // }).then((res)=>{
    //   console.log(res)
    // })
    //  //form-data
    // let formData= new FormData();
    // for(let key in data){
    //   formData.append(key,data[key])
    // }
    // this.axios.post("/post",formData).then((res)=>{
    //   console.log(res)
    // })
    // //put
    // this.axios.put('/put',data).then(res=>{
    //   console.log(res)
    // })
    // //patch
    // this.axios.patch('/patch',data).then(res=>{
    //   console.log(res)
    // })
    // //delete
    // this.axios.delete('/delete',{
    //   params:{
    //     id:12
    //   }
    // }).then(res=>{
    //   console.log(res)
    // })
    // this.axios.delete('/delete',{
    //   data:{
    //     id:12
    //   }
    // }).then(res=>{
    //   console.log(res)
    // })
    //并发请求，同时处理多个接口并统一返回数据
    //axios.all()  axios.spread()
    // this.axios.all(
    //   [
    //     this.axios.get('./data.json'),
    //     this.axios.get('./city.json')
    //   ]
    // ).then(
    //   this.axios.spread((dataRes,cityRes)=>{
    //     console.log('dataRes',dataRes,'cityRes',cityRes)
    //   })
    // )
    // 结束
  }
}
</script>
