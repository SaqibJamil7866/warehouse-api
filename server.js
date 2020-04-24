const express = require('express');
const dotenv = require('dotenv');
const bodyparser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');


// Load env vars
dotenv.config({ path: './config/.env' });

// Connect to database
connectDB();

// Route files
const auth = require('./routes/auth');
const item = require('./routes/item');
const vendor = require('./routes/vendor');
const warehousePRPO = require('./routes/warehousePRPO');
const warehousePODetails = require('./routes/wPODetails');
const warehouseInventory = require('./routes/warehouseInventory');
const warehouseInventoryLog = require('./routes/warehouseInventoryLog');

const app = express();

// Body parser
// app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());


// Enable CORS
app.use(cors());

// Auth routes
const { protect } = require('./middleware/auth');

app.use(protect);

// Mount routers
app.use('/api/auth', auth);
app.use('/api/item', item);
app.use('/api/vendor', vendor);
app.use('/api/warehouseprpo', warehousePRPO);
app.use('/api/warehousepodetails', warehousePODetails);
app.use('/api/warehouseinventory', warehouseInventory);
app.use('/api/warehouseinventorylog', warehouseInventoryLog);

// Set static folder
// app.use(express.static(path.join(__dirname, 'public')));



const PORT = process.env.PORT || 8080;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // Close server & exit process
  // server.close(() => process.exit(1));
});
