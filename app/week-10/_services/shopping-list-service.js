import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const items = [];

  const itemsCollection = collection(db, "users", userId, "items");
  const itemsQuery = query(itemsCollection);
  const querySnapshot = await getDocs(itemsQuery);

  querySnapshot.forEach((docSnap) => {
    items.push({
      id: docSnap.id,
      ...docSnap.data(),
    });
  });

  return items;
}

export async function addItem(userId, item) {
  try {
    const itemsCollection = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsCollection, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error);
    return null;
  }
}