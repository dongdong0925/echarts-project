var t = null
t = setTimeout(time, 1000)//开始运行
function time(){
    clearTimeout(t);//清楚定时器
    dt = new Date();
    var y = dt.getFullYear();
    var mt = dt.getMonth() + 1;
    var day = dt.getDate();
    var h = dt.getHours();
    var m = dt.getMinutes();
    var s = dt.getSeconds();
    document.querySelector(".showTime").innerHTML=
    '当前时间：' + y + '年' + mt +'月' + day + '日' + '-' + h + '时' + m + '分' + s + '秒';
t = setTimeout(time,1000);//设定时器，循环运行            
}

//柱形图模块1
(function (){
      // 实例化对象
  let myChart = echarts.init(document.querySelector(".bar .charts"));
    // 指定配置和数据
    let option = {
        color: ["#2f89cf"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "0%",
          right: "0%",
          top:"10px",
          bottom: "4%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            // x轴中更换data数据
            data: [
                "旅游行业",
                "教育培训", 
                "游戏行业", 
                "医疗行业", 
                "电商行业", 
                "社交行业", 
                "金融行业" 
            ],
            axisTick: {
              alignWithLabel: true,
              show: false
            },
            //修改刻度标签
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                  }
                 },
            //不显示x坐标轴的样式
            axisLine: {
                show: false 
            }
          }
        ],
        yAxis: [
          {
            //y轴文字标签样式
            type: "value",
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                  }
             }, 
              //y轴线条样式
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)",
                    with: 1
                }
            },
             // y 轴分隔线样式
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
          }
        ],
        series: [
            {
              name: "直接访问",
              type: "bar",
              // 修改柱子宽度
              barWidth: "35%",
              data: [200, 300, 300, 900, 1500, 1200, 600],
              itemStyle: {
                // 修改柱子圆角
                barBorderRadius: 3
              }
            }
          ]
      };
      // 把配置给实例对象
  myChart.setOption(option); 
  //让图标随屏幕自动变化
  window.addEventListener("resize", function() {
    myChart.resize();
  });   
})();

//柱状图2
(function (){
    //实列化对象
    var myChart = echarts.init(document.querySelector('.bar2 .charts'));
    // 声明颜色数组
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    //指定配置和数据
    var option = {
      grid: {
        top: '10%',
        left: '2%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: {
        //不显示x轴相关信息
        show: false
      },
      yAxis: [
      {
        type: 'category',
        data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
        inverse: true,
        //不显示y轴线条
        axisLine: {
        show: false
        },
        // 不显示刻度
        axisTick: {
        show: false
        },
        axisLabel: {
          color: "#fff"
        },
      },
      {
        show: true,
        data:[702, 350, 610, 793, 664],
        inverse: true,
           // 不显示y轴的线
      axisLine: {
        show: false
      },
      // 不显示刻度
      axisTick: {
        show: false
      },
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        }
      }
    ],
      series: [
        {
          name: '条',
          type: 'bar',
          // 给series  第一个对象里面的 添加 
         yAxisIndex: 0,
          // 柱子之间的距离
          barCategoryGap: 50,
          //柱子的宽度
          barWidth: 10,
          // 柱子设为圆角
          itemStyle: {
              normal: {
                barBorderRadius: 20,
                color: function(params) {
                // params 传进来的是柱子对象
                // dataIndex 是当前柱子的索引号
                return myColor[params.dataIndex];     
                } 
              }
          },
          // 图形上的文本标签
          label: {
            normal: {
                show: true,
                // 图形内显示
                position: "inside",
                // 文字的显示格式
                formatter: "{c}%"
            }
          },
          data: [70, 34, 60, 78, 69],
        },
        {
          name: '框',
          type: 'bar',
          // 给series  第二个对象里面的 添加 
          yAxisIndex: 1,
          data: [100, 100, 100, 100, 100],
          barCategoryGap: 50,
          barWidth: 15,
          itemStyle: {
              color: "none",
              borderColor: "#00c1de",
              borderWidth: 3,
              barBorderRadius: 15
          },
        }
      ]
    };
    //把配置给实例化对象
    myChart.setOption(option);
    window.addEventListener("resize", function() {
      myChart.resize();
    });
})();
//折线图1
(function(){
  var myChart = echarts.init(document.querySelector('.line1 .charts'));
  var yearData = [
    {
      year: '2021',  // 年份
      data: [  // 两个数组是因为有两条线
           [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
           [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ]
    },
    {
      year: '2022',  // 年份
      data: [  // 两个数组是因为有两条线
            [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
            [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
              ]
    }
   ];
  var option = {
    color: ['#00f2f1', '#ed3f35'],//给线分别添加颜色
    legend: {
      data: ['新增粉丝', '新增游客'],
      textStyle: {
        color: '#4c9bfd' // 图例文字颜色
      },
      right: '10%' // 距离右边10%
    },
    tooltip: {
      trigger: 'axis'
    },
    
    grid: {
      top:'20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true, // 显示边框
      borderColor: '#012f4a',// 边框颜色
      containLabel: true  //包含刻度文字在内
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisTick: {
        show: false // 去除刻度线
      },
      axisLine: {
        show: false // 去除轴线
      },
      axisLabel: {
        color: '#4c9bfd' // 文本颜色
      },
      boundaryGap: false , // 去除轴内间距
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false  // 去除刻度
      },
      axisLabel: {
        color: '#4c9bfd' // 文字颜色
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a' // 分割线颜色
        }
      }
    },
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        data:yearData[0].data[0],
        smooth: true //线带有幅度
      },
      {
        name: '新增游客',
        type: 'line',
        data: yearData[0].data[1],
        smooth: true
      },
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
  //切换效果
  $(".line1 h2").on("click","a",function(){
    var obj = yearData[$(this).index()];
    option.series[0].data = obj.data[0];
    option.series[1].data = obj.data[1];
    //需要重新渲染
    myChart.setOption(option);
  });
})();
//折现图2
(function(){
  var myChart = echarts.init(document.querySelector('.line2 .charts'));
  var option = {
    tooltip: {
      trigger: 'axis',
      },
   legend: {
      data: ['播放量', '转发量'],
      top: "0%",
      //更换图例组件文字颜色 rgba(255,255,255,.5) 文字大小为12
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: '10%',
      top: '30%',
      right: '10%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
        // 文本颜色为rgba(255,255,255,.6)  文字大小为 12
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        // x轴线的颜色为   rgba(255,255,255,.2)
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
	   // 修改分割线的颜色
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      
      }
    ],
    series: [
      {
        name: '播放量',
        type: 'line',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [ 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 30,60,20, 40, 30, 40, 30, 40,30, 40, 20,60,50, 40],
        smooth: true,
        lineStyle: {
          //// 单独修改线的样式
          color: "#0184d5",
          width: 2 
      },
      // 填充区域
       areaStyle: {
                // 渐变色，
              color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                  },
                  {
                    offset: 0.8,
                    color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
                  }
                ],
                false
              ),
              shadowColor: "rgba(0, 0, 0, 0.1)"
          },
          // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 8,
        // 设置拐点颜色以及边框
       itemStyle: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
        },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
      },
      {
        name: '转发量',
        type: 'line',
        emphasis: {
          focus: 'series'
        },
        data: [ 130, 10, 20, 40,30, 40, 80,60,20, 40, 90, 40,20, 140,30, 40, 130,20,20, 40, 80, 70, 30, 40,30, 120, 20,99,50, 20],
        smooth: true,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
         },
         areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 设置拐点 小圆点
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 设置拐点颜色以及边框
         itemStyle: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
        },
        // 开始不显示拐点， 鼠标经过显示
        showSymbol: false,
        
      },
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
//饼形图1
(function(){
  var myChart = echarts.init(document.querySelector('.pie1 .charts'));
  var option = {
    color: [
      "#065aab",
      "#066eab",
      "#0682ab",
      "#0696ab",
      "#06a0ab",
    ],
    tooltip: {
      trigger: 'item',
      
    },
    legend: {
      // 距离底部为0%
      bottom: "0%",
      // 小图标的宽度和高度
      itemWidth: 10,
      itemHeight: 10,
      data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
 },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        center: ["50%%", "40%"],
        //  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
        radius: ["40%", "60%"],
             // 设置饼形图在容器中的位置
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: false
        },
        data: [
                 { value: 1, name: "0岁以下" },
                 { value: 4, name: "20-29岁" },
                 { value: 2, name: "30-39岁" },
                 { value: 2, name: "40-49岁" },
                 { value: 1, name: "50岁以上" },
        ] ,
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
//饼形图2
(function(){
  var myChart = echarts.init(document.querySelector('.pie2 .charts'));
  var option = {
    //颜色设置
    color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
    legend: {
      top: ''
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: false, readOnly: false },
        restore: { show: false }
      }
    },
    series: [
      {
        name: '面积模式',
        type: 'pie',
        //修改图形大小
        radius: ['15', '60'],
        center: ['50%', '50%'],
        //把显示模式改为半径模式
        roseType: 'area',
        label: {
          fontSize: 8
        },
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' }
        ]
      }
    ]
  };
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();
//map图模块
(function(){
  var myChart = echarts.init(document.querySelector('.map .charts'));
  const data = genData(8);
  var option = {
    color: [
      "#065aab",
      "#066eab",
      "#0682ab",
      "#0696ab",
      "#06a0ab",
    ],
    legend: {
      type: 'scroll',
      orient: 'horizontal',
      right: 0,
      bottom: 20,
      data: data.legendData
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [
      {
        name: '人数',
        type: 'pie',
        radius: '40%',
        center: ["50%", "55%"],
        data: [
          "云南" ,
          "北京" ,
          "山东" ,
          "河北" ,
          "江苏" ,
          "浙江" ,
          "深圳" ,
          "广东" 
        ],
        data: data.seriesData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  function genData(count) {
    // prettier-ignore
    const nameList = [
       "云南" ,
       "北京" ,
        "山东" ,
        "河北" ,
        "江苏" ,
        "浙江" ,
        "深圳" ,
        "广东" ,
      ];
    const legendData = [];
    const seriesData = [];
    for (var i = 0; i < count; i++) {
      var name =
        Math.random() > 0.65
          ? makeWord(4, 1) + '·' + makeWord(3, 0)
          : makeWord(2, 1);
      legendData.push(name);
      seriesData.push({
        name: name,
        value: Math.round(Math.random() * 100000)
      });
    }
    return {
      legendData: legendData,
      seriesData: seriesData
    };
    function makeWord(max, min) {
      const nameLen = Math.ceil(Math.random() * max + min);
      const name = [];
      for (var i = 0; i < nameLen; i++) {
        name.push(nameList[Math.round(Math.random() * nameList.length - 1)]);
      }
      return name.join('');
    }
  }
  myChart.setOption(option);
  window.addEventListener("resize", function() {
    myChart.resize();
  });

})();

