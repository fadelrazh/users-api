const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const fs = require("fs");
const path = require("path");
const YAML = require("yaml");

const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Swagger setup
const swaggerFilePath = path.join(__dirname, "../docs/swagger.json");
const swaggerFile = fs.readFileSync(swaggerFilePath, "utf8");
const swaggerDocs = YAML.parse(swaggerFile);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
app.use("/users", userRoutes);

// Server start, avoid starting during tests
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export app for testing
module.exports = app;
