const express = require('express');
const compression  = require('compression')
const connectDB = require('./database');
const productRoutes = require('./route/productRoutes');
const specialPriceRoutes = require('./route/specialPriceRoutes');

const app = express();

app.use(compression());
app.use(express.json());

connectDB();

app.use(productRoutes);
app.use(specialPriceRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
