const cors = require('cors');

exports.corsOptions = cors({
    origin: '*', // Adjust according to your frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
});
