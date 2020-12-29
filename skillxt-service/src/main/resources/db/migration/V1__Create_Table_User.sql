SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `user` (
    `id` int(11) NOT NULL,
    `name` varchar(255) NOT NULL,
    `family` varchar(255) NOT NULL,
    `email` varchar(255) NOT NULL,
    `password` varchar(255) NOT NULL,
    `country` varchar(255) NOT NULL,
    `about` varchar(280)
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `user`
    ADD PRIMARY KEY (`id`,`email`);
ALTER TABLE `user`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
