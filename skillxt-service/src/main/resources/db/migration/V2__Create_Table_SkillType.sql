SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `skill_type` (
    `id` int(11) NOT NULL,
    `type` varchar(255) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `skill_type`
    ADD PRIMARY KEY (`id`);
ALTER TABLE `skill_type`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
