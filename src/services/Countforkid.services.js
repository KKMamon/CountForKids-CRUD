import { db } from "../firebase";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const countCollectionRef = collection(db, "counts");


class CountDataService {
  addCounts = (newCount) => {
    return addDoc(countCollectionRef, newCount);
  };

  updateCount = (id, updatedCount) => {
    const countDoc = doc(db, "counts", id);
    return updateDoc(countDoc, updatedCount);
  };

  deleteCount = (id) => {
    const countDoc = doc(db, "counts", id);
    return deleteDoc(countDoc);
  };

  getAllCounts = () => {
    return getDocs(countCollectionRef);
  };

  getCount = (id) => {
    const countDoc = doc(db, "counts", id);
    return getDoc(countDoc);
  };

}

export default new CountDataService();