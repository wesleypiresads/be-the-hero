exports.up = function(knex) {
    return  knex.schema.createTable('ongs', function (table) {
            table.string('id').primary();
            table.string('name').notNullable();
            table.string('email').notNullable();
            table.string('whatsapp').notNullable();
            table.string('city').notNullable();
            table.string('uf', 2).notNullable();
        });
};

exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};

/**
 * Depois de criar as funções de configuração da tabela
 * É preciso rodar o comando: npx knex migrate:lastest
 * para gerar as tabelas...
 */
