const {readdirSync} = require('fs');
const ascii = require('ascii-table');
let table = new ascii("Команды");
table.setHeading('Команда', ' Статус');

module.exports = (client) => {
    readdirSync('./cmds/').forEach(dir => {
        const commands = readdirSync(`./cmds/${dir}/`).filter(file => file.endsWith('.js'));
        for(let file of commands){
            let pull = require(`../cmds/${dir}/${file}`);
            if(pull.name){
                client.commands.set(pull.name, pull);
                table.addRow(file,'УСПЕШНА')
            } else {
                table.addRow(file, 'АШИБКА')
                continue;
            }if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name))
        }
    });
    
    console.log(table.toString());
}