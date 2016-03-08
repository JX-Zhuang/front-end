-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- 主机: 127.0.0.1
-- 生成日期: 2016 �?01 �?25 �?16:19
-- 服务器版本: 5.6.11
-- PHP 版本: 5.5.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `my_news`
--
CREATE DATABASE IF NOT EXISTS `my_news` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `my_news`;

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `newstitle` varchar(100) DEFAULT NULL,
  `newsimg` varchar(200) DEFAULT NULL,
  `newscontent` text,
  `addtime` date DEFAULT NULL,
  `newstype` varchar(100) DEFAULT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自动增长',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=259 ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`newstitle`, `newsimg`, `newscontent`, `addtime`, `newstype`, `id`) VALUES
('军事标题', '../../images/1.jpg', '军事新闻', '2016-01-22', '军事', 220),
('科技标题1', '../../images/2.jpg', '科技新闻', '2016-01-28', '科技', 221),
('互联网标题1', '../../images/3.jpg', '互联网新闻', '2016-01-06', '互联网', 222),
('体育标题1', '../../images/4.jpg', '体育新闻', '2016-01-05', '体育', 223),
('国外标题1', '../../images/5.jpg', '新闻内容', '2016-01-06', '国外', 224),
('推荐标题1', '../../images/6.jpg', '新闻内容', '2016-01-07', '推荐', 225),
('社会标题2', '../../images/8.jpg', '新闻内容./$*', '2016-01-20', '社会', 227),
('国外标题2', '../../images/9.jpg', '新闻内容', '2016-01-06', '国外', 228),
('体育标题2', '../../images/10.jpg', '新闻内容', '2016-01-13', '体育', 229),
('互联网标题2', '../../images/11.jpg', '新闻内容', '2016-01-05', '互联网', 230),
('社会标题', '../../images/12.jpg', '你好社会', '2016-01-12', '社会', 234),
('娱乐标题', '../../images/13.jpg', '你好娱乐', '2016-01-11', '娱乐', 235),
('图片标题', '../../images/14.jpg', '你好图片', '2016-01-14', '图片', 236),
('本地标题', '../../images/15.jpg', '你好本地', '2016-01-01', '本地', 251),
('百家标题', '../../images/16.jpg', '你好百家', '2016-01-28', '百家', 255),
('图片标题新增', '../../images/1.jpg', '图片内容', '2016-01-23', '图片', 258);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
