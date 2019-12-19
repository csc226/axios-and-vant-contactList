<template>
    <div id="contactList">
        <van-contact-list
            :list="list"
            @add="onAdd"
            @edit="onEdit"
        />
        <!-- 联系人编辑 -->
        <van-popup v-model="showEdit" position="bottom">
            <van-contact-edit
                :contact-info="editingContact"
                :is-edit="isEdit"
                @save="onSave"
                @delete="onDelete"
            />
        </van-popup>
    </div>
</template>

<script>
    import {ContactList, Toast,ContactEdit,Popup} from 'vant'
    export default({
        name:'contactList',
        data(){
            return{
                list:[],
                instance:null, //axios实例
                showEdit:false,
                editingContact:{},
                isEdit:false,
            }
        },
        components:{
            [ContactList.name] : ContactList,
            [ContactEdit.name] : ContactEdit,
            [Popup.name] : Popup
        },
        created(){
            this.instance = new this.axios.create({
                baseURL:'http://localhost:9000/api',
                timeOut:1000
            })
            this.getlist();
            
        },
        methods:{
            async getlist(){
                let res = await
                this.$Http.getContactList()
                console.log(res)
                this.list = res.data
                // this.instance.get("/contactlist").then(res=>{
                //     console.log(res)
                //     this.list = res.data.data
                // }).catch(err=>{
                //     console.log(err)
                //     Toast('请求失败，请重试')
                // })
            },
            //添加联系人
            onAdd(){
                this.showEdit = true;
                this.isEdit = false;
            },
            // 编辑联系人
            onEdit(info){
                this.showEdit = true;
                this.isEdit = true;
                this.editingContact = info
            },
            //保存联系人
            async onSave(info){
                if(this.isEdit){
                    //编辑保存
                    let res = await this.$Http.editContact(info)
                    if(res.code === 200){
                        Toast('编辑成功')
                    }
                     this.showEdit = false;
                     this.getlist();               
                    // this.instance.put('/contact/edit',info)
                    //     .then(res=>{
                    //         console.log(res)
                    //         if(res.data.code === 200){
                    //             Toast('编辑成功')
                    //         }
                    //         this.showEdit = false;
                    //         this.getlist();
                    //     }).catch(err=>{
                    //         Toast('编辑失败')
                    //         this.showEdit = false
                    //     })
                }else{
                    // 新建保存
                    let res = await this.$Http.newContactJson(
                        info
                    )
                    if(res.code===200){
                        Toast("新建成功")
                    }  
                    this.showEdit = false;
                    this.getlist();
                    // this.instance.post('/contact/new/json',info)
                    //     .then(res=>{
                    //         console.log(res)
                    //         if(res.data.code===200){
                    //             Toast("新建成功")
                    //         }  
                    //         this.showEdit = false;
                    //         this.getlist();
                    //     }).catch(err=>{
                    //         Toast('新建失败')
                    //         this.showEdit = false
                    //     })
                }
                
            },
            //删除联系人
            async onDelete(info){
                let res = await this.$Http.delContact({
                    id:info.id
                })
                if(res.code === 200){
                    Toast('删除成功')
                }
                this.showEdit = false
                this.getlist()
                // console.log(info)
                // this.instance.delete('/contact',{
                //     params:{
                //         id: info.id
                //     }
                // })
                // .then(res=>{
                //     console.log(res)
                //     if(res.data.code === 200){
                //         Toast('删除成功')
                //     }
                //     this.showEdit = false
                //     this.getlist()
                // }).catch(err=>{
                //     Toast('请求失败，请稍后再试')
                //     this.showEdit = false
                // })
            },
        }

    })
</script>

<style lang="stylus">
.van-popup
    height 100%
</style>