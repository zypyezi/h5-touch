import Vue from 'vue'

function NewTouch(el, binding , type){

    var _this = this
    this.swipeType = type
    this.startPositon = {x:0,y:0}
    this.callBack = binding.value   // 回调函数
    this.timer = null
    this.isMove = false //移动事件
    this.isLongTap = false

    el.addEventListener('touchstart',function (e) {
        _this.start(e)
    })

    el.addEventListener('touchend',function (e) {
        _this.end(e)
    })


    el.addEventListener('touchmove',function (e) {
        _this.move(e)
    })



}

NewTouch.prototype = {
    start( e ){
        var changedTouch = e.changedTouches[0]
        this.startPositon = {x:changedTouch.pageX,y:changedTouch.pageY}
        this.isLeave = false
        this.isMove = false
        this.isLongTap = false

        this.timer = setTimeout(function(){
            if(!this.isLeave && !this.isMove){
                this.swipeType == "longtap" && this.callBack(e);
                this.isLongTap=true;
            }
        }.bind(this),1000);

    },

    end( e ){
        var changedTouch = e.changedTouches[0]
        var distX = changedTouch.pageX - this.startPositon.x
        var distY = changedTouch.pageY - this.startPositon.y
        clearTimeout(this.timer)
        if(Math.abs(distX)>10||Math.abs(distY)>100){    // 滑动
            if( Math.abs(distX) > Math.abs(distY) ){   //判断是左右滑动还是上下滑动
                if( this.swipeType == 'swipe'){
                    this.callBack(e)
                    return
                }
                if( distX > 0 ){
                    this.swipeType == 'swiperight' && this.callBack(e)
                }
                if( distX < 0 ){
                        this.swipeType == 'swipeleft' && this.callBack(e)
                }
            }else{
                if( distY > 0 ){
                    this.swipeType == 'swipedown' && this.callBack(e)
                }
                if( distY < 0 ){
                    this.swipeType == 'swipeup' && this.callBack(e)
                }
            }
        }else{  //点击
            if( !this.isLongTap && !this.isMove){
                this.isLeave = true
                this.swipeType == 'tap' &&this.callBack(e)
            }
        }

    },

    move(){     //监听touchmove事件
        this.isMove=true;
    }
}



Vue.directive("tap", {//点击事件
    bind: function (el, binding) {
        new NewTouch(el, binding, "tap");
    }
})



Vue.directive('swipe',{
    bind(el, binding, vnode, oldVnode){
        console.log(el, binding, vnode, oldVnode)
        //注册事件
        new NewTouch(el, binding , 'swipe' )
    }
})

Vue.directive('swipeleft',{
    bind(el, binding, vnode, oldVnode){
        console.log(el, binding, vnode, oldVnode)
        //注册事件
        new NewTouch(el, binding , 'swipeleft' )
    }
})

Vue.directive('swiperight',{
    bind(el, binding, vnode, oldVnode){
        console.log(el, binding, vnode, oldVnode)
        //注册事件
        new NewTouch(el, binding , 'swiperight' )
    }
})

Vue.directive('swipeup',{
    bind(el, binding, vnode, oldVnode){
        console.log(el, binding, vnode, oldVnode)
        //注册事件
        new NewTouch(el, binding , 'swipeup' )
    }
})

Vue.directive('swipedown',{
    bind(el, binding, vnode, oldVnode){
        console.log(el, binding, vnode, oldVnode)
        //注册事件
        new NewTouch(el, binding , 'swipedown' )
    }
})

Vue.directive('longtap',{
    bind(el, binding){
        //注册事件
        new NewTouch(el, binding , 'longtap' )
    }
})