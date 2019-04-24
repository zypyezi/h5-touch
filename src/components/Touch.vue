<template>

    <div>

        <div
                id="touch"
                v-swipeleft="swipeleft"
                v-swiperight="swiperight"
                v-swipeup="swipeup"
                v-swipedown="swipedown"
                v-tap="tap"
                v-longtap="longtap"
        >
                滑动区域
        </div>


        <div>
            当前操作 ： {{type}}
        </div>



    </div>


</template>

<script>

    import  '../directive/Touch.js'

    export default {
        name: 'touch',
        data() {
            return {
                type : ''
            }
        },
        computed: {},
        created() {

        },

        methods:{

            changeshow(){
                this.show = !this.show
            },

            swipeleft(e){
                console.log(e,'swipeleft')
                this.type = 'swipeleft'
            },

            swiperight(e){
                console.log(e,'swiperight')
                this.type = 'swiperight'
            },

            swipeup(e){
                console.log(e,'swipeup')
                this.type = 'swipeup'
            },

            swipedown(e){
                console.log(e,'swipedown')
                this.type = 'swipedown'
            },
            tap(e){
                console.log(e,'tap')
                this.type = 'tap'
            },

            longtap(e){
                console.log(e,'longtap')
                this.type = 'longtap'
            }

        }

    }
</script>

<style lang="scss" scoped>
    #touch{
        width: 100%;
        height: 200px;
        background-color: #999;
    }

    .baseClass{
        width: 200px;
        height: 100px;
        background-color: aquamarine;
        /*-webkit-transition: width 3s;*/
        /*-moz-transition: width 3s;*/
        /*-ms-transition: width 3s;*/
        /*-o-transition: width 3s;*/
        transition: width 3s;
        &.width-0{
            width: 0;
        }
    }


    .btn{
        width: 30px;
        height: 20px;
        border: 1px solid #999;
        border-radius: 5px;
        position: absolute;
        top: 100px;
        left: 100px;
        background-color: #fff;
    }




</style>