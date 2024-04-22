import { db } from '../../firebase';
import { IUser } from "../../types";
import { collection, query, getDocs, doc, getDoc } from 'firebase/firestore';

export const getIUsers = async (): Promise<IUser[]> => {
  try {
    const data: IUser[] = [];

    const q = query(
      collection(db, "user")
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data.push({...doc.data(), id: doc.id} as IUser);
    });

    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const getIUserById = async (id: string): Promise<IUser | null> => {
  try {
    const docRef = doc(db, 'user', id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data() as IUser;
      return { ...data, id: docSnap.id };
    } else {
      console.log('No such document!');
      return null;
    }
  } catch (error) {
    console.error('Error getting user by ID:', error);
    return null;
  }
};
