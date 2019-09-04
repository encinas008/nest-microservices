import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () : Promise<typeof mongoose> => 
    await mongoose.connect('mongodb://mongo_db:27017/db_patients',
    { useNewUrlParser: true, useFindAndModify: false})
  }
]
