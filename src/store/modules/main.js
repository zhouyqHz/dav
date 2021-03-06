/**
 *Created by Zhangyuanyuan ON 2019/3/11 16:37
 */
export default function(){
  return {
    state:{
        //车辆状态（0:全部，1：停止，2：0~<5km/h, 3: >=5km/h）
        state:"0",
        //车组
        fleet:"0",
        //车辆类型
        model:"0",
        //危险类型
        danger:"0",
        //驶入驶出（0:全部，1: 围栏驶入，2：围栏驶出）
        inout:"0",
        //速度筛选
        speed:"0",
        //激活的车辆id
        activeCarId:null,
        showGroupFlag:true,
        showVehicleList:true,
        showStatistic:true,
        carInfo:{},
        sliderTimeArr:[],
        timeStamp:null,
        sliderTimeStamp:null,
        playSlider:false
    },
    mutations:{
        //重置所有状态
        resetAllStatus(state){
            state.state="0";
            state.fleet="0";
            state.model="0";
            state.danger="0";
            state.inout="0";
            state.speed="0";
            state.activeCarId=null;
            state.showGroupFlag=true;
            state.showVehicleList=true;
            state.showStatistic=true;
            state.carInfo={};
            state.sliderTimeArr=[];
            state.timeStamp=null;
            state.sliderTimeStamp=null;
            state.playSlider=false;
            sessionStorage.removeItem("selectOp");
        },
        //重置列表筛选条件
        resetFilter(state){
            // console.log('触发');
            state.state="0";
            state.fleet="0";
            state.model="0";
            state.danger="0";
            state.inout="0";
            state.speed="0";
            sessionStorage.removeItem("selectOp");
        },
        //更新激活的车辆id
        updateCarId(state,id){
            state.activeCarId=id;
        },
        //拖动slider
        changeSlider(state,t){
            state.sliderTimeStamp=t;
        },
        //更新播放状态
        updateSliderStatus(state,flag){
            state.playSlider=flag;
        },
        // 更新时间戳
        updateTimeStamp(state,t){
            state.timeStamp=t;
        },
        //更新播放条时间轴
        updateSliderTime(state,arr){
            state.sliderTimeArr=arr;
        },
        //更新车辆状态
        updateState(state,num){
            state.state=num;
        },
        //更新车组状态
        updateFleet(state,num){
            state.fleet=num;
        },
        //更新车辆类型
        updateModel(state,num){
            state.model=num;
        },
        //更新危险类型
        updateDanger(state,num){
            state.danger=num;
        },
        //更新驶入驶出类型
        updateInout(state,num){
            state.inout=num;
        },
        //更新速度筛选
        updateSpeed(state,num){
            state.speed=num;
        },
        //更新车辆信息
        updateCarInfo(state,info){
            state.carInfo=info
        },
        ctrlVehicleList(state,flag){
            state.showVehicleList=flag;
        },
        ctrlStatistic(state,flag){
            state.showStatistic=flag;
        }
        // ctrlTripInfo(state,flag){
        //   state.showTripInfo=flag;
        // }
    }
  }
}
