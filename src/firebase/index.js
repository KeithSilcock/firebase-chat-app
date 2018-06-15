import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";
import config from "../config";

const app = firebase.initializeApp(config.firebase);

export const db = app.database();
export const auth = app.auth();
