-- --------------------------------------------------------
-- 主机:                           127.0.0.1
-- 服务器版本:                        5.5.27 - MySQL Community Server (GPL)
-- 服务器操作系统:                      Win64
-- HeidiSQL 版本:                  9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- 导出 tooxiu 的数据库结构
CREATE DATABASE IF NOT EXISTS `tooxiu` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `tooxiu`;

-- 导出  表 tooxiu.db_lxcdb 结构
CREATE TABLE IF NOT EXISTS `db_lxcdb` (
  `LXCDB_ID` varchar(100) NOT NULL DEFAULT '',
  `USERNAME` varchar(50) DEFAULT NULL COMMENT '操作用户',
  `BACKUP_TIME` varchar(32) DEFAULT NULL COMMENT '备份时间',
  `TABLENAME` varchar(50) DEFAULT NULL COMMENT '表名',
  `SQLPATH` varchar(300) DEFAULT NULL COMMENT '存储位置',
  `TYPE` int(1) NOT NULL COMMENT '类型',
  `DBSIZE` varchar(10) DEFAULT NULL COMMENT '文件大小',
  `BZ` varchar(255) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`LXCDB_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.db_lxcdb 的数据：~0 rows (大约)
DELETE FROM `db_lxcdb`;
/*!40000 ALTER TABLE `db_lxcdb` DISABLE KEYS */;
/*!40000 ALTER TABLE `db_lxcdb` ENABLE KEYS */;

-- 导出  表 tooxiu.db_timingbackup 结构
CREATE TABLE IF NOT EXISTS `db_timingbackup` (
  `TIMINGBACKUP_ID` varchar(100) NOT NULL,
  `JOBNAME` varchar(50) DEFAULT NULL COMMENT '任务名称',
  `CREATE_TIME` varchar(32) DEFAULT NULL COMMENT '创建时间',
  `TABLENAME` varchar(50) DEFAULT NULL COMMENT '表名',
  `STATUS` int(1) NOT NULL COMMENT '类型',
  `LXCTIME` varchar(30) DEFAULT NULL COMMENT '时间规则',
  `TIMEEXPLAIN` varchar(100) DEFAULT NULL COMMENT '规则说明',
  `BZ` varchar(255) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`TIMINGBACKUP_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.db_timingbackup 的数据：~2 rows (大约)
DELETE FROM `db_timingbackup`;
/*!40000 ALTER TABLE `db_timingbackup` DISABLE KEYS */;
INSERT INTO `db_timingbackup` (`TIMINGBACKUP_ID`, `JOBNAME`, `CREATE_TIME`, `TABLENAME`, `STATUS`, `LXCTIME`, `TIMEEXPLAIN`, `BZ`) VALUES
	('311e06c34a5e4518a86d5d30799f9b55', 'sys_app_user_515762', '2016-04-11 17:04:55', 'sys_app_user', 2, '1/2 * * ? * *', '每个月的 每周 每天 每小时执行一次', '备份任务'),
	('bc4a788bc2ec40bdb1b7730131c26d42', 'sys_app_user_359515', '2016-04-12 17:24:05', 'sys_app_user', 2, '1/3 * * ? * *', '每个月的 每周 每天 每小时执行一次', 'ssss');
/*!40000 ALTER TABLE `db_timingbackup` ENABLE KEYS */;

-- 导出  表 tooxiu.oa_department 结构
CREATE TABLE IF NOT EXISTS `oa_department` (
  `DEPARTMENT_ID` varchar(100) NOT NULL,
  `NAME` varchar(30) DEFAULT NULL COMMENT '名称',
  `NAME_EN` varchar(50) DEFAULT NULL COMMENT '英文',
  `BIANMA` varchar(50) DEFAULT NULL COMMENT '编码',
  `PARENT_ID` varchar(100) DEFAULT NULL COMMENT '上级ID',
  `BZ` varchar(255) DEFAULT NULL COMMENT '备注',
  `HEADMAN` varchar(30) DEFAULT NULL COMMENT '负责人',
  `TEL` varchar(50) DEFAULT NULL COMMENT '电话',
  `FUNCTIONS` varchar(255) DEFAULT NULL COMMENT '部门职能',
  `ADDRESS` varchar(255) DEFAULT NULL COMMENT '地址',
  PRIMARY KEY (`DEPARTMENT_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.oa_department 的数据：~9 rows (大约)
DELETE FROM `oa_department`;
/*!40000 ALTER TABLE `oa_department` DISABLE KEYS */;
INSERT INTO `oa_department` (`DEPARTMENT_ID`, `NAME`, `NAME_EN`, `BIANMA`, `PARENT_ID`, `BZ`, `HEADMAN`, `TEL`, `FUNCTIONS`, `ADDRESS`) VALUES
	('0956d8c279274fca92f4091f2a69a9ad', '销售会计', 'xiaokuai', '05896', 'd41af567914a409893d011aa53eda797', '', '', '', '', ''),
	('3e7227e11dc14b4d9e863dd1a1fcedf6', '成本会计', 'chengb', '03656', 'd41af567914a409893d011aa53eda797', '', '', '', '', ''),
	('5cccdb7c432449d8b853c52880058140', 'B公司', 'b', '002', '0', '冶铁', '李四', '112', '冶铁', '河北'),
	('83a25761c618457cae2fa1211bd8696d', '销售B组', 'xiaob', '002365', 'cbbc84eddde947ba8af7d509e430eb70', '', '李四', '', '', ''),
	('8f8b045470f342fdbc4c312ab881d62b', '销售A组', 'xiaoA', '0326', 'cbbc84eddde947ba8af7d509e430eb70', '', '张三', '0201212', '', ''),
	('a0982dea52554225ab682cd4b421de47', '1队', 'yidui', '02563', '8f8b045470f342fdbc4c312ab881d62b', '', '小王', '12356989', '', ''),
	('a6c6695217ba4a4dbfe9f7e9d2c06730', 'A公司', 'a', '001', '0', '挖煤', '张三', '110', '洼煤矿', '山西'),
	('cbbc84eddde947ba8af7d509e430eb70', '销售部', 'xiaoshoubu', '00201', '5cccdb7c432449d8b853c52880058140', '推销商品', '小明', '11236', '推销商品', '909办公室'),
	('d41af567914a409893d011aa53eda797', '财务部', 'caiwubu', '00101', 'a6c6695217ba4a4dbfe9f7e9d2c06730', '负责发工资', '王武', '11236', '管理财务', '308办公室');
/*!40000 ALTER TABLE `oa_department` ENABLE KEYS */;

-- 导出  表 tooxiu.sys_app_user 结构
CREATE TABLE IF NOT EXISTS `sys_app_user` (
  `USER_ID` varchar(100) NOT NULL,
  `USERNAME` varchar(255) DEFAULT NULL,
  `PASSWORD` varchar(255) DEFAULT NULL,
  `NAME` varchar(255) DEFAULT NULL,
  `RIGHTS` varchar(255) DEFAULT NULL,
  `ROLE_ID` varchar(100) DEFAULT NULL,
  `LAST_LOGIN` varchar(255) DEFAULT NULL,
  `IP` varchar(100) DEFAULT NULL,
  `STATUS` varchar(32) DEFAULT NULL,
  `BZ` varchar(255) DEFAULT NULL,
  `PHONE` varchar(100) DEFAULT NULL,
  `SFID` varchar(100) DEFAULT NULL,
  `START_TIME` varchar(100) DEFAULT NULL,
  `END_TIME` varchar(100) DEFAULT NULL,
  `YEARS` int(10) DEFAULT NULL,
  `NUMBER` varchar(100) DEFAULT NULL,
  `EMAIL` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.sys_app_user 的数据：~2 rows (大约)
DELETE FROM `sys_app_user`;
/*!40000 ALTER TABLE `sys_app_user` DISABLE KEYS */;
INSERT INTO `sys_app_user` (`USER_ID`, `USERNAME`, `PASSWORD`, `NAME`, `RIGHTS`, `ROLE_ID`, `LAST_LOGIN`, `IP`, `STATUS`, `BZ`, `PHONE`, `SFID`, `START_TIME`, `END_TIME`, `YEARS`, `NUMBER`, `EMAIL`) VALUES
	('1e89e6504be349a68c025976b3ecc1d1', 'a1', '698d51a19d8a121ce581499d7b701668', '会员甲', '', '115b386ff04f4352b060dffcd2b5d1da', '', '', '1', '121', '1212', '1212', '2015-12-02', '2015-12-25', 2, '111', '313596790@qq.com'),
	('9c0a651f65b94b13be7f6d71cd2b50d4', 'sangsang', 'e10adc3949ba59abbe56e057f20f883e', '桑桑', '', '1b67fc82ce89457a8347ae53e43a347e', '', '', '1', '', '18911780490', '36073219940921998', '2018-12-08', '2019-12-08', 1, '001', 'sangsang@qq.com');
/*!40000 ALTER TABLE `sys_app_user` ENABLE KEYS */;

-- 导出  表 tooxiu.sys_createcode 结构
CREATE TABLE IF NOT EXISTS `sys_createcode` (
  `CREATECODE_ID` varchar(100) NOT NULL,
  `PACKAGENAME` varchar(50) DEFAULT NULL COMMENT '包名',
  `OBJECTNAME` varchar(50) DEFAULT NULL COMMENT '类名',
  `TABLENAME` varchar(50) DEFAULT NULL COMMENT '表名',
  `FIELDLIST` varchar(5000) DEFAULT NULL COMMENT '属性集',
  `CREATETIME` varchar(100) DEFAULT NULL COMMENT '创建时间',
  `TITLE` varchar(255) DEFAULT NULL COMMENT '描述',
  `LXCTYPE` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`CREATECODE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.sys_createcode 的数据：~3 rows (大约)
DELETE FROM `sys_createcode`;
/*!40000 ALTER TABLE `sys_createcode` DISABLE KEYS */;
INSERT INTO `sys_createcode` (`CREATECODE_ID`, `PACKAGENAME`, `OBJECTNAME`, `TABLENAME`, `FIELDLIST`, `CREATETIME`, `TITLE`, `LXCTYPE`) VALUES
	('429fa68bb7084d919bd63a6e908373aa', 'tooxiu', 'ImageType', 'TB_,lxc,IMAGETYPE', 'TYPE_NAME,lxc,String,lxc,类别名称,lxc,是,lxc,无,lxc,255,lxc,0Q1094921525TYPE_CODE,lxc,String,lxc,类别编码,lxc,是,lxc,无,lxc,255,lxc,0Q1094921525ORDER_BY,lxc,Integer,lxc,排序,lxc,是,lxc,无,lxc,11,lxc,0Q1094921525BZ,lxc,String,lxc,备注,lxc,是,lxc,无,lxc,255,lxc,0Q1094921525IAMGE_PATH,lxc,String,lxc,图标地址,lxc,是,lxc,无,lxc,255,lxc,0Q1094921525', '2018-12-08 21:53:38', '服装类别管理', 'tree'),
	('aa801c23492d427298418528e5740e1b', 'tooxiu', 'Order_INFOMx', 'TB_,lxc,ORDER_INFOMX', 'COMMODITY,lxc,String,lxc,商品名称,lxc,是,lxc,无,lxc,255,lxc,0Q1094921525PRICE,lxc,Integer,lxc,价格,lxc,是,lxc,无,lxc,11,lxc,0Q1094921525AMOUNT,lxc,Integer,lxc,数量,lxc,是,lxc,无,lxc,11,lxc,0Q1094921525CREATE_USER,lxc,String,lxc,创建人,lxc,否,lxc,NULL,lxc,32,lxc,0Q1094921525CREATE_TIME,lxc,Date,lxc,创建时间,lxc,否,lxc,DateUtil.getTime(),lxc,32,lxc,0Q1094921525UPDATE_USER,lxc,String,lxc,修改人,lxc,否,lxc,无,lxc,32,lxc,0Q1094921525UPDATE_TIME,lxc,Date,lxc,修改时间,lxc,否,lxc,DateUtil.getTime(),lxc,32,lxc,0Q1094921525COMMODITY_INFO,lxc,String,lxc,商品详情,lxc,是,lxc,无,lxc,255,lxc,0Q1094921525IS_DELETE,lxc,Integer,lxc,是否删除,lxc,否,lxc,2,lxc,2,lxc,0Q1094921525COMMODITY_ID,lxc,String,lxc,商品编码,lxc,是,lxc,无,lxc,255,lxc,0Q1094921525BODY,lxc,String,lxc,商品描述,lxc,是,lxc,无,lxc,255,lxc,0Q1094921525BZ,lxc,String,lxc,备注,lxc,是,lxc,无,lxc,255,lxc,0Q1094921525', '2018-12-09 12:18:00', '订单管理(明细)', 'sontable'),
	('ecaae7de497d44cba038c739734853b1', 'tooxiu', 'Order_INFO', 'TB_,lxc,ORDER_INFO', 'OUT_TRADE_NO,lxc,String,lxc,商户订单号,lxc,是,lxc,无,lxc,32,lxc,0Q1094921525CREATE_USER,lxc,String,lxc,创建人,lxc,否,lxc,NULL,lxc,255,lxc,0Q1094921525CREATE_TIME,lxc,Date,lxc,创建时间,lxc,否,lxc,DateUtil.getTime(),lxc,32,lxc,0Q1094921525UPDATE_USER,lxc,String,lxc,修改人,lxc,否,lxc,NULL,lxc,255,lxc,0Q1094921525UPDATE_TIME,lxc,Date,lxc,修改时间,lxc,否,lxc,DateUtil.getTime(),lxc,32,lxc,0Q1094921525IS_DELETE,lxc,Integer,lxc,是否删除 1是 2否,lxc,否,lxc,2,lxc,2,lxc,0Q1094921525STATUS,lxc,Integer,lxc,状态,lxc,是,lxc,无,lxc,11,lxc,0Q1094921525TOTAL_FEE,lxc,Double,lxc,订单金额,lxc,是,lxc,无,lxc,11,lxc,2Q1094921525BZ,lxc,String,lxc,备注,lxc,是,lxc,无,lxc,255,lxc,0Q1094921525PAY_TYPE,lxc,String,lxc,支付方式,lxc,是,lxc,无,lxc,32,lxc,0Q1094921525PAY_TIME,lxc,Date,lxc,支付时间,lxc,是,lxc,无,lxc,32,lxc,0Q1094921525PAY_ACCOUNT,lxc,String,lxc,支付账户,lxc,是,lxc,无,lxc,255,lxc,0Q1094921525APPID,lxc,String,lxc,公众账号ID,lxc,是,lxc,无,lxc,32,lxc,0Q1094921525MCH_ID,lxc,String,lxc,商户号,lxc,是,lxc,无,lxc,255,lxc,0Q1094921525SIGN_TYPE,lxc,String,lxc,签名类型,lxc,是,lxc,无,lxc,32,lxc,0Q1094921525SIGN,lxc,String,lxc,签名,lxc,否,lxc,无,lxc,32,lxc,0Q1094921525FEE_TYPE,lxc,String,lxc,货币类型,lxc,是,lxc,无,lxc,16,lxc,0Q1094921525GOODS_TAG,lxc,String,lxc,订单优惠标记,lxc,是,lxc,无,lxc,32,lxc,0Q1094921525SPBILL_CREATE_IP,lxc,String,lxc,终端IP,lxc,是,lxc,无,lxc,32,lxc,0Q1094921525TIME_START,lxc,Date,lxc,交易起始时间,lxc,否,lxc,无,lxc,32,lxc,0Q1094921525TIME_EXPIRE,lxc,Date,lxc,交易结束时间,lxc,是,lxc,无,lxc,32,lxc,0Q1094921525AUTH_CODE,lxc,String,lxc,授权码,lxc,是,lxc,无,lxc,128,lxc,0Q1094921525RECEIPT,lxc,String,lxc,开发发票入口开发标识,lxc,否,lxc,无,lxc,8,lxc,0Q1094921525DEVICE_INFO,lxc,String,lxc,设备号,lxc,否,lxc,无,lxc,32,lxc,0Q1094921525NONCE_STR,lxc,String,lxc,随机字符串,lxc,是,lxc,无,lxc,32,lxc,0Q1094921525', '2018-12-09 12:06:33', '订单管理', 'fathertable');
/*!40000 ALTER TABLE `sys_createcode` ENABLE KEYS */;

-- 导出  表 tooxiu.sys_dictionaries 结构
CREATE TABLE IF NOT EXISTS `sys_dictionaries` (
  `DICTIONARIES_ID` varchar(100) NOT NULL,
  `NAME` varchar(30) DEFAULT NULL COMMENT '名称',
  `NAME_EN` varchar(50) DEFAULT NULL COMMENT '英文',
  `BIANMA` varchar(50) DEFAULT NULL COMMENT '编码',
  `ORDER_BY` int(11) NOT NULL COMMENT '排序',
  `PARENT_ID` varchar(100) DEFAULT NULL COMMENT '上级ID',
  `BZ` varchar(255) DEFAULT NULL COMMENT '备注',
  `TBSNAME` varchar(100) DEFAULT NULL COMMENT '排查表',
  PRIMARY KEY (`DICTIONARIES_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.sys_dictionaries 的数据：~10 rows (大约)
DELETE FROM `sys_dictionaries`;
/*!40000 ALTER TABLE `sys_dictionaries` DISABLE KEYS */;
INSERT INTO `sys_dictionaries` (`DICTIONARIES_ID`, `NAME`, `NAME_EN`, `BIANMA`, `ORDER_BY`, `PARENT_ID`, `BZ`, `TBSNAME`) VALUES
	('096e4ec8986149d994b09e604504e38d', '黄浦区', 'huangpu', '0030201', 1, 'f1ea30ddef1340609c35c88fb2919bee', '黄埔', ''),
	('12a62a3e5bed44bba0412b7e6b733c93', '北京', 'beijing', '00301', 1, 'be4a8c5182c744d28282a5345783a77f', '北京', ''),
	('507fa87a49104c7c8cdb52fdb297da12', '宣武区', 'xuanwuqu', '0030101', 1, '12a62a3e5bed44bba0412b7e6b733c93', '宣武区', ''),
	('8994f5995f474e2dba6cfbcdfe5ea07a', '语文', 'yuwen', '00201', 1, 'fce20eb06d7b4b4d8f200eda623f725c', '语文', ''),
	('8ea7c44af25f48b993a14f791c8d689f', '分类', 'fenlei', '001', 1, '0', '分类', ''),
	('be4a8c5182c744d28282a5345783a77f', '地区', 'diqu', '003', 3, '0', '地区', ''),
	('d428594b0494476aa7338d9061e23ae3', '红色', 'red', '00101', 1, '8ea7c44af25f48b993a14f791c8d689f', '红色', ''),
	('de9afadfbed0428fa343704d6acce2c4', '绿色', 'green', '00102', 2, '8ea7c44af25f48b993a14f791c8d689f', '绿色', ''),
	('f1ea30ddef1340609c35c88fb2919bee', '上海', 'shanghai', '00302', 2, 'be4a8c5182c744d28282a5345783a77f', '上海', ''),
	('fce20eb06d7b4b4d8f200eda623f725c', '课程', 'kecheng', '002', 2, '0', '课程', '');
/*!40000 ALTER TABLE `sys_dictionaries` ENABLE KEYS */;

-- 导出  表 tooxiu.sys_lxcbutton 结构
CREATE TABLE IF NOT EXISTS `sys_lxcbutton` (
  `LXCBUTTON_ID` varchar(100) NOT NULL DEFAULT '',
  `NAME` varchar(30) DEFAULT NULL COMMENT '名称',
  `QX_NAME` varchar(50) DEFAULT NULL COMMENT '权限标识',
  `BZ` varchar(255) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`LXCBUTTON_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.sys_lxcbutton 的数据：~5 rows (大约)
DELETE FROM `sys_lxcbutton`;
/*!40000 ALTER TABLE `sys_lxcbutton` DISABLE KEYS */;
INSERT INTO `sys_lxcbutton` (`LXCBUTTON_ID`, `NAME`, `QX_NAME`, `BZ`) VALUES
	('3542adfbda73410c976e185ffe50ad06', '导出EXCEL', 'toExcel', '导出EXCEL'),
	('46992ea280ba4b72b29dedb0d4bc0106', '发邮件', 'email', '发送电子邮件'),
	('4efa162fce8340f0bd2dcd3b11d327ec', '导入EXCEL', 'FromExcel', '导入EXCEL到系统用户'),
	('cc51b694d5344d28a9aa13c84b7166cd', '发短信', 'sms', '发送短信'),
	('da7fd386de0b49ce809984f5919022b8', '站内信', 'LXCSMS', '发送站内信');
/*!40000 ALTER TABLE `sys_lxcbutton` ENABLE KEYS */;

-- 导出  表 tooxiu.sys_lxcsms 结构
CREATE TABLE IF NOT EXISTS `sys_lxcsms` (
  `LXCSMS_ID` varchar(100) NOT NULL DEFAULT '',
  `CONTENT` varchar(1000) DEFAULT NULL COMMENT '内容',
  `TYPE` varchar(5) DEFAULT NULL COMMENT '类型',
  `TO_USERNAME` varchar(255) DEFAULT NULL COMMENT '收信人',
  `FROM_USERNAME` varchar(255) DEFAULT NULL COMMENT '发信人',
  `SEND_TIME` varchar(100) DEFAULT NULL COMMENT '发信时间',
  `STATUS` varchar(5) DEFAULT NULL COMMENT '状态',
  `SANME_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`LXCSMS_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.sys_lxcsms 的数据：~10 rows (大约)
DELETE FROM `sys_lxcsms`;
/*!40000 ALTER TABLE `sys_lxcsms` DISABLE KEYS */;
INSERT INTO `sys_lxcsms` (`LXCSMS_ID`, `CONTENT`, `TYPE`, `TO_USERNAME`, `FROM_USERNAME`, `SEND_TIME`, `STATUS`, `SANME_ID`) VALUES
	('05879f5868824f35932ee9f2062adc03', '你好', '2', 'admin', 'san', '2016-01-25 14:05:31', '1', 'b311e893228f42d5a05dbe16917fd16f'),
	('2635dd035c6f4bb5a091abdd784bd899', '你好', '2', 'san', 'admin', '2016-01-25 14:05:02', '2', '1b7637306683460f89174c2b025862b5'),
	('52378ccd4e2d4fe08994d1652af87c68', '你好', '1', 'admin', 'san', '2016-01-25 16:26:44', '1', '920b20dafdfb4c09b560884eb277c51d'),
	('77ed13f9c49a4c4bb460c41b8580dd36', 'gggg', '2', 'admin', 'san', '2016-01-24 21:22:43', '2', 'dd9ee339576e48c5b046b94fa1901d00'),
	('98a6869f942042a1a037d9d9f01cb50f', '你好', '1', 'admin', 'san', '2016-01-25 14:05:02', '2', '1b7637306683460f89174c2b025862b5'),
	('9e00295529014b6e8a27019cbccb3da1', '柔柔弱弱', '1', 'admin', 'san', '2016-01-24 21:22:57', '1', 'a29603d613ea4e54b5678033c1bf70a6'),
	('d3aedeb430f640359bff86cd657a8f59', '你好', '1', 'admin', 'san', '2016-01-24 21:22:12', '1', 'f022fbdce3d845aba927edb698beb90b'),
	('e5376b1bd54b489cb7f2203632bd74ec', '管理员好', '2', 'admin', 'san', '2016-01-25 14:06:13', '2', 'b347b2034faf43c79b54be4627f3bd2b'),
	('e613ac0fcc454f32895a70b747bf4fb5', '你也好', '2', 'admin', 'san', '2016-01-25 16:27:54', '2', 'ce8dc3b15afb40f28090f8b8e13f078d'),
	('f25e00cfafe741a3a05e3839b66dc7aa', '你好', '2', 'san', 'admin', '2016-01-25 16:26:44', '1', '920b20dafdfb4c09b560884eb277c51d');
/*!40000 ALTER TABLE `sys_lxcsms` ENABLE KEYS */;

-- 导出  表 tooxiu.sys_menu 结构
CREATE TABLE IF NOT EXISTS `sys_menu` (
  `MENU_ID` int(11) NOT NULL,
  `MENU_NAME` varchar(255) DEFAULT NULL,
  `MENU_URL` varchar(255) DEFAULT NULL,
  `PARENT_ID` varchar(100) DEFAULT NULL,
  `MENU_ORDER` varchar(100) DEFAULT NULL,
  `MENU_ICON` varchar(60) DEFAULT NULL,
  `MENU_TYPE` varchar(10) DEFAULT NULL,
  `MENU_STATE` int(1) DEFAULT NULL,
  PRIMARY KEY (`MENU_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.sys_menu 的数据：~57 rows (大约)
DELETE FROM `sys_menu`;
/*!40000 ALTER TABLE `sys_menu` DISABLE KEYS */;
INSERT INTO `sys_menu` (`MENU_ID`, `MENU_NAME`, `MENU_URL`, `PARENT_ID`, `MENU_ORDER`, `MENU_ICON`, `MENU_TYPE`, `MENU_STATE`) VALUES
	(1, '系统管理', '#', '0', '1', 'menu-icon fa fa-desktop blue', '1', 1),
	(2, '权限管理', '#', '1', '1', 'menu-icon fa fa-lock black', '1', 1),
	(6, '信息管理', '#', '0', '5', 'menu-icon fa fa-credit-card green', '2', 1),
	(7, '图片管理', '#', '6', '1', 'menu-icon fa fa-folder-o pink', '2', 1),
	(8, '性能监控', 'druid/index.html', '9', '8', 'menu-icon fa fa-tachometer red', '1', 1),
	(9, '系统工具', '#', '0', '3', 'menu-icon fa fa-cog black', '1', 1),
	(10, '接口测试', 'tool/interfaceTest.do', '9', '2', 'menu-icon fa fa-exchange green', '1', 1),
	(11, '发送邮件', 'tool/goSendEmail.do', '9', '3', 'menu-icon fa fa-envelope-o green', '1', 1),
	(12, '置二维码', 'tool/goTwoDimensionCode.do', '9', '4', 'menu-icon fa fa-barcode green', '1', 1),
	(14, '地图工具', 'tool/map.do', '9', '6', 'menu-icon fa fa-globe black', '1', 1),
	(15, '微信管理', '#', '0', '4', 'menu-icon fa fa-comments purple', '2', 1),
	(16, '文本回复', 'textmsg/list.do', '15', '2', 'menu-icon fa fa-comment green', '2', 1),
	(17, '应用命令', 'command/list.do', '15', '4', 'menu-icon fa fa-comment grey', '2', 1),
	(18, '图文回复', 'imgmsg/list.do', '15', '3', 'menu-icon fa fa-comment pink', '2', 1),
	(19, '关注回复', 'textmsg/goSubscribe.do', '15', '1', 'menu-icon fa fa-comment orange', '2', 1),
	(20, '在线管理', 'onlinemanager/list.do', '1', '5', 'menu-icon fa fa-laptop green', '1', 1),
	(21, '打印测试', 'tool/printTest.do', '9', '7', 'menu-icon fa fa-hdd-o grey', '1', 1),
	(22, '一级菜单', '#', '0', '10', 'menu-icon fa fa-fire orange', '1', 1),
	(23, '二级菜单', '#', '22', '1', 'menu-icon fa fa-leaf black', '1', 1),
	(24, '三级菜单', '#', '23', '1', 'menu-icon fa fa-leaf black', '1', 1),
	(30, '四级菜单', '#', '24', '1', 'menu-icon fa fa-leaf black', '1', 1),
	(31, '五级菜单1', '#', '30', '1', 'menu-icon fa fa-leaf black', '1', 1),
	(32, '五级菜单2', '#', '30', '2', 'menu-icon fa fa-leaf black', '1', 1),
	(33, '六级菜单', '#', '31', '1', 'menu-icon fa fa-leaf black', '1', 1),
	(34, '六级菜单2', 'login_default.do', '31', '2', 'menu-icon fa fa-leaf black', '1', 1),
	(35, '四级菜单2', 'login_default.do', '24', '2', 'menu-icon fa fa-leaf black', '1', 1),
	(36, '角色(基础权限)', 'role.do', '2', '1', 'menu-icon fa fa-key orange', '1', 1),
	(37, '按钮权限', 'buttonrights/list.do', '2', '2', 'menu-icon fa fa-key green', '1', 1),
	(38, '菜单管理', 'menu/listAllMenu.do', '1', '3', 'menu-icon fa fa-folder-open-o brown', '1', 1),
	(39, '按钮管理', 'lxcbutton/list.do', '1', '2', 'menu-icon fa fa-download orange', '1', 1),
	(40, '用户管理', '#', '0', '2', 'menu-icon fa fa-users blue', '1', 1),
	(41, '系统用户', 'user/listUsers.do', '40', '1', 'menu-icon fa fa-users green', '1', 1),
	(42, '会员管理', 'happuser/listUsers.do', '40', '2', 'menu-icon fa fa-users orange', '1', 1),
	(43, '数据字典', 'dictionaries/listAllDict.do?DICTIONARIES_ID=0', '1', '4', 'menu-icon fa fa-book purple', '1', 1),
	(44, '代码生成器', '#', '9', '0', 'menu-icon fa fa-cogs brown', '1', 1),
	(45, '七级菜单1', '#', '33', '1', 'menu-icon fa fa-leaf black', '1', 1),
	(46, '七级菜单2', '#', '33', '2', 'menu-icon fa fa-leaf black', '1', 1),
	(47, '八级菜单', 'login_default.do', '45', '1', 'menu-icon fa fa-leaf black', '1', 1),
	(48, '图表报表', ' tool/fusionchartsdemo.do', '9', '5', 'menu-icon fa fa-bar-chart-o black', '1', 1),
	(50, '站内信', 'lxcsms/list.do', '6', '3', 'menu-icon fa fa-envelope green', '1', 1),
	(51, '图片列表', 'pictures/list.do', '7', '1', 'menu-icon fa fa-folder-open-o green', '1', 1),
	(52, '图片爬虫', 'pictures/goImageCrawler.do', '7', '2', 'menu-icon fa fa-cloud-download green', '1', 1),
	(53, '表单构建器', 'tool/goFormbuilder.do', '9', '1', 'menu-icon fa fa-leaf black', '1', 1),
	(54, '数据库管理', '#', '0', '9', 'menu-icon fa fa-hdd-o blue', '1', 1),
	(55, '数据库备份', 'brdb/listAllTable.do', '54', '1', 'menu-icon fa fa-cloud-upload blue', '1', 1),
	(56, '数据库还原', 'brdb/list.do', '54', '3', 'menu-icon fa fa-cloud-download blue', '1', 1),
	(57, '备份定时器', 'timingbackup/list.do', '54', '2', 'menu-icon fa fa-tachometer blue', '1', 1),
	(58, 'SQL编辑器', 'sqledit/view.do', '54', '4', 'menu-icon fa fa-pencil-square-o blue', '1', 1),
	(59, 'OA办公', '#', '0', '6', 'menu-icon fa fa-laptop pink', '2', 1),
	(60, '组织机构', 'department/listAllDepartment.do?DEPARTMENT_ID=0', '59', '1', 'menu-icon fa fa-users green', '1', 1),
	(61, '反向生成', 'recreateCode/list.do', '44', '2', 'menu-icon fa fa-cogs blue', '1', 1),
	(62, '正向生成', 'createCode/list.do', '44', '1', 'menu-icon fa fa-cogs green', '1', 1),
	(63, '主附结构', 'attached/list.do', '6', '2', 'menu-icon fa fa-folder-open blue', '1', 1),
	(64, '图休业务管理', '#', '0', '9', 'menu-icon fa fa-briefcase black', '2', 1),
	(65, '服装类别管理', 'imagetype/listTree.do?IMAGETYPE_ID=0', '64', '1', 'menu-icon fa fa-book black', '1', 1),
	(66, '订单管理', 'order_info/list.do', '64', '2', 'menu-icon fa fa-leaf black', '1', 1),
	(67, '图片管理', 'tooxiuPictures/listTree.do?IMAGETYPE_ID=0', '64', '1', 'menu-icon fa fa-leaf black', '1', 1);
/*!40000 ALTER TABLE `sys_menu` ENABLE KEYS */;

-- 导出  表 tooxiu.sys_role 结构
CREATE TABLE IF NOT EXISTS `sys_role` (
  `ROLE_ID` varchar(100) NOT NULL,
  `ROLE_NAME` varchar(100) DEFAULT NULL,
  `RIGHTS` varchar(255) DEFAULT NULL,
  `PARENT_ID` varchar(100) DEFAULT NULL,
  `ADD_QX` varchar(255) DEFAULT NULL,
  `DEL_QX` varchar(255) DEFAULT NULL,
  `EDIT_QX` varchar(255) DEFAULT NULL,
  `CHA_QX` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ROLE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.sys_role 的数据：~13 rows (大约)
DELETE FROM `sys_role`;
/*!40000 ALTER TABLE `sys_role` DISABLE KEYS */;
INSERT INTO `sys_role` (`ROLE_ID`, `ROLE_NAME`, `RIGHTS`, `PARENT_ID`, `ADD_QX`, `DEL_QX`, `EDIT_QX`, `CHA_QX`) VALUES
	('1', '系统管理组', '295147342228359208902', '0', '1', '1', '1', '1'),
	('115b386ff04f4352b060dffcd2b5d1da', '中级VIP会员', '498', '2', '0', '0', '0', '0'),
	('1b67fc82ce89457a8347ae53e43a347e', '普通VIP会员', '498', '2', '0', '0', '0', '0'),
	('2', '会员组', '498', '0', '0', '0', '0', '1'),
	('3264c8e83d0248bb9e3ea6195b4c0216', '一级管理员', '295147342228359208902', '1', '55341913373367328710', '55341921069948723142', '55340795170041880518', '55900367423742664646'),
	('46294b31a71c4600801724a6eb06bb26', '职位组', '', '0', '0', '0', '0', '0'),
	('5466347ac07044cb8d82990ec7f3a90e', '主管', '', '46294b31a71c4600801724a6eb06bb26', '0', '0', '0', '0'),
	('68f8e4a39efe47c7bb869e9d15ab925d', '二级管理员', '295147342228359208902', '1', '0', '0', '2251798773489606', '0'),
	('856849f422774ad390a4e564054d8cc8', '经理', '', '46294b31a71c4600801724a6eb06bb26', '0', '0', '0', '0'),
	('8b70a7e67f2841e7aaba8a4d92e5ff6f', '高级VIP会员', '498', '2', '0', '0', '0', '0'),
	('c21cecf84048434b93383182b1d98cba', '组长', '', '46294b31a71c4600801724a6eb06bb26', '0', '0', '0', '0'),
	('d449195cd8e7491080688c58e11452eb', '总监', '', '46294b31a71c4600801724a6eb06bb26', '0', '0', '0', '0'),
	('de9de2f006e145a29d52dfadda295353', '三级管理员', '295147342228359208902', '1', '0', '0', '0', '0');
/*!40000 ALTER TABLE `sys_role` ENABLE KEYS */;

-- 导出  表 tooxiu.sys_role_lxcbutton 结构
CREATE TABLE IF NOT EXISTS `sys_role_lxcbutton` (
  `RB_ID` varchar(100) NOT NULL,
  `ROLE_ID` varchar(100) DEFAULT NULL,
  `BUTTON_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`RB_ID`),
  KEY `角色表外键` (`ROLE_ID`) USING BTREE,
  KEY `fbutton` (`BUTTON_ID`),
  CONSTRAINT `fbutton` FOREIGN KEY (`BUTTON_ID`) REFERENCES `sys_lxcbutton` (`LXCBUTTON_ID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `frole` FOREIGN KEY (`ROLE_ID`) REFERENCES `sys_role` (`ROLE_ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.sys_role_lxcbutton 的数据：~10 rows (大约)
DELETE FROM `sys_role_lxcbutton`;
/*!40000 ALTER TABLE `sys_role_lxcbutton` DISABLE KEYS */;
INSERT INTO `sys_role_lxcbutton` (`RB_ID`, `ROLE_ID`, `BUTTON_ID`) VALUES
	('14b5c28ea6ae4508b57d2d272ab3d5f1', '3264c8e83d0248bb9e3ea6195b4c0216', '46992ea280ba4b72b29dedb0d4bc0106'),
	('1743733f366240c693c4295b527d1b0e', 'de9de2f006e145a29d52dfadda295353', '4efa162fce8340f0bd2dcd3b11d327ec'),
	('3768e60edd1c4b5c9f1dd861188ae2f9', '3264c8e83d0248bb9e3ea6195b4c0216', 'cc51b694d5344d28a9aa13c84b7166cd'),
	('8231c216fb514b4188e4162e629c6237', '3264c8e83d0248bb9e3ea6195b4c0216', '4efa162fce8340f0bd2dcd3b11d327ec'),
	('9412d1d05162464c83658c7f89ab03f0', '68f8e4a39efe47c7bb869e9d15ab925d', '3542adfbda73410c976e185ffe50ad06'),
	('96567633dd3548c9b75d28f430adf5a3', '3264c8e83d0248bb9e3ea6195b4c0216', 'da7fd386de0b49ce809984f5919022b8'),
	('a1478f27c852459fa9cad04b642f4fb7', 'de9de2f006e145a29d52dfadda295353', '3542adfbda73410c976e185ffe50ad06'),
	('ba6696b8761044618e44c7e02c9ba89e', '68f8e4a39efe47c7bb869e9d15ab925d', 'cc51b694d5344d28a9aa13c84b7166cd'),
	('f0329033d0914faf8ea6e9ff252cc5e6', '68f8e4a39efe47c7bb869e9d15ab925d', '46992ea280ba4b72b29dedb0d4bc0106'),
	('f627982cc9d4479dbc03af726dc6ac58', 'de9de2f006e145a29d52dfadda295353', 'cc51b694d5344d28a9aa13c84b7166cd');
/*!40000 ALTER TABLE `sys_role_lxcbutton` ENABLE KEYS */;

-- 导出  表 tooxiu.sys_user 结构
CREATE TABLE IF NOT EXISTS `sys_user` (
  `USER_ID` varchar(100) NOT NULL,
  `USERNAME` varchar(255) DEFAULT NULL,
  `PASSWORD` varchar(255) DEFAULT NULL,
  `NAME` varchar(255) DEFAULT NULL,
  `RIGHTS` varchar(255) DEFAULT NULL,
  `ROLE_ID` varchar(100) DEFAULT NULL,
  `LAST_LOGIN` varchar(255) DEFAULT NULL COMMENT '最后登录时间',
  `IP` varchar(100) DEFAULT NULL,
  `STATUS` varchar(32) DEFAULT NULL,
  `BZ` varchar(255) DEFAULT NULL,
  `SKIN` varchar(100) DEFAULT NULL,
  `EMAIL` varchar(32) DEFAULT NULL,
  `NUMBER` varchar(100) DEFAULT NULL,
  `PHONE` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.sys_user 的数据：~4 rows (大约)
DELETE FROM `sys_user`;
/*!40000 ALTER TABLE `sys_user` DISABLE KEYS */;
INSERT INTO `sys_user` (`USER_ID`, `USERNAME`, `PASSWORD`, `NAME`, `RIGHTS`, `ROLE_ID`, `LAST_LOGIN`, `IP`, `STATUS`, `BZ`, `SKIN`, `EMAIL`, `NUMBER`, `PHONE`) VALUES
	('1', 'admin', 'de41b7fb99201d8334c23c014db35ecd92df81bc', 'lxc', '1133671055321055258374707980945218933803269864762743594642571294', '1', '2019-01-07 20:05:08', '127.0.0.1', '0', 'admin', 'default', 'QQ1094921525@main.com', '001', '18101298728'),
	('69177258a06e4927b4639ab1684c3320', 'san', '47c4a8dc64ac2f0bb46bbd8813b037c9718f9349', '三', '', '3264c8e83d0248bb9e3ea6195b4c0216', '2016-04-21 17:53:06', '127.0.0.1', '0', '111', 'default', '978336446@qq.com', '333', '13562202556'),
	('9991f4d7782a4ccfb8a65bd96ea7aafa', 'lisi', '2612ade71c1e48cd7150b5f4df152faa699cedfe', '李四', '', '3264c8e83d0248bb9e3ea6195b4c0216', '2016-03-21 17:41:57', '127.0.0.1', '0', '小李', 'default', '313596790@qq.com', '1102', '13566233663'),
	('e29149962e944589bb7da23ad18ddeed', 'zhangsan', 'de41b7fb99201d8334c23c014db35ecd92df81bc', '张三', '', '3264c8e83d0248bb9e3ea6195b4c0216', '', '', '0', '小张', 'default', 'zhangsan@www.com', '1101', '2147483647');
/*!40000 ALTER TABLE `sys_user` ENABLE KEYS */;

-- 导出  表 tooxiu.tb_attached 结构
CREATE TABLE IF NOT EXISTS `tb_attached` (
  `ATTACHED_ID` varchar(100) NOT NULL,
  `NAME` varchar(255) DEFAULT NULL COMMENT '名称',
  `FDESCRIBE` varchar(255) DEFAULT NULL COMMENT '描述',
  `PRICE` double(11,2) DEFAULT NULL COMMENT '价格',
  `CTIME` varchar(32) DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`ATTACHED_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.tb_attached 的数据：~2 rows (大约)
DELETE FROM `tb_attached`;
/*!40000 ALTER TABLE `tb_attached` DISABLE KEYS */;
INSERT INTO `tb_attached` (`ATTACHED_ID`, `NAME`, `FDESCRIBE`, `PRICE`, `CTIME`) VALUES
	('1a049f81c78c46249163cd7eca1dac3f', 'BB', 'BB', 1.00, '2018-12-09 19:39:45'),
	('d74b6f507e784607b8f85e31e3cfad22', 'AA', 'aaa', 222.00, '2016-04-17 18:20:41');
/*!40000 ALTER TABLE `tb_attached` ENABLE KEYS */;

-- 导出  表 tooxiu.tb_attachedmx 结构
CREATE TABLE IF NOT EXISTS `tb_attachedmx` (
  `ATTACHEDMX_ID` varchar(100) NOT NULL,
  `NAME` varchar(255) DEFAULT NULL COMMENT '名称',
  `TITLE` varchar(255) DEFAULT NULL COMMENT '标题',
  `CTIME` varchar(32) DEFAULT NULL COMMENT '创建日期',
  `PRICE` double(11,2) DEFAULT NULL COMMENT '单价',
  `ATTACHED_ID` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`ATTACHEDMX_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.tb_attachedmx 的数据：~5 rows (大约)
DELETE FROM `tb_attachedmx`;
/*!40000 ALTER TABLE `tb_attachedmx` DISABLE KEYS */;
INSERT INTO `tb_attachedmx` (`ATTACHEDMX_ID`, `NAME`, `TITLE`, `CTIME`, `PRICE`, `ATTACHED_ID`) VALUES
	('04717d1a034c4e51aacd5e062a4c63bd', 'ddd', 'ddd', '2016-03-29', 111.00, 'd74b6f507e784607b8f85e31e3cfad22'),
	('4e6957d69fdb43fc966aa7afc11a175c', '女装', '女装', '2018-12-09', 60.00, '1a049f81c78c46249163cd7eca1dac3f'),
	('aa34bdaee5284eecb47a43eae29032a5', '女棉服', '女棉服', '2018-12-09', 80.00, '1a049f81c78c46249163cd7eca1dac3f'),
	('aeea61503a754ad4979f8163d7bd85e5', '男棉袄', '男棉袄', '2018-12-09', 50.00, '1a049f81c78c46249163cd7eca1dac3f'),
	('f7ac797407be4a76a7125d41fe345112', 'rgt', 'gdf', '2016-03-30', 3423.00, 'd74b6f507e784607b8f85e31e3cfad22');
/*!40000 ALTER TABLE `tb_attachedmx` ENABLE KEYS */;

-- 导出  表 tooxiu.tb_imagetype 结构
CREATE TABLE IF NOT EXISTS `tb_imagetype` (
  `IMAGETYPE_ID` varchar(100) NOT NULL,
  `PARENT_ID` varchar(100) NOT NULL,
  `NAME` varchar(100) NOT NULL,
  `TYPE_NAME` varchar(255) DEFAULT NULL COMMENT '类别名称',
  `TYPE_CODE` varchar(255) DEFAULT NULL COMMENT '类别编码',
  `ORDER_BY` int(11) NOT NULL COMMENT '排序',
  `BZ` varchar(255) DEFAULT NULL COMMENT '备注',
  `IAMGE_PATH` varchar(255) DEFAULT NULL COMMENT '图标地址',
  PRIMARY KEY (`IMAGETYPE_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.tb_imagetype 的数据：~19 rows (大约)
DELETE FROM `tb_imagetype`;
/*!40000 ALTER TABLE `tb_imagetype` DISABLE KEYS */;
INSERT INTO `tb_imagetype` (`IMAGETYPE_ID`, `PARENT_ID`, `NAME`, `TYPE_NAME`, `TYPE_CODE`, `ORDER_BY`, `BZ`, `IAMGE_PATH`) VALUES
	('02cf78392ec844eda51efd788d231029', 'd2aa77c5ae3e4315a85b0d1d1762f7f3', '女皮克服', '女皮克服', '1011001', 1, '1', '1'),
	('16d5006523cc403ca6a98f0395c9093b', '5c00b90460184548bd4367b873b9ea99', '男皮草', '男皮草', '1001018', 18, '18', '18'),
	('35c653bfca2743abbe041e0ab08731be', 'd2aa77c5ae3e4315a85b0d1d1762f7f3', '女皮草', '女皮草', '1011005', 5, '5', '5'),
	('3b9aa663dc7a492da35d97c1735bc52d', 'd2aa77c5ae3e4315a85b0d1d1762f7f3', '女派克', '女派克', '1011006', 6, '6', '6'),
	('54b2287937ff42a78aa26d4b24beefc3', 'd2aa77c5ae3e4315a85b0d1d1762f7f3', '女羊绒', '女羊绒', '1011004', 4, '4', '4'),
	('584686fb5d2643618a7799958e1550e1', '5c00b90460184548bd4367b873b9ea99', '男外套', '男外套', '1001015', 15, '15', '15'),
	('5c00b90460184548bd4367b873b9ea99', 'f9006d430bc043bba5be9d0c7be851c0', '男装', '男装', '101002', 101, '皮草', '--'),
	('61cd735a3fa14efcb55f9307459dce8c', 'd2aa77c5ae3e4315a85b0d1d1762f7f3', '女皮毛一体', '女皮毛一体', '1011002', 2, '2', '2'),
	('640336c58473407c944a4f25a31d64f1', 'd2aa77c5ae3e4315a85b0d1d1762f7f3', '女外套', '女外套', '1011008', 8, '8', '8'),
	('6eb3860e981e4a98a5d08c400c620306', 'd2aa77c5ae3e4315a85b0d1d1762f7f3', '女棉服', '女棉服', '1011003', 3, '3', '3'),
	('9847bbc944114312b9cfd66cb0f05815', '5c00b90460184548bd4367b873b9ea99', '男皮克服', '男皮克服', '1001012', 12, '12', '12'),
	('a314ecfe64b744d8b58270a39faf1e06', '5c00b90460184548bd4367b873b9ea99', '男棉服', '男棉服', '1001009', 9, '9', '9'),
	('a7ef073984064ec995ef22ebdc040873', '5c00b90460184548bd4367b873b9ea99', '男单皮', '男单皮', '1001017', 17, '17', '17'),
	('bbe7d087dfb84d8e8af16f433896ad4b', '5c00b90460184548bd4367b873b9ea99', '男羊绒', '男羊绒', '1001016', 16, '16', '16'),
	('cae3a1cefe3649fc9303e59f4ffae178', '5c00b90460184548bd4367b873b9ea99', '男皮毛一体', '男皮毛一体', '1001013', 13, '13', '13'),
	('d1b3d52bf84b46c8bd933fb224d92816', '5c00b90460184548bd4367b873b9ea99', '男派克服', '男派克服', '1001014', 14, '14', '14'),
	('d2aa77c5ae3e4315a85b0d1d1762f7f3', 'f9006d430bc043bba5be9d0c7be851c0', '女装', '女装', '101001', 1002, '皮草', '--'),
	('f7cd6fc110fb4a719dd097272d3de1ec', 'd2aa77c5ae3e4315a85b0d1d1762f7f3', '女单皮', '女单皮', '1011007', 7, '7', '7'),
	('f9006d430bc043bba5be9d0c7be851c0', '0', '服装', '皮草', '101', 1000, '1', '11');
/*!40000 ALTER TABLE `tb_imagetype` ENABLE KEYS */;

-- 导出  表 tooxiu.tb_order_info 结构
CREATE TABLE IF NOT EXISTS `tb_order_info` (
  `ORDER_INFO_ID` varchar(100) NOT NULL,
  `OUT_TRADE_NO` varchar(32) DEFAULT NULL COMMENT '商户订单号',
  `CREATE_USER` varchar(255) DEFAULT NULL COMMENT '创建人',
  `CREATE_TIME` varchar(32) DEFAULT NULL COMMENT '创建时间',
  `UPDATE_USER` varchar(255) DEFAULT NULL COMMENT '修改人',
  `UPDATE_TIME` varchar(32) DEFAULT NULL COMMENT '修改时间',
  `PAY_TIME` varchar(32) DEFAULT NULL COMMENT '下单时间',
  `IS_DELETE` int(2) NOT NULL COMMENT '是否删除 1是 2否',
  `ORDER_STATUS` int(11) NOT NULL COMMENT '订单状态',
  `TOTAL_FEE` double(11,2) DEFAULT NULL COMMENT '订单金额',
  `BZ` varchar(255) DEFAULT NULL COMMENT '备注',
  `PAY_TYPE` varchar(32) DEFAULT NULL COMMENT '支付方式',
  `PAY_ACCOUNT` varchar(255) DEFAULT NULL COMMENT '支付账户',
  `APPID` varchar(32) DEFAULT NULL COMMENT '公众账号ID',
  `MCH_ID` varchar(255) DEFAULT NULL COMMENT '商户号',
  `SIGN_TYPE` varchar(32) DEFAULT NULL COMMENT '签名类型',
  `SIGN` varchar(32) DEFAULT NULL COMMENT '签名',
  `FEE_TYPE` varchar(16) DEFAULT NULL COMMENT '货币类型',
  `GOODS_TAG` varchar(32) DEFAULT NULL COMMENT '订单优惠标记',
  `SPBILL_CREATE_IP` varchar(32) DEFAULT NULL COMMENT '终端IP',
  `TIME_START` varchar(32) DEFAULT NULL COMMENT '交易起始时间',
  `TIME_EXPIRE` varchar(32) DEFAULT NULL COMMENT '交易结束时间',
  `AUTH_CODE` varchar(128) DEFAULT NULL COMMENT '授权码',
  `RECEIPT` varchar(8) DEFAULT NULL COMMENT '开发发票入口开发标识',
  `DEVICE_INFO` varchar(32) DEFAULT NULL COMMENT '设备号',
  `NONCE_STR` varchar(32) DEFAULT NULL COMMENT '随机字符串',
  PRIMARY KEY (`ORDER_INFO_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.tb_order_info 的数据：~3 rows (大约)
DELETE FROM `tb_order_info`;
/*!40000 ALTER TABLE `tb_order_info` DISABLE KEYS */;
INSERT INTO `tb_order_info` (`ORDER_INFO_ID`, `OUT_TRADE_NO`, `CREATE_USER`, `CREATE_TIME`, `UPDATE_USER`, `UPDATE_TIME`, `PAY_TIME`, `IS_DELETE`, `ORDER_STATUS`, `TOTAL_FEE`, `BZ`, `PAY_TYPE`, `PAY_ACCOUNT`, `APPID`, `MCH_ID`, `SIGN_TYPE`, `SIGN`, `FEE_TYPE`, `GOODS_TAG`, `SPBILL_CREATE_IP`, `TIME_START`, `TIME_EXPIRE`, `AUTH_CODE`, `RECEIPT`, `DEVICE_INFO`, `NONCE_STR`) VALUES
	('8354d9ace1f74482898c84dd8d419c09', '1', 'admin', '2018-12-09 13:20:00', 'admin', '2018-12-09 13:20:00', '2018-12-09', 2, 1, 1.00, '备注', '1', '1', '1', '1', '1', '签名1', '1', '1', '1', '2018-12-09 13:20:00', '2018-12-17', 'sqm101', '', 'sb1001', 'sj1001'),
	('d6111d4bddf34afb8d9182931c53b24e', '1', 'admin', '2018-12-09 12:38:06', 'admin', '2018-12-09 12:38:06', '2018-12-09', 2, 1, 1.00, '备注', '1', '1', '1', '1', '1', '签名1', '1', '1', '1', '2018-12-09 12:38:06', '2018-12-09', 'sqm102', '', 'sb1002', 'sj1002'),
	('da932c5f60e84812ad9bd8ea97e02f17', '10001', 'admin', '2018-12-09 13:41:25', 'admin', '2018-12-09 13:41:25', '2018-12-09', 2, 1, 12.00, '1212', '1', '1002', '1000001', '100002119', '1', '', '2', '1212', '127.0.0.1', '2018-12-09', '2018-12-26', '11111', '', '', '112');
/*!40000 ALTER TABLE `tb_order_info` ENABLE KEYS */;

-- 导出  表 tooxiu.tb_order_infomx 结构
CREATE TABLE IF NOT EXISTS `tb_order_infomx` (
  `ORDER_INFOMX_ID` varchar(100) NOT NULL,
  `ORDER_INFO_ID` varchar(100) NOT NULL,
  `COMMODITY` varchar(255) DEFAULT NULL COMMENT '商品名称',
  `PRICE` int(11) NOT NULL COMMENT '价格',
  `AMOUNT` int(11) NOT NULL COMMENT '数量',
  `CREATE_USER` varchar(32) DEFAULT NULL COMMENT '创建人',
  `CREATE_TIME` varchar(32) DEFAULT NULL COMMENT '创建时间',
  `UPDATE_USER` varchar(32) DEFAULT NULL COMMENT '修改人',
  `UPDATE_TIME` varchar(32) DEFAULT NULL COMMENT '修改时间',
  `COMMODITY_INFO` varchar(255) DEFAULT NULL COMMENT '商品详情',
  `IS_DELETE` int(2) NOT NULL COMMENT '是否删除',
  `COMMODITY_ID` varchar(255) DEFAULT NULL COMMENT '商品编码',
  `BODY` varchar(255) DEFAULT NULL COMMENT '商品描述',
  `BZ` varchar(255) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`ORDER_INFOMX_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.tb_order_infomx 的数据：~1 rows (大约)
DELETE FROM `tb_order_infomx`;
/*!40000 ALTER TABLE `tb_order_infomx` DISABLE KEYS */;
INSERT INTO `tb_order_infomx` (`ORDER_INFOMX_ID`, `ORDER_INFO_ID`, `COMMODITY`, `PRICE`, `AMOUNT`, `CREATE_USER`, `CREATE_TIME`, `UPDATE_USER`, `UPDATE_TIME`, `COMMODITY_INFO`, `IS_DELETE`, `COMMODITY_ID`, `BODY`, `BZ`) VALUES
	('5e44f490af5b4ae78659215c59b0e2ef', 'd6111d4bddf34afb8d9182931c53b24e', '1', 1, 1, 'NULL', '2018-12-09 12:59:16', '', '2018-12-09 12:59:16', '1', 2, '1', '1', '1');
/*!40000 ALTER TABLE `tb_order_infomx` ENABLE KEYS */;

-- 导出  表 tooxiu.tb_pictures 结构
CREATE TABLE IF NOT EXISTS `tb_pictures` (
  `PICTURES_ID` varchar(100) NOT NULL,
  `TITLE` varchar(255) DEFAULT NULL COMMENT '标题',
  `NAME` varchar(255) DEFAULT NULL COMMENT '文件名',
  `PATH` varchar(255) DEFAULT NULL COMMENT '路径',
  `CREATETIME` varchar(100) DEFAULT NULL COMMENT '创建时间',
  `MASTER_ID` varchar(255) DEFAULT NULL COMMENT '属于',
  `BZ` varchar(255) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`PICTURES_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.tb_pictures 的数据：~0 rows (大约)
DELETE FROM `tb_pictures`;
/*!40000 ALTER TABLE `tb_pictures` DISABLE KEYS */;
/*!40000 ALTER TABLE `tb_pictures` ENABLE KEYS */;

-- 导出  表 tooxiu.tb_tooxiu_pictures 结构
CREATE TABLE IF NOT EXISTS `tb_tooxiu_pictures` (
  `PICTURES_ID` varchar(100) NOT NULL,
  `TITLE` varchar(255) DEFAULT NULL COMMENT '标题',
  `NAME` varchar(255) DEFAULT NULL COMMENT '文件名',
  `PATH` varchar(255) DEFAULT NULL COMMENT '路径',
  `CREATETIME` varchar(100) DEFAULT NULL COMMENT '创建时间',
  `MASTER_ID` varchar(255) DEFAULT NULL COMMENT '属于',
  `BZ` varchar(255) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`PICTURES_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- 正在导出表  tooxiu.tb_tooxiu_pictures 的数据：~24 rows (大约)
DELETE FROM `tb_tooxiu_pictures`;
/*!40000 ALTER TABLE `tb_tooxiu_pictures` DISABLE KEYS */;
INSERT INTO `tb_tooxiu_pictures` (`PICTURES_ID`, `TITLE`, `NAME`, `PATH`, `CREATETIME`, `MASTER_ID`, `BZ`) VALUES
	('05f59fbf723440deb0c76ed6eee3ea0b', '图片', '66adc32ca00942968483e2177c1a7e18.jpg', '20181219/男皮草/66adc32ca00942968483e2177c1a7e18.jpg', '2018-12-19 01:52:01', '16d5006523cc403ca6a98f0395c9093b', '图休图片管理处上传'),
	('091b18fe903441b0bc86a0a804ac864c', '图片', '7e00a05b0d4d451c97200d701a9f5127.jpg', '20181218/男单皮/7e00a05b0d4d451c97200d701a9f5127.jpg', '2018-12-18 22:19:13', 'a7ef073984064ec995ef22ebdc040873', '图休图片管理处上传'),
	('12b711278d664f7ea1c581aee93748ed', '图片', '980d51c31daf4c1aac66459a7d743f78.jpg', '20181218/男单皮/980d51c31daf4c1aac66459a7d743f78.jpg', '2018-12-18 23:39:28', 'a7ef073984064ec995ef22ebdc040873', '图休图片管理处上传'),
	('17f7caf3e3ca413ab87f9b18326b8d8f', '图片', 'cf0a8a968c984569a8ba4ae9482255bb.jpg', '20181219/男皮草/cf0a8a968c984569a8ba4ae9482255bb.jpg', '2018-12-19 01:52:01', '16d5006523cc403ca6a98f0395c9093b', '图休图片管理处上传'),
	('1bd7de300eb942be85c9c8e885cebfa0', '图片', '163d39606aab4441b96343d71d135f19.jpg', '20181219/男单皮/163d39606aab4441b96343d71d135f19.jpg', '2018-12-19 01:03:41', '584686fb5d2643618a7799958e1550e1', '图休图片管理处上传'),
	('1dfd86107a1d4f969659989c4ee37528', '图片', 'b43acc3e0ed14817a3c5acac094595e2.jpg', '20181219/男皮草/b43acc3e0ed14817a3c5acac094595e2.jpg', '2018-12-19 01:52:01', '16d5006523cc403ca6a98f0395c9093b', '图休图片管理处上传'),
	('216e30e076d04171bbd4e7414585fc82', '图片', '3bdcea64a14745cbab4cef49743fcc87.jpg', '20181219/男单皮/3bdcea64a14745cbab4cef49743fcc87.jpg', '2018-12-19 00:03:51', 'a7ef073984064ec995ef22ebdc040873', '图休图片管理处上传'),
	('41fd7b4b77bd4a33bbf5dde9a6c61579', '图片', 'b63b0729514143d3b64f194c8b75c593.jpg', '20181219/男皮草/b63b0729514143d3b64f194c8b75c593.jpg', '2018-12-19 01:52:01', '16d5006523cc403ca6a98f0395c9093b', '图休图片管理处上传'),
	('47397c6dd058473b94cf0d79d4343393', '图片', 'e807ce3b62e745de875856160f2bc518.jpg', '20181218/男单皮/e807ce3b62e745de875856160f2bc518.jpg', '2018-12-18 23:20:47', 'a7ef073984064ec995ef22ebdc040873', '图休图片管理处上传'),
	('779d976b64654525978df003060c18a2', '图片', 'f2eae05bbc9e4c5c891ddefb254f7162.jpg', '20181218/男单皮/f2eae05bbc9e4c5c891ddefb254f7162.jpg', '2018-12-18 23:45:44', 'a7ef073984064ec995ef22ebdc040873', '图休图片管理处上传'),
	('86428b3f7ad94ee88905b6ce2c0814aa', '图片', 'dce63ffe51f84064a0fcc7085e7ef69a.jpg', '20181219/男皮克服/dce63ffe51f84064a0fcc7085e7ef69a.jpg', '2018-12-19 01:51:31', '9847bbc944114312b9cfd66cb0f05815', '图休图片管理处上传'),
	('8665738f35ed47c58716f6eb7c8c0409', '图片', '9fea17baed874b2bab786f1504f5c900.jpg', '20181219/男外套/9fea17baed874b2bab786f1504f5c900.jpg', '2018-12-19 01:03:41', '584686fb5d2643618a7799958e1550e1', '图休图片管理处上传'),
	('8f184c81f4604c4ca7cebb088c004b48', '图片', '157520f66c17486297fe0eae48ca534e.jpg', '20181219/男皮克服/157520f66c17486297fe0eae48ca534e.jpg', '2018-12-19 01:51:31', '9847bbc944114312b9cfd66cb0f05815', '图休图片管理处上传'),
	('94339e9e51614f47ae91904d8b7800ba', '图片', 'bfea46f3901b4fda9343f4b22abd717e.jpg', '20181219/男皮草/bfea46f3901b4fda9343f4b22abd717e.jpg', '2018-12-19 01:49:44', '16d5006523cc403ca6a98f0395c9093b', '图休图片管理处上传'),
	('9b7e950c584c476ab20150c7d7b89e05', '图片', '9f8573d53b454efe9e7a331d2a5cb1e1.jpg', '20181219/男皮克服/9f8573d53b454efe9e7a331d2a5cb1e1.jpg', '2018-12-19 01:51:31', '9847bbc944114312b9cfd66cb0f05815', '图休图片管理处上传'),
	('9e3d65d6cf9043e88413c9a28b3da760', '图片', '2f6fc556e4484766b974e77a33967452.jpg', '20181219/男外套/2f6fc556e4484766b974e77a33967452.jpg', '2018-12-19 01:03:41', '584686fb5d2643618a7799958e1550e1', '图休图片管理处上传'),
	('a86a94973b8f4a8481e8570e031546bc', '图片', '990dbbfe0118435d8ff0581a501aa281.jpg', '20181219/男外套/990dbbfe0118435d8ff0581a501aa281.jpg', '2018-12-19 01:03:41', '584686fb5d2643618a7799958e1550e1', '图休图片管理处上传'),
	('b1d47543ed6440819ac19fff56ffab67', '图片', '8a08d2190a9c404794fe6a1b96032b4d.jpg', '20181219/女皮克服/8a08d2190a9c404794fe6a1b96032b4d.jpg', '2018-12-19 01:50:11', '02cf78392ec844eda51efd788d231029', '图休图片管理处上传'),
	('c37fdb43aab140bfb38569031792ee0d', '图片', 'a275797564224d139445075f9c800520.jpg', '20181219/男外套/a275797564224d139445075f9c800520.jpg', '2018-12-19 01:03:41', '584686fb5d2643618a7799958e1550e1', '图休图片管理处上传'),
	('c472f70bb13945a8b422d2b9f00604be', '图片', '6c82633cde3145eb95bf57c0f5a92fb2.jpg', '20181219/男皮草/6c82633cde3145eb95bf57c0f5a92fb2.jpg', '2018-12-19 01:52:01', '16d5006523cc403ca6a98f0395c9093b', '图休图片管理处上传'),
	('df2c8cb800ed4f58b3eec0a1a6ec205f', '图片', '6249c109481245f6b4868a36b9d34664.jpg', '20181219/男外套/6249c109481245f6b4868a36b9d34664.jpg', '2018-12-19 01:03:41', '584686fb5d2643618a7799958e1550e1', '图休图片管理处上传'),
	('e41a534a26704c57b3139c1dfa490715', '图片', 'b5f1659524c94b05af53bac69bf4ae1f.jpg', '20181219/男羊绒/b5f1659524c94b05af53bac69bf4ae1f.jpg', '2018-12-19 01:11:01', 'bbe7d087dfb84d8e8af16f433896ad4b', '图休图片管理处上传'),
	('e8bab3fabc9a4861a55d5e9bffe20c66', '图片', 'c3df71b62de74c6898214cbe0eba213f.jpg', '20181219/男羊绒/c3df71b62de74c6898214cbe0eba213f.jpg', '2018-12-19 01:10:04', 'bbe7d087dfb84d8e8af16f433896ad4b', '图休图片管理处上传'),
	('ffdf6d7efc464b3fa877d8c1932f51b3', '图片', '30521ce80ede4189912023638459163d.jpg', '20181219/男外套/30521ce80ede4189912023638459163d.jpg', '2018-12-19 01:03:41', '584686fb5d2643618a7799958e1550e1', '图休图片管理处上传');
/*!40000 ALTER TABLE `tb_tooxiu_pictures` ENABLE KEYS */;

-- 导出  表 tooxiu.weixin_command 结构
CREATE TABLE IF NOT EXISTS `weixin_command` (
  `COMMAND_ID` varchar(100) NOT NULL,
  `KEYWORD` varchar(255) DEFAULT NULL COMMENT '关键词',
  `COMMANDCODE` varchar(255) DEFAULT NULL COMMENT '应用路径',
  `CREATETIME` varchar(255) DEFAULT NULL COMMENT '创建时间',
  `STATUS` int(1) NOT NULL COMMENT '状态',
  `BZ` varchar(255) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`COMMAND_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.weixin_command 的数据：~5 rows (大约)
DELETE FROM `weixin_command`;
/*!40000 ALTER TABLE `weixin_command` DISABLE KEYS */;
INSERT INTO `weixin_command` (`COMMAND_ID`, `KEYWORD`, `COMMANDCODE`, `CREATETIME`, `STATUS`, `BZ`) VALUES
	('2636750f6978451b8330874c9be042c2', '锁定服务器', 'rundll32.exe user32.dll,LockWorkStation', '2015-05-10 21:25:06', 1, '锁定计算机'),
	('46217c6d44354010823241ef484f7214', '打开浏览器', 'C:/Program Files/Internet Explorer/iexplore.exe', '2015-05-09 02:43:02', 1, '打开浏览器操作'),
	('576adcecce504bf3bb34c6b4da79a177', '关闭浏览器', 'taskkill /f /im iexplore.exe', '2015-05-09 02:36:48', 2, '关闭浏览器操作'),
	('854a157c6d99499493f4cc303674c01f', '关闭QQ', 'taskkill /f /im qq.exe', '2015-05-10 21:25:46', 1, '关闭QQ'),
	('ab3a8c6310ca4dc8b803ecc547e55ae7', '打开QQ', 'D:/SOFT/QQ/QQ/Bin/qq.exe', '2015-05-10 21:25:25', 1, '打开QQ');
/*!40000 ALTER TABLE `weixin_command` ENABLE KEYS */;

-- 导出  表 tooxiu.weixin_imgmsg 结构
CREATE TABLE IF NOT EXISTS `weixin_imgmsg` (
  `IMGMSG_ID` varchar(100) NOT NULL,
  `KEYWORD` varchar(255) DEFAULT NULL COMMENT '关键词',
  `CREATETIME` varchar(100) DEFAULT NULL COMMENT '创建时间',
  `STATUS` int(11) NOT NULL COMMENT '状态',
  `BZ` varchar(255) DEFAULT NULL COMMENT '备注',
  `TITLE1` varchar(255) DEFAULT NULL COMMENT '标题1',
  `DESCRIPTION1` varchar(255) DEFAULT NULL COMMENT '描述1',
  `IMGURL1` varchar(255) DEFAULT NULL COMMENT '图片地址1',
  `TOURL1` varchar(255) DEFAULT NULL COMMENT '超链接1',
  `TITLE2` varchar(255) DEFAULT NULL COMMENT '标题2',
  `DESCRIPTION2` varchar(255) DEFAULT NULL COMMENT '描述2',
  `IMGURL2` varchar(255) DEFAULT NULL COMMENT '图片地址2',
  `TOURL2` varchar(255) DEFAULT NULL COMMENT '超链接2',
  `TITLE3` varchar(255) DEFAULT NULL COMMENT '标题3',
  `DESCRIPTION3` varchar(255) DEFAULT NULL COMMENT '描述3',
  `IMGURL3` varchar(255) DEFAULT NULL COMMENT '图片地址3',
  `TOURL3` varchar(255) DEFAULT NULL COMMENT '超链接3',
  `TITLE4` varchar(255) DEFAULT NULL COMMENT '标题4',
  `DESCRIPTION4` varchar(255) DEFAULT NULL COMMENT '描述4',
  `IMGURL4` varchar(255) DEFAULT NULL COMMENT '图片地址4',
  `TOURL4` varchar(255) DEFAULT NULL COMMENT '超链接4',
  `TITLE5` varchar(255) DEFAULT NULL COMMENT '标题5',
  `DESCRIPTION5` varchar(255) DEFAULT NULL COMMENT '描述5',
  `IMGURL5` varchar(255) DEFAULT NULL COMMENT '图片地址5',
  `TOURL5` varchar(255) DEFAULT NULL COMMENT '超链接5',
  `TITLE6` varchar(255) DEFAULT NULL COMMENT '标题6',
  `DESCRIPTION6` varchar(255) DEFAULT NULL COMMENT '描述6',
  `IMGURL6` varchar(255) DEFAULT NULL COMMENT '图片地址6',
  `TOURL6` varchar(255) DEFAULT NULL COMMENT '超链接6',
  `TITLE7` varchar(255) DEFAULT NULL COMMENT '标题7',
  `DESCRIPTION7` varchar(255) DEFAULT NULL COMMENT '描述7',
  `IMGURL7` varchar(255) DEFAULT NULL COMMENT '图片地址7',
  `TOURL7` varchar(255) DEFAULT NULL COMMENT '超链接7',
  `TITLE8` varchar(255) DEFAULT NULL COMMENT '标题8',
  `DESCRIPTION8` varchar(255) DEFAULT NULL COMMENT '描述8',
  `IMGURL8` varchar(255) DEFAULT NULL COMMENT '图片地址8',
  `TOURL8` varchar(255) DEFAULT NULL COMMENT '超链接8',
  PRIMARY KEY (`IMGMSG_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.weixin_imgmsg 的数据：~1 rows (大约)
DELETE FROM `weixin_imgmsg`;
/*!40000 ALTER TABLE `weixin_imgmsg` DISABLE KEYS */;
INSERT INTO `weixin_imgmsg` (`IMGMSG_ID`, `KEYWORD`, `CREATETIME`, `STATUS`, `BZ`, `TITLE1`, `DESCRIPTION1`, `IMGURL1`, `TOURL1`, `TITLE2`, `DESCRIPTION2`, `IMGURL2`, `TOURL2`, `TITLE3`, `DESCRIPTION3`, `IMGURL3`, `TOURL3`, `TITLE4`, `DESCRIPTION4`, `IMGURL4`, `TOURL4`, `TITLE5`, `DESCRIPTION5`, `IMGURL5`, `TOURL5`, `TITLE6`, `DESCRIPTION6`, `IMGURL6`, `TOURL6`, `TITLE7`, `DESCRIPTION7`, `IMGURL7`, `TOURL7`, `TITLE8`, `DESCRIPTION8`, `IMGURL8`, `TOURL8`) VALUES
	('380b2cb1f4954315b0e20618f7b5bd8f', '首页', '2015-05-10 20:51:09', 1, '图文回复', '图文回复标题', '图文回复描述', 'http://a.hiphotos.baidu.com/image/h%3D360/sign=c6c7e73ebc389b5027ffe654b535e5f1/a686c9177f3e6709392bb8df3ec79f3df8dc55e3.jpg', 'www.baidu.com', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
/*!40000 ALTER TABLE `weixin_imgmsg` ENABLE KEYS */;

-- 导出  表 tooxiu.weixin_textmsg 结构
CREATE TABLE IF NOT EXISTS `weixin_textmsg` (
  `TEXTMSG_ID` varchar(100) NOT NULL,
  `KEYWORD` varchar(255) DEFAULT NULL COMMENT '关键词',
  `CONTENT` varchar(255) DEFAULT NULL COMMENT '内容',
  `CREATETIME` varchar(100) DEFAULT NULL COMMENT '创建时间',
  `STATUS` int(2) DEFAULT NULL COMMENT '状态',
  `BZ` varchar(255) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`TEXTMSG_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- 正在导出表  tooxiu.weixin_textmsg 的数据：~2 rows (大约)
DELETE FROM `weixin_textmsg`;
/*!40000 ALTER TABLE `weixin_textmsg` DISABLE KEYS */;
INSERT INTO `weixin_textmsg` (`TEXTMSG_ID`, `KEYWORD`, `CONTENT`, `CREATETIME`, `STATUS`, `BZ`) VALUES
	('695cd74779734231928a253107ab0eeb', '吃饭', '吃了噢噢噢噢', '2015-05-10 22:52:27', 1, '文本回复'),
	('d4738af7aea74a6ca1a5fb25a98f9acb', '关注', '这里是关注后回复的内容', '2015-05-11 02:12:36', 1, '关注回复');
/*!40000 ALTER TABLE `weixin_textmsg` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
