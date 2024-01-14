import app from "./app";
import { Config } from "./config";

const startServer = () => {
  const { PORT } = Config;

  try {
    // eslint-disable-next-line no-console
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    process.exit(1);
  }
};

startServer();
