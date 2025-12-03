const required = ['API_URL'] as const;

for (const key of required) {
  if (!process.env[key]) {
    throw new Error(`Missing environment variable: ${key}`);
  }
}

export const env = {
  API_URL: process.env.API_URL!,
};
