SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `skill` (
    `id` int(11) NOT NULL,
    `title` varchar(255) NOT NULL,
    `type` int(11) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `skill`
    ADD PRIMARY KEY (`id`);
ALTER TABLE `skill`
    MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `skill`
    ADD FOREIGN KEY (`type`) REFERENCES skill_type(`id`);
