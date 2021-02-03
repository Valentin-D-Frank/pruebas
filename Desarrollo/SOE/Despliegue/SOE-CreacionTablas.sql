CREATE SCHEMA `soe_db` ;

USE soe_db;

CREATE TABLE USUARIO
(
	id_usuario           INTEGER AUTO_INCREMENT,
	nombre_completo_usuario VARCHAR(20) NULL,
	correo               VARCHAR(20) NULL,
	contrasenia          VARCHAR(20) NULL
 AUTO_INCREMENT = ,
	PRIMARY KEY (id_usuario)
);



CREATE TABLE CURSO
(
	id_curso             INTEGER AUTO_INCREMENT,
	nombre_curso         VARCHAR(20) NULL,
	id_usuario           INTEGER NULL,
	descripcion          VARCHAR(200) NULL
 AUTO_INCREMENT = ,
	PRIMARY KEY (id_curso),
	FOREIGN KEY R_13 (id_usuario) REFERENCES USUARIO (id_usuario)
);



CREATE TABLE USUARIO_CURSO
(
	id_usuario           INTEGER NOT NULL,
	id_curso             INTEGER NOT NULL,
	PRIMARY KEY (id_usuario,id_curso),
	FOREIGN KEY R_6 (id_usuario) REFERENCES USUARIO (id_usuario),
	FOREIGN KEY R_7 (id_curso) REFERENCES CURSO (id_curso)
);



CREATE TABLE GRUPO
(
	id_grupo             INTEGER AUTO_INCREMENT,
	nombre_grupo         VARCHAR(20) NULL,
	id_curso             INTEGER NULL
 AUTO_INCREMENT = ,
	PRIMARY KEY (id_grupo),
	FOREIGN KEY R_8 (id_curso) REFERENCES CURSO (id_curso)
);



CREATE TABLE GRUPO_USUARIO
(
	id_grupo             INTEGER NOT NULL,
	id_usuario           INTEGER NOT NULL,
	PRIMARY KEY (id_grupo,id_usuario),
	FOREIGN KEY R_2 (id_grupo) REFERENCES GRUPO (id_grupo),
	FOREIGN KEY R_3 (id_usuario) REFERENCES USUARIO (id_usuario)
);



CREATE TABLE TAREA
(
	id_tarea             INTEGER AUTO_INCREMENT,
	nombre_tarea         VARCHAR(20) NULL,
	fecha_entrega_tarea  VARCHAR(20) NULL,
	tipo_entrega         VARCHAR(20) NULL,
	id_curso             INTEGER NULL,
	archivo              VARCHAR(500) NULL
 AUTO_INCREMENT = ,
	PRIMARY KEY (id_tarea),
	FOREIGN KEY R_11 (id_curso) REFERENCES CURSO (id_curso)
);



CREATE TABLE ENCUESTA
(
	id_encuesta          INTEGER AUTO_INCREMENT,
	puntuacion_encuesta  CHAR(18) NULL,
	pregunta             VARCHAR(20) NULL,
	respuesta            VARCHAR(20) NULL,
	id_usuario           INTEGER NULL
 AUTO_INCREMENT = ,
	PRIMARY KEY (id_encuesta),
	FOREIGN KEY R_5 (id_usuario) REFERENCES USUARIO (id_usuario)
);


