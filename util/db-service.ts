import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';
import { Place } from '../models/place';
import { Alert } from 'react-native';

// const tableName = 'todoData';
const tableName = 'placeData';

// we are using promise-based APIs
enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({ name: 'todo-data.db', location: 'default' });
};

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
    id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    title TEXT NOT NULL,
    imageUri TEXT NOT NULL,
    address TEXT NOT NULL,
    lat REAL NOT NULL,
    lon REAL NOT NULL
    );`;

  await db.executeSql(query);
};

export const getPlaces = async (db: SQLiteDatabase): Promise<Place[]> => {
  try {
    const places: Place[] = [];
    const results = await db.executeSql(`SELECT * FROM ${tableName}`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        // places.push(result.rows.item(index))
        places.push(new Place(
          result.rows.item(index).title,
          result.rows.item(index).imageUri,
          result.rows.item(index).address,
          {
            lat: result.rows.item(index).lat,
            lon: result.rows.item(index).lon,
          },
          result.rows.item(index).id
        ))
      }
    });
    return places;
  } catch (error) {
    Alert.alert('Errore recupero Places',error);
  }
};

export const savePlace = async (db: SQLiteDatabase, place: Place) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}(title, imageUri, address, lat, lon) values (?,?,?,?,?)`;
    try {
      await db.executeSql(insertQuery, [
        place.title,
        place.imageUri,
        place.address,
        place.coords.lat,
        place.coords.lon,
      ]);
      Alert.alert('Salvataggio effettuato', 'Place salvato con successo');
    } catch (error) {
      Alert.alert('Errore salvataggio place: ', error);
    }
};

export const deletePlace = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};