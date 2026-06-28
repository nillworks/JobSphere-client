import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';
import { mongodbAdapter } from 'better-auth/adapters/mongodb';
import { admin, jwt } from 'better-auth/plugins';

const client = new MongoClient(process.env.DB_URI);
const db = client.db('JobSphere');

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },

  database: mongodbAdapter(db, {
    client,
  }),

  user: {
    additionalFields: {
      accountType: {
        type: 'string',
        required: false,
      },
      plan: {
        type: 'string',
        default: 'seeker_free',
      },
    },
  },
  databaseHooks: {
    user: {
      create: {
        before: (user) => {
          return {
            data: {
              ...user,
              role: user.accountType || 'seeker',
            }
          };
        },
      },
    },
  },

  plugins: [jwt(), admin()],
});
