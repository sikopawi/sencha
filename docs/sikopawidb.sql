-- phpMyAdmin SQL Dump
-- version 3.4.11.1deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jun 20, 2013 at 09:37 PM
-- Server version: 5.5.31
-- PHP Version: 5.3.14

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `sikopawidb`
--

-- --------------------------------------------------------

--
-- Table structure for table `CABANG`
--

CREATE TABLE IF NOT EXISTS `CABANG` (
  `CABANG_ID` int(19) NOT NULL AUTO_INCREMENT,
  `CABANG_NAME` varchar(255) COLLATE utf8_bin NOT NULL,
  `CREATED_DATE` datetime NOT NULL,
  `MODIFIED_DATE` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`CABANG_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=5 ;

--
-- Dumping data for table `CABANG`
--

INSERT INTO `CABANG` (`CABANG_ID`, `CABANG_NAME`, `CREATED_DATE`, `MODIFIED_DATE`) VALUES
(4, 'Bandung', '2013-06-19 23:56:25', '2013-06-19 16:56:25');

-- --------------------------------------------------------

--
-- Table structure for table `MENUS`
--

CREATE TABLE IF NOT EXISTS `MENUS` (
  `MENU_ID` int(19) NOT NULL AUTO_INCREMENT,
  `MENU_TITLE` varchar(100) COLLATE utf8_bin NOT NULL,
  `ACTIVE` int(1) NOT NULL DEFAULT '1',
  `INDEX` int(3) NOT NULL DEFAULT '0',
  `ACTION` varchar(255) COLLATE utf8_bin NOT NULL,
  `PARENT_ID` int(19) NOT NULL DEFAULT '0',
  `CREATED_DATE` datetime NOT NULL,
  `MODIFIED_DATE` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`MENU_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=12 ;

--
-- Dumping data for table `MENUS`
--

INSERT INTO `MENUS` (`MENU_ID`, `MENU_TITLE`, `ACTIVE`, `INDEX`, `ACTION`, `PARENT_ID`, `CREATED_DATE`, `MODIFIED_DATE`) VALUES
(1, 'Master', 1, 0, '', 0, '2013-06-17 19:14:55', '2013-06-17 12:14:55'),
(2, 'Customer', 1, 1, 'onCustomerMenuClicked', 1, '2013-06-17 21:44:56', '2013-06-17 15:36:28'),
(3, 'Transaction', 1, 1, '', 0, '2013-06-17 22:03:18', '2013-06-17 15:03:18'),
(4, 'Cabang', 1, 0, 'onCabangMenuClicked', 1, '2013-06-17 22:26:27', '2013-06-17 16:02:59'),
(5, 'Debitur Category', 1, 2, '', 1, '2013-06-17 22:27:02', '2013-06-17 15:27:02'),
(6, 'Kolektibilitas', 1, 3, '', 1, '2013-06-17 22:28:40', '2013-06-17 15:28:40'),
(7, 'Kredit Category', 1, 4, '', 1, '2013-06-17 22:28:40', '2013-06-17 15:28:40'),
(8, 'Marketing Officer', 1, 5, '', 1, '2013-06-17 22:28:40', '2013-06-17 15:28:40'),
(9, 'Payment Point', 1, 6, 'onPaymentPointClicked', 1, '2013-06-17 22:28:40', '2013-06-20 10:16:04'),
(10, 'Unit Kerja', 1, 7, '', 1, '2013-06-17 22:28:40', '2013-06-17 15:28:40'),
(11, 'Users', 1, 8, '', 1, '2013-06-17 22:28:41', '2013-06-17 15:28:41');

-- --------------------------------------------------------

--
-- Table structure for table `PAYMENT_POINT`
--

CREATE TABLE IF NOT EXISTS `PAYMENT_POINT` (
  `PAYMENT_POINT_ID` int(19) NOT NULL AUTO_INCREMENT,
  `PAYMENT_POINT_CODE` varchar(50) COLLATE utf8_bin NOT NULL,
  `PAYMENT_POINT_NAME` varchar(255) COLLATE utf8_bin NOT NULL,
  `CREATED_DATE` datetime NOT NULL,
  `MODIFIED_DATE` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`PAYMENT_POINT_ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=2 ;

--
-- Dumping data for table `PAYMENT_POINT`
--

INSERT INTO `PAYMENT_POINT` (`PAYMENT_POINT_ID`, `PAYMENT_POINT_CODE`, `PAYMENT_POINT_NAME`, `CREATED_DATE`, `MODIFIED_DATE`) VALUES
(1, 'PPC-001-ABC', 'Payment Point Code #1', '2013-06-20 21:17:37', '2013-06-20 14:17:37');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
