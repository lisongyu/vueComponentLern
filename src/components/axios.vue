<template>

  <div>
    <h2>我是获取的数据</h2>
    <p>{{name}}</p>
    <p>{{nameparam}}</p>
    <p>{{imgName}}</p>

  </div>

</template>

<script>
    export default  {
        data(){
            return {
                name:'我是默认名称',
                nameparam:'我是有参数的',
                imgName:''
            }

        },
        created(){
            this.getData()
        },

        methods: {
            getData(){
                var url='https://www.easy-mock.com/mock/5bf2739aa733fb71407cf635/example/query';
                //不带参数
              this.$axios.get(url)
                .then(rsp => {
                    console.log(rsp);
                    this.name=rsp.data.data.name
                })
                .catch(error => {console.log(error)})


              this.$axios.get(url,{params:{'name':'我设置了参数'}}

               )
                .then(rsp => {
                  console.log(rsp);
                  this.nameparam=rsp.data.data.name
                })
                .catch(error => {console.log(error)})




              var url2='https://www.easy-mock.com/mock/5bf2739aa733fb71407cf635/example/upload';

              this.$axios.post(url2)
                .then(rsp => {
                  console.log(rsp);
                  this.imgName=rsp.data.data.img;
                })
                .catch(error => {console.log(error)})

            }
        }
    }
</script>

<style lang="scss">

</style>
