"use strict";

const MOODS = {
  relax:    {label:"放松",  icon:"armchair",    sub:"躺平充电，什么都不想"},
  heal:     {label:"疗愈",  icon:"sprout",      sub:"离开内耗，把自己找回来"},
  romance:  {label:"浪漫",  icon:"heart",       sub:"二人世界，纪念日和心动"},
  adventure:{label:"冒险",  icon:"mountain",    sub:"上山下海，来点刺激的"},
  food:     {label:"美食",  icon:"utensils",    sub:"为了一口吃的出发"},
  culture:  {label:"文化",  icon:"landmark",    sub:"历史古城，看馆看窟"},
  family:   {label:"亲子",  icon:"baby",        sub:"遛娃友好，全家都开心"},
  photo:    {label:"拍照",  icon:"camera",      sub:"出片圣地，张张是大片"},
  shopping: {label:"购物",  icon:"shopping-bag",sub:"逛吃逛买，扫货回血"}
};
const MOOD_COLOR = {
  relax:"#2C8A5E", heal:"#0E7C6B", romance:"#C2417A", adventure:"#C96A1F",
  food:"#BE3A2B", culture:"#9A6B12", family:"#2E6DB4", photo:"#6D4FC4", shopping:"#B0358F"
};
const MOOD_QUOTES = {
  relax:["允许自己慢下来，风景才有机会走近你。","不赶路，也是一种抵达。"],
  heal:["风会把紧绷的心事吹软一点。","去有山有水的地方，把自己找回来。"],
  romance:["和喜欢的人一起，把日常走成纪念日。","日落会记得你们并排站着的时刻。"],
  adventure:["心跳快一点，世界就新鲜一点。","去野一点的地方，做勇敢一点的自己。"],
  food:["先喂饱胃，再安顿心。","一碗热气，就是陌生城市最诚实的欢迎。"],
  culture:["在旧时光里走一趟，会更懂现在。","看过千百年的辽阔，眼前的难就变小了。"],
  family:["陪伴是最好的行程，风景只是背景。","孩子记住的不是景点，是和你一起的瞬间。"],
  photo:["把光留住，也把此刻的自己留住。","不必追赶风景，站好等风来。"],
  shopping:["为喜欢的东西走远路，值得。","带回的不只是行李，还有新的心情。"]
};
const TRAVEL_BLESSINGS = [
  "愿你出发时轻装，归来时眼里有光。",
  "把普通的日子，过成后来会想起的样子。",
  "世界很大，先去见一小部分。",
  "路会回答犹豫，风会整理心事。"
];
const NEARBY = {
  "哈尔滨":["雪乡","亚布力","长春"],
  "漠河":["北极村","呼玛","黑河"],
  "长白山":["延吉","敦化","图们"],
  "北京":["天津","承德","秦皇岛"],
  "西安":["华山","天水","宝鸡"],
  "杭州":["绍兴","乌镇","千岛湖"],
  "苏州":["上海","无锡","周庄"],
  "上海":["苏州","杭州","崇明"],
  "黄山":["宏村","屯溪","千岛湖"],
  "洛阳":["郑州","开封","登封"],
  "成都":["乐山","峨眉山","都江堰"],
  "重庆":["武隆","大足","成都"],
  "长沙":["岳阳","株洲","湘潭"],
  "潮汕":["潮州","汕头","南澳岛"],
  "泉州":["厦门","漳州","崇武"],
  "厦门":["泉州","漳州","南靖土楼"],
  "桂林阳朔":["柳州","北海","龙脊梯田"],
  "三亚":["海口","陵水","万宁"],
  "西双版纳":["普洱","昆明","玉溪"],
  "大理":["丽江","沙溪","昆明"],
  "丽江 · 香格里拉":["泸沽湖","稻城","梅里雪山"],
  "稻城亚丁":["康定","新都桥","丹巴"],
  "敦煌":["嘉峪关","张掖","酒泉"],
  "青海湖 · 大西北环线":["兰州","张掖","敦煌"],
  "新疆伊犁":["伊宁","特克斯","昭苏"],
  "阿勒泰":["布尔津","禾木","克拉玛依"],
  "拉萨 · 西藏":["林芝","日喀则","山南"],
  "青岛":["烟台","威海","崂山"],
  "京都 · 大阪":["奈良","神户","名古屋"],
  "东京":["镰仓","箱根","日光"],
  "冲绳":["那霸","宫古岛","石垣岛"],
  "清迈":["拜县","清莱","曼谷"],
  "曼谷 · 芭提雅":["大城","华欣","象岛"],
  "新加坡":["新山","巴淡岛","马六甲"],
  "巴厘岛":["乌布","日惹","泗水"],
  "马尔代夫":["马累","科伦坡","迪拜"],
  "迪拜":["阿布扎比","沙迦","多哈"],
  "卡帕多奇亚 · 土耳其":["伊斯坦布尔","安塔利亚","棉花堡"],
  "圣托里尼 · 希腊":["雅典","米克诺斯","克里特"],
  "瑞士":["因特拉肯","采尔马特","米兰"],
  "冰岛":["雷克雅未克","阿克雷里","法罗群岛"],
  "摩洛哥":["卡萨布兰卡","马拉喀什","舍夫沙万"],
  "埃及":["开罗","卢克索","沙姆沙伊赫"],
  "新西兰":["皇后镇","基督城","罗托鲁瓦"]
};
const ORIGIN_POINTS = {
  "北京":[116.407,39.904],"上海":[121.474,31.230],"广州":[113.264,23.129],
  "深圳":[114.058,22.543],"杭州":[120.155,30.274],"成都":[104.066,30.572],
  "重庆":[106.550,29.563],"西安":[108.940,34.341],"武汉":[114.306,30.593],
  "南京":[118.797,32.060],"天津":[117.201,39.084],"苏州":[120.585,31.299],
  "长沙":[112.939,28.228],"郑州":[113.625,34.747],"青岛":[120.383,36.067],
  "沈阳":[123.431,41.806],"大连":[121.614,38.904],"哈尔滨":[126.642,45.757],
  "长春":[125.325,43.897],"昆明":[102.833,24.880],"乌鲁木齐":[87.617,43.793],
  "兰州":[103.834,36.061],"拉萨":[91.112,29.660],"海口":[110.199,20.044],
  "厦门":[118.089,24.479],"福州":[119.297,26.074],"南昌":[115.858,28.683],
  "合肥":[117.283,31.861],"贵阳":[106.630,26.647],"南宁":[108.366,22.817],
  "呼和浩特":[111.752,40.842],"银川":[106.231,38.487],"西宁":[101.778,36.623],
  "济南":[117.120,36.652],"石家庄":[114.515,38.042],"太原":[112.549,37.870],
  "香港":[114.169,22.319],"澳门":[113.549,22.199],"台北":[121.565,25.033],
  "广东":[113.424,23.354],"江苏":[119.500,33.000],"浙江":[120.100,29.100],
  "四川":[102.900,30.600],"湖北":[112.300,30.900],"湖南":[111.700,27.600],
  "河南":[113.500,33.800],"山东":[117.800,36.400],"辽宁":[123.400,41.600],
  "吉林":[126.200,43.700],"黑龙江":[127.900,47.300],"云南":[101.500,25.000],
  "新疆":[85.300,41.500],"甘肃":[100.000,38.200],"西藏":[88.400,31.100],
  "海南":[109.800,19.200],"福建":[118.300,26.100],"江西":[115.900,27.600],
  "安徽":[117.200,31.800],"贵州":[106.700,26.800],"广西":[108.800,23.700],
  "内蒙古":[112.500,43.500],"宁夏":[106.200,37.300],"青海":[96.600,35.800],
  "河北":[115.400,38.600],"山西":[112.300,37.600],"陕西":[108.900,34.300]
};
const DEST_POINTS = {
  "哈尔滨":[126.642,45.757],"漠河":[122.538,52.972],"长白山":[128.094,42.004],
  "北京":[116.407,39.904],"西安":[108.940,34.341],"杭州":[120.155,30.274],
  "苏州":[120.585,31.299],"上海":[121.474,31.230],"黄山":[118.337,29.715],
  "洛阳":[112.454,34.619],"成都":[104.066,30.572],"重庆":[106.550,29.563],
  "长沙":[112.939,28.228],"潮汕":[116.630,23.660],"泉州":[118.590,24.910],
  "厦门":[118.089,24.479],"桂林阳朔":[110.490,24.770],"三亚":[109.520,18.250],
  "西双版纳":[100.790,22.010],"大理":[100.270,25.610],"丽江 · 香格里拉":[99.500,27.300],
  "稻城亚丁":[100.300,29.040],"敦煌":[94.660,40.140],"青海湖 · 大西北环线":[100.490,36.890],
  "新疆伊犁":[81.280,43.910],"阿勒泰":[88.140,47.850],"拉萨 · 西藏":[91.112,29.660],
  "青岛":[120.383,36.067],"京都 · 大阪":[135.760,34.850],"东京":[139.690,35.690],
  "冲绳":[127.680,26.210],"清迈":[98.980,18.790],"曼谷 · 芭提雅":[100.750,13.700],
  "新加坡":[103.820,1.350],"巴厘岛":[115.190,-8.410],"马尔代夫":[73.510,4.170],
  "迪拜":[55.270,25.200],"卡帕多奇亚 · 土耳其":[34.830,38.640],
  "圣托里尼 · 希腊":[25.420,36.390],"瑞士":[8.540,46.680],
  "冰岛":[-21.940,64.150],"摩洛哥":[-7.600,31.800],"埃及":[31.240,30.040],
  "新西兰":[168.350,-44.900]
};
// n=名称 r=地区 a=国内/出境 m=最佳月份 p=峰值月 md=心情(首位为主心情) d=建议天数 x=一句话 s=季节理由 c=节奏理由
const DESTS = [
  {n:"哈尔滨",r:"黑龙江 · 国内",a:"国内",m:[12,1,2],p:[1],md:["photo","family","adventure"],d:[3,4],x:"冰雪大世界、中央大街，零下二十度的浪漫。",s:"冰雪大世界开放，整座城市就是冰与灯的童话。",c:"市区景点集中，3-4天可顺路加上雪乡或亚布力。"},
  {n:"漠河",r:"黑龙江 · 国内",a:"国内",m:[12,1,2],p:[12],md:["adventure","photo"],d:[3,4],x:"找北之旅：白桦林、驯鹿与泼水成冰。",s:"极寒限定体验，运气好还能遇见极光。",c:"火车或飞机中转加包县游玩，3-4天刚好。"},
  {n:"长白山",r:"吉林 · 国内",a:"国内",m:[7,8,9,12,1,2],p:[8,1],md:["adventure","heal","family"],d:[3,4],x:"天池、温泉与林海雪原，一年两副面孔。",s:"夏季避暑看天池，冬季滑雪泡温泉。",c:"北坡加西坡两天，加上延吉美食三天更舒服。"},
  {n:"北京",r:"国内",a:"国内",m:[3,4,5,9,10,11],p:[10,11],md:["culture","food","photo"],d:[3,4],x:"故宫红墙、胡同鸽哨与秋日香山。",s:"秋天银杏红叶铺满城，春天柳绿花明。",c:"中轴线两天，加长城和颐和园三天起步。"},
  {n:"西安",r:"陕西 · 国内",a:"国内",m:[3,4,5,9,10,11],p:[4,10],md:["culture","food"],d:[3,4],x:"兵马俑与城墙之下，碳水之都日夜飘香。",s:"春秋温度舒适，适合暴走刷馆。",c:"市区两天加兵马俑一天，三天是标准答案。"},
  {n:"杭州",r:"浙江 · 国内",a:"国内",m:[3,4,5,9,10,11],p:[3,4],md:["relax","romance","photo"],d:[2,3],x:"西湖春晓、龙井茶园，江南的温柔本身。",s:"春有苏堤春晓，秋有满陇桂雨。",c:"环湖加灵隐两三天，节奏可以很慢。"},
  {n:"苏州",r:"江苏 · 国内",a:"国内",m:[3,4,5,9,10,11],p:[4],md:["relax","culture","photo"],d:[2,3],x:"园林、评弹与一碗头汤面，精致到骨子里。",s:"春日园林花影，秋日银杏配粉墙。",c:"拙政园加山塘街再加太湖，两三天不赶。"},
  {n:"上海",r:"国内",a:"国内",m:[3,4,5,9,10,11],p:[4,10],md:["shopping","food","family"],d:[2,3],x:"外滩天际线、梧桐区与乐园，永远有新展。",s:"春秋最舒服，是 citywalk 黄金季。",c:"两天逛街看展，三天可以加上迪士尼。"},
  {n:"黄山",r:"安徽 · 国内",a:"国内",m:[4,5,6,9,10,11],p:[5,10],md:["adventure","photo","heal"],d:[2,3],x:"云海、奇松与日出，去水墨画里爬一次山。",s:"春秋云海概率高，冬雪是限定奇景。",c:"山上住一晚等日出，两天紧凑三天从容。"},
  {n:"洛阳",r:"河南 · 国内",a:"国内",m:[4,9,10,11],p:[4],md:["culture","photo"],d:[2,3],x:"四月牡丹倾城，龙门石窟与洛邑古城。",s:"牡丹花期在四月，秋日龙门天高云淡。",c:"龙门、白马寺加市区，两三天足够。"},
  {n:"成都",r:"四川 · 国内",a:"国内",m:[3,4,5,6,9,10,11],p:[4,10],md:["food","relax","family"],d:[3,4],x:"熊猫、盖碗茶与火锅，把日子过成慢板。",s:"春秋温润，坐露天茶社不冷不热。",c:"市区两天加熊猫基地，三天可顺路乐山。"},
  {n:"重庆",r:"国内",a:"国内",m:[3,4,10,11,12],p:[11],md:["food","photo","adventure"],d:[3,4],x:"8D 魔幻山城：轻轨穿楼、长江索道与九宫格。",s:"秋冬雾少景清，避开了火炉模式。",c:"核心打卡两天，三到四天可加武隆。"},
  {n:"长沙",r:"湖南 · 国内",a:"国内",m:[3,4,5,9,10,11],p:[10],md:["food","photo"],d:[2,3],x:"夜宵之都：茶颜悦色、文和友与橘子洲焰火。",s:"春秋的夜生活开场最舒服。",c:"周末两晚即可吃遍，三天加上岳麓山。"},
  {n:"潮汕",r:"广东 · 国内",a:"国内",m:[10,11,12,1,2,3,4],p:[11,12,1],md:["food"],d:[3,4],x:"牛肉火锅、生腌与粿条，吃货的朝圣地。",s:"凉季吃生腌喝工夫茶最惬意。",c:"潮州加汕头双城，三天一轮，四天深度。"},
  {n:"泉州",r:"福建 · 国内",a:"国内",m:[10,11,12,1,2,3,4],p:[11],md:["culture","food","photo"],d:[2,3],x:"半城烟火半城仙：簪花围与开元寺。",s:"凉季逛古城，海边不晒。",c:"古城一天加蟳埔崇武一天，两三天刚好。"},
  {n:"厦门",r:"福建 · 国内",a:"国内",m:[3,4,5,10,11,12],p:[4,11],md:["relax","food","photo"],d:[3,4],x:"鼓浪屿琴声、环岛路海风与沙茶面。",s:"春秋海风温柔，避开台风季。",c:"本岛加鼓浪屿三天，四天可加土楼。"},
  {n:"桂林阳朔",r:"广西 · 国内",a:"国内",m:[4,5,6,9,10],p:[4,5,9],md:["relax","adventure","photo"],d:[3,4],x:"漓江竹筏与十里画廊，山水在窗外流动。",s:"四五月的烟雨漓江，九十月的清朗秋水。",c:"阳朔住两晚，骑行、漂流加西街节奏正好。"},
  {n:"三亚",r:"海南 · 国内",a:"国内",m:[10,11,12,1,2,3,4],p:[12,1,2],md:["relax","family","romance"],d:[4,5],x:"椰林、沙滩与海鲜，冬天也能下水。",s:"旱季阳光稳定，是避寒顶流。",c:"一湾一酒店躺四天，或加蜈支洲玩五天。"},
  {n:"西双版纳",r:"云南 · 国内",a:"国内",m:[11,12,1,2,3,4],p:[1,2],md:["family","relax","food"],d:[4,5],x:"雨林、大象与星光夜市，冬天也穿短袖。",s:"凉季舒适无雨，泼水节在四月中旬。",c:"景洪市区两天加雨林植物园，四到五天尽兴。"},
  {n:"大理",r:"云南 · 国内",a:"国内",m:[3,4,5,6,9,10,11],p:[3,4,5],md:["heal","relax","romance"],d:[4,5],x:"洱海边发呆，苍山下的风花雪月。",s:"春天花开满城，秋天稻田金黄。",c:"环洱海加古城再加沙溪，四五天治愈完整。"},
  {n:"丽江 · 香格里拉",r:"云南 · 国内",a:"国内",m:[5,6,7,8,9,10],p:[6,9,10],md:["heal","adventure","culture"],d:[5,7],x:"古城晒太阳，雪山与高原草甸接续上演。",s:"夏秋草原开花，虎跳峡水量正好。",c:"丽江两天加香格里拉两三天，五六天最顺。"},
  {n:"稻城亚丁",r:"四川 · 国内",a:"国内",m:[4,5,9,10,11],p:[9,10],md:["adventure","photo","heal"],d:[5,7],x:"蓝色星球上的最后一片净土。",s:"九月起彩林渐染，十月最盛。",c:"川西大环线自驾，五到七天是标准走法。"},
  {n:"敦煌",r:"甘肃 · 国内",a:"国内",m:[5,6,7,8,9,10],p:[9,10],md:["culture","adventure","photo"],d:[3,4],x:"莫高窟壁画、鸣沙山月牙泉与大漠星河。",s:"九十月的胡杨与星空，昼夜温差刚好。",c:"市区洞窟两天，加雅丹玉门关三到四天。"},
  {n:"青海湖 · 大西北环线",r:"青海 / 甘肃 · 国内",a:"国内",m:[6,7,8],p:[7],md:["adventure","photo"],d:[5,7],x:"油菜花、盐湖与雅丹，一路都是大片。",s:"七月油菜花开，八月凉爽少雨。",c:"青甘大环线自驾六七天，五天是紧凑版。"},
  {n:"新疆伊犁",r:"新疆 · 国内",a:"国内",m:[6,7,8],p:[6,7],md:["adventure","heal","photo"],d:[7,10],x:"薰衣草、那拉提与独库公路的辽阔。",s:"六月薰衣草，七月草原，新疆夏天封神。",c:"伊犁环线至少七天，加独库要八到十天。"},
  {n:"阿勒泰",r:"新疆 · 国内",a:"国内",m:[6,7,8,9,12,1,2,3],p:[7,9,1],md:["heal","adventure","photo"],d:[5,7],x:"我的阿勒泰：草原、粉雪与图瓦人木屋。",s:"夏季牧场翠绿，冬季是粉雪滑雪场。",c:"喀纳斯加禾木环线五到七天，冬季滑雪另计。"},
  {n:"拉萨 · 西藏",r:"西藏 · 国内",a:"国内",m:[5,6,7,8,9,10],p:[6,7,8,9],md:["heal","culture","adventure"],d:[7,10],x:"布达拉宫、转经筒与纳木错的蓝。",s:"夏秋含氧量相对足，林芝桃花在三四月。",c:"拉萨两三天适应，再加林芝或日喀则，七天起。"},
  {n:"青岛",r:"山东 · 国内",a:"国内",m:[6,7,8,9],p:[7,8],md:["food","relax","photo"],d:[3,4],x:"红瓦绿树、碧海蓝天与袋装啤酒。",s:"夏季啤酒节加海边度假，九月人少海蓝。",c:"老城区加崂山三天，四天更松弛。"},
  {n:"京都 · 大阪",r:"日本 · 出境",a:"出境",m:[3,4,10,11],p:[4,11],md:["culture","romance","photo"],d:[4,5],x:"清水寺的樱吹雪，岚山的枫与竹林。",s:"四月樱花，十一月红叶，一年两场限定。",c:"京都两三天加大阪一两天，四五天顺路。"},
  {n:"东京",r:"日本 · 出境",a:"出境",m:[3,4,10,11],p:[4,10],md:["shopping","food","family"],d:[4,5],x:"涩谷、秋叶原与迪士尼，未来感永不落幕。",s:"春秋逛街最舒服，樱与银杏加分。",c:"市区三天加迪士尼一天，四五天合适。"},
  {n:"冲绳",r:"日本 · 出境",a:"出境",m:[4,5,6,10,11],p:[5,10],md:["relax","family"],d:[4,5],x:"日本夏威夷：潜水、水族馆与海盐冰。",s:"春秋凉爽少台风，海水能见度高。",c:"本岛三天加离岛一两天，四五天刚好。"},
  {n:"清迈",r:"泰国 · 出境",a:"出境",m:[11,12,1,2],p:[12,1],md:["heal","food","relax"],d:[4,5],x:"古城寺庙、夜市与丛林飞跃的慢生活。",s:"凉季不闷热，天灯节多在十一月。",c:"古城两天加大象营地，四五天很舒展。"},
  {n:"曼谷 · 芭提雅",r:"泰国 · 出境",a:"出境",m:[11,12,1,2],p:[12,1],md:["food","shopping"],d:[4,5],x:"水上市场、米其林街头小吃与摩天楼夜色。",s:"凉季体感舒适，夜市火力全开。",c:"曼谷三天加海岛或古城一两天。"},
  {n:"新加坡",r:"出境",a:"出境",m:[2,3,4,5,6,7,8,9],p:[3,4],md:["family","shopping","food"],d:[4,5],x:"环球影城、夜间动物园与干净的花园城市。",s:"全年可玩，旱季户外活动更多。",c:"五天四园从容打卡，四天紧凑全安排。"},
  {n:"巴厘岛",r:"印度尼西亚 · 出境",a:"出境",m:[4,5,6,7,8,9,10],p:[7,8],md:["romance","relax","adventure"],d:[5,7],x:"火山日出、梯田与悬崖神庙的婚礼感。",s:"旱季阳光稳定，冲浪潜水全开。",c:"乌布两天加海边两三天，五到七天不赶。"},
  {n:"马尔代夫",r:"出境",a:"出境",m:[11,12,1,2,3,4],p:[12,1,2],md:["romance","relax"],d:[5,7],x:"一岛一酒店，推开水屋就是玻璃海。",s:"旱季风平浪静，能见度顶级。",c:"上岛即躺平，五到七天刚刚回本。"},
  {n:"迪拜",r:"阿联酋 · 出境",a:"出境",m:[11,12,1,2,3],p:[12,1,2],md:["shopping","family","adventure"],d:[4,5],x:"哈利法塔、沙漠冲沙与未来主义天际线。",s:"凉季适合户外与沙漠。",c:"市区三天加阿布扎比一两天。"},
  {n:"卡帕多奇亚 · 土耳其",r:"土耳其 · 出境",a:"出境",m:[4,5,6,9,10,11],p:[5,10],md:["photo","romance","adventure"],d:[7,10],x:"热气球掠过精灵烟囱，住进格雷梅洞穴。",s:"春秋热气球起飞率最高。",c:"含伊斯坦布尔的大环线，八到十天尽兴。"},
  {n:"圣托里尼 · 希腊",r:"希腊 · 出境",a:"出境",m:[5,6,9,10],p:[5,6,9],md:["romance","photo"],d:[5,7],x:"蓝顶教堂与伊亚日落，爱琴海的白日梦。",s:"五六月初夏与九十月人少海蓝。",c:"雅典加两三岛跳岛，六七天顺路。"},
  {n:"瑞士",r:"出境",a:"出境",m:[6,7,8,9,12,1,2,3],p:[7,8,1,2],md:["relax","romance","adventure"],d:[7,10],x:"少女峰、金色山口列车与湖畔小镇。",s:"夏季徒步，冬季滑雪，火车全年准点。",c:"伯尔尼高地三天加采尔马特三天，七天起。"},
  {n:"冰岛",r:"出境",a:"出境",m:[6,7,8,11,12,1,2,3],p:[12,1,2],md:["adventure","photo","heal"],d:[7,10],x:"极光、蓝湖温泉与黑沙滩上的冰钻。",s:"冬季追极光，夏季自驾极昼环岛。",c:"环岛自驾七八天，南部加冰岛缩影五天。"},
  {n:"摩洛哥",r:"非洲 · 出境",a:"出境",m:[3,4,5,9,10,11],p:[3,4,10],md:["adventure","culture","photo"],d:[8,12],x:"蓝城舍夫沙万、撒哈拉与马拉喀什集市。",s:"春秋穿越沙漠不灼热。",c:"卡萨、马拉喀什加沙漠环线，八到十二天。"},
  {n:"埃及",r:"非洲 · 出境",a:"出境",m:[10,11,12,1,2,3,4],p:[11,12,1],md:["culture","adventure"],d:[7,9],x:"金字塔、尼罗河与卢克索神庙的千年。",s:"凉季逛神庙不中暑。",c:"开罗加阿斯旺、卢克索加红海，七到九天。"},
  {n:"新西兰",r:"大洋洲 · 出境",a:"出境",m:[12,1,2],p:[1,2],md:["adventure","heal","photo"],d:[8,14],x:"皇后镇、特卡波湖与米尔福德的纯净。",s:"南半球盛夏，薰衣草与鲁冰花接力。",c:"南北岛自驾至少八到十四天。"}
];

const $ = s => document.querySelector(s);
const state = { month: new Date().getMonth() + 1, mood: "", days: 3, origin: "", area: "国内" };
let luckyD = null;
let posterD = null;
let posterURL = "";
let posterSource = "card";

function syncAppHeight(){
  document.documentElement.style.setProperty("--app-height", window.innerHeight + "px");
}

function fmtMonths(months){
  const a = [...new Set(months)].sort((x,y)=>x-y);
  const parts = []; let s = a[0], prev = a[0];
  for (let i=1;i<=a.length;i++){
    if (a[i]===prev+1){ prev=a[i]; continue; }
    parts.push(s===prev ? `${s}月` : `${s}-${prev}月`);
    s = prev = a[i];
  }
  return parts.join("、");
}
function fmtDays(d){
  if (d[0]>=8) return `${d[0]}天以上`;
  return d[0]===d[1] ? `${d[0]}天` : `${d[0]}-${d[1]}天`;
}
const LOCAL_ICONS={
  "compass":'<circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z"/>',
  "map-pin":'<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  "calendar-days":'<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M8 2v4M16 2v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>',
  "heart":'<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  "clock":'<circle cx="12" cy="12" r="10"/><path d="M12 7v5l3 2"/>',
  "globe":'<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z"/>',
  "dices":'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h.01M15 9h.01M9 15h.01M15 15h.01M12 12h.01"/>',
  "minus":'<path d="M5 12h14"/>',
  "plus":'<path d="M12 5v14M5 12h14"/>',
  "x":'<path d="M18 6 6 18M6 6l12 12"/>',
  "image":'<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-4.35-4.35a1.5 1.5 0 0 0-2.12 0L5 20"/>',
  "arrow-left":'<path d="M19 12H5"/><path d="m12 19-7-7 7-7"/>',
  "download":'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>',
  "sparkles":'<path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3z"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z"/>'
};
function refreshIcons(){
  document.querySelectorAll("i[data-lucide]").forEach(el=>{
    el.outerHTML=iconSVG(el.dataset.lucide);
  });
}
function iconSVG(name){
  const body=LOCAL_ICONS[name]||LOCAL_ICONS.compass;
  return `<svg class="lucide" data-icon="${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;
}

function openDialog(el){
  try {
    if(typeof el.showModal==="function"){
      el.showModal();
      return;
    }
  } catch(e){}
  el.setAttribute("open","");
}
function closeDialog(el){
  try {
    if(typeof el.close==="function"){
      el.close();
      return;
    }
  } catch(e){}
  el.removeAttribute("open");
}

/* ---------- poster ---------- */
const FONT_STACK = `"PingFang SC","Microsoft YaHei","Noto Sans SC",sans-serif`;
function quoteFor(d){
  const list = MOOD_QUOTES[d.md[0]] || MOOD_QUOTES.relax;
  const seed = [...d.n].reduce((sum,c)=>sum+c.codePointAt(0),0);
  return list[seed % list.length];
}
function blessingFor(d){
  const seed = [...d.n].reduce((sum,c)=>sum+c.codePointAt(0),0);
  return TRAVEL_BLESSINGS[(seed + new Date().getDate()) % TRAVEL_BLESSINGS.length];
}
function posterDate(){
  try { return new Intl.DateTimeFormat("zh-CN",{month:"long",day:"numeric"}).format(new Date()); }
  catch(e){ return `${new Date().getMonth()+1}月${new Date().getDate()}日`; }
}
function wrapText(ctx,text,maxWidth,maxLines){
  const lines=[]; let line="";
  for(const ch of String(text)){
    if(line && ctx.measureText(line+ch).width>maxWidth){
      lines.push(line); line=ch;
    } else line += ch;
  }
  if(line) lines.push(line);
  if(lines.length>maxLines){
    lines.length=maxLines;
    let last=lines[maxLines-1];
    while(last.length>1 && ctx.measureText(last+"...").width>maxWidth) last=last.slice(0,-1);
    lines[maxLines-1]=last+"...";
  }
  return lines;
}
function drawTextBlock(ctx,text,x,y,maxWidth,lineHeight,maxLines,font,color){
  ctx.font=font; ctx.fillStyle=color; ctx.textAlign="left"; ctx.textBaseline="alphabetic";
  const lines=wrapText(ctx,text,maxWidth,maxLines);
  lines.forEach((row,i)=>ctx.fillText(row,x,y+i*lineHeight));
  return y+lineHeight*lines.length;
}
function roundedRect(ctx,x,y,w,h,r){
  ctx.beginPath();
  ctx.moveTo(x+r,y);
  ctx.arcTo(x+w,y,x+w,y+h,r);
  ctx.arcTo(x+w,y+h,x,y+h,r);
  ctx.arcTo(x,y+h,x,y,r);
  ctx.arcTo(x,y,x+w,y,r);
  ctx.closePath();
}
function makePosterURL(d){
  const W=1080,H=1440,x=92,w=896;
  const canvas=document.createElement("canvas");
  canvas.width=W; canvas.height=H;
  const ctx=canvas.getContext("2d");
  if(!ctx) return "";

  const bg=ctx.createLinearGradient(0,0,W,H);
  bg.addColorStop(0,"#15164D"); bg.addColorStop(.52,"#3A37A6"); bg.addColorStop(1,"#7C4FD8");
  ctx.fillStyle=bg; ctx.fillRect(0,0,W,H);

  let seed=[...d.n].reduce((sum,c)=>sum+c.codePointAt(0),7);
  const rnd=()=>{ seed=(seed*9301+49297)%233280; return seed/233280; };
  for(let i=0;i<72;i++){
    const sx=rnd()*W, sy=rnd()*780, r=.8+rnd()*2.1;
    ctx.globalAlpha=.10+rnd()*.32; ctx.fillStyle="#FFFFFF";
    ctx.beginPath(); ctx.arc(sx,sy,r,0,Math.PI*2); ctx.fill();
  }
  ctx.globalAlpha=1; ctx.lineCap="round";
  for(let i=0;i<9;i++){
    const cy=720+i*84;
    ctx.globalAlpha=.055+i*.006; ctx.strokeStyle="#FFFFFF"; ctx.lineWidth=2;
    ctx.beginPath(); ctx.moveTo(-40,cy);
    ctx.bezierCurveTo(250,cy-82,620,cy+72,1120,cy-30);
    ctx.stroke();
  }
  ctx.globalAlpha=1;

  drawTextBlock(ctx,"TRAVEL INSPIRATION · 下一个目的地",x,116,w,26,1,`700 25px ${FONT_STACK}`,"#D8CCFF");
  let y=drawTextBlock(ctx,d.n,x,212,w,82,2,`800 74px ${FONT_STACK}`,"#FFFFFF");
  y=drawTextBlock(ctx,d.r,x,Math.max(y+8,282),w,40,1,`600 28px ${FONT_STACK}`,"#D8CCFF");
  y=drawTextBlock(ctx,d.x,x,Math.max(y+48,340),w,50,2,`400 30px ${FONT_STACK}`,"rgba(255,255,255,.90)");

  const nearby=nearbyList(d);
  const meta=[
    ["最佳月份",fmtMonths(d.m)],
    ["建议停留",stayAdvice(d)],
    ["旅行心情",d.md.map(k=>MOODS[k].label).join(" / ")],
    ["出发匹配",originTravelText(d)]
  ];
  let metaY=Math.max(y+62,556);
  meta.forEach(([label,value],i)=>{
    const rowY=metaY+i*60;
    ctx.textAlign="left"; ctx.textBaseline="alphabetic";
    ctx.font=`500 24px ${FONT_STACK}`; ctx.fillStyle="#C4B9F8";
    ctx.fillText(label,x,rowY);
    drawTextBlock(ctx,value,x+142,rowY,754,38,1,`650 29px ${FONT_STACK}`,"#FFFFFF");
  });

  roundedRect(ctx,90,850,900,430,28);
  ctx.fillStyle="rgba(255,255,255,.13)"; ctx.fill();
  ctx.strokeStyle="rgba(255,255,255,.34)"; ctx.lineWidth=2; ctx.stroke();
  drawTextBlock(ctx,"心灵寄语",142,920,806,28,1,`700 26px ${FONT_STACK}`,"#E9DFFB");
  const quoteEnd=drawTextBlock(ctx,quoteFor(d),142,994,796,70,3,`700 45px ${FONT_STACK}`,"#FFFFFF");
  const blessingY=Math.max(quoteEnd+38,1170);
  ctx.strokeStyle="rgba(255,255,255,.22)"; ctx.lineWidth=1;
  ctx.beginPath(); ctx.moveTo(142,blessingY-36); ctx.lineTo(938,blessingY-36); ctx.stroke();
  drawTextBlock(ctx,blessingFor(d),142,blessingY,796,44,2,`400 29px ${FONT_STACK}`,"#E9DFFB");

  ctx.textAlign="center"; ctx.textBaseline="alphabetic";
  ctx.font=`600 24px ${FONT_STACK}`; ctx.fillStyle="rgba(255,255,255,.78)";
  ctx.fillText(`${posterDate()} · 旅行灵感罗盘`,W/2,1376);
  return canvas.toDataURL("image/png");
}
function showPoster(d, source="card"){
  const url=makePosterURL(d);
  if(!url){ window.alert("当前浏览器暂时不能生成图片"); return; }
  posterD=d;
  posterSource=source;
  posterURL=url;
  $("#posterImage").src=url;
  $("#posterImage").alt=`${d.n}旅行灵感图片`;
  refreshIcons();
  return true;
}
/* ---------- combined scoring ---------- */
function normalizeOrigin(value){
  const raw=String(value||"").replace(/[\s　]+/g,"");
  if(!raw) return "";
  const aliases={"新疆维吾尔":"新疆","广西壮族":"广西","宁夏回族":"宁夏"};
  let compact=raw;
  for(const [alias,name] of Object.entries(aliases)){
    if(compact.includes(alias)) compact=compact.replace(alias,name);
  }
  for(const suffix of ["特别行政区","自治区","省","市"]){
    if(compact.endsWith(suffix)){
      compact=compact.slice(0,-suffix.length);
      break;
    }
  }
  if(Object.prototype.hasOwnProperty.call(ORIGIN_POINTS,compact)) return compact;
  const matches=Object.keys(ORIGIN_POINTS)
    .filter(name=>raw.includes(name)||compact.includes(name))
    .sort((a,b)=>b.length-a.length);
  return matches[0]||"";
}
function originInfo(){
  const raw=state.origin.trim();
  const name=normalizeOrigin(raw);
  return {raw,name,recognized:Boolean(name),point:name?ORIGIN_POINTS[name]:null};
}
function distanceKm(a,b){
  const rad=Math.PI/180;
  const dLat=(b[1]-a[1])*rad;
  const dLon=(b[0]-a[0])*rad;
  const lat1=a[1]*rad, lat2=b[1]*rad;
  const h=Math.sin(dLat/2)**2+Math.cos(lat1)*Math.cos(lat2)*Math.sin(dLon/2)**2;
  return Math.round(6371*2*Math.atan2(Math.sqrt(h),Math.sqrt(1-h)));
}
function roundTripDays(d,distance){
  if(d.a!=="出境"){
    if(distance<=300) return .5;
    if(distance<=800) return 1;
    if(distance<=1500) return 1.5;
    if(distance<=2500) return 2;
    if(distance<=3500) return 2.5;
    return 3;
  }
  if(distance<=2500) return 1.5;
  if(distance<=5000) return 2;
  if(distance<=8000) return 2.5;
  return 3;
}
function travelInfo(d){
  const origin=originInfo();
  if(!origin.recognized) return {known:false,name:origin.raw,distance:0,roundTrip:0,localDays:state.days};
  const point=DEST_POINTS[d.n];
  const distance=point?distanceKm(origin.point,point):0;
  const roundTrip=roundTripDays(d,distance);
  return {known:true,name:origin.name,distance,roundTrip,localDays:Math.max(.5,state.days-roundTrip)};
}
function fmtHalfDay(v){ return `${v}天`; }
function nearbyList(d){
  const extra=travelInfo(d).localDays-d.d[1];
  if(extra<6) return [];
  const pool=NEARBY[d.n]||[];
  const count=extra>=13?3:extra>=9?2:1;
  return pool.slice(0,Math.min(count,pool.length));
}
function durationScore(d){
  const lo=d.d[0], hi=d.d[1], localDays=travelInfo(d).localDays;
  if(localDays>=lo && localDays<=hi) return 7;
  return localDays>hi ? 7*hi/localDays : 7*localDays/lo;
}
function originScore(d){
  const info=travelInfo(d);
  if(!info.known) return 0;
  if(info.roundTrip<=.5) return 2;
  if(info.roundTrip<=1) return 1.7;
  if(info.roundTrip<=1.5) return 1.4;
  if(info.roundTrip<=2) return 1.1;
  if(info.roundTrip<=2.5) return .8;
  return .5;
}
function scoreFor(d){
  const mo=d.p.includes(state.month)?3:d.m.includes(state.month)?2:0;
  const g=state.mood?(d.md[0]===state.mood?3:d.md.includes(state.mood)?2:0):0;
  const dy=durationScore(d);
  const oc=originScore(d);
  return {t:mo+g+dy+oc,mo,g,dy,oc};
}
function isOriginPlace(d){
  const origin=originInfo();
  return origin.recognized && d.n===origin.name;
}
function recommend(){
  const hasOrigin=originInfo().recognized;
  const maxPts=state.mood?(hasOrigin?15:13):(hasOrigin?12:10);
  const domesticFirst=state.area==="国内"&&state.days<=5;
  return DESTS.filter(d=>state.area===d.a&&!isOriginPlace(d))
    .map(d=>({d,s:scoreFor(d)}))
    .sort((a,b)=>{
      if(domesticFirst){
        const areaA=a.d.a==="国内"?0:1;
        const areaB=b.d.a==="国内"?0:1;
        if(areaA!==areaB) return areaA-areaB;
      }
      return b.s.t-a.s.t||b.s.dy-a.s.dy||b.s.mo-a.s.mo||b.s.g-a.s.g||b.s.oc-a.s.oc;
    })
    .slice(0,9)
    .map(x=>({d:x.d,s:x.s,pct:Math.round(x.s.t/maxPts*20)*5}));
}

/* ---------- card rendering ---------- */
function reasonFor(d){
  const pts = [];
  const m = state.month;
  if(d.p.includes(m)) pts.push(`${m}月正是最佳时节`);
  else if(d.m.includes(m)) pts.push(`${m}月气候合适`);
  const k = state.mood;
  if(k){
    if(d.md[0]===k) pts.push(`「${MOODS[k].label}」是这里的招牌体验`);
    else if(d.md.includes(k)) pts.push(`也很适合「${MOODS[k].label}」`);
  }
  const travel=travelInfo(d);
  const n = travel.localDays;
  const nearby=nearbyList(d);
  if(travel.known) pts.push(`从${travel.name}出发扣往返约${fmtHalfDay(travel.roundTrip)}，当地约${fmtHalfDay(n)}`);
  if(n>=d.d[0] && n<=d.d[1]) pts.push(`当地${fmtHalfDay(n)}节奏刚好`);
  else if(n>d.d[1]) pts.push(
    nearby.length
      ? `当地${fmtHalfDay(n)}适合${d.d[1]}天主线，再串${nearby.join("、")}`
      : n-d.d[1]>=6 ? `当地${fmtHalfDay(n)}适合以这里作${d.d[1]}天主线` : `当地${fmtHalfDay(n)}可以玩得更从容`
  );
  else pts.push(`当地${fmtHalfDay(n)}是紧凑版，比理想少${fmtHalfDay(d.d[0]-n)}`);
  if(!pts.length) pts.push("作为这个组合的备选灵感");
  return pts.join("；");
}
function stayAdvice(d){
  const lo=d.d[0], hi=d.d[1], travel=travelInfo(d), n=travel.localDays;
  if(n<lo) return `当地${fmtHalfDay(n)}紧凑版（理想${fmtDays(d.d)}）`;
  if(n<=hi) return `当地${fmtHalfDay(n)}`;
  const nearby=nearbyList(d);
  if(nearby.length) return `${hi}天主线，再串${nearby.join("、")}`;
  return n-hi>=6 ? `${hi}天核心` : `${hi}天核心，可慢慢延伸`;
}
function originStatusText(){
  const origin=originInfo();
  if(!origin.raw) return "尚未填写出发地，建议停留按总假期估算";
  if(!origin.recognized) return `未能识别“${origin.raw}”，建议停留按总假期估算`;
  return `已从${origin.name}出发计算：先扣往返路程，再按当地可玩天数匹配`;
}
function originTravelText(d){
  const travel=travelInfo(d);
  if(!travel.known) return originStatusText();
  return `${travel.name}出发，往返约${fmtHalfDay(travel.roundTrip)}，当地约${fmtHalfDay(travel.localDays)}`;
}
function cardHTML(d, pct, top){
  const pills = d.md.map(k=>`<span class="pill pill-${k}">${MOODS[k].label}</span>`).join("");
  const badge = top
    ? '<span class="badge hot">综合推荐</span>'
    : `<span class="badge ${pct>=70?"hot":"soft"}">${pct}% 匹配</span>`;
  return `
  <article class="card" style="--acc:${MOOD_COLOR[d.md[0]]}" data-name="${d.n}" tabindex="0" role="button" aria-label="生成${d.n}旅行灵感图片">
    <div class="card-top">
      <div><h3>${d.n}</h3><p class="region">${d.r}</p></div>
      ${badge}
    </div>
    <p class="desc">${d.x}</p>
    <div class="reason">${iconSVG("sparkles")}<span>匹配点：${reasonFor(d)}</span></div>
    <div class="meta">
      <div class="meta-row">${iconSVG("calendar-days")}最佳月份：${fmtMonths(d.m)}</div>
      <div class="meta-row">${iconSVG("clock")}建议停留：${stayAdvice(d)}</div>
      <div class="meta-row">${iconSVG("map-pin")}出发匹配：${originTravelText(d)}</div>
      <div class="pill-row">${pills}</div>
    </div>
  </article>`;
}
/* ---------- query sync ---------- */
function syncQuery(){
  $("#monthInput").value = state.month;
  $("#daysInput").value = state.days;
 document.querySelectorAll(".scope-btn").forEach(btn=>{
   btn.classList.toggle("active",btn.dataset.scope===state.area);
  });
}

function buildMoodOptions(){
  $("#moodSelect").insertAdjacentHTML("beforeend",
    Object.entries(MOODS).map(([k,v])=>`<option value="${k}">${v.label} · ${v.sub}</option>`).join(""));
}

/* ---------- events ---------- */
function initEvents(){
  document.querySelectorAll(".step-btn").forEach(b=>{
    b.addEventListener("click",()=>{
      const dir = Number(b.dataset.dir);
      if(b.dataset.target==="month") state.month = Math.min(12, Math.max(1, state.month+dir));
      else state.days = Math.min(30, Math.max(1, state.days+dir));
      syncQuery();
    });
  });
  $("#monthInput").addEventListener("input",e=>{
    const v = parseInt(e.target.value,10);
    if(v>=1 && v<=12){ state.month = v; syncQuery(); }
  });
  $("#monthInput").addEventListener("blur",e=>{ e.target.value = state.month; });
  $("#daysInput").addEventListener("input",e=>{
    const v = parseInt(e.target.value,10);
    if(v>=1 && v<=30){ state.days = v; syncQuery(); }
  });
  $("#daysInput").addEventListener("blur",e=>{ e.target.value = state.days; });
  $("#moodSelect").addEventListener("change",e=>{
    state.mood = e.target.value;
    syncQuery();
  });
  $("#originInput").addEventListener("input",e=>{
    state.origin=e.target.value;
    syncQuery();
  });
  $("#originInput").addEventListener("keydown",e=>{
    if(e.key==="Enter"){
      e.preventDefault();
      $("#luckyQueryBtn").click();
    }
  });
  $("#originInput").addEventListener("blur",e=>{
    const origin=originInfo();
    if(origin.recognized) e.target.value=origin.name;
  });
  document.querySelectorAll(".scope-btn").forEach(btn=>{
    btn.addEventListener("click",()=>{
      state.area=btn.dataset.scope;
      syncQuery();
    });
  });

  const luckyDialog = $("#luckyDialog");
  const posterDialog = $("#posterDialog");
  const roll = ()=>{
    const pool=recommend();
    if(!pool.length) return;
    let d=pool[Math.floor(Math.random()*pool.length)].d;
    while(pool.length>1 && luckyD && d.n===luckyD.n){
      d=pool[Math.floor(Math.random()*pool.length)].d;
    }
    luckyD = d;
    $("#luckyTitle").textContent = d.n;
    $("#luckyRegion").textContent = d.r;
    $("#luckyDesc").textContent = d.x;
    $("#luckyMeta").innerHTML = `
      <div class="meta-row">${iconSVG("globe")}目的地范围：${state.area==="国内"?"国内":"国外"}</div>
      <div class="meta-row">${iconSVG("calendar-days")}最佳月份：${fmtMonths(d.m)}</div>
      <div class="meta-row">${iconSVG("clock")}建议停留：${stayAdvice(d)}</div>
      <div class="meta-row">${iconSVG("map-pin")}出发匹配：${originTravelText(d)}</div>
      <div class="pill-row">${d.md.map(k=>`<span class="pill pill-${k}">${MOODS[k].label}</span>`).join("")}</div>`;
    refreshIcons();
  };

  const openNextDestination = ()=>{
    roll();
    if(luckyD) openDialog(luckyDialog);
  };
  $("#luckyQueryBtn").addEventListener("click",openNextDestination);
  $("#luckyAgain").addEventListener("click",roll);
  $("#luckyBack").addEventListener("click",()=>{
    closeDialog(luckyDialog);
    $("#luckyQueryBtn").focus();
  });
  $("#luckyPosterBtn").addEventListener("click",()=>{
    if(showPoster(luckyD,"lucky")){
      closeDialog(luckyDialog);
      openDialog(posterDialog);
    }
  });
  $("#luckyClose").addEventListener("click",()=>closeDialog(luckyDialog));
  $("#posterClose").addEventListener("click",()=>closeDialog(posterDialog));
}

/* ---------- boot ---------- */
function init(){
  buildMoodOptions();
  initEvents();
  syncQuery();
  refreshIcons();
}
syncAppHeight();
window.addEventListener("resize",syncAppHeight);
if(window.visualViewport){
  window.visualViewport.addEventListener("resize",syncAppHeight);
}
init();
window.addEventListener("load",refreshIcons);
