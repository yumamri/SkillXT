SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

CREATE TABLE IF NOT EXISTS `interest` (
    `id_user` int(11) NOT NULL,
    `id_skill` int(11) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `competence` (
    `id_user` int(11) NOT NULL,
    `id_skill` int(11) NOT NULL
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `interest`
    ADD PRIMARY KEY (`id_user`, `id_skill`);
ALTER TABLE `interest`
    ADD FOREIGN KEY (`id_user`) REFERENCES user(`id`);
ALTER TABLE `interest`
    ADD FOREIGN KEY (`id_skill`) REFERENCES skill(`id`);

ALTER TABLE `competence`
    ADD PRIMARY KEY (`id_user`, `id_skill`);
ALTER TABLE `competence`
    ADD FOREIGN KEY (`id_user`) REFERENCES user(`id`);
ALTER TABLE `competence`
    ADD FOREIGN KEY (`id_skill`) REFERENCES skill(`id`);
