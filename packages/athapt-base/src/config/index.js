class Config {
  port = process.env.ATHAPT_PORT || 8000;
  host = process.env.ATHAPT_HOST || '127.0.0.1';
}

export default Config;
