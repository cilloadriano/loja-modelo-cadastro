-- cliente definition
-- Drop table
-- DROP TABLE cliente;
CREATE TABLE cliente (
	idcli serial4 NOT NULL,
	nomecli varchar NULL,
	endcli varchar NULL,
	limitecred float4 NULL,
	limiteparc float4 NULL
);

-- produto definition
-- Drop table
-- DROP TABLE produto;
CREATE TABLE produto (
	idprod serial4 NOT NULL,
	nomeprod varchar NULL,
	descprod varchar NULL,
	valorprod float4 NULL
);
