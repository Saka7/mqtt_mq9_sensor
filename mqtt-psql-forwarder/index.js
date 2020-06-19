require('dotenv').config();

const knex = require('knex');
const mqtt = require('mqtt')

const MQ9_TOPIC = 'mq9';
const MQ9_TABLE = 'mq9_sensor_value';

const connection = {
    client: 'postgresql',
    connection: {
        host: process.env.PSQL_HOST,
        port: process.env.PSQL_PORT,
        user: process.env.PSQL_USER,
        password: process.env.PSQL_PASSWORD,
        database: process.env.PSQL_DB_NAME,
    },
};

const psqlClient = knex(connection);
const mqttClient = mqtt.connect(process.env.MQTT_URL);

mqttClient.on('connect', async () => {
    await mqttClient.subscribe(MQ9_TOPIC);
    console.log(`${new Date().toISOString()}: CONNECTED TO ${MQ9_TOPIC} TOPIC`);
});

mqttClient.on('message', async (topic, msg) => {
    if (topic === MQ9_TOPIC) {
        const value = msg.toString();
        const result = await psqlClient.insert({t: new Date(), value}).into(MQ9_TABLE).returning('*');
        console.log(`${new Date().toISOString()}: ${JSON.stringify(result, null, 2)}`);
    }
});

