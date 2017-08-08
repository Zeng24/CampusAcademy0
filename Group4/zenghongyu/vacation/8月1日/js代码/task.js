window.onload=function(){/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
  var y = dat.getFullYear();
  var m = dat.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = dat.getDate();
  d = d < 10 ? '0' + d : d;
  return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
  var returnData = {};
  var dat = new Date("2016-01-01");
  var datStr = '';
  for (var i = 1; i < 92; i++) {
    datStr = getDateStr(dat);
    returnData[datStr] = Math.ceil(Math.random() * seed);
    dat.setDate(dat.getDate() + 1);
  }
  return returnData;
}

var aqiSourceData = {
  "北京": randomBuildData(500),
  "上海": randomBuildData(300),
  "广州": randomBuildData(200),
  "深圳": randomBuildData(100),
  "成都": randomBuildData(300),
  "西安": randomBuildData(500),
  "福州": randomBuildData(100),
  "厦门": randomBuildData(100),
  "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
  nowSelectCity:-1,
  nowGraTime: "day"
}

/**
 * 渲染图表
 */
function renderChart() {
  var i=0;
  var char=document.getElementById('aqi-chart-wrap');
  var max=0;
  char.innerHTML="";
  for(var value in chartData){
    i++;
    if(chartData[value]>max){
      max=chartData[value];
    }
  }//循环获得属性个数和属性中最大值
  char.style.width=800+'px';
  char.style.height=400+'px';
  char.style.position='relative';
  var itemWidth=Math.floor(800/i);//向下去整数
  i=0;
  for(var value in chartData){
    var div=document.createElement('div');
    div.setAttribute('title',"时间:"+value+"空气质量："+chartData[value]);
    //设置每个div的提示
    div.style.width=itemWidth+'px';
    div.style.height=Math.round((chartData[value]/max)*400)+'px';
    div.style.position='absolute';
    div.style.left=i*itemWidth+'px';
    div.style.bottom='0px';
    div.style.border='1px solid #fff';
    div.style.cursor='pointer';
    if((chartData[value]/max)>=0.8){
      div.style.background='black';
    }
    else if((chartData[value]/max)>=0.6){
      div.style.background='purple';
    }
    else if((chartData[value]/max)>=0.4){
      div.style.background='red';
    }
    else if((chartData[value]/max)>=0.2){
      div.style.background='blue';
    }
    else{
      div.style.background='green';
    }
    char.appendChild(div);
    i++;//这是记录循环多少次创建多少div
  }
}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
  // 确定是否选项发生了变化 
  var selet=document.getElementById('form-gra-time');
  var now=document.getElementsByTagName("input"),
      i=0;
  // 设置对应数据

  // 调用图表渲染函数
  for(;i<now.length;i++){
    if(now[i].checked){
      var nowValue=now[i].value;
    }
  }
  if(nowValue == pageState.nowGraTime){
    return false;
  }
  pageState.nowGraTime = nowValue;
  initAqiChartData();
  renderChart();
}

/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
  // 确定是否选项发生了变化 
  var selet=document.getElementById('city-select');
  if(selet.value == pageState.nowSelectCity){
    return false;
  }
  // 设置对应数据
    pageState.nowSelectCity = selet.value;
  // 调用图表渲染函数
  initAqiChartData();
  renderChart();
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
    var radio=document.getElementById('form-gra-time');
    radio.onclick=graTimeChange;//直接给器父级绑定事件

}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
  // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
  var i=0,
  options=document.getElementById('city-select');
  for(var value in aqiSourceData){
    var option=document.createElement('option'),
        text=document.createTextNode(value);
        option.setAttribute('value',value);
        option.appendChild(text);
        options.appendChild(option);
  }
  // 给select设置事件，当选项发生变化时调用函数citySelectChange
  var op=options.getElementsByTagName('options');
  var a=0;
  pageState.nowGraTime=0;
  options.onchange=function(){
    citySelectChange();
  }
}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
  // 将原始的源数据处理成图表需要的数据格式
  // 处理好的数据存到 chartData 中
  chartData={};
  if(pageState.nowGraTime == 'day'){
    for(var value in aqiSourceData){
      if(value==pageState.nowSelectCity){
        for(var index in aqiSourceData[value]){
        chartData[index] = aqiSourceData[value][index];
        }
      }
    }
    console.log(chartData);
  }
if(pageState.nowGraTime=='week'){
  for(var value in aqiSourceData){
    if(value==pageState.nowSelectCity){
      var now=0,
          sum=0,
          i=1,
          str="";

    for(var index in aqiSourceData[value]){
      now++;
      if(now<=7){
        sum+=aqiSourceData[value][index];
      }
      else{
        now=0;
        sum=aqiSourceData[value][index];
      }
      if(now==7){
        str="第"+i+"周";
        i++;
        chartData[str]=Math.floor(sum/now);
      }
    }
    str="第"+(i)+"周";
    chartData[str]=Math.floor(sum/now);
    }
  }
}

if(pageState.nowGraTime=="month"){
  for(var value in aqiSourceData){
    var sum=0;
    for(var index in aqiSourceData[value]){
      var months=index.split("-");
      if(months[1]==1){
        sum+=aqiSourceData[value][index];
        if(months[2]=31){
          chartData["第一月"]=Math.floor(sum/31);
          sum=0;
        }
      }
      if(months[1]==2){
        sum+=aqiSourceData[value][index];
        if(months[2]==29){
          chartData["第二月"]=Math.floor(sum/29);
          sum=0;
        }
      }
      if(months[1]==3){
        sum+=aqiSourceData[value][index];
        if(months[2]==31){
          chartData["第三月"]=Math.floor(sum/31);
          sum=0;
        }
      }
    }
  }
}
}


/**
 * 初始化函数
 */
function init() {
  initGraTimeForm()
  initCitySelector();
  initAqiChartData();
}

init();

/* 数据格式演示
var aqiSourceData = {
  "北京": {
    "2016-01-01": 10,
    "2016-01-02": 10,
    "2016-01-03": 10,
    "2016-01-04": 10
  }
};
*/};